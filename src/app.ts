// type check
function addData(obj: Person): Person {
  obj.age += 2;
  return obj;
}

interface Person {
  name: string;
  age: number;
}

const data: Person = {
  name: "Max",
  age: 11,
};
const value = addData(data);
value.name = "sajib";
console.log(value);
