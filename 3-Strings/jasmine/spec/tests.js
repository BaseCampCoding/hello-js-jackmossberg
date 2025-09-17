
describe('Poetry Club Password Variables', function() {

  it('should assign frontDoorLetter to the first letter of line', function() {
    expect(frontDoorLetter).toBe('S');
  });

  it('should capitalize frontDoorPassword correctly from frontDoorWord', function() {
    expect(frontDoorPassword).toBe('Shire');
  });

  it('should assign backDoorLetter to the last non-whitespace letter of lineWithWhitespace', function() {
    expect(backDoorLetter).toBe('s');
  });

  it('should capitalize backDoorPassword and add ", please"', function() {
    expect(backDoorPassword).toBe('Horse, please');
  });
});