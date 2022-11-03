const { Router } = require('express');
const Animal = require('../models/Animal.js');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const animal = await Animal.getById(req.params.id);
    console.table(animal);
    res.json(animal);
  })
  .get('/', async (req, res) => {
    const animals = await Animal.getAll();
    const animalsFiltered = animals.map(({ id, name }) => ({ id, name }));
    res.json(animalsFiltered);
  });
