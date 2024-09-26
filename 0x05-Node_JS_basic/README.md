# 0x05. NodeJS Basics

In this project, I learned how to:

* run javascript using NodeJS
* use NodeJS modules
* use specific Node JS module to read files
* use process to access command line arguments and the environment
* create a small HTTP server using Node JS
* create a small HTTP server using Express JS
* create advanced routes with Express JS
* use ES6 with Node JS with Babel-node
* use Nodemon to develop faster

# Requirements
* Allowed editors: vi, vim, emacs, Visual Studio Code
* All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
* All your files should end with a new line
* A README.md file, at the root of the folder of the project, is mandatory
* Your code should use the js extension
* Your code will be tested using Jest and the command npm run test
* Your code will be verified against lint using ESLint
* Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
* All of your functions/classes must be exported by using this format: module.exports = myFunction;

## Function Prototypes :

Prototypes for functions written in this project:

| File                    | Prototype                             |
| ----------------------- | ------------------------------------- |
| `0-console.js`        |                    |
| `1-stdin.js`     |                                       |
| `2-read_file.js`            |                                       |
| `3-read_file_async.js`|                                       |
| `4-http.js`   |                                       |
| `5-http.js`  |                                       |
| `6-http_express.js`  |                                  |
| `7-http_express.js`  |                                       |
| `full_server/utils.js`  |                                  |
| `full_server/controllers/AppController.js`    |                                       |
| `full_server/controllers/StudentsController.js`  |                                                |
| `full_server/routes/index.js`  |                                |
| `full_server/server.js`  |                                   |

## Tasks :

* **0. Executing basic javascript with Node JS**
  * [0x05-Node_JS_basic/0-console.js](./0x05-Node_JS_basic/0-console.js): 
  In the file 0-console.js, create a function named displayMessage that prints in STDOUT the string argument.



* **1. Using Process stdin**
  * [0x05-Node_JS_basic/1-stdin.js](./0x05-Node_JS_basic/1-stdin.js): 
  Create a program named 1-stdin.js that will be executed through command line:
  * It should display the message Welcome to Holberton School, what is your name? (followed by a new line)
  * The user should be able to input their name on a new line
  * The program should display Your name is: INPUT
  * When the user ends the program, it should display This important software is now closing (followed by a new line)
  
* **2. Reading a file synchronously with Node JS**
  * [0x05-Node_JS_basic/2-read_file.js](./0x05-Node_JS_basic/2-read_file.js):
  Using the database database.csv (provided in project description), create a function countStudents in the file 2-read_file.js

* Create a function named countStudents. It should accept a path in argument
* The script should attempt to read the database file synchronously
* If the database is not available, it should throw an error with the text Cannot load the database
* If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
* It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6.       List:  LIST_OF_FIRSTNAMES
* CSV file can contain empty lines (at the end) - and they are not a valid student!


* **3. Reading a file asynchronously with Node JS**
  * [0x05-Node_JS_basic/3-read_file_async.js](./0x05-Node_JS_basic/3-read_file_async.js): 
  Using the database database.csv (provided in project description), create a function countStudents in the file 3-read_file_async.js

* **4. Create a small HTTP server using Node's HTTP module**
  * [0x05-Node_JS_basic/4-http.js](./0x05-Node_JS_basic/4-http.js):
  In a file named 4-http.js, create a small HTTP server using the http module:

  * It should be assigned to the variable app and this one must be exported
  * HTTP server should listen on port 1245
  * Displays Hello Holberton School! in the page body for any endpoint as plain text



* **5. Create a more complex HTTP server using Node's HTTP module**
  * [0x05-Node_JS_basic/5-http.js](./0x05-Node_JS_basic/5-http.js):
  In a file named 5-http.js, create a small HTTP server using the http module:

* It should be assigned to the variable app and this one must be exported
* HTTP server should listen on port 1245
* It should return plain text
* When the URL path is /, it should display Hello Holberton School! in the page body
* When the URL path is /students, it should display This is the list of our students followed by the same content as the file * 3-read_file_async.js (with and without the database) - the name of the database must be passed as argument of the file
* CSV file can contain empty lines (at the end) - and they are not a valid student!


* **6. Create a small HTTP server using Express**
  * [0x05-Node_JS_basic/6-http_express.js](./0x05-Node_JS_basic/6-http_express.js):

  Install Express and in a file named 6-http_express.js, create a small HTTP server using Express module:

* It should be assigned to the variable app and this one must be exported
* HTTP server should listen on port 1245
* Displays Hello Holberton School! in the page body for the endpoint /


* **7. Create a more complex HTTP server using Express**
  * [0x05-Node_JS_basic/7-http_express.js](./0x05-Node_JS_basic/7-http_express.js):

  In a file named 7-http_express.js, recreate the small HTTP server using Express:

* It should be assigned to the variable app and this one must be exported
* HTTP server should listen on port 1245
* It should return plain text
* When the URL path is /, it should display Hello Holberton School! in the page body
* When the URL path is /students, it should display This is the list of our students followed by the same content as the file       3-read_file_async.js (with and without the database) - the name of the database must be passed as argument of the file
* CSV file can contain empty lines (at the end) - and they are not a valid student!

