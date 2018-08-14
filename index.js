function produceDrivingRange(blockRange) {
  return function drivingRange(start_block, end_block){
    let startB = parseInt(start_block, 10);
    let endB = parseInt(end_block, 10);
    let driveRange = Math.abs(endB - startB);

    if(driveRange > blockRange) {
      let difference = driveRange - blockRange;
      return `${difference} blocks out of range`
    } else {
      let difference = blockRange - driveRange;
      return `within range by ${difference}`
    }
  }
}

function produceTipCalculator(percentage){
  return function tipCalculator(price){
    return percentage * price;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}

const Driver = createDriver();

