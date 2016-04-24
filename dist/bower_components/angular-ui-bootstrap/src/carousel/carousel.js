angular.module("ui.bootstrap.carousel",[]).controller("UibCarouselController",["$scope","$element","$interval","$timeout","$animate",function(e,n,t,i,r){function l(){for(;C.length;)C.shift()}function a(e){for(var n=0;n<h.length;n++)h[n].slide.active=n===e}function o(t,i,u){if(!b){if(angular.extend(t,{direction:u}),angular.extend(h[m].slide||{},{direction:u}),r.enabled(n)&&!e.$currentTransition&&h[i].element&&x.slides.length>1){h[i].element.data(p,t.direction);var s=x.getCurrentIndex();angular.isNumber(s)&&h[s].element&&h[s].element.data(p,t.direction),e.$currentTransition=!0,r.on("addClass",h[i].element,function(n,t){if("close"===t&&(e.$currentTransition=null,r.off("addClass",n),C.length)){var i=C.pop().slide,a=i.index,u=a>x.getCurrentIndex()?"next":"prev";l(),o(i,a,u)}})}e.active=t.index,m=t.index,a(i),d()}}function u(e){for(var n=0;n<h.length;n++)if(h[n].slide===e)return n}function s(){v&&(t.cancel(v),v=null)}function c(n){n.length||(e.$currentTransition=null,l())}function d(){s();var n=+e.interval;!isNaN(n)&&n>0&&(v=t(f,n))}function f(){var n=+e.interval;g&&!isNaN(n)&&n>0&&h.length?e.next():e.pause()}var v,g,x=this,h=x.slides=e.slides=[],p="uib-slideDirection",m=e.active,C=[],b=!1;x.addSlide=function(n,t){h.push({slide:n,element:t}),h.sort(function(e,n){return+e.slide.index-+n.slide.index}),(n.index===e.active||1===h.length&&!angular.isNumber(e.active))&&(e.$currentTransition&&(e.$currentTransition=null),m=n.index,e.active=n.index,a(m),x.select(h[u(n)]),1===h.length&&e.play())},x.getCurrentIndex=function(){for(var e=0;e<h.length;e++)if(h[e].slide.index===m)return e},x.next=e.next=function(){var n=(x.getCurrentIndex()+1)%h.length;return 0===n&&e.noWrap()?void e.pause():x.select(h[n],"next")},x.prev=e.prev=function(){var n=x.getCurrentIndex()-1<0?h.length-1:x.getCurrentIndex()-1;return e.noWrap()&&n===h.length-1?void e.pause():x.select(h[n],"prev")},x.removeSlide=function(n){var t=u(n),i=C.indexOf(h[t]);-1!==i&&C.splice(i,1),h.splice(t,1),h.length>0&&m===t?t>=h.length?(m=h.length-1,e.active=m,a(m),x.select(h[h.length-1])):(m=t,e.active=m,a(m),x.select(h[t])):m>t&&(m--,e.active=m),0===h.length&&(m=null,e.active=null,l())},x.select=e.select=function(n,t){var i=u(n.slide);void 0===t&&(t=i>x.getCurrentIndex()?"next":"prev"),n.slide.index===m||e.$currentTransition?n&&n.slide.index!==m&&e.$currentTransition&&C.push(h[i]):o(n.slide,i,t)},e.indexOfSlide=function(e){return+e.slide.index},e.isActive=function(n){return e.active===n.slide.index},e.isPrevDisabled=function(){return 0===e.active&&e.noWrap()},e.isNextDisabled=function(){return e.active===h.length-1&&e.noWrap()},e.pause=function(){e.noPause||(g=!1,s())},e.play=function(){g||(g=!0,d())},e.$on("$destroy",function(){b=!0,s()}),e.$watch("noTransition",function(e){r.enabled(n,!e)}),e.$watch("interval",d),e.$watchCollection("slides",c),e.$watch("active",function(e){if(angular.isNumber(e)&&m!==e){for(var n=0;n<h.length;n++)if(h[n].slide.index===e){e=n;break}var t=h[e];t&&(a(e),x.select(h[e]),m=e)}})}]).directive("uibCarousel",function(){return{transclude:!0,replace:!0,controller:"UibCarouselController",controllerAs:"carousel",templateUrl:function(e,n){return n.templateUrl||"uib/template/carousel/carousel.html"},scope:{active:"=",interval:"=",noTransition:"=",noPause:"=",noWrap:"&"}}}).directive("uibSlide",function(){return{require:"^uibCarousel",transclude:!0,replace:!0,templateUrl:function(e,n){return n.templateUrl||"uib/template/carousel/slide.html"},scope:{actual:"=?",index:"=?"},link:function(e,n,t,i){i.addSlide(e,n),e.$on("$destroy",function(){i.removeSlide(e)})}}}).animation(".item",["$animateCss",function(e){function n(e,n,t){e.removeClass(n),t&&t()}var t="uib-slideDirection";return{beforeAddClass:function(i,r,l){if("active"===r){var a=!1,o=i.data(t),u="next"===o?"left":"right",s=n.bind(this,i,u+" "+o,l);return i.addClass(o),e(i,{addClass:u}).start().done(s),function(){a=!0}}l()},beforeRemoveClass:function(i,r,l){if("active"===r){var a=!1,o=i.data(t),u="next"===o?"left":"right",s=n.bind(this,i,u,l);return e(i,{addClass:u}).start().done(s),function(){a=!0}}l()}}}]);