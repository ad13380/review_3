class MusicFilter {
  constructor() {
    this.minValue = 40;
    this.maxValue = 1000;
  }


  apply(trackArray) {
    return trackArray.map(number => {
      if (number < this.minValue) {
        return this.minValue;
      } else if (number > this.maxValue) {
        return this.maxValue
      }
      return number
    })


    // throw 'Input is invalid';
  }
}