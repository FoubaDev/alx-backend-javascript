const { exec } = require('child_process');

// Increase the timeout for long-running processes
jest.setTimeout(10000);

describe('1-stdin.js', () => {
  it('should display correct prompts and handle input', (done) => {
    const childProcess = exec('node 1-stdin.js');
    
    let output = '';

    // Listen to the child process output (stdout)
    childProcess.stdout.on('data', (data) => {
      output += data;
    });

    // Simulate user input by sending data to the child process
    childProcess.stdin.write('John\n');

    // Close the stdin (mimicking user input completion)
    childProcess.stdin.end();

    childProcess.on('close', () => {
      // Check the output after the process has exited
      expect(output).toContain('Welcome to Holberton School, what is your name?');
      expect(output).toContain('Your name is: John');
      expect(output).toContain('This important software is now closing');
      done();
    });
  });
});

