const pool = require('../utils/pool');
module.exports = class Animal {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.family = row.family;
    this.funFact = row['fun-fact'];
    this.url = row.url;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from animals');
    return rows.map((animalRow) => new Animal(animalRow));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * from animals WHERE id = $1', [
      id,
    ]);
    return new Animal(rows[0]);
  }
};
