# CourX Backend  

Welcome to the CourX Backend Repository, the server-side component of a scalable, enterprise-grade Learning Management System (LMS).  

This project uses modern backend technologies and cloud solutions to provide robust, efficient, and secure services for the CourX platform. Below, you'll find detailed information about the tools, technologies, and resources used to build the CourX backend.  

---

## 🚀 Tech Stack  

### Backend Technologies  
- **Node.js**: JavaScript runtime for scalable and efficient server-side development.  
- **Express.js**: Web application framework for building RESTful APIs.  
- **Dynamoose**: A modeling library for DynamoDB.  

### Cloud Services  
- **AWS Lambda**: Serverless computing for efficient resource usage.  
- **API Gateway**: Managed API management and integration.  
- **DynamoDB**: NoSQL database for fast and flexible data storage.  
- **AWS S3**: Scalable object storage for file management.  
- **AWS CloudFront**: Content Delivery Network (CDN) for fast and secure content delivery.  

### Development Tools  
- **Docker**: Containerization for consistent development and deployment environments.  
- **Local DynamoDB**: For local testing and development of DynamoDB integrations.  
- **NoSQL Workbench**: Visual tool for designing and managing DynamoDB data models.  
- **Postman**: API testing and collaboration.  

### Authentication  
- **Clerk**: Simplified authentication for secure user management.  

---

## 🌟 Features  

- **Serverless Architecture**: Utilizes AWS Lambda for cost efficiency and scalability.  
- **RESTful APIs**: Built with Express.js for a robust and well-structured backend.  
- **Scalable Data Management**: Powered by DynamoDB and Dynamoose.  
- **Secure File Storage**: Managed through AWS S3 with CloudFront integration.  
- **Seamless Deployment**: Docker and AWS ECR for consistent deployments.  

---

## 🔗 Useful Links  

- **[Local DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html)** 🗄  
- **[NoSQL Workbench](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/workbench.html)** 🛠  
- **[Postman](https://www.postman.com/downloads/)** 🌐  
- **[Dynamoose](https://dynamoosejs.com/guide/Dynamoose)** ⚡  
- **[AWS Free Tier](https://aws.amazon.com/free/)** 💸  
- **[AWS S3](https://aws.amazon.com/s3/)** 📦  
- **[AWS CloudFront](https://aws.amazon.com/cloudfront/)** 🌍  
- **[AWS ECR](https://aws.amazon.com/ecr/)** 🐳  
- **[Docker](https://www.docker.com/)** 🏗  

---

## 📂 File Structure  

| **Directory**      | **Description**                                      |
|---------------------|------------------------------------------------------|
| `courX-backend/`    | Root directory of the backend application.           |
| `src/`              | Source directory containing the main application code. |
| `src/routes/`       | Defines API endpoints and their handlers.            |
| `src/controllers/`  | Business logic for the API endpoints.                |
| `src/models/`       | Dynamoose models for DynamoDB integration.           |
| `src/seed/`         | Scripts and data for initializing or populating the database.   |
| `src/utils/`        | Utility functions and shared logic.                  |

---

## 🏗️ Setup and Installation  

### Requirements  
- **Node.js** (v16 or later)  
- **Docker**  
- **AWS CLI**  

### Installation Steps  

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/humphreydev5/courx-backend.git  
   cd courx-backend  
