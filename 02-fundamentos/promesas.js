const empleados = [
  {
    id: 1,
    name: "Richard",
  },
  {
    id: 2,
    name: "Jose",
  },
  {
    id: 3,
    name: "Pedro",
  },
  {
    id: 4,
    name: "Villegas",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1500,
  },
  {
    id: 2,
    salario: 2000,
  },
  {
    id: 3,
    salario: 3000,
  },
];

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.name;
    empleado ? resolve(empleado) : reject(`No existe empleado con Id ${id}`);
  });
};

const getSalario = () => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((e) => e.id === id)?.salario;
    salario
      ? resolve(salario)
      : reject(`No existe el empleado con el Id ${id}`);
  });
};

const id = 1;
getEmpleado(id)
  .then((empleado) => {
    getSalario(id)
      .then((salario) => {
        console.log(`El empleado ${empleado} el tiene el salario ${salario}`);
      })
      .catch((e) => {
        console.log(`error ${e}`);
      });
  })
  .catch((e) => {
    console.log(`Error ${e}`);
  });
