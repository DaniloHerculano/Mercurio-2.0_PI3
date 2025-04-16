const express = require('express');
const router = express.Router();
const pool = require('../db');

// Obter estoque
router.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM estoque LIMIT 1');
  res.json(rows[0]);
});

// Atualizar estoque
router.post('/atualizar', async (req, res) => {
  const { mesas, cadeiras, bancos } = req.body;
  await pool.query('UPDATE estoque SET estoqueMesas = ?, estoqueCadeiras = ?, estoqueBancos = ? WHERE id = 1', [mesas, cadeiras, bancos]);
  res.json({ success: true });
});

module.exports = router;
