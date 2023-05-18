const arr1 = [10, 40, 50, 29, 50];

const searchedNumber = 100;

var flag = false;
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] === searchedNumber) {
    console.log(`Your number is found at ${i} position`);
    flag = true;
  }
}

if (!flag) {
  console.log("sorry your number was not found");
}
