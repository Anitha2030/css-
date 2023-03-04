(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var p=this||self;function aa(a){a=a.s;const b=encodeURIComponent;let c="";a.platform&&(c+="&uap="+b(a.platform));a.platformVersion&&(c+="&uapv="+b(a.platformVersion));a.uaFullVersion&&(c+="&uafv="+b(a.uaFullVersion));a.architecture&&(c+="&uaa="+b(a.architecture));a.model&&(c+="&uam="+b(a.model));a.bitness&&(c+="&uab="+b(a.bitness));a.fullVersionList&&(c+="&uafvl="+b(a.fullVersionList.map(d=>b(d.brand)+";"+b(d.version)).join("|")));"undefined"!==typeof a.wow64&&(c+="&uaw="+Number(a.wow64));return c}
function ba(a,b){return a.h?a.m.slice(0,a.h.index)+b+a.m.slice(a.h.index):a.m+b}function da(a){let b="&act=1&ri=1";a.i&&a.s&&(b+=aa(a));return ba(a,b)}function ea(a,b){return a.i&&a.j||a.o?1==b?a.i?a.j:ba(a,"&dct=1"):2==b?ba(a,"&ri=2"):ba(a,"&ri=16"):a.m}
var fa=class{constructor({url:a,X:b}){this.m=a;this.s=b;b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){let c;try{c=decodeURIComponent(this.h[1])}catch(d){c=null}this.j=c}}};function r(a){var b;a:{if(b=p.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};var t=class{constructor(a,b){this.h=b===ha?a:""}toString(){return this.h.toString()}};t.prototype.i=!0;var ia;try{new URL("s://g"),ia=!0}catch(a){ia=!1}var ka=ia,ha={},la=new t("about:invalid#zClosurez",ha);function ma(a,b){a:{const c=a.length,d="string"===typeof a?a.split(""):a;for(let f=0;f<c;f++)if(f in d&&b.call(void 0,d[f],f,a)){b=f;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};function na(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};function oa(a,b){if(!(b instanceof t||b instanceof t)){b="object"==typeof b&&b.i?b.h.toString():String(b);b:{var c=b;if(ka){try{var d=new URL(c)}catch(f){c="https:";break b}c=d.protocol}else c:{d=document.createElement("a");try{d.href=c}catch(f){c=void 0;break c}c=d.protocol;c=":"===c||""===c?"https:":c}}"javascript:"===c&&(b="about:invalid#zClosurez");b=new t(b,ha)}a.href=b instanceof t&&b.constructor===t?b.h:"type_error:SafeUrl"};/*

 SPDX-License-Identifier: Apache-2.0
*/
class pa{constructor(a){this.fa=a}}function u(a){return new pa(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const qa=new pa(a=>/^[^:]*([/?#]|$)/.test(a));var ra=u("http"),sa=u("https"),ta=u("ftp"),ua=u("mailto"),va=u("intent"),wa=u("market"),xa=u("itms"),ya=u("itms-appss");const za=[u("data"),ra,sa,ua,ta,qa];function Aa(a,b=za){for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof pa&&d.fa(a))return new t(a,ha)}}function Ca(a,b=za){return Aa(a,b)||la};function Da(){return r("iPhone")&&!r("iPod")&&!r("iPad")};function Ea(a){Ea[" "](a);return a}Ea[" "]=function(){};var Fa=Da(),Ga=r("iPad");var Ha=Da()||r("iPod"),Ia=r("iPad");var Ja={},Ka=null;
function La(a,b){void 0===b&&(b=0);if(!Ka){Ka={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var e=c.concat(d[f].split(""));Ja[f]=e;for(var g=0;g<e.length;g++){var h=e[g];void 0===Ka[h]&&(Ka[h]=g)}}}b=Ja[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(f=e=0;e<a.length-2;e+=3){var l=a[e],k=a[e+1];h=a[e+2];g=b[l>>2];l=b[(l&3)<<4|k>>4];k=b[(k&15)<<2|h>>6];h=b[h&63];c[f++]=g+l+k+h}g=0;h=d;switch(a.length-e){case 2:g=
a[e+1],h=b[(g&15)<<2]||d;case 1:a=a[e],c[f]=b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")};var Ma="undefined"!==typeof Uint8Array,Na={};let Oa;var Pa=class{constructor(a){if(Na!==Na)throw Error("illegal external caller");this.Y=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}};const v=Symbol();function x(a,b){if(v)return a[v]|=b;if(void 0!==a.v)return a.v|=b;Object.defineProperties(a,{v:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}function Qa(a,b){const c=y(a);(c&b)!==b&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),z(a,c|b));return a}function Ra(a){v?a[v]&&(a[v]&=-17):void 0!==a.v&&(a.v&=-17)}function y(a){let b;v?b=a[v]:b=a.v;return null==b?0:b}
function z(a,b){v?a[v]=b:void 0!==a.v?a.v=b:Object.defineProperties(a,{v:{value:b,configurable:!0,writable:!0,enumerable:!1}})}function Sa(a){x(a,1);return a}function A(a){return!!(y(a)&2)}function B(a){x(a,2);return a}function Ta(a){x(a,16);return a}function Ua(a,b){z(b,(a|0)&-51)}function Va(a,b){z(b,(a|18)&-41)};var Wa={};function Xa(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}let Ya;var C;const Za=[];z(Za,23);C=Object.freeze(Za);function $a(a){if(A(a.l))throw Error("Cannot mutate an immutable Message");}class ab{constructor(a){this.S=0;this.R=a}next(){return this.S<this.R.length?{done:!1,value:this.R[this.S++]}:{done:!0,value:void 0}}[Symbol.iterator](){return this}}function bb(a){var b=a.length;(b=b?a[b-1]:void 0)&&Xa(b)?b.g=1:a.push({g:1})};function cb(a,b,c){let d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.J===Wa)return a;if(d)return new b(a);if(c)return new b};function D(a){return Array.from(a.h.keys()).sort(ib)}function jb(a,b=kb){const c=D(a);for(let d=0;d<c.length;d++){const f=c[d],e=a.h.get(c[d]);c[d]=[b(f),b(e)]}return c}function lb(a,b=kb){const c=[];a=a.h.entries();for(var d;!(d=a.next()).done;)d=d.value,d[0]=b(d[0]),d[1]=b(d[1]),c.push(d);return c}
var E=class{constructor(a,b,c,d=nb){c=y(a);c|=32;z(a,c);this.i=c;this.j=(this.m=b)?ob:pb;this.s=d;this.h=b=new Map;for(d=0;d<a.length;d++)c=a[d],b.set(c[0],c[1]);this.size=b.size}entries(){const a=D(this);for(let b=0;b<a.length;b++){const c=a[b];a[b]=[c,this.get(c)]}return new ab(a)}keys(){const a=D(this);return new ab(a)}values(){const a=D(this);for(let b=0;b<a.length;b++)a[b]=this.get(a[b]);return new ab(a)}forEach(a,b){const c=D(this);for(let d=0;d<c.length;d++){const f=c[d];a.call(b,this.get(f),
f,this)}}set(a,b){if(this.i&2)throw Error("Cannot mutate an immutable Map");const c=this.h;if(null==b)return c.delete(a),this;c.set(a,this.j(b,this.m,!1,this.o));this.size=c.size;return this}get(a){const b=this.h;if(b.has(a)){var c=b.get(a),d=this.i,f=this.m;f&&Array.isArray(c)&&d&16&&Ta(c);d=this.j(c,f,!!(d&2),this.o);d!==c&&b.set(a,d);return d}}has(a){return this.h.has(a)}[Symbol.iterator](){return this.entries()}};function ib(a,b){a=""+a;b=""+b;return a>b?1:a<b?-1:0}
function ob(a,b,c,d){a=cb(a,b,!0);c?B(a.l):d&&(a=qb(a));return a}function pb(a){return a}function nb(a){return a}function kb(a){return a};function rb(a){const b=a.i+a.A;return a.u||(a.u=a.l[b]={})}function F(a,b,c){return-1===b?null:b>=a.i?a.u?a.u[b]:void 0:c&&a.u&&(c=a.u[b],null!=c)?c:a.l[b+a.A]}function G(a,b,c,d){$a(a);return H(a,b,c,d)}function H(a,b,c,d){a.j&&(a.j=void 0);if(b>=a.i||d)return rb(a)[b]=c,a;a.l[b+a.A]=c;(c=a.u)&&b in c&&delete c[b];return a}
function sb(a,b,c,d,f){let e=F(a,b,d);Array.isArray(e)||(e=C);const g=y(e);g&1||Sa(e);if(f)g&2||B(e),c&1||Object.freeze(e);else{f=!(c&2);const h=g&2;c&1||!h?f&&g&16&&!h&&Ra(e):(e=Sa(Array.prototype.slice.call(e)),H(a,b,e,d))}return e}
function tb(a,b){var c=A(a.l);let d=sb(a,b,1,!1,c);const f=y(d);if(!(f&4)){Object.isFrozen(d)&&(d=Sa(d.slice()),H(a,b,d,!1));let e=0,g=0;for(;e<d.length;e++){const h=d[e];null!=h&&(d[g++]=h)}g<e&&(d.length=g);x(d,5);c&&(B(d),Object.freeze(d))}!c&&(f&2||Object.isFrozen(d))&&(d=Array.prototype.slice.call(d),x(d,5),c=d,c=null==c?C:Qa(c,1),G(a,b,c,!1));return d}let ub;
function J(a,b,c){{const g=A(a.l);b:{var d=F(a,b),f=g,e=!1;if(null==d){if(f){a=ub||(ub=new E(B([])));break b}d=[]}else if(d.constructor===E){if(0==(d.i&2)||f){a=d;break b}d=lb(d)}else Array.isArray(d)?e=A(d):d=[];if(f){if(!d.length){a=ub||(ub=new E(B([])));break b}e||(e=!0,B(d))}else if(e)for(e=!1,d=Array.prototype.slice.call(d),f=0;f<d.length;f++){const h=d[f]=Array.prototype.slice.call(d[f]);Array.isArray(h[1])&&(h[1]=B(h[1]))}e||(y(d)&32?Ra(d):y(a.l)&16&&Ta(d));e=new E(d,c);H(a,b,e,!1);a=e}null==
a?c=a:(!g&&c&&(a.o=!0),c=a)}return c}function K(a,b,c){const d=F(a,c,!1);b=cb(d,b);b!==d&&null!=b&&(H(a,c,b,!1),x(b.l,y(a.l)&18));return b}function L(a,b,c){b=K(a,b,c);if(null==b)return b;if(!A(a.l)){const d=qb(b);d!==b&&(b=d,H(a,c,b,!1))}return b}
function vb(a){var b=A(a.l);var c=wb;a.h||(a.h={});var d=a.h[7];var f=sb(a,7,3,void 0,b);if(d)b||(f=Object.isFrozen(d),b&&!f?Object.freeze(d):!b&&f&&(d=Array.prototype.slice.call(d),a.h[7]=d));else{var e=f;d=[];var g=!!(y(a.l)&16);f=A(e);var h=e;!b&&f&&(e=Array.prototype.slice.call(e));var l=f;let n=0;for(;n<e.length;n++){var k=e[n];var m=c;m=Array.isArray(k)?new m(k):void 0;if(void 0===m)continue;k=m.l;const q=y(k);let w=q;f&&(w|=2);g&&(w|=16);w!=q&&z(k,w);k=w;l||(l=!!(2&k));d.push(m)}a.h[7]=d;g=
y(e);c=g|33;c=l?c&-9:c|8;g!=c&&(l=e,Object.isFrozen(l)&&(l=Array.prototype.slice.call(l)),z(l,c),e=l);h!==e&&H(a,7,e);(b||b&&f)&&B(d);b&&Object.freeze(d)}a=sb(a,7,3,void 0,b);if(!(b||y(a)&8)){for(b=0;b<d.length;b++)f=d[b],h=qb(f),f!==h&&(d[b]=h,a[b]=h.l);x(a,8)}return d}function xb(a,b,c,d){$a(a);let f=null==c?C:Sa([]);if(null!=c){let e=!!c.length;for(let g=0;g<c.length;g++){const h=c[g];e=e&&!A(h.l);f[g]=h.l}f=Qa(f,(e?8:0)|1);a.h||(a.h={});a.h[b]=c}else a.h&&(a.h[b]=void 0);return H(a,b,f,d)}
function yb(a,b){a=F(a,b);return null==a?0:a}function M(a,b){a=F(a,b);return null==a?"":a}function P(a,b){a=F(a,b);a=null==a?a:!!a;return null==a?!1:a}function R(a,b,c=0){a=F(a,b);return null==a?c:a};let zb;function Ab(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(y(a)&128))return a=Array.prototype.slice.call(a),bb(a),a}else{if(Ma&&null!=a&&a instanceof Uint8Array)return La(a);if(a instanceof Pa){const b=a.Y;return null==b?"":"string"===typeof b?b:a.Y=La(b)}if(a instanceof E)return jb(a)}}return a};function Bb(a,b,c,d){if(null!=a){if(Array.isArray(a))a=Cb(a,b,c,void 0!==d);else if(Xa(a)){const f={};for(let e in a)f[e]=Bb(a[e],b,c,d);a=f}else a=b(a,d);return a}}function Cb(a,b,c,d){const f=y(a);d=d?!!(f&16):void 0;a=Array.prototype.slice.call(a);for(let e=0;e<a.length;e++)a[e]=Bb(a[e],b,c,d);c(f,a);return a}function Db(a){return Bb(a,Eb,Fb)}function Eb(a){return a.J===Wa?a.toJSON():a instanceof E?jb(a,Db):Ab(a)}function Fb(a,b){a&128&&bb(b)};function Gb(a,b,c=Va){if(null!=a){if(Ma&&a instanceof Uint8Array)return a.length?new Pa(new Uint8Array(a)):Oa||(Oa=new Pa(null));if(Array.isArray(a)){const d=y(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return z(a,d|2),a;a=Cb(a,Gb,d&4?Va:c,!0);b=y(a);b&4&&b&2&&Object.freeze(a);return a}a.J===Wa?a=Hb(a):a instanceof E&&(b=B(lb(a,Gb)),a=new E(b,a.m,a.j,a.s));return a}}
function Ib(a,b,c,d,f,e,g){(a=a.h&&a.h[c])?(d=y(a),d&2?d=a:(e=Array.prototype.map.call(a,Hb,void 0),Va(d,e),Object.freeze(e),d=e),xb(b,c,d,f)):G(b,c,Gb(d,e,g),f)}function Hb(a){if(A(a.l))return a;a=Jb(a,!0);B(a.l);return a}
function Jb(a,b){const c=a.l;var d=Ta([]),f=a.constructor.h;f&&d.push(f);f=a.u;if(f){d.length=c.length;d.fill(void 0,d.length,c.length);var e={};d[d.length-1]=e}0!==(y(c)&128)&&bb(d);b=b||A(a.l)?Va:Ua;e=a.constructor;zb=d;d=new e(d);zb=void 0;a.U&&(d.U=a.U.slice());e=!!(y(c)&16);const g=f?c.length-1:c.length;for(let h=0;h<g;h++)Ib(a,d,h-a.A,c[h],!1,e,b);if(f)for(const h in f)Ib(a,d,+h,f[h],!0,e,b);return d}function qb(a){if(!A(a.l))return a;const b=Jb(a,!1);b.j=a;return b};function Kb(a){Ya=!0;try{return JSON.stringify(a.toJSON(),Lb)}finally{Ya=!1}}
var S=class{constructor(a,b,c){null==a&&(a=zb);zb=void 0;var d=this.constructor.i||0,f=0<d,e=this.constructor.h,g=!1;if(null==a){a=e?[e]:[];var h=48;var l=!0;f&&(d=0,h|=128);z(a,h)}else{if(!Array.isArray(a))throw Error();if(e&&e!==a[0])throw Error();let k=h=x(a,0);if(l=0!==(16&k))(g=0!==(32&k))||(k|=32);if(f)if(128&k)d=0;else{if(0<a.length){const m=a[a.length-1];if(Xa(m)&&"g"in m){d=0;k|=128;delete m.g;let n=!0;for(let q in m){n=!1;break}n&&a.pop()}}}else if(128&k)throw Error();h!==k&&z(a,k)}this.A=
(e?0:-1)-d;this.h=void 0;this.l=a;a:{e=this.l.length;d=e-1;if(e&&(e=this.l[d],Xa(e))){this.u=e;this.i=d-this.A;break a}void 0!==b&&-1<b?(this.i=Math.max(b,d+1-this.A),this.u=void 0):this.i=Number.MAX_VALUE}if(!f&&this.u&&"g"in this.u)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=l&&!g&&!0;f=this.i;let k;for(l=0;l<c.length;l++)g=c[l],g<f?(g+=this.A,(d=a[g])?Mb(d,b):a[g]=C):(k||(k=rb(this)),(d=k[g])?Mb(d,b):k[g]=C)}}toJSON(){const a=this.l;return Ya?
a:Cb(a,Eb,Fb)}};function Mb(a,b){if(Array.isArray(a)){var c=y(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&z(a,c|d)}}S.prototype.J=Wa;S.prototype.toString=function(){return this.l.toString()};function Lb(a,b){return Ab(b)};var Nb=class extends S{constructor(){super()}};var Ob=class extends S{constructor(a){super(a)}},Pb=class extends S{constructor(a){super(a)}};var Rb=class extends S{constructor(a){super(a,-1,Qb)}},wb=class extends S{constructor(a){super(a)}B(){return M(this,3)}W(a){G(this,5,a)}},T=class extends S{constructor(a){super(a)}B(){return M(this,1)}W(a){G(this,2,a)}},Sb=class extends S{constructor(a){super(a)}},Qb=[6,7];var Ub=class extends S{constructor(a){super(a,-1,Tb)}},Tb=[17];var Vb=class extends S{constructor(a){super(a)}};var Wb=class extends S{constructor(){super()}};var Xb={capture:!0},Yb={passive:!0},Zb=na(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});p.addEventListener("test",null,b)}catch(b){}return a});function $b(a){return a?a.passive&&Zb()?a:a.capture||!1:!1}function U(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,$b(d))};function ac(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)};var bc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cc(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.slice(0,c),d,a.slice(b)]}function dc(a,b){return b?a?a+"&"+b:b:a}function ec(a,b){if(!b)return a;a=cc(a);a[1]=dc(a[1],b);return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function fc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)fc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}function gc(a){var b=[],c;for(c in a)fc(c,a[c],b);return b.join("&")}function hc(){var a=ac();a=null!=a?"="+encodeURIComponent(String(a)):"";return ec("https://pagead2.googlesyndication.com/pagead/gen_204","zx"+a)}var ic=/#|$/;
function jc(a,b){var c=a.search(ic);a:{var d=0;for(var f=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var e=a.charCodeAt(d-1);if(38==e||63==e)if(e=a.charCodeAt(d+f),!e||61==e||38==e||35==e)break a;d+=f+1}d=-1}if(0>d)return null;f=a.indexOf("&",d);if(0>f||f>c)f=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==f?f:0).replace(/\+/g," "))}
function kc(a,b){a=cc(a);var c=a[1],d=[];c&&c.split("&").forEach(function(f){var e=f.indexOf("=");b.hasOwnProperty(0<=e?f.slice(0,e):f)||d.push(f)});a[1]=dc(d.join("&"),gc(b));return a[0]+(a[1]?"?"+a[1]:"")+a[2]};function lc(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}var mc=a=>{a.preventDefault?a.preventDefault():a.returnValue=!1};let nc=[];const oc=()=>{const a=nc;nc=[];for(const b of a)try{b()}catch(c){}};
var pc=a=>{nc.push(a);1==nc.length&&(window.Promise?Promise.resolve().then(oc):window.setImmediate?setImmediate(oc):setTimeout(oc,0))},uc=a=>{var b=V;"complete"===b.readyState||"interactive"===b.readyState?pc(a):b.addEventListener("DOMContentLoaded",a)},vc=a=>{var b=window;"complete"===b.document.readyState?pc(a):b.addEventListener("load",a)};function wc(a=document){return a.createElement("img")};function xc(a,b,c=null,d=!1){yc(a,b,c,d)}function yc(a,b,c,d){a.google_image_requests||(a.google_image_requests=[]);const f=wc(a.document);if(c||d){const e=g=>{c&&c(g);if(d){g=a.google_image_requests;const h=Array.prototype.indexOf.call(g,f,void 0);0<=h&&Array.prototype.splice.call(g,h,1)}f.removeEventListener&&f.removeEventListener("load",e,$b());f.removeEventListener&&f.removeEventListener("error",e,$b())};U(f,"load",e);U(f,"error",e)}f.src=b;a.google_image_requests.push(f)}
function zc(a,b){var c;if(c=a.navigator)c=a.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&a.navigator.sendBeacon?a.navigator.sendBeacon(b):xc(a,b,void 0,!1)};let Ac=0;function Bc(a){return(a=Cc(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function Cc(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)}
function Dc(a){if(!(.01<Math.random())){const b=Cc(a,document.currentScript);a=`https://${b&&"true"===b.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${Bc(a)}&sample=${.01}`;zc(window,a)}};var V=document,W=window;const Ec=[ra,sa,ua,ta,qa,wa,xa,va,ya];function Fc(a,b){if(a instanceof t)return a;const c=Ca(a,Ec);c===la&&b(a);return c}var Gc=a=>{var b=`${"http:"===W.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c=gc({id:"unsafeurl",ctx:a,url:c});c=ec(b,c);navigator.sendBeacon&&navigator.sendBeacon(c,"")}};var Hc=a=>{var b=V;try{return b.querySelectorAll("*["+a+"]")}catch(c){return[]}};class Ic{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};const Jc=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var Kc=class{constructor(a,b){this.h=a;this.i=b}},Lc=class{constructor(a,b){this.url=a;this.V=!!b;this.depth=null}};function Mc(a,b){const c={};c[a]=b;return[c]}function Nc(a,b,c,d,f){const e=[];lc(a,function(g,h){(g=Oc(g,b,c,d,f))&&e.push(h+"="+g)});return e.join(b)}
function Oc(a,b,c,d,f){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const e=[];for(let g=0;g<a.length;g++)e.push(Oc(a[g],b,c,d+1,f));return e.join(c[d])}}else if("object"==typeof a)return f=f||0,2>f?encodeURIComponent(Nc(a,b,c,d,f+1)):"...";return encodeURIComponent(String(a))}function Pc(a){let b=1;for(const c in a.i)b=c.length>b?c.length:b;return 3997-b-a.j.length-1}
function Qc(a,b){let c="https://pagead2.googlesyndication.com"+b,d=Pc(a)-b.length;if(0>d)return"";a.h.sort(function(e,g){return e-g});b=null;let f="";for(let e=0;e<a.h.length;e++){const g=a.h[e],h=a.i[g];for(let l=0;l<h.length;l++){if(!d){b=null==b?g:b;break}let k=Nc(h[l],a.j,",$");if(k){k=f+k;if(d>=k.length){d-=k.length;c+=k;f=a.j;break}b=null==b?g:b}}}a="";null!=b&&(a=f+"trn="+b);return c+a}class Rc{constructor(){this.j="&";this.i={};this.m=0;this.h=[]}};function Sc(){var a=Tc,b=window.google_srt;0<=b&&1>=b&&(a.h=b)}function Uc(a,b,c,d=!1,f){if((d?a.h:Math.random())<(f||.01))try{let e;c instanceof Rc?e=c:(e=new Rc,lc(c,(h,l)=>{var k=e;const m=k.m++;h=Mc(l,h);k.h.push(m);k.i[m]=h}));const g=Qc(e,"/pagead/gen_204?id="+b+"&");g&&xc(p,g)}catch(e){}}class Vc{constructor(){this.h=Math.random()}};let Wc=null;function Xc(){const a=p.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function Yc(){const a=p.performance;return a&&a.now?a.now():null};class Zc{constructor(a,b){var c=Yc()||Xc();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.taskId=this.slotId=void 0}};const X=p.performance,$c=!!(X&&X.mark&&X.measure&&X.clearMarks),ad=na(()=>{var a;if(a=$c){var b;if(null===Wc){Wc="";try{a="";try{a=p.top.location.hash}catch(c){a=p.location.hash}a&&(Wc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Wc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function bd(a){a&&X&&ad()&&(X.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),X.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))}
class cd{constructor(){var a=window;this.i=[];this.j=a||p;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.i=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.h=ad()||(null!=b?b:1>Math.random())}start(a,b){if(!this.h)return null;a=new Zc(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;X&&ad()&&X.mark(b);return a}end(a){if(this.h&&"number"===typeof a.value){a.duration=(Yc()||Xc())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;X&&ad()&&X.mark(b);!this.h||
2048<this.i.length||this.i.push(a)}}};function dd(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);let d;for(;a!=d;)d=a,a=a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),"$1");b=a.replace(RegExp("\n *","g"),"\n")}catch(d){b=c}}return b}
function ed(a,b,c){let d,f;try{a.h&&a.h.h?(f=a.h.start(b.toString(),3),d=c(),a.h.end(f)):d=c()}catch(e){c=!0;try{bd(f),c=a.s(b,new Ic(e,{message:dd(e)}),void 0,void 0)}catch(g){a.o(217,g)}if(c){let g,h;null==(g=window.console)||null==(h=g.error)||h.call(g,e)}else throw e;}return d}function fd(a,b){var c=gd;return(...d)=>ed(c,a,()=>b.apply(void 0,d))}
class hd{constructor(a=null){this.j=Tc;this.i=null;this.s=this.o;this.h=a;this.m=!1}pinger(){return this.j}o(a,b,c,d,f){f=f||"jserror";let e;try{const N=new Rc;var g=N;g.h.push(1);g.i[1]=Mc("context",a);b.error&&b.meta&&b.id||(b=new Ic(b,{message:dd(b)}));if(b.msg){g=N;var h=b.msg.substring(0,512);g.h.push(2);g.i[2]=Mc("msg",h)}var l=b.meta||{};b=l;if(this.i)try{this.i(b)}catch(I){}if(d)try{d(b)}catch(I){}d=N;l=[l];d.h.push(3);d.i[3]=l;d=p;l=[];let Ba;b=null;do{var k=d;try{var m;if(m=!!k&&null!=k.location.href)b:{try{Ea(k.foo);
m=!0;break b}catch(I){}m=!1}var n=m}catch(I){n=!1}n?(Ba=k.location.href,b=k.document&&k.document.referrer||null):(Ba=b,b=null);l.push(new Lc(Ba||""));try{d=k.parent}catch(I){d=null}}while(d&&k!=d);for(let I=0,qc=l.length-1;I<=qc;++I)l[I].depth=qc-I;k=p;if(k.location&&k.location.ancestorOrigins&&k.location.ancestorOrigins.length==l.length-1)for(n=1;n<l.length;++n){var q=l[n];q.url||(q.url=k.location.ancestorOrigins[n-1]||"",q.V=!0)}var w=l;let db=new Lc(p.location.href,!1);k=null;const eb=w.length-
1;for(q=eb;0<=q;--q){var O=w[q];!k&&Jc.test(O.url)&&(k=O);if(O.url&&!O.V){db=O;break}}O=null;const zd=w.length&&w[eb].url;0!=db.depth&&zd&&(O=w[eb]);e=new Kc(db,O);if(e.i){w=N;var Q=e.i.url||"";w.h.push(4);w.i[4]=Mc("top",Q)}var fb={url:e.h.url||""};if(e.h.url){var gb=e.h.url.match(bc),ca=gb[1],rc=gb[3],sc=gb[4];Q="";ca&&(Q+=ca+":");rc&&(Q+="//",Q+=rc,sc&&(Q+=":"+sc));var tc=Q}else tc="";ca=N;fb=[fb,{url:tc}];ca.h.push(5);ca.i[5]=fb;Uc(this.j,f,N,this.m,c)}catch(N){try{Uc(this.j,f,{context:"ecmserr",
rctx:a,msg:dd(N),url:e&&e.h.url},this.m,c)}catch(Ba){}}return!0}};class id{};let Tc,gd;const Y=new cd;var jd=()=>{window.google_measure_js_timing||(Y.h=!1,Y.i!=Y.j.google_js_reporting_queue&&(ad()&&Array.prototype.forEach.call(Y.i,bd,void 0),Y.i.length=0))};(a=>{Tc=null!=a?a:new Vc;"number"!==typeof window.google_srt&&(window.google_srt=Math.random());Sc();gd=new hd(Y);gd.i=b=>{const c=Ac;0!==c&&(b.jc=String(c),b.shv=Bc(c))};gd.m=!0;"complete"==window.document.readyState?jd():Y.h&&U(window,"load",()=>{jd()})})();
var Z=(a,b)=>fd(a,b),kd=a=>{var b=id;var c="T";b.T&&b.hasOwnProperty(c)||(c=new b,b.T=c);b=[];!a.eid&&b.length&&(a.eid=b.toString());Uc(Tc,"gdn-asoch",a,!0)};function ld(a=window){return a};var md=(a,b)=>{b=M(a,2)||b;if(!b)return"";if(P(a,13))return b;const c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;const d=[b.slice(0,c.index+1)];J(a,4).forEach((f,e)=>{d.push(encodeURIComponent(e)+"="+encodeURIComponent(f)+"&")});d.push(b.slice(c.index+1));return d.join("")},nd=(a,b=[])=>{b=0<b.length?b:Hc("data-asoch-targets");a=J(a,1,Rb);const c=[];for(let h=0;h<b.length;++h){var d=b[h].getAttribute("data-asoch-targets"),f=d.split(","),e=!0;for(let l of f)if(!a.has(l)){e=!1;break}if(e){e=a.get(f[0]);
for(d=1;d<f.length;++d){var g=a.get(f[d]);e=Jb(e,!1).toJSON();g=g.toJSON();const l=Math.max(e.length,g.length);for(let k=0;k<l;++k)null==e[k]&&(e[k]=g[k]);e=new Rb(e)}f=J(e,4);null!=F(e,5)&&f.set("nb",R(e,5,0).toString());c.push({element:b[h],data:e})}else kd({type:1,data:d})}return c},qd=(a,b,c,d)=>{c=md(b,c);if(0!==c.length){if("2"===jc(c,"ase")&&1087!==d){let e;if(609===d)e=4;else{var f;e=(null==(f=V.featurePolicy)?0:f.allowedFeatures().includes("attribution-reporting"))?6:5}f="";od(c)?f=pd(da(new fa({url:c})),
"nis",e.toString()):c=pd(c,"nis",e.toString());a.setAttribute("attributionsrc",f)}oa(a,Fc(c,Gc(d)));a.target||(a.target=null!=F(b,11)?M(b,11):"_top")}},rd=a=>{for(const b of a)if(a=b.data,"A"==b.element.tagName&&!P(a,1)){const c=b.element;qd(c,a,c.href,609)}},od=a=>!/[?&]dsh=1(&|$)/.test(a)&&/[?&]ae=1(&|$)/.test(a),sd=a=>{const b=p.oneAfmaInstance;if(b)for(const c of a)if((a=c.data)&&void 0!==K(a,Sb,8)){const d=M(L(a,Sb,8),4);if(d){b.fetchAppStoreOverlay(d,void 0,M(L(a,Sb,8),6));break}}},td=(a,b=
500)=>{const c=[],d=[];for(var f of a)(a=f.data)&&void 0!==K(a,T,12)&&(d.push(L(a,T,12)),c.push(L(a,T,12).B()));f=(e,g)=>{if(g)for(const h of d)g[h.B()]&&h.W(!0)};a=p.oneAfmaInstance;for(const e of c){let g;null==(g=a)||g.canOpenAndroidApp(e,f,()=>{},b)}},vd=(a,b,c,d,f)=>{if(!b||void 0===K(b,Sb,8))return!1;const e=L(b,Sb,8);let g=M(e,2);J(b,10).forEach((l,k)=>{var m=g;k=encodeURIComponent(k);const n=encodeURIComponent(l);l=new RegExp("[?&]"+k+"=([^&]+)");const q=l.exec(m);console.log(q);k=k+"="+n;
g=q?m.replace(l,q[0].charAt(0)+k):m.replace("?","?"+k+"&")});ud(b)&&P(b,15)&&!/[?&]label=/.test(c)&&(c=pd(c,"label","deep_link_fallback"));b=l=>d.openStoreOverlay(l,void 0,M(e,6));const h=l=>zc(W,l);return d.redirectForStoreU2({clickUrl:c,trackingUrl:M(e,3),finalUrl:g,pingFunc:f?h:d.click,openFunc:(null==a?0:P(a,1))?b:d.openIntentOrNativeApp})},xd=(a,b,c,d,f,e,g,h=!1)=>{f=P(f,15);const l=od(e);!a||!b||f&&l||(e=h?wd(e):wd(e,g.click));e&&e.startsWith("intent:")?g.openIntentOrNativeApp(e):c?d?g.openBrowser(e):
g.openChromeCustomTab(e):g.openSystemBrowser(e,{useFirstPackage:!0,useRunningProcess:!0})},wd=(a,b=null)=>{if(null!==b){const c=new fa({url:a});if(c.i&&c.j||c.o)return b(da(c)),ea(c,1)}else return{X:b}={},b=new fa({url:a,X:b}),b.i&&b.j||b.o?navigator.sendBeacon?navigator.sendBeacon(da(b),"")?ea(b,1):ea(b,2):ea(b,0):a;return a},yd=(a,b=!0,c=!1)=>{let d=!1;c&&W.navigator&&W.navigator.sendBeacon&&(d=W.navigator.sendBeacon(a));d||(b&&W.fetch?W.fetch(a,{method:"GET",keepalive:!0,mode:"no-cors"}).then(f=>
{f.ok||xc(W,a)}):xc(W,a))},pd=(a,b,c)=>{b=encodeURIComponent(String(b));c=encodeURIComponent(String(c));return a.replace("?","?"+b+"="+c+"&")},ud=a=>{for(const b of vb(a))if(3===R(b,1,0)&&M(b,2))return!0;return!1};var Ad=(a,b)=>a&&(a=a.match(b+"=([^&]+)"))&&2==a.length?a[1]:"";function Bd(a,b){return G(a,2,b)}function Cd(a,b){return G(a,3,b)}function Dd(a,b){return G(a,4,b)}function Ed(a,b){return G(a,5,b)}function Fd(a,b){return G(a,9,b)}function Gd(a,b){return xb(a,10,b)}function Hd(a,b){return G(a,11,b)}function Id(a,b){return G(a,1,b)}function Jd(a,b){return G(a,7,b)}var Ld=class extends S{constructor(){super(void 0,-1,Kd)}},Md=class extends S{constructor(){super()}},Kd=[10,6];const Nd="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Od(a){let b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}function Pd(a){let b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function Qd(){var a=window;if(!Pd(a))return null;const b=Od(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Nd).then(c=>{null!=b.uach||(b.uach=c);return c});return b.uach_promise=a}
function Rd(a){let b;return Hd(Gd(Ed(Bd(Id(Dd(Jd(Fd(Cd(new Ld,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(c=>{var d=new Md;d=G(d,1,c.brand);return G(d,2,c.version)}))||[]),a.wow64||!1)}function Sd(){let a,b;return null!=(b=null==(a=Qd())?void 0:a.then(c=>Rd(c)))?b:null};function Td(a){for(const b of a)if("A"==b.element.tagName){a=b.element;const c=b.data;null==F(c,2)&&G(c,2,a.href)}}function Ud(a,b){return ma(a,c=>c.element===b)}function Vd(a){uc(Z(556,()=>{new Wd(a||{})}))}
function Xd(a,b,c,d){if(!P(d,13)){var f=c.href;var e=/[?&]adurl=([^&]+)/.exec(f);f=e?[f.slice(0,e.index),f.slice(e.index)]:[f,""];for(oa(c,Fc(f[0],Gc(557)));!c.id;)if(e="asoch-id-"+ac(),!V.getElementById(e)){c.id=e;break}e=c.id;"function"===typeof window.xy&&window.xy(b,c,V.body);"function"===typeof window.mb&&window.mb(c);"function"===typeof window.bgz&&window.bgz(e);"function"===typeof window.ja&&window.ja(e,d?R(d,5,0):0);"function"===typeof window.vti&&window.vti(e);a.o&&"function"===typeof window.ss&&
(a.O?window.ss(e,1,a.o):window.ss(a.o,1));0<f.length&&(a=0<a.D.length&&(null==d||null==F(d,19))?c.href+"&uach="+encodeURIComponent(a.D)+f[1]:c.href+f[1],oa(c,Fc(a,Gc(557))))}}async function Yd(a,b,c,d){let f="";var e=p.oneAfmaInstance;if(e&&(b.preventDefault(),f=await e.appendClickSignalsAsync(c.href)||"",a.L&&(e=await e.getNativeClickMeta()))){if(e.customClickGestureEligible)return;f=pd(f,"nas",e.encodedNas)}Zd(a,b,c,d,f)}
function Zd(a,b,c,d,f){const e=P(a.i,2),g=e&&300<Date.now()-a.N,h=p.oneAfmaInstance;h?(mc(b),(()=>{let l=h.logScionEventAndAddParam(f);if(!a.s&&d&&void 0!==K(d,T,12)){var k=L(d,T,12).B();if(0<vb(d).length)for(const m of vb(d));P(L(d,T,12),2)?(h.click(l),h.openAndroidApp(k),k=!0):k=!1}else k=!1;k||vd(a.C,d,l,h,a.aa)||xd(e,g,a.ca,a.s,d,l,h,a.ba)})()):(P(a.i,21)&&c.href&&"_blank"!==c.target&&(a.m=jc(c.href,"ai")||"")&&(a.j="clicked"),b=window,a.Z&&b.pawsig&&"function"===typeof b.pawsig.clk?b.pawsig.clk(c):
g&&(b="2"===jc(c.href,"ase")&&od(c.href)?wd(c.href,()=>{}):a.da?wd(c.href,l=>{W.fetch(l,{method:"GET",keepalive:!0,mode:"no-cors"})}):wd(c.href),b!==c.href&&oa(c,Fc(b,Gc(599)))));g&&(a.N=Date.now());Dc(a.M)}
var Wd=class{constructor(a){this.s=Ha||Fa||Ia||Ga;var b=Hc("data-asoch-meta");if(1!==b.length)kd({type:2,data:b.length});else{this.M=70;this.i=new Ub(JSON.parse(b[0].getAttribute("data-asoch-meta"))||[]);this.K=a["extra-meta"]?new Ub(JSON.parse(a["extra-meta"])):null;this.L="true"===a["is-fsn"];this.C=a["ios-store-overlay-config"]?new Vb(JSON.parse(a["ios-store-overlay-config"])):null;this.ca="true"===a["use-cct-over-browser"];this.aa="true"===a["send-ac-click-ping-by-js"];this.P="true"===a["correct-redirect-url-for-och-15-click"];
this.ba="true"===a["send-click-ping-by-js-in-och"];this.Z="true"===a["enable-paw"];this.da="true"===a["async-using-fetch"];this.j=this.m="";this.G=this.F=-1;this.D="";b=Sd();null!=b&&b.then(d=>{d=Kb(d);for(var f=[],e=0,g=0;g<d.length;g++){var h=d.charCodeAt(g);255<h&&(f[e++]=h&255,h>>=8);f[e++]=h}this.D=La(f,3)});this.h=nd(this.i);this.ea=Number(a["deeplink-and-android-app-validation-timeout"])||500;this.N=-Infinity;this.o=M(this.i,5)||"";this.O=P(this.i,11);this.K&&(this.O=P(this.K,11));this.I=this.H=
null;P(this.i,3)||(rd(this.h),G(this.i,3,!0));Td(this.h);a=p.oneAfmaInstance;!this.s&&a&&td(this.h,this.ea);var c;if(a&&(null==(c=this.C)?0:P(c,2)))switch(c=()=>{const d=yb(this.C,4);0<d?p.setTimeout(()=>{sd(this.h)},d):sd(this.h)},R(this.C,3,0)){case 1:a.runOnOnShowEvent(c);break;case 2:vc(c);break;default:sd(this.h)}U(V,"click",Z(557,d=>{a:if(!d.defaultPrevented||this.H===d){for(var f,e,g=d.target;(!f||!e)&&g;){e||"A"!=g.tagName||(e=g);var h=g.hasAttribute("data-asoch-targets"),l=g.hasAttribute("data-asoch-fixed-value");
if(!f)if(l)f=new Rb(JSON.parse(g.getAttribute("data-asoch-fixed-value"))||[]);else if("A"==g.tagName||h)if(h=h&&"true"===g.getAttribute("data-asoch-is-dynamic")?nd(this.i,[g]):this.h,h=Ud(h,g))f=h.data;g=g.parentElement}if(g=f&&!P(f,1)){if(d.defaultPrevented){var k=e,m=f;if(this.H===d&&this.I){e=new Ob(this.I);f=M(m,9);var n="";switch(R(e,4,1)){case 2:if(yb(e,2))n="blocked_fast_click";else if(M(e,1)||M(e,7))n="blocked_border_click";break;case 3:n=V,n=n.getElementById?n.getElementById("common_15click_anchor"):
null,"function"===typeof window.copfcChm&&n&&(m=Jb(m,!1),G(m,5,12),J(m,4).set("nb",(12).toString()),(g=Ud(this.h,n))?g.data=m:this.h.push({element:n,data:m}),!this.P&&k&&(Xd(this,d,k,m),G(m,2,k.href)),window.copfcChm(d,md(m,n.href),null,void 0!==K(e,Pb,10)?Kb(L(e,Pb,10)):null),this.P&&Xd(this,d,n,m)),n="onepointfiveclick_first_click"}f&&n&&yd(f+"&label="+n,!1);Dc(this.M)}break a}h=f;for(n of tb(h,6))yd(n)}if(e&&g){f=g?f:null;(n=Ud(this.h,e))?n=n.data:(n=new Rb,G(n,2,e.href),G(n,11,e.target||"_top"),
this.h.push({element:e,data:n}));qd(e,f||n,M(n,2),557);Xd(this,d,e,f);for(m of tb(this.i,17))n=m,g=V.body,h={},"function"===typeof window.CustomEvent?l=new CustomEvent(n,h):(l=document.createEvent("CustomEvent"),l.initCustomEvent(n,!!h.bubbles,!!h.cancelable,h.detail)),g.dispatchEvent(l);if(null==f?0:null!=F(f,19)){g=new Nb;G(g,1,R(f,5,0));m=Ad(e.href,"nx");""!=m&&G(g,2,+m);m=Ad(e.href,"ny");""!=m&&G(g,3,+m);m=Ad(e.href,"bg");""!=m&&G(g,4,m);m=M(f,19);n=null!=F(f,20)?yb(f,20):null;g=Kb(g);h=this.D;
l=ld(p);const q=new Wb;G(q,1,m);null!==n&&G(q,2,n);null!==h&&G(q,3,h);G(q,4,g);null==l||null==(k=l.fence)||k.reportEvent({eventType:"click",eventData:JSON.stringify(q),destination:["buyer"]})}P(this.i,16)||this.L?Yd(this,d,e,f):(k="",(m=p.oneAfmaInstance)&&(k=m.appendClickSignals(e.href)),Zd(this,d,e,f,k))}}}),Xb);!a&&P(this.i,21)&&(U(W,"pagehide",Z(1037,()=>{if(this.m&&this.j&&(this.j+="+pagehide",this.G=Date.now(),-1!==this.F)){var d={id:"visibilityBeforePagehide",payload:this.j,delay:this.G-this.F,
isios:this.s,clickstring:this.m};yd(kc(hc(),d),!1,!0)}})),U(V,"visibilitychange",Z(1067,()=>{if("visible"===V.visibilityState)this.m=this.j="",this.G=this.F=-1;else if("hidden"===V.visibilityState&&this.j&&this.m){this.F=Date.now();var d={id:"visibilityhidden",payload:this.j,isios:this.s,clickstring:this.m};yd(kc(hc(),d),!1,!0)}})));this.o&&"function"===typeof window.ss&&U(V.body,"mouseover",Z(626,()=>{window.ss(this.o,0)}),Yb);"function"===typeof window.ivti&&window.ivti(window);c=window;c.googqscp&&
"function"===typeof c.googqscp.registerCallback&&c.googqscp.registerCallback((d,f)=>{this.H=d;this.I=f})}}};var $d=Z(555,a=>Vd(a));Ac=70;const ae=Cc(70,document.currentScript);if(null==ae)throw Error("JSC not found 70");const be={},ce=ae.attributes;for(let a=ce.length-1;0<=a;a--){const b=ce[a].name;0===b.indexOf("data-jcp-")&&(be[b.substring(9)]=ce[a].value)}$d(be);}).call(this);
