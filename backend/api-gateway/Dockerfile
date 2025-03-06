# Use Node.js as base image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose the port (change this if necessary)
EXPOSE 3000

# Start the API Gateway
CMD ["npm", "run", "start"]
