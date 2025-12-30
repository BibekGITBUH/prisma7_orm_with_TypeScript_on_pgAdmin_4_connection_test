# ---------- BUILD STAGE ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Install deps first (cache-friendly)
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Prisma client
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL
RUN npx prisma generate

# Build TS → JS
RUN npm run build


# ---------- RUN STAGE ----------
FROM node:20-alpine

WORKDIR /app

# Copy only what is needed
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY package*.json ./

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "dist/src/server.js"]
