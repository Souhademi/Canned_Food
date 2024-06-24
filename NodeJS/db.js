const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/MEAN', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false // Add this option to avoid deprecation warning
}, (err) => {
    if (!err) console.log("succeeded");
    else console.log('error')
}); // Added options



module.exports = mongoose;