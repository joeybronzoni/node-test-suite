let db = require('./db.js');
// *SPECIAL*NOTE: when testing make sure to use let where needed, const won't work -for obvious reasons

module.exports.handleSignup = (email, password) => {
  // Check if email already exists
  db.saveUser({	email, password });

  // Save the user to the database
  // Send the welcome email
};



// Spies:
/* spyOn()
   -first, we need to test if our db.saveUser() function works
   -We are testing:
     -handlSignup method and db.saveUser(),
	 -our code to see if an email exists,
	 - does the saveUser func work as expected
	 - does the wlecome email send
   - we are going to fake the function with spyOn()
     -spies lets up swap out a real function(like saveUser()) for a testing utility
	 - when that test function gets called you can create variious assertions about it
	 making sure it gets called with certain arguments


   -we have set up our app as if it were connected to a db


-Note the es6 syntax: never forget
  db.user({
	email: email,
	password: password
  })
*/
