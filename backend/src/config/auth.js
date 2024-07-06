// const jwt = require('jsonwebtoken')
// const env = require('../.env')
// module.exports = (req, res, next) => {
//     // CORS preflight request
//     if (req.method === 'OPTIONS') {
//         next()
//     } else {
//         const token = req.body.token || req.query.token ||
//             req.headers['authorization']
//         if (!token) {
//             return res.status(403).send({ errors: ['No token provided.'] })
//         }
//         jwt.verify(token, env.authSecret, function (err, decoded) {
//             if (!err) {
//                 return res.status(403).send({
//                     errors: ['Failed to authenticate token.']
//                 })
//             } else {
//                 req.decoded = decoded
//                 next()
//             }
//         })
//     }
// }

const jwt = require('jsonwebtoken');
const env = require('../.env');

module.exports = (req, res, next) => {
    // CORS preflight request
    if (req.method === 'OPTIONS') {
        next();
    } else {
        // Remova a verificação do token para todos os métodos
        // const token = req.body.token || req.query.token || req.headers['authorization'];
        // if (!token) {
        //     return res.status(403).send({ errors: ['No token provided.'] });
        // }

        // Remova a verificação do token para GET e OPTIONS
        if (req.method === 'GET' || req.method === 'OPTIONS') {
            next();
        } else {
            // Continue com a verificação do token para todos os outros métodos
            const token = req.body.token || req.query.token || req.headers['authorization'];
            if (!token) {
                return res.status(403).send({ errors: ['No token provided.'] });
            }

            // Simule a decodificação do token (opcional)
            // const decoded = jwt.decode(token);

            // Remova a verificação do token
            // jwt.verify(token, env.authSecret, function (err, decoded) {
            //     if (err) {
            //         return res.status(403).send({
            //             errors: ['Failed to authenticate token.']
            //         });
            //     } else {
            //         req.decoded = decoded;
            //         next();
            //     }
            // });

            // Permita que todas as requisições passem sem verificação
            next();
        }
    }
};
