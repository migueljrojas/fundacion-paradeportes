'use strict';

var Empresas = require('../empresas');

describe('Empresas View', function() {

  beforeEach(function() {
    this.empresas = new Empresas();
  });

  it('Should run a few assertions', function() {
    expect(this.empresas);
  });

});
