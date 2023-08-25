numbers = [];

k = 1;

while (k>0) {
    v = +prompt('enter a positive number or enter 0 to stop: ');
    if (v>0) {
        numbers.push(v);
    } else if ( v == 0) {
        k = 0;
    }
}

evennums = [];
for (const e of numbers)  {
    if (e % 2 === 0) {
        console.log(e);
        evennums.push(e);
    }
}

document.getElementById('even').textContent = "Even Numbers: " + evennums;