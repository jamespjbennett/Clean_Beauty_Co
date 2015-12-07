/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */
!function(){function e(e){if(!e||e.type!=CKEDITOR.NODE_ELEMENT||"form"!=e.getName())return[];for(var t=[],n=["style","className"],i=0;i<n.length;i++){var a=n[i],o=e.$.elements.namedItem(a);if(o){var r=new CKEDITOR.dom.element(o);t.push([r,r.nextSibling]),r.remove()}}return t}function t(e,t){if(e&&e.type==CKEDITOR.NODE_ELEMENT&&"form"==e.getName()&&t.length>0)for(var n=t.length-1;n>=0;n--){var i=t[n][0],a=t[n][1];a?i.insertBefore(a):i.appendTo(e)}}function n(n,i){var a=e(n),o={},r=n.$;return i||(o["class"]=r.className||"",r.className=""),o.inline=r.style.cssText||"",i||(r.style.cssText="position: static; overflow: visible"),t(a),o}function i(n,i){var a=e(n),o=n.$;"class"in i&&(o.className=i["class"]),"inline"in i&&(o.style.cssText=i.inline),t(a)}function a(e){var t=CKEDITOR.instances;for(var n in t){var i=t[n];if("wysiwyg"==i.mode&&!i.readOnly){var a=i.document.getBody();a.setAttribute("contentEditable",!1),a.setAttribute("contentEditable",!0)}}e.editable().hasFocus&&(e.toolbox.focus(),e.focus())}CKEDITOR.plugins.add("maximize",{lang:"af,ar,bg,bn,bs,ca,cs,cy,da,de,el,en-au,en-ca,en-gb,en,eo,es,et,eu,fa,fi,fo,fr-ca,fr,gl,gu,he,hi,hr,hu,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,pl,pt-br,pt,ro,ru,sk,sl,sr-latn,sr,sv,th,tr,ug,uk,vi,zh-cn,zh",icons:"maximize",init:function(e){function t(){var t=c.getViewPaneSize();e.resize(t.width,t.height,null,!0)}if(e.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE){var o,r,l,s=e.lang,d=CKEDITOR.document,c=d.getWindow(),u=CKEDITOR.TRISTATE_OFF;e.addCommand("maximize",{modes:{wysiwyg:!CKEDITOR.env.iOS,source:!CKEDITOR.env.iOS},readOnly:1,editorFocus:!1,exec:function(){var p=e.container.getChild(1),m=e.ui.space("contents");if("wysiwyg"==e.mode){var h=e.getSelection();o=h&&h.getRanges(),r=c.getScrollPosition()}else{var g=e.editable().$;o=!CKEDITOR.env.ie&&[g.selectionStart,g.selectionEnd],r=[g.scrollLeft,g.scrollTop]}if(this.state==CKEDITOR.TRISTATE_OFF){c.on("resize",t),l=c.getScrollPosition();for(var f=e.container;f=f.getParent();)f.setCustomData("maximize_saved_styles",n(f)),f.setStyle("z-index",e.config.baseFloatZIndex-5);m.setCustomData("maximize_saved_styles",n(m,!0)),p.setCustomData("maximize_saved_styles",n(p,!0));var b={overflow:CKEDITOR.env.webkit?"":"hidden",width:0,height:0};d.getDocumentElement().setStyles(b),!CKEDITOR.env.gecko&&d.getDocumentElement().setStyle("position","fixed"),!(CKEDITOR.env.gecko&&CKEDITOR.env.quirks)&&d.getBody().setStyles(b),CKEDITOR.env.ie?setTimeout(function(){c.$.scrollTo(0,0)},0):c.$.scrollTo(0,0),p.setStyle("position",CKEDITOR.env.gecko&&CKEDITOR.env.quirks?"fixed":"absolute"),p.$.offsetLeft,p.setStyles({"z-index":e.config.baseFloatZIndex-5,left:"0px",top:"0px"}),p.addClass("cke_maximized"),t();var v=p.getDocumentPosition();p.setStyles({left:-1*v.x+"px",top:-1*v.y+"px"}),CKEDITOR.env.gecko&&a(e)}else if(this.state==CKEDITOR.TRISTATE_ON){c.removeListener("resize",t);for(var T=[m,p],E=0;E<T.length;E++)i(T[E],T[E].getCustomData("maximize_saved_styles")),T[E].removeCustomData("maximize_saved_styles");for(f=e.container;f=f.getParent();)i(f,f.getCustomData("maximize_saved_styles")),f.removeCustomData("maximize_saved_styles");CKEDITOR.env.ie?setTimeout(function(){c.$.scrollTo(l.x,l.y)},0):c.$.scrollTo(l.x,l.y),p.removeClass("cke_maximized"),CKEDITOR.env.webkit&&(p.setStyle("display","inline"),setTimeout(function(){p.setStyle("display","block")},0)),e.fire("resize")}this.toggleState();var C=this.uiItems[0];if(C){var y=this.state==CKEDITOR.TRISTATE_OFF?s.maximize.maximize:s.maximize.minimize,k=CKEDITOR.document.getById(C._.id);k.getChild(1).setHtml(y),k.setAttribute("title",y),k.setAttribute("href",'javascript:void("'+y+'");')}if("wysiwyg"==e.mode)if(o){CKEDITOR.env.gecko&&a(e),e.getSelection().selectRanges(o);var R=e.getSelection().getStartElement();R&&R.scrollIntoView(!0)}else c.$.scrollTo(r.x,r.y);else o&&(g.selectionStart=o[0],g.selectionEnd=o[1]),g.scrollLeft=r[0],g.scrollTop=r[1];o=r=null,u=this.state,e.fire("maximize",this.state)},canUndo:!1}),e.ui.addButton&&e.ui.addButton("Maximize",{label:s.maximize.maximize,command:"maximize",toolbar:"tools,10"}),e.on("mode",function(){var t=e.getCommand("maximize");t.setState(t.state==CKEDITOR.TRISTATE_DISABLED?CKEDITOR.TRISTATE_DISABLED:u)},null,null,100)}}})}();