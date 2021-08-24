import { getTimes2 } from './functions';

test('getTimes2 multiplies its paramater by 2', () => {
    const result = getTimes2(4);
    expect(result).toBe(8);
});