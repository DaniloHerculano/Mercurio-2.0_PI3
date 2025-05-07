const express = require('express');
const router = express.Router();
const pool = require('../db-pg');

// Criar pedido
router.post('/', async (req, res) => {
  try {
    const {
      dataInicio, dataRetorno, modelo, bancos, cadeiras, mesas,
      endereco, tipoEntrega, totalDiario, totalSemFrete, frete,
      total, status, dataPedido, dias
    } = req.body;

    const [result] = await pool.query(`
      INSERT INTO pedidos 
      (datepickerstart, datepickerend, modelo, quantidadebancos, quantidadecadeiras, quantidademesas,
      endereco, tipo_entrega, totaldiaria, totalpedido_nfrete, valor_frete,
      totalpedido, status, data_pedido, dias)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      dataInicio, dataRetorno, modelo, bancos, cadeiras, mesas,
      endereco, tipoEntrega, totalDiario, totalSemFrete, frete,
      total, status, dataPedido, dias
    ]);

    res.status(201).json({ success: true, pedidoId: result.insertId });
  } catch (error) {
    console.error('Erro ao criar pedido:', error);
    res.status(500).json({ success: false, message: 'Erro no servidor' });
  }
});

module.exports = router;
