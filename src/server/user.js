var mongoose = require('mongoose');
mongoose.connect('')
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    age : Number,
    gender : String
});

module.exports = mongoose.model('User', userSchema);