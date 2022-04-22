//Trazer o roteador do express
const router = require("express").Router();
const db = require("../../data.js");
const { v4: uuidv4 } = require("uuid");

router.post("/create-car", (req, res) => {
  db.push({ ...req.body, id: uuidv4() }); //Quando fizer o post, irá criar um objeto, que terá o spred de req.body e vai criar o id invocando o uuid( assim cada card terá um id) Pega o que está recebendo no corpo da requisição e armazena no banco de dados

  return res.status(201).json({ message: "Carro criado com sucesso" });
});

router.get("/all-car", (req, res) => {
  return res.status(200).json(db); //devolve a informação buscada para o usuário
});

router.get("/car/:id", (req, res) => {
  //Busca de carro por id
  const id = req.params.id;
  const foundedCar = db.filter((currentCar) => {
    //Recebe o carro atual (currentCar)
    return currentCar.id === id;
  });

  return res.status(200).json(foundedCar); //devolve a informação buscada para o usuário
});

router.patch("/car/edit/:id", (req, res) => {
  const id = req.params.id;

  const foundedCar = db.filter((currentCar) => {
    //O filter vai trazer um array de objeto, onde queremos alterar um desses objetos
    return currentCar.id === id;
  });

  const editedCar = { ...foundedCar[0], ...req.body }; //damos um spred no foundCar no índice 0, por que terá apenas um item, trazendo as informações nele contidas, depois enviamos as alterações para o body, que dessa forma poderá ser feita em  mais de uma

  db.forEach((currentCar, index) => {
    //O forech recebe o carro atual e o indice
    if (currentCar.id === id) {
      // se o id do carro recebido for igual ao id do param
      db[index] = editedCar;
    }
  });

  return res.status(200).json(editedCar);
  // exemplo dado por um aluno
  //const id = req.params.id;
  /* const editedCar = req.body;

  const index = db.findIndex((car) => car.id ==id);
  db[index] ={
    ...db[index],
    ...editedCar,
  } */
});

router.delete("/car/delete/:id", (req, res) => {
  const id = req.params.id;
  const index = db.findIndex((car) => car.id == id);

  db.splice(index, 1);

  return res.status(200).json(db);
});
module.exports = router;
