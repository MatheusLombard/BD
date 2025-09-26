const conexao = require("../conexao");
class UsuariosModels {
  logar(usuario) {
    let sql = `SELECT Usuario_ID FROM usuarios WHERE usuarios.Email = ${usuario.email}
    `;

    return new Promise((resolve, reject) => {
      conexao.query(sql, {}, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }
}

module.exports = new UsuariosModels();
