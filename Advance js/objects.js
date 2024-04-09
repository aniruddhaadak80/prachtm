let studentDetails = {
  name: "Hritish",
  roll: 3,
  sec: "A",
  Curriculam() {
    console.log("I can play football...");
  },
};
console.log(studentDetails);

// add function to another onject from studentdetails objects
let teacherSkills = {
  skill: "Teaching",
};

teacherSkills.__proto__ = studentDetails; //prototype is a special property in object

console.log(teacherSkills.Curriculam());
