import validator from "validator";
import chalk from "chalk";

console.log(chalk.bgBlue(validator.isMobilePhone("0823131230", "id-ID")));
console.log(validator.isDate("2020-01-01"));

console.log(chalk.white.bgRed("Hello") + chalk.red.bgWhite(" World!"));
console.log(chalk.white.bgGreen("Hello") + chalk.red.bgCyan(" World!"));

// chalk versi 5 doesnt support literal template
const message = chalk`hai {white Hello} as {bgWhite.red World}`;
console.log(message);
