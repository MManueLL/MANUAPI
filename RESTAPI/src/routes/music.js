const { Router } = require('express');
const router = Router();

const music =  require('../sample.json');

router.get('/', (req, res) => {
    res.json(music);
});

router.post('/', (req, res) => {
    const {title, author, year, rating } = req.body;
    if (title && author && year && rating) {
        const id = music.length + 1;
        const newMusic = {...req.body, id};
        console.log(newMusic);
        music.push(newMusic);
        res.json(music);
    } else {
        res.send('Incorrect data\n Introduce title, director, year and rating')
    }
    res.send('received');
});

module.exports = router;