# 🌑 SoftEn Lunar

## SF222 Software Engineering Models and Analysis – MVC Project

**SoftEn Lunar** is a creative e-commerce prototype selling fictional products.  
Built using:  
- 🐍 **Django** (Backend)  
- ⚛️ **Next.js** (Frontend)  

---

### 🧩 MVC Architecture

| Component   | Technology Used               | Description                                                                 |
|------------|-------------------------------|-----------------------------------------------------------------------------|
| **Model**  | `models.py` (Django ORM)      | Defines data models like Product, using SQLite3 as the database.           |
| **View**   | React Components & Pages      | The user interface built with Next.js and styled using Tailwind.           |
| **Controller** | Django Views / DRF APIs   | Handles logic and connects frontend to the backend via RESTful APIs.       |

> ⚠️ This project is **not** ready for production – it's a creative educational skeleton.

---

## 🛠️ Local Development Setup

Follow these steps to run the project locally:

### 1. Clone the repository
>git clone [https://github.com/Punyaput/SoftEn-Lunar](https://github.com/Punyaput/SoftEn-Lunar)

### 2. Backend Setup (Python + Django)
>cd backend <br>
>pip install -r requirements.txt <br>
>python manage.py migrate <br>
>python manage.py runserver

### Step 3: Frontend Setup (Next.js)
>cd frontend <br>
>npm install <br>
>npm run dev

### Step 4: Access the App
Visit http://localhost:3000
