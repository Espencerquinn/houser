module.exports = {
    addProperty: (req, res) => {
        const db = req.app.get('db');
        const {name, address, city, state, zip} = req.body;
        db.create_property([name, address, city, state, zip])
        .then(() => {res.sendStatus(200).send('all good')})
        .catch((err) => res.status(500).send('error adding property'))
    },
    getProperties: (req, res) => {
        const db = req.app.get('db');
        db.get_properties()
        .then((properties) => {res.status(200).send(properties)})
        .catch((err) => {
            res.status(500).send('Get All Properties Error');
            console.log(err);
        })
    },
    deleteProperty: (req, res) => {
        const db = req.app.get('db');
        db.delete_property([req.params.id])
        .then(() => {res.sendStatus(200)})
        .catch((err) => {res.status(500).send('delete error')})
    },
  
}