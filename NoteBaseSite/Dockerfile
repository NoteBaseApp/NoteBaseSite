# Base image
FROM node:20 as build

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY . .

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Production image
FROM nginx:1.21

# Copy built app from previous stage
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
