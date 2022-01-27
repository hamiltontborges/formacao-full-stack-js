function teste(req, res) {
    if (req.method !== 'POST') res.status(404)
}

export default teste