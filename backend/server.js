const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const pedidoRoutes = require('./routes/pedidos');
const estoqueRoutes = require('./routes/estoque');

const app = express();

// CORS DEFININDO O CAMINHO
const corsOptions = {
  origin: 'https://mercuriolocacoes.netlify.app',
  methods: 'GET,POST',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/api/pedidos', pedidoRoutes);
app.use('/api/estoque', estoqueRoutes);

const PORT = 6543;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
