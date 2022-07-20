/* eslint-disable no-unused-vars */

//solveCount = 3;

function concatString() {
  return Array.from(arguments).join('');
}

function yourFunctionRunner() {
  return [...arguments].map((func) => func()).join('');
}

function makeAdder(num) {
  return function (numAdded) {
    return num + numAdded;
  };
}

function once(func) {
  let ran = false;
  return () => {
    if (!ran) {
      ran = true;
      return func();
    } else return 'the function has already been called...';
  };
}

function createObjectWithClosures() {
  let total = 0;
  return {
    oneIncrementer() {
      total++;
    },
    tensIncrementer() {
      total += 10;
    },
    getValue() {
      return total;
    },
    setValue(num) {
      total = num;
    },
  };
}

function dontSpillTheBeans(secret) {
  return {
    getSecret() {
      return secret;
    },
    setSecret(newSecret) {
      secret = newSecret;
    }
  };
}
