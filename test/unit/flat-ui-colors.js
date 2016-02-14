import flatUiColors from '../../src/flat-ui-colors';

describe('flatUiColors', () => {
  describe('get function', () => {

    it('should return a array of color(s)', () => {
      expect(flatUiColors.get.many()).to.be.an('array');
      expect(flatUiColors.get.many(5).length).to.eql(5);
      expect(flatUiColors.get.many('string')).to.be.an('array');
      expect(flatUiColors.get.many(99 + '1')).to.be.an('array');
      expect(flatUiColors.get.many(99 + '1').length).to.eql(1);
      expect(flatUiColors.get.all()).to.be.an('array');
      expect(flatUiColors.get.all().length).to.eql(2109);
      expect(flatUiColors.get.all()).to.contain(flatUiColors.get.many()[0]);
    });

  });
});
