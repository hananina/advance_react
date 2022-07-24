function add(a, b) {
  const numA = parseInt(a);
  const numB = parseInt(b);
  return numA + numB;
}

describe('some test 101', () => {
  // what ithis test is doing?
  it('workes as expecteed', () => {
    // we run our expect statements to see if the teest will pass
    expect(1 + 1).toEqual(2);
    const age = 100;
    expect(age).toEqual(100);
  });

  it('runs the add propely', () => {
    expect(add(1, 2)).toBeGreaterThanOrEqual(3);
    expect(add('1', '2')).toBeGreaterThanOrEqual(3);
  });
});
