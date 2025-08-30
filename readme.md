# Restaurant Backend

This is a simple backend server for a restaurant application built using **Node.js** and **Express**.

## Features

- Basic Express server setup
- Logging HTTP requests using [morgan](https://www.npmjs.com/package/morgan)
- Parses incoming JSON requests
- Root endpoint (`/`) returns a simple HTML message

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/PramodAB123/Restaurant_backend.git
   cd Restaurant_backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Environment Variables

This project uses environment variables for configuration. Follow these steps to set up your environment:

1. **Create a `.env` file** in the root directory:
   ```bash
   # Server Configuration
   PORT=8080
   NODE_ENV=development
   
   # Database Configuration
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=restaurant_db
   DB_USER=your_username
   DB_PASSWORD=your_password
   
   # JWT Configuration
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRES_IN=24h
   
   # Other Configuration
   CORS_ORIGIN=http://localhost:3000
   ```

2. **Important**: Never commit your `.env` file to GitHub. It's already added to `.gitignore`.

3. **For deployment**: Set environment variables in your hosting platform (Heroku, Vercel, etc.)

### Running the Server

Start the server with:
