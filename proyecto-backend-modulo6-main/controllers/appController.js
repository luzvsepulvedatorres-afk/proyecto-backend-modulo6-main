const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../auth');

// 1. Iniciar sesión
const loginUsuario = (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === '1234') {
        const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
        return res.json({
            status: 'success',
            message: 'Autenticación exitosa',
            token
        });
    }

    res.status(401).json({
        status: 'error',
        message: 'Credenciales inválidas'
    });
};

// 2. Crear usuario
const createUser = (req, res) => {
    const { username, password } = req.body;
    res.status(201).json({
        status: 'success',
        message: 'Usuario creado exitosamente',
        data: { username }
    });
};

// 3. Crear usuario con transacción
const createUserWithTransaction = (req, res) => {
    res.status(201).json({
        status: 'success',
        message: 'Usuario creado mediante transacción exitosamente'
    });
};

// 4. Obtener usuarios
const getUsers = (req, res) => {
    res.json({
        status: 'success',
        data: [
            { id: 1, username: 'admin' },
            { id: 2, username: 'usuario_prueba' }
        ]
    });
};

// 5. Actualizar usuario
const updateUser = (req, res) => {
    const { id } = req.params;
    res.json({
        status: 'success',
        message: `Usuario con ID ${id} actualizado correctamente`
    });
};

// 6. Eliminar usuario
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        status: 'success',
        message: `Usuario con ID ${id} eliminado correctamente`
    });
};

// 7. Obtener usuarios con sus pedidos (Relación 1:N)
const getUsersWithOrders = (req, res) => {
    res.json({
        status: 'success',
        data: []
    });
};

// 8. Obtener pedidos por usuario
const getOrdersByUser = (req, res) => {
    const { userId } = req.params;
    res.json({
        status: 'success',
        data: []
    });
};

// 9. Crear pedido para un usuario
const createOrderForUser = (req, res) => {
    const { userId } = req.params;
    res.status(201).json({
        status: 'success',
        message: `Pedido creado exitosamente para el usuario ${userId}`
    });
};

module.exports = {
    loginUsuario,
    createUser,
    createUserWithTransaction,
    getUsers,
    updateUser,
    deleteUser,
    getUsersWithOrders,
    getOrdersByUser,
    createOrderForUser
};