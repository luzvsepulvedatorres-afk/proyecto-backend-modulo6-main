const express = require('express');
const router = express.Router();
const { verificarToken } = require('C:\\Users\\LUZ\\Desktop\\proyecto-backend-modulo6-main\\proyecto-backend-modulo6-main\\auth.js');
const { 
    getUsers, 
    createUser, 
    updateUser, 
    deleteUser,
    createUserWithTransaction,
    createOrderForUser,
    getUsersWithOrders,
    getOrdersByUser,
    loginUsuario 
} = require('../controllers/appController');

// Ruta pública para iniciar sesión y obtener el JWT
router.post('/login', loginUsuario);

// Rutas públicas de creación
router.post('/usuarios', createUser);
router.post('/usuarios/transaccion', createUserWithTransaction);

// Rutas protegidas con JWT (Módulo 8)
router.get('/usuarios', verificarToken, getUsers);
router.put('/usuarios/:id', verificarToken, updateUser);
router.delete('/usuarios/:id', verificarToken, deleteUser);

// Rutas de Relación 1:N protegidas con JWT
router.get('/usuarios/pedidos', verificarToken, getUsersWithOrders);
router.get('/usuarios/:userId/pedidos', verificarToken, getOrdersByUser);
router.post('/usuarios/:userId/pedidos', verificarToken, createOrderForUser);

module.exports = router;
