const posts = require('../data/posts');

function validator ( req, res, next ){

    if( typeof req.body.title !== 'string' || typeof req.body.content !== 'string'){
        res.status(500);
        res.json({
            message: 'Formato non valido',
            status: 500,
            error: 'Internal server error'
        })
    }

    if(!Array.isArray(req.body.tags)){
        res.status(500);
        res.json({
            message: 'Formato non valido',
            status: 500,
            error: 'Internal server error'
        })
    }

    next();
}

module.exports = validator;
