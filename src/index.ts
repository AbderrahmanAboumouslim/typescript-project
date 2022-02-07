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
console.log(topSecretCodes);
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
// console.log(roadMap.first, roadMap.second) .output => 0 1

enum roadMapTop {
  first = 3,
  second,
  third,
  fourth,
}
// console.log(roadMapTop.first, roadMapTop.second) .output => 3 4

enum roadMapTopTier {
  first = "first",
  second = "second",
  third = "third",
  fourth = "fourth",
}
// console.log(roadMapTopTier.first, roadMapTopTier.second) .output => 3 4
