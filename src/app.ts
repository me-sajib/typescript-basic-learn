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
