import bcrypt from "bcrypt";
import JWT from 'jsonwebtoken';
import  registeradmin from '../Model/AdminSchema.js'


const register = async (req, res) => {
    try {
        const Email = 'ebutt@gmail.com';
        const Password = '12345';

        const hash_password = await bcrypt.hash(Password, 10);
        console.log(hash_password); 


        if ( Email === 'ebutt@gmail.com' && Password === '12345') {
         const saveuser = registeradmin({  Email, Password: hash_password }).save();
          res.send({
            message: 'Login OK'
          })
        }
        else{
            res.send({
                message: 'Login  not OK'
              })
        }
    } catch (error) {
        console.log(error)
        res.send({
            message: "Server error"
        })
    }

}
// const login = async (req, res) => {
//     try {
//         const { Email, Password } = req.body;
//         const login = await registeradmin.findOne({ Email: Email})                // pehli Email database sa fetch kr rhai hn aur dosra emial hum uper user sa get kr rhai hn
//         console.log(login)
//         const token = JWT.sign({id:"_id"},`${process.env.PRIVATEKEY}`,{expiresIn:'1h'});
//         // console.log(token);
//         if (login) {
//             res.status(200).send({
//                 message: "login OK"
//             })
//         }
//         else {
//             res.send({
//                 message: "login not ok"
//             })
//         }}
//         catch (error) {
//             console.log(error)
//             res.send({
//                 message: "Server error"
//             })
//         }
//     }
 
    const login = async (req, res) => {
        try {
            const { Email, Password } = req.body;
            const login = await registeradmin.findOne({ Email: Email })                // pehli Email database sa fetch kr rhai hn aur dosra emial hum uper user sa get kr rhai hn
            
            const token = JWT.sign({id:"_id"},`${process.env.PRIVATEKEY}`,{expiresIn:'1h'});
            console.log(token);
            if (login) {
                res.status(200).send({
                    message: "login OK"
                })
            }
            else {
                res.send({
                    message: "login not ok"
                })
            }}
            catch (error) {
                console.log(error)
                res.send({
                    message: "Server error"
                })
            }
        } 
    export {register , login };