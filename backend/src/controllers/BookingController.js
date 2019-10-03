const Booking = require('../models/Booking');

module.exports = {
    // async define que a função é assincrona
    async store(req, res){
        //Using like that be easier to get directly values
        const {user_id} = req.headers;
        const {spot_id} = req.params;
        const {date} = req.body;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });

        await booking.populate('spot').populate('user').execPopulate();
        return res.json(booking);
    }
};