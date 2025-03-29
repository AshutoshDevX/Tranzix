# Tranzix - Banking Application

# Features
# - User Authentication: Secure sign-up and sign-in process using JWT tokens.
# - Account Management: Users can create and manage their bank accounts.
# - Money Transfer: Send money from your account to another account holder within the platform.
# - Responsive Interface: Built with React and styled to be mobile-friendly.

# Tech Stack
# - Frontend: React.js (Vite for development speed)
# - Backend: Node.js with Express.js
# - Database: MongoDB
# - Authentication: JSON Web Tokens (JWT)


# Installation

# 1. Clone the repository
git clone https://github.com/your-username/tranzix.git
cd tranzix

# 2. Install dependencies

# For Frontend
cd frontend
npm install

# For Backend
cd backend
npm install

# 3. Set up environment variables
# Create a .env file in the server directory and add the following variables:
echo "MONGO_URI=your-mongo-db-uri" >> .env
echo "JWT_SECRET=your-secret-key" >> .env
echo "PORT=3000" >> .env

# 4. Run the application

# Start the backend server
cd backend
node server.js

# Start the frontend development server
cd fronted
npm run dev

# Now, your application should be running at:
# Frontend: http://localhost:5173
# Backend API: http://localhost:3000

# Authentication
# Example of using the JWT token in API requests


# License
# This project is licensed under the MIT License - see the LICENSE file for details.
