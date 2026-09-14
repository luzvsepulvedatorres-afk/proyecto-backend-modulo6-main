const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'clave_secreta_super_segura';

const verificarToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    
    if (!authHeader) {
        return res.status(403).json({ message: 'Token no proporcionado.' });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'Formato de token inválido.' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido o expirado.' });
        }
        req.usuario = decoded;
        next();
    });
};

module.exports = { verificarToken, JWT_SECRET };