/* const express = require('express');
const router = express.Router();
const pool = require('../db-pg');

// PARTE DE CRIAÇÃO DO PEDIDO
router.post('/', async (req, res) => {
  try {
    const {
      dataInicio, dataRetorno, modelo, bancos, cadeiras, mesas,
      endereco, tipoEntrega, totalDiario, totalSemFrete, frete,
      total, status, dataPedido, dias
    } = req.body;

    const result = await pool.query(`
      INSERT INTO pedidos 
      (datepickerstart, datepickerend, modelo, quantidadebancos, quantidadecadeiras, quantidademesas,
       endereco, tipo_entrega, totaldiaria, totalpedido_frete, valor_frete,
       totalpedido, status, data_pedido, dias)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
      RETURNING id
    `, [
      dataInicio, dataRetorno, modelo, bancos, cadeiras, mesas,
      endereco, tipoEntrega, totalDiario, totalSemFrete, frete,
      total, status, dataPedido, dias
    ]);

    const pedidoId = result.rows[0].id;

    res.status(201).json({ success: true, pedidoId });
  } catch (error) {
    console.error('Erro ao criar pedido:', error);
    res.status(500).json({ success: false, message: 'Erro no servidor ao criar pedido' });
  }
});

module.exports = router; */

// NOVO TESTE PARA SUBTRAIR VALORES DO BANCO

const express = require('express');
const router = express.Router();
const pool = require('../db-pg');

router.post('/', async (req, res) => {
  try {
    const {
      dataInicio, dataRetorno, modelo, bancos, cadeiras, mesas,
      endereco, tipoEntrega, totalDiario, totalSemFrete, frete,
      total, status, dataPedido, dias
    } = req.body;

    // 1. Criação do pedido
    const result = await pool.query(`
      INSERT INTO pedidos 
      (datepickerstart, datepickerend, modelo, quantidadebancos, quantidadecadeiras, quantidademesas,
       endereco, tipo_entrega, totaldiaria, totalpedido_frete, valor_frete,
       totalpedido, status, data_pedido, dias)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
      RETURNING id
    `, [
      dataInicio, dataRetorno, modelo, bancos, cadeiras, mesas,
      endereco, tipoEntrega, totalDiario, totalSemFrete, frete,
      total, status, dataPedido, dias
    ]);

    const pedidoId = result.rows[0].id;

    console.log("Valores recebidos para subtrair do estoque:", bancos, cadeiras, mesas);
    
    // 2. Subtrai do estoque
    try {
  console.log("Subtraindo do estoque:", bancos, cadeiras, mesas);
  await pool.query(`
    UPDATE estoque
    SET 
      estoquebancos = estoquebancos - $1,
      estoquecadeiras = estoquecadeiras - $2,
      estoquemesas = estoquemesas - $3
    WHERE id = 1
  `, [bancos, cadeiras, mesas]);
  console.log("Subtração do estoque concluída.");
} catch (err) {
  console.error("Erro ao subtrair estoque:", err);
}

module.exports = router;
