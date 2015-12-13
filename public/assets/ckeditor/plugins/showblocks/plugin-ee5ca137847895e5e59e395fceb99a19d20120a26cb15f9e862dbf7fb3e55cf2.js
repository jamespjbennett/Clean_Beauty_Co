/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */
!function(){"use strict";var e={readOnly:1,preserveState:!0,editorFocus:!1,exec:function(e){this.toggleState(),this.refresh(e)},refresh:function(e){if(e.document){var t=this.state==CKEDITOR.TRISTATE_ON&&(e.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE||e.focusManager.hasFocus),n=t?"attachClass":"removeClass";e.editable()[n]("cke_show_blocks")}}};CKEDITOR.plugins.add("showblocks",{lang:"af,ar,bg,bn,bs,ca,cs,cy,da,de,el,en,en-au,en-ca,en-gb,eo,es,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn",icons:"showblocks,showblocks-rtl",hidpi:!0,onLoad:function(){var e,t,n,i,a,o,r=["p","div","pre","address","blockquote","h1","h2","h3","h4","h5","h6"],l=CKEDITOR.getUrl(this.path),s=!(CKEDITOR.env.ie&&CKEDITOR.env.version<9),c=s?":not([contenteditable=false]):not(.cke_show_blocks_off)":"";for(e=t=n=i="";a=r.pop();)o=r.length?",":"",e+=".cke_show_blocks "+a+c+o,n+=".cke_show_blocks.cke_contents_ltr "+a+c+o,i+=".cke_show_blocks.cke_contents_rtl "+a+c+o,t+=".cke_show_blocks "+a+c+"{background-image:url("+l+"images/block_"+a+".png)}";e+="{background-repeat:no-repeat;border:1px dotted gray;padding-top:8px}",n+="{background-position:top left;padding-left:8px}",i+="{background-position:top right;padding-right:8px}",CKEDITOR.addCss(e.concat(t,n,i)),s||CKEDITOR.addCss(".cke_show_blocks [contenteditable=false],.cke_show_blocks .cke_show_blocks_off{border:none;padding-top:0;background-image:none}.cke_show_blocks.cke_contents_rtl [contenteditable=false],.cke_show_blocks.cke_contents_rtl .cke_show_blocks_off{padding-right:0}.cke_show_blocks.cke_contents_ltr [contenteditable=false],.cke_show_blocks.cke_contents_ltr .cke_show_blocks_off{padding-left:0}")},init:function(t){function n(){i.refresh(t)}if(!t.blockless){var i=t.addCommand("showblocks",e);i.canUndo=!1,t.config.startupOutlineBlocks&&i.setState(CKEDITOR.TRISTATE_ON),t.ui.addButton&&t.ui.addButton("ShowBlocks",{label:t.lang.showblocks.toolbar,command:"showblocks",toolbar:"tools,20"}),t.on("mode",function(){i.state!=CKEDITOR.TRISTATE_DISABLED&&i.refresh(t)}),t.elementMode==CKEDITOR.ELEMENT_MODE_INLINE&&(t.on("focus",n),t.on("blur",n)),t.on("contentDom",function(){i.state!=CKEDITOR.TRISTATE_DISABLED&&i.refresh(t)})}}})}();