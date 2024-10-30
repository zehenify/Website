# Use the official Node.js image as the base image for building
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy only package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a smaller image for production
FROM node:18-alpine AS production

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/package*.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.js ./

# Install only production dependencies
RUN npm install --production

# Expose port 3000 to the outside world
EXPOSE 3000

# Set the environment variable to production
ENV NODE_ENV=production

# Start the Next.js application
CMD ["npm", "start"]
