import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../model/userModel.js';

const generateToken = (userId) => {
    return jwt.sign({ id: userId }, "EYOB2M", {
        expiresIn: "3d",
    });
};

export const signup = async (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password || !req.body.role) {
        return res.status(400).json({ error: 'fill all fields', });
    }

    const { name, email, password, role } = req.body;

    try {

        const hashedPassword = await bcrypt.hash(password, 10);


        const newUser = await User.create({ name, email, password: hashedPassword, role });


        const token = generateToken(newUser.id);

        res.status(201).json({ message: 'user created successfully', token });
    } catch (error) {
        res.status(400).json({ message: 'signup failed', error: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'user not found' });
        }


        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'invalid credentials' });
        }


        const token = generateToken(user.id);

        res.status(200).json({ message: 'login successful', token });
    } catch (error) {
        res.status(400).json({ message: 'login failed', error: error.message });
    }
};
