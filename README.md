# 🌑 SoftEn Lunar

## SF222 Software Engineering Models and Analysis – MVC Project

**SoftEn Lunar** is a creative e-commerce prototype selling fictional products.  
Built using:  
- 🐍 **Django** (Backend)  
- ⚛️ **Next.js** (Frontend)  

---

### 🧩 MVC Architecture

| Component     | Technology Used               | Description                                                                  |
|---------------|-------------------------------|------------------------------------------------------------------------------|
| **Model**     | `models.py` (Django ORM)      | Defines data models like Product, using MySQL as the database.              |
| **View**      | React Components & Pages      | The user interface built with Next.js and styled using Tailwind.            |
| **Controller**| Django Views / DRF APIs       | Handles logic and connects frontend to the backend via RESTful APIs.        |

> ⚠️ This project is **not** ready for production – it's a creative educational skeleton.

---

## 🛠️ Local Development Setup

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/Punyaput/SoftEn-Lunar
```

### 2. Backend Setup (Python + Django)

- Install dependencies:
```bash
cd backend
pip install -r requirements.txt
```

- Set up the database:

#### 2.1 Configure the MySQL database

Make sure MySQL is installed and running. Then create a new database for the project:

```sql
CREATE DATABASE softenlunar;
```

Update the `DATABASES` section in `backend/settings.py`:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'softenlunar',
        'USER': 'your_mysql_user',
        'PASSWORD': 'your_mysql_password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

#### 2.2 Apply Migrations

```bash
python manage.py migrate
```

#### 2.3 (Optional) Import Sample Data

If provided, import `data.sql` into your MySQL database:

```bash
mysql -u your_mysql_user -p softenlunar < path_to_your_dump_file/data.sql
```

- Run the Django development server:
```bash
python manage.py runserver
```

### 3. Frontend Setup (Next.js)

- Install dependencies:
```bash
cd frontend
npm install
```

- Run the frontend:
```bash
npm run dev
```

### 4. Access the App

Visit [http://localhost:3000](http://localhost:3000)

---

### ⚙️ Troubleshooting

- Ensure MySQL server is running.
- Confirm your credentials in `settings.py` match your local setup.
- Ensure the `softenlunar` database exists.
- If `data.sql` fails to import, double-check the schema compatibility.

---
