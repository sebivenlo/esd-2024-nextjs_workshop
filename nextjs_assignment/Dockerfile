# Use Node.js 18 image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose the development server port
EXPOSE 3000

# Run Next.js in development mode
CMD ["npm", "run", "dev"]
