const pool = require('../utils/pool');
module.exports = class Animal {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.family = row.family;
    this.funFact = row.funFact;
    this.url = row.url;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from animals');
    console.log(rows);
    return rows.map((animalRow) => new Animal(animalRow));
  }
};
