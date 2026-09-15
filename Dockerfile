# --- Stage 1: Build using Bun ---
FROM oven/bun:1.4 AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

# Wildcard handles both bun.lock and bun.lockb
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

# --- Stage 2: Hardened Distroless Production Runner ---
FROM gcr.io/distroless/nodejs22-debian12:nonroot AS runner
WORKDIR /app

ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME="0.0.0.0"

# Copy Next.js standalone build output
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nonroot:nonroot /app/.next/standalone ./
COPY --from=builder --chown=nonroot:nonroot /app/.next/static ./.next/static

USER nonroot
EXPOSE 3000

CMD ["server.js"]