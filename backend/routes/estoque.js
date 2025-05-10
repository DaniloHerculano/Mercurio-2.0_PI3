/* const express = require('express');
const router = express.Router();
const pool = require('../db-pg');

// Obter estoque
router.get('/', async (req, res) => {
  try {
    // 1. Verifique a conexão com o banco
    const connection = await pool.getConnection();
    console.log('Conexão com o banco estabelecida');

    // 2. Execute a query
    const [rows] = await connection.query('SELECT * FROM estoque LIMIT 1');
    connection.release();

    // 3. Verifique se retornou dados
    if (!rows || rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Estoque não encontrado'
      });
    }

    // 4. Log para debug
    console.log('Dados do estoque:', rows[0]);

    // 5. Retorne no formato esperado pelo frontend
    res.json({
      success: true,
      data: {
        estoqueMesas: rows[0].estoqueMesas || rows[0].mesas || 0,
        estoqueCadeiras: rows[0].estoqueCadeiras || rows[0].cadeiras || 0,
        estoqueBancos: rows[0].estoqueBancos || rows[0].bancos || 0
      }
    });

  } catch (error) {
    console.error('Erro detalhado:', error);
    res.status(500).json({
      success: false,
      message: 'Erro no servidor',
      error: error.message // Adicione esta linha para mais detalhes
    });
  }
});

// Verifique se sua rota está retornando no formato esperado
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM estoque LIMIT 1');
    
    // Adicione este log para debug:
    console.log('Dados do estoque:', rows[0]);
    
    if (!rows.length) {
      return res.status(404).json({ 
        success: false, 
        message: 'Estoque não encontrado' 
      });
    }
    
    // Certifique-se que os nomes dos campos batem com seu banco
    res.json({
      success: true,
      data: {
        estoqueMesas: rows[0].estoqueMesas, // ou rows[0].mesas?
        estoqueCadeiras: rows[0].estoqueCadeiras,
        estoqueBancos: rows[0].estoqueBancos
      }
    });
    
  } catch (error) {
    console.error('Erro no estoque:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erro no servidor' 
    });
  }
});

module.exports = router; */

//TESTE FERNANDA2

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
      'UPDATE estoque SET estoqueMesas = $1, estoqueCadeiras = $2, estoqueBancos = $3 WHERE id = 1',
      [mesas, cadeiras, bancos]
    );
    res.json({ success: true });
  } catch (error) {
    console.error('Erro ao atualizar estoque:', error);
    res.status(500).json({ success: false, message: 'Erro ao atualizar estoque' });
  }
});

module.exports = router;

