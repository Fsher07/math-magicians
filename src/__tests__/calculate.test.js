import calculate from '../logic/calculate';

describe('calculate', () => {
  test('should handle AC', () => {
    expect(calculate({}, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});
