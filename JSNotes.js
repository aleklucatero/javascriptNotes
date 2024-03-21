// IMPLICIT RETURN

// Function that divides the parameter by 2
// const division = number => number / 2;
// console.log(division(2)); //Should return 1

// Function that multiples both parameters to each other
// const multiply = (a, b) => a * b;
// console.log(multiply(4, 4)) //Should return 16

// Function that adds 10 to a number
// const addition = number => number + 10;
// console.log(addition(10)) //Should return 20

//Function that divides both parameters
// const anotherDivision = (a, b) => a / b;
// console.log(anotherDivision(10,5)) //Should return 2

//Re-Write function below to implicit returns
// const numbersAboveTen = numbers.filter(function(number) {
//     return number > 10;
// });
// const numbersAboveTen = numbers.filter(number => number > 10);

//Re-Write function below to implicit returns
// const names = ["Sam", "Alex", "Charlie"];
// const result = names.find(function(name) {
//     return name === "Alex";
//   });
// const result = names.find(name => name === "Alex");

//Re-Write function below to implicit returns
// const numbers = [4, 2, 5, 8];
// const doubled = numbers.map(function(number) {
//     return number * 2;
// });
// console.log(doubled); // [8, 4, 10, 16]
// const doubled = numbers.map(number => number * 2);

// const grades = [1, 2, 3];

// grades.forEach(function(grade) {
//      sum += grade
// });
// return sum;

// Array to string

// const users = [{
//     id: 1,
//     name: "Sam Doe",
//     inStock: true
// }, {
//     id: 2,
//     name: "Alex Blue",
//     inStock: false
// }];

// const userNamesArray = users.map(user => user.name);
// console.log(userNamesArray);

// const csv = userNamesArray.join(", ");
// console.log(csv);

// We can link the two above like this:

// const csv = users.map(user => user.name).join(", ");
// console.log(csv);

// This is how you would apply it for html (UL with li)

// const html = `<ul>
//     ${users.map(user => `<li>${user.name}</li>`).join(" ")}
//     </ul>`;
// console.log(html);

// another example with id now
// const html = `<ul>
//     ${users.map(user => `<li>${user.id}</li>`).join(" ")}
//     </ul>`;
// console.log(html);

// another example with inStock now
// const html = `<ul>
//     ${users.map(user => `<li>${user.inStock}</li>`).join(" ")}
//     </ul>`;
// console.log(html);


// `<tr>
//             ${rows.map(row => `<td>${row.label}</td>`).join(" ")}
//             ${rows.map(row => `<td>${row.value}g</td>`).join(" ")}
//             </tr>`


// This is the Arrays 3 Example about the drop down country menu

// export const getDropdown = (countries) => {
//     console.log(countries);
//     return `<option value="">Please select</option>
//         ${countries.map(country => `<option value="${country.toLowerCase()}">${country}
//         </option>`).join("")}`;
// }

// To set make an array empty
// const items = ["Pen", "Paper", "Staples"];
// items.length = 0;
// console.log(items); // Returns []

// Deletes elements in array depending to the parameter set
// const items = ["Pen", "Paper", "Staples"];
// const deletedItems = items.splice(0, 1); //This will delete at index 0 and end at 1.
// console.log(deletedItems); // This will return an array of deleted items (["Pen"])
// console.log(items); // This will return the new array ([Paper, Staples])

// reducer method on a sum
// const grades = [1, 2, 3];

// const sum = grades.reduce((total, current) => { 
//     return total + current;
// }, 0);

// console.log(sum); // Should output 6


// reduces on multiplication
// const grades = [1, 2, 3];

// const gradesMultiplied = grades.reduce((total, current) => {
//     return total * current;
// }, 1); // This is the startingValue, set to 1 bc if it was 0 it will always multiply to 0
// console.log(gradesMultiplied); // Should return 6

// Reduce as implicit return
// const sum = numers.reduce((total, current) => total + current, 0);

// Array concatenation
// const lat = [5.123];
// const lng = [4.321];
// const point = [...lat, ...lng]; // This will return [5.123, 4.321].
// console.log(point);

// Create a new array based on the old one and add the new items
// const items = ["Tissues", "Oranges"];
// const otherItems = [...items, "Tomatoes"];
// console.log(otherItems); // Will return ["Tissues", "Oranges", "Tomatoes"].

//Reading dynamic property 
// const user = {
//     id: 1, //key of id = 1
//     name: "Sam Green", //key of name = Sam Green
//     age: 20 //key of age = 20
// };

// const key = "id"; // key is stored in a variable.
// console.log(user[key]); //Will return the value of the id key. 

// const getValue = (user, keyToRead) => {
//     return user[keyToRead];
// }

// console.log(getValue({id: 2, name: "Sam", inStock: true}, "inStock")); // The user typed in which key he wanted to read will output true
// console.log(getValue({id: 2, name: "Sam", inStock: true}, "name")); // Will output Sam

// Put Object.keys() and dynamic properties together
// const settings = {  //Array containing keys and values
//     theme: "Dark",
//     version: "2.4.1",
//     beta: false,
//     inStock: true, 
//     amountInStock: 100
// };

// const keysArray = Object.keys(settings); //Object.keys makes new array of keys in strings
// console.log(keysArray); //Checking the new array
// keysArray.forEach(key => { //Iterates through every key in the array
//     console.log(settings[key]); // logs the key value in the console, settings[key]

    //make sure to get you input the original object name and then key. {settings[key]}
// });

// const newArray = Object.keys(settings);
// console.log(newArray);
// newArray.forEach(key => {
//     console.log(settings[key]);
// });

//Object shorthand
// const age = 18
// const person = {
//     name: "Alek",
//     age //Object shorthand
// };
// console.log(person); 

// const sum = (a, b) => {
//     console.log({a}); // {a: 1} // By wrapping {a}, it will now output as {a: 1}
//     console.log({b}); // {b: 3} // By wrapping {b}, it will now output as {a: b}
//     let total = a + b;
//     console.log({total}); // // By wrapping {total}, it will now output as {total: 4}
//     return total;
// }

// sum(1, 3);

// Array Destructuring. When there is an array, you can destructure it
// by extracing the values in the numbers array, and assigning it to the new
// variables, "first, second, third" IN THAT ORDER.

// const numbers = [1, 2, 3, 4, 5];
// const [first, second, third] = numbers;
// console.log(first); // This will console.log 1.
//This is the same as doing this
// const first = numbers[0];
// const second = numbers[1];
// const third = numbers[2];

//Object Destrucing, Same as array but using {} instead of []
// const config = {
//     id: 1,
//     isAdmin: false,
//     theme: {
//         dark: false,
//         accessibility: true
//     }
// };

// const id = config.id;
// const isAdmin = config.isAdmin;
// const theme = config.theme;
//OR you can write like this
// const {id, isAdmin, theme} = config;

// You can also asign values
// const {id, isAdmin, value = false} = config; // This adds value = false into the object

//You can also destructure and rename value into another variable
// const name = "Document title"; // name variable is already declared
// const user = {
//     id: 1,
//     name: "Sam",
//     isAdmin: true
// };
// const {name: userName, isAdmin} = user; // Since there is already a var declared with "Name", you make a new one
// console.log(userName);
// console.log(user);

// Merge two Objects
// const firstPerson = {?ince there are 2 keys with age.

// OPTIONAL CHAINING

// const user = {
//     details: {
//         name: {
//             firstName: "Sam"
//         }
//     },
//     data: null
// }

// user.details?.name?.firstName; // WIll output "Sam"
// user.data?.id; // Will output undefined since there is no id key
// user.children?.names; // undefined
// user.details?.parent?.firstName; // undefined

// Assign a variable using blockchain

// const settings = {
//     theme: "light"
// }; 
// settings?.theme && (settings.theme = "dark"); // This will check if settings.theme exists. if it returns true, it will execute right side.
// //Since settings.theme is true it will execute assignment
// console.log(settings);

