# Use an official Node.js runtime as a parent image
FROM node:14

# Set environment variables
ENV NODE_ENV=production

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining application files to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port that the app will run on (default for Create React App is 3000)
EXPOSE 3000

# Command to run on container start
CMD ["npm", "start"]
