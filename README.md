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
```plaintext
myapp/
├── public/
│   └── index.html
├── server.js
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Installation

1. **Clone the repository:**
   git clone https://github.com/yourusername/NodeJS-Docker-Mongo-Express-Demo.git
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
