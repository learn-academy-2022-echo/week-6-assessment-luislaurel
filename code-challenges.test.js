// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process



// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// Psuedo
// describe will take arrayOfObjects func
// it "takes in an array of objects and returns an array with a sentence about each person with their name capitalized."\
// to Equal sentence with each name capitalized


const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]


describe("arrayOfObjects", ()=> {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", ()=> {
    expect(arrayOfObjects(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})


 FAIL  ./code-challenges.test.js
  arrayOfObjects
    ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (2 ms)

  ● arrayOfObjects › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

    ReferenceError: arrayOfObjects is not defined

Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// Psuedo code
// Create function named arrayofObjects
// it will take in variable people
// map over array to return a array
// .split(" ") will seperate the names
// need to map over this value because you cannot use .charAt(0).toUpperCase(0) following it, which is needed to make first letter uppercase.
// concat sliced value, followed by string interpolation to give us the full sentence
// will return an array with a sentence about each person, name capitalized
// output  ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.


const arrayOfObjects = (array) => {
 return array.map(value => value.name.split(" ")
  .map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(" ") + ` is ${value.occupation}.`
  )
}

 PASS  ./code-challenges.test.js
  arrayOfObjects
    ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (2 ms)



    
    const arrayOfObjects = (array) => {
 return array.map(value => value.name.split(" ").charAt(0).toUpperCase()

//     }
// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


describe("remainderArray", ()=> {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", ()=> {
    expect(remainderArray(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainderArray(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

 FAIL  ./code-challenges.test.js
  remainderArray
    ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (2 ms)

  ● remainderArray › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

    ReferenceError: remainderArray is not defined

// b) Create the function that makes the test pass.


// Psuedo code
// function named remainderArray 
// takes in hodgepodge1,2
// create a variable to store initial value
// Need to return an array with numbers only, .filter() will return a shortened array and typeof to look for numbers
// return variable and map over to get the remainder of all those numbers % 3
// returns an array with remainders divided by 3
// expect [ 2, 0, -1, 0 ], [ 2, 1, -1 ]




const remainderArray = (array) => {
 numbersOnlyArray = array.filter(value => typeof value === 'number' )
return numbersOnlyArray.map(value => value % 3)
 }

  PASS  ./code-challenges.test.js
  remainderArray
    ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (3 ms)

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("sumOfAllCubed", () => {
  it(" takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(sumOfAllCubed(cubeAndSum1)).toEqual(99)
    expect(sumOfAllCubed(cubeAndSum2)).toEqual(1125)
  })
})

 FAIL  ./code-challenges.test.js
  sumOfAllCubed
    ✕  takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)

  ● sumOfAllCubed ›  takes in an array of numbers and returns the sum of all the numbers cubed

    ReferenceError: sumOfAllCubed is not defined

// b) Create the function that makes the test pass.

// Psuedo
// create function named sumOfAll
// takes in cubeAndSum1,2
// created variable to store 3
// Map over array
//  use Math.pow() to cube it. passed value, exponent into params. ex first in the array. value (2) would be raised to the power of exponent (3)
// created new variable for the sum. takes each index and adds them up.
// expect 99 , 1125



const sumOfAllCubed = (array) => {
let exponent = 3
cubed = array.map(value => Math.pow(value, exponent))
return sumThemAll = cubed[0] + cubed[1] + cubed[2]
}

 PASS  ./code-challenges.test.js
  sumOfAllCubed
    ✓  takes in an array of numbers and returns the sum of all the numbers cubed (2 ms)
