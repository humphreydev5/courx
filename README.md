# Courx - A Scalable Learning Management System (LMS)

![CourX Landing image](https://github.com/humphreydev5/courx/blob/main/client/public/Screenshot%202025-01-06%20at%2016.05.31.png)


## Overview

Courx is a cutting-edge Learning Management System (LMS) designed to streamline the creation, management, and delivery of online education. The platform empowers instructors to create engaging courses, manage student progress, and facilitate seamless communication, while learners can access high-quality educational content with ease.

Courx aims to provide a scalable and user-friendly solution for educational institutions, corporate training programs, and individual educators.


## Features

### For Instructors:
- **Course Creation:** Easily upload course materials, videos, and assignments.
- **Student Management:** Track learner progress and provide feedback.
- **Revenue Generation:** Monetize courses with integrated payment systems.

### For Learners:
- **Engaging Interface:** Access courses with an intuitive and responsive design.
- **Progress Tracking:** Monitor your learning journey with progress indicators.
- **Secure Payments:** Enroll in courses with confidence using secure payment methods.

### Platform Highlights:
- **Authentication:** Secure user login and account management powered by Clerk.
- **Payment Integration:** Stripe integration for seamless payment processing.
- **Scalability:** Hosted on AWS for high availability and performance.


## Technologies Used

### Frontend
- **Next.js:** Fast and scalable React framework.
- **Redux Toolkit:** Efficient state management.
- **Tailwind CSS:** Modern utility-first CSS framework.
- **React Hook Form & Zod:** Robust form validation.

### Backend
- **Node.js:** JavaScript runtime for building the server-side application.
- **Express.js:** Backend framework for API development.
- **DynamoDB:** Scalable NoSQL database for data storage.
- **Docker:** Containerization for consistent and portable deployment.

### Cloud Services
- **AWS Lambda:** Serverless compute for backend operations.
- **AWS S3:** Secure file storage for course materials.
- **AWS CloudFront:** Global content delivery for optimized performance.


## Installation

### Prerequisites
- Node.js (`v16` or later)
- Docker (for containerized deployment)
- AWS Account (for cloud hosting)
- Stripe Account (for payment processing)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/username/courx.git
   ```

## Navigate to the project directory:
   ```bash
   cd courx
   ```

 - ### Navigate to the frontend directory:
      ```bash
      cd client
      ```

 - ### Navigate to the backend directory:
      ```bash
      cd server
      ```

## Install dependencies for both the frontend and backend directories independently:
```bash
npm install
```

## Set up environment variables:
Create a `.env` file in the root directory and add the necessary keys (e.g., `API keys`, `database URIs`.

## Start the development server:
   ```bash
   npm run dev
   ```

## Deployment:
### Local Deployment
- Use Docker to create a local environment:
`docker-compose up`

# Cloud Deployment:
- Deploy the frontend using `Vercel` for ease of use.
- Deploy the backend using `AWS Lambda` and `API Gateway`.
- Use `AWS S3` for file storage and `CloudFront` for content delivery.


# Contribution Guidelines

We welcome contributions to enhance Courx. 
`To contribute:`

1. **Fork** the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
4. Push to your branch:
   ```bash
   git push origin feature-name
5. Open a pull request.


# License
Courx is licensed under the [MIT License](https://chatgpt.com/c/LICENSE). `You are free to use`, modify, and distribute the project under the license terms.


Contact
For inquiries or support, please contact:

- Author: Humphrey Ikhalea
- Email: [humphreyikhalea@gmail.com](mailto:humphreyikhalea@gmail.com)
- LinkedIn: [humphreydev](https://www.linkedin.com/in/humphreydev)


# Acknowledgments
- Special thanks to the ALX Webstack specialization for the inspiration and guidance.
- Open-source communities and tools that made this project possible.


# Future Plans
Courx aims to continue evolving to meet the needs of educators and learners. Planned enhancements include:

- Mobile App Development: Provide native apps for iOS and Android platforms.
- Gamification Features: Introduce badges, leaderboards, and achievement tracking to improve learner engagement.
- Advanced Analytics: Enable data-driven insights for both instructors and administrators.
- Multi-Language Support: Expand accessibility with support for multiple languages.
- Integration with Third-Party Tools: Connect with popular tools like Google Classroom, Slack, and Zoom.


> Let’s build the future of education with `Courx`!
