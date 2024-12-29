const mongoose =require('mongoose');
const blackListTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true,
        
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86480
    }    
});
module.exports = mongoose.model('blackListToken', blackListTokenSchema);