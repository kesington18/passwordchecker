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
    let check = prompt("Enter Your Password");
    let result = check.length >= 8;
    let checkUppercase = /[A-Z]/.test(check);
    let checkLowercase = /[a-z]/.test(check);
    let numberRegex = /\d/.test(check);
    let checkCharacters = /[!@#$%^&*(),.?":{}|<>]/.test(check);
    
    let  strength = "weak";
    if (result && checkUppercase && checkLowercase && numberRegex && checkCharacters) {
        strength = "strong";
    } else if (result && (checkUppercase || checkLowercase || numberRegex)) {
        strength = "medium";
    }

    let proceed = confirm(`Your password is ${strength}. Do you want to continue`);

    if (proceed) {
        alert("password accepted");
    }else {
        passwordChecker(); // prompt user for a new password
    }
}
