const User = {
  name: "Talha",
  email: "abc@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}
createUser({ name: "Talha", isPaid: false });

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

function createUser1({ name: string, isPaid: boolean }) {}
let newUser = { name: "Talha", isPaid: false, email: "abc@gmail.com" };
createUser(newUser);

type User = {
  name: string;
  email: string;
  isActuve: boolean;
};
function createUser2(user: User) {
  return { name: "", email: "", isActuve: true };
}
createUser2({ name: "", email: "", isActuve: true });

type User1 = {
  readonly _id: string; //readOnly
  name: string;
  email: string;
  isActuve: boolean;
  creditCardDetails?: number; //optional
};
let myUser1: User1 = {
  _id: "1245",
  name: "Talha",
  email: "abc@gmail.com",
  isActuve: false,
};
type cardNumber = {
  cardnumber: string;
};
type cardDate = {
  cardDate: string;
};
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
myUser1.email = "def@gmail.com";
// myUser1._id = "12345";

export {};
