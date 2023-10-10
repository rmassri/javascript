const deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneracion",
  edad: 50,
  getNombre() {
    return `${this.nombre} ${this.apellido} ${this.poder}`;
  },
};

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;
// const { nombre, apellido, poder, edad = 0 } = deadpool;

// console.log(nombre, apellido, poder, edad);

function imprimeHereo({ nombre, apellido, poder, edad = 0 }) {
  nombre = "Richard";
  console.log(nombre, apellido, poder, edad);
}

const hereos = ["Deadpool", "Superman", "Batman"];
const [, ,] = hereos;

console.log();
//console.log(imprimeHereo(deadpool));
