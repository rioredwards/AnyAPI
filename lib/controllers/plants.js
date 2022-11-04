const { Router } = require('express');
const Plant = require('../models/Plant.js');

module.exports = Router().get('/', async (req, res) => {
  const plants = await Plant.getAll();
  const plantsFiltered = plants.map(({ id, commonName }) => ({
    id,
    commonName,
  }));
  res.json(plantsFiltered);
});
