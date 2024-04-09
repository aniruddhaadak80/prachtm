// Date --> 9/4/2024
class User {
  user(id, name) {
    console.log(`ID of ${name} is ${id}.`); // using backtricks or ` `
  }

  user_gender(gender) {
    console.log("Gender of user :", gender + "."); //using " " or quotetion marks
  }

  user_location(location) {
    return (this.location = location); //you can use this return value while creating a object
  }
}

// create objects from class UserDetails
let Ramu = new User();
Ramu.user(100, "Ramu");
Ramu.user_gender("Male");

// Another object from class UserDetails
let Lolita = new User(); //you can use () or can't use .
Lolita.user(500, "Lolita");
Lolita.user_gender("Female");
console.log("Location of Lolita : " + Lolita.user_location("Delhi ."));
