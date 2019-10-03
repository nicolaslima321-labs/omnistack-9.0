const express = require('express');

// Importando dependencia para trabalhar com mongoDB
const mongoose = require('mongoose');
// Importando arquivo de rotas JS
const routes = require('./routes');

const app = express();

// mongoose.connect('mongodb://nicolas:<nicolas>@clusterlearning-shard-00-00-83fyg.mongodb.net:27017,clusterlearning-shard-00-01-83fyg.mongodb.net:27017,clusterlearning-shard-00-02-83fyg.mongodb.net:27017/test?ssl=true&replicaSet=ClusterLearning-shard-0&authSource=admin&retryWrites=true&w=majority', {
mongoose.connect('mongodb+srv://omnistack:omnistack@clusterlearning-83fyg.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,    
})
// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição

app.use(express.json());
app.use(routes);

app.listen(3333);
