function produceDrivingRange(driveRange) {
  return function drivingRange(blockRange){
    let bR = parseInt(blockRange, 10);
    // let bR = blockRange;
    // let dR = parseInt(driveRange, 10);
    let dR = driveRange;
    if(bR > dR) {
      let difference = dR - bR;
      return `${difference} blocks out of range`
    } else {
      let difference = bR - dR;
      return `within range by ${difference}`
    }
  }
}
