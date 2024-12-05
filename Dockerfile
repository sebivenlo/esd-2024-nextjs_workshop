FROM node:18-alpine AS base

# Set the working directory inside the container
WORKDIR /app

# Copy only package files for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the default Next.js development port
EXPOSE 3000

CMD ["npm", "run", "dev"]
