# SoftEn Lunar
<h2> SF222 Software Engineering Models and Analysis 🌑 | MVC Project </h2> <br>
Made with Django Backend & NextJS Frontend <br> <br>

Model: The data and tables from Django models.py, with SQLite3 Ddatabase. <br>
View: The user interface, NextJS components, pages, interactable elements. <br>
Controller: The logic that connects the UI to the data, API calls from the frontend, talks to models, and returns data as JSON responses.

⚠️ This project is not ready for production – it's a creative, educational skeleton prototype. <br><br>

How to run the app on your local computer: <br>
1. Clone this repository <br>
>git clone https://github.com/yourusername/SoftEn-Lunar.git ) <br>
2. Backend setup <br>
- install all backend dependencies in backend directory (requires Python installed) <br>
...\backend>pip install -r requirements.txt <br>
- migrate data if possible <br>
...\backend>python manage.py migrate <br>
- run backend server locally <br>
...\backend>python manage.py runserver <br>
3. Frontend setup <br>
- install all frontend dependencies in frontend directory (requires Node installed) <br>
...\frontend>npm install <br>
- run frontend server locally <br>
...\frontend>npm run dev <br>
4. visit http://localhost:3000
