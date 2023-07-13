const user: (string | number)[] = [1, "abc"];

let user1: [string, number, boolean];
user1 = ["abc", 123, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];
const newUser: User = [112, "abc@gmail.com"];

newUser[1] = "abc@gmail.com";
// newUser.push(true);
