import Bowerman from './app/Bowerman';
import Daemon from './app/Daemon';
import Magician from './app/Magician';
import Swordsman from './app/Swordsman';
import Undead from './app/Undead';
import Zombie from './app/Zombie ';

const bowerman = new Bowerman('Bowerman', 'Bowman');
console.log(bowerman);
const daemon = new Daemon('Demon', 'Bowman');
console.log(daemon);
const magician = new Magician('Mag', 'Bowman');
console.log(magician);
const swordsman = new Swordsman('Swordsman', 'Bowman');
console.log(swordsman);
const undead = new Undead('Dead', 'Bowman');
console.log(undead);
const zombie = new Zombie('Zombie', 'Bowman');
console.log(zombie);
