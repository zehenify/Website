FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Install 'serve' to serve the app in production
RUN npm install -g serve

# Expose port 3000 to the outside world
EXPOSE 3000
@@ -26,4 +38,4 @@
ENV NODE_ENV=production

# Start the Next.js application
CMD ["npm", "run", "start"]
