# **[MVC Ye Olde Tech Blog](https://mvc-tech-blog-hans.herokuapp.com)**

![Badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)

## Table of Contents
---
* [License](#license)
* [Installation](#installation)
* [Packages](#packages)
* [Description](#description)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

<br>

## License 
---
[APACHE License](./LICENSE) <br>

Copyright [2023] [Hans Shen]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 <br>

<br>

## Installation
---
To run this app locally: 
1. Clone or Download this Github repository to your machine, using 'git clone' followed by the SSH link included. 
2. Open the project folder in VS Code
3. Open your terminal from the root folder "MVC-Tech-Blog" 
4. Install all necessary dependencies with the command 'npm install'
5. Create a new .env file in the root folder with the following:
    a. DB_NAME="mvc_db"
    b. DB_USER="root"
    c. DB_PASSWORD="password"
    d. DB_HOST="localhost"
    e. SESSION_SECRET="cameragrammar"
5. Run MySQL and run the database with the following commands:
    a. 'mysql -u root -p'
    b. 'USE mvc_db'
    c. 'quit'
6. Invoke App.js using the command 'node App.js'.
7. Navigate to the app locally using your browser to go to 'http://localhost:3000/'

<br>

## Packages
---
Technologies used: 
- Javascript
- Node.js
- Express.js
- Git
- Heroku

Dependencies:
- bcrypt
- connect-session-sequelize
- dotenv
- express 
- express-handlebars
- express-session
- mysql2
- passport
- sequelize

Dev Dependencies:
- nodemon

<br>

## Description
---
This is a blog page for developers to share their thoughts and ramble about new dev technologies and the like.
 <br><br>
To view this project deployed, click [here](https://mvc-tech-blog-hans.herokuapp.com/). <br><br>

## Usage 
---
After installation: 
1. Navigate to the 'Dashboard' to either Log in or Register
2. Register with your username, e-mail, and password
3. Create a post by clicking the "Create Post" button
4. Type in the Title and Content of the post and click 'Submit'
5. The post will appear in the Dashboard page, and should only show your own posts.
6. If you navigate back to 'Home', every post by all users will be displayed.

<br>

### **Screenshots**
--- 
Home (To view all posts) <br>
![view posts](../assets/home-screen.jpg)
<br>
Login/Registration <br>
![login](../assets/login-screen.jpg)
<br>
View your own posts upon login/registration <br>
![dashboard](../assets/dashboard-screen.jpg)
<br>

## Contributing 
---
This project was completed by Hans Shen, under the instruction and tutelage of the University of Utah Web Development Bootcamp.

<br>

## Questions?
---
Hit me up on Github at [cameragrammar](https://github.com/cameragrammar) or by [email](mailto:hshen801@gmail.com).
