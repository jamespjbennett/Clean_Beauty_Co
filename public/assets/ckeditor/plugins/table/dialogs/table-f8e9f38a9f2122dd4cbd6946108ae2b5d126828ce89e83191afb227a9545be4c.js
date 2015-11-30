/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
!function(){function e(e){for(var t,n=0,i=0,a=0,o=e.$.rows.length;o>a;a++){t=e.$.rows[a];for(var r,l=n=0,s=t.cells.length;s>l;l++)r=t.cells[l],n+=r.colSpan;n>i&&(i=n)}return i}function t(e){return function(){var t=this.getValue(),t=!!(CKEDITOR.dialog.validate.integer()(t)&&t>0);return t||(alert(e),this.select()),t}}function n(n,o){var r=function(e){return new CKEDITOR.dom.element(e,n.document)},l=n.editable(),s=n.plugins.dialogadvtab;return{title:n.lang.table.title,minWidth:310,minHeight:CKEDITOR.env.ie?310:280,onLoad:function(){var e=this,t=e.getContentElement("advanced","advStyles");t&&t.on("change",function(){var t=this.getStyle("width",""),n=e.getContentElement("info","txtWidth");n&&n.setValue(t,!0),t=this.getStyle("height",""),(n=e.getContentElement("info","txtHeight"))&&n.setValue(t,!0)})},onShow:function(){var e,t=n.getSelection(),i=t.getRanges(),a=this.getContentElement("info","txtRows"),r=this.getContentElement("info","txtCols"),l=this.getContentElement("info","txtWidth"),s=this.getContentElement("info","txtHeight");"tableProperties"==o&&((t=t.getSelectedElement())&&t.is("table")?e=t:0<i.length&&(CKEDITOR.env.webkit&&i[0].shrink(CKEDITOR.NODE_ELEMENT),e=n.elementPath(i[0].getCommonAncestor(!0)).contains("table",1)),this._.selectedElement=e),e?(this.setupContent(e),a&&a.disable(),r&&r.disable()):(a&&a.enable(),r&&r.enable()),l&&l.onChange(),s&&s.onChange()},onOk:function(){var e=n.getSelection(),t=this._.selectedElement&&e.createBookmarks(),i=this._.selectedElement||r("table"),a={};if(this.commitContent(a,i),a.info){if(a=a.info,!this._.selectedElement)for(var o=i.append(r("tbody")),l=parseInt(a.txtRows,10)||0,s=parseInt(a.txtCols,10)||0,c=0;l>c;c++)for(var d=o.append(r("tr")),u=0;s>u;u++)d.append(r("td")).appendBogus();if(l=a.selHeaders,!i.$.tHead&&("row"==l||"both"==l)){for(d=new CKEDITOR.dom.element(i.$.createTHead()),o=i.getElementsByTag("tbody").getItem(0),o=o.getElementsByTag("tr").getItem(0),c=0;c<o.getChildCount();c++)s=o.getChild(c),s.type==CKEDITOR.NODE_ELEMENT&&!s.data("cke-bookmark")&&(s.renameNode("th"),s.setAttribute("scope","col"));d.append(o.remove())}if(null!==i.$.tHead&&"row"!=l&&"both"!=l){for(d=new CKEDITOR.dom.element(i.$.tHead),o=i.getElementsByTag("tbody").getItem(0),u=o.getFirst();0<d.getChildCount();){for(o=d.getFirst(),c=0;c<o.getChildCount();c++)s=o.getChild(c),s.type==CKEDITOR.NODE_ELEMENT&&(s.renameNode("td"),s.removeAttribute("scope"));o.insertBefore(u)}d.remove()}if(!this.hasColumnHeaders&&("col"==l||"both"==l))for(d=0;d<i.$.rows.length;d++)s=new CKEDITOR.dom.element(i.$.rows[d].cells[0]),s.renameNode("th"),s.setAttribute("scope","row");if(this.hasColumnHeaders&&"col"!=l&&"both"!=l)for(c=0;c<i.$.rows.length;c++)d=new CKEDITOR.dom.element(i.$.rows[c]),"tbody"==d.getParent().getName()&&(s=new CKEDITOR.dom.element(d.$.cells[0]),s.renameNode("td"),s.removeAttribute("scope"));a.txtHeight?i.setStyle("height",a.txtHeight):i.removeStyle("height"),a.txtWidth?i.setStyle("width",a.txtWidth):i.removeStyle("width"),i.getAttribute("style")||i.removeAttribute("style")}if(this._.selectedElement)try{e.selectBookmarks(t)}catch(m){}else n.insertElement(i),setTimeout(function(){var e=new CKEDITOR.dom.element(i.$.rows[0].cells[0]),t=n.createRange();t.moveToPosition(e,CKEDITOR.POSITION_AFTER_START),t.select()},0)},contents:[{id:"info",label:n.lang.table.title,elements:[{type:"hbox",widths:[null,null],styles:["vertical-align:top"],children:[{type:"vbox",padding:0,children:[{type:"text",id:"txtRows","default":3,label:n.lang.table.rows,required:!0,controlStyle:"width:5em",validate:t(n.lang.table.invalidRows),setup:function(e){this.setValue(e.$.rows.length)},commit:a},{type:"text",id:"txtCols","default":2,label:n.lang.table.columns,required:!0,controlStyle:"width:5em",validate:t(n.lang.table.invalidCols),setup:function(t){this.setValue(e(t))},commit:a},{type:"html",html:"&nbsp;"},{type:"select",id:"selHeaders",requiredContent:"th","default":"",label:n.lang.table.headers,items:[[n.lang.table.headersNone,""],[n.lang.table.headersRow,"row"],[n.lang.table.headersColumn,"col"],[n.lang.table.headersBoth,"both"]],setup:function(e){var t=this.getDialog();t.hasColumnHeaders=!0;for(var n=0;n<e.$.rows.length;n++){var i=e.$.rows[n].cells[0];if(i&&"th"!=i.nodeName.toLowerCase()){t.hasColumnHeaders=!1;break}}this.setValue(null!==e.$.tHead?t.hasColumnHeaders?"both":"row":t.hasColumnHeaders?"col":"")},commit:a},{type:"text",id:"txtBorder",requiredContent:"table[border]","default":n.filter.check("table[border]")?1:0,label:n.lang.table.border,controlStyle:"width:3em",validate:CKEDITOR.dialog.validate.number(n.lang.table.invalidBorder),setup:function(e){this.setValue(e.getAttribute("border")||"")},commit:function(e,t){this.getValue()?t.setAttribute("border",this.getValue()):t.removeAttribute("border")}},{id:"cmbAlign",type:"select",requiredContent:"table[align]","default":"",label:n.lang.common.align,items:[[n.lang.common.notSet,""],[n.lang.common.alignLeft,"left"],[n.lang.common.alignCenter,"center"],[n.lang.common.alignRight,"right"]],setup:function(e){this.setValue(e.getAttribute("align")||"")},commit:function(e,t){this.getValue()?t.setAttribute("align",this.getValue()):t.removeAttribute("align")}}]},{type:"vbox",padding:0,children:[{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtWidth",requiredContent:"table{width}",controlStyle:"width:5em",label:n.lang.common.width,title:n.lang.common.cssLengthTooltip,"default":n.filter.check("table{width}")?500>l.getSize("width")?"100%":500:0,getValue:i,validate:CKEDITOR.dialog.validate.cssLength(n.lang.common.invalidCssLength.replace("%1",n.lang.common.width)),onChange:function(){var e=this.getDialog().getContentElement("advanced","advStyles");e&&e.updateStyle("width",this.getValue())},setup:function(e){this.setValue(e.getStyle("width"))},commit:a}]},{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtHeight",requiredContent:"table{height}",controlStyle:"width:5em",label:n.lang.common.height,title:n.lang.common.cssLengthTooltip,"default":"",getValue:i,validate:CKEDITOR.dialog.validate.cssLength(n.lang.common.invalidCssLength.replace("%1",n.lang.common.height)),onChange:function(){var e=this.getDialog().getContentElement("advanced","advStyles");e&&e.updateStyle("height",this.getValue())},setup:function(e){(e=e.getStyle("height"))&&this.setValue(e)},commit:a}]},{type:"html",html:"&nbsp;"},{type:"text",id:"txtCellSpace",requiredContent:"table[cellspacing]",controlStyle:"width:3em",label:n.lang.table.cellSpace,"default":n.filter.check("table[cellspacing]")?1:0,validate:CKEDITOR.dialog.validate.number(n.lang.table.invalidCellSpacing),setup:function(e){this.setValue(e.getAttribute("cellSpacing")||"")},commit:function(e,t){this.getValue()?t.setAttribute("cellSpacing",this.getValue()):t.removeAttribute("cellSpacing")}},{type:"text",id:"txtCellPad",requiredContent:"table[cellpadding]",controlStyle:"width:3em",label:n.lang.table.cellPad,"default":n.filter.check("table[cellpadding]")?1:0,validate:CKEDITOR.dialog.validate.number(n.lang.table.invalidCellPadding),setup:function(e){this.setValue(e.getAttribute("cellPadding")||"")},commit:function(e,t){this.getValue()?t.setAttribute("cellPadding",this.getValue()):t.removeAttribute("cellPadding")}}]}]},{type:"html",align:"right",html:""},{type:"vbox",padding:0,children:[{type:"text",id:"txtCaption",requiredContent:"caption",label:n.lang.table.caption,setup:function(e){if(this.enable(),e=e.getElementsByTag("caption"),0<e.count()){var e=e.getItem(0),t=e.getFirst(CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT));t&&!t.equals(e.getBogus())?(this.disable(),this.setValue(e.getText())):(e=CKEDITOR.tools.trim(e.getText()),this.setValue(e))}},commit:function(e,t){if(this.isEnabled()){var i=this.getValue(),a=t.getElementsByTag("caption");if(i)0<a.count()?(a=a.getItem(0),a.setHtml("")):(a=new CKEDITOR.dom.element("caption",n.document),t.getChildCount()?a.insertBefore(t.getFirst()):a.appendTo(t)),a.append(new CKEDITOR.dom.text(i,n.document));else if(0<a.count())for(i=a.count()-1;i>=0;i--)a.getItem(i).remove()}}},{type:"text",id:"txtSummary",requiredContent:"table[summary]",label:n.lang.table.summary,setup:function(e){this.setValue(e.getAttribute("summary")||"")},commit:function(e,t){this.getValue()?t.setAttribute("summary",this.getValue()):t.removeAttribute("summary")}}]}]},s&&s.createAdvancedTab(n,null,"table")]}}var i=CKEDITOR.tools.cssLength,a=function(e){var t=this.id;e.info||(e.info={}),e.info[t]=this.getValue()};CKEDITOR.dialog.add("table",function(e){return n(e,"table")}),CKEDITOR.dialog.add("tableProperties",function(e){return n(e,"tableProperties")})}();