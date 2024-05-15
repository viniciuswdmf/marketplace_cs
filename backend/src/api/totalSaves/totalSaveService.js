const totalSave = require('./totalSave')
const errorHandler = require('../common/errorHandler')

totalSave.methods(['get', 'post', 'put', 'delete'])
totalSave.updateOptions({new: true, runValidators: true})
totalSave.after('post', errorHandler).after('put', errorHandler)

totalSave.route('get', (req, res, next) => {
    totalSave.find({}, (err, docs) => {
        if(!err) {
            res.json(docs)
        } else {
            res.status(500).json({errors: [error]})
        }
    })
})

totalSave.route('count', (req, res, next) => {
    totalSaves.count((error, value) =>{
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json({value})
        }
    })
})

totalSave.route('summary', (req, res, next) => {
    totalSave.aggregate([{ 
        $group: {_id: null, currentValue: {$sum: "$currentValue"}, incomingMonthValue: {$sum: "$incomingMonthValue"}, totalValue: {$sum: "$totalValue"}}
    }, { 
        $project: {_id: 0, currentValue: 1, incomingMonthValue: 1, totalValue: 1}
    }], (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {currentValue: 0, incomingMonthValue: 0, totalValue: 0})
        }
    })
})



module.exports = totalSave

