export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    if (this.name.length < 2 || this.name.length > 10) {
      throw new Error('Некорректная длина имени');
    }

    const typeArray = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!this.type.includes(typeArray)) {
      throw new Error('Некорректный тип персонажа');
    }
  }
}
