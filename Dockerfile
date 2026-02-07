# Use stable Node.js LTS
FROM node:24-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY src ./src

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "src/index.js"]
