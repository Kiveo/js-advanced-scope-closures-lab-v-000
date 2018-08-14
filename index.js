function produceDrivingRange(blockrange) {
  return function drivingRange(drive_range){
    return blockrange >= drive_range;
  }
}
