//1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    skills:['html', 'css', 'javascript', 'typescript', 'react'],
    country: 'Bangladesh',
    enrolled:{
        math : 5,
        physics: 2.5,
        programming:5
    }
}

const studentJson = JSON.stringify(student)

// localStorage.clear()

localStorage.setItem('student', studentJson)

//check on dev tools application tab