# Netflix Clone Backend API
=====================================

## Project Overview

The Netflix Clone Backend API facilitates user authentication and content browsing for a movie streaming application. It handles user registration, login/sign-in, and serves content based on user sessions.

## Technologies Used

- Node.js
- Express.js
- MongoDB (or your preferred database)
- JSON Web Tokens (JWT) for authentication
- API Endpoints
- User Routes

- Register User:

- URL: POST /api/v1/user/register Description: Registers a new user in the system. Request Body:

json
```
{
  "fullName": "example",
  "email": "example@example.com",
  "password": "password"
}

- Response:

json
```
{
  "success": true,
  "message": "User registered successfully"
}

- Login User:

- URL: POST /api/v1/user/login Description: Logs in an existing user and returns a JWT token for authentication. Request Body:

json
```

{
  "email": "example@example.com",
  "password": "password"
}
- Response:

json
```

{
  "success": true,
  "token": "<jwt_token>"
}

- Browse Content:

- URL: GET /api/v1/user/browse Description: Retrieves the home page content based on the user's session (authentication required).

## Installation

1. Clone the repository:

git clone https://github.com/nareshkumarnandam/netflix-clone-backend.git
cd netflix-clone-backend

2. Install dependencies:

npm install
Set up environment variables:
Create a .env file in the root directory of the project. Define environment variables such as database connection URI, JWT secret, etc.

3. Start the server:

npm start
The API will be accessible at http://localhost:3000.

## Usage
Ensure you have MongoDB installed and running. Modify the .env file with your specific configurations before starting the server. Use tools like Postman or curl to interact with the API endpoints.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

Fork the repository and create a new branch.
Make your changes and test thoroughly.
Submit a pull request detailing the changes and improvements made.