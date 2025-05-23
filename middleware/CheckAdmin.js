

import jwt from 'jsonwebtoken'
import UserModal from '../models/User.js';

const isAdmin = async (req, res, next) => {
    try {
        const userId = req.body.userId || req.params.userId;

        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        const user = await UserModal.findByPk(userId); 
        if (!user) {
            return res.status(403).json({ message: 'Unauthorized: User not found' });
        }

        if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Unauthorized: User is not an admin' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('Error in isAdmin middleware:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
const isLogin = async (req, res, next) => {
    try {
        const userId = req.body.userId || req.params.userId;

        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        const user = await UserModal.findByPk(userId); 
        if (!user) {
            return res.status(403).json({ message: 'Unauthorized: User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('Error in isLogin middleware:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
export { isLogin, isAdmin };
