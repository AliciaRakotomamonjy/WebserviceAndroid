const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://manakory_user:admin1234@cluster0.hemya3h.mongodb.net/manakory_db?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB successfully');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

module.exports = mongoose;
