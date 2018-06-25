// Asynchronous testing:

// Always import the .js file containing the function -expressions
const utilsA = require('./asynchronous-functions');
const utils = require('./utils');
// npm i expect -D
const expect = require('expect');


// Start building youre test/assertions
it('does add async add two nums', (done) => {
  utilsA.asyncAdd(4, 3, (sum) => {
	expect(sum).toBe(7).toBeA('number');
	done();
  });
});
/*
   - Note that without done() these assertions will never run?
     - So the utils.asyncAdd() will return before the async callback gets fired
	 - we need to tell mocha that this will ba an asynchronous test that will take time.
	 And we do this by providing an argument (done) inside the callback function that we pass
	 to it() and mocha will not finish processing this test  until that argument gets called
   - Mocha will also warn if a test takes longer than normal to run meaning there is probably an
   error in the function syntax, no callback was given, or something like that. (its noramal here because we called sto for 1000ms)

*/

// TODO: special it() yasnippets notes
/*
   -I adjusted the original snippet to add the below assignment & conditional: added this whole
   comment here for safe keepings while testing new snippet:
   - // Use conditional or expect()
     let ${3:res} = ${4:utils.${5:add(33, 11)}};
	 if ($3 !== ${6:44}) {
       throw new Error(\`Expected $5 but got $3.\`);
	 }

   -Original snippet:
     -  it('does $1', () => {$0})
*/

it('3:does square an async num', (done) => {
  utilsA.asyncSquare(5, (res) => {
	expect(res).toBe(25).toBeA('number');
	done();
  });
});
// *!*!important note for async test:
/*
  -when this error is present:
    10 passing (3s)
  1 failing

  1)  3:does square an async num:
     Error: timeout of 2000ms exceeded. Ensure the done() callback is being called in this test.

  -And that error means one of two things:
    - 1)you have an async function that never actually calls the callback, or
	- 2) you never called done()

*/
