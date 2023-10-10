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

const salario = [
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

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((result) => {
    return result.id === id;
  });
  if (empleado) {
    return callback(null, empleado);
  } else {
    return callback(null, `Empleado con id ${id} No existe`);
  }
};

console.log(
  getEmpleado(1, (error, empleado) => {
    if (error) {
      console.log(error);
      return empleado;
    } else {
      console.log("Todo Bien");
      return empleado;
    }
  })
);
