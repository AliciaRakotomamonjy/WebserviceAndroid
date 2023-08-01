const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const utilisateurSchema = new Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  dateNaissance: { type: Date, required: true },
  adresse: { type: String, required: true },
  login: { type: String, required: true, unique: true },
  motdepasse: { type: String, required: true },
});

module.exports = mongoose.model('utilisateur', utilisateurSchema);