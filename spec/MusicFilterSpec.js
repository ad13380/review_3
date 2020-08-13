describe("MusicFilter", function() {
  var musicFilter;

  beforeEach(function() {
    musicFilter = new MusicFilter()
  })

  it("applies default minimum value filter for a single integer", function() {
    expect(musicFilter.apply([39])).toEqual([40])
    expect(musicFilter.apply([42])).toEqual([42])
  })


  xit("throw an error for non number values", function() {
    expect(function() { musicFilter.apply(['40']) }).toThrow("Input is invalid");
  })
})