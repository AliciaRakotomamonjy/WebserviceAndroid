const Avis = require('../models/Avis')

const createAvis = async (data) => {
    try {
        const newAvis = new Avis(data);
        inserted = await Avis.create(newAvis);
        console.log("New Avis : ", inserted);
    } catch (error) {
        console.log(error);
        throw error;
    }
}


module.exports = {
    createAvis
}
