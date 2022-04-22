//Trazer o roteador do express
const router = require("express").Router();
const db = require("../../data.js");

router.post("/create-car", (req, res) => {
  db.push(req.body); //Pega o que está recebendo no corpo da requisição e armazena no banco de dados

  return res.status(201).json({ message: "Carro criado com sucesso" });
});

router.get("/all-car", (req, res) => {
  return res.status(200).json(db);//devolve a informação buscada para o usuário
});

router.get("/car/:id", (req, res) => { //Busca de carro por id
  return res.status(200).json(db);//devolve a informação buscada para o usuário
});

module.exports = router;
