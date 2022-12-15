import Bowerman from '../app/Bowerman';

test('Check min length name in class Character', () => {
  const hero = new Bowerman('Nana', 'Bowman');
  expect(hero).not.toThrow();
});
