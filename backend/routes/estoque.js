const express = require('express');
const router = express.Router();
const pool = require('../db');

// Criar pedido
router.post('/', async (req, res, next) => {
  try {
    const {
      dataInicio, dataRetorno, modelo, bancos, cadeiras, mesas,
      endereco, tipoEntrega, totalDiario, totalSemFrete, frete,
      total, status, dataPedido, dias
    } = req.body;

    // Validação básica
    if (!dataInicio || !dataRetorno || !modelo || bancos === undefined || 
        cadeiras === undefined || mesas === undefined || !endereco || !tipoEntrega) {
      return res.status(400).json({ 
        success: false, 
        message: 'Campos obrigatórios faltando' 
      });
    }

    const [result] = await pool.query(`
      INSERT INTO pedidos 
      (datepickerstart, datepickerend, modelo, quantidadebancos, quantidadecadeiras, quantidademesas,
      endereco, tipo_entrega, totaldiaria, totalpedido_nfrete, valor_frete,
      totalpedido, status, data_pedido, dias)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      dataInicio, dataRetorno, modelo, bancos, cadeiras, mesas,
      endereco, tipoEntrega, totalDiario, totalSemFrete, frete,
      total, status || 'pendente', dataPedido || new Date(), dias
    ]);

    res.status(201).json({ 
      success: true, 
      pedidoId: result.insertId,
      message: 'Pedido criado com sucesso'
    });
  } catch (error) {
    next(error);
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

module.exports = router;
