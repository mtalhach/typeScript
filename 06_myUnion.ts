let score: number | string = 33;
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};
let talha: User | Admin = { name: "Talha", id: 123 };
talha = { username: "abc", id: 456 };

function getDbId(id: number | string) {
  console.log(`DB id is: ${id}`);
}
getDbId(3);
getDbId("3");

function getDbId1(id: number | string) {
  // id.toUpperCase();
  if (typeof id === "string") {
    id.toUpperCase();
  }
}

//array
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
// const data3: number[] | string[] = ["1", "2", 3];

export {};
