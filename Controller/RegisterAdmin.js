import bcrypt from "bcrypt";
import JWT from 'jsonwebtoken';
import registeradmin from '../Model/AdminSchema.js'


const register = async (req, res) => {
    try {
        const Email = 'ebutt@gmail.com';
        const Password = '12345';

        const hash_password = await bcrypt.hash(Password, 10);
        console.log(hash_password);


        if (Email === 'ebutt@gmail.com' && Password === '12345') {
            const saveuser = registeradmin({ Email, Password: hash_password }).save();
            res.send({
                message: 'Login OK'
            })
        }
        else {
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
        if (login) {            // compare password with database
            const isPAsswordValid = await bcrypt.compare(Password, login.Password)
        
        if (isPAsswordValid) {   
            const token = JWT.sign({ id: "_id" }, `${process.env.PRIVATEKEY}`, { expiresIn: '1h' });
            console.log(token);
        
            res.status(200).send({
                message: " Login Ok"
            });
        }
    else {
            res.status(404).send({
                message: "Invalid Password"
            })
        }}
        else{
            res.status(404).send({
                message: "User Not Found"
            });
        }
    }
    catch (error) {
        console.log(error)
        res.send({
            message: "Server error"
        })
    }
}
export { register, login };

//     try {
//         const { Email, Password } = req.body;
        
//         // Fetch user from database
//         const user = await registeradmin.findOne({ Email: Email });
        
//         if (user) {
//             // Verify password (assuming bcrypt is used for hashing passwords)
//             const isPasswordValid = await bcrypt.compare(Password, user.Password);
            
//             if (isPasswordValid) {
//                 // Generate JWT token
//                 const token = JWT.sign({ id: user._id }, process.env.PRIVATEKEY, { expiresIn: '1h' });
//                 console.log(token);

//                 res.status(200).send({
//                     message: "login OK",
//                     token: token
//                 });
//             } else {
//                 res.status(401).send({
//                     message: "Invalid password"
//                 });
//             }
//         } else {
//             res.status(404).send({
//                 message: "User not found"
//             });
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             message: "Server error"
//         });
//     }
// };
