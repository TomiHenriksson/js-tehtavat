const numbers = [5, 2, 8, 1, 9];



function sortArray(numbers, order) {
    if (sortArray.order == "asc") {
        numbers.sort(function(a, b){return a-b});
        console.log(numbers);
    } else if (sortArray.order == "desc") {
        numbers.sort(function(a, b){return b-a});
        console.log(numbers);
    }
}

console.log(sortArray(numbers, "asc")); 
console.log(sortArray(numbers, "desc"));