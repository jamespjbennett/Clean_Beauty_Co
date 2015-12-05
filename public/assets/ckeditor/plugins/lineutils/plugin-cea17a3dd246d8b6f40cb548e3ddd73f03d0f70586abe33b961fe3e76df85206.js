/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */
"use strict";!function(){function e(e,t){CKEDITOR.tools.extend(this,{editor:e,editable:e.editable(),doc:e.document,win:e.window},t,!0),this.frame=this.win.getFrame(),this.inline=this.editable.isInline(),this.target=this[this.inline?"editable":"doc"]}function t(e,t){CKEDITOR.tools.extend(this,t,{editor:e},!0)}function n(e,t){var n=e.editable();CKEDITOR.tools.extend(this,{editor:e,editable:n,doc:e.document,win:e.window,container:CKEDITOR.document.getBody(),winTop:CKEDITOR.document.getWindow()},t,!0),this.hidden={},this.visible={},this.inline=n.isInline(),this.inline||(this.frame=this.win.getFrame()),this.queryViewport();var i=CKEDITOR.tools.bind(this.queryViewport,this),o=CKEDITOR.tools.bind(this.hideVisible,this),a=CKEDITOR.tools.bind(this.removeAll,this);n.attachListener(this.winTop,"resize",i),n.attachListener(this.winTop,"scroll",i),n.attachListener(this.winTop,"resize",o),n.attachListener(this.win,"scroll",o),n.attachListener(this.inline?n:this.frame,"mouseout",function(e){var t=e.data.$.clientX,n=e.data.$.clientY;this.queryViewport(),(t<=this.rect.left||t>=this.rect.right||n<=this.rect.top||n>=this.rect.bottom)&&this.hideVisible(),(0>=t||t>=this.winTopPane.width||0>=n||n>=this.winTopPane.height)&&this.hideVisible()},this),n.attachListener(e,"resize",i),n.attachListener(e,"mode",a),e.on("destroy",a),this.lineTpl=new CKEDITOR.template(u).output({lineStyle:CKEDITOR.tools.writeCssText(CKEDITOR.tools.extend({},c,this.lineStyle,!0)),tipLeftStyle:CKEDITOR.tools.writeCssText(CKEDITOR.tools.extend({},d,{left:"0px","border-left-color":"red","border-width":"6px 0 6px 6px"},this.tipCss,this.tipLeftStyle,!0)),tipRightStyle:CKEDITOR.tools.writeCssText(CKEDITOR.tools.extend({},d,{right:"0px","border-right-color":"red","border-width":"6px 6px 6px 0"},this.tipCss,this.tipRightStyle,!0))})}function i(e,t){return e&t}function o(e){return e&&e.type==CKEDITOR.NODE_ELEMENT}function a(e){return!(!p[e.getComputedStyle("float")]&&!p[e.getAttribute("align")])}function r(e){return!!h[e.getComputedStyle("position")]}function s(e){return o(e)&&"true"==e.getAttribute("contenteditable")}function l(e){return o(e)&&!a(e)&&!r(e)}CKEDITOR.plugins.add("lineutils"),CKEDITOR.LINEUTILS_BEFORE=1,CKEDITOR.LINEUTILS_AFTER=2,CKEDITOR.LINEUTILS_INSIDE=4,e.prototype={start:function(e){var t,n,i,o=this,a=this.editor,r=this.doc,s=CKEDITOR.tools.eventsBuffer(50,function(){a.readOnly||"wysiwyg"!=a.mode||(o.relations={},t=new CKEDITOR.dom.element(r.$.elementFromPoint(n,i)),o.traverseSearch(t),isNaN(n+i)||o.pixelSearch(t,n,i),e&&e(o.relations,n,i))});this.listener=this.editable.attachListener(this.target,"mousemove",function(e){n=e.data.$.clientX,i=e.data.$.clientY,s.input()}),this.editable.attachListener(this.inline?this.editable:this.frame,"mouseout",function(){s.reset()})},stop:function(){this.listener&&this.listener.removeListener()},getRange:function(){var e={};return e[CKEDITOR.LINEUTILS_BEFORE]=CKEDITOR.POSITION_BEFORE_START,e[CKEDITOR.LINEUTILS_AFTER]=CKEDITOR.POSITION_AFTER_END,e[CKEDITOR.LINEUTILS_INSIDE]=CKEDITOR.POSITION_AFTER_START,function(t){var n=this.editor.createRange();return n.moveToPosition(this.relations[t.uid].element,e[t.type]),n}}(),store:function(){function e(e,t,n){var i=e.getUniqueId();i in n?n[i].type|=t:n[i]={element:e,type:t}}return function(t,n){var o;i(n,CKEDITOR.LINEUTILS_AFTER)&&l(o=t.getNext())&&o.isVisible()&&(e(o,CKEDITOR.LINEUTILS_BEFORE,this.relations),n^=CKEDITOR.LINEUTILS_AFTER),i(n,CKEDITOR.LINEUTILS_INSIDE)&&l(o=t.getFirst())&&o.isVisible()&&(e(o,CKEDITOR.LINEUTILS_BEFORE,this.relations),n^=CKEDITOR.LINEUTILS_INSIDE),e(t,n,this.relations)}}(),traverseSearch:function(e){var t,n,i;do if(i=e.$["data-cke-expando"],!(i&&i in this.relations)){if(e.equals(this.editable))return;if(l(e))for(t in this.lookups)(n=this.lookups[t](e))&&this.store(e,n)}while(!s(e)&&(e=e.getParent()))},pixelSearch:function(){function e(e,n,i,o,a){for(var r,s=i,d=0;a(s);){if(s+=o,25==++d)return;if(r=this.doc.$.elementFromPoint(n,s))if(r!=e){if(t(e,r)&&(d=0,l(r=new CKEDITOR.dom.element(r))))return r}else d=0}}var t=CKEDITOR.env.ie||CKEDITOR.env.webkit?function(e,t){return e.contains(t)}:function(e,t){return!!(16&e.compareDocumentPosition(t))};return function(t,n,i){var o=this.win.getViewPaneSize().height,a=e.call(this,t.$,n,i,-1,function(e){return e>0}),r=e.call(this,t.$,n,i,1,function(e){return o>e});if(a)for(this.traverseSearch(a);!a.getParent().equals(t);)a=a.getParent();if(r)for(this.traverseSearch(r);!r.getParent().equals(t);)r=r.getParent();for(;(a||r)&&(a&&(a=a.getNext(l)),a&&!a.equals(r))&&(this.traverseSearch(a),r&&(r=r.getPrevious(l)),r&&!r.equals(a));)this.traverseSearch(r)}}(),greedySearch:function(){this.relations={};for(var e,t,n,i=this.editable.getElementsByTag("*"),o=0;e=i.getItem(o++);)if(!e.equals(this.editable)&&(e.hasAttribute("contenteditable")||!e.isReadOnly())&&l(e)&&e.isVisible())for(n in this.lookups)(t=this.lookups[n](e))&&this.store(e,t);return this.relations}},t.prototype={locate:function(){function e(e,t){var n=e.element[t===CKEDITOR.LINEUTILS_BEFORE?"getPrevious":"getNext"]();return n&&l(n)?(e.siblingRect=n.getClientRect(),t==CKEDITOR.LINEUTILS_BEFORE?(e.siblingRect.bottom+e.elementRect.top)/2:(e.elementRect.bottom+e.siblingRect.top)/2):t==CKEDITOR.LINEUTILS_BEFORE?e.elementRect.top:e.elementRect.bottom}var t,n;return function(o){this.locations={};for(n in o)t=o[n],t.elementRect=t.element.getClientRect(),i(t.type,CKEDITOR.LINEUTILS_BEFORE)&&this.store(n,CKEDITOR.LINEUTILS_BEFORE,e(t,CKEDITOR.LINEUTILS_BEFORE)),i(t.type,CKEDITOR.LINEUTILS_AFTER)&&this.store(n,CKEDITOR.LINEUTILS_AFTER,e(t,CKEDITOR.LINEUTILS_AFTER)),i(t.type,CKEDITOR.LINEUTILS_INSIDE)&&this.store(n,CKEDITOR.LINEUTILS_INSIDE,(t.elementRect.top+t.elementRect.bottom)/2);return this.locations}}(),sort:function(){function e(e){return Math.abs(e-t[o][a])}var t,n,i,o,a,r;return function(s,l){t=this.locations,n=[];for(o in t)for(a in t[o])if(i=e(s),n.length){for(r=0;r<n.length;r++)if(i<n[r].dist){n.splice(r,0,{uid:+o,type:a,dist:i});break}r==n.length&&n.push({uid:+o,type:a,dist:i})}else n.push({uid:+o,type:a,dist:i});return"undefined"!=typeof l?n.slice(0,l):n}}(),store:function(e,t,n){this.locations[e]||(this.locations[e]={}),this.locations[e][t]=n}};var d={display:"block",width:"0px",height:"0px","border-color":"transparent","border-style":"solid",position:"absolute",top:"-6px"},c={height:"0px","border-top":"1px dashed red",position:"absolute","z-index":9999},u='<div data-cke-lineutils-line="1" class="cke_reset_all" style="{lineStyle}"><span style="{tipLeftStyle}">&nbsp;</span><span style="{tipRightStyle}">&nbsp;</span></div>';n.prototype={removeAll:function(){var e;for(e in this.hidden)this.hidden[e].remove(),delete this.hidden[e];for(e in this.visible)this.visible[e].remove(),delete this.visible[e]},hideLine:function(e){var t=e.getUniqueId();e.hide(),this.hidden[t]=e,delete this.visible[t]},showLine:function(e){var t=e.getUniqueId();e.show(),this.visible[t]=e,delete this.hidden[t]},hideVisible:function(){for(var e in this.visible)this.hideLine(this.visible[e])},placeLine:function(e,t){var n,i,o;if(n=this.getStyle(e.uid,e.type)){for(o in this.visible)if(this.visible[o].getCustomData("hash")!==this.hash){i=this.visible[o];break}if(!i)for(o in this.hidden)if(this.hidden[o].getCustomData("hash")!==this.hash){this.showLine(i=this.hidden[o]);break}i||this.showLine(i=this.addLine()),i.setCustomData("hash",this.hash),this.visible[i.getUniqueId()]=i,i.setStyles(n),t&&t(i)}},getStyle:function(e,t){var n,i=this.relations[e],o=this.locations[e][t],a={};if(a.width=i.siblingRect?Math.max(i.siblingRect.width,i.elementRect.width):i.elementRect.width,a.top=this.inline?o+this.winTopScroll.y:this.rect.top+this.winTopScroll.y+o,a.top-this.winTopScroll.y<this.rect.top||a.top-this.winTopScroll.y>this.rect.bottom)return!1;this.inline?a.left=i.elementRect.left:(i.elementRect.left>0?a.left=this.rect.left+i.elementRect.left:(a.width+=i.elementRect.left,a.left=this.rect.left),(n=a.left+a.width-(this.rect.left+this.winPane.width))>0&&(a.width-=n)),a.left+=this.winTopScroll.x;for(var r in a)a[r]=CKEDITOR.tools.cssLength(a[r]);return a},addLine:function(){var e=CKEDITOR.dom.element.createFromHtml(this.lineTpl);return e.appendTo(this.container),e},prepare:function(e,t){this.relations=e,this.locations=t,this.hash=Math.random()},cleanup:function(){var e;for(var t in this.visible)e=this.visible[t],e.getCustomData("hash")!==this.hash&&this.hideLine(e)},queryViewport:function(){this.winPane=this.win.getViewPaneSize(),this.winTopScroll=this.winTop.getScrollPosition(),this.winTopPane=this.winTop.getViewPaneSize(),this.rect=this.inline?this.editable.getClientRect():this.frame.getClientRect()}};var p={left:1,right:1,center:1},h={absolute:1,fixed:1};CKEDITOR.plugins.lineutils={finder:e,locator:t,liner:n}}();