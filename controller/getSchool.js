const sql = require('../config/db');
const getSchool =  async (req, res) => {
    const { userLatitude, userLongtitude } = req.params;
    const R = 6371; // Radius of Earth in kilometers

    // Helper function to convert degrees to radians
    const toRadians = (degrees) => degrees * Math.PI / 180;

    try {
        const data = await sql('SELECT * FROM school'); // Replace this with your DB query
        const distanceArr = data.map((elem) => {
            let lat = elem.latitude;
            let lon = elem.longtitude;


            let lon1 = toRadians(userLongtitude)
            let lon2 = toRadians(lon)
            let lat1 = toRadians(userLatitude);
            let lat2 = toRadians(lat)

            // Haversine formula 
            let dlon = lon2 - lon1;
            let dlat = lat2 - lat1;

            let a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

            let c = 2 * Math.asin(Math.sqrt(a));
            let distance = R*c

            return {
                name: elem.name,
                address: elem.address,
                latitude: elem.latitude,
                longtitude: elem.longtitude,
                distance: distance,
            };
        });

        // Sort the schools by distance (nearest first)
        distanceArr.sort((a, b) => a.distance - b.distance);

       
       return res.json(distanceArr);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch schools' });
    }
}

module.exports = getSchool;