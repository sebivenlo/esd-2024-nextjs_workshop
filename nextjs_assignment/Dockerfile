# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy only the package files for dependency installation
COPY package*.json ./

# Install dependencies (including development dependencies for dev mode)
RUN npm install --verbose

# Ensure `next` is available in the PATH
ENV PATH="/app/node_modules/.bin:${PATH}"

# Install additional system packages
RUN apt-get update && apt-get install -y procps

# Copy the application code
COPY . .

# Expose the port used by the app
EXPOSE 3000

# Default command to start the Next.js development server
CMD ["npm", "run", "dev"]
