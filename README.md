# Hero Sorter

![Tests](https://github.com/DianaSha2711/hero-sorter/actions/workflows/tests.yml/badge.svg)

Функция для сортировки героев по уровню здоровья в порядке убывания.

## Описание

Функция принимает массив объектов героев и возвращает новый массив, отсортированный по убыванию здоровья (от большего к меньшему).

## Использование

```javascript
import sortHeroesByHealth from './src/heroSorter.js';

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const sortedHeroes = sortHeroesByHealth(heroes);