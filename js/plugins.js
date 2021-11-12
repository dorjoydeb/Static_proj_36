// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());

/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 * jQuery.browser.mobile will be true if the browser is a mobile device
 **/
(function(b){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,4))
})(navigator.userAgent||navigator.vendor||window.opera);

/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

/*
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 */
(function(a){a.fn.hoverIntent=function(m,d,h){var j={interval:100,sensitivity:7,timeout:0};if(typeof m==="object"){j=a.extend(j,m)}else{if(a.isFunction(d)){j=a.extend(j,{over:m,out:d,selector:h})}else{j=a.extend(j,{over:m,out:m,selector:d})}}var l,k,g,f;var e=function(n){l=n.pageX;k=n.pageY};var c=function(o,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if((Math.abs(g-l)+Math.abs(f-k))<j.sensitivity){a(n).off("mousemove.hoverIntent",e);n.hoverIntent_s=1;return j.over.apply(n,[o])}else{g=l;f=k;
n.hoverIntent_t=setTimeout(function(){c(o,n)},j.interval)}};var i=function(o,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);n.hoverIntent_s=0;return j.out.apply(n,[o])};var b=function(p){var o=jQuery.extend({},p);var n=this;if(n.hoverIntent_t){n.hoverIntent_t=clearTimeout(n.hoverIntent_t)}if(p.type=="mouseenter"){g=o.pageX;f=o.pageY;a(n).on("mousemove.hoverIntent",e);if(n.hoverIntent_s!=1){n.hoverIntent_t=setTimeout(function(){c(o,n)},j.interval)}}else{a(n).off("mousemove.hoverIntent",e);if(n.hoverIntent_s==1){n.hoverIntent_t=setTimeout(function(){i(o,n)
},j.timeout)}}};return this.on({"mouseenter.hoverIntent":b,"mouseleave.hoverIntent":b},j.selector)}})(jQuery);

/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/*!
 * jQuery imagesLoaded plugin v2.1.1
 * http://github.com/desandro/imagesloaded
 * MIT License. by Paul Irish et al.
 */
(function(a,b){var c="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";a.fn.imagesLoaded=function(l){var i=this,n=a.isFunction(a.Deferred)?a.Deferred():0,m=a.isFunction(n.notify),f=i.find("img").add(i.filter("img")),g=[],k=[],h=[];if(a.isPlainObject(l)){a.each(l,function(o,p){if(o==="callback"){l=p}else{if(n){n[o](p)}}})}function j(){var o=a(k),p=a(h);
if(n){if(h.length){n.reject(f,o,p)}else{n.resolve(f)}}if(a.isFunction(l)){l.call(i,f,o,p)}}function e(o){d(o.target,o.type==="error")}function d(o,p){if(o.src===c||a.inArray(o,g)!==-1){return}g.push(o);if(p){h.push(o)}else{k.push(o)}a.data(o,"imagesLoaded",{isBroken:p,src:o.src});if(m){n.notifyWith(a(o),[p,f,a(k),a(h)])}if(f.length===g.length){setTimeout(j);f.unbind(".imagesLoaded",e)}}if(!f.length){j()}else{f.bind("load.imagesLoaded error.imagesLoaded",e).each(function(o,q){var r=q.src;var p=a.data(q,"imagesLoaded");
if(p&&p.src===r){d(q,p.isBroken);return}if(q.complete&&q.naturalWidth!==b){d(q,q.naturalWidth===0||q.naturalHeight===0);return}if(q.readyState||q.complete){q.src=c;q.src=r}})}return n?n.promise(i):i}})(jQuery);

/*
 * RETINISE.JS
 * http://www.dahliacreative.com
 * © Copyright 2012 DahliaCreative.
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 */
(function(a){a.fn.extend({retinise:function(d){var e={suffix:"@2x",srcattr:"data-src",retattr:"data-ret",altattr:"data-alt"};var d=a.extend(e,d);var c=window.devicePixelRatio;var b=(c>1)?true:false;a(this).each(function(){var i=a(this);i.css("display","none");if(i.attr(d.srcattr)!==null){var f=i.attr(d.srcattr),h=i.attr(d.altattr),g=i.attr(d.retattr);if(b===true){if(i.attr(d.retattr)!==null){i.attr({src:g,alt:h})}else{i.attr({src:f.replace(/\.\w+$/,function(j){return d.suffix+j}),alt:h})}i.load(function(){var j=i.height()/c;
var k=i.width()/c;i.attr({height:j,width:k}).css("display","block")})}else{i.attr({src:f,alt:h}).css("display","block")}}})}})})(jQuery);

