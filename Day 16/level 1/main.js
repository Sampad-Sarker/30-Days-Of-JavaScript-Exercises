/*
1. Change skills array to JSON using JSON.stringify()

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
*/ 

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']

const jsonText = JSON.stringify(skills, null, 2)

console.log(`object\n ${skills}`);
console.log(`JSON\n ${jsonText}`);



/*
2. Stringify the age variable

let age = 250;
*/ 

let age = 250;

const jsonAge = JSON.stringify(age);

console.log(jsonAge);


/*
3. Stringify the isMarried variable

let isMarried = true
*/ 

let isMarried = true

const isMarriedJson = JSON.stringify(isMarried);
// const isMarriedJson = JSON.stringify({isMarried : true});


console.log(isMarriedJson);



/*
4. Stringify the student object

const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
*/ 

const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }
 

const studentJson = JSON.stringify(student);

console.log(studentJson);

