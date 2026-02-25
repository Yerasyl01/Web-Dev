let age = +prompt("What is your age?", '14');

// 1
let inrange = (age >= 14) && (age <= 90);
let output = `${age} is between 14 and 90 (inclusively)`;
if (inrange) {
    alert(output);
} else {
    alert(output.slice(0, 6) + 'NOT ' + output.slice(6));
}

// 2
let outrange = !((age >= 14) && (age <= 90));
let outrange2 = age < 14 || age > 90;
alert(outrange == outrange2 == !(inrange)) // "true" means it works

// 4
let login = prompt("Login:");
if (login == 'Admin') {
    let password = prompt("Password:");
    if (password = "TheMaster") {
        alert("Welcome!");
    } else if (!password) {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (!login) {
    alert("Canceled");
} else {
    alert("I don't know you");
}