// const data = {
//     results: {
//         grades: [1, 2, 3, 4, 5]
//     }
// };
// return data.results?.grades?.[0]; // This will return "1"

// the Nullish Coalescing will short circuit if left side returns a non-nullish value
// const getPlaceholder = () => {
//     return "N/A";
// }

// const sayHello = name => {
//     return `Hello ${name ?? getPlaceholder()}`; // ?? Nullish Coalescing will short ciruit and not run right hand side
// }
// console.log(sayHello("Alek")); // This returns "Hello Alek"

// const getPlaceholder = () => {
//     return "N/A"
// };

// const sayHello = name => {
//     return `Hello ${name ?? getPlaceholder()}`; // Will run nullish coalescing since no name = undefined
// }
// console.log(sayHello()); // This will output "Hello N/A"

// Advanced Control flow, refactoring if conditions

// const outputsNotifications = status => {
//     const messages = {
//         received: "Restaurant is working on order",
//         prepared: "Order is ready to be picked up",
//         en_route: "Order is on it's way",
//         arrived: "Enjoy your food!"
//     };

//     return messages[status] ?? "Uknown Status"; // Checks the input "status" = a key in messages
// }

// console.log(outputsNotifications("en_route"));

// const getStatus = (host, user, booking) => {
//     const messages = {
//         pending: `Hey ${user}, we're awaiting confirmation from ${host}.`,
//         confirmed: `Hey ${user}, ${host} is excited to be hosting you.`,
//         canceled: `Unfortunately ${user}, ${host} has canceled your booking request.`,
//         done: `${host} hopes you had a great stay.`
//     };
//     return messages[booking.status] ?? "Unknown";
// }

// Reducing arrays of Objects

// const grades = [{grade: 10}, {grade: 15}, {grade: 5}];

// const sum = grades.reduce((total, current) => {
//     console.log(current) // This will show you the objects
//     // WE want to sum the grades in the object, to acces grades it iwll be current.grade
//     return total + current.grade;

// }, 0);
// console.log(sum);

// const tweets = [
//     {
//         id: 10512,
//         stats: {
//             likes: 41,
//             retweets: 54
//         }
//     },
//     {
//         id: 41241,
//         stats: {
//             likes: 14,
//             retweets: 20
//         }
//     }
// ];

// const socialImpact = tweets.reduce((total, current) => {
//     console.log(current); // you can also call it tweet. Visualize the object
//     return total + current.stats.likes + current.stats.retweets;
// }, 0);
// console.log(socialImpact); // 129

// const tweets = [
//     {
//         id: 10512,
//         stats: {
//             likes: 41,
//             retweets: 54
//         }
//     },
//     {
//         id: 41241,
//         stats: {
//             likes: 14,
//             retweets: 20
//         }
//     }
// ];

// const newValue = tweets.reduce((total, current) => {
//     console.log(current)
//     return total + current.id
// }, 0);
// console.log(newValue);

// DEEP EQUAL AND IMMUTABILITY

// const grades = [{
//     id: 1,
//     grade: 12,
//     isPassing: false // we need to update this to true
// }, {
//     id: 2,
//     grade: 14,
//     isPassing: true
// }];

// // we find the object in the array that needs to be updated. so lets find where id = 1
// const entry = grades.find(grade => grades.id === 1);
// entry.isPassing = true;
// console.log(grades); // We will get the same objects in the array but with the updated.

// Shallow copy
// const grades = [1, 2, 3];
// const newGrades = [...grades]; // Will copy the grades array into a new array
// console.log(newGrades);

// Immutable add & update
// const grades = [1, 2, 3];
// const add = [...grades, 5];
// console.log(grades)// will return [1, 2, 3]
// console.log(add)// will return [1, 2, 3, 5]

// // You can update using the filter method or map
// const update = grades.filter(grade => grade !== 3);
// console.log(update); // will return [1, 2]

// const user = {
//     id: 1,
//     age: 23
// };
// const clonedUser = {
//     ...user,
//     age: user.age + 1
// };
// console.log(user)
// console.log(clonedUser) //This changes the user age. Doesnt make new object

// const book = {
//     id: 1,
//     title: "Harry Potter",
//     year: 2017,
//     rating: 4.5
// }

// // GOOD: immutable
// const {year, ...rest} = book; //Makes a new object "rest", while removing year from book
// console.log(rest); // { id: 1, title: "Harry Potter", rating: 4.5}
// console.log(book); // {id: 1, title: "Harry Potter", year: 2017, rating: 4.5} (unchanged)

//                      CLASSES

// class Person {
//     constructor(firstName, lastName) {
//         console.log(firstName + " " + lastName);

//         this.firstName = firstName; // capture firstName param into this.firstName instance variable
//         this.lastName = lastName; // capture lastName param into this.lastName instance variable
//         this.votingAge = 18; // You can set an instance variable without it being in param
//     }
// }

// const person = new Person("Alek", "Lucatero");
// console.log(person);

// Instance methods

