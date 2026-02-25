// 4, 5
let i;
for (i = 2; i <= 10; i += 2) {
    console.log(i);
}
i = 0;
while (i < 3) {
    alert(`number ${i}`);
    i++;
}

// 6
let num;
do {
    num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

// 7
let n = prompt("Enter a number:", 5)
outer: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue outer;
    }
    console.log(i);
}
