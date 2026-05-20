import { describe, it, expect } from 'vitest';

function calcDiversification(allocation: Record<string, number>) {
  const values = Object.values(allocation).map((v) => v / 100);
  const hhi = values.reduce((s, v) => s + v * v, 0);
  return Math.round((1 - hhi) * 100 * 100) / 100;
}

describe('Wealth diversification score', () => {
  it('scores higher for balanced allocation', () => {
    const balanced = calcDiversification({ equity: 33, mutualFunds: 33, realEstate: 34 });
    const concentrated = calcDiversification({ equity: 90, mutualFunds: 5, realEstate: 5 });
    expect(balanced).toBeGreaterThan(concentrated);
  });
});
