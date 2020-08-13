class MusicFilter {
  constructor() {
    this.minValue = 40;
    this.maxValue = 1000;
  }


  apply(trackArray) {
    if (trackArray[0] < this.minValue) {
      return [this.minValue]
    } else if (trackArray[0] > this.maxValue) {
      return [this.maxValue]
    }
    return trackArray
    // throw 'Input is invalid';
  }
}