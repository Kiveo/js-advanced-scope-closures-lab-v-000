function produceDrivingRange(blockRange) {
  return function drivingRange(driveRange){
    if(driveRange > blockRange) {
      let difference = driveRange - blockRange;
      return '${difference} blocks out of range'
    } else {
      let difference = blockRange - driveRange;
      return 'within range by ${difference}'
    }
  }
}
