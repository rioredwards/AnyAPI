const { Router } = require('express');
const Plant = require('../models/Plant.js');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const plant = await Plant.getById(req.params.id);
    res.json(plant);
  })
  .get('/', async (req, res) => {
    const plants = await Plant.getAll();
    const plantsFiltered = plants.map(({ id, commonName }) => ({
      id,
      commonName,
    }));
    res.json(plantsFiltered);
  });
