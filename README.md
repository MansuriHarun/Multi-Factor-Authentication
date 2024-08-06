# Multi-Factor-Authentication
This project is a simple multi-factor authentication (MFA) application built with the MERN stack (MongoDB, Express, React, Node.js). The application allows users to register, log in with their email and password, and verify their identity with a one-time password (OTP) sent to their email.

## Features

- User registration
- User login with email and password
- OTP verification for enhanced security

## Prerequisites

Make sure you have the following installed on your system:

- Node.js
- MongoDB

## Getting Started

### Backend Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/MansuriHarun/Multi-Factor-Authentication
    ```

2. **Install backend dependencies:**

    ```bash
    cd server
    npm install
    ```

3. **Configure your environment:**

    Create a `.env` file in the `server` directory and add the following variables:

    ```
    PORT
    MONGODB_URL
    SMTP_HOST
    SMTP_PORT
    SMTP_MAIL
    SMTP_PASSWORD
    ```

4. **Start the backend server:**

    ```bash
    npm run dev
    ```

    The backend server will run on `http://localhost:8000`.

### Frontend Setup

1. **Navigate to the `client` directory:**

    ```bash
    cd client
    ```

2. **Install frontend dependencies:**

    ```bash
    npm install
    ```

3. **Start the frontend development server:**

    ```bash
    npm run dev
    ```

    The frontend development server will run on `http://localhost:5173`.

## Contributing

Feel free to submit issues and pull requests for new features, bug fixes, and improvements.

## Show Your Support

If you like this project, please give it a ⭐️! Your support is greatly appreciated.
