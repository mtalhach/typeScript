var score = 33;
score = 44;
score = "55";
var talha = { name: "Talha", id: 123 };
talha = { username: "abc", id: 456 };
function getDbId(id) {
    console.log("DB id is: ".concat(id));
}
getDbId(3);
getDbId("3");
function getDbId1(id) {
    // id.toUpperCase();
    if (typeof id === "string") {
        id.toUpperCase();
    }
}
//array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
// const data3: number[] | string[] = ["1", "2", 3];
