-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS plants;

CREATE TABLE plants (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  "scientific-name" VARCHAR NOT NULL,
  "common-name" VARCHAR NOT NULL,
  type VARCHAR NOT NULL,
  url VARCHAR NOT NULL
);

INSERT INTO plants ("scientific-name", "common-name", type, url)
VALUES 
('Monstera Adansonii', 'Swiss cheese plant', 'Tropical perennial', 'https://www.thespruce.com/grow-monstera-adansonii-swiss-cheese-plant-1902774'),
('Philodendron hederaceum Rio', 'Philodendron Rio', 'Perennial, vine', 'https://www.thespruce.com/philodendron-rio-growing-guide-5235405'),
('Pilea peperomioides', 'Chinese money plant', 'Evergreen perennial ', 'https://www.thespruce.com/growing-pilea-peperomioides-5090425'),
('Epipremnum aureum Neon', 'Neon pothos', 'Perennial, vine', 'https://www.thespruce.com/neon-pothos-plant-profile-5206135'),
('Alocasia maharani', 'Alocasia grey dragon', 'Perennial, corm', 'https://www.thespruce.com/alocasia-maharani-care-guide-5443058');

DROP TABLE IF EXISTS animals;

CREATE TABLE animals (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  family VARCHAR NOT NULL,
  "fun-fact" VARCHAR NOT NULL,
  url VARCHAR NOT NULL
);

INSERT INTO animals (name, family, "fun-fact", url)
VALUES 
('Sugar Glider', 'Petauridae', 'When moving between trees, this animal uses its gliding membrane, found between its wrists and ankles. When flying, the animal is able to control and change the size and shape of the membrane by changing the position of its limbs. Meanwhile, the tail helps them manage the flight, acting as a rudder.', 'https://animalia.bio/sugar-glider?collection=37'),
('Bearded Dragon', 'Agamidae', 'These lizards got their name due to their ability of making their throat look like a beard by inflating and puffing it out as well as the ability of their throat to turn to black when threatened.', 'https://animalia.bio/central-bearded-dragon'),
('Caspian Seal', 'Phocidae', 'Seals can hold their breath for 2 hours, the longest in the animal world.', 'https://animalia.bio/caspian-seal'),
('Llama', 'Camelidae', 'Llamas make a range of sounds, the most common one being a humming noise. Females hum to their crias (offspring). Males orgle during breeding, which is a sound like a gurgle. If two males decide to fight, they will begin screaming at each other.', 'https://animalia.bio/llama'),
('Eurasian lynx', 'Felidae', 'During winter, the large paws of Eurasian lynxes grow long, thick, shaggy hair that gives a snowshoe effect for moving through deep snow.', 'https://animalia.bio/eurasian-lynx');
