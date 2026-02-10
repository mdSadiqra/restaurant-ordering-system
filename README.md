# 📘 README.md

## Restaurant Ordering System

---

## 📌 Project Overview

**Restaurant Ordering System** is a web-based application that allows restaurants to manage digital menus and receive customer orders through QR codes.

Customers scan a QR code, view the menu, and place orders.
Restaurants receive orders in real time through a dashboard.

This project is built using **React (Frontend)** and **FastAPI (Backend)**.

---

## 🧱 Tech Stack

### Frontend

* React (Vite)
* JavaScript
* Axios
* React Router
* Runs on: `localhost:5173`

### Backend

* Python 3
* FastAPI
* Uvicorn
* Runs on: `localhost:8000`

### Database (to be added)

* MongoDB (Atlas)

---

## 📁 Project Structure

```
restaurant-ordering-system/
│
├── frontend/      # React frontend
├── backend/       # FastAPI backend
├── docs/          # Documentation
├── README.md
└── .gitignore
```

---

## ⚙️ Prerequisites (IMPORTANT)

Make sure these are installed **before running the project**:

* Node.js (LTS)
* Python 3.10+
* Git
* Internet connection

---

## ▶️ How to Run the Project (Step by Step)

### 1️⃣ Run Frontend (React)

Open terminal and run:

```powershell
cd frontend
npm install
npm run dev
```

Open browser:

```
http://localhost:5173
```

---

### 2️⃣ Run Backend (FastAPI)

Open **another terminal** and run:

```powershell
cd backend
venv\Scripts\Activate.ps1
python -m uvicorn app.main:app --reload
```

Open browser:

```
http://127.0.0.1:8000
```

API Docs:

```
http://127.0.0.1:8000/docs
```

---

## 👥 Team Instructions (VERY IMPORTANT)

### 🔹 General Rules

* Do **not** push directly to `main`
* Always work on your **own branch**
* Pull latest code before starting work
* Do not push `.env` or `node_modules`

---

### 🔹 Recommended Branches

```
main        → stable code
dev         → development branch
feature-*   → individual features
```

Example:

```
feature-frontend
feature-backend
feature-auth
```

---

### 🔹 Daily Team Workflow

1. Pull latest code

```bash
git pull origin dev
```

2. Work on your feature

3. Commit changes

```bash
git add .
git commit -m "Added login UI"
```

4. Push your branch

```bash
git push origin feature-frontend
```

5. Create Pull Request → `dev`

---

## 🧪 Current Project Status

### ✅ Completed

* Project setup
* Frontend running
* Backend running
* Folder structure ready

### ⏳ In Progress

* Frontend UI pages
* API integration
* Database connection

### 🔜 Upcoming

* Restaurant registration
* Authentication (JWT)
* Menu management
* Order placement

---

## 🚀 How to Stop Servers

### Stop frontend

```
CTRL + C
```

### Stop backend

```
CTRL + C
```

---

## 📞 Support for Team

If something breaks:

1. Check terminal errors
2. Restart server
3. Pull latest code
4. Ask team lead

---

## 📌 Notes for Evaluators / Faculty

* This is a **modular, scalable system**
* Backend uses REST APIs
* Frontend follows component-based architecture
* Suitable for real-world SaaS extension

---

## ✅ Conclusion

This README explains:

* What the project is
* How to run it
* How the team should work
* Current status & future scope

---
