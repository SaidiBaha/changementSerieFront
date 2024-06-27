# Stage 1: Build the Angular application in Node.js
FROM node:16-alpine as builder

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install -f

# Copy the rest of your application code
COPY . .

# Build the Angular application
RUN npm run build

# Stage 2: Serve the built application using Nginx
FROM nginx:alpine

# Copy the build output from the builder stage
COPY --from=builder /usr/src/app/dist/team-planning /usr/share/nginx/html

# Expose port 80 to the host so you can access the app
EXPOSE 80

# Start Nginx and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]
