FROM node:15.12.0-alpine
ENV NODE_ENV dev

# Add a work directory
WORKDIR /app

# Cache and Install dependencies
COPY package.json .
RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]