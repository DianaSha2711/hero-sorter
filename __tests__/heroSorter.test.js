import sortHeroesByHealth from '../src/heroSorter.js';

describe('sortHeroesByHealth', () => {
  test('сортирует героев по убыванию здоровья', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sorted = sortHeroesByHealth(heroes);

    expect(sorted).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });

  test('возвращает пустой массив для пустого входа', () => {
    expect(sortHeroesByHealth([])).toEqual([]);
  });

  test('возвращает новый массив, а не мутирует исходный', () => {
    const originalHeroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ];

    const sorted = sortHeroesByHealth(originalHeroes);
    expect(sorted).not.toBe(originalHeroes);
    expect(originalHeroes).toEqual([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ]);
  });

  test('выбрасывает ошибку если передан не массив', () => {
    expect(() => sortHeroesByHealth(null)).toThrow('Параметр должен быть массивом');
    expect(() => sortHeroesByHealth({})).toThrow('Параметр должен быть массивом');
    expect(() => sortHeroesByHealth('string')).toThrow('Параметр должен быть массивом');
    expect(() => sortHeroesByHealth(123)).toThrow('Параметр должен быть массивом');
  });

  test('выбрасывает ошибку если элемент массива не объект', () => {
    expect(() => sortHeroesByHealth([null])).toThrow('Элемент с индексом 0 должен быть объектом');
    expect(() => sortHeroesByHealth([undefined])).toThrow('Элемент с индексом 0 должен быть объектом');
    expect(() => sortHeroesByHealth([123])).toThrow('Элемент с индексом 0 должен быть объектом');
    expect(() => sortHeroesByHealth(['string'])).toThrow('Элемент с индексом 0 должен быть объектом');
  });

  test('выбрасывает ошибку если health не число', () => {
    expect(() => sortHeroesByHealth([{ health: 'string' }])).toThrow('У героя с индексом 0 здоровье должно быть числом');
    expect(() => sortHeroesByHealth([{ health: null }])).toThrow('У героя с индексом 0 здоровье должно быть числом');
    expect(() => sortHeroesByHealth([{ health: undefined }])).toThrow('У героя с индексом 0 здоровье должно быть числом');
  });

  test('выбрасывает ошибку если health = NaN', () => {
    expect(() => sortHeroesByHealth([{ health: NaN }])).toThrow('У героя с индексом 0 здоровье не может быть NaN');
  });

  test('выбрасывает ошибку если health = Infinity', () => {
    expect(() => sortHeroesByHealth([{ health: Infinity }])).toThrow('У героя с индексом 0 здоровье должно быть конечным числом');
    expect(() => sortHeroesByHealth([{ health: -Infinity }])).toThrow('У героя с индексом 0 здоровье должно быть конечным числом');
  });

  test('демонстрация разницы toBe и toEqual', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ];

    const sorted = sortHeroesByHealth(heroes);
    
    
    expect(sorted).not.toBe(heroes);
    
    
    expect(sorted).toEqual([
      { name: 'маг', health: 100 },
      { name: 'мечник', health: 10 },
    ]);
  });
});