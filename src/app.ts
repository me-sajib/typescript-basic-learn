// boolean check

function isMarried(status: boolean): void {
  status = !status;
  console.log(status);
}

interface Person {
  name: string;
  age: number;
  info: string[];
  married: boolean;
}

const data: Person = {
  name: "Max",
  age: 11,
  info: ["a"],
  married: false,
};

isMarried(data.married);

// if any variable already assign value like string or number then we don't have use type checking
let names = "jhon";
// names = 32;this are already assign value that's why not adding to number