// class Person {
//     constructor (firstName, lastName) {
//         this.firstName = firstName; // These are instance variables
//         this.lastName = lastName; // These are instance variables
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}` // These are instance methods
//     }
// }

// const person = new Person("Alek", "Lucatero") // You have to made a variable with a new version of the class
// console.log(person.getFullName()); // Then you can console log the function inside.

// Instance methods calling other instance methods

// class User {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }

//     getGretting() {
//         const fullName = this.getFullName(); //Calling an instance method

//         return `Hello ${fullName}` // variable fullName has this.getfullname method
//     }
// }

// SETTERS

// class User {
//     set age(value) { //Setter before a method
//         console.log("age setter");
//         this._age = Number.parseInt(value, 10);
//     }
// }

// const user = new User();
// user.age = "18"; //Notice how this is a string
// console.log(user); // {_age: 18}. Will create new instance bariable called _age and set it equal to int 18

// GETTERS

// class User {
//     get age() {
//         console.log("age getter");
//         return this._age;
//     }

//     set age(value) {
//         console.log("age setter");
//         return this._age = Number.parseInt(value, 10);
//     }
// }

// const user = new User();
// user.age = "20"; // Calls set age(value)
// console.log(user.age); // Calls get age(), returns 20 (number)

//Putting it together

// class User {
//     constructor(age) {
//         this.age = age;
//     }

//     get age() {
//         console.log("age getter");
//         return this._age; // Just outputs the actual age
//     }

//     set age(value) { // You need a value parameter bc thats the input
//         console.log("age setter");
//         this._age = Number.parseInt(value, 10);
//     }
// }

// const user = new User("30");
// console.log(user.age); // This will output 30
// user.age = "31"
// console.log(user.age); // This will output 31

// STATIC METHODS

// class Config {
//     static getYear() {
//         ... // Code
//     }
// }

// console.log(Config.getYear());



//                              ASYNC CALLBACKS

//  SET TIME OUT
/* setTime out takes a function as a parameter. It first calls a function and then
execute whatever is inside the brackets after a specific amount of time. 
setTimeout(callback, milliseconds).
*/
// setTimeout(() => {
//     console.log("One second has elapsed."); //This is the callback function
// }, 1_000);

// // JS runs top to bottom

// console.log("A");
// setTimeout(() => {
//     console.log("B");
// }, 1_000);
// setTimeout(() => {
//     console.log("C");
// }, 3_000);
// console.log("D");
//This will output "A, D, B, C"


//                              CALLBACK PATTERN

// const welcomeUser = (name, callback) => {
//     setTimeout(() => {
//         console.log(`Welcome ${name}`);
//         callback();
//     }, 1_000);
// }

// welcomeUser("Sam", () => {
//     console.log("Done welcoming user");
// });

// const sumTemperatures = (temperatures, callback) => {
//     setTimeout(() => {
//         const sum = temperatures.reduce((total, current) => total + current, 0);
//         callback(sum) // The result of reduce is stored in the sum var. so we callback
//     }, 1_000);
// }

// const temperatures = [10, 5, 3];
// sumTemperatures(temperatures, value => {
//     console.log(value);
// });


//                          CALLBACKS RE WRITTEN INTO PROMISES

// We introduce the .then
// const temperatures = [10, 5, 3];
// sumTemperatures(temperatures).then(value => {
//     console.log(value);
// });


// //This will be used to handle errors
// sumTemperatures(temperatures)
//     .then(value => {
//         console.log(value);
//     })
//     .catch(reason => {
//         console.log(reason);
//     });

// Resolved promises: pending, fulfilled
// const logFlightStatus = () => {
//     fakeFetch("flight-status").then(data => {
//         console.log(data)
//     });
// }

// const logWeatherDescription = () => {
//     getWeatherDescription(cityName).then(data => {
//         console.log(data);
//     });
// }

// //REJECTED STATE : .catch()
// getWeatherIn("Amsterdam")
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error); // {error: "Connection Issue"}
//     });

// .finally() - runs after the .then if when promise is successful and after .catch if not

// startLoader(); //Function that shows loader when we get weather and stops it when its got
// getWeatherIn("Amsterdam")
//     .then(data => {
//         stopLoader();
//         console.log(data);
//     })
//     .catch(error => {
//         stopLoader();
//         console.error(error);
//     })

//     // WE CAN RE-WRITE USING FINALLY

// startLoader();
// getWeatherIn("Amsterdam")
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error(error)
//     })
//     .finally(() => {
//         stopLoader();
//     });
    
// //Promise.all (executes promise when all promises in parameter are fulfilled)
// Promise.all([promise1, promise2])
//     .then(values => {
//         console.log(values);
//     })
//     .catch(error => {
//         console.error(error)
//     });

// //Promise.any allows you to show the promise that is fulfilled the fastest
// Promise.any([promise1, promise2])
//     .then(values => {
//         console.log(values);
//     })
//     .catch(error => {
//         console.error(error);
//     })

    //                      CREATING PROMISES

//1st: Define function
// const waitOneSecond = () => { //This function is doing async work, it's resolving in future bc it return promise
//     //2nd: This function must return a promise
//     return new Promise((resolve) => { //The argument is called the executer: "() => {}", commonly called resolve
//         //3rd: Set a time out, with time
//         setTimeout(() => {
//             //4th Call the resolve function inside the timeout
//             resolve();
//         }, 1_000); 
//     });
// }

// // Here's how we can use the function
// waitOneSecond().then(() => {
//     console.log("Wait one second");
// });


// Resolving data

// const wait = milliseconds => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const seconds = milliseconds / 1_000;
//             resolve(seconds); // So now this will be able to be used in the .then callback
//         }, milliseconds);
//     });
// }

// wait(5_000).then(data => {
//     console.log(data) //This will print out what is inside the setTimeout
// }); 


// const wait = milliseconds => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const seconds = milliseconds / 1_000;
//             resolve(seconds);
//         }, milliseconds);
//     });
// }

// wait(1_000).then(data => {
//     console.log(data);
// });

// REJECTING PROMISES
// const alwaysFail = () => {
//     return new Promise((resolve, reject) => {
//         reject("Failed. I always do that");
//     });
// }

// alwaysFail()
//     .then(() => {
//         //WILL NEVER BE CALLED
//     })
//     .catch(data => {
//         console.error(data); // "Failed. I alwasy do that."
//     });


// const fakeFetch = endpoint => {
//     return new Promise((resolve, reject) => {
//         if (endpoint !== "flight-status") {
//             reject("endpoint not supported.")
//         }
//         setTimeout(() => {
//             resolve({
//                 departed: false, 
//                 delayed: true
//             });
//         }, 1_000);
//     });
// }

// fakeFetch("flight-status")
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error(error);
//     }) // Display the resolve, which is the data

// fakeFetch("user-details")
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error(error);
//     }) // Catches the error, cannot take user-details as pararm. Will reject


// const failAfter = milliseconds => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(`You asked me to fail after ${milliseconds}ms and I did!`)
//         }, milliseconds);
//     });
// }

// failAfter(5_000).catch(error => {
//     console.error(error); //Will display the rejected param after 5 seconds
// })

//                                  JSON

//To conver Json string into Json Object: JSON.parse(string). THIS IS SYNCRHONOUS NOT GOOD
// const string = '{"firstName":"Sam","lastName":"Green","age": 32}';
// const person = JSON.parse(string);
// console.log(person);
// console.log(person.firstName);

//To convert from Json object to Json string: JSON.stringify(object).
// const person = {
//     firstName: "Sam",
//     lastName: "Green",
//     age: 32
// };
// const string = JSON.stringify(person);
// console.log(string);


//                              FETCH API
// FETCH API ALWASY RETURNS A PROMISE. Will send a AJAX request to the internet, reach the url specified, then come back with a response
//fetch(URL)
// fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")

// fetch(URL)
//     .then(response => { // When you fetch URL, you will get a "response"
//         console.log(response);
//     });

// //When we fetch a URL, we get back a response object, that has to be formatted to JSON.
// fetch(URL)
//     .then(response => {
//         return response.json(); //This convers the response into JSON. .json() is similiart to JSON.parte(string), but ASYNC
//     })

//     //This can be refactored to implicit returns
// fetch(URL)
//     .then(response => response.json());


// When you fetch an API, you have to conver it to JSON, and then output the data
// fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json") // This is a promise
//     .then(response => response.json()) // This is a promise
//     .then(data => { //Then you resolve the promise and output the data.
//         console.log(data);
//     });

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         data.forEach(user => { // You can use a foreach, depends on the data in the API
//             console.log(user.email)
//         });
//     });


// Call the completed chapters with only the chapters in the API that are completed

// function displayCompletedChapters(chapters) {
//     console.log("Received", chapters);
// }

// fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json")
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     const finalResponse = data.filter(chapter => chapter.isCompleted);
//     displayCompletedChapters(finalResponse);
// })


// //                                HANDLING ERRORS IN FETCH
// //            To do this you add the catch. Whenever a promise is rejected, it will go to cathc


// fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json")
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// })
// .catch(error => {
//     console.error(error);
// });


// fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json")
// .then(response => { 
//     if (!response.ok) { // Response returns an "ok" field that returns true when resposnse was successful
//         throw new Error("API issues.") //If not successful, we throw new Error that will reject promise and jump to .catch
//     }
//     return response.json();
// })
// .then(data => {
//     console.log(data);
// })
// .catch(error => {
//     console.error(error);
// })


// fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json")
// .then(response => {
//     if (!response.ok) {
//         throw new Error("API Problem");
//     }
//     return response.json()
// })
// .then(data => {
//     console.log(data);
// })
// .catch(error => {
//     console.error(error);
// })


// //                          FETCH with a specify object
// fetch(URL, {
//     method: "POST", // Second parameter Method
//     body: JSON.stringify({ // Method body, turned into a Json string
//         tweet: "Your tweet here" 
//     })
// })
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// });

// //                          ADDING HEADERS

// fetch(URL, {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json" //This is used to tell API that we're sending them Json
//     },
//     body: JSON.stringify({
//         key1: `value 1`,
//         key2: `value 2`
//     })
// })




//                                  IMPORTING AND EXPORTING

// helpers.js file which containst a class you want to use index.js
// export class Helper {...} //helpers.js file
// import {Helper} from "./helpers.js"; // index.js file

// //                                      Named exports

// //config.js file
// export const votingAge = 18; 
// export const settings = { theme: "light", admid: false };
// //index.js file
// import {votinAge} from "./config.js";
// // OR
// import {settings} from "./config.js";
// // OR
// import {settings, votinAge} from "./config.js";

// TO USE THESE FEATURES YOU LINK HTML PAGE TO SCRIPT
{/* <script src="index.js"></script> */}

//If you're not using module bundler (webpack/parcel), add type="module"
{/* <script src="module" src="index.js"></> */}

//You can default export specifc things in a file

// helpers.js
// export default class Helper { //export default makes this class the default import
//     capitalize(word) {
//         return word[0].toUpperCase() + word.substring(1).toLowerCase();
//     }
// }

// // index.sj
// import Helper from "./helpers.js";
// const helper = new Helper();
// // We can also rename it since its the default
// import StringHelper from "./helpers.js";
// const helper = new StringHelper();

// EXAMPLE OF DEFAULT EXPORT AND IMPORT

//numeric-helper.js
// export default class NumericHelper {
//     constructor(number) {
//         this.number = number
//     }

//     isEven() {
//         return this.number % 2 === 0;
//     }

//     isOdd() {
//         return this.number % 2 === 1;
//     }
// }

// //index.js - We want to use the class in numeric-helper.js
// const isEvenNumber = number => {
//     const newInstance = new NumericHelper(number);
//     return newInstance.isEven();
// }

//IMPORTING FROM REACT
// import React, {useState, useContext} from "react"; //Reach is default import, useState and useContext are named imports

// RENAMING NAMED IMPORTS
// import {getDate as getDateHelper} from "./date-helpers.js";
// const getDate() {
//  // ...
// }
// getDateHelper(); //Function which was imported

// IMPORTING FROM LIBRARY
// import _ from "lodash";

//DYNAMIC IMPORTS - returns promise
// import("./helpers.js").then(module => {
//     console.log(module);
// });


//                          FETCH WRAPPER FOR PUT
// class FetchWrapper {
//     constructor (baseURL) { //Takes the baseURL as constructor
//         this.baseURL = baseURL;
//     }

//     get(endpoint) { // when get is implemented, you take the endpoint
//         return fetch(this.baseURL + endpoint) // return the promise and then object
//         .then(response => response.json()) // conver to json
//     }
    
// }

// // To implement
// const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");
// API.get("/weatherstack/amsterdam.json").then(data => {
//     console.log(data);
// })


//Build class and fetch temperature of specific city

// class FetchWrapper {
//     constructor(baseURL) {
//         this.baseURL = baseURL;
//     }

//     get(endpoint) {
//         return fetch(this.baseURL + endpoint)
//         .then(response => response.json());
//     }
// }

// const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");
// API.get("/weatherstack/amsterdam.json").then(data => {
//     console.log(data);
//     console.log(data.current.temperature);
//     showTemperature(data.current.temperature);
// })

// import FetchWrapper from "./fetch-wrapper.js"

// const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");
// API.get("/tweet/1080777336298049537.json ").then(data => {
//     console.log(data);
//     console.log(data.author);
//     console.log(data.author.details);
//     const fullName = `${data.author.details.firstName} ${data.author.details.lastName}`
//     showAuthorName(fullName);

// })

//Filter throught the api and return chapters that show completed
// import FetchWrapper from "./fetch-wrapper.js"

// const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");
// API.get("/chapters/all.json").then(data => {
//     console.log(data);
//     const finalData = data.filter(chapter => chapter.isCompleted); //This will return all the values that are true
//     displayCompletedChapters(finalData); //This is a function.
// })


//                  FETCH WRAPPER FOR PUT

// const API = new FetchWrapper("https://api.learnjavascript.online");
// API.put("/demo/grades.json", { //Sends a put request to baseURL + end, Sends custom header, converting it to json string, converting to resonse.json
//         grade: 18
// }).then(data => {
//     console.log(data)
// })

// // Heres how the class implementation looks
// class FetchWrapper {
//     constructor(baseURL) {
//         this.baseURL = baseURL
//     }

//     put(endpoint, body) {
//         return fetch(this.baseURL + endpoint, {
//             method: "PUT",
//             headers: {
//                 "Content-Type":"applications/json"
//             },
//             body: JSON.stringify(body)        
//         }).then(response => response.json())
//     }
// }


// import FetchWrapper from "./fetch-wrapper.js"



// class FetchWrapper {
//     constructor(baseURL){
//         this.baseURL = baseURL;
//     }

//     get(endpoint) {
//         return fetch(this.baseURL + endpoint)
//         .then(response => response.json());
//     }

//     put(endpoint, body) {
//         return this.#send("PUT", endpoint, body);
//     }

//     post(endpoint, body) {
//         return this.#send("POST", endpoint, body);
//     }

//     delete(endpoint, body) {
//         return this.#send("DELETE", endpoint, body);
//     }

//     #send(method, endpoint, body) {
//         return fetch(this.baseURL + endpoint, {
//             method,
//             headers: {
//                 "Content-Style": "application/json"
//             },
//             body: JSON.stringify(body)
//         }).then(response => response.json())
//     }
// }


// document.querySelector("CSS ID");
// document.querySelectorAll("CSS ID"); // WIll return a node list, to conver to this:
// [...document.querySelectorAll("CSS ID")]// Will make node list into array

// const element = document.querySelector("#test");
// console.log(element.textContent); // Will return "This is a sample text"
// console.log(element.innerHTML); // Will return "This is a <strong>sample</strong> text"
// //To change content
// element.innerHTML = "This is the new content"; //Letting user input innerHTML is a security issue
// //can also be written as:
// document.querySelector("#test").innerHTML = uss

// //If an element has no closing tag, then use the "value" property
// const email = document.querySelector("#email");
// console.log(email.textContent); // undefined ❌ (there's no closing tag)
// console.log(email.value); // text written in the email field
// using value inside the an element will already prefill text box to make life easier

//                  DOM MISC

{/* <h1 id="headline">Welcome</h1>
headline.innerHTML = ""; //This empies out the content but doesnt remove element

// To find body:
document.body;
//To add dark mode to HTML:
document.documentElement.classList.add("dark-mode");

// To add data to html, add "data- before"
<form id="payment-form" data-currency="EUR" data-user-id="2">
</form>
console.log(form.dataset); //This will give you an object of data in form

//To add more data into dataset
<div id="navbar" data-user-id="42"></div>
const navbar = document.querySelector("#navbar");
navbar.dataset.userId = 43; // data-user-id="43"
navbar.dataset.rememberMe = false; // data-remember-me="false" */}

//This challenge returns a data value form an element. The data objective value is an int
// const getUserIdFromCard = () => {
//     const userId = document.querySelector("#user-card");
//     const value = userId.dataset.userId;
//     return Number.parseInt(value, 10); //This convers "34" into 34
// }

//This challenge returns a data value from an alement. The data objective value is a boolean
// const getIsActiveFromCard = () => {
//     const userData = document.querySelector("#user-card");
//     const answer = userData.dataset.isActive; //This stores the string "true"
//     return answer === "true"; //Since we want the value of boolean, we compare it to a string "true"
// }

//      TRAVERSING THE DOM

// //Selecting Parent element: .parentElement
// <div class="article">
//     <h1>Hello World</h1>
//     <p>Lorem ipsum</p>
// </div>
// const h1 = document.querySelector("h1");
// console.log(h1.parentElement); // <div class="article">...</div>

//Selecting the closest ancestot by CSS-selector: .closest("CSS-selector")
{/* <div class="main">
    <div class="banner">
        <h1>Hello World</h1>
    </div>
</div>
const h1 = document.querySelector("h1");
console.log(h1.closest(".main")); // <div class="main">...</div> */}


//                      DOM APPEND AND PREPEND
// element.insertAdjacent(position, htmlString)

{/* <div id="job-positions">
    <div class="position">2009-2013</div>
    <div class="position">2013-2015</div>
</div>

//To append
const position = document.querySelector("#job-positions");
position.insertAdjacentHTML("beforeend", `<div class="position">2015-2020</div>`);
//Result:
<div id="job-positions">
    <div class="position">2009-2013</div>
    <div class="position">2013-2015</div>
    <div class="position">2015-2020</div>
</div>

//To prepend
const position = document.querySelector("#job-positions");
position.insertAdjacentHTML("afterbegin", `<div class="position">2007-2009</div>`);
//Result:
<div id="job-positions">
    <div class="position">2007-2009</div>
    <div class="position">2009-2013</div>
    <div class="position">2013-2015</div>
</div> */}

//To insert a list of an array in to html you combine forEach and InsertAdjacentHTML
{/* <ul id="apps-list"></ul>
const apps = ["Calculator", "Phone", "Messages"]; */}

//1st: Select List
// const list = document.querySelector("#apps-list");

//2nd: Iterate through array and insert each app in html
// apps.forEach(app => {
//     list.insertAdjacentHTML("beforeend", `<li>${app}</li>`)
// })

//The resulting DOM will be this:
{/* <ul id="apps-list">
    <li>Calculator</li>
    <li>Phone</li>
    <li>Messages</li>
</ul> */}


//We are fetching an API that contains a list of items. Get those items and insert them in theHTML
// const init = () => {
//     const list = document.querySelector("#items-list");
//     fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/shoppinglist/items.json")
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(item => {
//             list.insertAdjacentHTML("beforeend", `<li>${item.item}</li>`);
//         });
//     });
// }

// You can also create elements by scratch using the: .createElement("element")
// const paragraph = document.createElement("p");
// paragraph.classList.add("text-center");
// paragraph.textContent = "Hello World";
// console.log(paragraph); // <p class="text-center">Hello World</p>

// // Then you can appendChild somwhere in the DOM using .appendChild()
// document.body.appendChild(paragraph);


//                                          DOM EVENTS 1
//Adding an event listener: .addEventListener(eventType, callback)
{/* <button id="app-button">Click me</button>
const bubutton");
button.addEventListener("click", () => {
    console.log("Button Clicked"); //This is a callback that will be logged in the future.tton = document.querySelector("#app-
}); */}

//We want to disable a button on click
{/* <button id="app-button">Login</button> */}
// const login = document.querySelector("#app-button");
// login.addEventListener("click", () => {
//     login.setAttribute("disabled", "disabled"); //On click, thie attribute of login button will be disabled
// })

//We want to disable the login button and add loading text
{/* <button id="app-button">Login</button> */}
// const button = document.querySelector("click", () => {
//     button.addEventListener("disabled", "disabled"); //This will disable button on click
//     button.textContent = "Loading..."; //This will add text to button saying loading
// })

//We want to console log Hello world after 2 seconds the button is clicked
{/* <button id="app-button">Login</button>
const button = document.quertSelector("click", () => {
    setTimeout(() => {
        console.log("Hello World!");
    }, 2_000); //Sets 2,000 milisecond timer
}) */}

//You are toggling a sidebar which is controlled by a side bar button
// const sideBarButton = document.querySelector("#menu-sidebar");
// const sideBarMenu = document.querySelector("#app-sidebar");

// sideBarButton.addEventListener("click", () => {
//     sideBarMenu.classList.toggle("show");
// })

//Toggle button that adds and removes dark mode 
// const themeButton = document.querySelector("#theme-btn");
// themeButton.addEventListener("click", () => {
//     document.documentElement.classList.toggle("dark"); //Will change the whole html into dark mode
// })

//There is an enable button and a disable button. When you click on one or the other it enables or disables start button
// const disableButton = document.querySelector("#btn-disable");
// const enableButton = document.querySelector("btn-enable");
// const startButton = document.querySelector("#btn-start");

// disableButton.addEventListener("click", () => {
//     startButton.setAttribute("disabled", "disabled"); //Sets start button as disabled
// });

// enableButton.addEventListener("click", () => {
//     startButton.removeAttribute("disabled"); //Sets start button as enabled.
// });

// Every event listener has details in the parameter provided by the web.
// To access use "event" parameter.
// button.addEventListener("click", event => {
//     console.log(event); //event callback. This will log an object of event details form the web
// })

//To refer to the element which the event listener is attached to use event.currentTarget
// button.addEventListener("click", event => {
//     console.log(event.currentTarget); // This will output the HTML line of button, since thats the element attached
// })

//To refer to the text inside the button use event.currentTarget.textContent
// button.addEventListener("click", event => {
//     console.log(event.currentTarget.textContent); //Will output a string that is on the button
// });

//You can set this value to a constant to make it more visually easy
// buttener("click", event => {
//     const clickedElement = event.currentTarget;
//     console.log(clickedElement.textContent);ton.addEventLis
// })

//Another way to see this is by adding a debugger which allows you to not wait for the click event and see event.currentTarget
// button.addEventListener("click", event => {
//     console.log(event);
//     debugger; //This will pause the execution, which allows us to see currentTarget in dev tools
// })


//Excercise, there's a button which when it's clicked you have to toggle class active
// const button = document.querySelector("#my-button");
// button.addEventListener("click", event => {
//     const thisEvent = event.currentTarget;
//     thisEvent.classList.toggle("active");
// })


//To do this for multiple elements, You querySelectorAll(), and then you iterate through the nodeList
{/* <button>Travel</button>
<button>Camping</button>
<button>Relaxation</button> */}

// const everyButton = document.querySelectorAll("button"); //Selecing NodeList

//You forEach through the NodeList
// everyButton.forEach(button => {
//     button.addEventListener("click", event => {
//         console.log(event.currentTarget); //Lets us know which button out of all was clicked
//         console.log(event.currentTarget.textContent); //Lets us know the text in button that was clicked
//     })
// })

//Ex selects a button and gives it the active class, but removes the active class from any other past selected buttons
// const allButtons = document.querySelectorAll(".cards .card");

// allButtons.forEach(button => {
//     button.addEventListener("click", event => {
//         document.querySelector(".cards .card.active")?.classList.remove("active") //Selecting the button that has an active class and removing it
//         event.currentTarget.classList.add("active"); //Checks for the curren button active and adds the active class
//     })
// })

//This excercise is a tab that removes a highlight and adds to the current as well as it removes data and adds to current highlight
// const allTabs = document.querySelectorAll(".tabs .tab");

// allTabs.forEach(tab => {
//     tab.addEventListener("click", event => {
//         //This will deactive current active and active new active tab selected
//         document.querySelector(".tab.active").classList.remove("active");
//         event.currentTarget.classList.add("active");

//         //This will remove the current data that has the show class
//         document.querySelector(".tab-content.show").classList.remove("show");
        
//         //This stores the dataset content in a variable
//         const data = event.currentTarget.dataset.content;

//         //Selects the content of the dataset of the currentarget that is clicked on, and adds the class show
//         document.querySelector(data).classList.add("show")
//     })
// })


//  DOM FORMS
//When working with submit buttons. Submit has to be in a form element, must have textarea inside form, must have a SUBMIT button
{/* <form id="address-form">
    <input type="text" placeholder="Enter your address">
    <input type="submit" value="Save">
</form> */}

// const form = document.quertSelector("#address-form");
// form.addEventListener("submit", event => { //"submit" is the event listener we add
//     //Whatever callback when the form is submitted
// })

//When you submit a form, usually the browser sends the values to the backend and the website has to refresh
//To do this without refreshing the website everytime you add the evet.preventDefault(); *Refreshing when submitting is web default*
// const form = document.querySelector("#address-form");
// form.addEventListener("submit", event => {
//     event.preventDefault(); //This is a method that will stop the website form refreshing
// })

//To access user input when they submit a form
{/* <form id="weather-form">
    <input type="text" id="city" placeholder="Enter your city">
    <input type="submit" value="Show weather">
</form> */}

// const weatherForm = document.querySelector("#weather-form");
// const citySubmitted = document.querySelector("#city");

// weatherForm.addEventListener("submit", event => {
//     event.preventDefault();

//     //We access the city.value here beacuse this is when the user submits the form which contains the value
//     console.log(citySubmitted.value);
    
//     //This is a hypothetical function that takes city.value/the city as an argumet and fetches the API
//     getWeatherInfo(citySubmitted.value)
// })

//              To remove event Listener
// You have to store the callback in a variable, then use element.removeEventListener(ecentType, callback)
// const button = document.querySelector("button");

// const handleClick = () => { //This is the callback function
//     console.log("button clicked");
// }

// button.addEventListener("click", handleClick);
// button.removeEventListener("click", handleClick); //This allows you to remove. 

//              To make event listener only work once
// You have to add a 3rd argument which is an object, Then use once: true
// const button = document.querySelector("button");
// button.addEventListener("click", event => {
//     console.log("button clicked")
// }, {
//     once: true //This is the third parameter. After user clicks on button, eventlistener will be removed
// });


//              To make events not bubble up the DOM tree, you can stop it with 
// event.stopPropagation();
/*<a class="card">
    <button>close</button>
</a>*/

// document.querySelector(".card").addEventListener("click", event => {
//     console.log("Card clicked");
// })

// document.querySelector("button").addEventListener("click", event => {
//     console.log("Card closed");
//     event.stopPropagation(); //This line will stop father event from executing as well.
// }) 


//      Focus and Blur events
//These are used when the user either puts his cursor on text box "focus", or takes it off "blur"
{/* <input type="text" id="name" placeholder="Enter your name"></input>

const name = document.querySelector("#name");
name.addEventListener("focus", event => {
    console.log("user has focused inside the name")
})
name.addEventListener("blur", event => {
    console.log("user has removed focus from the name")
}) */}


//To signify that the content in the HTML is loaded use:
// "DOMContentLoaded" 
// document.addEventListener("DOMContentLoaded", event => {
//     console.log("DOM is ready");
// })

// To signify that that there is scrolling on the page
//"scroll", often used on window element
// window.addEventListener("scroll", event => {
//     console.log("page scrolled");
// })

// To preview that there has been a change in a select element
// Use "change" , used on the select element
{/* <select id="countries">
    <option value="">Select a country</option>
    <option value="NL">Netherlands</option>
    <option value="BR">Brazil</option>
</select> */}

// const countries = document.querySelector("#countries");
// countries.addEventListener("change", event => {
//     console.log(countries.value); //countries.value will read the new value after user selected
// })

// keydown/keyup : these events signify when the user has typed a character on a keyboard
// keydown is when the key is pressed, keyip is when the character has been typed.
//These are usually used on the codument element or inside a text boc
// document.addEventListener("keyup", event => {
//     console.log(event.key); //event.key will let us know which character has been typed
// })

// document.addEventListener("keydown", event => {
//     console.log(event.key);
// })


//This excercise adds a class sucess and removes it depending on two conditions, if the cursos is on the username
//And if the characters are at least 6
// const userName = document.querySelector("#user-name");

// userName.addEventListener("blur", event => {
//     if (userName.value.length >= 6) {
//         userName.classList.remove("error")
//         userName.classList.add("success")
//     } else {
//         userName.classList.remove("success")
//         userName.classList.add("error")
//     }
// })

//In this excercise, you are accesing the value that is selected from the dropdown menu, and outputting it
// import {getTranslation} from "./helpers.js"

// const languages = document.querySelector("#languages-list");
// const outputText = document.querySelector("#output-text");


// languages.addEventListener("change", event => {
//     outputText.textContent = getTranslation(languages.value);
// })

// ALL DOM EVENTS:
// click: When user clicks "Button"
// Submit: When user submits "Form"
// Focus: When user clicks on active user input
// Blur: When user removes focus
// DOMContentLoaded: Signifies that the HTML has been loaded successfully. used on "document.addEventListener"
// scroll: When user scrolls. used on "window.addEventListener"
// change: lets you know when user selected new choice from "<select>".
// keydown & keyup: when user has typed a characted on keyboard.


/* There is an ateendee list where you can add attendees. 
Implement shortcuts so when user presses on "n", it prompts the new tab to input user, 
when user presses on "Escape", it puts away the table. 
Make sure to only toggle each key depending on the table being on or off
*/

// import {init, toggelModal} from "./attendees.js";

// init();

// const openModal = document.querySelector("#app-modal");

// //Add event listener on the whole document, since it's a shortcut
// document.addEventListener("keyup", event => {
//     const keyPressed = event.key; //Sets the value of the key pressed to a variable
    
//     //We are checking if n is pressed, and if the show class is not contained, which means that the n window isnt showing
//     if (keyPressed === "n" && !openModal.classList.contains("show")) {
//         toggelModal();
//     } else if (keyPressed === "Escape" && openModal.classList.contains("show")) {
//         toggelModal();
//     }
// })


//In this excercise you are filtering a list and outputing data
// import {data} from "./data.js";

// const search = document.querySelector("#app-search");
// const results = document.querySelector("#results-list");

// const render = (query = "") => {
//     const cleanedupQuery = query.trim().toLowerCase();
//     const filtered = data.filter(item => item.spacecraft.toLowerCase.includes(cleanedupQuery));

//     results.innerHTML = "";
//     filtered.forEach(item => {
//         results.insertAdjacentHTML("beforeend", `<li>${item.spacecraft}</li>`)
//     });
// };

// search.addEventListener("keyup", event => {
//     render(search.value);
// })

// render();

//              DOM + fetch

//FetchWrapper

// class FetchWrapper {
//     constructor(baseURL){
//         this.baseURL = baseURL;
//     }

//     get(endpoint) {
//         return fetch(this.baseURL + endpoint)
//         .then(response => response.json());
//     }

//     put(endpoint, body) {
//         return this.#send("PUT", endpoint, body);
//     }

//     post(endpoint, body) {
//         return this.#send("POST", endpoint, body);
//     }

//     delete(endpoint, body) {
//         return this.#send("DELETE", endpoint, body);
//     }

//     #send(method, endpoint, body) {
//         return fetch(this.baseURL + endpoint, {
//             method,
//             headers: {
//                 "Content-Style": "application/json"
//             },
//             body: JSON.stringify(body)
//         }).then(response => response.json())
//     }
// }


// const getAPI = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");

// API.get("/notifications/new.json").then(data => {
//     console.log(data);
// });


// const putAPI = new FetchWrapper("https://api.learnjavascript.online");

// putAPI.put("/notifications/new.json", {
//     grade: 18
// }).then(data => {
//     console.log(data);
// });


// const postAPI = new FetchWrapper("https://api.learnjavascript.online");

// postAPI.post("/notifications/new.json", {
//     grade: 18
// }).then(data => {
//     console.log(data);
// });

// const deleteAPI = new FetchWrapper("https://api.learnjavascript.online");

// deleteAPI.delete("/notifications/new.json", {
//     grade: 18
// }).then(data => {
//     console.log(data);
// });


// Fetch on Click
{/* <button id="button">Get data</button>
<div id="result"></div>

const button = document.querySelector("#button");
const result = document.querySelector("#result");
const API = new FetchWrapper("https://api.learnjavascript.online");

button.addEventListener("click", () => {
    API.get("/notifications/new.json").then(data => {
        console.log(data);
        result.textContent = data.message;
    });
}); */}


// Fetch on submit
{/* <form id="form">
<input type="text" id="input" />
<input type="submit" />
</form>

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const API = new FetchWrapper("https://api.learnjavascript.online");

form.addEventListener("submit", event => {
    event.preventDefault();

    API.put("/demo/grades.json", {
        grade: input.value
    }).then(data => {
        console.log(data);
    });
}); */}

//User changes value in drop down menu, we fetch temperature according to value picked
// import FetchWrapper from "/.fetch-wrapper.js";

// const cityDropdown = document.querySelector("#cities-dropdown");
// const result = document.querySelector("#weather-result");
// const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app")

// cityDropdown.addEventListener("change", () => {
//     API.get(`/weatherstack/${cityDropdown.value}.json`)
//     .then(data => {
//         const temperature = data.current.temperature;
//         result.textContent = `It's ${temperature} degrees celsius.`
//     });
// });


