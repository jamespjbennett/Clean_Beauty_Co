!function(){function e(e,t,n){var i;return i=e.getWrapperElement().appendChild(document.createElement("div")),i.className=n?"CodeMirror-dialog CodeMirror-dialog-bottom":"CodeMirror-dialog CodeMirror-dialog-top",i.innerHTML=t,i}CodeMirror.defineExtension("openDialog",function(t,n,i){function a(){r||(r=!0,o.parentNode.removeChild(o))}var o=e(this,t,i&&i.bottom),r=!1,l=this,s=o.getElementsByTagName("input")[0];return s?(CodeMirror.on(s,"keydown",function(e){(13==e.keyCode||27==e.keyCode)&&(CodeMirror.e_stop(e),a(),l.focus(),13==e.keyCode&&n(s.value))}),i&&i.value&&(s.value=i.value),s.focus(),CodeMirror.on(s,"blur",a)):(t=o.getElementsByTagName("button")[0])&&(CodeMirror.on(t,"click",function(){a(),l.focus()}),t.focus(),CodeMirror.on(t,"blur",a)),a}),CodeMirror.defineExtension("openConfirm",function(t,n,i){function a(){l||(l=!0,r.parentNode.removeChild(r),s.focus())}var o,r=e(this,t,i&&i.bottom),t=r.getElementsByTagName("button"),l=!1,s=this,c=1;for(t[0].focus(),i=0;i<t.length;++i)o=t[i],function(e){CodeMirror.on(o,"click",function(t){CodeMirror.e_preventDefault(t),a(),e&&e(s)})}(n[i]),CodeMirror.on(o,"blur",function(){--c,setTimeout(function(){0>=c&&a()},200)}),CodeMirror.on(o,"focus",function(){++c})})}(),function(){function e(e){return"string"==typeof e?{token:function(t){return t.match(e)?"searching":(t.next(),void(t.skipTo(e.charAt(0))||t.skipToEnd()))}}:{token:function(t){if(t.match(e))return"searching";for(;!t.eol()&&(t.next(),!t.match(e,!1)););}}}function t(){this.overlay=this.posFrom=this.posTo=this.query=null}function n(e,t,n){return e.getSearchCursor(t,n,"string"==typeof t&&t==t.toLowerCase())}function i(e,t,n,i){e.openDialog?e.openDialog(t,i):i(prompt(n,""))}function a(e,t,n,i){e.openConfirm?e.openConfirm(t,i):confirm(n)&&i[0]()}function o(e){var t=e.match(/^\/(.*)\/([a-z]*)$/);return t?RegExp(t[1],-1==t[2].indexOf("i")?"":"i"):e}function r(n,a){var r=n._searchState||(n._searchState=new t);return r.query?l(n,a):void i(n,d,"Search for:",function(t){n.operation(function(){t&&!r.query&&(r.query=o(t),n.removeOverlay(r.overlay),r.overlay=e(t),n.addOverlay(r.overlay),r.posFrom=r.posTo=n.getCursor(),l(n,a))})})}function l(e,i){e.operation(function(){var a=e._searchState||(e._searchState=new t),o=n(e,a.query,i?a.posFrom:a.posTo);(o.find(i)||(o=n(e,a.query,i?CodeMirror.Pos(e.lastLine()):CodeMirror.Pos(e.firstLine(),0)),o.find(i)))&&(e.setSelection(o.from(),o.to()),a.posFrom=o.from(),a.posTo=o.to())})}function s(e){e.operation(function(){var n=e._searchState||(e._searchState=new t);n.query&&(n.query=null,e.removeOverlay(n.overlay))})}function c(e,t){i(e,u,"Replace:",function(r){r&&(r=o(r),i(e,m,"Replace with:",function(i){if(t)e.operation(function(){for(var t,a=n(e,r);a.findNext();)"string"!=typeof r?(t=e.getRange(a.from(),a.to()).match(r),a.replace(i.replace(/\$(\d)/,function(e,n){return t[n]}))):a.replace(i)});else{s(e);var o=n(e,r,e.getCursor()),l=function(){var t,i=o.from();((t=o.findNext())||(o=n(e,r),(t=o.findNext())&&(!i||o.from().line!=i.line||o.from().ch!=i.ch)))&&(e.setSelection(o.from(),o.to()),a(e,p,"Replace?",[function(){c(t)},l]))},c=function(e){o.replace("string"==typeof r?i:i.replace(/\$(\d)/,function(t,n){return e[n]})),l()};l()}}))})}var d='Search: <input type="text" style="width: 10em"/> <span style="color: #888">(Use /re/ syntax for regexp search)</span>',u='Replace: <input type="text" style="width: 10em"/> <span style="color: #888">(Use /re/ syntax for regexp search)</span>',m='With: <input type="text" style="width: 10em"/>',p="Replace? <button>Yes</button> <button>No</button> <button>Stop</button>";CodeMirror.commands.find=function(e){s(e),r(e)},CodeMirror.commands.findNext=r,CodeMirror.commands.findPrev=function(e){r(e,!0)},CodeMirror.commands.clearSearch=s,CodeMirror.commands.replace=c,CodeMirror.commands.replaceAll=function(e){c(e,!0)}}(),function(){function e(e,n,i,a){if(this.atOccurrence=!1,this.cm=e,null==a&&"string"==typeof n&&(a=!1),i=i?e.clipPos(i):t(0,0),this.pos={from:i,to:i},"string"!=typeof n)n.global||(n=RegExp(n.source,n.ignoreCase?"ig":"g")),this.matches=function(i,a){var o;if(i){n.lastIndex=0;for(var r=e.getLine(a.line).slice(0,a.ch),l=n.exec(r),s=0;l&&(s+=l.index+1,r=r.slice(s),n.lastIndex=0,o=n.exec(r));)l=o;s--}else n.lastIndex=a.ch,r=e.getLine(a.line),s=(l=n.exec(r))&&l.index;return l&&l[0]?{from:t(a.line,s),to:t(a.line,s+l[0].length),match:l}:void 0};else{a&&(n=n.toLowerCase());var o=a?function(e){return e.toLowerCase()}:function(e){return e},r=n.split("\n");this.matches=1==r.length?n.length?function(i,a){var r,l=o(e.getLine(a.line)),s=n.length;return(i?a.ch>=s&&-1!=(r=l.lastIndexOf(n,a.ch-s)):-1!=(r=l.indexOf(n,a.ch)))?{from:t(a.line,r),to:t(a.line,r+s)}:void 0}:function(){}:function(n,i){var a,l,s,c=i.line,d=n?r.length-1:0,u=r[d],m=o(e.getLine(c)),p=n?m.indexOf(u)+u.length:m.lastIndexOf(u);if(!(n?p>=i.ch||p!=u.length:p<=i.ch||p!=m.length-u.length))for(;!(n?!c:c==e.lineCount()-1);){if(m=o(e.getLine(c+=n?-1:1)),u=r[n?--d:++d],!(d>0&&d<r.length-1))return a=n?m.lastIndexOf(u):m.indexOf(u)+u.length,(n?a!=m.length-u.length:a!=u.length)?void 0:(l=t(i.line,p),s=t(c,a),{from:n?s:l,to:n?l:s});if(m!=u)break}}}}var t=CodeMirror.Pos;e.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(e){function n(e){return e=t(e,0),a.pos={from:e,to:e},a.atOccurrence=!1,!1}for(var i,a=this,o=this.cm.clipPos(e?this.pos.from:this.pos.to);;){if(this.pos=this.matches(e,o))return this.pos.from&&this.pos.to||console.log(this.matches,this.pos),this.atOccurrence=!0,this.pos.match||!0;if(e){if(!o.line)return n(0);o=t(o.line-1,this.cm.getLine(o.line-1).length)}else{if(i=this.cm.lineCount(),o.line==i-1)return n(i);o=t(o.line+1,0)}}},from:function(){return this.atOccurrence?this.pos.from:void 0},to:function(){return this.atOccurrence?this.pos.to:void 0},replace:function(e){this.atOccurrence&&(e=CodeMirror.splitLines(e),this.cm.replaceRange(e,this.pos.from,this.pos.to),this.pos.to=t(this.pos.from.line+e.length-1,e[e.length-1].length+(1==e.length?this.pos.from.ch:0)))}},CodeMirror.defineExtension("getSearchCursor",function(t,n,i){return new e(this,t,n,i)})}();