// Remember, we're gonna use strict mode in all scripts now!
"use strict";
//Dat

let str =
  "underscore_case \n first_name\nSome_Variable\n  calculate_AGE \n delayed_departure";
const variables = [...str.split("\n")];
console.log(variables);
const coreect = [];

let i = 1;
for (let vari of variables) {
  const parts = vari.toLocaleLowerCase().trim().split("_");
  const output = `${parts[0]}${parts[1].replace(
    parts[1][0],
    parts[1][0].toUpperCase()
  )}`;
  console.log(`${output.padEnd(20)}${"✅".repeat(i)}`);
  i += 1;
}
