"use strict";
// Basic
let result = 19;
let companyName = "Aboumouslim Dev";
let isCompanyFamous = false;
let random = 23834;
random = "still random";
random = true;
let topSecretCodes = [284819, 482849, 290500, 300941];
/* topSecretCodes.push('Abderrahman') // this is a mistake, because array is specified to be filled of numbers.*/
topSecretCodes.push(100100010);
console.log(topSecretCodes);
let randomArray = [1010, false, "hello"];
// Tuple
let data = [
    1010,
    "Abderrahman",
    true,
]; /* ['Abderrahman', true, 1010] this is wrong*/
// Tuple array
let shoppingCart;
shoppingCart = [
    [3, "potato"],
    [1, "soda"],
    [1, "laptop"],
];
// Union
let id;
id = "101010";
id = 101010;
id = "text";
// Enum
var roadMap;
(function (roadMap) {
    roadMap[roadMap["first"] = 0] = "first";
    roadMap[roadMap["second"] = 1] = "second";
    roadMap[roadMap["third"] = 2] = "third";
    roadMap[roadMap["fourth"] = 3] = "fourth";
})(roadMap || (roadMap = {}));
// console.log(roadMap.first, roadMap.second) .output => 0 1
var roadMapTop;
(function (roadMapTop) {
    roadMapTop[roadMapTop["first"] = 3] = "first";
    roadMapTop[roadMapTop["second"] = 4] = "second";
    roadMapTop[roadMapTop["third"] = 5] = "third";
    roadMapTop[roadMapTop["fourth"] = 6] = "fourth";
})(roadMapTop || (roadMapTop = {}));
// console.log(roadMapTop.first, roadMapTop.second) .output => 3 4
var roadMapTopTier;
(function (roadMapTopTier) {
    roadMapTopTier["first"] = "first";
    roadMapTopTier["second"] = "second";
    roadMapTopTier["third"] = "third";
    roadMapTopTier["fourth"] = "fourth";
})(roadMapTopTier || (roadMapTopTier = {}));
// console.log(roadMapTopTier.first, roadMapTopTier.second) .output => 3 4
