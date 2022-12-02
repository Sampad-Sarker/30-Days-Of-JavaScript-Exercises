//1. Iterate through the users array and get all the keys of the object using destructuring

const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

console.log(`all users :`);
for (let { name, scores, skills, age } of users) {
  console.log(
    `name = ${name}, scores = ${scores}, skills = ${skills}, age = ${age}`
  );
}

// for (let user of users) {
//     const {name, scores, skills, age} = user
//     console.log(`name = ${name}, scores = ${scores}, skills = ${skills}, age = ${age}`);
// }

//2. Find the persons who have less than two skills

console.log(`persons who have less than two skills :`);
for (let { name, scores, skills, age } of users) {
  if (skills.length < 2) {
    console.log(
      `name = ${name}, scores = ${scores}, skills = ${skills}, age = ${age}`
    );
  }
}


