const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const pedidoRoutes = require('./routes/pedidos');
const estoqueRoutes = require('./routes/estoque');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/estoque', estoqueRoutes);

// Rota de saúde baleada.. rss
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Tratamento de erros global - se funcionar
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Erro interno no servidor' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Ajuste o CORS para permitir seu frontend
const corsOptions = {
  origin: 'http://seu-frontend.com', // ou 'http://localhost:3000'
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