/**
 * jQuery Masonry v2.1.07
 * A dynamic layout plugin for jQuery
 * The flip-side of CSS Floats
 * http://masonry.desandro.com
 * Licensed under the MIT license.
 * Copyright 2012 David DeSandro
 */

(function(i,h,n){var m=h.event,l=h.event.handle?"handle":"dispatch",k;m.special.smartresize={setup:function(){h(this).bind("resize",m.special.smartresize.handler)},teardown:function(){h(this).unbind("resize",m.special.smartresize.handler)},handler:function(e,d){var o=this,f=arguments;e.type="smartresize",k&&clearTimeout(k),k=setTimeout(function(){m[l].apply(o,f)},d==="execAsap"?0:100)}},h.fn.smartresize=function(b){return b?this.bind("smartresize",b):this.trigger("smartresize",["execAsap"])},h.Mason=function(b,d){this.element=h(d),this._create(b),this._init()
},h.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1,containerStyle:{position:"relative"}},h.Mason.prototype={_filterFindBricks:function(d){var c=this.options.itemSelector;return c?d.filter(c).add(d.find(c)):d},_getBricks:function(d){var c=this._filterFindBricks(d).css({position:"absolute"}).addClass("masonry-brick");return c},_create:function(s){this.options=h.extend(!0,{},h.Mason.settings,s),this.styleQueue=[];var r=this.element[0].style;this.originalStyle={height:r.height||""};
var q=this.options.containerStyle;for(var p in q){this.originalStyle[p]=r[p]||""}this.element.css(q),this.horizontalDirection=this.options.isRTL?"right":"left";var o=this.element.css("padding-"+this.horizontalDirection),b=this.element.css("padding-top");this.offset={x:o?parseInt(o,10):0,y:b?parseInt(b,10):0},this.isFluid=this.options.columnWidth&&typeof this.options.columnWidth=="function";var a=this;setTimeout(function(){a.element.addClass("masonry")},0),this.options.isResizable&&h(i).bind("smartresize.masonry",function(){a.resize()
}),this.reloadItems()},_init:function(b){this._getColumns(),this._reLayout(b)},option:function(b,d){h.isPlainObject(b)&&(this.options=h.extend(!0,this.options,b))},layout:function(w,v){for(var u=0,t=w.length;u<t;u++){this._placeBrick(w[u])}var s={};s.height=Math.max.apply(Math,this.colYs);if(this.options.isFitWidth){var r=0;u=this.cols;while(--u){if(this.colYs[u]!==0){break}r++}s.width=(this.cols-r)*this.columnWidth-this.options.gutterWidth}this.styleQueue.push({$el:this.element,style:s});var q=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",p=this.options.animationOptions,o;
for(u=0,t=this.styleQueue.length;u<t;u++){o=this.styleQueue[u],o.$el[q](o.style,p)}this.styleQueue=[],v&&v.call(w),this.isLaidOut=!0},_getColumns:function(){var d=this.options.isFitWidth?this.element.parent():this.element,c=d.width();this.columnWidth=this.isFluid?this.options.columnWidth(c):this.options.columnWidth||this.$bricks.outerWidth(!0)||c,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((c+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)},_placeBrick:function(B){var A=h(B),z,y,x,w,v;
z=Math.ceil(A.outerWidth(!0)/this.columnWidth),z=Math.min(z,this.cols);if(z===1){x=this.colYs}else{y=this.cols+1-z,x=[];for(v=0;v<y;v++){w=this.colYs.slice(v,v+z),x[v]=Math.max.apply(Math,w)}}var u=Math.min.apply(Math,x),t=0;for(var s=0,r=x.length;s<r;s++){if(x[s]===u){t=s;break}}var q={top:u+this.offset.y};q[this.horizontalDirection]=this.columnWidth*t+this.offset.x,this.styleQueue.push({$el:A,style:q});var p=u+A.outerHeight(!0),b=this.cols+1-r;for(s=0;s<b;s++){this.colYs[t+s]=p}},resize:function(){var b=this.cols;
this._getColumns(),(this.isFluid||this.cols!==b)&&this._reLayout()},_reLayout:function(d){var c=this.cols;this.colYs=[];while(c--){this.colYs.push(0)}this.layout(this.$bricks,d)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(b){this.reloadItems(),this._init(b)},appended:function(f,e,o){if(e){this._filterFindBricks(f).css({top:this.element.height()});var g=this;setTimeout(function(){g._appended(f,o)},1)}else{this._appended(f,o)}},_appended:function(e,d){var f=this._getBricks(e);
this.$bricks=this.$bricks.add(f),this.layout(f,d)},remove:function(b){this.$bricks=this.$bricks.not(b),b.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""});var b=this.element[0].style;for(var a in this.originalStyle){b[a]=this.originalStyle[a]}this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),h(i).unbind(".masonry")}},h.fn.imagesLoaded=function(b){function p(){b.call(u,t)}function o(d){var e=d.target;
e.src!==r&&h.inArray(e,q)===-1&&(q.push(e),--s<=0&&(setTimeout(p),t.unbind(".imagesLoaded",o)))}var u=this,t=u.find("img").add(u.filter("img")),s=t.length,r="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",q=[];return s||p(),t.bind("load.imagesLoaded error.imagesLoaded",o).each(function(){var c=this.src;this.src=r,this.src=c}),u};var j=function(a){i.console&&i.console.error(a)};h.fn.masonry=function(b){if(typeof b=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var a=h.data(this,"masonry");
if(!a){j("cannot call methods on masonry prior to initialization; attempted to call method '"+b+"'");return}if(!h.isFunction(a[b])||b.charAt(0)==="_"){j("no such method '"+b+"' for masonry instance");return}a[b].apply(a,d)})}else{this.each(function(){var a=h.data(this,"masonry");a?(a.option(b||{}),a._init()):h.data(this,"masonry",new h.Mason(b,this))})}return this}})(window,jQuery);

