function produceDrivingRange(blockRange) {
  return function drivingRange(driveRange){
    // let bR = parseInt(blockRange, 10);
    let bR = blockRange;
    let dR = parseInt(driveRange, 10);
    if(dR > bR) {
      let difference = dR - bR;
      return `${difference} blocks out of range`
    } else {
      let difference = bR - dR;
      return `${difference} blocks out of range`
    }
  }
}
