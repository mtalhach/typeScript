"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase()
    return num + 2;
    // return "Hello";
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("talha");
function signUpUser(name, email, isPaid) { }
signUpUser("talha", "talhach@gmail.com", false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("abc", "abc@gmai;.com");
// function getValue(myVal: number):boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
