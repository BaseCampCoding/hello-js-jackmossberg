
describe('Freelancer Pricing Utility Variables', function() {
  it('should calculate the correct day rate', function() {
    expect(dayRate).toBe(480);
  });

  it('should calculate the correct number of workdays for a budget', function() {
    expect(workdays).toBe(2); 
  });

  it('should calculate the correct number of full months for a project', function() {
    expect(fullMonths).toBe(1); 
    expect(remainingDays).toBe(13); 
  });

  it('should calculate the correct discounted monthly rate', function() {
    expect(discountedMonthlyRate).toBeCloseTo(8448, 2);
  });

  it('should calculate the correct total project cost with discount, rounded up', function() {
    expect(totalProjectCost).toBe(14688);
  });
});