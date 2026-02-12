# 📝 Notes CRUD API

A RESTful Notes CRUD API built using **Node.js**, **Express**, and **MongoDB**.

This API allows users to create, read, update, and delete notes.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- dotenv

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

git clone https://github.com/subhadipm08/notes-crud-api.git

cd notes-crud-api

### 2️⃣ Install dependencies

npm install

### 3️⃣ Create `.env` file in root directory

MONGO_URI=your_mongodb_connection_string

### 4️⃣ Start the server

node server.js

Server will run at:

http://localhost:3000

---

## 📌 API Endpoints

### 🔹 Create Note

**POST** `/notes`

```json
{
  "title": "Sample Note",
  "description": "This is a note."
}
```

### 🔹 Get All Notes

**GET** `/notes`

### 🔹 Update Note

**PATCH** `/notes/:id`

```json
{
  "title": "Updated Title"
}
```

### 🔹 Delete Note

**DELETE** `/notes/:id`

---

## 🛡 Features

- Environment variable configuration using dotenv

- MongoDB Atlas integration

- Proper error handling

- RESTful API structure

- Timestamps support

---

### 👨‍💻 Author

**Subhadip Mudi**
