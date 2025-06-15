import chalk from 'chalk'; // Or import { green, bgGreen, whiteBright } from 'chalk'; for specific colors

export function logColor(...msg: (string | number)[]) {
  const messages = msg
    .map(message => chalk.bgGreen.whiteBright(`${message}`)) // Use chalk for styling
    .join(' ');
  console.log(chalk.green(messages)); // Use chalk for the final message color
}