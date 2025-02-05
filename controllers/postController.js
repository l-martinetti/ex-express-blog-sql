const index = (req, res) => {
    res.send('Elenco post')
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