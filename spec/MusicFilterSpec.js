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


  xit("throw an error for non number values", function() {
    expect(function() { musicFilter.apply(['40']) }).toThrow("Input is invalid");
  })
})