function sortHeroesByHealth(heroes) {
  if (!Array.isArray(heroes)) {
    throw new Error('Параметр должен быть массивом');
  }

  if (heroes.length === 0) {
    return [];
  }

  heroes.forEach((hero, index) => {
    if (!hero || typeof hero !== 'object' || Array.isArray(hero)) {
      throw new Error(`Элемент с индексом ${index} должен быть объектом`);
    }

    if (typeof hero.health !== 'number') {
      throw new Error(`У героя с индексом ${index} здоровье должно быть числом`);
    }

    if (Number.isNaN(hero.health)) {
      throw new Error(`У героя с индексом ${index} здоровье не может быть NaN`);
    }

    if (!Number.isFinite(hero.health)) {
      throw new Error(`У героя с индексом ${index} здоровье должно быть конечным числом`);
    }
  });

  const heroesCopy = [...heroes];
  return heroesCopy.sort((a, b) => b.health - a.health);
}

export default sortHeroesByHealth;