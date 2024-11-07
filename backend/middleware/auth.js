const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // टोकन में से admin ID निकालें और req object में स्टोर करें
        req.adminId = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Please authenticate.' });
    }
};

module.exports = auth; 