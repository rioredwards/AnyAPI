const pool = require('../utils/pool');
module.exports = class Plant {
  constructor(row) {
    this.id = row.id;
    this.scientificName = row['scientific-name'];
    this.commonName = row['common-name'];
    this.type = row.type;
    this.url = row.url;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from Plants');
    return rows.map((PlantRow) => new Plant(PlantRow));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * from plants WHERE id = $1', [
      id,
    ]);
    return new Plant(rows[0]);
  }
};
