let myArray = [5, "six", 2, 8.2];
myArray.splice(2, 2);

console.log(myArray);  // [5, "six"]

let deletedItems = myArray.splice(2, 2);

console.log(deletedItems);  // [2, 8.2]

let myArray = [5, "six", 2, 8.2];
myArray.splice(2, 0, "one", false);

console.log(myArray);  // [5, "six", "one", false, 2, 8.2]

let myArray = [5, "six", 2, 8.2];
myArray.splice(2, 1, true);

console.log(myArray);  // [5, "six", true, 8.2]


let myArray = [5, 12, 8, 130, 44];
let itemIndex = myArray.findIndex(function(eachItem) {
  console.log(eachItem);
});


let myArray = [5, 12, 8, 130, 44];
let itemIndex = myArray.findIndex(function (eachItem) {
    if (eachItem === 130) {
        return true;
    } else {
        return false;
    }
});
console.log(itemIndex);


let newArray = arr1.concat(arr2);


let arr = ["Wind", "Water", "Fire"];
let combinedString = arr.join(",");
console.log(combinedString);