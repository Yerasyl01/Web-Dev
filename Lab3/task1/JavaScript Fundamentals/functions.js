function checkAge(age) {
    return (age > 18) ? true : confirm("Did parents allowed you?");
}
function checkAge2(age) {
    return (age > 18) || confirm("Did parents allowed you?");
}

function min(a, b) {
    return (a < b) ? a : b;
}

function pow(a, b) {
    if ((typeof a == 'number') && (typeof b == 'number')) {
        return a ** b;
    }
    alert("You didn't provide numbers");
}
alert(
    pow(
        +prompt("Enter number:"),
        +prompt("Enter power of number:"),
    )
);
