let age = 32;
let useName = 'Max';
let hobbies = ['Sports', 'Cooking', 'Reading'];
let job = { 
  title: 'Developer', 
  place: 'New York', 
  salary: 50000 
};

let totalAdultYears;

function calculateAdultYears(userAge) {
  return age - 18;
}

totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);

alert(totalAdultYears);