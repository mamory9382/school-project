// Get the current date and time
let today = new Date();
console.log(today);

// Calculate the number of days since the project started
const startDate = new Date("2023-01-01");
let daysSinceStart = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
console.log(`Days since project started: ${daysSinceStart}`);

// Calculate the number of hours since the project started
let hoursSinceStart = Math.floor(daysSinceStart * 24);
console.log(`Hours since project started: ${hoursSinceStart}`);

// Calculate the number of minutes since the project started
let minutesSinceStart = Math.floor(hoursSinceStart * 60);
console.log(`Minutes since project started: ${minutesSinceStart}`);

// Calculate the number of seconds since the project started
let secondsSinceStart = Math.floor(minutesSinceStart * 60);
console.log(`Seconds since project started: ${secondsSinceStart}`);
