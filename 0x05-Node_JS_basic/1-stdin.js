// 1-stdin.js
console.log('Welcome to Holberton School, what is your name?');

// Listen for input from stdin
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);

  // Check if the input is from a pipe
  if (!process.stdin.isTTY) {
    // Only show this message if input is from a pipe
    console.log('This important software is now closing');
  }

  // End the input stream
  process.stdin.pause();
});

// Handle process termination gracefully
process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit();
});
