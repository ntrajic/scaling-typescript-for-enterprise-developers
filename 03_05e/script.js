var oakData = {
    name: "Oak",
    height: 20,
    age: 100
};
var oak = {
    getName: function () { return oakData.name; },
    getHeight: function () { return oakData.height; },
    getAge: function () { return oakData.age; }
};
console.log("Name: ".concat(oak.getName()));
console.log("Height: ".concat(oak.getHeight()));
console.log("Age: ".concat(oak.getAge()));
