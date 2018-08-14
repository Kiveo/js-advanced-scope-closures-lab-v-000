function produceDrivingRange(blockRange) {
  return function drivingRange(drive_range){
    return blockRange >= drive_range;
  }
}
