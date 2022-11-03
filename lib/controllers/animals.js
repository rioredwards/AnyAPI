const { Router } = require('express');
const Animal = require('../models/Animal.js');

module.exports = Router().get('/', async (req, res) => {
  const animals = await Animal.getAll();
  const animalsFiltered = animals.map(({ id, name }) => ({ id, name }));
  res.json(animalsFiltered);
});
