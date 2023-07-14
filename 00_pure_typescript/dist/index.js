"use strict";
// class User {
//   public email: string;
//   private name: string;
//   // city: string = "";
//   // readonly city: string = "";
//   readonly city: string = "Lahore";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // private _courseCount = 1;
        this._courseCount = 1;
        this.city = "Lahore";
    }
    deleteToken() {
        console.log("token deleted");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1");
            this._courseCount = courseNum;
        }
    }
}
const talha = new User("abc@gmail.com", "talha");
// talha.city = "Lahore";
// talha.city;
talha.name;
// talha.deleteToken();
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
