const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, min:0, required:true}
})

const debtSchema = new mongoose.Schema({
    name: {type: String, required:true},
    value:{type:Number, min:0, required: [true, 'Informe corretamente o debito']},
    status:{type:String, required:false, uppercase:true,enum:['PAGO', 'PENDENTE', 'AGENDADO']}
})

const savesSchema = new mongoose.Schema({
    currentValue:{type:Number, min:0, required: [true, 'Informe corretamente o valor atual']},
    incomingMonthValue:{type:Number, min:0, required: [true, 'Informe corretamente o valor a guardar no mes']},
    totalValue:{type:Number, min:0, required: [false]}
})

const billingCycleSchema = new mongoose.Schema({
    name: {type:String, required:true},
    month: {type: Number, min:1, max:12, required:true},
    year: {type:Number, min:1970, max:2100, required: true},
    credits: [creditSchema], 
    debts: [debtSchema],
    saves: [savesSchema]
})


module.exports = restful.model('BillingCycle', billingCycleSchema)