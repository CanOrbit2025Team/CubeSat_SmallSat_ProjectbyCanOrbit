console.clear();
var d=new Date("10 march 2019")
console.log(d.getDay())// 0-6 monday tuesday wed
console.log(d.getDate())// 1oth 
console.log(d.getFullYear())// year
console.log(d.getMonth())// 0-11, 2 means march



var d = new Date("2025-09-20"); // Standardized format: YYYY-MM-DD
console.log("************************")
// Check if the date is valid-------------method 2
if (isNaN(d.getTime())) {
    console.log("Invalid Date");
} else {
    console.log(d.getDay());      // Day of the week (0–6)
    console.log(d.getFullYear()); // Year
    console.log(d.getMonth() + 1); // Month (1–12, adjusted)
}

// try -catch()
