!function(){function e(e){return"string"==typeof e?{token:function(t){return t.match(e)?"searching":(t.next(),void(t.skipTo(e.charAt(0))||t.skipToEnd()))}}:{token:function(t){if(t.match(e))return"searching";for(;!t.eol()&&(t.next(),!t.match(e,!1)););}}}function t(){this.overlay=this.posFrom=this.posTo=this.query=null}function n(e,t,n){return e.getSearchCursor(t,n,"string"==typeof t&&t==t.toLowerCase())}function a(e,t,n,a){e.openDialog?e.openDialog(t,a):a(prompt(n,""))}function i(e,t,n,a){e.openConfirm?e.openConfirm(t,a):confirm(n)&&a[0]()}function o(e){var t=e.match(/^\/(.*)\/([a-z]*)$/);return t?RegExp(t[1],-1==t[2].indexOf("i")?"":"i"):e}function r(n,i){var r=n._searchState||(n._searchState=new t);return r.query?l(n,i):void a(n,c,"Search for:",function(t){n.operation(function(){t&&!r.query&&(r.query=o(t),n.removeOverlay(r.overlay),r.overlay=e(t),n.addOverlay(r.overlay),r.posFrom=r.posTo=n.getCursor(),l(n,i))})})}function l(e,a){e.operation(function(){var i=e._searchState||(e._searchState=new t),o=n(e,i.query,a?i.posFrom:i.posTo);(o.find(a)||(o=n(e,i.query,a?CodeMirror.Pos(e.lastLine()):CodeMirror.Pos(e.firstLine(),0)),o.find(a)))&&(e.setSelection(o.from(),o.to()),i.posFrom=o.from(),i.posTo=o.to())})}function s(e){e.operation(function(){var n=e._searchState||(e._searchState=new t);n.query&&(n.query=null,e.removeOverlay(n.overlay))})}function d(e,t){a(e,u,"Replace:",function(r){r&&(r=o(r),a(e,p,"Replace with:",function(a){if(t)e.operation(function(){for(var t=n(e,r);t.findNext();)if("string"!=typeof r){var i=e.getRange(t.from(),t.to()).match(r);t.replace(a.replace(/\$(\d)/,function(e,t){return i[t]}))}else t.replace(a)});else{s(e);var o=n(e,r,e.getCursor()),l=function(){var t,a=o.from();!(t=o.findNext())&&(o=n(e,r),!(t=o.findNext())||a&&o.from().line==a.line&&o.from().ch==a.ch)||(e.setSelection(o.from(),o.to()),i(e,m,"Replace?",[function(){d(t)},l]))},d=function(e){o.replace("string"==typeof r?a:a.replace(/\$(\d)/,function(t,n){return e[n]})),l()};l()}}))})}var c='Search: <input type="text" style="width: 10em"/> <span style="color: #888">(Use /re/ syntax for regexp search)</span>',u='Replace: <input type="text" style="width: 10em"/> <span style="color: #888">(Use /re/ syntax for regexp search)</span>',p='With: <input type="text" style="width: 10em"/>',m="Replace? <button>Yes</button> <button>No</button> <button>Stop</button>";CodeMirror.commands.find=function(e){s(e),r(e)},CodeMirror.commands.findNext=r,CodeMirror.commands.findPrev=function(e){r(e,!0)},CodeMirror.commands.clearSearch=s,CodeMirror.commands.replace=d,CodeMirror.commands.replaceAll=function(e){d(e,!0)}}();