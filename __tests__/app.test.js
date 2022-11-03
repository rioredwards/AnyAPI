const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { animals } = require('../lib/animals-data.js');
// const plants = require('../lib/plants-data.js');

describe('animals routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/animals should return a list of animals', async () => {
    const res = await request(app).get('/animals');
    const expected = animals.map((animal) => {
      return { id: animal.id, name: animal.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/animals/:id should return animal detail', async () => {
    const res = await request(app).get('/animals/1');
    const sugarGlider = {
      id: '1',
      name: 'Sugar Glider',
      family: 'Petauridae',
      funFact:
        'When moving between trees, this animal uses its gliding membrane, found between its wrists and ankles. When flying, the animal is able to control and change the size and shape of the membrane by changing the position of its limbs. Meanwhile, the tail helps them manage the flight, acting as a rudder.',
      url: 'https://animalia.bio/sugar-glider?collection=37',
    };
    expect(res.body).toEqual(sugarGlider);
  });

  afterAll(() => {
    pool.end();
  });
});

// describe('cats routes', () => {
//   beforeEach(() => {
//     return setup(pool);
//   });

//   it('/cats should return a list of cats', async () => {
//     const res = await request(app).get('/cats');
//     const expected = cats.map((cat) => {
//       return { id: cat.id, name: cat.name };
//     });
//     expect(res.body).toEqual(expected);
//   });

//   it('/cats/:id should return cat detail', async () => {
//     const res = await request(app).get('/cats/1');
//     const felix = {
//       id: '1',
//       name: 'Felix',
//       type: 'Tuxedo',
//       url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Felix_the_cat.svg/200px-Felix_the_cat.svg.png',
//       year: 1892,
//       lives: 3,
//       isSidekick: false,
//     };
//     expect(res.body).toEqual(felix);
//   });

//   afterAll(() => {
//     pool.end();
//   });
// });
