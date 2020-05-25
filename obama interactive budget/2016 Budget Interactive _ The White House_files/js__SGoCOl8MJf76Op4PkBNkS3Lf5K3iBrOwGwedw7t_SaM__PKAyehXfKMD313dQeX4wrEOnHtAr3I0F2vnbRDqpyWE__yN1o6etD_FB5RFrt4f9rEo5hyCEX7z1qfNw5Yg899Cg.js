/* Source and licensing information for the line(s) below can be found at https://update.d7.obamawhitehouse.archives.gov/sites/obamawhitehouse.archives.gov/modules/contrib/picture/picturefill/matchmedia.js. */
window.matchMedia=window.matchMedia||(function(doc,window){"use strict";var docElem=doc.documentElement,refNode=docElem.firstElementChild||docElem.firstChild,fakeBody=doc.createElement("body"),div=doc.createElement("div");div.id="mq-test-1";div.style.cssText="position:absolute;top:-100em";fakeBody.style.background="none";fakeBody.appendChild(div);var _cache={},_currentDimensions={width:window.innerWidth||doc.documentElement.clientWidth,height:window.innerHeight||doc.documentElement.clientHeight}
function resetCache(){_currentDimensions={width:window.innerWidth||doc.documentElement.clientWidth,height:window.innerHeight||doc.documentElement.clientHeight};_cache={}};if('addEventListener'in window){window.addEventListener('resize',resetCache);window.addEventListener('orientationchange',resetCache)}else if('attachEvent'in window){window.attachEvent('onresize',resetCache);window.attachEvent('onorientationchange',resetCache)}
function MediaQueryList(q){this.media=q;this.matches=false;if(_cache.hasOwnProperty(q)){this.matches=_cache[q]}else{this.check.call(this);_cache[q]=this.matches}};MediaQueryList.prototype={listeners:[],check:function(){var isApplied;div.innerHTML="&shy;<style media=\""+this.media+"\"> #mq-test-1 {width: 42px;}</style>";docElem.insertBefore(fakeBody,refNode);isApplied=div.offsetWidth===42;docElem.removeChild(fakeBody);this.matches=isApplied},addListener:function(callback){var handler=(function(mql,debounced){return function(){var oldstate=mql.matches;mql.check();if(oldstate!=mql.matches)debounced.call(mql,mql)}}(this,debounce(callback,250)));this.listeners.push({callback:callback,handler:handler});if('addEventListener'in window){window.addEventListener('resize',handler);window.addEventListener('orientationchange',handler)}else if('attachEvent'in window){window.attachEvent('onresize',handler);window.attachEvent('onorientationchange',handler)}},removeListener:function(callback){for(var i=0,listeners=this.listeners;i<listeners.length;i++)if(listeners[i].callback===callback){if('removeEventListener'in window){window.removeEventListener('resize',listeners[i].handler);window.removeEventListener('orientationchange',listeners[i].handler)}else if('detachEvent'in window){window.detachEvent('onresize',listeners[i].handler);window.detachEvent('onorientationchange',listeners[i].handler)};listeners.splice(i,1)}}}
function debounce(callback,wait){var timeout,result;return function(){var context=this,args=arguments,later=function(){timeout=null;result=callback.apply(context,args)};window.clearTimeout(timeout);timeout=window.setTimeout(later,wait);return result}};return function(q){return new MediaQueryList(q)}}(document,window));;
/* Source and licensing information for the above line(s) can be found at https://update.d7.obamawhitehouse.archives.gov/sites/obamawhitehouse.archives.gov/modules/contrib/picture/picturefill/matchmedia.js. */
/* Source and licensing information for the line(s) below can be found at https://update.d7.obamawhitehouse.archives.gov/sites/obamawhitehouse.archives.gov/modules/contrib/picture/picturefill/picturefill.js. */
(function(w,parent){"use strict";w.picturefill=function(parent){function _copyAttributes(src,tar){if(src.getAttribute('data-width')&&src.getAttribute('data-height')){tar.width=src.getAttribute('data-width');tar.height=src.getAttribute('data-height')}else{tar.removeAttribute('width');tar.removeAttribute('height')}};if(!parent||!parent.getElementsByTagName)parent=w.document;var ps=parent.getElementsByTagName('span');for(var i=0,il=ps.length;i<il;i++)if(ps[i].getAttribute('data-picture')!==null){var sources=ps[i].getElementsByTagName('span'),picImg=null,matches=[];for(var j=0,jl=sources.length;j<jl;j++){var media=sources[j].getAttribute('data-media');if(!media||(w.matchMedia&&w.matchMedia(media).matches))matches.push(sources[j])};if(matches.length){var match=matches.pop();picImg=ps[i].getElementsByTagName('img')[0];if(!picImg){picImg=w.document.createElement('img');picImg.alt=ps[i].getAttribute('data-alt')||'';picImg.title=ps[i].getAttribute('data-title')||'';ps[i].appendChild(picImg)};if(picImg.getAttribute('src')!==match.getAttribute('data-src')){picImg.src=match.getAttribute('data-src');_copyAttributes(match,picImg)}}}};if(w.addEventListener){w.addEventListener('resize',w.picturefill,false);w.addEventListener('DOMContentLoaded',function(){w.picturefill();w.removeEventListener('load',w.picturefill,false)},false);w.addEventListener('load',w.picturefill,false)}else if(w.attachEvent)w.attachEvent('onload',w.picturefill)})(this);;
/* Source and licensing information for the above line(s) can be found at https://update.d7.obamawhitehouse.archives.gov/sites/obamawhitehouse.archives.gov/modules/contrib/picture/picturefill/picturefill.js. */
/* Source and licensing information for the line(s) below can be found at https://update.d7.obamawhitehouse.archives.gov/sites/obamawhitehouse.archives.gov/modules/contrib/picture/picture.js. */
if(typeof Drupal!=='undefined'&&typeof jQuery!=='undefined')(function($){Drupal.behaviors.picture={attach:function(context){window.picturefill(context)}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://update.d7.obamawhitehouse.archives.gov/sites/obamawhitehouse.archives.gov/modules/contrib/picture/picture.js. */

/*
     FILE ARCHIVED ON 13:58:01 Jul 17, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:37:36 Oct 05, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.197
  RedisCDXSource: 5.583
  load_resource: 81.965
  LoadShardBlock: 53.902 (3)
  esindex: 0.015
  captures_list: 122.554
  PetaboxLoader3.resolve: 53.79
  CDXLines.iter: 24.48 (3)
  exclusion.robots.policy: 0.183
  PetaboxLoader3.datanode: 70.704 (4)
*/