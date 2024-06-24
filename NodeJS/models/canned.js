const mongoose = require('mongoose');

const Canned = mongoose.model('Canned', {
    typeElement: { type: String },
    flavor: { type: String },
    weight: { type: String },
    nutritionalValue: { type: String },
    foodAdditives: { type: String },
    sugar: { type: String },
    protein: { type: String },
    fats: { type: String },
});

module.exports = { Canned }