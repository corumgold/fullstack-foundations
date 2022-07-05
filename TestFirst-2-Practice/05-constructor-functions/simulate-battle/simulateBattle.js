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
