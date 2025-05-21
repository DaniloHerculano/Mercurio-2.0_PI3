const express = require('express');
const router = express.Router();
const pool = require('../db-pg');

// Obter estoque
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM estoque LIMIT 1');
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao buscar estoque:', error);
    res.status(500).json({ success: false, message: 'Erro ao buscar estoque' });
  }
});

// Atualizar estoque
router.post('/atualizar', async (req, res) => {
  try {
    const { mesas, cadeiras, bancos } = req.body;

    await pool.query(
      `UPDATE estoque
    SET 
      estoquebancos = estoquebancos - $1,
      estoquecadeiras = estoquecadeiras - $2,
      estoquemesas = estoquemesas - $3
    WHERE id = 1`,
      [mesas, cadeiras, bancos]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Erro ao atualizar estoque:', error);
    res.status(500).json({ success: false, message: 'Erro ao atualizar estoque' });
  }
});

module.exports = router;
