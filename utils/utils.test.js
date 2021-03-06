const utils = require('./utils');
const utilsA = require('./asynchronous-functions');
const expect = require('expect');


// TODO: -Test Suite-BDD
/* it() lets us define a new test case and it takes 2 argmuents:
   - 1st is a string that describes what test should verify
   - this is called behavior driven development or BDD and thats the principles that
   mocha was built on
   - *in the package.json test script we call mocha, passing in the one and only
   argument-the actual files we want to test could use the globbing pattern to
   specify multiple files
   - to automatically run a test sweet when we change test code or application code with nodemon
   like this: nodemon --exec 'npm test' or as a script that works cross-platform:
   "test-watch": "nodemon --exec \"npm test\"" *note-just use this for GNU/linux: "test-watch": "nodemon --exec 'npm test'",
   - *NOTE: but this it() does not assert anything, so to make a test faile we have to throw an error
*/ - /* it('does add t wo numbers', () => {

})*/

 // TODO: -Test-Suite-Expect
/* expect() is an assertion library where you pass in a value and make some assertions about it
   - * after expect -v 1.21> is not backword compatible
   - we make expectations with expect and can chain them together
   - my yasnippets has a list to choose from *(add more with the change in library ownership)
// Describe:
   describe()
   -used to group tests together
   -takes 2 arguments and
   -cleans up the output for our test
   -*!*!*!- we can next describe blocks
*/

// moved some tests into describe to group them together and
describe('Utils', () => {
  describe('#add', () => {
	// first move the test inside the code block of describe()
	it('1:does add two numbers', () => {
	  let res = utils.add(33, 11);
	  // if (res !== 44) {
	  // 	  throw new Error(`Expected 44 but got ${res}.`);
	  // }
	  expect(res).toBe(44).toBeA('number');
	});

  });


  // Start building youre test/assertions
  it('2:does add async add two nums', (done) => {
	utilsA.asyncAdd(4, 3, (sum) => {
	  expect(sum).toBe(7).toBeA('number');
	  done();
	});
  });


  it('3:does return the square of a num', () => {
	let res = utils.square('2');

	// if (res !== 4) {
	// 	throw new Error(`Expectect 4 but got ${res}`);
	// }
	expect(res).toBe(4).toBeA('number');
  });


  it('4:does square an async num', (done) => {
	utilsA.asyncSquare(5, (res) => {
	  expect(res).toBe(25).toBeA('number');
	  done();
	});
  });
});


it('3:does expect some values', () => {
  expect(12).toNotBe(11);
});

/* important note about comparing objects: when using toBe()
   will always fail because we created 2 different objects when expect()
   tests if they are the same object, but they obviously can't be  so use toEqual() or
   toNotEqual() for that */
it('4:does expect some values:', () => {
  expect({name: 'joey'}).toEqual({name: 'joey'});
});


it('5:does note expect to be included:', () => {
  var you = [2,3,4];
  var me = {name: 'joey', age: 37, likes: ['coding', 'music', 'more-coding']};
  expect(you).toExclude(1);
});


it('6:does not expect to be Included', () => {
  var you = [2,3,4];
  var me = {name: 'joey', age: 37, likes: ['coding', 'music', 'more-coding']};
  expect(me).toInclude({age:37});
  expect(me).toExclude({name: 'leroy'});
});

// should verify first and lastnane are set
it('7:does set firstName and lastName:', () => {
  let user = {location: 'Delano', age: 22};
  let res = utils.setName(user, 'Metro Guy');
  expect(res).toInclude({
	firstName: 'Metro',
	lastName: 'Guy'
  }).toBeA('object');
});


it('8:does square a num', () => {
  let res = utils.square(3);
  expect(res).toBe(9).toBeA('number');
});


it('9:does square a num', () => {
  let res = utils.square(3);
  expect(res).toBe(9).toBeA('number');
});




/* it('does contain the name', () => {}) */
// TODO: other notes for testing:
/* List
   -// using ES6 modules
import expect, { createSpy, spyOn, isSpy } from 'expect'

// using CommonJS modules
var expect = require('expect')
var createSpy = expect.createSpy
var spyOn = expect.spyOn
var isSpy = expect.isSpy
The UMD build is also available on unpkg:
   -
   -
*/
