/* eslint-env node, mocha */
var chai = require('chai');

var escapeRegex = require('..');

var expect = chai.expect;

describe('escapeRegex', () => {
  it('Should leave strings with no escapable characters unchanged', () => {
    expect(escapeRegex('abc 123 !@#%_=')).to.equal('abc 123 !@#%_=');
  });

  it('Should escape strings with only escapable characters', () => {
    expect(escapeRegex('-[]/{}()*+?.\^$|')).to.equal('\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\^\\$\\|');
  });

  it('Should escape strings with a mix of escapable and non-escapable characters', () => {
    expect(escapeRegex('789 -[]/{}()*+?.\^$| xyz')).to.equal('789 \\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\^\\$\\| xyz');
  });
});
