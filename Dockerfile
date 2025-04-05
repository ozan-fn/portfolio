FROM oven/bun:alpine as base
WORKDIR /app

FROM base
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build
EXPOSE 3000
ENTRYPOINT [ "bun", "start" ]
