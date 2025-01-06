# Stage 1: Build
FROM node:18.18.0-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

# Copy the entire project
COPY . .

# Build the app
RUN pnpm build

# Remove dev dependencies to optimize image size
RUN pnpm prune --prod

# Stage 2: Deployment
FROM node:18.18.0-alpine AS deployer

# Set working directory
WORKDIR /app

# Copy build and production files from the builder stage
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

# Expose the port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production

# Command to run the app
CMD ["node", "build"]
