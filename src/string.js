/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @class string-utils
 * @author Shane Tomlinson shane@shanetomlinson.com
 * @version 0.0.0
 */

// jscs: disable
// jshint ignore:start
;(function (define){define(function (require,exports,module){
// jshint ignore:end
// jscs: enable


  'use strict';


  function fill(input, width, fillWith, filler) {
    var output = '' + input;
    fillWith = ('' + fillWith) || ' ';

    while (output.length < width) {
      output = filler(output, fillWith);
    }

    return output;
  }


  module.exports = {
    /**
     * format the string.
     *
     * @method format
     */
    format: function (input) {
      var args = [].slice.call(arguments, 1);

      var output = input.replace(/%s/g, function () {
        return args.shift();
      });

      output = output.replace(/\%\(([a-zA-Z]+)\)s/g, function (match, name) {
        return name in args[0] ? args[0][name] : match;
      });

      return output;
    },

    /**
     * fill the left hand side of the string with a character until its length
     * is length.
     *
     * @method fillLeft
     */
    fillLeft: function (input, width, fillWith) {
      return fill(input, width, fillWith, function (output, fillWith) {
        return fillWith + output;
      });
    },

    /**
     * fill the left hand side of the string with a character until its length
     * is length.
     *
     * @method fillLeft
     */
    fillRight: function (input, width, fillWith) {
      return fill(input, width, fillWith, function (output, fillWith) {
        return output + fillWith;
      });
    }
  };

// jscs: disable
// jshint ignore:start
});})(typeof define=='function'&&define.amd?define
:(function (n,w){'use strict';return typeof module=='object'?function (c){
c(require,exports,module);}:function (c){var m={exports:{}};c(function (n){
return w[n];},m.exports,m);w[n]=m.exports;};})('StringUtils',this));
// jshint ignore:end
// jscs: enable

