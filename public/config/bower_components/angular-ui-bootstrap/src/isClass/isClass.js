angular.module("ui.bootstrap.isClass",[]).directive("uibIsClass",["$animate",function(t){var a=/^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/,e=/^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;return{restrict:"A",compile:function(s,c){function n(t,a,e){r.push(t),l.push({scope:t,element:a}),f.forEach(function(a,e){i(a,t)}),t.$on("$destroy",o)}function i(a,s){var c=a.match(e),n=s.$eval(c[1]),i=c[2],o=u[a];if(!o){var r=function(a){var e=null;l.some(function(t){var s=t.scope.$eval(p);return s===a?(e=t,!0):void 0}),o.lastActivated!==e&&(o.lastActivated&&t.removeClass(o.lastActivated.element,n),e&&t.addClass(e.element,n),o.lastActivated=e)};u[a]=o={lastActivated:null,scope:s,watchFn:r,compareWithExp:i,watcher:s.$watch(i,r)}}o.watchFn(s.$eval(i))}function o(t){var a=t.targetScope,e=r.indexOf(a);if(r.splice(e,1),l.splice(e,1),r.length){var s=r[0];angular.forEach(u,function(t){t.scope===a&&(t.watcher=s.$watch(t.compareWithExp,t.watchFn),t.scope=s)})}else u={}}var r=[],l=[],u={},v=c.uibIsClass.match(a),p=v[2],h=v[1],f=h.split(",");return n}}}]);