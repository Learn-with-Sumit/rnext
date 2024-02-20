import { faker } from '@faker-js/faker';

const THRESHOLD = 10000;

export const animals = Array.from(Array(THRESHOLD), () => {
  return {
    id: faker.random.alphaNumeric(5),
    name: faker.animal.bear(),
    avatar: faker.image.animals()
  };
});