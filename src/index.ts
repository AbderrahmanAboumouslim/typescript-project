// Basic
let result: number = 19;
let companyName: string = "Aboumouslim Dev";
let isCompanyFamous: boolean = false;
let random: any = 23834;
random = "still random";
random = true;

let topSecretCodes: number[] = [284819, 482849, 290500, 300941];
/* topSecretCodes.push('Abderrahman') // this is a mistake, because array is specified to be filled of numbers.*/
topSecretCodes.push(100100010);
let randomArray: any[] = [1010, false, "hello"];

// Tuple
let data: [number, string, boolean] = [
  1010,
  "Abderrahman",
  true,
]; /* ['Abderrahman', true, 1010] this is wrong*/

// Tuple array
let shoppingCart: [number, string][];
shoppingCart = [
  [3, "potato"],
  [1, "soda"],
  [1, "laptop"],
];

// Union
let id: number | string;
id = "101010";
id = 101010;
id = "text";

// Enum
enum roadMap {
  first,
  second,
  third,
  fourth,
}
// console.log(roadMap.first, roadMap.second) //output: 0 1

enum roadMapTop {
  first = 3,
  second,
  third,
  fourth,
}
// console.log(roadMapTop.first, roadMapTop.second) //output: 3 4

enum roadMapTopTier {
  first = "first",
  second = "second",
  third = "third",
  fourth = "fourth",
}
// console.log(roadMapTopTier.first, roadMapTopTier.second) //Output: first second

// Object
type Login = {
  email: string;
  password: number;
};

const login: Login = {
  email: "example@example.com",
  password: 10101010101010,
};

// Type Assertion
let eid: any = 101010;
let employeeId = <number>eid;
// let employeeId = eid as number;
// console.log(typeof employeeId); // Output: number

// Function
const currentAge = (birthYear: number, currentYear: number): number =>
  currentYear - birthYear;
// console.log(currentAge(2100, 2200)); //Output: 100

// Void
const showMessage = (message: string | number): void => console.log(message);
// showMessage("Message from the function showMessage"); // Output: Message from the function showMessage;
//
// interface
interface defaultInterface {
  id: number;
  name: string;
  paid?: boolean;
}

let lang: defaultInterface = {
  id: 101010,
  name: "typescript",
  // we can skip the 'paid' without a problem, because of it is optional '?'.
};

interface subFunc {
  (a: number, b: number): number;
}

let totalFunc: subFunc = (x: number, y: number): number => x + y;

// Class

class Animal {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const lion = new Animal(1010101010, "lion");
const cat = new Animal(101010, "cat");

// adding interface to the class
interface myBuild {
  id: number;
  name: string;
  greeting(): string;
}

class AnimalInterface implements myBuild {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  greeting() {
    return `Hey! I'm ${this.name}.`;
  }
}

const dog = new AnimalInterface(1010101010, "dog");
const bird = new AnimalInterface(101010, "bird");

// class with extends

class NewAnimal extends AnimalInterface {
  type: string;

  constructor(id: number, name: string, type: string) {
    super(id, name);
    this.type = type;
  }
}
const newAnimal = new NewAnimal(100020003000, "tiger", "danger");
// console.log(newAnimal.greeting());

// Generics
// 1:
const myArr = <X>(items: X[]): X[] => {
  return items;
};

let arrOne = myArr<number>([2, 4, 5]);
console.log(arrOne); //Output: [2, 4, 5]

// 2:
const num = <X>(items: X[]): X => {
  return items[items.length - 1];
};

let nummy = num<number>([4, 6, 38, 9]);
console.log(nummy); // Output: 9

// 3-a:
const generateArr = <X, Y>(x: X, y: Y) => {
  return [x, y];
};
let arryA = generateArr(3, 4);
let arryAa = generateArr<number, number>(3, 4);

let arryB = generateArr("txt", 909);
let arryBb = generateArr<string, number>("txt", 909);

// 4:
const generateFullnameA = (object: { firstName: string; lastName: string }) => {
  return {
    ...object,
    fullName: object.firstName + " " + object.lastName,
  };
};
let nameOne = generateFullnameA({
  firstName: "Abderrahman",
  lastName: "Aboumouslim",
});
console.log(nameOne);

//3-b: what if the generateFullname has an extra param 'age'
const generateFullnameB = <X extends { firstName: string; lastName: string }>(
  object: X
) => {
  return {
    ...object,
    fullName: object.firstName + " " + object.lastName,
  };
};
let nameTwo = generateFullnameB({
  firstName: "Mike",
  lastName: "Brown",
  age: 90,
});
