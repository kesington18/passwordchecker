// let a = 10;
// let b = 15;

// if ( a > b) {
//     console.log("it is true");
// } else {
//     console.log("it is not true")
// }

// console.log( a == "10");
// console.log( a === "10");

// let x = "5";
// let y = 6;
// console.log( x !== y);


// let num = 10 + 2;

// if (num > 2 && num < 20) {
//     console.log("TRUE");
// } else {
//     console.log("FALSE");
// };

// let user = "employee";
// if (user === "guest") {
//     console.log("login denied.")
// } else if(user === "employee") {
//     console.log("successfully logged in.")
// }

// let myName = "abdulwakeel";

// if (myName.length > 5) {
//     alert("More than 5.")
// } else if (myName === 5) {
//     alert("Exactly 5 letters.")
// }else {
//     alert("Less than 5 letters.")
// }

// or do this

// let myName = "abdulwakeel";
// let nameLength = myName.length;

// if (nameLength > 5) {
//     alert("More than 5.")
// } else if (nameLength === 5) {
//     alert("Exactly 5 letters.")
// }else {
//     alert("Less than 5 letters.")
// }

// const element = document.getElementById("mySubmit");
// element.addEventListener("click", rInput);

// function rInput() {
//     const rSubmit = document.getElementById("myText").value;
//     if (typeof rSubmit === "string") {
//         console.log("see")
//     } else if (rSubmit !== "") {
//         console.log("blind")
//     }
    
// }

// const check = prompt("what is your name");
// if (check === Number(check)) {
//     console.log("see")
// } else {
//     console.log("not seen")
// }
// checking
// let input = document.getElementById("myText").v;
// let inputValue = input.value;
// console.log(inputValue);

function passwordChecker() {
    const check = prompt("Enter Your Password");
    const result = check.length >= 8;
    const checkUppercase = /[A-Z]/.test(check);
    const checkLowercase = /[a-z]/.test(check);
    const numberRegex = /^[0-9]+$/.test(check);
    const checkCharacters = /[!@#$%^&*(),.?":{}|<>]/.test(check);
    
    const weak = checkLowercase && checkUppercase;
    const medium = result && (checkLowercase || checkUppercase);
    const strong = result && (checkLowercase || checkUppercase || numberRegex || checkCharacters);
    let  strength = "weak";
    if (weak) {
        strength
        console.log("weak");
    }else if (medium) {
        strength = "medium";
        console.log("medium");
    } else if (strong) {
        strength = "strong";
        console.log("strong");
    }
    const proceed = confirm(`your password is ${strength}  \n do you want to proceed?`);
    if (proceed) {
        alert("password accepted");
    } else{
        passwordChecker();
    }
}
