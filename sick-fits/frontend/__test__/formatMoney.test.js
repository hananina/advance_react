import formatMoney from '../lib/formatMoney';

describe('format Money function', () => {
  it('works with fractional dollars(端数あり）', () => {
    expect(formatMoney(1)).toEqual('$0.01');
    expect(formatMoney(9)).toEqual('$0.09');
  });

  it('leaves off cents when its whole dollars（$1ピッタリの時、端数の小数点を表示しいない）', () => {
    expect(formatMoney(100)).toEqual('$1');
    expect(formatMoney(5000)).toEqual('$50');
    expect(formatMoney(50000000)).toEqual('$500,000');
  });

  it('works with whole and fractonal dollars', () => {
    expect(formatMoney(9)).toEqual('$0.09');
    expect(formatMoney(4012)).toEqual('$40.12');
  });
});