//User adds a grade in a submit application, program Posts
// import FetchWrapper from "/.fetch-wrapper.js"

// const userGrade = document.querySelector("#user-grade");
// const API = new FetchWrapper("https://api.learnjavascript.online/demo/")

// userGrade.addEventListener("submit", event => {
//     event.preventDefault();

//     API.post("grades.json", {
//         grade:userGrade.value
//     }).then(data => {
//         console.log(data.grade);
//     });
// });

//User adds first name and last name on update button, puts on API
// import FetchWrapper from "./fetch-wrapper.js";

// const form = document.querySelector("#user-form");
// const firstName = document.querySelector("#first-name");
// const lastName = document.querySelector("#last-name");
// const API = new FetchWrapper("https://api.learnjavascript.online/demo/");

// form.addEventListener("submit", event => {
//     event.preventDefault();

//     API.put("user.json", {
//         firstName: firstName.value,
//         lastName: lastName.value
//     }).then(data => {
//         console.log(data.user)
//     });
// });

//user enters to do list and category, we display todo lists and push category
// import FetchWrapper from "./fetch-wrapper.js";

// const form = document.querySelector("#todo-form");
// const button = document.querySelector("#button-add")
// const title = document.querySelector("#todo-title");
// const category = document.querySelector("#todo-category");
// const list = document.querySelector("#todos-list");

