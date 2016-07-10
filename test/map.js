'use strict';

const chai = require('chai');
const expect = chai.expect;
const { getPath } = require('../src/helpers');

describe('Map', () => {

  it('getPath should give a proper path', (done) => {
    // TODO: mock galaxy
    const startId = 'ross-154';
    const destId = 'tau-ceti';
    const expected = {
      cost: 4,
      pathIds: ['barnards-star', 'sol', 'epsilon-eridani', 'tau-ceti']
    };

    let path = null;
    function execute() {
      path = getPath({ startId, destId });
    }

    expect(execute).to.not.throw(Error);
    expect(path).to.be.an('object');
    expect(path.status).to.eql('success');
    expect(path.cost).to.eql(expected.cost);
    expect(path.cost).to.eql(path.path.length - 1);
    expect(path.path
      .map(n => n.id)
      .filter(n => n !== startId)
    ).to.eql(expected.pathIds);
    done();
  });
});
