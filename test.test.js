// Manual testing is done by humans interacting with the system. Purposely trying to break it but using it in unexpected ways, - hard for developers to do themselves cos they know how to use the systems 

// it helps others to understand what the code is trying to do e.g 
const assert = require('assert');

describe('-', () => {
    it('returns the subtraction of its arguments', () => {
      assert.ok(10 - 1 === 9)
    });
  });
