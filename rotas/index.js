const rotaUsuarios = require('./usuariosRotes')
module.exports = (app) => {
    app.use(rotaUsuarios)
    app.use(express.json());
}