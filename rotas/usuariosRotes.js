const { Router } = require('express')
const router = Router()
const controller = require('../controladores/usuarioController')


router.post('/login', (req, res) => {
  let usuario = {
    email: req.body.email,
    senha: req.body.senha
  }
  const resLogin = controller.logarUsuarios(usuario);
  resLogin
    .then((usuarios) => res.status(200).json(usuarios))
    .catch((error) => res.status(400).json(error.message))
})

router.post('/cadastro', (req, res) => {
  let usuario = {
    nome: req.body.nome,
    telefone: req.body.telefone,
    cpf: req.body.cpf,
    cep: req.body.cep,
    logradouro: req.body.logradouro,
    cidade: req.body.cidade,
    bairro: req.body.bairro,
    uf: req.body.uf,
    numero: req.body.numero,
    senha: req.body.senha,
  } 

  const respCadastro = controller.cadastraUsuarios();
  respCadastro
  .then((usuario) => res.status(200).json(usuario))
  .catch((error) => res.status(500).json(error.message))

})


module.exports = router