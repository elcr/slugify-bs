// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Slugify = require("slugify");
var Js_null_undefined = require("bs-platform/lib/js/js_null_undefined.js");

function slugify(replacement, remove, lower, str) {
  return Slugify(str, {
              replacement: Js_null_undefined.fromOption(replacement),
              remove: Js_null_undefined.fromOption(remove),
              lower: Js_null_undefined.fromOption(lower)
            });
}

exports.slugify = slugify;
/* slugify Not a pure module */