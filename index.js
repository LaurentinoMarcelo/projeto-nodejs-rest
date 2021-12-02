const customExpress = require('./config/customExpress')
const conexao = require('./infraEstrutura/conexao')
const Tabelas = require('./infraEstrutura/tabelas')

conexao.connect(erro => {
    if(erro){
        console.log(erro);
    }else{
        console.log('Conectado com sucesso');

        Tabelas.init(conexao)
        const app = customExpress()

        app.listen(3000, () => console.log('servidor rodando porta 3000'))
    }
})