// const API = new FetchWrapper("https://api.learnjavascript.online/demo");

// const getTodos = () => {
//     API.get("/todos").then(data => {
//         list.innerHTML = "";
//         data.todos.forEach(todo => {
//             list.insertAdjacentHTML("beforeend", `<li><div class="card">[${todo.category}] ${todo.title}</div></li>`);
//         });
//     });
// }

// form.addEventListener("submit", event => {
//     event.preventDefault();

//     button.setAttribute("disabled", "disabled");
//     API.put("/todos", {
//         title: title.value,
//         category: category.value
//     }).then(data => {
//         console.log(data);
//         if(!data.error) {
//             getTodos();i
//         }
//     })
//     .finally(() => {
//         button.removeAttribute("disabled");
//     });
// });

// getTodos();

//Get github repository after username inputs name:
// import {startLoader, stopLoader} from "./helpers.js";
// import FetchWrapper from "./fetch-wrapper.js";

// const form = document.querySelector("#repos-form");
// const username = document.querySelector("#github-username");
// const button = document.querySelector("#get-repos");
// const list = document.querySelector("#repos-list");

// const API = new FetchWrapper("https://api.github.com");

// form.addEventListener("submit", event => {
//     event.preventDefault();

//     API.get(`/users/${username.value}/repos`)
//     .then(data => {
//         console.log(data);
//         list.innerHTML = "";
//         data.forEach(repo => {
//             list.insertAdjacentHTML("beforeend", `<li>
//                 <a href="${repo.html_url}" target="_blank">
//                     <h2>${repo.full_name}</h2>
//                     <p>${repo.description}</p>
//                 </a>
//             </li>`);
//         });
//     })
//     .finally(() => {
//         stopLoader(button, "Get repos")
//     });
// });

