/* verificar que no exista el usuario, si los roles existen,
si lo hace un admin, etc.  
*/
import {ROLES} from '../models/Role'
import User from '../models/User'

// verificar si el usuario o email ya existe 

export const checkDuplicateUsernameOrEmail =  async (req, res, next) =>{
    //check user 
    const user = await User.findOne({username: req.body.username})
    if(user) return res.status(400).json({message: 'The user alrady exist'})

    //check email 
    const email = await User.findOne({email: req.body.email})
    if(email) return res.status(400).json({email: 'The email alrady exist'})

    next();
}



//verificar si los 2 roles existen 
export const checkRolesExisted = (req, res, next) =>{
    if (req.body.roles){

        for (let i= 0; i< req.body.roles.length; i++) {

            if(!ROLES.includes(req.body.roles[i])){

                res.json({message: 'verify if all the roles exist'})
            }
        }
    }

    next();
}