const today = new Date();
const hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
  greeting = 'Good Evening!';
} else if (hourNow > 12) {
  greeting = 'Good Afternoon';
} else if (hourNow > 0) {
  greeting = 'Good Morning';
} else {
  greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');
