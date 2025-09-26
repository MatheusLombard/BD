const conexao = require("../conexao")
const modelsUsuario = require('../models/usuariosModels')
class UsuariosControlers {
    logarUsuarios(usuario) {
        
        return modelsUsuario.logar(usuario);
    }

    cadastraUsuarios(usuario){
        return modelsUsuario.cadastrar(usuario);
    }
}

module.exports = new UsuariosControlers();