/*
 * Swipe 2.0
 * Brad Birdsall
 * Copyright 2013, MIT License
 *
*/
function Swipe(k,e){var f=function(){};var s=function(A){setTimeout(A||f,0)};var z={addEventListener:!!window.addEventListener,touch:("ontouchstart" in window)||window.DocumentTouch&&document instanceof DocumentTouch,transitions:(function(A){var C=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var B in C){if(A.style[C[B]]!==undefined){return true}}return false})(document.createElement("swipe"))};if(!k){return}var c=k.children[0];var q,d,p;e=e||{};var i=parseInt(e.startSlide,10)||0;
var t=e.speed||300;e.continuous=e.continuous!==undefined?e.continuous:true;function l(){q=c.children;d=new Array(q.length);p=k.getBoundingClientRect().width||k.offsetWidth;c.style.width=(q.length*p)+"px";var B=q.length;while(B--){var A=q[B];A.style.width=p+"px";A.setAttribute("data-index",B);if(z.transitions){A.style.left=(B*-p)+"px";o(B,i>B?-p:(i<B?p:0),0)}}if(!z.transitions){c.style.left=(i*-p)+"px"}k.style.visibility="visible"}function m(){if(i){a(i-1)}else{if(e.continuous){a(q.length-1)}}}function n(){if(i<q.length-1){a(i+1)
}else{if(e.continuous){a(0)}}}function a(D,A){if(i==D){return}if(z.transitions){var C=Math.abs(i-D)-1;var B=Math.abs(i-D)/(i-D);while(C--){o((D>i?D:i)-C-1,p*B,0)}o(i,p*B,A||t);o(D,0,A||t)}else{h(i*-p,D*-p,A||t)}i=D;s(e.callback&&e.callback(i,q[i]))}function o(A,C,B){j(A,C,B);d[A]=C}function j(B,E,D){var A=q[B];var C=A&&A.style;if(!C){return}C.webkitTransitionDuration=C.MozTransitionDuration=C.msTransitionDuration=C.OTransitionDuration=C.transitionDuration=D+"ms";C.webkitTransform="translate("+E+"px,0)translateZ(0)";
C.msTransform=C.MozTransform=C.OTransform="translateX("+E+"px)"}function h(E,D,A){if(!A){c.style.left=D+"px";return}var C=+new Date;var B=setInterval(function(){var F=+new Date-C;if(F>A){c.style.left=D+"px";if(y){v()}e.transitionEnd&&e.transitionEnd.call(event,i,q[i]);clearInterval(B);return}c.style.left=(((D-E)*(Math.floor((F/A)*100)/100))+E)+"px"},4)}var y=e.auto||0;var u;function v(){u=setTimeout(n,y)}function r(){y=0;clearTimeout(u)}var g={};var w={};var x;var b={handleEvent:function(A){switch(A.type){case"touchstart":this.start(A);
break;case"touchmove":this.move(A);break;case"touchend":s(this.end(A));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":s(this.transitionEnd(A));break;case"resize":s(l.call());break}if(e.stopPropagation){A.stopPropagation()}},start:function(A){var B=A.touches[0];g={x:B.pageX,y:B.pageY,time:+new Date};x=undefined;w={};c.addEventListener("touchmove",this,false);c.addEventListener("touchend",this,false)},move:function(A){if(A.touches.length>1||A.scale&&A.scale!==1){return
}if(e.disableScroll){A.preventDefault()}var B=A.touches[0];w={x:B.pageX-g.x,y:B.pageY-g.y};if(typeof x=="undefined"){x=!!(x||Math.abs(w.x)<Math.abs(w.y))}if(!x){A.preventDefault();r();w.x=w.x/((!i&&w.x>0||i==q.length-1&&w.x<0)?(Math.abs(w.x)/p+1):1);j(i-1,w.x+d[i-1],0);j(i,w.x+d[i],0);j(i+1,w.x+d[i+1],0)}},end:function(C){var E=+new Date-g.time;var B=Number(E)<250&&Math.abs(w.x)>20||Math.abs(w.x)>p/2;var A=!i&&w.x>0||i==q.length-1&&w.x<0;var D=w.x<0;if(!x){if(B&&!A){if(D){o(i-1,-p,0);o(i,d[i]-p,t);
o(i+1,d[i+1]-p,t);i+=1}else{o(i+1,p,0);o(i,d[i]+p,t);o(i-1,d[i-1]+p,t);i+=-1}e.callback&&e.callback(i,q[i])}else{o(i-1,-p,t);o(i,0,t);o(i+1,p,t)}}c.removeEventListener("touchmove",b,false);c.removeEventListener("touchend",b,false)},transitionEnd:function(A){if(parseInt(A.target.getAttribute("data-index"),10)==i){if(y){v()}e.transitionEnd&&e.transitionEnd.call(A,i,q[i])}}};l();if(y){v()}if(z.addEventListener){if(z.touch){c.addEventListener("touchstart",b,false)}if(z.transitions){c.addEventListener("webkitTransitionEnd",b,false);
c.addEventListener("msTransitionEnd",b,false);c.addEventListener("oTransitionEnd",b,false);c.addEventListener("otransitionend",b,false);c.addEventListener("transitionend",b,false)}window.addEventListener("resize",b,false)}else{window.onresize=function(){l()}}return{setup:function(){l()},slide:function(B,A){r();a(B,A)},prev:function(){r();m()},next:function(){r();n()},getPos:function(){return i},getNumSlides:function(){return q.length},kill:function(){r();c.style.width="auto";c.style.left=0;var B=q.length;
while(B--){var A=q[B];A.style.width="100%";A.style.left=0;if(z.transitions){j(B,0,0)}}if(z.addEventListener){c.removeEventListener("touchstart",b,false);c.removeEventListener("webkitTransitionEnd",b,false);c.removeEventListener("msTransitionEnd",b,false);c.removeEventListener("oTransitionEnd",b,false);c.removeEventListener("otransitionend",b,false);c.removeEventListener("transitionend",b,false);window.removeEventListener("resize",b,false)}else{window.onresize=null}}}}if(window.jQuery||window.Zepto){(function(a){a.fn.Swipe=function(b){return this.each(function(){a(this).data("Swipe",new Swipe(a(this)[0],b))
})}})(window.jQuery||window.Zepto)};


