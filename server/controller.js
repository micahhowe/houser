module.exports = {
    getHouses: async (req, res) => {
        const db = req.app.get('db')
        const get_houses = await db.get_houses()
        res.status(200).send(get_houses)
    }
}