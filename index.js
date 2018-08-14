function produceDrivingRange(blockRange) {
  return function drivingRange(driveRange){
    // let bR = parseInt(blockRange, 10);
    let bR = blockRange;
    let dR = parseInt(driveRange, 10);
    if(dR > bR) {
      let difference = dR - bR;
      return `within range by ${difference}`
    } else {
      let difference = bR - dR;
      return `${difference} blocks out of range`
    }
  }
}
