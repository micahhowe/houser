module.exports = {
    getHouses: async (req, res) => {
        const db = req.app.get('db')
        const get_houses = await db.get_houses()
        res.status(200).send(get_houses)
    },
    addHouse: (req, res, next) => {
        const db = req.app.get('db')
        const { name, address, city, state, zipcode } = req.body
        //const create_house = db.create_house()
        db.create_house([name, address, city, state, zipcode]).then(result => {
            res.status(200).send(result)
        })
    },
}