/* eslint-disable jest/require-top-level-describe */
const displayMessage = require('../0-console'); // Adjust the path if needed

// Mock the console.log function
const originalConsoleLog = console.log;
beforeEach(() => {
  console.log = jest.fn(); // You can keep this if using Jest for mocking, or use sinon for Mocha
});

// eslint-disable-next-line jest/no-hooks
afterEach(() => {
  console.log = originalConsoleLog; // Restore the original console.log
});

describe('displayMessage', () => {
  it('should print the correct string', () => {expect.hasAssertions();
    const message = 'Hello NodeJS!';

    // Make sure this is the first statement in your test
    expect.assertions(1); // You can use this if you still prefer Jest; otherwise, remove this line.

    displayMessage(message);

    // Verify that console.log was called with the correct message
    expect(console.log).toHaveBeenCalledWith(message); // This line is for Jest; change it for Mocha.
  });
});

