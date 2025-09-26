require("dotenv").config();
const con = require("./conexao");
const tabelas = require("./tabelas");

tabelas.init(con);

//EXPRESS
const express = require("express");
const cors = require('cors');

const app = express();
app.use(express.json());
const porta = process.env.PORTA;
app.use(cors());


const router = require("./rotas/index");
router(app);

app.listen(porta, () => {
  console.log(`SERVIDOR NA PORTA: ${porta}`);
});
