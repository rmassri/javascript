const fs = require("fs");
const color = require("colors");
console.log("=======================".green);
console.log("     Tabla del:5      ");
console.log(color.blue("======================="));
let salida = "";
const createArchive = async (number, hasta) => {
  for (let i = 0; i <= hasta; i++) {
    salida += `${number} ${color.green("*")} ${i} ${color.blue("=")} ${
      number * i
    }\n`;
  }
  fs.writeFile(`tabla del ${number}`, salida, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Archivo de la tabla del ${number}`);
    }
  });
  return salida;
};
module.exports = {
  createArchive,
};
