const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const pedidoRoutes = require('./routes/pedidos');
const estoqueRoutes = require('./routes/estoque');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/pedidos', pedidoRoutes);
app.use('/api/estoque', estoqueRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});