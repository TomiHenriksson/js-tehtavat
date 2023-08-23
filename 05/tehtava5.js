const pNumberS = +prompt('enter a positive number');
let sumOfNum = 0;
for (let i=0; i<=pNumberS ; i++) {
    sumOfNum +=  i;
    console.log(i);
}

document.getElementById('sum').innerText = sumOfNum;

