const conexao = require("../conexao")
const modelsUsuario = require('../models/usuariosModels')
class UsuariosControlers {
    buscarUsuarios(usuario) {
        
        return modelsUsuario.logar(usuario);
    }
}

module.exports = new UsuariosControlers();