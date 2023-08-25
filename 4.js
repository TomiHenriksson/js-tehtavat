rArray = [4, 2, 1, 12, 8, ];


function sortArray(array) {
    console.log(array);
    const t = array.sort((a,b) => a-b);
    console.log(t); 
}

sortArray(rArray);