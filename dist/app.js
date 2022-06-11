"use strict";
// type check
function addData(obj) {
    obj.age += 2;
    return obj;
}
const data = {
    name: "Max",
    age: 11,
};
const value = addData(data);
value.name = "sajib";
console.log(value);
