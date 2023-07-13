function addTwo(num: number): number {
  // num.toUpperCase()
  return num + 2;
  // return "Hello";
}
addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase();
}
getUpper("talha");

function signUpUser(name: string, email: string, isPaid: boolean) {}
signUpUser("talha", "talhach@gmail.com", false);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};
loginUser("abc", "abc@gmai;.com");

// function getValue(myVal: number):boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
heros.map((hero: string) => {
  return `hero is${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): void {
  throw new Error(errmsg);
}
export {};
