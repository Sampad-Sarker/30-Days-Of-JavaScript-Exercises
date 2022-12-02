//1. Destructure the countries object print name, capital, population and languages of all countries

countries;
console.log(
  ` print name, capital, population and languages of all countries :`
);
// for (const {name, capital, population, languages} of countries) {

//     console.log(`name = ${name}, capital = ${capital}, population = ${population}, languages = ${languages}`);
// }

countries.forEach(({ name, capital, population, languages }, index) => {
  console.log(
    `${
      index + 1
    }. name = ${name}, capital = ${capital}, population = ${population}, languages = ${languages}`
  );
});

//2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

// const [name, skills = [ ...skills], [,,jsScore,reactScore]] = student

const [name, skills, scores] = student;

const [, , jsScore, reactScore] = scores;

console.log(name, skills, jsScore, reactScore);

//3. Write a function called convertArrayToObject which can convert the array to a structure object.

const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

const convertArrayToObject = (students) => {
  let objectOfStudents = [];
  for (const [name, skills, scores] of students) {
    let obj = {
      name: name,
      skills: skills,
      scores: scores,
    };

    objectOfStudents.push(obj);
  }

  // console.log(objectOfStudents)

  return objectOfStudents;
};
// console.log(`convert Array To Object : ${JSON.stringify(convertArrayToObject(students))}`);

console.log(`convert Array To Object :`, convertArrayToObject(students));

/*
4. Copy the student object to newStudent without mutating the original object. In the new object add the following

Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets
*/

const student_ = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};


let frontEnds = student_.skills.frontEnd
let backEnds = student_.skills.backEnd
let dataBase = student_.skills.dataBase
let dataScience = student_.skills.dataScience


//copying object and adding elements at a time
const newStudent = {
  ...student_, 
  skills:{
    frontEnd : [...frontEnds, { skill: "Bootstrap", level: 8 }],
    backEnd : [...backEnds, { skill: 'Express', level: 9 }],
    dataBase : [...dataBase, { skill: 'SQL', level: 8}],
    dataScience : [...dataScience, 'SQL']
  }
};

console.log('newStudent without mutating the original object :',newStudent);

console.log('After modifying, the original object :',student_);

