const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App...', () => {

  let db = {
	saveUser: expect.createSpy()
  };
  app.__set__('db', db); /* we are trying to replace db with a db variable*/

  it('does call the spy correctly', () => {
	let spy = expect.createSpy();
	spy('joey', 33);
	expect(spy).toHaveBeenCalledWith('joey', 33);
  });

  it('does call saveUser with user object', () => {
	let email = 'joey@gmail.com';
	let password = '12345sdf';
	/* we need to create 2 placeholder passewords and then call the method(*with app.) we are
	   testing which is handlSignup(), next we call expect() and set the assertion arg to a spy,
	in this instance its db.saveUser() and finally pass an object to expect*/
	app.handleSignup(email, password);
	expect(db.saveUser).toHaveBeenCalledWith(
	  {
		email, password
	  }
	);
  });

});


// testing with createSpy just to test if the function was called
/*
describe('App', () => {
  it('does call the spy correctly', () => {
	let spy = expect.createSpy();
	spy('joey', 33);
	expect(spy).toHaveBeenCalledWith();
  });

});
*/


// spy(), describe(), createSpy(), rewire-library
/* spy
   -we need to create a spy that acts like the saveUser() method and acts like its called
   with the arguments we expect, in this case email & password
   -rewire will load the files through require() but also add 2 other methods onto app named:
     -app.__set__()
     -app.__get__()
   -
*/
