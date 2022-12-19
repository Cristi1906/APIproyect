import jwt  from 'jsonwebtoken'
import config from '../config'
import User from '../models/User';
import Role from '../models/Role';

export const verifyToken = async (req, res, next) =>{
try {
    const token = req.headers["x-acces-token"];

    console.log(token)

    //verificar si da token 
    if (!token) return res.status(403).json({message: 'No token provided'})

    //extraer info de token
    const decoded = jwt.verify(token, config.SECRET)
    req.userId = decoded.id;

    //veridivar token 
    const user = await User.findById(req.userId, {password: 0})
    console.log(user)

    if (!user) return res.status(404).json({message: 'User not found'})

    next();

} catch (error) {
    return res.status(401).json({message: 'Access denied'})
}
}; 

// verificación de rol para accesos de rutas 
// si es modelador 
export const isModerator = async (req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find(({ _id: { $in:user.roles }}));

    for(let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator"){
            next();
            return;
        }
    }

    return res.status(403).json({message: 'You need to have a Moderator role'})
};

// si es admin 
export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find(({ _id: { $in:user.roles }}));

    for(let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin"){
            next();
            return;
        }
    }

    return res.status(403).json({message: 'You need to have a Admin role'})
};