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
  const empleado = empleados.find((result) => {
    return result.id === id;
  });
  if (empleado) {
    return empleado;
  } else {
    return `Empleado con id ${id} No existe`;
  }
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((e) => e.id === id)?.salario;
    salario
      ? resolve(salario)
      : reject(`No existe el empleado con el Id ${id}`);
  });
};

const getInforUser = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El nombre del empleado ${empleado.name} tiene el salario ${salario}`;
  } catch (e) {
    console.log(e);
  }
};

const id = 20;

getInforUser(id)
  .then((msg) => console.log(msg))
  .catch((e) => console.log(e));
