/*global describe, it */
'use strict';
(function () {
    describe('findOffset', function() {
      beforeEach(function() {
        this.findOffset = require('findOffset');
      });
      afterEach(function() {

      });
      it('should return a sane offset', function() {
        var bodyoffset = this.findOffset(document.body);
        expect(bodyoffset.top).to.equal(0);
        expect(bodyoffset.left).to.equal(0);
      });
      it('should calculate offsets nicely', function() {
        var mochaoff = this.findOffset(document.querySelector('#testArea'));
        expect(mochaoff.top).to.equal(120);
        expect(mochaoff.left).to.equal(120);
      });


  })
})();
