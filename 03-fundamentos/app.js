const { createArchive } = require("./helpers.js/archivo");
const arg = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
  })
  .option("h", {
    alias: "hasta",
    type: "hasta",
  }).argv;
console.log(arg);

const basePoint = 2;

console.log(process.argv);

console.log(arg);

const { base, hasta } = arg;

console.log(hasta);

// const [, , arg3 = "base=5"] = process.argv;
// const [, arg = 5] = arg3.split("=");

createArchive(base, hasta)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => console.log(e));
