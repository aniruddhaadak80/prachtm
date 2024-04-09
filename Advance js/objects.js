// Date --> 9/4/2024
let studentDetails = {
  name: "Hritish",
  roll: 3,
  sec: "A",
  Curriculam() {
    console.log("I can play football...");
  },
};
console.log(studentDetails); //shows object in console

// add function to another object from studentdetails objects
let teacherSkills = {
  skill: "Teaching",
};

teacherSkills.__proto__ = studentDetails; //prototype is a special property in object

console.log(teacherSkills.Curriculam()); // I can play football...
