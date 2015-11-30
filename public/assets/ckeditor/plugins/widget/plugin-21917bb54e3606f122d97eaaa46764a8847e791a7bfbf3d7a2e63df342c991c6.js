/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */
"use strict";!function(){function e(e){this.editor=e,this.registered={},this.instances={},this.selected=[],this.focused=null,this.widgetHoldingFocusedEditable=null,this._={nextId:0,upcasts:[],upcastCallbacks:[],filters:{}},N(this),_(this),L(this),x(this),A(this),K(this)}function t(e,n,i,a,o){var r=e.editor;CKEDITOR.tools.extend(this,a,{editor:r,id:n,inline:"span"==i.getParent().getName(),element:i,data:CKEDITOR.tools.extend({},"function"==typeof a.defaults?a.defaults():a.defaults),dataReady:!1,inited:!1,ready:!1,edit:t.prototype.edit,focusedEditable:null,definition:a,repository:e,draggable:a.draggable!==!1,_:{downcastFn:a.downcast&&"string"==typeof a.downcast?a.downcasts[a.downcast]:a.downcast}},!0),e.fire("instanceCreated",this),J(this,a),this.init&&this.init(),this.inited=!0,Q(this,o),this.isInited()&&r.editable().contains(this.wrapper)&&(this.ready=!0,this.fire("ready"))}function n(e,t,n){CKEDITOR.dom.element.call(this,t.$),this.editor=e;var i=this.filter=n.filter;CKEDITOR.dtd[this.getName()].p?(this.enterMode=i?i.getAllowedEnterMode(e.enterMode):e.enterMode,this.shiftEnterMode=i?i.getAllowedEnterMode(e.shiftEnterMode,!0):e.shiftEnterMode):this.enterMode=this.shiftEnterMode=CKEDITOR.ENTER_BR}function i(e){var t,n,i,a=e.widgets.registered;for(n in a)t=a[n],i=t.button,i&&e.ui.addButton&&e.ui.addButton(CKEDITOR.tools.capitalize(t.name,!0),{label:i,command:t.name,toolbar:"insert,10"})}function a(e,t){e.addCommand(t.name,{exec:function(){function n(){e.widgets.finalizeCreation(s)}var i=e.widgets.focused;if(i&&i.name==t.name)i.edit();else if(t.insert)t.insert();else if(t.template){var a,o="function"==typeof t.defaults?t.defaults():t.defaults,r=CKEDITOR.dom.element.createFromHtml(t.template.output(o)),l=e.widgets.wrapElement(r,t.name),s=new CKEDITOR.dom.documentFragment(l.getDocument());if(s.append(l),a=e.widgets.initOn(r,t),!a)return void n();var c=a.once("edit",function(t){t.data.dialog?a.once("dialog",function(t){var i,o,r=t.data;i=r.once("ok",n,null,null,20),o=r.once("cancel",function(){e.widgets.destroy(a,!0)}),r.once("hide",function(){i.removeListener(),o.removeListener()})}):n()},null,null,999);a.edit(),c.removeListener()}},refresh:function(e,t){this.setState(p(e.editable(),t.blockLimit)?CKEDITOR.TRISTATE_DISABLED:CKEDITOR.TRISTATE_OFF)},context:"div",allowedContent:t.allowedContent,requiredContent:t.requiredContent,contentForms:t.contentForms,contentTransformations:t.contentTransformations})}function o(e,t){var n,i=t.upcast;if(i)if("string"==typeof i)for(n=i.split(",");n.length;)e._.upcasts.push([t.upcasts[n.pop()],t.name]);else e._.upcasts.push([i,t.name])}function r(e,t){e.focused=null,t.isInited()&&(e.fire("widgetBlurred",{widget:t}),t.setFocused(!1))}function l(e){var t=e.data;if("wysiwyg"==this.editor.mode){var n,i,a,o,r=this.editor.editable(),l=this.instances;if(r){for(i in l)r.contains(l[i].wrapper)||this.destroy(l[i],!0);if(t&&t.initOnlyNew)n=this.initOnAll();else{var s=r.find(".cke_widget_wrapper");for(n=[],i=0,a=s.count();a>i;i++)o=s.getItem(i),this.getByElement(o,!0)||m(o,k)||(o.addClass("cke_widget_new"),n.push(this.initOn(o.getFirst(b))))}t&&t.focusInited&&1==n.length&&n[0].focus()}}}function s(e){var t=e.parent;t.type==CKEDITOR.NODE_ELEMENT&&t.attributes["data-cke-widget-wrapper"]&&t.replaceWith(e)}function c(e,t){for(var n,i,a=t.find(".cke_widget_wrapper"),o=0,r=a.count();r>o;++o)n=a.getItem(o),i=n.getFirst(b),i.type==CKEDITOR.NODE_ELEMENT&&i.data("widget")?(i.replace(n),e.wrapElement(i)):n.remove()}function d(e,t,n){if(!n.allowedContent)return null;var i=this._.filters[e];i||(this._.filters[e]=i={});var a=i[t];return a||(i[t]=a=new CKEDITOR.filter(n.allowedContent)),a}function u(e){var t=[],n=e._.upcasts,i=e._.upcastCallbacks;return{toBeWrapped:t,iterator:function(e){var a,o,r,l,s,c;if("data-cke-widget-wrapper"in e.attributes)return e=e.getFirst(f),e&&t.push([e]),!1;if("data-widget"in e.attributes)return t.push([e]),!1;if(s=n.length){if(e.attributes["data-cke-widget-upcasted"])return!1;for(l=0,c=i.length;c>l;++l)if(i[l](e)===!1)return;for(l=0;s>l;++l)if(a=n[l],r={},o=a[0](e,r))return o instanceof CKEDITOR.htmlParser.element&&(e=o),e.attributes["data-cke-widget-data"]=encodeURIComponent(JSON.stringify(r)),e.attributes["data-cke-widget-upcasted"]=1,t.push([e,a[1]]),!1}}}}function m(e,t){for(var n=e;n=n.getParent();)if(t(n))return!0;return!1}function p(e,t){return!t||t.equals(e)?null:C(t)?t:p(e,t.getParent())}function h(e){return{tabindex:-1,contenteditable:"false","data-cke-widget-wrapper":1,"data-cke-filter":"off","class":"cke_widget_wrapper cke_widget_new cke_widget_"+(e?"inline":"block")}}function g(e,t,n){if(e.type==CKEDITOR.NODE_ELEMENT){var i=CKEDITOR.dtd[e.name];if(i&&!i[n.name]){var a=e.split(t),o=e.parent;return t=a.getIndex(),e.children.length||(t-=1,e.remove()),a.children.length||a.remove(),g(o,t,n)}}e.add(n,t)}function f(e){return e.type==CKEDITOR.NODE_ELEMENT&&!!e.attributes["data-widget"]}function b(e){return e.type==CKEDITOR.NODE_ELEMENT&&e.hasAttribute("data-widget")}function v(e,t){return"boolean"==typeof e.inline?e.inline:!!CKEDITOR.dtd.$inline[t]}function T(e){return e.type==CKEDITOR.NODE_ELEMENT&&e.attributes["data-cke-widget-wrapper"]}function E(e){return e.type==CKEDITOR.NODE_ELEMENT&&e.hasAttribute("data-cke-widget-wrapper")}function C(e){return e.type==CKEDITOR.NODE_ELEMENT&&e.hasAttribute("data-cke-widget-editable")}function k(e){return e.hasAttribute("data-cke-temp")}function y(e){return e.type==CKEDITOR.NODE_ELEMENT&&e.hasAttribute("data-cke-widget-drag-handler")}function R(e,t,n){t.focus(),e.fire("saveSnapshot"),e.fire("lockSnapshot",{dontUpdate:!0}),n.select();var i=t.wrapper.getOuterHtml();t.wrapper.remove(),e.widgets.destroy(t,!0),e.execCommand("paste",i),e.fire("unlockSnapshot")}function I(e,t){var n,i=t.data.$,a=e.createRange();if(t.data.testRange)return t.data.testRange;if(document.caretRangeFromPoint)n=e.document.$.caretRangeFromPoint(i.clientX,i.clientY),a.setStart(CKEDITOR.dom.node(n.startContainer),n.startOffset),a.collapse(!0);else if(i.rangeParent)a.setStart(CKEDITOR.dom.node(i.rangeParent),i.rangeOffset),a.collapse(!0);else{if(!document.body.createTextRange)return null;n=e.document.getBody().$.createTextRange(),n.moveToPoint(i.clientX,i.clientY);var o="cke-temp-"+(new Date).getTime();n.pasteHTML('<span id="'+o+'">\u200b</span>');var r=e.document.getById(o);a.moveToPosition(r,CKEDITOR.POSITION_BEFORE_START),r.remove()}return a}function D(e,t){var n,i=e.focusedEditable;if(t==CKEDITOR.CTRL+65){var a=i.getBogus();return n=e.editor.createRange(),n.selectNodeContents(i),a&&n.setEndAt(a,CKEDITOR.POSITION_BEFORE_START),n.select(),!1}if(8==t||46==t){var o=e.editor.getSelection().getRanges();return n=o[0],!(1==o.length&&n.collapsed&&n.checkBoundaryOfElement(i,CKEDITOR[8==t?"START":"END"]))}}function O(e,t,n,i){var a=e.editor;if(a.fire("lockSnapshot"),n){var o=n.data("cke-widget-editable"),r=t.editables[o];e.widgetHoldingFocusedEditable=t,t.focusedEditable=r,n.addClass("cke_widget_editable_focused"),r.filter&&a.setActiveFilter(r.filter),a.setActiveEnterMode(r.enterMode,r.shiftEnterMode)}else i||t.focusedEditable.removeClass("cke_widget_editable_focused"),t.focusedEditable=null,e.widgetHoldingFocusedEditable=null,a.setActiveFilter(null),a.setActiveEnterMode(null,null);a.fire("unlockSnapshot")}function w(e){e.contextMenu&&e.contextMenu.addListener(function(t){var n=e.widgets.getByElement(t,!0);return n?n.fire("contextMenu",{}):void 0})}function S(e,t){return CKEDITOR.tools.trim(t)}function A(e){var t=e.editor,n=CKEDITOR.plugins.lineutils;t.on("contentDom",function(){var i=t.editable(),a=CKEDITOR.env.ie&&CKEDITOR.env.version<9||i.isInline()?i:t.document;i.attachListener(a,"drop",function(n){var i,a,o,r=n.data.$.dataTransfer.getData("text");if(r){try{i=JSON.parse(r)}catch(l){return}"cke-widget"==i.type&&(n.data.preventDefault(),i.editor==t.name&&(a=e.instances[i.id])&&(o=I(t,n),o&&(CKEDITOR.env.gecko?setTimeout(R,0,t,a,o):R(t,a,o))))}}),CKEDITOR.tools.extend(e,{finder:new n.finder(t,{lookups:{"default":function(e){if(!e.is(CKEDITOR.dtd.$listItem)&&e.is(CKEDITOR.dtd.$block)){for(;e;){if(C(e))return;e=e.getParent()}return CKEDITOR.LINEUTILS_BEFORE|CKEDITOR.LINEUTILS_AFTER}}}}),locator:new n.locator(t),liner:new n.liner(t,{lineStyle:{cursor:"move !important","border-top-color":"#666"},tipLeftStyle:{"border-left-color":"#666"},tipRightStyle:{"border-right-color":"#666"}})},!0)})}function L(e){var t=e.editor;t.on("contentDom",function(){var n,i,a=t.editable(),o=a.isInline()?a:t.document;a.attachListener(o,"mousedown",function(t){var a=t.data.getTarget();if(!a.type)return!1;if(n=e.getByElement(a),i=0,n){if(n.inline&&a.type==CKEDITOR.NODE_ELEMENT&&a.hasAttribute("data-cke-widget-drag-handler"))return void(i=1);p(n.wrapper,a)?n=null:(t.data.preventDefault(),CKEDITOR.env.ie||n.focus())}}),a.attachListener(o,"mouseup",function(){n&&i&&(i=0,n.focus())}),CKEDITOR.env.ie&&a.attachListener(o,"mouseup",function(){n&&setTimeout(function(){n.focus(),n=null})})}),t.on("doubleclick",function(t){var n=e.getByElement(t.data.element);if(n&&!p(n.wrapper,t.data.element))return n.fire("doubleclick",{element:t.data.element})},null,null,1)}function x(e){var t=e.editor;t.on("key",function(t){var n,i=e.focused,a=e.widgetHoldingFocusedEditable;return i?n=i.fire("key",{keyCode:t.data.keyCode}):a&&(n=D(a,t.data.keyCode)),n},null,null,1)}function K(e){function t(t){e.focused&&j(e.focused,"cut"==t.name)}var n=e.editor;n.on("contentDom",function(){var e=n.editable();e.attachListener(e,"copy",t),e.attachListener(e,"cut",t)})}function _(e){var t=e.editor;t.on("selectionCheck",function(){e.fire("checkSelection")}),e.on("checkSelection",e.checkSelection,e),t.on("selectionChange",function(n){var i=p(t.editable(),n.data.selection.getStartElement()),a=i&&e.getByElement(i),o=e.widgetHoldingFocusedEditable;o?o===a&&o.focusedEditable.equals(i)||(O(e,o,null),a&&i&&O(e,a,i)):a&&i&&O(e,a,i)}),t.on("dataReady",function(){z(e).commit()}),t.on("blur",function(){var t;(t=e.focused)&&r(e,t),(t=e.widgetHoldingFocusedEditable)&&O(e,t,null)})}function N(e){B(e),P(e),e.on("checkWidgets",l),e.editor.on("contentDomInvalidated",e.checkWidgets,e)}function P(e){var t=e.editor,n={};t.on("toDataFormat",function(t){var i=CKEDITOR.tools.getNextNumber(),a=[];t.data.downcastingSessionId=i,n[i]=a,t.data.dataValue.forEach(function(t){var n,i,o=t.attributes;if("data-cke-widget-id"in o)n=e.instances[o["data-cke-widget-id"]],n&&(i=t.getFirst(f),a.push({wrapper:t,element:i,widget:n,editables:{}}),"1"!=i.attributes["data-cke-widget-keep-attr"]&&delete i.attributes["data-widget"]);else if("data-cke-widget-editable"in o)return a[a.length-1].editables[o["data-cke-widget-editable"]]=t,!1},CKEDITOR.NODE_ELEMENT,!0)},null,null,8),t.on("toDataFormat",function(e){if(e.data.downcastingSessionId)for(var t,i,a,o,r,l,s=n[e.data.downcastingSessionId];t=s.shift();){i=t.widget,a=t.element,o=i._.downcastFn&&i._.downcastFn.call(i,a);for(l in t.editables)r=t.editables[l],delete r.attributes.contenteditable,r.setHtml(i.editables[l].getData());o||(o=a),t.wrapper.replaceWith(o)}},null,null,13),t.on("contentDomUnload",function(){e.destroyAll(!0)})}function B(e){function t(){a.fire("lockSnapshot"),e.checkWidgets({initOnlyNew:!0,focusInited:n}),a.fire("unlockSnapshot")}var n,i,a=e.editor;a.on("toHtml",function(t){var i,a=u(e);for(t.data.dataValue.forEach(a.iterator,CKEDITOR.NODE_ELEMENT,!0);i=a.toBeWrapped.pop();)s(i[0]),e.wrapElement(i[0],i[1]);n=1==t.data.dataValue.children.length&&T(t.data.dataValue.children[0])},null,null,8),a.on("dataReady",function(){i&&c(e,a.editable()),i=0,e.destroyAll(!0),e.initOnAll()}),a.on("loadSnapshot",function(t){/data-cke-widget/.test(t.data)&&(i=1),e.destroyAll(!0)},null,null,9),a.on("paste",function(e){e.data.dataValue=e.data.dataValue.replace(it,S)}),a.on("insertText",t,null,null,999),a.on("insertHtml",t,null,null,999)}function z(e){var t=e.selected,n=[],i=t.slice(0),a=null;return{select:function(e){CKEDITOR.tools.indexOf(t,e)<0&&n.push(e);var a=CKEDITOR.tools.indexOf(i,e);return a>=0&&i.splice(a,1),this},focus:function(e){return a=e,this},commit:function(){var o,l=e.focused!==a;for(e.editor.fire("lockSnapshot"),l&&(o=e.focused)&&r(e,o);o=i.pop();)t.splice(CKEDITOR.tools.indexOf(t,o),1),o.isInited()&&o.setSelected(!1);for(l&&a&&(e.focused=a,e.fire("widgetFocused",{widget:a}),a.setFocused(!0));o=n.pop();)t.push(o),o.setSelected(!0);e.editor.fire("unlockSnapshot")}}}function F(e,t,n){var i,a=0,o=H(t),r=e.data.classes||{};if(o){for(r=CKEDITOR.tools.clone(r);i=o.pop();)n?r[i]||(a=r[i]=1):r[i]&&(delete r[i],a=1);a&&e.setData("classes",r)}}function M(e){e.cancel()}function j(e,t){var n=e.editor,i=n.document;if(!i.getById("cke_copybin")){var a=n.blockless||CKEDITOR.env.ie?"span":"div",o=i.createElement(a),r=i.createElement(a),l=CKEDITOR.env.ie&&CKEDITOR.env.version<9;r.setAttributes({id:"cke_copybin","data-cke-temp":"1"}),o.setStyles({position:"absolute",width:"1px",height:"1px",overflow:"hidden"}),o.setStyle("ltr"==n.config.contentsLangDirection?"left":"right","-5000px"),o.setHtml('<span data-cke-copybin-start="1">\u200b</span>'+e.wrapper.getOuterHtml()+'<span data-cke-copybin-end="1">\u200b</span>'),n.fire("saveSnapshot"),n.fire("lockSnapshot"),r.append(o),n.editable().append(r);var s=n.on("selectionChange",M,null,null,0),c=e.repository.on("checkSelection",M,null,null,0);if(l)var d=i.getDocumentElement().$,u=d.scrollTop;var m=n.createRange();m.selectNodeContents(o),m.select(),l&&(d.scrollTop=u),setTimeout(function(){t||e.focus(),r.remove(),s.removeListener(),c.removeListener(),n.fire("unlockSnapshot"),t&&(e.repository.del(e),n.fire("saveSnapshot"))},100)}}function H(e){var t=e.getDefinition().attributes,n=t&&t["class"];return n?n.split(/\s+/):null}function $(){var e=CKEDITOR.document.getActive(),t=this.editor,n=t.editable();(n.isInline()?n:t.document.getWindow().getFrame()).equals(e)&&t.focusManager.focus(n)}function q(){CKEDITOR.env.gecko&&this.editor.unlockSelection(),CKEDITOR.env.webkit||(this.editor.forceNextSelectionCheck(),this.editor.selectionChange(1))}function U(e){var t=null;e.on("data",function(){var e,n=this.data.classes;if(t!=n){for(e in t)n&&n[e]||this.removeClass(e);for(e in n)this.addClass(e);t=n}})}function V(e){if(e.draggable){var t,n=e.editor,i=e.wrapper.findOne(".cke_widget_drag_handler_container");i?t=i.findOne("img"):(i=new CKEDITOR.dom.element("span",n.document),i.setAttributes({"class":"cke_reset cke_widget_drag_handler_container",style:"background:rgba(220,220,220,0.5);background-image:url("+n.plugins.widget.path+"images/handle.png)"}),t=new CKEDITOR.dom.element("img",n.document),t.setAttributes({"class":"cke_reset cke_widget_drag_handler","data-cke-widget-drag-handler":"1",src:CKEDITOR.tools.transparentImageData,width:nt,title:n.lang.widget.move,height:nt}),e.inline&&t.setAttribute("draggable","true"),i.append(t),e.wrapper.append(i)),e.wrapper.on("mouseenter",e.updateDragHandlerPosition,e),setTimeout(function(){e.on("data",e.updateDragHandlerPosition,e)},50),e.inline?t.on("dragstart",function(t){t.data.$.dataTransfer.setData("text",JSON.stringify({type:"cke-widget",editor:n.name,id:e.id}))}):t.on("mousedown",W,e),e.dragHandlerContainer=i}}function W(){function e(){var e;for(u.reset();e=s.pop();)e.removeListener();G.call(this,c)}var t,n,i=this.repository.finder,a=this.repository.locator,o=this.repository.liner,r=this.editor,l=r.editable(),s=[],c=[],d=i.greedySearch(),u=CKEDITOR.tools.eventsBuffer(50,function(){t=a.locate(d),c=a.sort(n,1),c.length&&(o.prepare(d,t),o.placeLine(c[0]),o.cleanup())});l.addClass("cke_widget_dragging"),s.push(l.on("mousemove",function(e){n=e.data.$.clientY,u.input()})),s.push(r.document.once("mouseup",e,this)),s.push(CKEDITOR.document.once("mouseup",e,this))}function G(e){var t=this.repository.finder,n=this.repository.liner,i=this.editor,a=this.editor.editable();if(!CKEDITOR.tools.isEmpty(n.visible)){var o=t.getRange(e[0]);this.focus(),i.fire("saveSnapshot"),i.fire("lockSnapshot",{dontUpdate:1}),i.getSelection().reset(),a.insertElementIntoRange(this.wrapper,o),this.focus(),i.fire("unlockSnapshot"),i.fire("saveSnapshot")}a.removeClass("cke_widget_dragging"),n.hideVisible()}function Y(e){var t,n,i=e.editables;if(e.editables={},e.editables)for(t in i)n=i[t],e.initEditable(t,"string"==typeof n?{selector:n}:n)}function Z(e){if(e.mask){var t=e.wrapper.findOne(".cke_widget_mask");t||(t=new CKEDITOR.dom.element("img",e.editor.document),t.setAttributes({src:CKEDITOR.tools.transparentImageData,"class":"cke_reset cke_widget_mask"}),e.wrapper.append(t)),e.mask=t}}function X(e){if(e.parts){var t,n,i={};for(n in e.parts)t=e.wrapper.findOne(e.parts[n]),i[n]=t;e.parts=i}}function J(e,t){et(e),X(e),Y(e),Z(e),V(e),U(e),CKEDITOR.env.ie&&CKEDITOR.env.version<9&&e.wrapper.on("dragstart",function(t){var n=t.data.getTarget();p(e,n)||e.inline&&y(n)||t.data.preventDefault()}),e.wrapper.removeClass("cke_widget_new"),e.element.addClass("cke_widget_element"),e.on("key",function(t){var n=t.data.keyCode;if(13==n)e.edit();else{if(n==CKEDITOR.CTRL+67||n==CKEDITOR.CTRL+88)return void j(e,n==CKEDITOR.CTRL+88);if(n in at||CKEDITOR.CTRL&n||CKEDITOR.ALT&n)return}return!1},null,null,999),e.on("doubleclick",function(){e.edit()}),t.data&&e.on("data",t.data),t.edit&&e.on("edit",t.edit)}function Q(e,t){var n=e.element.data("cke-widget-data");n&&e.setData(JSON.parse(decodeURIComponent(n))),t&&e.setData(t),e.data.classes||e.setData("classes",e.getClasses()),e.dataReady=!0,tt(e),e.fire("data",e.data)}function et(e){var t=e.wrapper=e.element.getParent();t.setAttribute("data-cke-widget-id",e.id)}function tt(e){e.element.data("cke-widget-data",encodeURIComponent(JSON.stringify(e.data)))}var nt=15;CKEDITOR.plugins.add("widget",{lang:"ar,ca,cs,cy,de,el,en,en-gb,eo,es,fa,fi,fr,gl,he,hr,hu,it,ja,km,ko,nb,nl,no,pl,pt,pt-br,ru,sl,sv,tt,uk,vi,zh,zh-cn",requires:"lineutils,clipboard",onLoad:function(){CKEDITOR.addCss(".cke_widget_wrapper{position:relative;outline:none}.cke_widget_inline{display:inline-block}.cke_widget_wrapper:hover>.cke_widget_element{outline:2px solid yellow;cursor:default}.cke_widget_wrapper:hover .cke_widget_editable{outline:2px solid yellow}.cke_widget_wrapper.cke_widget_focused>.cke_widget_element,.cke_widget_wrapper .cke_widget_editable.cke_widget_editable_focused{outline:2px solid #ace}.cke_widget_editable{cursor:text}.cke_widget_drag_handler_container{position:absolute;width:"+nt+"px;height:0;left:-9999px;opacity:0.75;transition:height 0s 0.2s;line-height:0}.cke_widget_wrapper:hover>.cke_widget_drag_handler_container{height:"+nt+"px;transition:none}.cke_widget_drag_handler_container:hover{opacity:1}img.cke_widget_drag_handler{cursor:move;width:"+nt+"px;height:"+nt+"px;display:inline-block}.cke_widget_mask{position:absolute;top:0;left:0;width:100%;height:100%;display:block}.cke_editable.cke_widget_dragging, .cke_editable.cke_widget_dragging *{cursor:move !important}")},beforeInit:function(t){t.widgets=new e(t)},afterInit:function(e){i(e),w(e)}}),e.prototype={MIN_SELECTION_CHECK_INTERVAL:500,add:function(e,t){return t=CKEDITOR.tools.prototypedCopy(t),t.name=e,t._=t._||{},this.editor.fire("widgetDefinition",t),t.template&&(t.template=new CKEDITOR.template(t.template)),a(this.editor,t),o(this,t),this.registered[e]=t,t},addUpcastCallback:function(e){this._.upcastCallbacks.push(e)},checkSelection:function(){var e,t=this.editor.getSelection(),n=t.getSelectedElement(),i=z(this);if(n&&(e=this.getByElement(n,!0)))return i.focus(e).select(e).commit();var a=t.getRanges()[0];if(!a||a.collapsed)return i.commit();var o,r=new CKEDITOR.dom.walker(a);for(r.evaluator=E;o=r.next();)i.select(this.getByElement(o));i.commit()},checkWidgets:function(e){this.fire("checkWidgets",CKEDITOR.tools.copy(e||{}))},del:function(e){if(this.focused===e){var t,n=e.editor,i=n.createRange();(t=i.moveToClosestEditablePosition(e.wrapper,!0))||(t=i.moveToClosestEditablePosition(e.wrapper,!1)),t&&n.getSelection().selectRanges([i])}e.wrapper.remove(),this.destroy(e,!0)},destroy:function(e,t){this.widgetHoldingFocusedEditable===e&&O(this,e,null,t),e.destroy(t),delete this.instances[e.id],this.fire("instanceDestroyed",e)},destroyAll:function(e){var t,n=this.instances;for(var i in n)t=n[i],this.destroy(t,e)},finalizeCreation:function(e){var t=e.getFirst();if(t&&E(t)){this.editor.insertElement(t);var n=this.getByElement(t);n.ready=!0,n.fire("ready"),n.focus()}},getByElement:function(e,t){if(!e)return null;var n;for(var i in this.instances)if(n=this.instances[i].wrapper,n.equals(e)||!t&&n.contains(e))return this.instances[i];return null},initOn:function(e,n,i){if(n?"string"==typeof n&&(n=this.registered[n]):n=this.registered[e.data("widget")],!n)return null;var a=this.wrapElement(e,n.name);if(a){if(a.hasClass("cke_widget_new")){var o=new t(this,this._.nextId++,e,n,i);return o.isInited()?(this.instances[o.id]=o,o):null}return this.getByElement(e)}return null},initOnAll:function(e){for(var t,n=(e||this.editor.editable()).find(".cke_widget_new"),i=[],a=n.count();a--;)t=this.initOn(n.getItem(a).getFirst(b)),t&&i.push(t);return i},parseElementClasses:function(e){if(!e)return null;e=CKEDITOR.tools.trim(e).split(/\s+/);for(var t,n={},i=0;t=e.pop();)-1==t.indexOf("cke_")&&(n[t]=i=1);return i?n:null},wrapElement:function(e,t){var n,i,a=null;if(e instanceof CKEDITOR.dom.element){if(n=this.registered[t||e.data("widget")],!n)return null;if(a=e.getParent(),a&&a.type==CKEDITOR.NODE_ELEMENT&&a.data("cke-widget-wrapper"))return a;e.hasAttribute("data-cke-widget-keep-attr")||e.data("cke-widget-keep-attr",e.data("widget")?1:0),t&&e.data("widget",t),i=v(n,e.getName()),a=new CKEDITOR.dom.element(i?"span":"div"),a.setAttributes(h(i)),a.data("cke-display-name",n.pathName?n.pathName:e.getName()),e.getParent(!0)&&a.replace(e),e.appendTo(a)}else if(e instanceof CKEDITOR.htmlParser.element){if(n=this.registered[t||e.attributes["data-widget"]],!n)return null;if(a=e.parent,a&&a.type==CKEDITOR.NODE_ELEMENT&&a.attributes["data-cke-widget-wrapper"])return a;"data-cke-widget-keep-attr"in e.attributes||(e.attributes["data-cke-widget-keep-attr"]=e.attributes["data-widget"]?1:0),t&&(e.attributes["data-widget"]=t),i=v(n,e.name),a=new CKEDITOR.htmlParser.element(i?"span":"div",h(i)),a.attributes["data-cke-display-name"]=n.pathName?n.pathName:e.name;var o,r=e.parent;r&&(o=e.getIndex(),e.remove()),a.add(e),r&&g(r,o,a)}return a},_tests_getNestedEditable:p,_tests_createEditableFilter:d},CKEDITOR.event.implementOn(e.prototype),t.prototype={addClass:function(e){this.element.addClass(e)},applyStyle:function(e){F(this,e,1)},checkStyleActive:function(e){var t,n=H(e);if(!n)return!1;for(;t=n.pop();)if(!this.hasClass(t))return!1;return!0},destroy:function(e){this.editor;if(this.fire("destroy"),this.editables)for(var t in this.editables)this.destroyEditable(t,e);e||("0"==this.element.data("cke-widget-keep-attr")&&this.element.removeAttribute("data-widget"),this.element.removeAttributes(["data-cke-widget-data","data-cke-widget-keep-attr"]),this.element.removeClass("cke_widget_element"),this.element.replace(this.wrapper)),this.wrapper=null},destroyEditable:function(e,t){var n=this.editables[e];n.removeListener("focus",q),n.removeListener("blur",$),this.editor.focusManager.remove(n),t||(n.removeClass("cke_widget_editable"),n.removeClass("cke_widget_editable_focused"),n.removeAttributes(["contenteditable","data-cke-widget-editable","data-cke-enter-mode"])),delete this.editables[e]},edit:function(){var e={dialog:this.dialog},t=this;this.fire("edit",e)!==!1&&e.dialog&&this.editor.openDialog(e.dialog,function(e){var n,i;t.fire("dialog",e)!==!1&&(n=e.on("show",function(){e.setupContent(t)}),i=e.on("ok",function(){var n,i=t.on("data",function(e){n=1,e.cancel()},null,null,0);t.editor.fire("saveSnapshot"),e.commitContent(t),i.removeListener(),n&&(t.fire("data",t.data),t.editor.fire("saveSnapshot"))}),e.once("hide",function(){n.removeListener(),i.removeListener()}))})},getClasses:function(){return this.repository.parseElementClasses(this.element.getAttribute("class"))},hasClass:function(e){return this.element.hasClass(e)},initEditable:function(e,t){var i=this.wrapper.findOne(t.selector);return i&&i.is(CKEDITOR.dtd.$editable)?(i=new n(this.editor,i,{filter:d.call(this.repository,this.name,e,t)}),this.editables[e]=i,i.setAttributes({contenteditable:"true","data-cke-widget-editable":e,"data-cke-enter-mode":i.enterMode}),i.filter&&i.data("cke-filter",i.filter.id),i.addClass("cke_widget_editable"),i.removeClass("cke_widget_editable_focused"),t.pathName&&i.data("cke-display-name",t.pathName),this.editor.focusManager.add(i),i.on("focus",q,this),CKEDITOR.env.ie&&i.on("blur",$,this),i.setData(i.getHtml()),!0):!1},isInited:function(){return!(!this.wrapper||!this.inited)},isReady:function(){return this.isInited()&&this.ready},focus:function(){var e=this.editor.getSelection();e&&e.fake(this.wrapper),this.editor.focus()},removeClass:function(e){this.element.removeClass(e)},removeStyle:function(e){F(this,e,0)},setData:function(e,t){var n=this.data,i=0;if("string"==typeof e)n[e]!==t&&(n[e]=t,i=1);else{var a=e;for(e in a)n[e]!==a[e]&&(i=1,n[e]=a[e])}return i&&this.dataReady&&(tt(this),this.fire("data",n)),this},setFocused:function(e){return this.wrapper[e?"addClass":"removeClass"]("cke_widget_focused"),this.fire(e?"focus":"blur"),this},setSelected:function(e){return this.wrapper[e?"addClass":"removeClass"]("cke_widget_selected"),this.fire(e?"select":"deselect"),this},updateDragHandlerPosition:function(){var e=this.editor,t=this.element.$,n=this._.dragHandlerOffset,i={x:t.offsetLeft,y:t.offsetTop-nt};if(!n||i.x!=n.x||i.y!=n.y){var a=e.checkDirty();e.fire("lockSnapshot"),this.dragHandlerContainer.setStyles({top:i.y+"px",left:i.x+"px"}),e.fire("unlockSnapshot"),!a&&e.resetDirty(),this._.dragHandlerOffset=i}}},CKEDITOR.event.implementOn(t.prototype),n.prototype=CKEDITOR.tools.extend(CKEDITOR.tools.prototypedCopy(CKEDITOR.dom.element.prototype),{setData:function(e){e=this.editor.dataProcessor.toHtml(e,{context:this.getName(),filter:this.filter,enterMode:this.enterMode}),this.setHtml(e)},getData:function(){return this.editor.dataProcessor.toDataFormat(this.getHtml(),{context:this.getName(),filter:this.filter,enterMode:this.enterMode})}});var it=new RegExp('^(?:<(?:div|span)(?: data-cke-temp="1")?(?: id="cke_copybin")?(?: data-cke-temp="1")?>)?(?:<(?:div|span)(?: style="[^"]+")?>)?<span [^>]*data-cke-copybin-start="1"[^>]*>.?</span>([\\s\\S]+)<span [^>]*data-cke-copybin-end="1"[^>]*>.?</span>(?:</(?:div|span)>)?(?:</(?:div|span)>)?$'),at={37:1,38:1,39:1,40:1,8:1,46:1};!function(){function e(){}function t(e,t,n){if(!n)return!1;if(!this.checkElement(e,n))return!1;var i=n.widgets.getByElement(e,!0);return i&&i.checkStyleActive(this)}CKEDITOR.style.addCustomHandler({type:"widget",setup:function(e){this.widget=e.widget},apply:function(e){e instanceof CKEDITOR.editor&&this.checkApplicable(e.elementPath(),e)&&e.widgets.focused.applyStyle(this)},remove:function(e){e instanceof CKEDITOR.editor&&this.checkApplicable(e.elementPath(),e)&&e.widgets.focused.removeStyle(this)},checkActive:function(e,t){return this.checkElementMatch(e.lastElement,0,t)},checkApplicable:function(e,t){return t instanceof CKEDITOR.editor?this.checkElement(e.lastElement,t):!1},checkElementMatch:t,checkElementRemovable:t,checkElement:function(e){if(!E(e))return!1;var t=e.getFirst(b);return t&&t.data("widget")==this.widget},buildPreview:function(e){return e||this._.definition.name},toAllowedContentRules:function(e){if(!e)return null;var t,n=e.widgets.registered[this.widget],i={};return n?n.styleableElements?(t=this.getClassesArray())?(i[n.styleableElements]={classes:t,propertiesOnly:!0},i):null:n.styleToAllowedContentRules?n.styleToAllowedContentRules(this):null:null},getClassesArray:function(){var e=this._.definition.attributes&&this._.definition.attributes["class"];return e?CKEDITOR.tools.trim(e).split(/\s+/):null},applyToRange:e,removeFromRange:e,applyToObject:e})}(),CKEDITOR.plugins.widget=t,t.repository=e,t.nestedEditable=n}();