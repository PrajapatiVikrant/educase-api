const sql = require('../config/db');
const addSchool = async (req, res) => {

    const { name, address, latitude, longtitude } = req.body;
    try {
         
        if(!name || !address || !latitude || !longtitude){
            
            return res.json({
                message:"Please provide valid data"
            })
        }



        await sql`
        INSERT INTO school (name, address, latitude, longtitude)
        VALUES (${name}, ${address}, ${latitude}, ${longtitude})
    `;

       return res.json({
            message: "add school successfully"
        })
    } catch (error) {

        return res.json({
            message: error.message
        })
    }
}

module.exports = addSchool;