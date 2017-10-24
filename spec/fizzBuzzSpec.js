describe("3 is Fizz", function()  {
  it("returns Fizz when given a multiple of 3", function() {
    expect(Fizzbuzz(3)).toEqual("Fizz");
  });
});

describe("5 is Buzz", function()  {
  it("returns Buzz when given a multiple of 5", function() {
    expect(Fizzbuzz(5)).toEqual("Buzz");
  });
});

describe("15 is FizzBuzz", function()  {
  it("returns Buzz when given a multiple of 15", function() {
    expect(Fizzbuzz(15)).toEqual("FizzBuzz");
  });
});

describe("4 is 4", function()  {
  it("returns integer when given an integer that is not a multiple of 3, 5 or 15", function() {
    expect(Fizzbuzz(4)).toEqual(4);
  });
});
