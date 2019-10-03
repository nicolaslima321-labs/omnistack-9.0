const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    // async define que a função é assincrona
    async show(req, res){
        const {user_id} = req.headers;
        const spots = await Spot.find({ User: user_id });

    
        if (spots) {
            return res.json({message: `You spots founded for you`, techs: spots})
        } else {
            return res.json({message: "No spots was found"})
        }
    }
};