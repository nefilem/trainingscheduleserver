const mongoose = require('mongoose');

const equipmentDBSchema = mongoose.Schema({
    equipmentcode: {
        type: String,
        required: true,
        unique: true 
    },
    description: {
        type: String,
        required: true
    }
});

module.exports.EquipmentDB = mongoose.model('equipment', equipmentDBSchema, 'equipment');