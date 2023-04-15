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
1. Open the page and if you navigate to the Dashboard, you will be directed to the login/register screen. You can also login/register from the button at the top right of the Nav Bar.
2. Upon either registering or logging in, you'll be able to create a new post where you can enter the 'title' and the 'content.'
3. The Dashboard will show all of the posts created from your user account you just created or logged in to.
4. The Home link will show all of the posts created by all registered users of the page.
5. Use the "Logout" button to log your user out and end the session. 
