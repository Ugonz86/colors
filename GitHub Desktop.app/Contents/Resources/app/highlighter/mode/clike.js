self.webpackChunk(["mode/clike"],{6:function(a,b,c){(function(a){a(c(0))})(function(a){"use strict";function b(a,b,c,d,e,f){this.indented=a,this.column=b,this.type=c,this.info=d,this.align=e,this.prev=f}function c(a,c,d,e){var f=a.indented;return a.context&&"statement"==a.context.type&&"statement"!=d&&(f=a.context.indented),a.context=new b(f,c,d,e,null,a.context)}function d(a){var b=a.context.type;return(")"==b||"]"==b||"}"==b)&&(a.indented=a.context.indented),a.context=a.context.prev}function e(a,b,c){return!("variable"!=b.prevToken&&"type"!=b.prevToken)||!!/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(a.string.slice(0,c))||!!(b.typeAtEndOfLine&&a.column()==a.indentation())||void 0}function f(a){for(;;){if(!a||"top"==a.type)return!0;if("}"==a.type&&"namespace"!=a.prev.info)return!1;a=a.prev}}function g(a){for(var b={},c=a.split(" "),d=0;d<c.length;++d)b[c[d]]=!0;return b}function h(a,b){return"function"==typeof a?a(b):a.propertyIsEnumerable(b)}function i(a,b){if(!b.startOfLine)return!1;for(var c,d=null;c=a.peek();){if("\\"==c&&a.match(/^.$/)){d=i;break}else if("/"==c&&a.match(/^\/[\/\*]/,!1))break;a.next()}return b.tokenize=d,"meta"}function j(a,b){return!("type"!=b.prevToken)&&"type"}function k(a){return a.eatWhile(/[\w\.']/),"number"}function l(a,b){if(a.backUp(1),a.match(/(R|u8R|uR|UR|LR)/)){var c=a.match(/"([^\s\\()]{0,16})\(/);return!!c&&(b.cpp11RawStringDelim=c[1],b.tokenize=o,o(a,b))}return a.match(/(u8|u|U|L)/)?!!a.match(/["']/,!1)&&"string":(a.next(),!1)}function m(a){var b=/(\w+)::~?(\w+)$/.exec(a);return b&&b[1]==b[2]}function n(a,b){for(var c;null!=(c=a.next());)if("\""==c&&!a.eat("\"")){b.tokenize=null;break}return"string"}function o(a,b){var c=b.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&"),d=a.match(new RegExp(".*?\\)"+c+"\""));return d?b.tokenize=null:a.skipToEnd(),"string"}function p(b,c){function d(a){if(a)for(var b in a)a.hasOwnProperty(b)&&e.push(b)}"string"==typeof b&&(b=[b]);var e=[];d(c.keywords),d(c.types),d(c.builtin),d(c.atoms),e.length&&(c.helperType=b[0],a.registerHelper("hintWords",b[0],e));for(var f=0;f<b.length;++f)a.defineMIME(b[f],c)}function q(a,b){for(var c=!1;!a.eol();){if(!c&&a.match("\"\"\"")){b.tokenize=null;break}c="\\"==a.next()&&!c}return"string"}function r(a){return function(b,c){for(var d;d=b.next();)if("*"==d&&b.eat("/")){if(1==a){c.tokenize=null;break}else return c.tokenize=r(a-1),c.tokenize(b,c);}else if("/"==d&&b.eat("*"))return c.tokenize=r(a+1),c.tokenize(b,c);return"comment"}}function s(a){return function(b,c){for(var d,e=!1,f=!1;!b.eol();){if(!a&&!e&&b.match("\"")){f=!0;break}if(a&&b.match("\"\"\"")){f=!0;break}d=b.next(),!e&&"$"==d&&b.match("{")&&b.skipTo("}"),e=!e&&"\\"==d&&!a}return(f||!a)&&(c.tokenize=null),"string"}}function t(a){return function(b,c){for(var d,e=!1,f=!1;!b.eol();){if(!e&&b.match("\"")&&("single"==a||b.match("\"\""))){f=!0;break}if(!e&&b.match("``")){w=t(a),f=!0;break}d=b.next(),e="single"==a&&!e&&"\\"==d}return f&&(c.tokenize=null),"string"}}a.defineMode("clike",function(g,i){function j(a,b){var c=a.next();if(y[c]){var d=y[c](a,b);if(!1!==d)return d}if("\""==c||"'"==c)return b.tokenize=k(c),b.tokenize(a,b);if(D.test(c))return n=c,null;if(E.test(c)){if(a.backUp(1),a.match(F))return"number";a.next()}if("/"==c){if(a.eat("*"))return b.tokenize=l,l(a,b);if(a.eat("/"))return a.skipToEnd(),"comment"}if(G.test(c)){for(;!a.match(/^\/[\/*]/,!1)&&a.eat(G););return"operator"}if(a.eatWhile(H),C)for(;a.match(C);)a.eatWhile(H);var e=a.current();return h(s,e)?(h(v,e)&&(n="newstatement"),h(w,e)&&(o=!0),"keyword"):h(t,e)?"type":h(u,e)?(h(v,e)&&(n="newstatement"),"builtin"):h(x,e)?"atom":"variable"}function k(a){return function(b,c){for(var d,e=!1,f=!1;null!=(d=b.next());){if(d==a&&!e){f=!0;break}e=!e&&"\\"==d}return(f||!(e||z))&&(c.tokenize=null),"string"}}function l(a,b){for(var c,d=!1;c=a.next();){if("/"==c&&d){b.tokenize=null;break}d="*"==c}return"comment"}function m(a,b){i.typeFirstDefinitions&&a.eol()&&f(b.context)&&(b.typeAtEndOfLine=e(a,b,a.pos))}var n,o,p=g.indentUnit,q=i.statementIndentUnit||p,r=i.dontAlignCalls,s=i.keywords||{},t=i.types||{},u=i.builtin||{},v=i.blockKeywords||{},w=i.defKeywords||{},x=i.atoms||{},y=i.hooks||{},z=i.multiLineStrings,A=!1!==i.indentStatements,B=!1!==i.indentSwitch,C=i.namespaceSeparator,D=i.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,E=i.numberStart||/[\d\.]/,F=i.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,G=i.isOperatorChar||/[+\-*&%=<>!?|\/]/,H=i.isIdentifierChar||/[\w\$_\xa1-\uffff]/;return{startState:function(a){return{tokenize:null,context:new b((a||0)-p,0,"top",null,!1),indented:0,startOfLine:!0,prevToken:null}},token:function(a,b){var g=b.context;if(a.sol()&&(null==g.align&&(g.align=!1),b.indented=a.indentation(),b.startOfLine=!0),a.eatSpace())return m(a,b),null;n=o=null;var h=(b.tokenize||j)(a,b);if("comment"==h||"meta"==h)return h;if(null==g.align&&(g.align=!0),";"==n||":"==n||","==n&&a.match(/^\s*(?:\/\/.*)?$/,!1))for(;"statement"==b.context.type;)d(b);else if("{"==n)c(b,a.column(),"}");else if("["==n)c(b,a.column(),"]");else if("("==n)c(b,a.column(),")");else if("}"==n){for(;"statement"==g.type;)g=d(b);for("}"==g.type&&(g=d(b));"statement"==g.type;)g=d(b)}else n==g.type?d(b):A&&(("}"==g.type||"top"==g.type)&&";"!=n||"statement"==g.type&&"newstatement"==n)&&c(b,a.column(),"statement",a.current());if("variable"==h&&("def"==b.prevToken||i.typeFirstDefinitions&&e(a,b,a.start)&&f(b.context)&&a.match(/^\s*\(/,!1))&&(h="def"),y.token){var k=y.token(a,b,h);void 0!==k&&(h=k)}return"def"==h&&!1===i.styleDefs&&(h="variable"),b.startOfLine=!1,b.prevToken=o?"def":h||n,m(a,b),h},indent:function(b,c){if(b.tokenize!=j&&null!=b.tokenize||b.typeAtEndOfLine)return a.Pass;var d=b.context,e=c&&c.charAt(0);if("statement"==d.type&&"}"==e&&(d=d.prev),i.dontIndentStatements)for(;"statement"==d.type&&i.dontIndentStatements.test(d.info);)d=d.prev;if(y.indent){var f=y.indent(b,d,c);if("number"==typeof f)return f}var g=e==d.type,h=d.prev&&"switch"==d.prev.info;if(i.allmanIndentation&&/[{(]/.test(e)){for(;"top"!=d.type&&"}"!=d.type;)d=d.prev;return d.indented}return"statement"==d.type?d.indented+("{"==e?0:q):d.align&&(!r||")"!=d.type)?d.column+(g?0:1):")"!=d.type||g?d.indented+(g?0:p)+(g||!h||/^(?:case|default)\b/.test(c)?0:p):d.indented+q},electricInput:B?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"}});var u="auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile",v="int long char short double float unsigned signed void size_t ptrdiff_t";p(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:g(u),types:g(v+" bool _Complex _Bool float_t double_t intptr_t intmax_t int8_t int16_t int32_t int64_t uintptr_t uintmax_t uint8_t uint16_t uint32_t uint64_t"),blockKeywords:g("case do else for if switch while struct"),defKeywords:g("struct"),typeFirstDefinitions:!0,atoms:g("null true false"),hooks:{"#":i,"*":j},modeProps:{fold:["brace","include"]}}),p(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:g(u+" asm dynamic_cast namespace reinterpret_cast try explicit new static_cast typeid catch operator template typename class friend private this using const_cast inline public throw virtual delete mutable protected alignas alignof constexpr decltype nullptr noexcept thread_local final static_assert override"),types:g(v+" bool wchar_t"),blockKeywords:g("catch class do else finally for if struct switch try while"),defKeywords:g("class namespace struct enum union"),typeFirstDefinitions:!0,atoms:g("true false null"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,hooks:{"#":i,"*":j,u:l,U:l,L:l,R:l,0:k,1:k,2:k,3:k,4:k,5:k,6:k,7:k,8:k,9:k,token:function(a,b,c){if("variable"==c&&"("==a.peek()&&(";"==b.prevToken||null==b.prevToken||"}"==b.prevToken)&&m(a.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),p("text/x-java",{name:"clike",keywords:g("abstract assert break case catch class const continue default do else enum extends final finally float for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),types:g("byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:g("catch class do else finally for if switch try while"),defKeywords:g("class interface enum @interface"),typeFirstDefinitions:!0,atoms:g("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(a){return!a.match("interface",!1)&&(a.eatWhile(/[\w\$_]/),"meta")}},modeProps:{fold:["brace","import"]}}),p("text/x-csharp",{name:"clike",keywords:g("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:g("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:g("catch class do else finally for foreach if struct switch try while"),defKeywords:g("class interface namespace struct var"),typeFirstDefinitions:!0,atoms:g("true false null"),hooks:{"@":function(a,b){return a.eat("\"")?(b.tokenize=n,n(a,b)):(a.eatWhile(/[\w\$_]/),"meta")}}}),p("text/x-scala",{name:"clike",keywords:g("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),types:g("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:g("catch class enum do else finally for forSome if match switch try while"),defKeywords:g("class enum def object package trait type val var"),atoms:g("true false null"),indentStatements:!1,indentSwitch:!1,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(a){return a.eatWhile(/[\w\$_]/),"meta"},'"':function(a,b){return!!a.match("\"\"")&&(b.tokenize=q,b.tokenize(a,b))},"'":function(a){return a.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},"=":function(a,c){var d=c.context;return!!("}"==d.type&&d.align&&a.eat(">"))&&(c.context=new b(d.indented,d.column,d.type,d.info,null,d.prev),"operator")},"/":function(a,b){return!!a.eat("*")&&(b.tokenize=r(1),b.tokenize(a,b))}},modeProps:{closeBrackets:{triples:"\""}}}),p("text/x-kotlin",{name:"clike",keywords:g("package as typealias class interface this super val var fun for is in This throw return break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect"),types:g("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),intendSwitch:!1,indentStatements:!1,multiLineStrings:!0,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,blockKeywords:g("catch class do else finally for if where try while enum"),defKeywords:g("class val var object interface fun"),atoms:g("true false null this"),hooks:{'"':function(a,b){return b.tokenize=s(a.match("\"\"")),b.tokenize(a,b)}},modeProps:{closeBrackets:{triples:"\""}}}),p(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:g("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:g("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:g("for while do if else struct"),builtin:g("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:g("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":i},modeProps:{fold:["brace","include"]}}),p("text/x-nesc",{name:"clike",keywords:g(u+"as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),types:g(v),blockKeywords:g("case do else for if switch while struct"),atoms:g("null true false"),hooks:{"#":i},modeProps:{fold:["brace","include"]}}),p("text/x-objectivec",{name:"clike",keywords:g(u+"inline restrict _Bool _Complex _Imaginary BOOL Class bycopy byref id IMP in inout nil oneway out Protocol SEL self super atomic nonatomic retain copy readwrite readonly"),types:g(v),atoms:g("YES NO NULL NILL ON OFF true false"),hooks:{"@":function(a){return a.eatWhile(/[\w\$]/),"keyword"},"#":i,indent:function(a,b,c){if("statement"==b.type&&/^@\w/.test(c))return b.indented}},modeProps:{fold:"brace"}}),p("text/x-squirrel",{name:"clike",keywords:g("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:g(v),blockKeywords:g("case catch class else for foreach if switch try while"),defKeywords:g("function local class"),typeFirstDefinitions:!0,atoms:g("true false null"),hooks:{"#":i},modeProps:{fold:["brace","include"]}});var w=null;p("text/x-ceylon",{name:"clike",keywords:g("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),types:function(a){var b=a.charAt(0);return b===b.toUpperCase()&&b!==b.toLowerCase()},blockKeywords:g("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:g("class dynamic function interface module object package value"),builtin:g("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:!0,typeFirstDefinitions:!0,atoms:g("true false null larger smaller equal empty finished"),indentSwitch:!1,styleDefs:!1,hooks:{"@":function(a){return a.eatWhile(/[\w\$_]/),"meta"},'"':function(a,b){return b.tokenize=t(a.match("\"\"")?"triple":"single"),b.tokenize(a,b)},"`":function(a,b){return!!(w&&a.match("`"))&&(b.tokenize=w,w=null,b.tokenize(a,b))},"'":function(a){return a.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},token:function(a,b,c){if(("variable"==c||"type"==c)&&"."==b.prevToken)return"variable-2"}},modeProps:{fold:["brace","import"],closeBrackets:{triples:"\""}}})})}});
//# sourceMappingURL=clike.js.map