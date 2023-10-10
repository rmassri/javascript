// setTimeout(() => {
//   console.log("Hola Mundo");
// }, 1000);

const getUser = (id, callback) => {
  const user = {
    id,
    nombre: "Richard",
  };
  setTimeout(() => {
    callback(user);
  }, 1000);
};

getUser(1, (user) => {
  console.log(user);
});
