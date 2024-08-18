import  AddShopinDatabase from '../Model/Add Shop.js';




const AddShop = async (req, res) => {
    try {
        const { Shop_Name, Owner_Name, Locality, Sub_Location,Contact_No, CNIC , NTN_Registered } = req.body;

        if (!Shop_Name || !Owner_Name || !Locality || !Contact_No || !CNIC ) {
            res.send({
                message: "Required Field"
            });
            
        } else {
          
            const saveuser = new  AddShopinDatabase({  Shop_Name, Owner_Name, Locality, Sub_Location,Contact_No, CNIC , NTN_Registered }).save();
           
            res.send({
                message: 'Shop Registered',
                saveuser

            });
        }
    } catch (error) {
        console.log(error)
        res.send({
            message: "Server error"
        })

    }

}
export default AddShop;