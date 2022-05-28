import faker from 'faker';

const list = [];

for (let i = 0; i < 15; i++) {
  const match = {
    img: faker.image.animals(300, 300, true),
    desc: faker.name.findName(),
  };
  list.push(match);
}

export default list;
