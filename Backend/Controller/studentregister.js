import registeruser from '../Model/student.js';
import bcrypt from "bcrypt";
import JWT from 'jsonwebtoken';

const register = async (req, res) => {
    try {
        const { FirstName, LastName, Email, Password } = req.body;

        if (!FirstName || !LastName || !Email || !Password) {
            res.send({
                message: "Required Field"
            });

        }

        const hash_password = await bcrypt.hash(Password, 10);
        console.log(hash_password);

        const saveuser = registeruser({ FirstName, LastName, Email, Password: hash_password }).save();
        console.log(saveuser);
        res.send({
            message: 'User Registered'

        });




    } catch (error) {
        console.log(error)
        res.send({
            message: "Server error"
        })
    }

}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const login = await registeruser.findOne({ Email: email})                // pehli Email database sa fetch kr rhai hn aur dosra emial hum uper user sa get kr rhai hn
        console.log(login)
        const token = JWT.sign({id:"_id"},`${process.env.PRIVATEKEY}`,{expiresIn:'1h'});
        // console.log(token);
        if (login) {
            res.status(200).send({
                message: "login OK"
            })
        }
        else {
            res.send({
                message: "login not ok"
            })
        }
    }


    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "server Eror"

        })
    }
}
const deletestdnt = async (req, res) => {
    try {
        await registeruser.deleteMany();
        res.status(401).send({
            success: true,
            message: "Deleted Successfully"
        })

    }
    catch (error) {
        res.send({
            message: "Error message"
        })
    }
}

const deleteonestdnt = async (req, res) => {
    try {
        await registeruser.deleteOne();
        res.status(401).send({
            success: true,
            message: "Deleted Successfully"
        })

    }
    catch (error) {
        res.send({
            message: "Error message"
        })
    }
}

const updatestudent1 = async (req, res) => {
    try {
        const { FirstName, LastName, Email, Password } = req.body;
        const updatevalue = await registeruser.updateOne();
        console.log(updatevalue);
        if (updatevalue) {
            res.send({
                success: true,
                message: "updated Successfully"

            })
        }
    }
    catch (error) {
        res.send({
            message: "Error message"
        })
    }
}

export { register, login, deletestdnt, updatestudent1, deleteonestdnt };