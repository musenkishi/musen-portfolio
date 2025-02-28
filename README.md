# Musen Portfolio

This is the source code for [musen.dev](https://www.musen.dev), my personal portfolio website built with [Next.js](https://nextjs.org).

## Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun
- Docker and Docker Compose (optional, for containerized deployment)

## Running Locally

1. Clone the repository:

```bash
git clone https://github.com/musenkishi/musen-portfolio.git
cd musen-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Running with Docker Compose

1. Create a `docker-compose.yml` file:

```yaml
services:
  portfolio:
    container_name: portfolio
    image: ghcr.io/musenkishi/musen-portfolio:main
    ports:
      - ${HOST_PORT}:3000
    restart: unless-stopped
    env_file:
      - stack.env
```

2. Start the container:

```bash
docker compose up -d
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Development

The site will auto-update as you make changes to the files. The main page can be edited at `app/page.tsx`.

This project uses:

- [Next.js](https://nextjs.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) with [Geist](https://vercel.com/font)
- GitHub Actions for CI/CD
- GitHub Container Registry for Docker images

## Deployment

The site is automatically deployed to production when changes are pushed to the main branch. The Docker image is built and pushed to GitHub Container Registry using GitHub Actions.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## License

[MIT License](LICENSE)
