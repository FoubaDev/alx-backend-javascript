// 0-console.test.js
const displayMessage = require('../0-console'); // Adjust the path if needed

// Mock the console.log function
global.console = {
  log: jest.fn(),
};

describe('displayMessage', () => {
  it('should print the correct string', () => {
    const message = 'Hello NodeJS!';

    // Make sure this is the first statement in your test
    expect.assertions(1);

    displayMessage(message);

    // Verify that console.log was called with the correct message
    expect(console.log).toHaveBeenCalledWith(message);
  });
});
