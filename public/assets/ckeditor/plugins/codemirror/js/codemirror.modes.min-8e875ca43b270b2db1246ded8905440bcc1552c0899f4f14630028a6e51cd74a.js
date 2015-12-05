CodeMirror.defineMode("xml",function(e,t){function n(e,t){function n(n){return t.tokenize=n,n(e,t)}var o,s=e.next();if("<"==s){if(e.eat("!"))return e.eat("[")?e.match("CDATA[")?n(a("atom","]]>")):null:e.match("--")?n(a("comment","-->")):e.match("DOCTYPE",!0,!0)?(e.eatWhile(/[\w\._\-]/),n(r(1))):null;if(e.eat("?"))return e.eatWhile(/[\w\._\-]/),t.tokenize=a("meta","?>"),"meta";for(s=e.eat("/"),b="";o=e.eat(/[^\s\u00a0=<>\"\'\/?]/);)b+=o;return b?(T=s?"closeTag":"openTag",t.tokenize=i,"tag"):"error"}return"&"==s?(o=e.eat("#")?e.eat("x")?e.eatWhile(/[a-fA-F\d]/)&&e.eat(";"):e.eatWhile(/[\d]/)&&e.eat(";"):e.eatWhile(/[\w\.\-:]/)&&e.eat(";"),o?"atom":"error"):(e.eatWhile(/[^&<]/),null)}function i(e,t){var i=e.next();return">"==i||"/"==i&&e.eat(">")?(t.tokenize=n,T=">"==i?"endTag":"selfcloseTag","tag"):"="==i?(T="equals",null):/[\'\"]/.test(i)?(t.tokenize=o(i),t.tokenize(e,t)):(e.eatWhile(/[^\s\u00a0=<>\"\']/),"word")}function o(e){return function(t,n){for(;!t.eol();)if(t.next()==e){n.tokenize=i;break}return"string"}}function a(e,t){return function(i,o){for(;!i.eol();){if(i.match(t)){o.tokenize=n;break}i.next()}return e}}function r(e){return function(t,i){for(var o;null!=(o=t.next());){if("<"==o)return i.tokenize=r(e+1),i.tokenize(t,i);if(">"==o){if(1==e){i.tokenize=n;break}return i.tokenize=r(e-1),i.tokenize(t,i)}}return"meta"}}function s(){for(var e=arguments.length-1;e>=0;e--)E.cc.push(arguments[e])}function l(){return s.apply(null,arguments),!0}function d(){E.context&&(E.context=E.context.prev)}function c(e){return"openTag"==e?(E.tagName=b,l(m,u(E.startOfLine))):"closeTag"==e?(e=!1,E.context?E.context.tagName!=b&&(k.implicitlyClosed.hasOwnProperty(E.context.tagName.toLowerCase())&&d(),e=!E.context||E.context.tagName!=b):e=!0,e&&(C="error"),l(p(e))):l()}function u(e){return function(t){var n=E.tagName;return E.tagName=null,"selfcloseTag"==t||"endTag"==t&&k.autoSelfClosers.hasOwnProperty(n.toLowerCase())?(h(n.toLowerCase()),n=l()):("endTag"==t&&(h(n.toLowerCase()),t=k.doNotIndent.hasOwnProperty(n)||E.context&&E.context.noIndent,E.context={prev:E.context,tagName:n,indent:E.indented,startOfLine:e,noIndent:t}),n=l()),n}}function p(e){return function(t){return e&&(C="error"),"endTag"==t?(d(),l()):(C="error",l(arguments.callee))}}function h(e){for(var t;E.context&&(t=E.context.tagName.toLowerCase(),!(!k.contextGrabbers.hasOwnProperty(t)||!k.contextGrabbers[t].hasOwnProperty(e)));)d()}function m(e){return"word"==e?(C="attribute",l(f,m)):"endTag"==e||"selfcloseTag"==e?s():(C="error",l(m))}function f(e){return"equals"==e?l(g,m):(k.allowMissing?"word"==e&&(C="attribute"):C="error","endTag"==e||"selfcloseTag"==e?s():l())}function g(e){return"string"==e?l(v):"word"==e&&k.allowUnquoted?(C="string",l()):(C="error","endTag"==e||"selfCloseTag"==e?s():l())}function v(e){return"string"==e?l(v):s()}var b,T,E,C,y=e.indentUnit,k=t.htmlMode?{autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0}:{autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1},D=t.alignCDATA;return{startState:function(){return{tokenize:n,cc:[],indented:0,startOfLine:!0,tagName:null,context:null}},token:function(e,t){var n,i;if(e.sol()&&(t.startOfLine=!0,t.indented=e.indentation()),e.eatSpace())return null;if(C=T=b=null,n=t.tokenize(e,t),t.type=T,(n||T)&&"comment"!=n)for(E=t;!(i=t.cc.pop()||c)(T||n););return t.startOfLine=!1,C||n},indent:function(e,t,o){var a=e.context;if(e.tokenize!=i&&e.tokenize!=n||a&&a.noIndent)return o?o.match(/^(\s*)/)[0].length:0;if(D&&/<!\[CDATA\[/.test(t))return 0;for(a&&/^<\//.test(t)&&(a=a.prev);a&&!a.startOfLine;)a=a.prev;return a?a.indent+y:0},electricChars:"/",configuration:t.htmlMode?"html":"xml"}}),CodeMirror.defineMIME("text/xml","xml"),CodeMirror.defineMIME("application/xml","xml"),CodeMirror.mimeModes.hasOwnProperty("text/html")||CodeMirror.defineMIME("text/html",{name:"xml",htmlMode:!0}),CodeMirror.defineMode("css",function(e){function t(e){for(var t={},n=0;n<e.length;++n)t[e[n]]=!0;return t}function n(e,t){var n=e.next();if("@"==n)return e.eatWhile(/[\w\\\-]/),s=e.current(),"def";if("/"==n&&e.eat("*"))return t.tokenize=i,i(e,t);if("<"==n&&e.eat("!"))return t.tokenize=o,o(e,t);if("="==n)s="compare";else{if(("~"==n||"|"==n)&&e.eat("="))return s="compare",null;if('"'==n||"'"==n)return t.tokenize=a(n),t.tokenize(e,t);if("#"==n)return e.eatWhile(/[\w\\\-]/),s="hash","atom";if("!"==n)return e.match(/^\s*\w*/),s="important","keyword";if(/\d/.test(n))return e.eatWhile(/[\w.%]/),s="unit","number";if("-"!==n)return/[,+>*\/]/.test(n)?(s="select-op",null):"."==n&&e.match(/^-?[_a-z][_a-z0-9-]*/i)?(s="qualifier","qualifier"):":"==n?(s=n,"operator"):/[;{}\[\]\(\)]/.test(n)?(s=n,null):"u"==n&&e.match("rl(")?(e.backUp(1),t.tokenize=r,s="variable","property"):(e.eatWhile(/[\w\\\-]/),s="variable","property");if(/\d/.test(e.peek()))return e.eatWhile(/[\w.%]/),s="unit","number";if(e.match(/^[^-]+-/))return s="meta","meta"}}function i(e,t){for(var i,o=!1;null!=(i=e.next());){if(o&&"/"==i){t.tokenize=n;break}o="*"==i}return s="comment","comment"}function o(e,t){for(var i,o=0;null!=(i=e.next());){if(o>=2&&">"==i){t.tokenize=n;break}o="-"==i?o+1:0}return s="comment","comment"}function a(e,t){return function(i,o){for(var a,r=!1;null!=(a=i.next())&&(a!=e||r);)r=!r&&"\\"==a;return r||(t&&i.backUp(1),o.tokenize=n),s="string","string"}}function r(e,t){return e.next(),t.tokenize=e.match(/\s*[\"\']/,!1)?n:a(")",!0),s="(",null}var s,l=e.indentUnit,d=t("all aural braille handheld print projection screen tty tv embossed".split(" ")),c=t("width min-width max-width height min-height max-height device-width min-device-width max-device-width device-height min-device-height max-device-height aspect-ratio min-aspect-ratio max-aspect-ratio device-aspect-ratio min-device-aspect-ratio max-device-aspect-ratio color min-color max-color color-index min-color-index max-color-index monochrome min-monochrome max-monochrome resolution min-resolution max-resolution scan grid".split(" ")),u=t("align-content align-items align-self alignment-adjust alignment-baseline anchor-point animation animation-delay animation-direction animation-duration animation-iteration-count animation-name animation-play-state animation-timing-function appearance azimuth backface-visibility background background-attachment background-clip background-color background-image background-origin background-position background-repeat background-size baseline-shift binding bleed bookmark-label bookmark-level bookmark-state bookmark-target border border-bottom border-bottom-color border-bottom-left-radius border-bottom-right-radius border-bottom-style border-bottom-width border-collapse border-color border-image border-image-outset border-image-repeat border-image-slice border-image-source border-image-width border-left border-left-color border-left-style border-left-width border-radius border-right border-right-color border-right-style border-right-width border-spacing border-style border-top border-top-color border-top-left-radius border-top-right-radius border-top-style border-top-width border-width bottom box-decoration-break box-shadow box-sizing break-after break-before break-inside caption-side clear clip color color-profile column-count column-fill column-gap column-rule column-rule-color column-rule-style column-rule-width column-span column-width columns content counter-increment counter-reset crop cue cue-after cue-before cursor direction display dominant-baseline drop-initial-after-adjust drop-initial-after-align drop-initial-before-adjust drop-initial-before-align drop-initial-size drop-initial-value elevation empty-cells fit fit-position flex flex-basis flex-direction flex-flow flex-grow flex-shrink flex-wrap float float-offset font font-feature-settings font-family font-kerning font-language-override font-size font-size-adjust font-stretch font-style font-synthesis font-variant font-variant-alternates font-variant-caps font-variant-east-asian font-variant-ligatures font-variant-numeric font-variant-position font-weight grid-cell grid-column grid-column-align grid-column-sizing grid-column-span grid-columns grid-flow grid-row grid-row-align grid-row-sizing grid-row-span grid-rows grid-template hanging-punctuation height hyphens icon image-orientation image-rendering image-resolution inline-box-align justify-content left letter-spacing line-break line-height line-stacking line-stacking-ruby line-stacking-shift line-stacking-strategy list-style list-style-image list-style-position list-style-type margin margin-bottom margin-left margin-right margin-top marker-offset marks marquee-direction marquee-loop marquee-play-count marquee-speed marquee-style max-height max-width min-height min-width move-to nav-down nav-index nav-left nav-right nav-up opacity order orphans outline outline-color outline-offset outline-style outline-width overflow overflow-style overflow-wrap overflow-x overflow-y padding padding-bottom padding-left padding-right padding-top page page-break-after page-break-before page-break-inside page-policy pause pause-after pause-before perspective perspective-origin pitch pitch-range play-during position presentation-level punctuation-trim quotes rendering-intent resize rest rest-after rest-before richness right rotation rotation-point ruby-align ruby-overhang ruby-position ruby-span size speak speak-as speak-header speak-numeral speak-punctuation speech-rate stress string-set tab-size table-layout target target-name target-new target-position text-align text-align-last text-decoration text-decoration-color text-decoration-line text-decoration-skip text-decoration-style text-emphasis text-emphasis-color text-emphasis-position text-emphasis-style text-height text-indent text-justify text-outline text-shadow text-space-collapse text-transform text-underline-position text-wrap top transform transform-origin transform-style transition transition-delay transition-duration transition-property transition-timing-function unicode-bidi vertical-align visibility voice-balance voice-duration voice-family voice-pitch voice-range voice-rate voice-stress voice-volume volume white-space widows width word-break word-spacing word-wrap z-index".split(" ")),p=t("black silver gray white maroon red purple fuchsia green lime olive yellow navy blue teal aqua".split(" ")),h=t("above absolute activeborder activecaption afar after-white-space ahead alias all all-scroll alternate always amharic amharic-abegede antialiased appworkspace arabic-indic armenian asterisks auto avoid background backwards baseline below bidi-override binary bengali blink block block-axis bold bolder border border-box both bottom break-all break-word button button-bevel buttonface buttonhighlight buttonshadow buttontext cambodian capitalize caps-lock-indicator caption captiontext caret cell center checkbox circle cjk-earthly-branch cjk-heavenly-stem cjk-ideographic clear clip close-quote col-resize collapse compact condensed contain content content-box context-menu continuous copy cover crop cross crosshair currentcolor cursive dashed decimal decimal-leading-zero default default-button destination-atop destination-in destination-out destination-over devanagari disc discard document dot-dash dot-dot-dash dotted double down e-resize ease ease-in ease-in-out ease-out element ellipsis embed end ethiopic ethiopic-abegede ethiopic-abegede-am-et ethiopic-abegede-gez ethiopic-abegede-ti-er ethiopic-abegede-ti-et ethiopic-halehame-aa-er ethiopic-halehame-aa-et ethiopic-halehame-am-et ethiopic-halehame-gez ethiopic-halehame-om-et ethiopic-halehame-sid-et ethiopic-halehame-so-et ethiopic-halehame-ti-er ethiopic-halehame-ti-et ethiopic-halehame-tig ew-resize expanded extra-condensed extra-expanded fantasy fast fill fixed flat footnotes forwards from geometricPrecision georgian graytext groove gujarati gurmukhi hand hangul hangul-consonant hebrew help hidden hide higher highlight highlighttext hiragana hiragana-iroha horizontal hsl hsla icon ignore inactiveborder inactivecaption inactivecaptiontext infinite infobackground infotext inherit initial inline inline-axis inline-block inline-table inset inside intrinsic invert italic justify kannada katakana katakana-iroha khmer landscape lao large larger left level lighter line-through linear lines list-item listbox listitem local logical loud lower lower-alpha lower-armenian lower-greek lower-hexadecimal lower-latin lower-norwegian lower-roman lowercase ltr malayalam match media-controls-background media-current-time-display media-fullscreen-button media-mute-button media-play-button media-return-to-realtime-button media-rewind-button media-seek-back-button media-seek-forward-button media-slider media-sliderthumb media-time-remaining-display media-volume-slider media-volume-slider-container media-volume-sliderthumb medium menu menulist menulist-button menulist-text menulist-textfield menutext message-box middle min-intrinsic mix mongolian monospace move multiple myanmar n-resize narrower navy ne-resize nesw-resize no-close-quote no-drop no-open-quote no-repeat none normal not-allowed nowrap ns-resize nw-resize nwse-resize oblique octal open-quote optimizeLegibility optimizeSpeed oriya oromo outset outside overlay overline padding padding-box painted paused persian plus-darker plus-lighter pointer portrait pre pre-line pre-wrap preserve-3d progress push-button radio read-only read-write read-write-plaintext-only relative repeat repeat-x repeat-y reset reverse rgb rgba ridge right round row-resize rtl run-in running s-resize sans-serif scroll scrollbar se-resize searchfield searchfield-cancel-button searchfield-decoration searchfield-results-button searchfield-results-decoration semi-condensed semi-expanded separate serif show sidama single skip-white-space slide slider-horizontal slider-vertical sliderthumb-horizontal sliderthumb-vertical slow small small-caps small-caption smaller solid somali source-atop source-in source-out source-over space square square-button start static status-bar stretch stroke sub subpixel-antialiased super sw-resize table table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group telugu text text-bottom text-top textarea textfield thai thick thin threeddarkshadow threedface threedhighlight threedlightshadow threedshadow tibetan tigre tigrinya-er tigrinya-er-abegede tigrinya-et tigrinya-et-abegede to top transparent ultra-condensed ultra-expanded underline up upper-alpha upper-armenian upper-greek upper-hexadecimal upper-latin upper-norwegian upper-roman uppercase urdu url vertical vertical-text visible visibleFill visiblePainted visibleStroke visual w-resize wait wave white wider window windowframe windowtext x-large x-small xor xx-large xx-small yellow".split(" "));return{startState:function(e){return{tokenize:n,baseIndent:e||0,stack:[]}},token:function(e,t){if(t.tokenize==n&&e.eatSpace())return null;var i=t.tokenize(e,t),o=t.stack[t.stack.length-1];return"property"==i?"propertyValue"==o?i=h[e.current()]?"string-2":p[e.current()]?"keyword":"variable-2":"rule"==o?u[e.current()]||(i+=" error"):o&&"@media{"!=o?"@media"==o?i=d[e.current()]?"attribute":/^(only|not)$/i.test(e.current())?"keyword":"and"==e.current().toLowerCase()?"error":c[e.current()]?"error":"attribute error":"@mediaType"==o?i=d[e.current()]?"attribute":"and"==e.current().toLowerCase()?"operator":/^(only|not)$/i.test(e.current())?"error":(e.current(),"error"):"@mediaType("==o?u[e.current()]||(d[e.current()]?i="error":"and"==e.current().toLowerCase()?i="operator":/^(only|not)$/i.test(e.current())?i="error":i+=" error"):i="error":i="tag":"atom"==i?o&&"@media{"!=o?"propertyValue"==o?/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e.current())||(i+=" error"):i="error":i="builtin":"@media"==o&&"{"==s&&(i="error"),"{"==s?"@media"==o||"@mediaType"==o?(t.stack.pop(),t.stack[t.stack.length-1]="@media{"):t.stack.push("rule"):"}"==s?(t.stack.pop(),"propertyValue"==o&&t.stack.pop()):"@media"==s?t.stack.push("@media"):"@media"==o&&/\b(keyword|attribute)\b/.test(i)?t.stack.push("@mediaType"):"@mediaType"==o&&","==e.current()?t.stack.pop():"@mediaType"==o&&"("==s?t.stack.push("@mediaType("):"@mediaType("==o&&")"==s?t.stack.pop():"rule"==o&&":"==s?t.stack.push("propertyValue"):"propertyValue"==o&&";"==s&&t.stack.pop(),i},indent:function(e,t){var n=e.stack.length;return/^\}/.test(t)&&(n-="propertyValue"==e.stack[e.stack.length-1]?2:1),e.baseIndent+n*l},electricChars:"}"}}),CodeMirror.defineMIME("text/css","css"),CodeMirror.defineMode("htmlmixed",function(e,t){function n(e,t){var n,i,r=t.htmlState.tagName,s=l.token(e,t.htmlState);if("script"==r&&/\btag\b/.test(s)&&">"==e.current()){for((r=(r=e.string.slice(Math.max(0,e.pos-100),e.pos).match(/\btype\s*=\s*("[^"]+"|'[^']+'|\S+)[^<]*$/i))?r[1]:"")&&/[\"\']/.test(r.charAt(0))&&(r=r.slice(1,r.length-1)),n=0;n<c.length;++n)if(i=c[n],"string"==typeof i.matches?r==i.matches:i.matches.test(r)){i.mode&&(t.token=o,t.localMode=i.mode,t.localState=i.mode.startState&&i.mode.startState(l.indent(t.htmlState,"")));break}}else"style"==r&&/\btag\b/.test(s)&&">"==e.current()&&(t.token=a,t.localMode=d,t.localState=d.startState(l.indent(t.htmlState,"")));return s}function i(e,t,n){var i=e.current(),o=i.search(t);return o>-1?e.backUp(i.length-o):i.match(/<\/?$/)&&(e.backUp(i.length),e.match(t,!1)||e.match(i[0])),n}function o(e,t){return e.match(/^<\/\s*script\s*>/i,!1)?(t.token=n,t.localState=t.localMode=null,n(e,t)):i(e,/<\/\s*script\s*>/,t.localMode.token(e,t.localState))}function a(e,t){return e.match(/^<\/\s*style\s*>/i,!1)?(t.token=n,t.localState=t.localMode=null,n(e,t)):i(e,/<\/\s*style\s*>/,d.token(e,t.localState))}var r,s,l=CodeMirror.getMode(e,{name:"xml",htmlMode:!0}),d=CodeMirror.getMode(e,"css"),c=[],u=t&&t.scriptTypes;if(c.push({matches:/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^$/i,mode:CodeMirror.getMode(e,"javascript")}),u)for(r=0;r<u.length;++r)s=u[r],c.push({matches:s.matches,mode:s.mode&&CodeMirror.getMode(e,s.mode)});return c.push({matches:/./,mode:CodeMirror.getMode(e,"text/plain")}),{startState:function(){var e=l.startState();return{token:n,localMode:null,localState:null,htmlState:e}},copyState:function(e){if(e.localState)var t=CodeMirror.copyState(e.localMode,e.localState);return{token:e.token,localMode:e.localMode,localState:t,htmlState:CodeMirror.copyState(l,e.htmlState)}},token:function(e,t){return t.token(e,t)},indent:function(e,t){return!e.localMode||/^\s*<\//.test(t)?l.indent(e.htmlState,t):e.localMode.indent?e.localMode.indent(e.localState,t):CodeMirror.Pass},electricChars:"/{}:",innerMode:function(e){return{state:e.localState||e.htmlState,mode:e.localMode||l}}}},"xml","javascript","css"),CodeMirror.defineMIME("text/html","htmlmixed");