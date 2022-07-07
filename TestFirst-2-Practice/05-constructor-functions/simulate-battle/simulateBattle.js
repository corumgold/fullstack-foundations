/* eslint-disable no-unused-vars, no-throw-literal*/
//solveCount = 1;

function Pokemon(name, health, attackBonus) {
  this.name = name;
  this.health = health;
  this.attackBonus = attackBonus;
}

Pokemon.prototype.isDefeated = function () {
  if (this.health > 0) return false;
  return true;
};

Pokemon.prototype.biteAttack = function () {
  return this.attackBonus + 2;
};

//-------------------------------------------------

function simulateBattle(poke1, poke2, first) {
  let firstAttack = poke1;
  let secondAttack = poke2;

  if (poke2.name === first) {
    firstAttack = poke2;
    secondAttack = poke1;
  }

  function winMessage(winner) {
    winMessage.battleOver = true;
    return `${winner} Wins!`;
  }

  while (!winMessage.battleOver) {
    secondAttack.health -= firstAttack.biteAttack();
    if (secondAttack.health <= 0) return winMessage(firstAttack.name);
    firstAttack.health -= secondAttack.biteAttack();
    if (firstAttack.health <= 0) return winMessage(secondAttack.name);
  }
}