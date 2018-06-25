
// test asynchronous adding function
module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(() => {
	  callback(a + b);
	}, 1000);
};

module.exports.sqaure = (x) => x * x;


// test the asynchronous sqaure function
module.exports.asyncSquare = (x, cb) => {
    setTimeout(() => {
	  cb(x * x);
	}, 1000);
};
