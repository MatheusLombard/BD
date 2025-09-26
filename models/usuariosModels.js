const conexao = require("../conexao");
class UsuariosModels {
  logar(usuario) {
    let sql = `SELECT * FROM usuarios WHERE usuarios.Email = '${usuario.email}' AND usuarios.Senha = '${usuario.senha}'
    `;
    
    return new Promise((resolve, reject) => {
      conexao.query(sql, {}, (error, result) => {
        if (error) {
          reject(error);
        }
        console.log(result.length);
        if(result.length === 0){
          resolve('Usuário ou senha inválidos');
        }
        resolve(result);
      });
    });
  }

  cadastrar(usuario){
    let sql = `INSERT INTO Usuarios (Nome,Telefone,CPF,Email,CEP,Logradouro,Cidade,Bairro,UF,Numero_Casa,Senha) VALUES ('${usuario.nome}','${usuario.telefone}',${usuario.cpf},'${usuario.email}','${usuario.cep}','${usuario.logradouro}','${usuario.cidade}','${usuario.bairro}','${usuario.uf}',${usuario.numero},'${usuario.senha}');`

      return new Promise((resolve, reject) => {
        conexao.query(sql, {}, (error, result) => {
            if(error) {
                reject(error);
            }
            resolve(result);
        });
      });
  }
}

module.exports = new UsuariosModels();
