/* eslint-disable no-unused-vars, no-throw-literal*/
//solveCount = 3;

class Pokemon {
  constructor(name, health, attackBonus) {
    this.name = name;
    this.health = health;
    this.attackBonus = attackBonus;
  }

  biteAttack() {
    return this.attackBonus + 2;
  }

  isDefeated() {
    return this.health <= 0;
  }
}

function simulateBattle(poke1, poke2, upFirst) {
  const poke1Health = poke1.health;
  const poke2Health = poke2.health;
  let first = poke1;
  let second = poke2;
  if (poke2.name === upFirst) {
    first = poke2;
    second = poke1;
  }

  let winMessage;

  function attackFunc(attacker, defender) {
    defender.health -= attacker.biteAttack();
    if (defender.health <= 0) {
      winMessage = `${attacker.name} Wins!`;
    }
  }

  while (first.health > 0 && second.health > 0) {
    attackFunc(first, second);
    attackFunc(second, first);
  }
  poke1.health = poke1Health;
  poke2.health = poke2Health;
  return winMessage;
}
