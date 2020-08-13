describe("MusicFilter", function() {
  var musicFilter;

  beforeEach(function() {
    musicFilter = new MusicFilter()
  })

  it("throw an error for non number values", function() {
    expect(function() {
      musicFilter.apply(['40'])
    }).toThrow("Input is invalid");
  })


})