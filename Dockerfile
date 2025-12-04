FROM oven/bun:1.2 AS base
# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
# Install dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
# make node_modules readable for all users
# see https://github.com/oven-sh/bun/issues/10331 why this is needed
RUN chmod -R a+r ./node_modules

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Disable telemetry during the build
ENV NEXT_TELEMETRY_DISABLED=1
RUN bun run build

# Production image, copy all the files and run next
FROM oven/bun:1.2-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
# Disable telemetry
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Copy the public directory to include static assets
COPY --from=builder /app/public ./public

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["bun", "server.js", "--target=bun" ]