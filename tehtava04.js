yourScore = prompt('Enter your score: (1-100) ');

if (yourScore >= 0 && yourScore <= 39) {
  document.getElementById('score').innerText = 'Grade: 0'
} else if (yourScore >= 40 && yourScore <= 51) {
  document.getElementById('score').innerText = 'Grade: 1'
}  else if (yourScore >= 52 && yourScore <= 63) {
  document.getElementById('score').innerText = 'Grade: 2'
}  else if (yourScore >= 64 && yourScore <= 75) {
  document.getElementById('score').innerText = 'Grade: 3'
}  else if (yourScore >= 76 && yourScore <= 87) {
  document.getElementById('score').innerText = 'Grade: 4'
} else {
  document.getElementById('score').innerText = 'Grade: 5'
}
