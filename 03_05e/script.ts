type Tree = {
  name: string;
  height: number;
  age: number;
};

const oakData: Tree = {
  name: "Oak",
  height: 20,
  age: 100
};

type TreeDetails<Type> = {
  [Key in keyof Type as `get${Capitalize<
    string & Key
  >}`]: () => Type[Key];
};

type OakTree = TreeDetails<Tree>;

let oak: OakTree = {
  getName: () => oakData.name,
  getHeight: () => oakData.height,
  getAge: () => oakData.age
};

console.log(`Name: ${oak.getName()}`);
console.log(`Height: ${oak.getHeight()}`);
console.log(`Age: ${oak.getAge()}`);
