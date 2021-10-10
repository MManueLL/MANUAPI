const { Router } = require('express');

const router = Router();

const Music = require('../models/musicModels');

router.get('/', async (req, res) => {
  try {
    const musics = await Music.find();
    res.json(musics);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/', async (req, res) => {
  const music = new Music({
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
    rating: req.body.rating,
  });
  try {
    const savedMusic = await music.save();
    res.json(savedMusic);
  } catch (err) {
    res.json({ message: err });
  }

  /* const {
    title, author, year, rating,
  } = req.body;
  if (title && author && year && rating) {
    const id = music.length + 1;
    const newMusic = {
      id, ...req.body,
    };
    music.push(newMusic);
    res.json(music);
  } else {
    res.send('Incorrect data\n Introduce title, director, year and rating');
  }
  res.send('received');
  */
});

module.exports = router;
