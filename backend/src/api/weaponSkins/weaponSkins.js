const restful = require('node-restful')
const mongoose = restful.mongoose

const sitesDisponiveisSchema = new mongoose.Schema({
    nomeSite:{type:String, min:0, required: [true, 'Informe o nome do site']}, //site tal
    urlSite:{type:String, min:0, required: [true, 'Informe a url do site']} //site tal
})


const skinsSchema = new mongoose.Schema({
    nomeSkin:{type:String, min:0, required: [true, 'Informe o nome da skin']}, //revoluçao neon
    qualidadeSkin: {type:String, min:0, required: [true, 'Informe a qualidade da skin']},//normal
    descricaoSkin: {type:String, min:0, required: [true, 'Informe a descrição da skin']},//,
    colecaoSkin: {type:String, min:0, required: [true, 'Informe a coleção da skin']}, //2° coleçao gama
    nomeArma:{type:String, min:0, required: [true, 'Informe o nome da arma']}, //ak47
    categoriaArma:{type:String, min:0, required: [true, 'Informe a categoria da arma']}, //rifle
    precoMedio:{type:Number, min:0, required: [true, 'Informe corretamente o preço médio']}, //media dos valores
    sitesDisponiveis:[false, sitesDisponiveisSchema],
    melhorPreco:{type:Number, min:0, required: [true, 'Informe corretamente o preço médio']}, 
    siteMelhorPreco: {type:String, min:0, required: [true, 'Informe o nome da arma']}
})


module.exports = restful.model('weaponSkins', skinsSchema)