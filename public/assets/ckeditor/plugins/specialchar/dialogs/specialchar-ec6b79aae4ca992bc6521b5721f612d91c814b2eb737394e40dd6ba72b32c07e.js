/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("specialchar",function(e){var t,n,i=e.lang.specialchar,o=function(n){var i;n=n.data?n.data.getTarget():new CKEDITOR.dom.element(n),"a"==n.getName()&&(i=n.getChild(0).getHtml())&&(n.removeClass("cke_light_background"),t.hide(),n=e.document.createElement("span"),n.setHtml(i),e.insertText(n.getText()))},a=CKEDITOR.tools.addFunction(o),r=function(e,i){var o;if(i=i||e.data.getTarget(),"span"==i.getName()&&(i=i.getParent()),"a"==i.getName()&&(o=i.getChild(0).getHtml())){n&&s(null,n);var a=t.getContentElement("info","htmlPreview").getElement();t.getContentElement("info","charPreview").getElement().setHtml(o),a.setHtml(CKEDITOR.tools.htmlEncode(o)),i.getParent().addClass("cke_light_background"),n=i}},s=function(e,i){i=i||e.data.getTarget(),"span"==i.getName()&&(i=i.getParent()),"a"==i.getName()&&(t.getContentElement("info","charPreview").getElement().setHtml("&nbsp;"),t.getContentElement("info","htmlPreview").getElement().setHtml("&nbsp;"),i.getParent().removeClass("cke_light_background"),n=void 0)},l=CKEDITOR.tools.addFunction(function(t){t=new CKEDITOR.dom.event(t);var n,i=t.getTarget();n=t.getKeystroke();var a="rtl"==e.lang.dir;switch(n){case 38:(n=i.getParent().getParent().getPrevious())&&(n=n.getChild([i.getParent().getIndex(),0]),n.focus(),s(null,i),r(null,n)),t.preventDefault();break;case 40:(n=i.getParent().getParent().getNext())&&(n=n.getChild([i.getParent().getIndex(),0]))&&1==n.type&&(n.focus(),s(null,i),r(null,n)),t.preventDefault();break;case 32:o({data:t}),t.preventDefault();break;case a?37:39:(n=i.getParent().getNext())?(n=n.getChild(0),1==n.type?(n.focus(),s(null,i),r(null,n),t.preventDefault(!0)):s(null,i)):(n=i.getParent().getParent().getNext())&&((n=n.getChild([0,0]))&&1==n.type?(n.focus(),s(null,i),r(null,n),t.preventDefault(!0)):s(null,i));break;case a?39:37:(n=i.getParent().getPrevious())?(n=n.getChild(0),n.focus(),s(null,i),r(null,n),t.preventDefault(!0)):(n=i.getParent().getParent().getPrevious())?(n=n.getLast().getChild(0),n.focus(),s(null,i),r(null,n),t.preventDefault(!0)):s(null,i)}});return{title:i.title,minWidth:430,minHeight:280,buttons:[CKEDITOR.dialog.cancelButton],charColumns:17,onLoad:function(){for(var t,n,o=this.definition.charColumns,r=e.config.specialChars,s=CKEDITOR.tools.getNextId()+"_specialchar_table_label",d=['<table role="listbox" aria-labelledby="'+s+'" style="width: 320px; height: 100%; border-collapse: separate;" align="center" cellspacing="2" cellpadding="2" border="0">'],c=0,u=r.length;u>c;){d.push('<tr role="presentation">');for(var h=0;o>h;h++,c++){if(t=r[c]){t instanceof Array?(n=t[1],t=t[0]):(n=t.replace("&","").replace(";","").replace("#",""),n=i[n]||t);var m="cke_specialchar_label_"+c+"_"+CKEDITOR.tools.getNextNumber();d.push('<td class="cke_dark_background" style="cursor: default" role="presentation"><a href="javascript: void(0);" role="option" aria-posinset="'+(c+1)+'"',' aria-setsize="'+u+'"',' aria-labelledby="'+m+'"',' class="cke_specialchar" title="',CKEDITOR.tools.htmlEncode(n),'" onkeydown="CKEDITOR.tools.callFunction( '+l+', event, this )" onclick="CKEDITOR.tools.callFunction('+a+', this); return false;" tabindex="-1"><span style="margin: 0 auto;cursor: inherit">'+t+'</span><span class="cke_voice_label" id="'+m+'">'+n+"</span></a>")}else d.push('<td class="cke_dark_background">&nbsp;');d.push("</td>")}d.push("</tr>")}d.push("</tbody></table>",'<span id="'+s+'" class="cke_voice_label">'+i.options+"</span>"),this.getContentElement("info","charContainer").getElement().setHtml(d.join(""))},contents:[{id:"info",label:e.lang.common.generalTab,title:e.lang.common.generalTab,padding:0,align:"top",elements:[{type:"hbox",align:"top",widths:["320px","90px"],children:[{type:"html",id:"charContainer",html:"",onMouseover:r,onMouseout:s,focus:function(){var e=this.getElement().getElementsByTag("a").getItem(0);setTimeout(function(){e.focus(),r(null,e)},0)},onShow:function(){var e=this.getElement().getChild([0,0,0,0,0]);setTimeout(function(){e.focus(),r(null,e)},0)},onLoad:function(e){t=e.sender}},{type:"hbox",align:"top",widths:["100%"],children:[{type:"vbox",align:"top",children:[{type:"html",html:"<div></div>"},{type:"html",id:"charPreview",className:"cke_dark_background",style:"border:1px solid #eeeeee;font-size:28px;height:40px;width:70px;padding-top:9px;font-family:'Microsoft Sans Serif',Arial,Helvetica,Verdana;text-align:center;",html:"<div>&nbsp;</div>"},{type:"html",id:"htmlPreview",className:"cke_dark_background",style:"border:1px solid #eeeeee;font-size:14px;height:20px;width:70px;padding-top:2px;font-family:'Microsoft Sans Serif',Arial,Helvetica,Verdana;text-align:center;",html:"<div>&nbsp;</div>"}]}]}]}]}]}});