//This is the final line

//After this line, I added all of my notes from my Mac device
//                                                                       JS NOTES

// 60 - DOM + fetch real API's
// User can submit username on a form, form fetches the API information from github repost. Gives clickable link, as well as repo name, description
// import {startLoader, stopLoader} from "./helpers.js";
// import FetchWrapper from "./fetch-wrapper.js";

// const API = new FetchWrapper("https://api.github.com");

// const form = document.querySelector("#repos-form");
// const username = document.querySelector("#github-username");
// const button = document.querySelector("#get-repos");
// const list = document.querySelector("#repos-list");

// //First we want to add a submit event listener to the form element since the user is submiting a username
// form.addEventListener("submit", event => {
//     event.preventDefault(); //We prevent default to make sure that the website doesnt refresh when username is submitted
//     startLoader(button); //We startLoader function that we imported on the button element

//     API.get("/users/{username}/repos") //Make a get API call to the endpoint where we can get repos information
//     .then(data => {
//         console.log(data); //Console log the data to see what information we can access

//         list.innerHTML = ""; //We empty out the HTML inside of list everytime this is run, so the search is wiped clean
        
//         data.forEach(repo => { //We iterate through all of the usernames entered. 

//                 //We access the list element where info will be displayedm and insert HTML. <a> is for clickable link, <h2> is for rep title, <p> for descrip
//                 list.insertAdjacentHTML("beforeend", ` 
//                 <li>
//                     <a href=${repo.html_url} target="_blank">
//                     <h2>${repo.full_name}</h2>
//                     <p>${repo.description}</p></a> 
//                 </li>`);
//         });
//     })

