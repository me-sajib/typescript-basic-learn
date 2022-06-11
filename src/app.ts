// array check

function addTask(data: Person, task: string): void {
  data.info.push(task);
  console.log(data);
}

interface Person {
  name: string;
  age: number;
  info: string[];
}

const data: Person = {
  name: "Max",
  age: 11,
  info: ["a"],
};

addTask(data, "text");
