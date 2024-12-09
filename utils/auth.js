import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
import User from '../model/userModel.js';

dotenv.config();

export const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; 
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, "EYOB2M");
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: 'User not found.' });

    req.user = user; 
    next();

  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    res.status(403).json({ message: 'Invalid or expired token.' });
  }
};

export const isAdmin = (req, res, next) => {
  if (!req.user.admin) {
    return res.status(403).json({ message: 'Access denied. Admins only.' });
  }
  next();
};
