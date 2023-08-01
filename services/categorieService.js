const Categorie = require('../models/Categorie')

const getAllCategories = async () =>{
  try {
    const categories = await Categorie.find(); 
    return categories;
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories :', error);
    throw error;
  }
}
module.exports = {getAllCategories}

