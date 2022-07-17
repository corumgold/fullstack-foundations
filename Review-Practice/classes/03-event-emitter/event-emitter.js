/* eslint-disable no-unused-vars */

//solveCount = 2;

class MyEventEmitter {
  constructor() {
    this.events = {};
  }

  addListener(event, cbkFunc) {
    if (this.events[event]) this.events[event].push(cbkFunc);
    else this.events[event] = [cbkFunc];
  }

  emit(event, ...args) {
    this.events[event].forEach((func) => func(...args));
  }
}
