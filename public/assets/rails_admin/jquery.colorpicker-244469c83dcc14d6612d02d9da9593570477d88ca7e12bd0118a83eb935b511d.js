!function(e){var t=function(){var t=65,n='<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>',i={eventName:"click",onShow:function(){},onBeforeShow:function(){},onHide:function(){},onChange:function(){},onSubmit:function(){},color:"ff0000",livePreview:!0,flat:!1},o=function(t,n){var i=Y(t);e(n).data("colorpicker").fields.eq(1).val(i.r).end().eq(2).val(i.g).end().eq(3).val(i.b).end()},r=function(t,n){e(n).data("colorpicker").fields.eq(4).val(t.h).end().eq(5).val(t.s).end().eq(6).val(t.b).end()},a=function(t,n){e(n).data("colorpicker").fields.eq(0).val(F(t)).end()},s=function(t,n){e(n).data("colorpicker").selector.css("backgroundColor","#"+F({h:t.h,s:100,b:100})),e(n).data("colorpicker").selectorIndic.css({left:parseInt(150*t.s/100,10),top:parseInt(150*(100-t.b)/100,10)})},l=function(t,n){e(n).data("colorpicker").hue.css("top",parseInt(150-150*t.h/360,10))},d=function(t,n){e(n).data("colorpicker").currentColor.css("backgroundColor","#"+F(t))},c=function(t,n){e(n).data("colorpicker").newColor.css("backgroundColor","#"+F(t))},u=function(n){var i=n.charCode||n.keyCode||-1;if(i>t&&90>=i||32==i)return!1;var o=e(this).parent().parent();o.data("colorpicker").livePreview===!0&&h.apply(this)},h=function(t){var n,i=e(this).parent().parent();i.data("colorpicker").color=n=this.parentNode.className.indexOf("_hex")>0?N(x(this.value)):this.parentNode.className.indexOf("_hsb")>0?K({h:parseInt(i.data("colorpicker").fields.eq(4).val(),10),s:parseInt(i.data("colorpicker").fields.eq(5).val(),10),b:parseInt(i.data("colorpicker").fields.eq(6).val(),10)}):A(L({r:parseInt(i.data("colorpicker").fields.eq(1).val(),10),g:parseInt(i.data("colorpicker").fields.eq(2).val(),10),b:parseInt(i.data("colorpicker").fields.eq(3).val(),10)})),t&&(o(n,i.get(0)),a(n,i.get(0)),r(n,i.get(0))),s(n,i.get(0)),l(n,i.get(0)),c(n,i.get(0)),i.data("colorpicker").onChange.apply(i,[n,F(n),Y(n)])},f=function(){var t=e(this).parent().parent();t.data("colorpicker").fields.parent().removeClass("colorpicker_focus")},m=function(){t=this.parentNode.className.indexOf("_hex")>0?70:65,e(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus"),e(this).parent().addClass("colorpicker_focus")},p=function(t){var n=e(this).parent().find("input").focus(),i={el:e(this).parent().addClass("colorpicker_slider"),max:this.parentNode.className.indexOf("_hsb_h")>0?360:this.parentNode.className.indexOf("_hsb")>0?100:255,y:t.pageY,field:n,val:parseInt(n.val(),10),preview:e(this).parent().parent().data("colorpicker").livePreview};e(document).bind("mouseup",i,_),e(document).bind("mousemove",i,g)},g=function(e){return e.data.field.val(Math.max(0,Math.min(e.data.max,parseInt(e.data.val+e.pageY-e.data.y,10)))),e.data.preview&&h.apply(e.data.field.get(0),[!0]),!1},_=function(t){return h.apply(t.data.field.get(0),[!0]),t.data.el.removeClass("colorpicker_slider").find("input").focus(),e(document).unbind("mouseup",_),e(document).unbind("mousemove",g),!1},v=function(){var t={cal:e(this).parent(),y:e(this).offset().top};t.preview=t.cal.data("colorpicker").livePreview,e(document).bind("mouseup",t,E),e(document).bind("mousemove",t,T)},T=function(e){return h.apply(e.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360*(150-Math.max(0,Math.min(150,e.pageY-e.data.y)))/150,10)).get(0),[e.data.preview]),!1},E=function(t){return o(t.data.cal.data("colorpicker").color,t.data.cal.get(0)),a(t.data.cal.data("colorpicker").color,t.data.cal.get(0)),e(document).unbind("mouseup",E),e(document).unbind("mousemove",T),!1},y=function(){var t={cal:e(this).parent(),pos:e(this).offset()};t.preview=t.cal.data("colorpicker").livePreview,e(document).bind("mouseup",t,D),e(document).bind("mousemove",t,b)},b=function(e){return h.apply(e.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100*(150-Math.max(0,Math.min(150,e.pageY-e.data.pos.top)))/150,10)).end().eq(5).val(parseInt(100*Math.max(0,Math.min(150,e.pageX-e.data.pos.left))/150,10)).get(0),[e.data.preview]),!1},D=function(t){return o(t.data.cal.data("colorpicker").color,t.data.cal.get(0)),a(t.data.cal.data("colorpicker").color,t.data.cal.get(0)),e(document).unbind("mouseup",D),e(document).unbind("mousemove",b),!1},C=function(){e(this).addClass("colorpicker_focus")},I=function(){e(this).removeClass("colorpicker_focus")},O=function(){var t=e(this).parent(),n=t.data("colorpicker").color;t.data("colorpicker").origColor=n,d(n,t.get(0)),t.data("colorpicker").onSubmit(n,F(n),Y(n),t.data("colorpicker").el)},k=function(){var t=e("#"+e(this).data("colorpickerId"));t.data("colorpicker").onBeforeShow.apply(this,[t.get(0)]);var n=e(this).offset(),i=M(),o=n.top+this.offsetHeight,r=n.left;return o+176>i.t+i.h&&(o-=this.offsetHeight+176),r+356>i.l+i.w&&(r-=356),t.css({left:r+"px",top:o+"px"}),0!=t.data("colorpicker").onShow.apply(this,[t.get(0)])&&t.show(),e(document).bind("mousedown",{cal:t},R),!1},R=function(t){w(t.data.cal.get(0),t.target,t.data.cal.get(0))||(0!=t.data.cal.data("colorpicker").onHide.apply(this,[t.data.cal.get(0)])&&t.data.cal.hide(),e(document).unbind("mousedown",R))},w=function(e,t,n){if(e==t)return!0;if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return!!(16&e.compareDocumentPosition(t));for(var i=t.parentNode;i&&i!=n;){if(i==e)return!0;i=i.parentNode}return!1},M=function(){var e="CSS1Compat"==document.compatMode;return{l:window.pageXOffset||(e?document.documentElement.scrollLeft:document.body.scrollLeft),t:window.pageYOffset||(e?document.documentElement.scrollTop:document.body.scrollTop),w:window.innerWidth||(e?document.documentElement.clientWidth:document.body.clientWidth),h:window.innerHeight||(e?document.documentElement.clientHeight:document.body.clientHeight)}},K=function(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}},L=function(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}},x=function(e){var t=6-e.length;if(t>0){for(var n=[],i=0;t>i;i++)n.push("0");n.push(e),e=n.join("")}return e},S=function(e){var e=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:e>>16,g:(65280&e)>>8,b:255&e}},N=function(e){return A(S(e))},A=function(e){var t={h:0,s:0,b:0},n=Math.min(e.r,e.g,e.b),i=Math.max(e.r,e.g,e.b),o=i-n;return t.b=i,t.s=0!=i?255*o/i:0,t.h=0!=t.s?e.r==i?(e.g-e.b)/o:e.g==i?2+(e.b-e.r)/o:4+(e.r-e.g)/o:-1,t.h*=60,t.h<0&&(t.h+=360),t.s*=100/255,t.b*=100/255,t},Y=function(e){var t={},n=Math.round(e.h),i=Math.round(255*e.s/100),o=Math.round(255*e.b/100);if(0==i)t.r=t.g=t.b=o;else{var r=o,a=(255-i)*o/255,s=(r-a)*(n%60)/60;360==n&&(n=0),60>n?(t.r=r,t.b=a,t.g=a+s):120>n?(t.g=r,t.b=a,t.r=r-s):180>n?(t.g=r,t.r=a,t.b=a+s):240>n?(t.b=r,t.r=a,t.g=r-s):300>n?(t.b=r,t.g=a,t.r=a+s):360>n?(t.r=r,t.g=a,t.b=r-s):(t.r=0,t.g=0,t.b=0)}return{r:Math.round(t.r),g:Math.round(t.g),b:Math.round(t.b)}},P=function(t){var n=[t.r.toString(16),t.g.toString(16),t.b.toString(16)];return e.each(n,function(e,t){1==t.length&&(n[e]="0"+t)}),n.join("")},F=function(e){return P(Y(e))},H=function(){var t=e(this).parent(),n=t.data("colorpicker").origColor;t.data("colorpicker").color=n,o(n,t.get(0)),a(n,t.get(0)),r(n,t.get(0)),s(n,t.get(0)),l(n,t.get(0)),c(n,t.get(0))};return{init:function(t){if(t=e.extend({},i,t||{}),"string"==typeof t.color)t.color=N(t.color);else if(void 0!=t.color.r&&void 0!=t.color.g&&void 0!=t.color.b)t.color=A(t.color);else{if(void 0==t.color.h||void 0==t.color.s||void 0==t.color.b)return this;t.color=K(t.color)}return this.each(function(){if(!e(this).data("colorpickerId")){var i=e.extend({},t);i.origColor=t.color;var g="collorpicker_"+parseInt(1e3*Math.random());e(this).data("colorpickerId",g);var _=e(n).attr("id",g);i.flat?_.appendTo(this).show():_.appendTo(document.body),i.fields=_.find("input").bind("keyup",u).bind("change",h).bind("blur",f).bind("focus",m),_.find("span").bind("mousedown",p).end().find(">div.colorpicker_current_color").bind("click",H),i.selector=_.find("div.colorpicker_color").bind("mousedown",y),i.selectorIndic=i.selector.find("div div"),i.el=this,i.hue=_.find("div.colorpicker_hue div"),_.find("div.colorpicker_hue").bind("mousedown",v),i.newColor=_.find("div.colorpicker_new_color"),i.currentColor=_.find("div.colorpicker_current_color"),_.data("colorpicker",i),_.find("div.colorpicker_submit").bind("mouseenter",C).bind("mouseleave",I).bind("click",O),o(i.color,_.get(0)),r(i.color,_.get(0)),a(i.color,_.get(0)),l(i.color,_.get(0)),s(i.color,_.get(0)),d(i.color,_.get(0)),c(i.color,_.get(0)),i.flat?_.css({position:"relative",display:"block"}):e(this).bind(i.eventName,k)}})},showPicker:function(){return this.each(function(){e(this).data("colorpickerId")&&k.apply(this)})},hidePicker:function(){return this.each(function(){e(this).data("colorpickerId")&&e("#"+e(this).data("colorpickerId")).hide()})},setColor:function(t){if("string"==typeof t)t=N(t);else if(void 0!=t.r&&void 0!=t.g&&void 0!=t.b)t=A(t);else{if(void 0==t.h||void 0==t.s||void 0==t.b)return this;t=K(t)}return this.each(function(){if(e(this).data("colorpickerId")){var n=e("#"+e(this).data("colorpickerId"));n.data("colorpicker").color=t,n.data("colorpicker").origColor=t,o(t,n.get(0)),r(t,n.get(0)),a(t,n.get(0)),l(t,n.get(0)),s(t,n.get(0)),d(t,n.get(0)),c(t,n.get(0))}})}}}();e.fn.extend({ColorPicker:t.init,ColorPickerHide:t.hidePicker,ColorPickerShow:t.showPicker,ColorPickerSetColor:t.setColor})}(jQuery);