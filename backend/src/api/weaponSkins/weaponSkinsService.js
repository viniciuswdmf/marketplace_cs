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