/*!
 * FitVids 1.0
 * Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 */
(function(a){a.fn.fitVids=function(b){var c={customSelector:null};var e=document.createElement("div"),d=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];
e.className="fit-vids-style";e.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>";
d.parentNode.insertBefore(e,d);if(b){a.extend(c,b)}return this.each(function(){var f=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com']","object","embed"];if(c.customSelector){f.push(c.customSelector)}var g=a(this).find(f.join(","));g.each(function(){var l=a(this);if(this.tagName.toLowerCase()==="embed"&&l.parent("object").length||l.parent(".fluid-width-video-wrapper").length){return}var h=(this.tagName.toLowerCase()==="object"||(l.attr("height")&&!isNaN(parseInt(l.attr("height"),10))))?parseInt(l.attr("height"),10):l.height(),i=!isNaN(parseInt(l.attr("width"),10))?parseInt(l.attr("width"),10):l.width(),j=h/i;
if(!l.attr("id")){var k="fitvid"+Math.floor(Math.random()*999999);l.attr("id",k)}l.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",(j*100)+"%");l.removeAttr("height").removeAttr("width")})})}})(jQuery);

/**
 * fgnass.github.com/spin.js#v1.3
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */
(function(a,b){if(typeof exports=="object"){module.exports=b()}else{if(typeof define=="function"&&define.amd){define(b)}else{a.Spinner=b()}}})(this,function(){var C=["webkit","Moz","ms","O"],x={},q;function j(c,d){var a=document.createElement(c||"div"),f;for(f in d){a[f]=d[f]}return a}function k(c){for(var d=1,a=arguments.length;d<a;d++){c.appendChild(arguments[d])}return c}var b=function(){var a=j("style",{type:"text/css"});k(document.getElementsByTagName("head")[0],a);return a.sheet||a.styleSheet
}();function D(F,c,e,G){var r=["opacity",c,~~(F*100),e,G].join("-"),i=0.01+e/G*100,h=Math.max(1-(1-F)/c*(100-i),F),p=q.substring(0,q.indexOf("Animation")).toLowerCase(),E=p&&"-"+p+"-"||"";if(!x[r]){b.insertRule("@"+E+"keyframes "+r+"{0%{opacity:"+h+"}"+i+"%{opacity:"+F+"}"+(i+0.01)+"%{opacity:1}"+(i+c)%100+"%{opacity:"+F+"}100%{opacity:"+h+"}}",b.cssRules.length);x[r]=1}return r}function A(d,a){var f=d.style,h,c;if(f[a]!==undefined){return a}a=a.charAt(0).toUpperCase()+a.slice(1);for(c=0;c<C.length;
c++){h=C[c]+a;if(f[h]!==undefined){return h}}}function w(c,d){for(var a in d){c.style[A(c,a)||a]=d[a]}return c}function m(c){for(var d=1;d<arguments.length;d++){var a=arguments[d];for(var f in a){if(c[f]===undefined){c[f]=a[f]}}}return c}function y(a){var c={x:a.offsetLeft,y:a.offsetTop};while(a=a.offsetParent){c.x+=a.offsetLeft,c.y+=a.offsetTop}return c}var B={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:1/4,fps:20,zIndex:2000000000,className:"spinner",top:"auto",left:"auto",position:"relative"};
function g(a){if(typeof this=="undefined"){return new g(a)}this.opts=m(a||{},g.defaults,B)}g.defaults={};m(g.prototype,{spin:function(N){this.stop();var H=this,i=H.opts,d=H.el=w(j(0,{className:i.className}),{position:i.position,width:0,zIndex:i.zIndex}),O=i.radius+i.length+i.width,K,E;if(N){N.insertBefore(d,N.firstChild||null);E=y(N);K=y(d);w(d,{left:(i.left=="auto"?E.x-K.x+(N.offsetWidth>>1):parseInt(i.left,10)+O)+"px",top:(i.top=="auto"?E.y-K.y+(N.offsetHeight>>1):parseInt(i.top,10)+O)+"px"})}d.setAttribute("role","progressbar");
H.lines(d,H.opts);if(!q){var M=0,f=(i.lines-1)*(1-i.direction)/2,I,F=i.fps,o=F/i.speed,J=(1-i.opacity)/(o*i.trail/100),G=o/i.lines;(function L(){M++;for(var a=0;a<i.lines;a++){I=Math.max(1-(M+(i.lines-a)*G)%o*J,i.opacity);H.opacity(d,a*i.direction+f,I,i)}H.timeout=H.el&&setTimeout(L,~~(1000/F))})()}return H},stop:function(){var a=this.el;if(a){clearTimeout(this.timeout);if(a.parentNode){a.parentNode.removeChild(a)}this.el=undefined}return this},lines:function(h,n){var i=0,f=(n.lines-1)*(1-n.direction)/2,c;
function o(d,a){return w(j(),{position:"absolute",width:n.length+n.width+"px",height:n.width+"px",background:d,boxShadow:a,transformOrigin:"left",transform:"rotate("+~~(360/n.lines*i+n.rotate)+"deg) translate("+n.radius+"px,0)",borderRadius:(n.corners*n.width>>1)+"px"})}for(;i<n.lines;i++){c=w(j(),{position:"absolute",top:1+~(n.width/2)+"px",transform:n.hwaccel?"translate3d(0,0,0)":"",opacity:n.opacity,animation:q&&D(n.opacity,n.trail,f+i*n.direction,n.lines)+" "+1/n.speed+"s linear infinite"});if(n.shadow){k(c,w(o("#000","0 0 4px #000"),{top:2+"px"}))
}k(h,k(c,o(n.color,"0 0 1px rgba(0,0,0,.1)")))}return h},opacity:function(c,d,a){if(d<c.childNodes.length){c.childNodes[d].style.opacity=a}}});function z(){function a(c,d){return j("<"+c+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',d)}b.addRule(".spin-vml","behavior:url(#default#VML)");g.prototype.lines=function(p,n){var f=n.length+n.width,c=2*f;function G(){return w(a("group",{coordsize:c+" "+c,coordorigin:-f+" "+-f}),{width:c,height:c})}var E=-(n.width+n.length)*2+"px",h=w(G(),{position:"absolute",top:E,left:E}),t;
function F(l,i,d){k(h,k(w(G(),{rotation:360/n.lines*l+"deg",left:~~i}),k(w(a("roundrect",{arcsize:n.corners}),{width:f,height:n.width,left:n.radius,top:-n.width>>1,filter:d}),a("fill",{color:n.color,opacity:n.opacity}),a("stroke",{opacity:0}))))}if(n.shadow){for(t=1;t<=n.lines;t++){F(t,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")}}for(t=1;t<=n.lines;t++){F(t)}return k(p,h)};g.prototype.opacity=function(d,f,c,h){var l=d.firstChild;h=h.shadow&&h.lines||0;
if(l&&f+h<l.childNodes.length){l=l.childNodes[f+h];l=l&&l.firstChild;l=l&&l.firstChild;if(l){l.opacity=c}}}}var v=w(j("group"),{behavior:"url(#default#VML)"});if(!A(v,"transform")&&v.adj){z()}else{q=A(v,"animation")}return g});
(function(a){if(typeof exports=="object"){a(require("jquery"),require("spin"))}else{if(typeof define=="function"&&define.amd){define(["jquery","spin"],a)}else{if(!window.Spinner){throw new Error("Spin.js not present")}a(window.jQuery,window.Spinner)}}}(function(b,a){b.fn.spin=function(d,c){return this.each(function(){var f=b(this),e=f.data();if(e.spinner){e.spinner.stop();delete e.spinner}if(d!==false){d=b.extend({color:c||f.css("color")},b.fn.spin.presets[d]||d);e.spinner=new a(d).spin(this)}})};
b.fn.spin.presets={tiny:{lines:8,length:2,width:2,radius:3},small:{lines:8,length:4,width:3,radius:5},large:{lines:10,length:8,width:4,radius:8}}}));

/*!
 * jquery.typer.js 0.0.4 - https://github.com/yckart/jquery.typer.js
 * The typewriter effect
 *
 * Copyright (c) 2013 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/03/24
*/
(function($){
    $.fn.typer = function(text, options){
        options = $.extend({}, {
            char: '',
            delay: 2000,
            duration: 1000,
            endless: true,
            onType: $.noop,
            afterAll: $.noop,
            afterPhrase: $.noop
        }, options || text);

        text = $.isPlainObject(text) ? options.text : text;
        text = $.isArray(text) ? text : text.split(" ");

        return this.each(function(){
            var elem = $(this),
                isVal = {input:1, textarea:1}[this.tagName.toLowerCase()],
                isTag = false,
                timer,
                c = 0;

            (function typetext(i) {
                var e = ({string:1, number:1}[typeof text] ? text : text[i]) + '',
                    char = e.substr(c++, 1);

                if( char === '<' ){ isTag = true; }
                if( char === '>' ){ isTag = false; }
                elem[isVal ? "val" : "html"](e.substr(0, c) + ($.isFunction(options.char) ? options.char() : options.char || ' '));
                if(c <= e.length){
                    if( isTag ){
                        typetext(i);
                    } else {
                        timer = setTimeout(typetext, options.duration/10, i);
                    }
                    options.onType(timer);
                } else {
                    c = 0;
                    i++;

                    if (i === text.length && !options.endless) {
                        return;
                    } else if (i === text.length) {
                        i = 0;
                    }
                    timer = setTimeout(typetext, options.delay, i);
                    if(i === text.length - 1) options.afterAll(timer);
                    options.afterPhrase(timer);
                }
            })(0);
        });
    };
}(jQuery));



/**
 * Tweetie: A simple Twitter feed plugin
 * Author: Sonny T. <hi@sonnyt.com>, sonnyt.com
 */
(function($){$.fn.twittie=function(options){var settings=$.extend({'count':10,'hideReplies':false,'dateFormat':'%b/%d/%Y','template':'{{date}} - {{tweet}}'},options);var linking=function(tweet){var parts=tweet.split(' ');var twit='';for(var i=0,len=parts.length;i<len;i++){var text=parts[i];var link="https://twitter.com/#!/";if(text.indexOf('#')!==-1){text='<a href="'+link+'search/'+text.replace('#','%23').replace(/[^A-Za-z0-9]/,'')+'" target="_blank">'+text+'</a>'}if(text.indexOf('@')!==-1){text='<a href="'+link+text.replace('@','').replace(/[^A-Za-z0-9]/,'')+'" target="_blank">'+text+'</a>'}if(text.indexOf('http://')!==-1){text='<a href="'+text+'" target="_blank">'+text+'</a>'}twit+=text+' '}return twit};var dating=function(twt_date){var time=twt_date.split(' ');twt_date=new Date(Date.parse(time[1]+' '+time[2]+', '+time[5]+' '+time[3]+' UTC'));var months=['January','February','March','April','May','June','July','August','September','October','November','December'];var _date={'%d':twt_date.getDate(),'%m':twt_date.getMonth()+1,'%b':months[twt_date.getMonth()].substr(0,3),'%B':months[twt_date.getMonth()],'%y':String(twt_date.getFullYear()).slice(-2),'%Y':twt_date.getFullYear()};var date=settings.dateFormat;var format=settings.dateFormat.match(/%[dmbByY]/g);for(var i=0,len=format.length;i<len;i++){date=date.replace(format[i],_date[format[i]])}return date};var templating=function(data){var temp=settings.template;var temp_variables=['date','tweet','avatar'];for(var i=0,len=temp_variables.length;i<len;i++){temp=temp.replace(new RegExp('{{'+temp_variables[i]+'}}','gi'),data[temp_variables[i]])}return temp};this.html('<span>Loading...</span>');var that=this;$.getJSON('api/tweet.php',{count:settings.count,exclude_replies:settings.hideReplies},function(twt){that.find('span').fadeOut('fast',function(){that.html('<ul></ul>');for(var i=0;i<settings.count;i++){if(twt[i]){var temp_data={date:dating(twt[i].created_at),tweet:linking(twt[i].text),avatar:'<img src="'+twt[i].user.profile_image_url+'" />'};that.find('ul').append('<li>'+templating(temp_data)+'</li>')}else{break}}})})}})(jQuery);

/* ==============================================================
=============== Placeholder plugin ================================
============================================================== */
(function(t){"use strict";function e(t,e,r){return t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent?t.attachEvent("on"+e,r):void 0}function r(t,e){var r,n;for(r=0,n=t.length;n>r;r++)if(t[r]===e)return!0;return!1}function n(t,e){var r;t.createTextRange?(r=t.createTextRange(),r.move("character",e),r.select()):t.selectionStart&&(t.focus(),t.setSelectionRange(e,e))}function a(t,e){try{return t.type=e,!0}catch(r){return!1}}t.Placeholders={Utils:{addEventListener:e,inArray:r,moveCaret:n,changeType:a}}})(this),function(t){"use strict";function e(t){var e;return t.value===t.getAttribute(S)&&"true"===t.getAttribute(I)?(t.setAttribute(I,"false"),t.value="",t.className=t.className.replace(R,""),e=t.getAttribute(P),e&&(t.type=e),!0):!1}function r(t){var e;return""===t.value?(t.setAttribute(I,"true"),t.value=t.getAttribute(S),t.className+=" "+k,e=t.getAttribute(P),e?t.type="text":"password"===t.type&&H.changeType(t,"text")&&t.setAttribute(P,"password"),!0):!1}function n(t,e){var r,n,a,u,i;if(t&&t.getAttribute(S))e(t);else for(r=t?t.getElementsByTagName("input"):r,n=t?t.getElementsByTagName("textarea"):n,i=0,u=r.length+n.length;u>i;i++)a=r.length>i?r[i]:n[i-r.length],e(a)}function a(t){n(t,e)}function u(t){n(t,r)}function i(t){return function(){f&&t.value===t.getAttribute(S)&&"true"===t.getAttribute(I)?H.moveCaret(t,0):e(t)}}function l(t){return function(){r(t)}}function c(t){return function(e){return p=t.value,"true"===t.getAttribute(I)?!(p===t.getAttribute(S)&&H.inArray(C,e.keyCode)):void 0}}function o(t){return function(){var e;"true"===t.getAttribute(I)&&t.value!==p&&(t.className=t.className.replace(R,""),t.value=t.value.replace(t.getAttribute(S),""),t.setAttribute(I,!1),e=t.getAttribute(P),e&&(t.type=e)),""===t.value&&(t.blur(),H.moveCaret(t,0))}}function s(t){return function(){t===document.activeElement&&t.value===t.getAttribute(S)&&"true"===t.getAttribute(I)&&H.moveCaret(t,0)}}function d(t){return function(){a(t)}}function g(t){t.form&&(x=t.form,x.getAttribute(U)||(H.addEventListener(x,"submit",d(x)),x.setAttribute(U,"true"))),H.addEventListener(t,"focus",i(t)),H.addEventListener(t,"blur",l(t)),f&&(H.addEventListener(t,"keydown",c(t)),H.addEventListener(t,"keyup",o(t)),H.addEventListener(t,"click",s(t))),t.setAttribute(j,"true"),t.setAttribute(S,y),r(t)}var v,b,f,h,p,m,A,y,E,x,T,N,L,w=["text","search","url","tel","email","password","number","textarea"],C=[27,33,34,35,36,37,38,39,40,8,46],B="#ccc",k="placeholdersjs",R=RegExp("\\b"+k+"\\b"),S="data-placeholder-value",I="data-placeholder-active",P="data-placeholder-type",U="data-placeholder-submit",j="data-placeholder-bound",V="data-placeholder-focus",q="data-placeholder-live",z=document.createElement("input"),D=document.getElementsByTagName("head")[0],F=document.documentElement,G=t.Placeholders,H=G.Utils;if(void 0===z.placeholder){for(v=document.getElementsByTagName("input"),b=document.getElementsByTagName("textarea"),f="false"===F.getAttribute(V),h="false"!==F.getAttribute(q),m=document.createElement("style"),m.type="text/css",A=document.createTextNode("."+k+" { color:"+B+"; }"),m.styleSheet?m.styleSheet.cssText=A.nodeValue:m.appendChild(A),D.insertBefore(m,D.firstChild),L=0,N=v.length+b.length;N>L;L++)T=v.length>L?v[L]:b[L-v.length],y=T.getAttribute("placeholder"),y&&H.inArray(w,T.type)&&g(T);E=setInterval(function(){for(L=0,N=v.length+b.length;N>L;L++)T=v.length>L?v[L]:b[L-v.length],y=T.getAttribute("placeholder"),y&&H.inArray(w,T.type)&&(T.getAttribute(j)||g(T),(y!==T.getAttribute(S)||"password"===T.type&&!T.getAttribute(P))&&("password"===T.type&&!T.getAttribute(P)&&H.changeType(T,"text")&&T.setAttribute(P,"password"),T.value===T.getAttribute(S)&&(T.value=y),T.setAttribute(S,y)));h||clearInterval(E)},100)}G.disable=a,G.enable=u}(this);

/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {
	$.fn.appear = function(fn, options) {

		var settings = $.extend({

			//arbitrary data to pass to fn
			data: undefined,

			//call fn only on the first appear?
			one: true,

			// X & Y accuracy
			accX: 0,
			accY: 0

		}, options);

		return this.each(function() {

			var t = $(this);

			//whether the element is currently visible
			t.appeared = false;

			if (!fn) {

				//trigger the custom event
				t.trigger('appear', settings.data);
				return;
			}

			var w = $(window);

			//fires the appear event when appropriate
			var check = function() {

				//is the element hidden?
				if (!t.is(':visible')) {

					//it became hidden
					t.appeared = false;
					return;
				}

				//is the element inside the visible window?
				var a = w.scrollLeft();
				var b = w.scrollTop();
				var o = t.offset();
				var x = o.left;
				var y = o.top;

				var ax = settings.accX;
				var ay = settings.accY;
				var th = t.height();
				var wh = w.height();
				var tw = t.width();
				var ww = w.width();

				if (y + th + ay >= b &&
					y <= b + wh + ay &&
					x + tw + ax >= a &&
					x <= a + ww + ax) {

					//trigger the custom event
					if (!t.appeared) t.trigger('appear', settings.data);

				} else {

					//it scrolled out of view
					t.appeared = false;
				}
			};

			//create a modified fn with some additional logic
			var modifiedFn = function() {

				//mark the element as visible
				t.appeared = true;

				//is this supposed to happen only once?
				if (settings.one) {

					//remove the check
					w.unbind('scroll', check);
					var i = $.inArray(check, $.fn.appear.checks);
					if (i >= 0) $.fn.appear.checks.splice(i, 1);
				}

				//trigger the original fn
				fn.apply(this, arguments);
			};

			//bind the modified fn to the element
			if (settings.one) t.one('appear', settings.data, modifiedFn);
			else t.bind('appear', settings.data, modifiedFn);

			//check whenever the window scrolls
			w.scroll(check);

			//check whenever the dom changes
			$.fn.appear.checks.push(check);

			//check now
			(check)();
		});
	};

	//keep a queue of appearance checks
	$.extend($.fn.appear, {

		checks: [],
		timeout: null,

		//process the queue
		checkAll: function() {
			var length = $.fn.appear.checks.length;
			if (length > 0) while (length--) ($.fn.appear.checks[length])();
		},

		//check the queue asynchronously
		run: function() {
			if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
			$.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
		}
	});

	//run checks when these methods are called
	$.each(['append', 'prepend', 'after', 'before', 'attr',
		'removeAttr', 'addClass', 'removeClass', 'toggleClass',
		'remove', 'css', 'show', 'hide'], function(i, n) {
		var old = $.fn[n];
		if (old) {
			$.fn[n] = function() {
				var r = old.apply(this, arguments);
				$.fn.appear.run();
				return r;
			}
		}
	});

})(jQuery);
