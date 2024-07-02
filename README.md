# 0x00. ES6 Basics

In this project, I learned :

* What ES6 is
* New features introduced in ES6
* The difference between a constant and a variable
* Block-scoped variables
* Arrow functions and function parameters default to them
* Rest and spread function parameters
* String templating in ES6
* Object creation and their properties in ES6
* Iterators and for-of loops


## Function Prototypes :

Prototypes for functions written in this project:

| File                    | Prototype                             |
| ----------------------- | ------------------------------------- |
| `0-constants.js`        | `taskFirst():`                        |
| `1-block-scoped.js`     |                                       |
| `2-arrow.js`            |                                       |
| `3-default-parameter.js`|                                       |
| `4-rest-parameter.js`   |                                       |
| `5-spread-operator.js`  |                                       |
| `6-string-interpolation.js`  |                                  |
| `7-getBudgetObject.js`  |                                       |
| `8-getBudgetCurrentYear.js`  |                                  |
| `9-getFullBudget.js`    |                                       |
| `10-loops.js`  |                                                |
| `11-createEmployeesObject.js`  |                                |
| `12-createReportObject.js`  |                                   |

## Tasks :

* **0. Const or let?**
  * [0x00-ES6_basic/0-constants.js](./0x00-ES6_basic/0-constants.js): Modify

function taskFirst to instantiate variables using const
function taskNext to instantiate variables using let

* **1. Block Scope**
  * [0x00-ES6_basic/1-block-scoped.js](./0x00-ES6_basic/1-block-scoped.js): Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.

* **2. Arrow functions**
  * [0x00-ES6_basic/2-arrow.js](./0x00-ES6_basic/2-arrow.js): Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)

* **3. 3. Parameter defaults**
  * [0x00-ES6_basic/2-arrow.js](./0x00-ES6_basic/2-arrow.js): Condense the internals of the following function to 1 line - without changing the name of each function/variable.

  Hint: The key here to define default parameter values for the function parameters.

* **4. Rest parameter syntax for functions**
  * [0x00-ES6_basic/4-rest-parameter.js](./0x00-ES6_basic/4-rest-parameter.js):Modify the following function to return the number of arguments passed to it using the rest parameter syntax



* **5. The wonders of spread syntax**
  * [0x00-ES6_basic/5-spread-operator.js](./0x00-ES6_basic/5-spread-operator.js): Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.



* **6. Take advantage of template literals**
  * [0x00-ES6_basic/6-string-interpolation.js](./0x00-ES6_basic/6-string-interpolation.js): Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.
  
* **7. Object property value shorthand syntax**
  * [0x00-ES6_basic/7-getBudgetObject.js](./0x00-ES6_basic/7-getBudgetObject.js): Notice how the keys and the variable names are the same?

Modify the following function’s budget object to simply use the keyname instead.



* **8. No need to create empty objects before adding in properties**
  * [0x00-ES6_basic/-getBudgetCurrentYear.js](./0x00-ES6_basic/-getBudgetCurrentYear.js):  Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object
  

* **9. ES6 method properties**
  * [0x00-ES6_basic/9-getFullBudget.js](./0x00-ES6_basic/9-getFullBudget.js) : Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object

* **10. For...of Loops**
  * [0x00-ES6_basic/10-loops.js](./0x00-ES6_basic/10-loops.js) : Rewrite the function appendToEachArrayValue to use ES6’s for...of operator. And don’t forget that var is not ES6-friendly.



* **11. Iterator**
  * [0x00-ES6_basic/11-createEmployeesObject.js](./0x00-ES6_basic/11-createEmployeesObject.js) : Write a function named createEmployeesObject that will receive two arguments:

  * departmentName (String)
  * employees (Array of Strings)


* **12. Let's create a report object**
  * [0x00-ES6_basic/12-createReportObject.js](./0x00-ES6_basic/12-createReportObject.js) : Write a function named createReportObject whose parameter, employeesList, is the return value of the previous function createEmployeesObject.
