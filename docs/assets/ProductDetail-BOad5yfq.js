import{f as Ot,i as Lt,n as qt,d as f,B as Vt,r as ee,k as Qt,o as Kt,m as je,j as c,H as Zt,S as Jt,s as er,y as tr}from"./index-DGzCVaFN.js";import{P as rr}from"./ProductQuantityController-4eM-GkL9.js";import{p as ar,R as nr,a as ir,P as or}from"./product.api-zs1I7g7t.js";import"./BaseInputNumber-BhZtdAHK.js";/*! @license DOMPurify 2.5.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.8/LICENSE */function U(t){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},U(t)}function qe(t,n){return qe=Object.setPrototypeOf||function(l,d){return l.__proto__=d,l},qe(t,n)}function sr(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ge(t,n,o){return sr()?ge=Reflect.construct:ge=function(d,b,E){var R=[null];R.push.apply(R,b);var O=Function.bind.apply(d,R),H=new O;return E&&qe(H,E.prototype),H},ge.apply(null,arguments)}function N(t){return lr(t)||cr(t)||ur(t)||mr()}function lr(t){if(Array.isArray(t))return Ve(t)}function cr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ur(t,n){if(t){if(typeof t=="string")return Ve(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Ve(t,n)}}function Ve(t,n){(n==null||n>t.length)&&(n=t.length);for(var o=0,l=new Array(n);o<n;o++)l[o]=t[o];return l}function mr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var fr=Object.hasOwnProperty,At=Object.setPrototypeOf,dr=Object.isFrozen,pr=Object.getPrototypeOf,hr=Object.getOwnPropertyDescriptor,S=Object.freeze,M=Object.seal,gr=Object.create,Mt=typeof Reflect<"u"&&Reflect,Te=Mt.apply,Qe=Mt.construct;Te||(Te=function(n,o,l){return n.apply(o,l)});S||(S=function(n){return n});M||(M=function(n){return n});Qe||(Qe=function(n,o){return ge(n,N(o))});var vr=w(Array.prototype.forEach),Et=w(Array.prototype.pop),se=w(Array.prototype.push),ve=w(String.prototype.toLowerCase),Be=w(String.prototype.toString),yt=w(String.prototype.match),D=w(String.prototype.replace),Tr=w(String.prototype.indexOf),_r=w(String.prototype.trim),A=w(RegExp.prototype.test),Ge=Ar(TypeError);function w(t){return function(n){for(var o=arguments.length,l=new Array(o>1?o-1:0),d=1;d<o;d++)l[d-1]=arguments[d];return Te(t,n,l)}}function Ar(t){return function(){for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return Qe(t,o)}}function s(t,n,o){var l;o=(l=o)!==null&&l!==void 0?l:ve,At&&At(t,null);for(var d=n.length;d--;){var b=n[d];if(typeof b=="string"){var E=o(b);E!==b&&(dr(n)||(n[d]=E),b=E)}t[b]=!0}return t}function G(t){var n=gr(null),o;for(o in t)Te(fr,t,[o])===!0&&(n[o]=t[o]);return n}function pe(t,n){for(;t!==null;){var o=hr(t,n);if(o){if(o.get)return w(o.get);if(typeof o.value=="function")return w(o.value)}t=pr(t)}function l(d){return console.warn("fallback value for",d),null}return l}var bt=S(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),We=S(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),$e=S(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Er=S(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ye=S(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),yr=S(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),St=S(["#text"]),xt=S(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Xe=S(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Rt=S(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),he=S(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),br=M(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Sr=M(/<%[\w\W]*|[\w\W]*%>/gm),xr=M(/\${[\w\W]*}/gm),Rr=M(/^data-[\-\w.\u00B7-\uFFFF]+$/),Or=M(/^aria-[\-\w]+$/),Lr=M(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Mr=M(/^(?:\w+script|data):/i),wr=M(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Cr=M(/^html$/i),Dr=M(/^[a-z][.\w]*(-[.\w]+)+$/i),Nr=function(){return typeof window>"u"?null:window},Ir=function(n,o){if(U(n)!=="object"||typeof n.createPolicy!="function")return null;var l=null,d="data-tt-policy-suffix";o.currentScript&&o.currentScript.hasAttribute(d)&&(l=o.currentScript.getAttribute(d));var b="dompurify"+(l?"#"+l:"");try{return n.createPolicy(b,{createHTML:function(R){return R},createScriptURL:function(R){return R}})}catch{return console.warn("TrustedTypes policy "+b+" could not be created."),null}};function wt(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Nr(),n=function(e){return wt(e)};if(n.version="2.5.8",n.removed=[],!t||!t.document||t.document.nodeType!==9)return n.isSupported=!1,n;var o=t.document,l=t.document,d=t.DocumentFragment,b=t.HTMLTemplateElement,E=t.Node,R=t.Element,O=t.NodeFilter,H=t.NamedNodeMap,te=H===void 0?t.NamedNodeMap||t.MozNamedAttrMap:H,re=t.HTMLFormElement,_e=t.DOMParser,W=t.trustedTypes,$=R.prototype,Ae=pe($,"cloneNode"),Ee=pe($,"nextSibling"),ye=pe($,"childNodes"),Y=pe($,"parentNode");if(typeof b=="function"){var X=l.createElement("template");X.content&&X.content.ownerDocument&&(l=X.content.ownerDocument)}var u=Ir(W,o),C=u?u.createHTML(""):"",F=l,ae=F.implementation,be=F.createNodeIterator,Nt=F.createDocumentFragment,It=F.getElementsByTagName,Pt=o.importNode,Ke={};try{Ke=G(l).documentMode?l.documentMode:{}}catch{}var I={};n.isSupported=typeof Y=="function"&&ae&&ae.createHTMLDocument!==void 0&&Ke!==9;var Se=br,xe=Sr,Re=xr,kt=Rr,Ft=Or,Ut=Mr,Ze=wr,Ht=Dr,Oe=Lr,g=null,Je=s({},[].concat(N(bt),N(We),N($e),N(Ye),N(St))),v=null,et=s({},[].concat(N(xt),N(Xe),N(Rt),N(he))),p=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ne=null,Le=null,tt=!0,Me=!0,rt=!1,at=!0,q=!1,we=!0,z=!1,Ce=!1,De=!1,V=!1,le=!1,ce=!1,nt=!0,it=!1,zt="user-content-",Ne=!0,ie=!1,Q={},K=null,ot=s({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),st=null,lt=s({},["audio","video","img","source","image","track"]),Ie=null,ct=s({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ue="http://www.w3.org/1998/Math/MathML",me="http://www.w3.org/2000/svg",P="http://www.w3.org/1999/xhtml",Z=P,Pe=!1,ke=null,jt=s({},[ue,me,P],Be),j,Bt=["application/xhtml+xml","text/html"],Gt="text/html",T,J=null,Wt=l.createElement("form"),ut=function(e){return e instanceof RegExp||e instanceof Function},Fe=function(e){J&&J===e||((!e||U(e)!=="object")&&(e={}),e=G(e),j=Bt.indexOf(e.PARSER_MEDIA_TYPE)===-1?j=Gt:j=e.PARSER_MEDIA_TYPE,T=j==="application/xhtml+xml"?Be:ve,g="ALLOWED_TAGS"in e?s({},e.ALLOWED_TAGS,T):Je,v="ALLOWED_ATTR"in e?s({},e.ALLOWED_ATTR,T):et,ke="ALLOWED_NAMESPACES"in e?s({},e.ALLOWED_NAMESPACES,Be):jt,Ie="ADD_URI_SAFE_ATTR"in e?s(G(ct),e.ADD_URI_SAFE_ATTR,T):ct,st="ADD_DATA_URI_TAGS"in e?s(G(lt),e.ADD_DATA_URI_TAGS,T):lt,K="FORBID_CONTENTS"in e?s({},e.FORBID_CONTENTS,T):ot,ne="FORBID_TAGS"in e?s({},e.FORBID_TAGS,T):{},Le="FORBID_ATTR"in e?s({},e.FORBID_ATTR,T):{},Q="USE_PROFILES"in e?e.USE_PROFILES:!1,tt=e.ALLOW_ARIA_ATTR!==!1,Me=e.ALLOW_DATA_ATTR!==!1,rt=e.ALLOW_UNKNOWN_PROTOCOLS||!1,at=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,q=e.SAFE_FOR_TEMPLATES||!1,we=e.SAFE_FOR_XML!==!1,z=e.WHOLE_DOCUMENT||!1,V=e.RETURN_DOM||!1,le=e.RETURN_DOM_FRAGMENT||!1,ce=e.RETURN_TRUSTED_TYPE||!1,De=e.FORCE_BODY||!1,nt=e.SANITIZE_DOM!==!1,it=e.SANITIZE_NAMED_PROPS||!1,Ne=e.KEEP_CONTENT!==!1,ie=e.IN_PLACE||!1,Oe=e.ALLOWED_URI_REGEXP||Oe,Z=e.NAMESPACE||P,p=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&ut(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(p.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ut(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(p.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(p.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),q&&(Me=!1),le&&(V=!0),Q&&(g=s({},N(St)),v=[],Q.html===!0&&(s(g,bt),s(v,xt)),Q.svg===!0&&(s(g,We),s(v,Xe),s(v,he)),Q.svgFilters===!0&&(s(g,$e),s(v,Xe),s(v,he)),Q.mathMl===!0&&(s(g,Ye),s(v,Rt),s(v,he))),e.ADD_TAGS&&(g===Je&&(g=G(g)),s(g,e.ADD_TAGS,T)),e.ADD_ATTR&&(v===et&&(v=G(v)),s(v,e.ADD_ATTR,T)),e.ADD_URI_SAFE_ATTR&&s(Ie,e.ADD_URI_SAFE_ATTR,T),e.FORBID_CONTENTS&&(K===ot&&(K=G(K)),s(K,e.FORBID_CONTENTS,T)),Ne&&(g["#text"]=!0),z&&s(g,["html","head","body"]),g.table&&(s(g,["tbody"]),delete ne.tbody),S&&S(e),J=e)},mt=s({},["mi","mo","mn","ms","mtext"]),ft=s({},["annotation-xml"]),$t=s({},["title","style","font","a","script"]),fe=s({},We);s(fe,$e),s(fe,Er);var Ue=s({},Ye);s(Ue,yr);var Yt=function(e){var r=Y(e);(!r||!r.tagName)&&(r={namespaceURI:Z,tagName:"template"});var a=ve(e.tagName),m=ve(r.tagName);return ke[e.namespaceURI]?e.namespaceURI===me?r.namespaceURI===P?a==="svg":r.namespaceURI===ue?a==="svg"&&(m==="annotation-xml"||mt[m]):!!fe[a]:e.namespaceURI===ue?r.namespaceURI===P?a==="math":r.namespaceURI===me?a==="math"&&ft[m]:!!Ue[a]:e.namespaceURI===P?r.namespaceURI===me&&!ft[m]||r.namespaceURI===ue&&!mt[m]?!1:!Ue[a]&&($t[a]||!fe[a]):!!(j==="application/xhtml+xml"&&ke[e.namespaceURI]):!1},L=function(e){se(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch{try{e.outerHTML=C}catch{e.remove()}}},de=function(e,r){try{se(n.removed,{attribute:r.getAttributeNode(e),from:r})}catch{se(n.removed,{attribute:null,from:r})}if(r.removeAttribute(e),e==="is"&&!v[e])if(V||le)try{L(r)}catch{}else try{r.setAttribute(e,"")}catch{}},dt=function(e){var r,a;if(De)e="<remove></remove>"+e;else{var m=yt(e,/^[\r\n\t ]+/);a=m&&m[0]}j==="application/xhtml+xml"&&Z===P&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var x=u?u.createHTML(e):e;if(Z===P)try{r=new _e().parseFromString(x,j)}catch{}if(!r||!r.documentElement){r=ae.createDocument(Z,"template",null);try{r.documentElement.innerHTML=Pe?C:x}catch{}}var y=r.body||r.documentElement;return e&&a&&y.insertBefore(l.createTextNode(a),y.childNodes[0]||null),Z===P?It.call(r,z?"html":"body")[0]:z?r.documentElement:y},pt=function(e){return be.call(e.ownerDocument||e,e,O.SHOW_ELEMENT|O.SHOW_COMMENT|O.SHOW_TEXT|O.SHOW_PROCESSING_INSTRUCTION|O.SHOW_CDATA_SECTION,null,!1)},He=function(e){return e instanceof re&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof te)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},oe=function(e){return U(E)==="object"?e instanceof E:e&&U(e)==="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"},k=function(e,r,a){I[e]&&vr(I[e],function(m){m.call(n,r,a,J)})},ht=function(e){var r;if(k("beforeSanitizeElements",e,null),He(e)||A(/[\u0080-\uFFFF]/,e.nodeName))return L(e),!0;var a=T(e.nodeName);if(k("uponSanitizeElement",e,{tagName:a,allowedTags:g}),e.hasChildNodes()&&!oe(e.firstElementChild)&&(!oe(e.content)||!oe(e.content.firstElementChild))&&A(/<[/\w]/g,e.innerHTML)&&A(/<[/\w]/g,e.textContent)||a==="select"&&A(/<template/i,e.innerHTML)||e.nodeType===7||we&&e.nodeType===8&&A(/<[/\w]/g,e.data))return L(e),!0;if(!g[a]||ne[a]){if(!ne[a]&&vt(a)&&(p.tagNameCheck instanceof RegExp&&A(p.tagNameCheck,a)||p.tagNameCheck instanceof Function&&p.tagNameCheck(a)))return!1;if(Ne&&!K[a]){var m=Y(e)||e.parentNode,x=ye(e)||e.childNodes;if(x&&m)for(var y=x.length,_=y-1;_>=0;--_){var B=Ae(x[_],!0);B.__removalCount=(e.__removalCount||0)+1,m.insertBefore(B,Ee(e))}}return L(e),!0}return e instanceof R&&!Yt(e)||(a==="noscript"||a==="noembed"||a==="noframes")&&A(/<\/no(script|embed|frames)/i,e.innerHTML)?(L(e),!0):(q&&e.nodeType===3&&(r=e.textContent,r=D(r,Se," "),r=D(r,xe," "),r=D(r,Re," "),e.textContent!==r&&(se(n.removed,{element:e.cloneNode()}),e.textContent=r)),k("afterSanitizeElements",e,null),!1)},gt=function(e,r,a){if(nt&&(r==="id"||r==="name")&&(a in l||a in Wt))return!1;if(!(Me&&!Le[r]&&A(kt,r))){if(!(tt&&A(Ft,r))){if(!v[r]||Le[r]){if(!(vt(e)&&(p.tagNameCheck instanceof RegExp&&A(p.tagNameCheck,e)||p.tagNameCheck instanceof Function&&p.tagNameCheck(e))&&(p.attributeNameCheck instanceof RegExp&&A(p.attributeNameCheck,r)||p.attributeNameCheck instanceof Function&&p.attributeNameCheck(r))||r==="is"&&p.allowCustomizedBuiltInElements&&(p.tagNameCheck instanceof RegExp&&A(p.tagNameCheck,a)||p.tagNameCheck instanceof Function&&p.tagNameCheck(a))))return!1}else if(!Ie[r]){if(!A(Oe,D(a,Ze,""))){if(!((r==="src"||r==="xlink:href"||r==="href")&&e!=="script"&&Tr(a,"data:")===0&&st[e])){if(!(rt&&!A(Ut,D(a,Ze,"")))){if(a)return!1}}}}}}return!0},vt=function(e){return e!=="annotation-xml"&&yt(e,Ht)},Tt=function(e){var r,a,m,x;k("beforeSanitizeAttributes",e,null);var y=e.attributes;if(!(!y||He(e))){var _={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:v};for(x=y.length;x--;){r=y[x];var B=r,h=B.name,ze=B.namespaceURI;if(a=h==="value"?r.value:_r(r.value),m=T(h),_.attrName=m,_.attrValue=a,_.keepAttr=!0,_.forceKeepAttr=void 0,k("uponSanitizeAttribute",e,_),a=_.attrValue,!_.forceKeepAttr&&(de(h,e),!!_.keepAttr)){if(!at&&A(/\/>/i,a)){de(h,e);continue}q&&(a=D(a,Se," "),a=D(a,xe," "),a=D(a,Re," "));var _t=T(e.nodeName);if(gt(_t,m,a)){if(it&&(m==="id"||m==="name")&&(de(h,e),a=zt+a),we&&A(/((--!?|])>)|<\/(style|title)/i,a)){de(h,e);continue}if(u&&U(W)==="object"&&typeof W.getAttributeType=="function"&&!ze)switch(W.getAttributeType(_t,m)){case"TrustedHTML":{a=u.createHTML(a);break}case"TrustedScriptURL":{a=u.createScriptURL(a);break}}try{ze?e.setAttributeNS(ze,h,a):e.setAttribute(h,a),He(e)?L(e):Et(n.removed)}catch{}}}}k("afterSanitizeAttributes",e,null)}},Xt=function i(e){var r,a=pt(e);for(k("beforeSanitizeShadowDOM",e,null);r=a.nextNode();)k("uponSanitizeShadowNode",r,null),ht(r),Tt(r),r.content instanceof d&&i(r.content);k("afterSanitizeShadowDOM",e,null)};return n.sanitize=function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,a,m,x,y;if(Pe=!i,Pe&&(i="<!-->"),typeof i!="string"&&!oe(i))if(typeof i.toString=="function"){if(i=i.toString(),typeof i!="string")throw Ge("dirty is not a string, aborting")}else throw Ge("toString is not a function");if(!n.isSupported){if(U(t.toStaticHTML)==="object"||typeof t.toStaticHTML=="function"){if(typeof i=="string")return t.toStaticHTML(i);if(oe(i))return t.toStaticHTML(i.outerHTML)}return i}if(Ce||Fe(e),n.removed=[],typeof i=="string"&&(ie=!1),ie){if(i.nodeName){var _=T(i.nodeName);if(!g[_]||ne[_])throw Ge("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof E)r=dt("<!---->"),a=r.ownerDocument.importNode(i,!0),a.nodeType===1&&a.nodeName==="BODY"||a.nodeName==="HTML"?r=a:r.appendChild(a);else{if(!V&&!q&&!z&&i.indexOf("<")===-1)return u&&ce?u.createHTML(i):i;if(r=dt(i),!r)return V?null:ce?C:""}r&&De&&L(r.firstChild);for(var B=pt(ie?i:r);m=B.nextNode();)m.nodeType===3&&m===x||(ht(m),Tt(m),m.content instanceof d&&Xt(m.content),x=m);if(x=null,ie)return i;if(V){if(le)for(y=Nt.call(r.ownerDocument);r.firstChild;)y.appendChild(r.firstChild);else y=r;return(v.shadowroot||v.shadowrootmod)&&(y=Pt.call(o,y,!0)),y}var h=z?r.outerHTML:r.innerHTML;return z&&g["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&A(Cr,r.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+r.ownerDocument.doctype.name+`>
`+h),q&&(h=D(h,Se," "),h=D(h,xe," "),h=D(h,Re," ")),u&&ce?u.createHTML(h):h},n.setConfig=function(i){Fe(i),Ce=!0},n.clearConfig=function(){J=null,Ce=!1},n.isValidAttribute=function(i,e,r){J||Fe({});var a=T(i),m=T(e);return gt(a,m,r)},n.addHook=function(i,e){typeof e=="function"&&(I[i]=I[i]||[],se(I[i],e))},n.removeHook=function(i){if(I[i])return Et(I[i])},n.removeHooks=function(i){I[i]&&(I[i]=[])},n.removeAllHooks=function(){I={}},n}var Pr=wt();const kr=Ot("productDetail/getProductDetail",Lt(ar.getProductDetail)),Fr=Ot("productDetail/addToCart",Lt(qt.addToCart)),Ur=f.div`
  display: flex;
  background: #fff;
`,Hr=f.div`
  width: 480px;
  padding: 1.5rem;
`,zr=f.div`
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,jr=f.div`
  display: flex;
  position: relative;
  overflow: hidden;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`,Ct=f.button`
  position: absolute;
  width: 2rem;
  height: 4rem;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  border: none;
  background-color: rgba(0, 0, 0, 0.2);

  svg {
    width: 2rem;
    height: 2rem;
    fill: currentColor;
  }
`,Br=f(Ct)`
  left: 0;
`,Gr=f.div`
  padding: 0.5rem;
  height: 92px;
  width: 92px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 2px solid ${({$active:t})=>t?"#ee4d2d":"transparent"};
  }
`,Wr=f(Ct)`
  right: 0;
`,$r=f.div`
  flex: 1;
  padding: 1.5rem;
`,Yr=f.h1`
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`,Xr=f.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`,Dt=f.div`
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-right: 1px solid rgba(0, 0, 0, 0.14);

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
    border-right: 0;
  }
`,qr=f(Dt)`
  span {
    color: #ee4d2d;
    border-bottom: 1px solid #ee4d2d;
    font-size: 1.6rem;
    margin-right: 0.5rem;
  }

  ${nr} svg {
    width: 1.4rem;
    height: 1.4rem;
  }

  ${ir} svg {
    color: #ee4d2d;
    fill: #ee4d2d;
  }
`,Vr=f(Dt)`
  span:first-child {
    font-size: 1.6rem;
    color: #222;
    margin-right: 5px;
    padding-bottom: 1px;
  }

  span:last-child {
    font-size: 1.4rem;
    color: #767676;
    text-transform: capitalize;
  }
`,Qr=f.div`
  padding: 1.5rem 2rem;
  background: #fafafa;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`,Kr=f.div`
  font-size: 1.6rem;
  text-decoration: line-through;
  color: #929292;
  margin-right: 10px;
`,Zr=f.div`
  font-size: 3rem;
  font-weight: 500;
  color: #ee4d2d;
`,Jr=f.div`
  font-size: 1.2rem;
  color: #fff;
  text-transform: uppercase;
  background: #ee4d2d;
  border-radius: 2px;
  padding: 2px 4px;
  font-weight: 600;
  line-height: 1;
  margin-left: 15px;
  white-space: nowrap;
`,ea=f.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`,ta=f.div`
  color: #757575;
  text-transform: capitalize;
  flex: 0 0 110px;
  max-width: 110px;
`,ra=f.div`
  margin-right: 1.2rem;
`,aa=f.div``,na=f(Vt)`
  background: rgba(255, 87, 34, 0.1);
  border: 1px solid #ee4d2d;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
  color: #ee4d2d;
  margin-right: 15px;
  padding: 0 1.2rem;
  font-size: 14px;
  height: 48px;

  svg {
    margin-right: 10px;
    color: #ee4d2d;
    stroke: #ee4d2d;
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    background: rgba(255, 87, 34, 0.15);
  }
`,ia=f.div`
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  border-radius: 0.2rem;
  overflow: hidden;
  background: #fff;
  margin-top: 3rem;
  padding: 2rem;
`,oa=f.div`
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.87);
  font-size: 1.8rem;
  padding: 1.4rem;
  text-transform: capitalize;
`,sa=f.div`
  margin: 3rem 1.5rem 1.5rem;
  font-size: 1.4rem;
  line-height: 2.2;
`;function da(){var Y,X;const[t,n]=ee.useState({}),[o,l]=ee.useState({}),[d,b]=ee.useState([0,5]),[E,R]=ee.useState(1),O=Qt(),{idProduct:H=""}=Kt(),te=decodeURIComponent(H),re=te.includes("-i.")?te.split("-i.").pop():te,_e=ee.useMemo(()=>Array.isArray(t.images)?t.images.slice(...d):[],[t.images,d]);ee.useEffect(()=>{re&&O(kr(re)).then(je).then(u=>{const C=u.data,F=Array.isArray(C.images)?C.images.map((ae,be)=>({url:ae,id:be})):[];n({...C,images:F}),F.length&&l(F[0])}).catch(u=>{console.error("Lấy chi tiết sản phẩm lỗi:",u)})},[O,re]);const W=u=>l(u),$=()=>{d[0]>0&&b(([u,C])=>[u-1,C-1])},Ae=()=>{Array.isArray(t.images)&&d[1]<t.images.length&&b(([u,C])=>[u+1,C+1])},Ee=u=>R(u),ye=async()=>{try{const u=await O(Fr({product_id:t._id,buy_count:E})).then(je);await O(er()).then(je),tr.success(u.message,{position:"top-center",autoClose:4e3})}catch(u){console.error("Thêm vào giỏ hàng lỗi:",u)}};return c.jsxs("div",{children:[c.jsx(Zt,{children:c.jsx("title",{children:t.name||"Đang tải..."})}),t._id&&c.jsxs("div",{className:"container",children:[c.jsxs(Ur,{children:[c.jsxs(Hr,{children:[c.jsx(zr,{children:c.jsx("img",{src:o.url,alt:t.name})}),c.jsxs(jr,{children:[c.jsx(Br,{onClick:$}),_e.map(u=>c.jsx(Gr,{$active:o.id===u.id,onMouseEnter:()=>W(u),children:c.jsx("img",{src:u.url,alt:""})},u.id)),c.jsx(Wr,{onClick:Ae})]})]}),c.jsxs($r,{children:[c.jsx(Yr,{children:t.name}),c.jsxs(Xr,{children:[c.jsxs(qr,{children:[c.jsx("span",{children:t.rating}),c.jsx(or,{rating:t.rating})]}),c.jsxs(Vr,{children:[c.jsx("span",{children:t.sold<1e3?t.sold:`${t.sold/1e3}k`}),c.jsx("span",{children:"Đã bán"})]})]}),c.jsxs(Qr,{children:[c.jsxs(Kr,{children:["đ",(Y=t.price_before_discount)==null?void 0:Y.toLocaleString()]}),c.jsxs(Zr,{children:["đ",(X=t.price)==null?void 0:X.toLocaleString()]}),c.jsxs(Jr,{children:[Jt(t.price_before_discount,t.price)," giảm"]})]}),c.jsxs(ea,{children:[c.jsx(ta,{children:"Số lượng"}),c.jsx(ra,{children:c.jsx(rr,{value:E,max:t.quantity,onChange:Ee})}),c.jsxs(aa,{children:[t.quantity," sản phẩm có sẵn"]})]}),c.jsx(na,{onClick:ye,children:"Thêm vào giỏ hàng"})]})]}),c.jsxs(ia,{children:[c.jsx(oa,{children:"Mô tả sản phẩm"}),c.jsx(sa,{dangerouslySetInnerHTML:{__html:Pr.sanitize(t.description||"")}})]})]})]})}export{da as default};
