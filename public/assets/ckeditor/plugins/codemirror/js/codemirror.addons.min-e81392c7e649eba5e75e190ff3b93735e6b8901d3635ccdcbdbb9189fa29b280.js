!function(){function e(e){for(var t={name:"autoCloseBrackets"},n=0;n<e.length;n+=2)(function(e,n){function i(e){var t=e.getCursor();return e.getRange(t,CodeMirror.Pos(t.line,t.ch+1))!=n?CodeMirror.Pass:void e.execCommand("goCharRight")}t["'"+e+"'"]=function(t){if(e!=n||i(t)==CodeMirror.Pass){var a=t.getCursor("start"),a=CodeMirror.Pos(a.line,a.ch+1);t.replaceSelection(e+n,{head:a,anchor:a})}},e!=n&&(t["'"+n+"'"]=i)})(e.charAt(n),e.charAt(n+1));return t}CodeMirror.defineOption("autoCloseBrackets",!1,function(t,n,i){i=i&&i!=CodeMirror.Init,n&&!i?t.addKeyMap(e("string"==typeof n?n:"()[]{}''\"\"")):!n&&i&&t.removeKeyMap("autoCloseBrackets")})}(),function(){function e(e,a){var o,r,l=e.getCursor(),s=e.getTokenAt(l),d=CodeMirror.innerMode(e.getMode(),s.state),c=d.state;if("xml"!=d.mode.name)return CodeMirror.Pass;var u=e.getOption("autoCloseTags"),m="html"==d.mode.configuration,d="object"==typeof u&&u.dontCloseTags||m&&n,u="object"==typeof u&&u.indentTags||m&&i;if(">"==a&&c.tagName){if(r=c.tagName,s.end>l.ch&&(r=r.slice(0,r.length-s.end+l.ch)),o=r.toLowerCase(),"tag"==s.type&&"closeTag"==c.type||/\/\s*$/.test(s.string)||d&&-1<t(d,o))return CodeMirror.Pass;c=(s=u&&-1<t(u,o))?CodeMirror.Pos(l.line+1,0):CodeMirror.Pos(l.line,l.ch+1),e.replaceSelection(">"+(s?"\n\n":"")+"</"+r+">",{head:c,anchor:c}),s&&(e.indentLine(l.line+1),e.indentLine(l.line+2))}else{if("/"!=a||"<"!=s.string)return CodeMirror.Pass;(r=c.context&&c.context.tagName)&&e.replaceSelection("/"+r+">","end")}}function t(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0,i=e.length;i>n;++n)if(e[n]==t)return n;return-1}CodeMirror.defineOption("autoCloseTags",!1,function(t,n,i){!n||i!=CodeMirror.Init&&i?!n&&i!=CodeMirror.Init&&i&&t.removeKeyMap("autoCloseTags"):(i={name:"autoCloseTags"},("object"!=typeof n||n.whenClosing)&&(i["'/'"]=function(t){return e(t,"/")}),("object"!=typeof n||n.whenOpening)&&(i["'>'"]=function(t){return e(t,">")}),t.addKeyMap(i))});var n="area base br col command embed hr img input keygen link meta param source track wbr".split(" "),i="applet blockquote body button div dl fieldset form frameset h1 h2 h3 h4 h5 h6 head html iframe layer legend object ol p select table ul".split(" ")}(),function(){function e(e){function t(t,n,i){var o,l,s,d;if(t.text)for(o=c?0:t.text.length-1,l=c?t.text.length:-1,null!=i&&(o=i+u);o!=l;o+=u)if(s=t.text.charAt(o),h.test(s)&&e.getTokenAt(a(n,o+1)).type==m)if(d=r[s],">"==d.charAt(1)==c)p.push(s);else{if(p.pop()!=d.charAt(0))return{pos:o,match:!1};if(!p.length)return{pos:o,match:!0}}}var n,i,o=e.getCursor(),l=e.getLineHandle(o.line),s=o.ch-1,d=s>=0&&r[l.text.charAt(s)]||r[l.text.charAt(++s)];if(!d)return null;var c=">"==d.charAt(1),u=c?1:-1,m=e.getTokenAt(a(o.line,s+1)).type,p=[l.text.charAt(s)],h=/[(){}[\]]/,d=o.line;for(i=c?Math.min(d+100,e.lineCount()):Math.max(-1,d-100);d!=i&&!(n=d==o.line?t(l,d,s):t(e.getLineHandle(d),d));d+=u);return{from:a(o.line,s),to:n&&a(d,n.pos),match:n&&n.match}}function t(t,n){var r=e(t);if(!(!r||t.getLine(r.from.line).length>o||r.to&&t.getLine(r.to.line).length>o)){var l=r.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket",s=t.markText(r.from,a(r.from.line,r.from.ch+1),{className:l}),d=r.to&&t.markText(r.to,a(r.to.line,r.to.ch+1),{className:l});if(i&&t.state.focused&&t.display.input.focus(),r=function(){t.operation(function(){s.clear(),d&&d.clear()})},!n)return r;setTimeout(r,800)}}function n(e){e.operation(function(){l&&(l(),l=null),e.somethingSelected()||(l=t(e,!1))})}var i=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||8>document.documentMode),a=CodeMirror.Pos,o=1e3,r={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<"},l=null;CodeMirror.defineOption("matchBrackets",!1,function(e,t){t?e.on("cursorActivity",n):e.off("cursorActivity",n)}),CodeMirror.defineExtension("matchBrackets",function(){t(this,!0)}),CodeMirror.defineExtension("findMatchingBracket",function(){return e(this)})}(),CodeMirror.tagRangeFinder=function(e,t){for(var n,i,a,o,r,l,s,d=RegExp("^[A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD-:.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*"),c=e.getLine(t.line),u=!1,m=null,p=t.ch;!u;){if(p=c.indexOf("<",p),-1==p)return;if(p+1<c.length&&"/"==c[p+1])p++;else if(c.substr(p+1).match(d)){if(n=c.indexOf(">",p+1),-1==n){var u=t.line+1,h=!1;for(o=e.lineCount();o>u&&!h;){if(i=e.getLine(u),n=i.indexOf(">"),-1!=n&&(h=!0,a=i.lastIndexOf("/",n),-1!=a&&n>a&&(r=c.substr(a,n-a+1),!r.match(/\/\s*\>/))))return;u++}u=!0}else o=c.lastIndexOf("/",n),-1==o?u=!0:(r=c.substr(o,n-o+1),r.match(/\/\s*\>/)||(u=!0));u&&(l=c.substr(p+1),m=l.match(d),m?(m=m[0],-1!=c.indexOf("</"+m+">",p)&&(u=!1)):u=!1),u||p++}else p++}if(u)for(d=RegExp("(\\<\\/"+m+"\\>)|(\\<"+m+"\\>)|(\\<"+m+"\\s)|(\\<"+m+"$)"),p="</"+m+">",i=1,u=t.line+1,o=e.lineCount();o>u;){if(c=e.getLine(u),s=c.match(d))for(m=0;m<s.length;m++)if(s[m]==p?i--:i++,!i)return{from:CodeMirror.Pos(t.line,n+1),to:CodeMirror.Pos(u,s.index)};u++}},CodeMirror.braceRangeFinder=function(e,t){for(var n,i,a,o,r,l,s,d,c,u=t.line,m=e.getLine(u),p=m.length;a=m.lastIndexOf("{",p),!(a<t.ch);){if(i=e.getTokenAt(CodeMirror.Pos(u,a+1)).type,!/^(comment|string)/.test(i)){n=a;break}p=a-1}if(null!=n&&!(m.lastIndexOf("}")>n)){m=1,p=e.lineCount(),a=u+1;e:for(;p>a;++a)for(l=e.getLine(a),s=0;d=l.indexOf("{",s),c=l.indexOf("}",s),0>d&&(d=l.length),0>c&&(c=l.length),s=Math.min(d,c),!(s==l.length);){if(e.getTokenAt(CodeMirror.Pos(a,s+1)).type==i)if(s==d)++m;else if(!--m){o=a,r=s;break e}++s}if(null!=o&&o!=u+1)return{from:CodeMirror.Pos(u,n+1),to:CodeMirror.Pos(o,r)}}},CodeMirror.indentRangeFinder=function(e,t){for(var n,i=e.getOption("tabSize"),a=e.getLine(t.line),o=CodeMirror.countColumn(a,null,i),r=t.line+1,l=e.lineCount();l>r;++r)if(n=e.getLine(r),CodeMirror.countColumn(n,null,i)<o&&CodeMirror.countColumn(e.getLine(r-1),null,i)>o)return{from:CodeMirror.Pos(t.line,a.length),to:CodeMirror.Pos(r,n.length)}},CodeMirror.newFoldFunction=function(e,t){if(null==t&&(t="\u2194"),"string"==typeof t){var n=document.createTextNode(t),t=document.createElement("span");t.appendChild(n),t.className="CodeMirror-foldmarker"}return function(n,i){var a,o,r,l,s;if("number"==typeof i&&(i=CodeMirror.Pos(i,0)),a=e(n,i)){for(o=n.findMarksAt(a.from),l=r=0;l<o.length;++l)o[l].__isFold&&(++r,o[l].clear());r||(o=t.cloneNode(!0),CodeMirror.on(o,"mousedown",function(){s.clear()}),s=n.markText(a.from,a.to,{replacedWith:o,clearOnEnter:!0,__isFold:!0}))}}},function(){CodeMirror.defineExtension("autoFormatAll",function(e,t){for(var n,i=this,a=i.getMode(),o=i.getRange(e,t).split("\n"),r=CodeMirror.copyState(a,i.getTokenAt(e).state),l=i.getOption("tabSize"),s="",d=0,c=0==e.ch,u=0;u<o.length;++u){for(n=new CodeMirror.StringStream(o[u],l);!n.eol();){var m=CodeMirror.innerMode(a,r),p=a.token(n,r),h=n.current();n.start=n.pos,(!c||/\S/.test(h))&&(s+=h,c=!1),!c&&m.mode.newlineAfterToken&&m.mode.newlineAfterToken(p,h,n.string.slice(n.pos)||o[u+1]||"",m.state)&&(s+="\n",c=!0,++d)}!n.pos&&a.blankLine&&a.blankLine(r),!c&&u<o.length-1&&(s+="\n",c=!0,++d)}i.operation(function(){i.replaceRange(s,e,t);for(var n=e.line+1,a=e.line+d;a>=n;++n)i.indentLine(n,"smart");i.setCursor({line:0,ch:0})})})}(),function(){CodeMirror.extendMode("css",{commentStart:"/*",commentEnd:"*/",newlineAfterToken:function(e,t){return/^[;{}]$/.test(t)}}),CodeMirror.extendMode("javascript",{commentStart:"/*",commentEnd:"*/",newlineAfterToken:function(e,t,n,i){return this.jsonMode?/^[\[,{]$/.test(t)||/^}/.test(n):";"==t&&i.lexical&&")"==i.lexical.type?!1:/^[;{}]$/.test(t)&&!/^;/.test(n)}});var e=/^(a|abbr|acronym|area|base|bdo|big|br|button|caption|cite|code|col|colgroup|dd|del|dfn|em|frame|hr|iframe|img|input|ins|kbd|label|legend|link|map|object|optgroup|option|param|q|samp|script|select|small|span|strong|sub|sup|textarea|tt|var)$/;CodeMirror.extendMode("xml",{commentStart:"<!--",commentEnd:"-->",newlineAfterToken:function(t,n,i,a){var o=!1;return"html"==this.configuration&&(o=a.context?e.test(a.context.tagName):!1),!o&&("tag"==t&&/>$/.test(n)&&a.context||/^</.test(i))}}),CodeMirror.defineExtension("commentRange",function(e,t,n){var i=this,a=CodeMirror.innerMode(i.getMode(),i.getTokenAt(t).state).mode;i.operation(function(){if(e)i.replaceRange(a.commentEnd,n),i.replaceRange(a.commentStart,t),t.line==n.line&&t.ch==n.ch&&i.setCursor(t.line,t.ch+a.commentStart.length);else{var o=i.getRange(t,n),r=o.indexOf(a.commentStart),l=o.lastIndexOf(a.commentEnd);r>-1&&l>-1&&l>r&&(o=o.substr(0,r)+o.substring(r+a.commentStart.length,l)+o.substr(l+a.commentEnd.length)),i.replaceRange(o,t,n)}})}),CodeMirror.defineExtension("autoIndentRange",function(e,t){var n=this;this.operation(function(){for(var i=e.line;i<=t.line;i++)n.indentLine(i,"smart")})}),CodeMirror.defineExtension("autoFormatRange",function(e,t){for(var n,i=this,a=i.getMode(),o=i.getRange(e,t).split("\n"),r=CodeMirror.copyState(a,i.getTokenAt(e).state),l=i.getOption("tabSize"),s="",d=0,c=0==e.ch,u=0;u<o.length;++u){for(n=new CodeMirror.StringStream(o[u],l);!n.eol();){var m=CodeMirror.innerMode(a,r),p=a.token(n,r),h=n.current();n.start=n.pos,(!c||/\S/.test(h))&&(s+=h,c=!1),!c&&m.mode.newlineAfterToken&&m.mode.newlineAfterToken(p,h,n.string.slice(n.pos)||o[u+1]||"",m.state)&&(s+="\n",c=!0,++d)}!n.pos&&a.blankLine&&a.blankLine(r),!c&&u<o.length-1&&(s+="\n",c=!0,++d)}i.operation(function(){i.replaceRange(s,e,t);for(var n=e.line+1,a=e.line+d;a>=n;++n)i.indentLine(n,"smart");i.setSelection(e,i.getCursor(!1))})})}(),function(){function e(e){this.minChars="object"==typeof e&&e.minChars||i,this.style="object"==typeof e&&e.style||a,this.overlay=null}function t(e){e.operation(function(){var t,i=e._matchHighlightState;i.overlay&&(e.removeOverlay(i.overlay),i.overlay=null),e.somethingSelected()&&(t=e.getSelection().replace(/^\s+|\s+$/g,""),t.length<i.minChars||e.addOverlay(i.overlay=n(t,i.style)))})}function n(e,t){return{token:function(n){return n.match(e)?t:(n.next(),void(n.skipTo(e.charAt(0))||n.skipToEnd()))}}}var i=2,a="matchhighlight";CodeMirror.defineOption("highlightSelectionMatches",!1,function(n,i,a){var o,a=a&&a!=CodeMirror.Init;i&&!a?(n._matchHighlightState=new e(i),n.on("cursorActivity",t)):!i&&a&&(o=n._matchHighlightState.overlay,o&&n.removeOverlay(o),n._matchHighlightState=null,n.off("cursorActivity",t))})}();