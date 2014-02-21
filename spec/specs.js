describe('scrabbleScore', function() {
  it('returns 0 if a blank word is given', function() {
    scrabbleScore('').should.equal(0);
  });

  it('returns the sum of the "Scrabble score" for each letter in the word given', function() {
    scrabbleScore('zephyr').should.equal(10 + 1 + 3 + 4 + 4 + 1);
  });
});
