const restful = require('node-restful')
const mongoose = restful.mongoose

const totalSaveSchema = new mongoose.Schema({
    currentValue: {type: Number, min:0, required:true},
    incomingMonthValue: {type: Number, min:0, required:true},
    totalValue: {type: Number, min:0, required:false}
})

module.exports = restful.model('TotalSave', totalSaveSchema)