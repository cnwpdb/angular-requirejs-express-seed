!function(o){"use strict";o.module("oc.lazyLoad").config(["$provide",function(o){o.decorator("$ocLazyLoad",["$delegate","$q",function(o,e){return o.jsLoader=function(o,e,n){require(o,e.bind(null,void 0),e,n)},o.jsLoader.requirejs=!0,o}])}])}(angular);