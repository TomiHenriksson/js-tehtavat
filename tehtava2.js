const sx = prompt('enter location1 x coordinate');
const sy = prompt('enter location1 y coordinate');
const ex = prompt('enter location2 x coordinate');
const ey = prompt('enter location2 x coordinate');

distance = Math.sqrt(((ex - sx)^2 + (ey - sy)^2));

let dis = document.getElementById('distance').textContent = 'distance between location1 and location 2 is: ' + distance;
