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
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.StringUtils = factory();
  }
}(this, function () {
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


  return {
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
}));
// jshint ignore:end
// jscs: enable

