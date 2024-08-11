import  RegisterOrderBookerinDatabase from '../Model/OrderBookerSchema.js';
import bcrypt from "bcrypt";
import JWT from 'jsonwebtoken';


const registerOrderbooker = async (req, res) => {
    try {
        const { Name,  Email, Password } = req.body;

        if (!Name || !Email || !Password) {
            res.send({
                message: "Required Field"
            });
            
        } else {
            const hash_password = await bcrypt.hash(Password, 10);
            console.log(hash_password);

            const saveuser = new  RegisterOrderBookerinDatabase({ Name, Email, Password: hash_password }).save();
           
            res.send({
                message: 'User Registered'

            });
        }
    } catch (error) {
        console.log(error)
        res.send({
            message: "Server error"
        })

    }

}
const loginOrderbooker = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const login = await  RegisterOrderBookerinDatabase.findOne({ Email: Email , Password: Password})                // pehli Email database sa fetch kr rhai hn aur dosra emial hum uper user sa get kr rhai hn 
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

export {registerOrderbooker, loginOrderbooker };