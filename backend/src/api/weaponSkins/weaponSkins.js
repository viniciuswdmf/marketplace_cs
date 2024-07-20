const restful = require('node-restful')
const mongoose = restful.mongoose

const sitesDisponiveisSchema = new mongoose.Schema({
    nomeSite: { type: String, min: 0, required: [true, 'Informe o nome do site'] },
    urlSite: { type: String, min: 0, required: [true, 'Informe a url do site'] }
})

const skinsSchema = new mongoose.Schema({
    nomeSkin: { type: String, min: 0, required: [true, 'Informe o nome da skin'], index: true },
    qualidadeSkin: { type: String, min: 0, required: [true, 'Informe a qualidade da skin'] },
    descricaoSkin: { type: String, min: 0, required: [true, 'Informe a descrição da skin'], index: true },
    colecaoSkin: { type: String, min: 0, required: [true, 'Informe a coleção da skin'], index: true },
    nomeArma: { type: String, min: 0, required: [true, 'Informe o nome da arma'], index: true },
    categoriaArma: { type: String, min: 0, required: [true, 'Informe a categoria da arma'] },
    precoMedio: { type: Number, min: 0, required: [true, 'Informe corretamente o preço médio'] },
    sitesDisponiveis: [false, sitesDisponiveisSchema],
    melhorPreco: { type: Number, min: 0, required: [true, 'Informe corretamente o preço médio'] },
    siteMelhorPreco: { type: String, min: 0, required: [true, 'Informe o nome da arma'] },
    urlImagem: { type: String, min: 0, required: [true, 'Informe a URL da imagem'] }
})

module.exports = restful.model('weaponSkins', skinsSchema)
