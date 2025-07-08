// echoChamber.js
// A simple module that records messages and "echoes" them back with a delay.
// Useful for simulating chat bots or delayed responses.

class EchoChamber {
  constructor(delay = 1000) {
    this.delay = delay; // delay in milliseconds
    this.messages = [];
  }

  /**
   * Adds a message to the chamber and returns a Promise that resolves with the echoed message after the delay.
   * @param {string} message
   * @returns {Promise<string>}
   */
  echo(message) {
    this.messages.push(message);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Echo: ${message}`);
      }, this.delay);
    });
  }

  /**
   * Clears all recorded messages.
   */
  clear() {
    this.messages = [];
  }

  /**
   * Returns all messages recorded so far.
   * @returns {string[]}
   */
  getAllMessages() {
    return [...this.messages];
  }
}

// Example:
// const chamber = new EchoChamber(1500);
// chamber.echo('Hello world!').then(console.log); // After 1.5 seconds logs: Echo: Hello world!

export default EchoChamber;
