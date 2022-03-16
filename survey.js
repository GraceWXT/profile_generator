const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!


rl.question("What's your name? Nicknames are also acceptable :)\n", (answer) => {
  let name = "";
  let activity = "";
  let music = "";
  let meal = "";
  let food = "";
  let sport = "";
  let superpower = "";
  name = answer;
  rl.question("What's an activity you like doing?\n", (answer) => {
    activity = answer;
    rl.question("What do you listen to while doing that?\n", (answer) => {
      music = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)\n", (answer) => {
        meal = answer;
        rl.question("What's your favourite thing to eat for that meal?\n", (answer) => {
          food = answer;
          rl.question("Which sport is your absolute favourite?\n", (answer) => {
            sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!\n", (answer) => {
              superpower = answer;
              console.log(`Profile generated: ${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});