# ./frontend/Dockerfile
# Same as above, this sets the base image for the Docker container.
FROM node:lts

# Sets the working directory inside the Docker container.
WORKDIR /usr/src/app  

# Copies the package.json and package-lock.json (if available) files to the Docker container's working directory.
COPY package*.json ./  

# Runs npm install to install all the dependencies defined in the package.json file. 
RUN npm install  

# Copies everything from your current directory (on your local machine) to the Docker container's working directory.
COPY . .  

# Tells Docker to listen on port 3000 at runtime. 
EXPOSE 3000  

# Provides the default command to run when the Docker container starts. In this case, it's starting the React application.
CMD [ "npm", "start" ]  