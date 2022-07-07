/* eslint-disable no-unused-vars */

//solveCount = 2;

function concatString() {
  let strings = Array.from(arguments);
  return strings.join('');
}

function yourFunctionRunner() {
  let funcs = Array.from(arguments);
  return funcs.map((func) => func()).join('');
}

function makeAdder(num) {
  return (addNum) => num + addNum;
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
  let obj = {
    oneIncrementer() {
      total += 1;
    },
    tensIncrementer() {
      total += 10;
    },
    setValue(num) {
      total = num;
    },
    getValue() {
      return total;
    },
  };
  return obj;
}

function dontSpillTheBeans(message) {
  let secret = message;
  return {
    getSecret() {
      return secret;
    },
    setSecret(newSecret) {
      secret = newSecret;
    },
  };
}
