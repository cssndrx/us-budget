/* Source and licensing information for the line(s) below can be found at https://v2-obamawhitehouse.archives.gov/profiles/forall/themes/custom/fortyfour/js/html5shiv.js. */
(function(window,document){var version='3.7.2',options=window.html5||{},reSkip=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,saveClones=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,supportsHtml5Styles,expando='_html5shiv',expanID=0,expandoData={},supportsUnknownElements;(function(){try{var a=document.createElement('a');a.innerHTML='<xyz></xyz>';supportsHtml5Styles=('hidden'in a);supportsUnknownElements=a.childNodes.length==1||(function(){(document.createElement)('a');var frag=document.createDocumentFragment();return(typeof frag.cloneNode=='undefined'||typeof frag.createDocumentFragment=='undefined'||typeof frag.createElement=='undefined')}())}catch(e){supportsHtml5Styles=true;supportsUnknownElements=true}}())
function addStyleSheet(ownerDocument,cssText){var p=ownerDocument.createElement('p'),parent=ownerDocument.getElementsByTagName('head')[0]||ownerDocument.documentElement;p.innerHTML='x<style>'+cssText+'</style>';return parent.insertBefore(p.lastChild,parent.firstChild)}
function getElements(){var elements=html5.elements;return typeof elements=='string'?elements.split(' '):elements}
function addElements(newElements,ownerDocument){var elements=html5.elements;if(typeof elements!='string')elements=elements.join(' ');if(typeof newElements!='string')newElements=newElements.join(' ');html5.elements=elements+' '+newElements;shivDocument(ownerDocument)}
function getExpandoData(ownerDocument){var data=expandoData[ownerDocument[expando]];if(!data){data={};expanID++;ownerDocument[expando]=expanID;expandoData[expanID]=data};return data}
function createElement(nodeName,ownerDocument,data){if(!ownerDocument)ownerDocument=document;if(supportsUnknownElements)return ownerDocument.createElement(nodeName);if(!data)data=getExpandoData(ownerDocument);var node;if(data.cache[nodeName]){node=data.cache[nodeName].cloneNode()}else if(saveClones.test(nodeName)){node=(data.cache[nodeName]=data.createElem(nodeName)).cloneNode()}else node=data.createElem(nodeName);return node.canHaveChildren&&!reSkip.test(nodeName)&&!node.tagUrn?data.frag.appendChild(node):node}
function createDocumentFragment(ownerDocument,data){if(!ownerDocument)ownerDocument=document;if(supportsUnknownElements)return ownerDocument.createDocumentFragment();data=data||getExpandoData(ownerDocument);var clone=data.frag.cloneNode(),i=0,elems=getElements(),l=elems.length;for(;i<l;i++)clone.createElement(elems[i]);return clone}
function shivMethods(ownerDocument,data){if(!data.cache){data.cache={};data.createElem=ownerDocument.createElement;data.createFrag=ownerDocument.createDocumentFragment;data.frag=data.createFrag()};ownerDocument.createElement=function(nodeName){if(!html5.shivMethods)return data.createElem(nodeName);return createElement(nodeName,ownerDocument,data)};ownerDocument.createDocumentFragment=Function('h,f','return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&('+getElements().join().replace(/[\w\-:]+/g,function(nodeName){data.createElem(nodeName);data.frag.createElement(nodeName);return'c("'+nodeName+'")'})+');return n}')(html5,data.frag)}
function shivDocument(ownerDocument){if(!ownerDocument)ownerDocument=document;var data=getExpandoData(ownerDocument);if(html5.shivCSS&&!supportsHtml5Styles&&!data.hasCSS)data.hasCSS=!!addStyleSheet(ownerDocument,'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}');if(!supportsUnknownElements)shivMethods(ownerDocument,data);return ownerDocument};var html5={elements:options.elements||'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',version:version,shivCSS:(options.shivCSS!==false),supportsUnknownElements:supportsUnknownElements,shivMethods:(options.shivMethods!==false),type:'default',shivDocument:shivDocument,createElement:createElement,createDocumentFragment:createDocumentFragment,addElements:addElements};window.html5=html5;shivDocument(document)}(this,document));;
/* Source and licensing information for the above line(s) can be found at https://v2-obamawhitehouse.archives.gov/profiles/forall/themes/custom/fortyfour/js/html5shiv.js. */

/*
     FILE ARCHIVED ON 13:56:35 Jul 17, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:37:37 Oct 05, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 922.25
  CDXLines.iter: 26.489 (3)
  PetaboxLoader3.resolve: 665.214 (4)
  exclusion.robots.policy: 0.197
  exclusion.robots: 0.212
  RedisCDXSource: 129.67
  LoadShardBlock: 715.229 (3)
  esindex: 0.012
  PetaboxLoader3.datanode: 82.764 (4)
  load_resource: 166.32
*/