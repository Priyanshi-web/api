const mongoose = require('mongoose');
const AddressSchema = mongoose.Schema({
    address: String,
    postal: Number,
    
});

module.exports = mongoose.model('Address', AddressSchema);