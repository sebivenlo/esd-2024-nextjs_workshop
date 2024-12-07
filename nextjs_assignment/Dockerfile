# Use Node.js 18 image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN apt-get update && apt-get install -y procps
RUN echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf && sysctl -p


# Copy project files
COPY . .

# Expose the development server port
EXPOSE 3000

# Run Next.js in development mode
CMD ["npm", "run", "dev"]
