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


  function pad(input, width, padWith, pader) {
    var output = '' + input;
    padWith = ('' + padWith) || ' ';

    while (output.length < width) {
      output = pader(output, padWith);
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
     * pad the left hand side of the string with a character until its length
     * is length.
     *
     * @method padLeft
     */
    padLeft: function (input, width, padWith) {
      return pad(input, width, padWith, function (output, padWith) {
        return padWith + output;
      });
    },

    /**
     * pad the left hand side of the string with a character until its length
     * is length.
     *
     * @method padLeft
     */
    padRight: function (input, width, padWith) {
      return pad(input, width, padWith, function (output, padWith) {
        return output + padWith;
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

