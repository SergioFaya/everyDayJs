const assert = require('assert');

describe('Array', ()=>  {
	describe('#from()', ()=>  {
		it('from', ()=>  {
			let array_1 = [1, 2, 3, 4, 5, 6];
			let array_2 = Array.from(array_1);

			assert.deepEqual(array_1, array_2);
		});
	});
});

// Array.from()


console.log('SUCCESS')