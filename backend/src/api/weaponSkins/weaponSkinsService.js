const WeaponSkins = require('./weaponSkins');
const errorHandler = require('../common/errorHandler');

WeaponSkins.methods(['get', 'post', 'put', 'delete']);
WeaponSkins.updateOptions({ new: true, runValidators: true });
WeaponSkins.after('post', errorHandler).after('put', errorHandler);

WeaponSkins.route('count', (req, res, next) => {
    WeaponSkins.count((error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] });
        } else {
            res.json({ value });
        }
    });
});

// Adicionar rota de pesquisa
WeaponSkins.route('search.get', (req, res, next) => {
    const searchQuery = req.query.q || '';
    const regex = new RegExp(searchQuery, 'i'); // Regex para busca case insensitive

    WeaponSkins.find({
        $or: [
            { nomeSkin: regex },
            { descricaoSkin: regex },
            { colecaoSkin: regex },
            { nomeArma: regex }
        ]
    }, (err, docs) => {
        if (!err) {
            res.json(docs);
        } else {
            res.status(500).json({ errors: [err] });
        }
    });
});

// Adicionar rota de filtragem por categoria
WeaponSkins.route('category.get', (req, res, next) => {
    const category = req.query.category;

    if (!category) {
        return res.status(400).json({ errors: ['Categoria não fornecida'] });
    }

    WeaponSkins.find({ categoriaArma: category }, (err, docs) => {
        if (!err) {
            res.json(docs);
        } else {
            res.status(500).json({ errors: [err] });
        }
    });
});

WeaponSkins.route('get', (req, res, next) => {
    const { id } = req.params;
    if (id) {
        WeaponSkins.findById(id, (err, doc) => {
            if (!err) {
                if (doc) {
                    res.json(doc);
                } else {
                    res.status(404).json({ errors: ['Document not found'] });
                }
            } else {
                res.status(500).json({ errors: [err] });
            }
        });
    } else {
        WeaponSkins.find({}, (err, docs) => {
            if (!err) {
                res.json(docs);
            } else {
                res.status(500).json({ errors: [err] });
            }
        });
    }
});

module.exports = WeaponSkins;
