const mySym = Symbol("key1")

const JsUser = {
    name: "Ayush",
    "full name": "Ayush Khosla",
    [mySym] : "mykey1",
    age: 22,
    location: "Punjab",
    email: "ayushkhosla31@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Ayush@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Ayush@company.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello");   
}
JsUser.greetingTwo = function() {
    console.log(`Hello, ${this.name}`);   
}
console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo());



