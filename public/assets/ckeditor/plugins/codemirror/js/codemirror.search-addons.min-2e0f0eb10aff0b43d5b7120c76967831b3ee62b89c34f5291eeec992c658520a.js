!function(){function e(e,t,n){var i;return i=e.getWrapperElement().appendChild(document.createElement("div")),i.className=n?"CodeMirror-dialog CodeMirror-dialog-bottom":"CodeMirror-dialog CodeMirror-dialog-top",i.innerHTML=t,i}CodeMirror.defineExtension("openDialog",function(t,n,i){function o(){r||(r=!0,a.parentNode.removeChild(a))}var a=e(this,t,i&&i.bottom),r=!1,l=this,s=a.getElementsByTagName("input")[0];return s?(CodeMirror.on(s,"keydown",function(e){(13==e.keyCode||27==e.keyCode)&&(CodeMirror.e_stop(e),o(),l.focus(),13==e.keyCode&&n(s.value))}),i&&i.value&&(s.value=i.value),s.focus(),CodeMirror.on(s,"blur",o)):(t=a.getElementsByTagName("button")[0])&&(CodeMirror.on(t,"click",function(){o(),l.focus()}),t.focus(),CodeMirror.on(t,"blur",o)),o}),CodeMirror.defineExtension("openConfirm",function(t,n,i){function o(){l||(l=!0,r.parentNode.removeChild(r),s.focus())}var a,r=e(this,t,i&&i.bottom),t=r.getElementsByTagName("button"),l=!1,s=this,d=1;for(t[0].focus(),i=0;i<t.length;++i)a=t[i],function(e){CodeMirror.on(a,"click",function(t){CodeMirror.e_preventDefault(t),o(),e&&e(s)})}(n[i]),CodeMirror.on(a,"blur",function(){--d,setTimeout(function(){0>=d&&o()},200)}),CodeMirror.on(a,"focus",function(){++d})})}(),function(){function e(e){return"string"==typeof e?{token:function(t){return t.match(e)?"searching":(t.next(),void(t.skipTo(e.charAt(0))||t.skipToEnd()))}}:{token:function(t){if(t.match(e))return"searching";for(;!t.eol()&&(t.next(),!t.match(e,!1)););}}}function t(){this.overlay=this.posFrom=this.posTo=this.query=null}function n(e,t,n){return e.getSearchCursor(t,n,"string"==typeof t&&t==t.toLowerCase())}function i(e,t,n,i){e.openDialog?e.openDialog(t,i):i(prompt(n,""))}function o(e,t,n,i){e.openConfirm?e.openConfirm(t,i):confirm(n)&&i[0]()}function a(e){var t=e.match(/^\/(.*)\/([a-z]*)$/);return t?RegExp(t[1],-1==t[2].indexOf("i")?"":"i"):e}function r(n,o){var r=n._searchState||(n._searchState=new t);return r.query?l(n,o):void i(n,c,"Search for:",function(t){n.operation(function(){t&&!r.query&&(r.query=a(t),n.removeOverlay(r.overlay),r.overlay=e(t),n.addOverlay(r.overlay),r.posFrom=r.posTo=n.getCursor(),l(n,o))})})}function l(e,i){e.operation(function(){var o=e._searchState||(e._searchState=new t),a=n(e,o.query,i?o.posFrom:o.posTo);(a.find(i)||(a=n(e,o.query,i?CodeMirror.Pos(e.lastLine()):CodeMirror.Pos(e.firstLine(),0)),a.find(i)))&&(e.setSelection(a.from(),a.to()),o.posFrom=a.from(),o.posTo=a.to())})}function s(e){e.operation(function(){var n=e._searchState||(e._searchState=new t);n.query&&(n.query=null,e.removeOverlay(n.overlay))})}function d(e,t){i(e,u,"Replace:",function(r){r&&(r=a(r),i(e,p,"Replace with:",function(i){if(t)e.operation(function(){for(var t,o=n(e,r);o.findNext();)"string"!=typeof r?(t=e.getRange(o.from(),o.to()).match(r),o.replace(i.replace(/\$(\d)/,function(e,n){return t[n]}))):o.replace(i)});else{s(e);var a=n(e,r,e.getCursor()),l=function(){var t,i=a.from();((t=a.findNext())||(a=n(e,r),(t=a.findNext())&&(!i||a.from().line!=i.line||a.from().ch!=i.ch)))&&(e.setSelection(a.from(),a.to()),o(e,m,"Replace?",[function(){d(t)},l]))},d=function(e){a.replace("string"==typeof r?i:i.replace(/\$(\d)/,function(t,n){return e[n]})),l()};l()}}))})}var c='Search: <input type="text" style="width: 10em"/> <span style="color: #888">(Use /re/ syntax for regexp search)</span>',u='Replace: <input type="text" style="width: 10em"/> <span style="color: #888">(Use /re/ syntax for regexp search)</span>',p='With: <input type="text" style="width: 10em"/>',m="Replace? <button>Yes</button> <button>No</button> <button>Stop</button>";CodeMirror.commands.find=function(e){s(e),r(e)},CodeMirror.commands.findNext=r,CodeMirror.commands.findPrev=function(e){r(e,!0)},CodeMirror.commands.clearSearch=s,CodeMirror.commands.replace=d,CodeMirror.commands.replaceAll=function(e){d(e,!0)}}(),function(){function e(e,n,i,o){if(this.atOccurrence=!1,this.cm=e,null==o&&"string"==typeof n&&(o=!1),i=i?e.clipPos(i):t(0,0),this.pos={from:i,to:i},"string"!=typeof n)n.global||(n=RegExp(n.source,n.ignoreCase?"ig":"g")),this.matches=function(i,o){var a;if(i){n.lastIndex=0;for(var r=e.getLine(o.line).slice(0,o.ch),l=n.exec(r),s=0;l&&(s+=l.index+1,r=r.slice(s),n.lastIndex=0,a=n.exec(r));)l=a;s--}else n.lastIndex=o.ch,r=e.getLine(o.line),s=(l=n.exec(r))&&l.index;return l&&l[0]?{from:t(o.line,s),to:t(o.line,s+l[0].length),match:l}:void 0};else{o&&(n=n.toLowerCase());var a=o?function(e){return e.toLowerCase()}:function(e){return e},r=n.split("\n");this.matches=1==r.length?n.length?function(i,o){var r,l=a(e.getLine(o.line)),s=n.length;return(i?o.ch>=s&&-1!=(r=l.lastIndexOf(n,o.ch-s)):-1!=(r=l.indexOf(n,o.ch)))?{from:t(o.line,r),to:t(o.line,r+s)}:void 0}:function(){}:function(n,i){var o,l,s,d=i.line,c=n?r.length-1:0,u=r[c],p=a(e.getLine(d)),m=n?p.indexOf(u)+u.length:p.lastIndexOf(u);if(!(n?m>=i.ch||m!=u.length:m<=i.ch||m!=p.length-u.length))for(;!(n?!d:d==e.lineCount()-1);){if(p=a(e.getLine(d+=n?-1:1)),u=r[n?--c:++c],!(c>0&&c<r.length-1))return o=n?p.lastIndexOf(u):p.indexOf(u)+u.length,(n?o!=p.length-u.length:o!=u.length)?void 0:(l=t(i.line,m),s=t(d,o),{from:n?s:l,to:n?l:s});if(p!=u)break}}}}var t=CodeMirror.Pos;e.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(e){function n(e){return e=t(e,0),o.pos={from:e,to:e},o.atOccurrence=!1,!1}for(var i,o=this,a=this.cm.clipPos(e?this.pos.from:this.pos.to);;){if(this.pos=this.matches(e,a))return this.pos.from&&this.pos.to||console.log(this.matches,this.pos),this.atOccurrence=!0,this.pos.match||!0;if(e){if(!a.line)return n(0);a=t(a.line-1,this.cm.getLine(a.line-1).length)}else{if(i=this.cm.lineCount(),a.line==i-1)return n(i);a=t(a.line+1,0)}}},from:function(){return this.atOccurrence?this.pos.from:void 0},to:function(){return this.atOccurrence?this.pos.to:void 0},replace:function(e){this.atOccurrence&&(e=CodeMirror.splitLines(e),this.cm.replaceRange(e,this.pos.from,this.pos.to),this.pos.to=t(this.pos.from.line+e.length-1,e[e.length-1].length+(1==e.length?this.pos.from.ch:0)))}},CodeMirror.defineExtension("getSearchCursor",function(t,n,i){return new e(this,t,n,i)})}();