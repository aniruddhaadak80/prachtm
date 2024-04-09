// Date --> 10/04/2024
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("You can see website data ...");
  }
}

// Admin can access User properties and methods
class Admin extends User {
  editData() {
    console.log("Admin can only edit data .");
  }
}

// create user1 from User class
let user1 = new User("John", "john234@gmail.com");
console.log(`Name : ${user1.name} and Email: ${user1.email}`);

user1.viewData();

// create a Admin object
let admin1 = new Admin("Aniruddha","adakani90@gmail.com");
admin1.editData(); //Admin can only edit data .
admin1.viewData(); //You can see website data ...
console.log(`Admin Name : ${admin1.name} and Email: ${admin1.email}`);

