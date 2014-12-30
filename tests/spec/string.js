/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


describe('string-utils', function () {
  'use strict';
  var assert = chai.assert;

  describe('format', function () {
    it('replaces %s with text', function() {
      var output = StringUtils.format('put %s on the %s', 'this', 'end');
      assert.equal(output, 'put this on the end');
    });

    it('replaces %(var)s with item from object', function() {
      var output = StringUtils.format('put %(first)s on the %(last)s', {
        first: 'this',
        last: 'end'
      });
      assert.equal(output, 'put this on the end');
    });
  });

  describe('padLeft', function () {
    it('pads to the left until min-length is achieved', function () {
      var output = StringUtils.padLeft('7', 2, '0');
      assert.equal(output, '07');
    })

    it('does nothing if the min-length is already achieved', function () {
      var output = StringUtils.padLeft('007', 2, '0');
      assert.equal(output, '007');
    });
  });

  describe('padRight', function () {
    it('pads to the left until min-length is achieved', function () {
      var output = StringUtils.padRight('7', 2, '0');
      assert.equal(output, '70');
    })

    it('does nothing if the min-length is already achieved', function () {
      var output = StringUtils.padRight('700', 2, '0');
      assert.equal(output, '700');
    });
  });
});


