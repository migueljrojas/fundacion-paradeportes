'use strict';

var ParadeportesBanner = require('../paradeportes-banner');

describe('ParadeportesBanner View', function() {

  beforeEach(function() {
    this.paradeportesBanner = new ParadeportesBanner();
  });

  it('Should run a few assertions', function() {
    expect(this.paradeportesBanner);
  });

});
