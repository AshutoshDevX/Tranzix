# 🚀 Tranzix - Banking Application

Tranzix is a **secure and user-friendly** banking application that allows users to create and manage bank accounts, transfer money, and experience a seamless digital banking solution. The application ensures **data security** and **smooth user interaction** through modern authentication mechanisms and a responsive frontend.

## ✨ Features

- 🔐 **User Authentication**: Secure sign-up and sign-in process using **JWT tokens**.
- 🏦 **Account Management**: Users can create, view, and manage their bank accounts.
- 💸 **Money Transfer**: Easily transfer funds to another account holder within the platform.
- 📱 **Responsive Interface**: Built with **React.js**, ensuring mobile-friendly and intuitive UI.
- 🛡 **Security**: User data is protected using **hashed passwords** and **token-based authentication**.

## 🛠 Tech Stack

- ⚛️ **Frontend**: React.js (Vite for fast development)
- 🚀 **Backend**: Node.js with Express.js
- 🗄 **Database**: MongoDB
- 🔑 **Authentication**: JSON Web Tokens (JWT)

## 📷 Screenshots

![Browse Page Screenshot](https://github.com/AshutoshDevX/Tranzix/blob/main/frontend/assets/landing.png)

![SignUp Page Screenshot](https://github.com/AshutoshDevX/Tranzix/blob/main/frontend/assets/SignUp.png)

![dashboard Page Screenshot](https://github.com/AshutoshDevX/Tranzix/blob/main/frontend/assets/dashboard.png)

## 🚀 Installation

### 1️⃣ Clone the repository
```sh
git clone https://github.com/AshutoshDevX/tranzix.git
cd tranzix
```

### 2️⃣ Install dependencies

#### Frontend Setup
```sh
cd frontend
npm install
```

#### Backend Setup
```sh
cd backend
npm install
```

### 3️⃣ Set up environment variables
Create a `.env` file in the `backend` directory and add the following variables:
```sh
MONGO_URI=your-mongo-db-uri
JWT_SECRET=your-secret-key
PORT=3000
```

### 4️⃣ Run the application

#### Start the backend server
```sh
cd backend
node server.js
```

#### Start the frontend development server
```sh
cd frontend
npm run dev
```

### 5️⃣ Access the application
- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:3000](http://localhost:3000)

## 📜 License
This project is licensed under the **MIT License** - see the [LICENSE](LICENCE) file for details.

