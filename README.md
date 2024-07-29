# NodeJS-Docker-Mongo-Express Demo

## Introduction
Welcome to my first DevOps project! This project demonstrates the integration of a simple Node.js application with a MongoDB database using Docker containers. Additionally, it includes a Mongo Express container to provide a user-friendly UI for managing the MongoDB database. This setup is designed to simulate a local development process and provide a foundational understanding of how Docker containers are utilized in development.

## Project Overview
1. **Node.js Application**: A basic Node.js backend application with a simple HTML frontend.
2. **Docker Integration**: Using Docker to containerize both the Node.js application and the MongoDB database.
3. **Mongo Express**: A UI for MongoDB to simplify database management without using terminal commands.

## Features
- **Local Development**: Simulate a local development environment using Docker.
- **Node.js Backend**: Develop a simple backend application using Node.js and JavaScript.
- **MongoDB Database**: Integrate with a MongoDB database containerized using Docker.
- **Mongo Express UI**: Utilize Mongo Express for a user-friendly interface to interact with MongoDB.

## Project Structure

NodeJS-Docker-Mongo-Express-Demo/
├── public/
│   └── index.html
│   └── Assetes
│         └── 1.jpeg
├── server.js
├── .gitignore
├── package.json
├── package-lock.json
├── Dockerfile
├── docker-compose.yml
└── README.md

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Installation

1. **Clone the repository:**
   git clone https://github.com/hamzahashmi3/NodeJS-Docker-Mongo-Express-Demo.git
   cd NodeJS-Docker-Mongo-Express-Demo

2. **Install Node.js dependencies:**
   npm install

3. **Create Docker Compose file (`docker-compose.yml`):**
   version: '3'
   services:
     app:
       build: .
       ports:
         - '3000:3000'
       links:
         - mongo
     mongo:
       image: mongo
       ports:
         - '27017:27017'
     mongo-express:
       image: mongo-express
       ports:
         - '8081:8081'
       environment:
         - ME_CONFIG_MONGODB_SERVER=mongo

4. **Create Dockerfile:**
   FROM node:14

   WORKDIR /usr/src/app

   COPY package*.json ./

   RUN npm install

   COPY . .

   EXPOSE 3000

   CMD ["node", "server.js"]

5. **Start the Docker containers:**
   docker-compose up

6. **Access the application:**
   - Node.js App: [http://localhost:3000](http://localhost:3000)
   - Mongo Express: [http://localhost:8081](http://localhost:8081)

### Usage

- Modify the `index.html` file in the `public` directory to update the frontend.
- Edit the `server.js` file to add new routes or functionality to the backend.
- Use Mongo Express to manage the MongoDB database through a web interface.

### Conclusion
This project provides a basic setup for developing a Node.js application with a MongoDB database using Docker containers. It serves as a foundational project for understanding the integration of different technologies and how Docker can be used to streamline the development process.

Feel free to fork this repository, suggest improvements, or use it as a starting point for your own projects.



### Additional Steps

1. **Set Up Node.js App:**
   - Create `index.html` in the `public` directory.
   - Create `server.js` file with basic Node.js server code.
2. **Build and Test the Docker Containers:**
   - Ensure that the Docker containers are correctly set up and running.
3. **Deploy Online:**
   - Use a cloud service (e.g., AWS, Heroku, DigitalOcean) to deploy your Dockerized application.

This README file will guide how to set up and run your project, providing a clear overview of what my project does and how to get started with it.


### How to Connect Docker and Use MongoDB Image on Ubuntu

# Step 1: Install Docker

       . First, you need to install Docker on your Ubuntu system. You can do this by running the following commands:

·         sudo apt update

·         sudo apt install docker.io -y

·         sudo systemctl start docker

·         sudo systemctl enable docker


# Step 2: Go to Docker Hub

      . Navigate to Docker Hub (https://hub.docker.com/) in your web browser.

 
# Step 3: Search for MongoDB

       . In the search bar on Docker Hub, type "mongo" to find the official MongoDB image.


# Step 4: Install MongoDB and Mongo Express

       . Pull the MongoDB and Mongo Express images from Docker Hub using the following commands:

·         sudo docker pull mongo

·         sudo docker pull mongo-express

# Step 5: Check If Images Are Created

       . Verify that the images have been downloaded successfully by listing all Docker images:

·         sudo docker images

# Step 6: Create a Network for MongoDB

       . Create a Docker network to allow MongoDB and Mongo Express to communicate:

·         sudo docker network create mongo-network

# Step 7: Check Network Creation

       . Ensure that the network has been created by listing all Docker networks:

·         sudo docker network ls

# Step 8: Configure MongoDB in Docker

Run the MongoDB container with the following command:

·         sudo docker run -d \

-p 27017:27017 --network mongo-network \

--name mongodb \

-e MONGO_INITDB_ROOT_USERNAME=admin \

-e MONGO_INITDB_ROOT_PASSWORD=password \

mongo

# Step 9: Configure Mongo Express

       . Run the Mongo Express container with the following command:

·         sudo docker run -d -p 8081:8081 \

-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \

-e ME_CONFIG_MONGODB_ADMINPASSWORD=password \

--network mongo-network --name mongo-express \

-e ME_CONFIG_MONGODB_SERVER=mongodb \

mongo-express

# Step 10: Check Docker Logs

       . List all running containers to verify that both MongoDB and Mongo Express are running:

·         sudo docker ps

# Step 11: See the Docker Logs of Specific Container

View the logs of the MongoDB container to ensure it is running correctly:

·         sudo docker logs <container_id>

Replace `<container_id>` with the actual container ID of the MongoDB instance, which you can find from the output of the `sudo docker ps` command.

# Step 12: Run the Docker MongoDB in localhost

·         Localhost:8081

·         Username: admin

·         Password: pass