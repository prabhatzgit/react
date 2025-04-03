// every browser has local storage objects to store the data locally

// basics

let baseSalary = 30_000;
let overTime = 10;
let rate = 20;

// procedural pattern
function getWage(baseSalary, overTime, rate) {
  return baseSalary + overTime * rate;
}

// OOPs encapsulation
// the best functions those don't have parameters
let employee = {
  baseSalar: 30_000,
  overTim: 10,
  rte: 20,
  getWage: function () {
    return this.baseSalar + this.overTim * this.rte;
  },
};

employee.getWage();

// using encapsulation, we group related variables and function together and this way can reduce complexity
// and increase the reusability
