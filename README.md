🌑 SoftEn Lunar
SF222 Software Engineering Models and Analysis – MVC Project
SoftEn Lunar is a creative e-commerce prototype selling fictional products.
Built using:

🐍 Django (Backend)

⚛️ Next.js (Frontend)

🧩 MVC Architecture
Component	Technology Used	Description
Model	models.py (Django ORM)	Defines data models like Product, using MySQL as the database.
View	React Components & Pages	The user interface built with Next.js and styled using Tailwind.
Controller	Django Views / DRF APIs	Handles logic and connects frontend to the backend via RESTful APIs.

⚠️ This project is not ready for production – it's a creative educational skeleton.

🛠️ Local Development Setup
Follow these steps to run the project locally:

1. Clone the repository
git clone https://github.com/Punyaput/SoftEn-Lunar

2. Backend Setup (Python + Django)
Install dependencies:

cd backend
pip install -r requirements.txt

Set up the database:

2.1. Configure the MySQL database
Make sure MySQL is installed and running. Then create a new database for the project:

sql
Copy code
CREATE DATABASE softenlunar;
Update the DATABASES configuration in backend/settings.py with your database credentials:

python
Copy code
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
2.2. Load the database schema
Run migrations to set up the necessary tables:

python manage.py migrate

2.3. Optionally, import the initial data (if you have a dump file like data.sql)
You can import your MySQL dump file to populate the database with sample data:

bash
Copy code
mysql -u your_mysql_user -p softenlunar < path_to_your_dump_file/data.sql
Run the Django development server:

python manage.py runserver

3. Frontend Setup (Next.js)
Install dependencies:

cd frontend
npm install

Run the Next.js development server:

npm run dev

4. Access the App
Visit the app at http://localhost:3000