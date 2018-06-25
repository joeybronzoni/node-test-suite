const request = require('supertest');
/* *!*!-Note, we don't need to import the expect
library for supertest- but we do so that we can
use its functionality with the supertest lib*/
const expect = require('expect');

// import the app from server for testing
const app = require('./server').app;

describe('Server', () => {

  describe('GET /', () => {
	it('does return Hello Express', (done) => {
	  request(app)
		.get('/')
		.expect(200) // test for the status code
		.expect('Hello Express!')
		.end(done);
	});

  });
  describe('GET /users', () => {
	it('does return status 200, and user object michelle does exist', (done) => {
	  request(app)
		.get('/users')
		.expect(200)
		.expect((res) => {
		  expect(res.body).toInclude({
			name:'michelle',
			age:22
		  });
		})
		.end(done);
	});
  });

});

// test that verifies our get('/') returns 'Hello Express'
/* *note that we are still using mocha as the actual test framework,
 we are just using supertest to fill in the gaps*/

// test-A for get(/) & 200 status
/*
it('does return Hello Express', (done) => {
  request(app)
	.get('/')
	.expect(200) // test for the status code
	.expect('Hello Express!')
	.end(done);
});
*/

// test-B without
/*// test-B for get(/) & 404 status
it('does return Hello Express', (done) => {
  request(app)
	.get('/')
	.expect(404) // test for the status code
	.expect({
	  error: 'Page not found.'
	}) // test response
	.end(done);
});
*/

// test-C
/*
it('does return Hello Express', (done) => {
  request(app)
	.get('/')
	.expect(404) // test for the status code
	.expect((res) => {  // we can pass in a function and it will be called by supertest
	  expect(res.body).toInclude({ // note, we can test for only 1 prop of the response object and it passes
		error: 'Page not found.'
	  });
	})
	.end(done);
});
*/

// test-D
/*
it('does return status 200, and user object michelle does exist', (done) => {
  request(app)
	.get('/users')
	.expect(200)
	.expect((res) => {
	  expect(res.body).toInclude({
		  name:'michelle',
		  age:22
		});
	})
	.end(done);
});
*/

// NOTES:
/* supertest
   -test for responses in our app and
   -while supertest has expect of its own, we imported the
   orig expect lib and we get to add that functionality to supertest lib
   -we can pass strings, objects, nums, status nums, and more
   -*!*!*!- the only assertion that supertest supports on its own is toEqual() but
   with the expect lib called in we get all of its functionality too
// DESCRIBE():
   describe()
   -alows us to group test together like suites
   -cleans up our test output
-
*/