//     //We add a .finally to handle whatever the promise is, we call the stopLoader function on the button element, and make sure that it's reset with the title given.
//     .finally(() => {
//         stopLoader(button, "Get Repos");
//     });
// });


//                                                                      60 DOM + fetch real API's

// In this project, the user can change 2 drop down menus and find the currency exchange between those 2 values
// import FetchWrapper from "./fetch-wrapper.js";

// const base = document.querySelector("#base-currency");
// const target = document.querySelector("#target-currency");
// const result = document.querySelector("#conversion-result");

// const API = new FetchWrapper(" https://v6.exchangerate-api.com/v6/9a69951bfce304d6eaacffce/");

// //We make an equation which we are going to use once an EventListener is triggered.
// const currencyEquation = () => { 
//     API.get(`latest/${target.value}`) //We interpolate the endpoint of the API with whatever the target.value is to get the correct currency
//     .then(data => {
//         console.log(data);
//         result.textContent = data.conversion_rates[target.value]; //We set the textcontent in result element to equal the value of the conversion rate requested.
//     });
// }

// // We add an event listener to each of the drop down menus that can be changed
// base.addEventListener("change", () => { 
//     currencyEquation();
// });

// target.addEventListener("change", () => {
//     currencyEquation();
// });


//                                                          62 Functions - Lexical Scope

// When working wth "this" and you use the function syntax, function() assigns a new value to "this", so anything done after that is going to be undefined

// class App {
//     constructor() {
//         this.navbar = document.querySelector("#navbar");
//         this.initEvents();
//     }

//     initEvents() {
//         //capture the value so that we can use it inside the function() { }
//         const that = this;
//         this.navbar.addEventListener("click", function() {
//             console.log(this.navbar); // undefined because `this` inside the function has a new value
//             console.log(that.navbar); // returns the navbar because `that` holds the value of the outer function
//             that.navbar.remove(); // works
//         });
//     }
// }

//                                        OR
// class App {
//     constructor() {
//         this.navbar = document.querySelector("#navbar");
//         this.initEvents();
//     }

//     initEvents() {
//         this.navbar.addEventListener("click", function() {
//             console.log(this.navbar); // undefined because `this` inside the function has a new value
//             console.log(that.navbar); // returns the navbar because `that` holds the value of the outer function
//             that.navbar.remove(); // works
//         }.bind(this)); //bind the value of this from outside the function into the inner function
//     }
// }

//                                          OR
// class App {
//     constructor() {
//         this.navbar = document.querySelector("#navbar");
//         this.initEvents();
//     }

//     initEvents() {
//         this.navbar.addEventListener("click", () => { // Arrow function
//             console.log(this.navbar);
//             this.navbar.remove();
//         });
//     }
// }


//                                                               62 Functions II - Callbacks

//You can call the name of the function that was initialized, inside another function which accepts a callback
// const registerUser = (user, callback) => { 
//     if (!user.id) {
//         return false;
//     }

//     console.log("registering user");
//     //call the "callback" function passed as an argument
//     callback();
// }

// // Sample usage
// const sendWelcomeEmail = () => {
//     console.log("Sending welcome email");
// }
// registerUser({id: 1, name: "Vanessa"}, sendWelcomeEmail); //sendWelcomeEmail will run after the console logs. Then it will run the callback()
// registerUser({id: 2, name: "Jogn"}, () => {
//     console.log("this also works!")
// });

