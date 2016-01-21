describe('pingpong', function() {
  it("is true if any number leading up to the users input is divisible by 3", function() {
    should(pingpong(15)).should.equal(pingpong);
  });
});
