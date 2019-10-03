const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    // async define que a função é assincrona
    async index(req, res){
        const {tech} = req.query;
        const spots = await Spot.find({ techs: tech });

        console.log(tech);
        console.log(spots);
        // return res.json(spots);

        if (spots) {
            return res.json({message: `You requested Spots that uses ${tech}`, techs: spots})
        } else {
            return res.json({message: "No spots was found for this tecnology"})
        }
    },

    async store(req, res){
        const {filename} = req.file;
        const {company, techs, price} = req.body;

        //Using like that be easier to get directly values
        const {user_id} = req.headers;
        
        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({error: "User not found!"});
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company: company,
            techs: techs.split(',').map(function(tech){
                return tech.trim();
            }),
            price: price
        });

        return res.json({message: "User successfully created!", created: {spot}});
    }
};