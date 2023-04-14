This my tech blog, named "Ye Olde Tech Blog"

To run the app LOCALLY: 
1. Download or clone the github repository.
2. Run 'npm install' from the root folder to install dependencies.
3. Create .env file with the following:
    DB_NAME="mvc_db"
    DB_USER="root"
    DB_PASSWORD="password"
    DB_HOST="localhost"
    SESSION_SECRET="cameragrammar"
4. Run the SQL server in the terminal with the following commands:
    a. mysql -u root -p
    b. USE mvc_db
    c. quit
5. Invoke App.js using the command 'node App.js'.    

DEPLOYED APP ON HEROKU:
https://mvc-tech-blog-hans.herokuapp.com/dashboard
