//Criar uma instância do express
//Como padrão da comunidade cria-se uma variável ex(app) recebendo o express, o app será como uma instância
require("dotenv").config()//Configuração de variáveis de ambiente Chamar a porta que está no arquivo .env
const express = require("express");
const carRouter = require("./src/routes/cars.routes")
const app = express();

app.use(express.json()); //Prepara o app para receber conteúdos json, informa que vamos trabalhar com esse formado de código

app.use("/", carRouter) //roteador para direcionar as chamadas para a rota de carros







//Para subir ao servidor a aplicação para o servidor, funciona como um telefonista que quando receber a chamada vai transferir para abrir na pagina correta
//Passamos duas informações, o número da porta que queremos que ela escute que por padrão será a 4000 e
//Em segundo passamos um callback que será executada, quando o servidor estiver rodando
//Para chamar a porta colocar o Number, pq o dot entende o conteúdo como string e chamar o conteúdo do env
app.listen(Number(process.env.PORT), () => {
  console.log("Servidor está rodando na porta 4000.");
});

