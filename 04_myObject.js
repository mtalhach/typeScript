var User = {
    name: "Talha",
    email: "abc@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Talha", isPaid: false });
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createUser1(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Talha", isPaid: false, email: "abc@gmail.com" };
createUser(newUser);
function createUser2(user) {
    return { name: "", email: "", isActuve: true };
}
createUser2({ name: "", email: "", isActuve: true });
var myUser1 = {
    _id: "1245",
    name: "Talha",
    email: "abc@gmail.com",
    isActuve: false,
};
myUser1.email = "def@gmail.com";
// myUser1._id = "12345";
