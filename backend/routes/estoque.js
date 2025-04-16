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

// Listar pedidos (novo endpoint)
router.get('/', async (req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT * FROM pedidos ORDER BY data_pedido DESC');
    res.json({
      success: true,
      data: rows
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
