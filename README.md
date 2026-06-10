# 🚀 Task Management Application

A full-stack MERN Task Management Application that helps users efficiently organize, manage, and track their daily tasks. The application provides secure authentication, task creation, status management, and a responsive user experience.

## 🌐 Live Demo

Frontend:  https://your-vercel-link.vercel.app

Backend API: https://task-management-o87x.onrender.com

## 📂 GitHub Repository

Repository Link: https://github.com/sumit-01pr/task-management-app

---

## 📖 Features

### 👤 User Features

* User Registration & Login
* JWT-based Authentication
* Create New Tasks
* Edit Existing Tasks
* Delete Tasks
* Mark Tasks as Completed or Pending
* View All Tasks
* Responsive Dashboard

### 🔒 Security Features

* JWT Authentication
* Protected Routes
* Password Encryption
* Authorization Middleware

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS3 / Tailwind CSS
* JavaScript (ES6+)

### Backend

* Node.js
* Express.js
* RESTful APIs

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcrypt.js

### Tools & Deployment

* Git & GitHub
* Postman
* Vercel
* Render

---

## 📁 Project Structure

```text
task-management/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── config/
│
├── screenshots/
├── README.md
└── package.json
```

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/sumit-01pr/task-management-app.git
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Install Backend Dependencies

```bash
cd server
npm install
```

### Configure Environment Variables

Create a `.env` file inside the server directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

### Run Backend

```bash
npm start
```

### Run Frontend

```bash
npm run dev
```

---

## 🔗 API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Tasks

```http
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
PATCH  /api/tasks/:id/status
```

---

## 🎯 Learning Outcomes

* Full Stack MERN Development
* RESTful API Development
* JWT Authentication & Authorization
* MongoDB Data Modeling
* CRUD Operations
* State Management in React
* Deployment using Vercel & Render
* Git & GitHub Workflow

---

## 🚀 Future Enhancements

* Task Categories
* Task Priorities
* Due Date Reminders
* Drag & Drop Task Management
* Team Collaboration
* Email Notifications

---

👨‍💻 Author

Sumit Prajapati

📧 Email: [sumitprajapati03935@gmail.com](mailto:sumitprajapati03935@gmail.com)

💼 LinkedIn: https://www.linkedin.com/in/sumit-prajapati-a70a50248/

🐙 GitHub: https://github.com/sumit-01pr

⭐ If you found this project useful, consider giving it a star on GitHub.