// //Example:
// const delay = (callback, milliseconds) => {
//     setTimeout(callback, milliseconds);
// };


// // Sample usage - do not modify
// delay(() => {
//     console.log("This will be delayed 1 second");
// }, 1_000);


//                                                              63 Exceptions 
//Try - Catch 
// const sayHello = () => {
//     console.log("Hello!");
// };

// console.log("Step 1");
// try {
//     sayHello()
//     console.log("Step 2");
// } catch (error) { //This will not be triggered because there is no error in the try
//     console.log("Step 3");
//     console.error(error);
// }
// console.log("Step 4");

/*      This will log:
Step 1
Hello!
Step 2
Step 4
*/

//Throw Exceptions
// const sayHello = name => {
//     if (!name) {
//         throw new Error("The name entered is not valid");
//     }
//     console.log(`Hello ${name}`);
// }

// console.log("Code before");

// try {
//     sayHello()
// } catch (error) {
//     console.error("Functionality in sayHello() not used correctly");
// };

// console.log("Code after");

//Silencing error, usually done when there is an important task and something else happens in the background
// const button = document.querySelector("#remove-title"); //Button that removes <p>.

// button.addEventListener("click", () => {
//     try {
//         document.querySelector("h1").remove();
//     } catch (error) { //Once the button is pressed once and the title is removed, if button is pressed again, it will catch an error instead of breaking the app
//         console.error(error);
//     };
// });

//                                                                  64 - Intro to async await
//                                  async 
// const getNumber = () => {
//     //getNumber is a function that returns a promise below.
//     return new Promise(resolve => { 
//         resolve(42);
//     });
// }
// getNumber().then(value => {
//     console.log(value);
// });


//  //This can be re-written as
//  const getOtherNumber = async () => { //Syntatic sugar, we dont need to return new Promise, it is included in async ().
//     resolve(42);
//  };
//  getOtherNumber.then(value => {
//     console.log(value);
//  });

 //Different ways to write async
 //function
//  async function getValue() {
//     return 42;
//  }
//  getValue.then(value => {
//     console.log(value);
//  });

//  //arrow function
//  const getValue = async () => {
//     return 42;
//  }
//  getValue.then(value => {
//     console.log(value);
//  })

//  //arrow function with param
//  const isAdmin = async type => {
//     return type === "admin";
//  }
//  isAdmin("admin").then(value => {
//     console.log(value); //true
//  });

// //Class methods
// class User {
//     async isAdmin(type) {
//         return type === "admin";
//     }
// }
// const user = new User;
// user.isAdmin("admin").then(value => {
//     console.log(value);
// });

//                                  await
//await can only be used in functions that are async, what it does is that it computes all the ".then" behind the scenes
// This is how it would look without await, and just using promises
// async function getValue() {
//     return 42;
// }

// const init = () => {
//     getValue().then(result => {
//         console.log(result);
//     });
// }

//This is how it would look using await
// async function getValue() {
//     return 42;
// }

// const initAwait = async () => {
//     const result = await getValue(); //await getValue is the same as getValue().then(...), You store in const to show the output
//     console.log(result);
// }

// Another example

// This is a function that takes milliseconds as a parameter
// const wait = milliseconds => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve();
//         }, 1_000);
//     });
// }

// const init = async () => {
//     console.log("A");
//     await wait(3000);
//     console.log("B");
// };

// async await with fetch
// const getNotificationsCount = async () => {
//     const promise = await fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json");
//     const data = await promise.json();

//     console.log(data); //The data contains an object with a "count"
//     return data.count; //Returning that specific value of the count
// }

// //Since getNotificationsCount returns a promise itself, we still have to use .then to access the data of function.
// getNotificationsCount.then(data => {
//     console.log(data);
// })

// Downsides of async/await
// const wait = milliseconds => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve();
//         }, milliseconds);
//     });
// }

// /*We wouldnt want to use aysnc/await in this function bc, it will delay the fetch, making the website slower.
// So we work with promises and .then statements instead*/
// const initialize = () => {
//     wait(2_000).then(() => {
//         console.log("Waited 2 seconds");
//     });
//     fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     });
// }

// initialize(); //We see that the console logs the fetch request and then it logs the message.

// async/await example fetching a humidity API
// *HMTL file not included, just JS*
// const getHumidity = async city => {
//     const reponse = await fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/${city}.json`);
//     const data = await reponse.json();

//     console.log(data.current.humidity); //Accessing the value of humidity in the data
//     showHumidity(data.current.humidity);
// };

// const result = document.querySelector("#result"); //Accessing ID from using DOM. 
// const showHumidity = humidity => {
//     result.textContent = `it's ${humidity} degreees calcius`; //Changing textContent in result to a statement using Concatenation.
// }

//Example using async/await on a POST method while fetching API
// const saveGrade = async grade => {
//     const response = await fetch("https://api.learnjavascript.online/demo/grades.json", {
//         method: "POST",
//         body: JSON.stringify({
//             grade: grade
//         })
//     });
//     const data = await response.json();
//     console.log(data);
// }

// //This function will add an event listener and check for a submit, on an element. Then it will run saveGrade()
// const form = document.querySelector("#grades-form"); //form element that has a "save grade" button
// const userGrade = document.querySelector("#user-grade"); //input element that user works with

// form.addEventListener("submit", event => {
//     event.preventDefault(); //Makes sure that the page wont reload whe user submits.

//     saveGrade(userGrade.value); //Runs the function saveGrade with the grade inputed in the user-grade element.
// });

// Handling rejected awaits with try catch blocks
// 1st way is by either by using a different function with try catch block *allows to handle errors case by case*
// const getUnreadCount = async () => {
//     const response = await fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json");
//     const data = await response.json();
//     return data.count;
// }

// const init = async () => {
//     //getUnreadCount(); promise can reject so we wrap it with a try, catch statement.
//     try {
//         const result = await getUnreadCount(); 
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// // 2nd way to hangle error is by wrapping getUnreadCount with try catch. *Will handle all errors the same way*
// const getUnreadCount = async () => {
//     try {
//         const response = await fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json");
//         const data = await response.json();
//         return data.count;
//     } catch (error) {
//         throw "An error has occurred";
//     }
// }

/* In this excercise I will make a class that contains a "get" operation,
I will then use that class to fetch an endpoint using async/await,
as well as handling errors
*/
// class FetchWrapper {
//     constructor(baseURL) {
//         this.baseURL = baseURL;
//     };

//     async get(endpoint) {
//         const reponse = await fetch(this.baseURL + endpoint)
//         return reponse.json();
//     };

//     async put(endpoint, body) {
//         const response = await fetch(this.baseURL + endpoint, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(body)
//         });
//         return response.json();
//     };

//     async post(endpoint, body) {
//         const response = await fetch(this.baseURL + endpoint, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(body)
//         });
//         return response.json();
//     };

//     async delete(endpoint, body) {
//         response = await fetch(this.baseURL + endpoint, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(body)
//         });
//         return response.json();
//     };
// };

// const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/");

// const checkForNotifications = async () => {
//     try {
//         const data = await API.get("notifications/new.json");
//         console.log(data);
//         showNewNotifications(data.count);
//     } catch (error) {
//         showNewNotifications();
//     };

// };

// function showNewNotifications(count) {
//     if (!count) {
//         console.log("We could not load your notifications. Try again later.");
//         return;
//     }
//     console.log(`You have ${count} new notifications. Would you like to read them?`)
// }

// checkForNotifications();

//Dynamic imports
//Exampe of importing a library called "chat-library", on user Interaction
//These examples are done without handling errors.
const button = document.querySelector("button");

button.addEventListener("click", async () => {
    const module = await import("chat-library");
    module.init(); //This is assuming that chat-library has an init() that is being exported
})

//This is an example of Dynamic imports with destructuring
const anotherButton = document.querySelector("click", async () => {
    //Since we are working with objects, I can destructure the init function from the module object
    const {init} = await import("chat-library");
    init();
})