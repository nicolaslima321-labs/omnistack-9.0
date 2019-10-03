const User = require('../models/User');

module.exports = {
    // async define que a função é assincrona
    async store(req, res){
        const email = req.body.email;
        
        let user = await User.findOne({ email });

        // await
        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }
};