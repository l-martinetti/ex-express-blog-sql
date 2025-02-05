const connection = require('../data/db');

const index = (req, res) => {
    const sql = 'SELECT * FROM posts';

    connection.query(sql, (err, results) => {
        if (err) res.status(500).json({ error: 'Query al database fallita' })

        res.json(results)
    })
};

const show = (req, res) => {
    const id = req.params.id;
    res.send(`Mostro il post con id ${id}`)
};

const store = (req, res) => {
    res.send('Aggiungo un nuovo post')
};

const update = (req, res) => {
    const id = req.params.id;
    res.send(`Aggiorno post con id ${id}`)
};

const modify = (req, res) => {
    const id = req.params.id;
    res.send(`Modifico post con id ${id}`)
};

const destroy = (req, res) => {
    const id = req.params.id;
    res.send(`Elimino post con id ${id}`)
};

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}