FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install
RUN apt-get update && apt-get install -y procps

# Copy the rest of the app
COPY . .

# Expose port
EXPOSE 3000

# Default command
CMD ["npm", "run", "dev"]
