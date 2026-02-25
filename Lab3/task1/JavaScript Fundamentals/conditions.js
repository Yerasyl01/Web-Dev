// 1
let input = prompt("What is the official name of JavaScript?");
if (input == "ECMAScript") {
    alert("Right!");
} else {
    alert("You don't know? ECMAScript!");
}

// 2
let num = +prompt("Give a number!");
if (num > 0) {
    alert(1);
} else if (num < 0) {
    alert(-1);
} else {
    alert(0);
}

// 3
let a = 3;
let b = 2;
let result = (a + b < 4) ? 'Below' : 'Over';

// 4
let login = prompt("Who are you?", "Employee");
let message = (login == 'Employee') ? "Hello" :
    (login == 'Director') ? "Greeting" :
    (login == '') ? "No login" :
    "";
alert(message);
