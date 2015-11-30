CodeMirror.defineMode("htmlmixed",function(e,t){function n(e,t){var n=t.htmlState.tagName,i=r.token(e,t.htmlState);if("script"==n&&/\btag\b/.test(i)&&">"==e.current()){(n=(n=e.string.slice(Math.max(0,e.pos-100),e.pos).match(/\btype\s*=\s*("[^"]+"|'[^']+'|\S+)[^<]*$/i))?n[1]:"")&&/[\"\']/.test(n.charAt(0))&&(n=n.slice(1,n.length-1));for(var d=0;d<s.length;++d){var c=s[d];if("string"==typeof c.matches?n==c.matches:c.matches.test(n)){c.mode&&(t.token=o,t.localMode=c.mode,t.localState=c.mode.startState&&c.mode.startState(r.indent(t.htmlState,"")));break}}}else"style"==n&&/\btag\b/.test(i)&&">"==e.current()&&(t.token=a,t.localMode=l,t.localState=l.startState(r.indent(t.htmlState,"")));return i}function i(e,t,n){var i=e.current(),o=i.search(t);return o>-1?e.backUp(i.length-o):i.match(/<\/?$/)&&(e.backUp(i.length),e.match(t,!1)||e.match(i[0])),n}function o(e,t){return e.match(/^<\/\s*script\s*>/i,!1)?(t.token=n,t.localState=t.localMode=null,n(e,t)):i(e,/<\/\s*script\s*>/,t.localMode.token(e,t.localState))}function a(e,t){return e.match(/^<\/\s*style\s*>/i,!1)?(t.token=n,t.localState=t.localMode=null,n(e,t)):i(e,/<\/\s*style\s*>/,l.token(e,t.localState))}var r=CodeMirror.getMode(e,{name:"xml",htmlMode:!0}),l=CodeMirror.getMode(e,"css"),s=[],d=t&&t.scriptTypes;if(s.push({matches:/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^$/i,mode:CodeMirror.getMode(e,"javascript")}),d)for(var c=0;c<d.length;++c){var u=d[c];s.push({matches:u.matches,mode:u.mode&&CodeMirror.getMode(e,u.mode)})}return s.push({matches:/./,mode:CodeMirror.getMode(e,"text/plain")}),{startState:function(){var e=r.startState();return{token:n,localMode:null,localState:null,htmlState:e}},copyState:function(e){if(e.localState)var t=CodeMirror.copyState(e.localMode,e.localState);return{token:e.token,localMode:e.localMode,localState:t,htmlState:CodeMirror.copyState(r,e.htmlState)}},token:function(e,t){return t.token(e,t)},indent:function(e,t){return!e.localMode||/^\s*<\//.test(t)?r.indent(e.htmlState,t):e.localMode.indent?e.localMode.indent(e.localState,t):CodeMirror.Pass},electricChars:"/{}:",innerMode:function(e){return{state:e.localState||e.htmlState,mode:e.localMode||r}}}},"xml","javascript","css"),CodeMirror.defineMIME("text/html","htmlmixed");