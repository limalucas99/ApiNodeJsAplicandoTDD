it('Devo conhecer as principais assertivas do JEST', () => {
  const number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(11);
});

it('Devo saber trabalhar com objetos', () => {
  const obj = { name: 'John', mail: 'John@example.com' };
  expect(obj).toHaveProperty('name');
  expect(obj).toHaveProperty('name', 'John'); // Verificar se possui a property e se ela tem o valor John
  expect(obj.name).toBe('John');

  const obj2 = { name: 'John', mail: 'John@example.com' };
  expect(obj).toEqual(obj2);
});
