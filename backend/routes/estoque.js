const express = require('express');
const router = express.Router();
const pool = require('../db');

// Obter estoque
router.get('/', async (req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT * FROM estoque LIMIT 1');
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Estoque não encontrado' });
    }
    res.json({
      success: true,
      data: rows[0]
    });
  } catch (error) {
    next(error);
  }
});

// Atualizar estoque
router.post('/atualizar', async (req, res, next) => {
  try {
    const { mesas, cadeiras, bancos } = req.body;
    
    // Validação básica
    if (mesas === undefined || cadeiras === undefined || bancos === undefined) {
      return res.status(400).json({ 
        success: false, 
        message: 'Todos os campos (mesas, cadeiras, bancos) são obrigatórios' 
      });
    }

    await pool.query(
      'UPDATE estoque SET estoqueMesas = ?, estoqueCadeiras = ?, estoqueBancos = ? WHERE id = 1', 
      [mesas, cadeiras, bancos]
    );

    res.json({ 
      success: true,
      message: 'Estoque atualizado com sucesso',
      data: { mesas, cadeiras, bancos }
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
