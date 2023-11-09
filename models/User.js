const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama: {
        type: String,
        requirred: [true, 'Silahkan isi nama'],
        unique: true
    },

    email: {
        type: String,
        unique: true,
        match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Silakan isi email valid']
    }
})

module.exports  = mongoose.model('user', UserSchema)