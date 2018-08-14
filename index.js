function produceDrivingRange(blockRange) {
  return function drivingRange(driveRange){
    let bR = parseInt(blockRange, 10);
    let dR = parseInt(driveRange, 10);
    if(driveRange > blockRange) {
      let difference = bR - dR;
      return `${difference} blocks out of range`
    } else {
      let difference = dR - bR;
      return `within range by ${difference}`
    }
  }
}
