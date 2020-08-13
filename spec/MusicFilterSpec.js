describe("MusicFilter", function() {
  var musicFilter;

  beforeEach(function() {
    musicFilter = new MusicFilter()
  })

  it("applies default minimum value filter for a single integer", function() {
    expect(musicFilter.apply([39])).toEqual([40])
    expect(musicFilter.apply([42])).toEqual([42])
    expect(musicFilter.apply([40])).toEqual([40])
  })

  it("applies default maximum value filter for a single integer", function() {
    expect(musicFilter.apply([1001])).toEqual([1000])
    expect(musicFilter.apply([1000])).toEqual([1000])
    expect(musicFilter.apply([999])).toEqual([999])
  })

  it("applies default minimum value filter for an array of integers", function() {
    expect(musicFilter.apply([39, 20, 1])).toEqual([40, 40, 40])
    expect(musicFilter.apply([39, 40, 41, 1])).toEqual([40, 40, 41, 40])
  })

  it("applies default maximum value filter for an array of integers", function() {
    expect(musicFilter.apply([1001, 1100, 1009])).toEqual([1000, 1000, 1000])
    expect(musicFilter.apply([1001, 999, 1000, 800])).toEqual([1000, 999, 1000, 800])
  })

  it("applies default value filter for an array of integers", function() {
    expect(musicFilter.apply([1001, 999, 40, 39])).toEqual([1000, 999, 40, 40])
  })

  it("applies given minimum filter value for an array of integers", function() {
    musicFilter = new MusicFilter(30)
    expect(musicFilter.apply([29])).toEqual([30])
    expect(musicFilter.apply([39, 30, 29])).toEqual([39, 30, 30])
  })


  xit("throw an error for non number values", function() {
    expect(function() { musicFilter.apply(['40']) }).toThrow("Input is invalid");
  })
})