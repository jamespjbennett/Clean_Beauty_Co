!function(){CKEDITOR.plugins.add("richfile",{init:function(e){e._.insertImagefn=CKEDITOR.tools.addFunction(function(e,t){this.insertHtml('<img src="'+e+'" alt="" data-rich-file-id="'+t+'" />')},e),e._.insertFilefn=CKEDITOR.tools.addFunction(function(e,t,n){this.insertHtml('<a href="'+e+'" data-rich-file-id="'+t+'">'+n+"</a>")},e),e.on("doubleclick",function(t){var n=t.data.element;!n.is("img")||n.data("cke-realelement")||n.isReadOnly()||e.execCommand("insertRichImage")}),e.on("destroy",function(){CKEDITOR.tools.removeFunction(this._.insertImagefn)}),e.addCommand("insertRichImage",{exec:function(e){var t={};t.CKEditor=e.name,t.CKEditorFuncNum=e._.insertImagefn,t.default_style=e.config.default_style,t.allowed_styles=e.config.allowed_styles,t.insert_many=e.config.insert_many,t.type="image",t.scoped=e.config.scoped||!1,1==t.scoped&&(t.scope_type=e.config.scope_type,t.scope_id=e.config.scope_id),t.viewMode=e.config.view_mode||"grid";var n=addQueryString(e.config.richBrowserUrl,t);e.popup(n,860,500)}}),e.addCommand("insertRichFile",{exec:function(e){var t={};t.CKEditor=e.name,t.CKEditorFuncNum=e._.insertFilefn,t.default_style="original",t.allowed_styles="original",t.insert_many=e.config.insert_many,t.type="file",t.scoped=e.config.scoped||!1,1==t.scoped&&(t.scope_type=e.config.scope_type,t.scope_id=e.config.scope_id),t.viewMode=e.config.view_mode||"list";var n=addQueryString(e.config.richBrowserUrl,t);e.popup(n,860,500)}}),e.ui.addButton("richImage",{label:"Browse and upload images",command:"insertRichImage",icon:"/assets/rich/images-fe70129b0e058b594e278d2ad8c4dbdb8ea6a2b7c0948fd99848298a3f8589fa.png"}),e.ui.addButton("richFile",{label:"Browse and upload files",command:"insertRichFile",icon:"/assets/rich/files-33279e27eceb7d8a598bf80618617ddf96f7df1c0e5c26ccb8d279f59dc00d88.png"})}})}();