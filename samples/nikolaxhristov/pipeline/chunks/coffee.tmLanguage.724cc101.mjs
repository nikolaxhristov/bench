const information_for_contributors = [
	"This file has been converted from https://github.com/atom/language-coffee-script/blob/master/grammars/coffeescript.cson",
	"If you want to provide a fix or improvement, please create a pull request against the original repository.",
	"Once accepted there, we are happy to receive an update request.",
];
const version =
	"https://github.com/atom/language-coffee-script/commit/0f6db9143663e18b1ad00667820f46747dba495e";
const name = "coffee";
const scopeName = "source.coffee";
const patterns = [
	{
		include: "#jsx",
	},
	{
		match: "(new)\\s+(?:(?:(class)\\s+(\\w+(?:\\.\\w*)*)?)|(\\w+(?:\\.\\w*)*))",
		name: "meta.class.instance.constructor.coffee",
		captures: {
			"1": {
				name: "keyword.operator.new.coffee",
			},
			"2": {
				name: "storage.type.class.coffee",
			},
			"3": {
				name: "entity.name.type.instance.coffee",
			},
			"4": {
				name: "entity.name.type.instance.coffee",
			},
		},
	},
	{
		begin: "'''",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.coffee",
			},
		},
		end: "'''",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.coffee",
			},
		},
		name: "string.quoted.single.heredoc.coffee",
		patterns: [
			{
				captures: {
					"1": {
						name: "punctuation.definition.escape.backslash.coffee",
					},
				},
				match: "(\\\\).",
				name: "constant.character.escape.backslash.coffee",
			},
		],
	},
	{
		begin: '"""',
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.coffee",
			},
		},
		end: '"""',
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.coffee",
			},
		},
		name: "string.quoted.double.heredoc.coffee",
		patterns: [
			{
				captures: {
					"1": {
						name: "punctuation.definition.escape.backslash.coffee",
					},
				},
				match: "(\\\\).",
				name: "constant.character.escape.backslash.coffee",
			},
			{
				include: "#interpolated_coffee",
			},
		],
	},
	{
		match: "(`)(.*)(`)",
		name: "string.quoted.script.coffee",
		captures: {
			"1": {
				name: "punctuation.definition.string.begin.coffee",
			},
			"2": {
				name: "source.js.embedded.coffee",
				patterns: [
					{
						include: "source.js",
					},
				],
			},
			"3": {
				name: "punctuation.definition.string.end.coffee",
			},
		},
	},
	{
		begin: "(?<!#)###(?!#)",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.comment.coffee",
			},
		},
		end: "###",
		endCaptures: {
			"0": {
				name: "punctuation.definition.comment.coffee",
			},
		},
		name: "comment.block.coffee",
		patterns: [
			{
				match: "(?<=^|\\s)@\\w*(?=\\s)",
				name: "storage.type.annotation.coffee",
			},
		],
	},
	{
		begin: "#",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.comment.coffee",
			},
		},
		end: "$",
		name: "comment.line.number-sign.coffee",
	},
	{
		begin: "///",
		end: "(///)[gimuy]*",
		name: "string.regexp.multiline.coffee",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.coffee",
			},
		},
		endCaptures: {
			"1": {
				name: "punctuation.definition.string.end.coffee",
			},
		},
		patterns: [
			{
				include: "#heregexp",
			},
		],
	},
	{
		begin: "(?<![\\w$])(/)(?=(?![/*+?])(.+)(/)[gimuy]*(?!\\s*[\\w$/(]))",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.string.begin.coffee",
			},
		},
		end: "(/)[gimuy]*(?!\\s*[\\w$/(])",
		endCaptures: {
			"1": {
				name: "punctuation.definition.string.end.coffee",
			},
		},
		name: "string.regexp.coffee",
		patterns: [
			{
				include: "source.js.regexp",
			},
		],
	},
	{
		match: "\\b(?<![\\.\\$])(break|by|catch|continue|else|finally|for|in|of|if|return|switch|then|throw|try|unless|when|while|until|loop|do|export|import|default|from|as|yield|async|await|(?<=for)\\s+own)(?!\\s*:)\\b",
		name: "keyword.control.coffee",
	},
	{
		match: "\\b(?<![\\.\\$])(delete|instanceof|new|typeof)(?!\\s*:)\\b",
		name: "keyword.operator.$1.coffee",
	},
	{
		match: "\\b(?<![\\.\\$])(case|function|var|void|with|const|let|enum|native|__hasProp|__extends|__slice|__bind|__indexOf|implements|interface|package|private|protected|public|static)(?!\\s*:)\\b",
		name: "keyword.reserved.coffee",
	},
	{
		begin: "(?x)\n(?<=\\s|^)((@)?[a-zA-Z_$][\\w$]*)\n\\s*([:=])\\s*\n(?=(\\([^\\(\\)]*\\)\\s*)?[=-]>)",
		beginCaptures: {
			"1": {
				name: "entity.name.function.coffee",
			},
			"2": {
				name: "variable.other.readwrite.instance.coffee",
			},
			"3": {
				name: "keyword.operator.assignment.coffee",
			},
		},
		end: "[=-]>",
		endCaptures: {
			"0": {
				name: "storage.type.function.coffee",
			},
		},
		name: "meta.function.coffee",
		patterns: [
			{
				include: "#function_params",
			},
		],
	},
	{
		begin: "(?x)\n(?<=\\s|^)(?:((')([^']*?)('))|((\")([^\"]*?)(\")))\n\\s*([:=])\\s*\n(?=(\\([^\\(\\)]*\\)\\s*)?[=-]>)",
		beginCaptures: {
			"1": {
				name: "string.quoted.single.coffee",
			},
			"2": {
				name: "punctuation.definition.string.begin.coffee",
			},
			"3": {
				name: "entity.name.function.coffee",
			},
			"4": {
				name: "punctuation.definition.string.end.coffee",
			},
			"5": {
				name: "string.quoted.double.coffee",
			},
			"6": {
				name: "punctuation.definition.string.begin.coffee",
			},
			"7": {
				name: "entity.name.function.coffee",
			},
			"8": {
				name: "punctuation.definition.string.end.coffee",
			},
			"9": {
				name: "keyword.operator.assignment.coffee",
			},
		},
		end: "[=-]>",
		endCaptures: {
			"0": {
				name: "storage.type.function.coffee",
			},
		},
		name: "meta.function.coffee",
		patterns: [
			{
				include: "#function_params",
			},
		],
	},
	{
		begin: "(?=(\\([^\\(\\)]*\\)\\s*)?[=-]>)",
		end: "[=-]>",
		endCaptures: {
			"0": {
				name: "storage.type.function.coffee",
			},
		},
		name: "meta.function.inline.coffee",
		patterns: [
			{
				include: "#function_params",
			},
		],
	},
	{
		begin: "(?<=\\s|^)({)(?=[^'\"#]+?}[\\s\\]}]*=)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.destructuring.begin.bracket.curly.coffee",
			},
		},
		end: "}",
		endCaptures: {
			"0": {
				name: "punctuation.definition.destructuring.end.bracket.curly.coffee",
			},
		},
		name: "meta.variable.assignment.destructured.object.coffee",
		patterns: [
			{
				include: "$self",
			},
			{
				match: "[a-zA-Z$_]\\w*",
				name: "variable.assignment.coffee",
			},
		],
	},
	{
		begin: "(?<=\\s|^)(\\[)(?=[^'\"#]+?\\][\\s\\]}]*=)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.destructuring.begin.bracket.square.coffee",
			},
		},
		end: "\\]",
		endCaptures: {
			"0": {
				name: "punctuation.definition.destructuring.end.bracket.square.coffee",
			},
		},
		name: "meta.variable.assignment.destructured.array.coffee",
		patterns: [
			{
				include: "$self",
			},
			{
				match: "[a-zA-Z$_]\\w*",
				name: "variable.assignment.coffee",
			},
		],
	},
	{
		match: "\\b(?<!\\.|::)(true|on|yes)(?!\\s*[:=][^=])\\b",
		name: "constant.language.boolean.true.coffee",
	},
	{
		match: "\\b(?<!\\.|::)(false|off|no)(?!\\s*[:=][^=])\\b",
		name: "constant.language.boolean.false.coffee",
	},
	{
		match: "\\b(?<!\\.|::)null(?!\\s*[:=][^=])\\b",
		name: "constant.language.null.coffee",
	},
	{
		match: "\\b(?<!\\.|::)extends(?!\\s*[:=])\\b",
		name: "variable.language.coffee",
	},
	{
		match: "(?<!\\.)\\b(?<!\\$)(super|this|arguments)(?!\\s*[:=][^=]|\\$)\\b",
		name: "variable.language.$1.coffee",
	},
	{
		captures: {
			"1": {
				name: "storage.type.class.coffee",
			},
			"2": {
				name: "keyword.control.inheritance.coffee",
			},
			"3": {
				name: "entity.other.inherited-class.coffee",
			},
		},
		match: "(?<=\\s|^|\\[|\\()(class)\\s+(extends)\\s+(@?[a-zA-Z\\$\\._][\\w\\.]*)",
		name: "meta.class.coffee",
	},
	{
		captures: {
			"1": {
				name: "storage.type.class.coffee",
			},
			"2": {
				name: "entity.name.type.class.coffee",
			},
			"3": {
				name: "keyword.control.inheritance.coffee",
			},
			"4": {
				name: "entity.other.inherited-class.coffee",
			},
		},
		match: "(?<=\\s|^|\\[|\\()(class\\b)\\s+(@?[a-zA-Z\\$_][\\w\\.]*)?(?:\\s+(extends)\\s+(@?[a-zA-Z\\$\\._][\\w\\.]*))?",
		name: "meta.class.coffee",
	},
	{
		match: "\\b(debugger|\\\\)\\b",
		name: "keyword.other.coffee",
	},
	{
		match: "\\b(Array|ArrayBuffer|Blob|Boolean|Date|document|Function|Int(8|16|32|64)Array|Math|Map|Number|Object|Proxy|RegExp|Set|String|WeakMap|window|Uint(8|16|32|64)Array|XMLHttpRequest)\\b",
		name: "support.class.coffee",
	},
	{
		match: "\\b(console)\\b",
		name: "entity.name.type.object.coffee",
	},
	{
		match: "((?<=console\\.)(debug|warn|info|log|error|time|timeEnd|assert))\\b",
		name: "support.function.console.coffee",
	},
	{
		match: "((?<=\\.)(apply|call|concat|every|filter|forEach|from|hasOwnProperty|indexOf|isPrototypeOf|join|lastIndexOf|map|of|pop|propertyIsEnumerable|push|reduce(Right)?|reverse|shift|slice|some|sort|splice|to(Locale)?String|unshift|valueOf))\\b",
		name: "support.function.method.array.coffee",
	},
	{
		match: "((?<=Array\\.)(isArray))\\b",
		name: "support.function.static.array.coffee",
	},
	{
		match: "((?<=Object\\.)(create|definePropert(ies|y)|freeze|getOwnProperty(Descriptors?|Names)|getProperty(Descriptor|Names)|getPrototypeOf|is(Extensible|Frozen|Sealed)?|isnt|keys|preventExtensions|seal))\\b",
		name: "support.function.static.object.coffee",
	},
	{
		match: "((?<=Math\\.)(abs|acos|acosh|asin|asinh|atan|atan2|atanh|ceil|cos|cosh|exp|expm1|floor|hypot|log|log10|log1p|log2|max|min|pow|random|round|sign|sin|sinh|sqrt|tan|tanh|trunc))\\b",
		name: "support.function.static.math.coffee",
	},
	{
		match: "((?<=Number\\.)(is(Finite|Integer|NaN)|toInteger))\\b",
		name: "support.function.static.number.coffee",
	},
	{
		match: "(?<!\\.)\\b(module|exports|__filename|__dirname|global|process)(?!\\s*:)\\b",
		name: "support.variable.coffee",
	},
	{
		match: "\\b(Infinity|NaN|undefined)\\b",
		name: "constant.language.coffee",
	},
	{
		include: "#operators",
	},
	{
		include: "#method_calls",
	},
	{
		include: "#function_calls",
	},
	{
		include: "#numbers",
	},
	{
		include: "#objects",
	},
	{
		include: "#properties",
	},
	{
		match: "::",
		name: "keyword.operator.prototype.coffee",
	},
	{
		match: "(?<!\\$)\\b[0-9]+[\\w$]*",
		name: "invalid.illegal.identifier.coffee",
	},
	{
		match: ";",
		name: "punctuation.terminator.statement.coffee",
	},
	{
		match: ",",
		name: "punctuation.separator.delimiter.coffee",
	},
	{
		begin: "{",
		beginCaptures: {
			"0": {
				name: "meta.brace.curly.coffee",
			},
		},
		end: "}",
		endCaptures: {
			"0": {
				name: "meta.brace.curly.coffee",
			},
		},
		patterns: [
			{
				include: "$self",
			},
		],
	},
	{
		begin: "\\[",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.array.begin.bracket.square.coffee",
			},
		},
		end: "\\]",
		endCaptures: {
			"0": {
				name: "punctuation.definition.array.end.bracket.square.coffee",
			},
		},
		patterns: [
			{
				match: "(?<!\\.)\\.{3}",
				name: "keyword.operator.slice.exclusive.coffee",
			},
			{
				match: "(?<!\\.)\\.{2}",
				name: "keyword.operator.slice.inclusive.coffee",
			},
			{
				include: "$self",
			},
		],
	},
	{
		begin: "\\(",
		beginCaptures: {
			"0": {
				name: "meta.brace.round.coffee",
			},
		},
		end: "\\)",
		endCaptures: {
			"0": {
				name: "meta.brace.round.coffee",
			},
		},
		patterns: [
			{
				include: "$self",
			},
		],
	},
	{
		include: "#instance_variable",
	},
	{
		include: "#single_quoted_string",
	},
	{
		include: "#double_quoted_string",
	},
];
const repository = {
	"arguments": {
		patterns: [
			{
				begin: "\\(",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.arguments.begin.bracket.round.coffee",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.arguments.end.bracket.round.coffee",
					},
				},
				name: "meta.arguments.coffee",
				patterns: [
					{
						include: "$self",
					},
				],
			},
			{
				begin: "(?=(@|@?[\\w$]+|[=-]>|\\-\\d|\\[|{|\"|'))",
				end: "(?=\\s*(?<![\\w$])(of|in|then|is|isnt|and|or|for|else|when|if|unless|by|instanceof)(?![\\w$]))|(?=\\s*(}|\\]|\\)|#|$))",
				name: "meta.arguments.coffee",
				patterns: [
					{
						include: "$self",
					},
				],
			},
		],
	},
	double_quoted_string: {
		patterns: [
			{
				begin: '"',
				beginCaptures: {
					"0": {
						name: "punctuation.definition.string.begin.coffee",
					},
				},
				end: '"',
				endCaptures: {
					"0": {
						name: "punctuation.definition.string.end.coffee",
					},
				},
				name: "string.quoted.double.coffee",
				patterns: [
					{
						captures: {
							"1": {
								name: "punctuation.definition.escape.backslash.coffee",
							},
						},
						match: "(\\\\)(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]|37[0-7]?|[4-7][0-7]?|.)",
						name: "constant.character.escape.backslash.coffee",
					},
					{
						include: "#interpolated_coffee",
					},
				],
			},
		],
	},
	function_calls: {
		patterns: [
			{
				begin: "(@)?([\\w$]+)(?=\\()",
				beginCaptures: {
					"1": {
						name: "variable.other.readwrite.instance.coffee",
					},
					"2": {
						patterns: [
							{
								include: "#function_names",
							},
						],
					},
				},
				end: "(?<=\\))",
				name: "meta.function-call.coffee",
				patterns: [
					{
						include: "#arguments",
					},
				],
			},
			{
				begin: "(?x)\n(@)?([\\w$]+)\n\\s*\n(?=\\s+(?!(?<![\\w$])(of|in|then|is|isnt|and|or|for|else|when|if|unless|by|instanceof)(?![\\w$]))(?=(@?[\\w$]+|[=-]>|\\-\\d|\\[|{|\"|')))",
				beginCaptures: {
					"1": {
						name: "variable.other.readwrite.instance.coffee",
					},
					"2": {
						patterns: [
							{
								include: "#function_names",
							},
						],
					},
				},
				end: "(?=\\s*(?<![\\w$])(of|in|then|is|isnt|and|or|for|else|when|if|unless|by|instanceof)(?![\\w$]))|(?=\\s*(}|\\]|\\)|#|$))",
				name: "meta.function-call.coffee",
				patterns: [
					{
						include: "#arguments",
					},
				],
			},
		],
	},
	function_names: {
		patterns: [
			{
				match: "(?x)\n\\b(isNaN|isFinite|eval|uneval|parseInt|parseFloat|decodeURI|\ndecodeURIComponent|encodeURI|encodeURIComponent|escape|unescape|\nrequire|set(Interval|Timeout)|clear(Interval|Timeout))\\b",
				name: "support.function.coffee",
			},
			{
				match: "[a-zA-Z_$][\\w$]*",
				name: "entity.name.function.coffee",
			},
			{
				match: "\\d[\\w$]*",
				name: "invalid.illegal.identifier.coffee",
			},
		],
	},
	function_params: {
		patterns: [
			{
				begin: "\\(",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.parameters.begin.bracket.round.coffee",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.parameters.end.bracket.round.coffee",
					},
				},
				name: "meta.parameters.coffee",
				patterns: [
					{
						match: "([a-zA-Z_$][\\w$]*)(\\.\\.\\.)?",
						captures: {
							"1": {
								name: "variable.parameter.function.coffee",
							},
							"2": {
								name: "keyword.operator.splat.coffee",
							},
						},
					},
					{
						match: "(@(?:[a-zA-Z_$][\\w$]*)?)(\\.\\.\\.)?",
						captures: {
							"1": {
								name: "variable.parameter.function.readwrite.instance.coffee",
							},
							"2": {
								name: "keyword.operator.splat.coffee",
							},
						},
					},
					{
						include: "$self",
					},
				],
			},
		],
	},
	embedded_comment: {
		patterns: [
			{
				captures: {
					"1": {
						name: "punctuation.definition.comment.coffee",
					},
				},
				match: "(?<!\\\\)(#).*$\\n?",
				name: "comment.line.number-sign.coffee",
			},
		],
	},
	instance_variable: {
		patterns: [
			{
				match: "(@)([a-zA-Z_\\$]\\w*)?",
				name: "variable.other.readwrite.instance.coffee",
			},
		],
	},
	interpolated_coffee: {
		patterns: [
			{
				begin: "\\#\\{",
				captures: {
					"0": {
						name: "punctuation.section.embedded.coffee",
					},
				},
				end: "\\}",
				name: "source.coffee.embedded.source",
				patterns: [
					{
						include: "$self",
					},
				],
			},
		],
	},
	method_calls: {
		patterns: [
			{
				begin: "(?:(\\.)|(::))\\s*([\\w$]+)\\s*(?=\\()",
				beginCaptures: {
					"1": {
						name: "punctuation.separator.method.period.coffee",
					},
					"2": {
						name: "keyword.operator.prototype.coffee",
					},
					"3": {
						patterns: [
							{
								include: "#method_names",
							},
						],
					},
				},
				end: "(?<=\\))",
				name: "meta.method-call.coffee",
				patterns: [
					{
						include: "#arguments",
					},
				],
			},
			{
				begin: "(?:(\\.)|(::))\\s*([\\w$]+)\\s*(?=\\s+(?!(?<![\\w$])(of|in|then|is|isnt|and|or|for|else|when|if|unless|by|instanceof)(?![\\w$]))(?=(@|@?[\\w$]+|[=-]>|\\-\\d|\\[|{|\"|')))",
				beginCaptures: {
					"1": {
						name: "punctuation.separator.method.period.coffee",
					},
					"2": {
						name: "keyword.operator.prototype.coffee",
					},
					"3": {
						patterns: [
							{
								include: "#method_names",
							},
						],
					},
				},
				end: "(?=\\s*(?<![\\w$])(of|in|then|is|isnt|and|or|for|else|when|if|unless|by|instanceof)(?![\\w$]))|(?=\\s*(}|\\]|\\)|#|$))",
				name: "meta.method-call.coffee",
				patterns: [
					{
						include: "#arguments",
					},
				],
			},
		],
	},
	method_names: {
		patterns: [
			{
				match: "(?x)\n\\bon(Rowsinserted|Rowsdelete|Rowenter|Rowexit|Resize|Resizestart|Resizeend|Reset|\nReadystatechange|Mouseout|Mouseover|Mousedown|Mouseup|Mousemove|\nBefore(cut|deactivate|unload|update|paste|print|editfocus|activate)|\nBlur|Scrolltop|Submit|Select|Selectstart|Selectionchange|Hover|Help|\nChange|Contextmenu|Controlselect|Cut|Cellchange|Clock|Close|Deactivate|\nDatasetchanged|Datasetcomplete|Dataavailable|Drop|Drag|Dragstart|Dragover|\nDragdrop|Dragenter|Dragend|Dragleave|Dblclick|Unload|Paste|Propertychange|Error|\nErrorupdate|Keydown|Keyup|Keypress|Focus|Load|Activate|Afterupdate|Afterprint|Abort)\\b",
				name: "support.function.event-handler.coffee",
			},
			{
				match: "(?x)\n\\b(shift|showModelessDialog|showModalDialog|showHelp|scroll|scrollX|scrollByPages|\nscrollByLines|scrollY|scrollTo|stop|strike|sizeToContent|sidebar|signText|sort|\nsup|sub|substr|substring|splice|split|send|set(Milliseconds|Seconds|Minutes|Hours|\nMonth|Year|FullYear|Date|UTC(Milliseconds|Seconds|Minutes|Hours|Month|FullYear|Date)|\nTime|Hotkeys|Cursor|ZOptions|Active|Resizable|RequestHeader)|search|slice|\nsavePreferences|small|home|handleEvent|navigate|char|charCodeAt|charAt|concat|\ncontextual|confirm|compile|clear|captureEvents|call|createStyleSheet|createPopup|\ncreateEventObject|to(GMTString|UTCString|String|Source|UpperCase|LowerCase|LocaleString)|\ntest|taint|taintEnabled|indexOf|italics|disableExternalCapture|dump|detachEvent|unshift|\nuntaint|unwatch|updateCommands|join|javaEnabled|pop|push|plugins.refresh|paddings|parse|\nprint|prompt|preference|enableExternalCapture|exec|execScript|valueOf|UTC|find|file|\nfileModifiedDate|fileSize|fileCreatedDate|fileUpdatedDate|fixed|fontsize|fontcolor|\nforward|fromCharCode|watch|link|load|lastIndexOf|anchor|attachEvent|atob|apply|alert|\nabort|routeEvents|resize|resizeBy|resizeTo|recalc|returnValue|replace|reverse|reload|\nreleaseCapture|releaseEvents|go|get(Milliseconds|Seconds|Minutes|Hours|Month|Day|Year|FullYear|\nTime|Date|TimezoneOffset|UTC(Milliseconds|Seconds|Minutes|Hours|Day|Month|FullYear|Date)|\nAttention|Selection|ResponseHeader|AllResponseHeaders)|moveBy|moveBelow|moveTo|\nmoveToAbsolute|moveAbove|mergeAttributes|match|margins|btoa|big|bold|borderWidths|blink|back)\\b",
				name: "support.function.coffee",
			},
			{
				match: "(?x)\n\\b(acceptNode|add|addEventListener|addTextTrack|adoptNode|after|animate|append|\nappendChild|appendData|before|blur|canPlayType|captureStream|\ncaretPositionFromPoint|caretRangeFromPoint|checkValidity|clear|click|\ncloneContents|cloneNode|cloneRange|close|closest|collapse|\ncompareBoundaryPoints|compareDocumentPosition|comparePoint|contains|\nconvertPointFromNode|convertQuadFromNode|convertRectFromNode|createAttribute|\ncreateAttributeNS|createCaption|createCDATASection|createComment|\ncreateContextualFragment|createDocument|createDocumentFragment|\ncreateDocumentType|createElement|createElementNS|createEntityReference|\ncreateEvent|createExpression|createHTMLDocument|createNodeIterator|\ncreateNSResolver|createProcessingInstruction|createRange|createShadowRoot|\ncreateTBody|createTextNode|createTFoot|createTHead|createTreeWalker|delete|\ndeleteCaption|deleteCell|deleteContents|deleteData|deleteRow|deleteTFoot|\ndeleteTHead|detach|disconnect|dispatchEvent|elementFromPoint|elementsFromPoint|\nenableStyleSheetsForSet|entries|evaluate|execCommand|exitFullscreen|\nexitPointerLock|expand|extractContents|fastSeek|firstChild|focus|forEach|get|\ngetAll|getAnimations|getAttribute|getAttributeNames|getAttributeNode|\ngetAttributeNodeNS|getAttributeNS|getBoundingClientRect|getBoxQuads|\ngetClientRects|getContext|getDestinationInsertionPoints|getElementById|\ngetElementsByClassName|getElementsByName|getElementsByTagName|\ngetElementsByTagNameNS|getItem|getNamedItem|getSelection|getStartDate|\ngetVideoPlaybackQuality|has|hasAttribute|hasAttributeNS|hasAttributes|\nhasChildNodes|hasFeature|hasFocus|importNode|initEvent|insertAdjacentElement|\ninsertAdjacentHTML|insertAdjacentText|insertBefore|insertCell|insertData|\ninsertNode|insertRow|intersectsNode|isDefaultNamespace|isEqualNode|\nisPointInRange|isSameNode|item|key|keys|lastChild|load|lookupNamespaceURI|\nlookupPrefix|matches|move|moveAttribute|moveAttributeNode|moveChild|\nmoveNamedItem|namedItem|nextNode|nextSibling|normalize|observe|open|\nparentNode|pause|play|postMessage|prepend|preventDefault|previousNode|\npreviousSibling|probablySupportsContext|queryCommandEnabled|\nqueryCommandIndeterm|queryCommandState|queryCommandSupported|queryCommandValue|\nquerySelector|querySelectorAll|registerContentHandler|registerElement|\nregisterProtocolHandler|releaseCapture|releaseEvents|remove|removeAttribute|\nremoveAttributeNode|removeAttributeNS|removeChild|removeEventListener|\nremoveItem|replace|replaceChild|replaceData|replaceWith|reportValidity|\nrequestFullscreen|requestPointerLock|reset|scroll|scrollBy|scrollIntoView|\nscrollTo|seekToNextFrame|select|selectNode|selectNodeContents|set|setAttribute|\nsetAttributeNode|setAttributeNodeNS|setAttributeNS|setCapture|\nsetCustomValidity|setEnd|setEndAfter|setEndBefore|setItem|setNamedItem|\nsetRangeText|setSelectionRange|setSinkId|setStart|setStartAfter|setStartBefore|\nslice|splitText|stepDown|stepUp|stopImmediatePropagation|stopPropagation|\nsubmit|substringData|supports|surroundContents|takeRecords|terminate|toBlob|\ntoDataURL|toggle|toString|values|write|writeln)\\b",
				name: "support.function.dom.coffee",
			},
			{
				match: "[a-zA-Z_$][\\w$]*",
				name: "entity.name.function.coffee",
			},
			{
				match: "\\d[\\w$]*",
				name: "invalid.illegal.identifier.coffee",
			},
		],
	},
	numbers: {
		patterns: [
			{
				match: "\\b(?<!\\$)0(x|X)[0-9a-fA-F]+\\b(?!\\$)",
				name: "constant.numeric.hex.coffee",
			},
			{
				match: "\\b(?<!\\$)0(b|B)[01]+\\b(?!\\$)",
				name: "constant.numeric.binary.coffee",
			},
			{
				match: "\\b(?<!\\$)0(o|O)?[0-7]+\\b(?!\\$)",
				name: "constant.numeric.octal.coffee",
			},
			{
				match: "(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)| # 1.1E+3\n  (?:\\b[0-9]+(\\.)[eE][+-]?[0-9]+\\b)|       # 1.E+3\n  (?:\\B(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|       # .1E+3\n  (?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|            # 1E+3\n  (?:\\b[0-9]+(\\.)[0-9]+\\b)|                # 1.1\n  (?:\\b[0-9]+(?=\\.{2,3}))|                  # 1 followed by a slice\n  (?:\\b[0-9]+(\\.)\\B)|                      # 1.\n  (?:\\B(\\.)[0-9]+\\b)|                      # .1\n  (?:\\b[0-9]+\\b(?!\\.))                     # 1\n)(?!\\$)",
				captures: {
					"0": {
						name: "constant.numeric.decimal.coffee",
					},
					"1": {
						name: "punctuation.separator.decimal.period.coffee",
					},
					"2": {
						name: "punctuation.separator.decimal.period.coffee",
					},
					"3": {
						name: "punctuation.separator.decimal.period.coffee",
					},
					"4": {
						name: "punctuation.separator.decimal.period.coffee",
					},
					"5": {
						name: "punctuation.separator.decimal.period.coffee",
					},
					"6": {
						name: "punctuation.separator.decimal.period.coffee",
					},
				},
			},
		],
	},
	objects: {
		patterns: [
			{
				match: "[A-Z][A-Z0-9_$]*(?=\\s*\\??(\\.\\s*[a-zA-Z_$]\\w*|::))",
				name: "constant.other.object.coffee",
			},
			{
				match: "[a-zA-Z_$][\\w$]*(?=\\s*\\??(\\.\\s*[a-zA-Z_$]\\w*|::))",
				name: "variable.other.object.coffee",
			},
		],
	},
	operators: {
		patterns: [
			{
				match: "(?:([a-zA-Z$_][\\w$]*)?\\s+|(?<![\\w$]))(and=|or=)",
				captures: {
					"1": {
						name: "variable.assignment.coffee",
					},
					"2": {
						name: "keyword.operator.assignment.compound.coffee",
					},
				},
			},
			{
				match: "([a-zA-Z$_][\\w$]*)?\\s*(%=|\\+=|-=|\\*=|&&=|\\|\\|=|\\?=|(?<!\\()/=)",
				captures: {
					"1": {
						name: "variable.assignment.coffee",
					},
					"2": {
						name: "keyword.operator.assignment.compound.coffee",
					},
				},
			},
			{
				match: "([a-zA-Z$_][\\w$]*)?\\s*(&=|\\^=|<<=|>>=|>>>=|\\|=)",
				captures: {
					"1": {
						name: "variable.assignment.coffee",
					},
					"2": {
						name: "keyword.operator.assignment.compound.bitwise.coffee",
					},
				},
			},
			{
				match: "<<|>>>|>>",
				name: "keyword.operator.bitwise.shift.coffee",
			},
			{
				match: "!=|<=|>=|==|<|>",
				name: "keyword.operator.comparison.coffee",
			},
			{
				match: "&&|!|\\|\\|",
				name: "keyword.operator.logical.coffee",
			},
			{
				match: "&|\\||\\^|~",
				name: "keyword.operator.bitwise.coffee",
			},
			{
				match: "([a-zA-Z$_][\\w$]*)?\\s*(=|:(?!:))(?![>=])",
				captures: {
					"1": {
						name: "variable.assignment.coffee",
					},
					"2": {
						name: "keyword.operator.assignment.coffee",
					},
				},
			},
			{
				match: "--",
				name: "keyword.operator.decrement.coffee",
			},
			{
				match: "\\+\\+",
				name: "keyword.operator.increment.coffee",
			},
			{
				match: "\\.\\.\\.",
				name: "keyword.operator.splat.coffee",
			},
			{
				match: "\\?",
				name: "keyword.operator.existential.coffee",
			},
			{
				match: "%|\\*|/|-|\\+",
				name: "keyword.operator.coffee",
			},
			{
				match: "(?x)\n\\b(?<![\\.\\$])\n(?:\n  (and|or|not) # logical\n  |\n  (is|isnt) # comparison\n)\n(?!\\s*:)\\b",
				captures: {
					"1": {
						name: "keyword.operator.logical.coffee",
					},
					"2": {
						name: "keyword.operator.comparison.coffee",
					},
				},
			},
		],
	},
	properties: {
		patterns: [
			{
				match: "(?:(\\.)|(::))\\s*([A-Z][A-Z0-9_$]*\\b\\$*)(?=\\s*\\??(\\.\\s*[a-zA-Z_$]\\w*|::))",
				captures: {
					"1": {
						name: "punctuation.separator.property.period.coffee",
					},
					"2": {
						name: "keyword.operator.prototype.coffee",
					},
					"3": {
						name: "constant.other.object.property.coffee",
					},
				},
			},
			{
				match: "(?:(\\.)|(::))\\s*(\\$*[a-zA-Z_$][\\w$]*)(?=\\s*\\??(\\.\\s*[a-zA-Z_$]\\w*|::))",
				captures: {
					"1": {
						name: "punctuation.separator.property.period.coffee",
					},
					"2": {
						name: "keyword.operator.prototype.coffee",
					},
					"3": {
						name: "variable.other.object.property.coffee",
					},
				},
			},
			{
				match: "(?:(\\.)|(::))\\s*([A-Z][A-Z0-9_$]*\\b\\$*)",
				captures: {
					"1": {
						name: "punctuation.separator.property.period.coffee",
					},
					"2": {
						name: "keyword.operator.prototype.coffee",
					},
					"3": {
						name: "constant.other.property.coffee",
					},
				},
			},
			{
				match: "(?:(\\.)|(::))\\s*(\\$*[a-zA-Z_$][\\w$]*)",
				captures: {
					"1": {
						name: "punctuation.separator.property.period.coffee",
					},
					"2": {
						name: "keyword.operator.prototype.coffee",
					},
					"3": {
						name: "variable.other.property.coffee",
					},
				},
			},
			{
				match: "(?:(\\.)|(::))\\s*([0-9][\\w$]*)",
				captures: {
					"1": {
						name: "punctuation.separator.property.period.coffee",
					},
					"2": {
						name: "keyword.operator.prototype.coffee",
					},
					"3": {
						name: "invalid.illegal.identifier.coffee",
					},
				},
			},
		],
	},
	single_quoted_string: {
		patterns: [
			{
				begin: "'",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.string.begin.coffee",
					},
				},
				end: "'",
				endCaptures: {
					"0": {
						name: "punctuation.definition.string.end.coffee",
					},
				},
				name: "string.quoted.single.coffee",
				patterns: [
					{
						captures: {
							"1": {
								name: "punctuation.definition.escape.backslash.coffee",
							},
						},
						match: "(\\\\)(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)",
						name: "constant.character.escape.backslash.coffee",
					},
				],
			},
		],
	},
	"regex-character-class": {
		patterns: [
			{
				match: "\\\\[wWsSdD]|\\.",
				name: "constant.character.character-class.regexp",
			},
			{
				match: "\\\\([0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4})",
				name: "constant.character.numeric.regexp",
			},
			{
				match: "\\\\c[A-Z]",
				name: "constant.character.control.regexp",
			},
			{
				match: "\\\\.",
				name: "constant.character.escape.backslash.regexp",
			},
		],
	},
	heregexp: {
		patterns: [
			{
				match: "\\\\[bB]|\\^|\\$",
				name: "keyword.control.anchor.regexp",
			},
			{
				match: "\\\\[1-9]\\d*",
				name: "keyword.other.back-reference.regexp",
			},
			{
				match: "[?+*]|\\{(\\d+,\\d+|\\d+,|,\\d+|\\d+)\\}\\??",
				name: "keyword.operator.quantifier.regexp",
			},
			{
				match: "\\|",
				name: "keyword.operator.or.regexp",
			},
			{
				begin: "(\\()((\\?=)|(\\?!))",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.group.regexp",
					},
					"3": {
						name: "meta.assertion.look-ahead.regexp",
					},
					"4": {
						name: "meta.assertion.negative-look-ahead.regexp",
					},
				},
				end: "(\\))",
				endCaptures: {
					"1": {
						name: "punctuation.definition.group.regexp",
					},
				},
				name: "meta.group.assertion.regexp",
				patterns: [
					{
						include: "#heregexp",
					},
				],
			},
			{
				begin: "\\((\\?:)?",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.group.regexp",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.group.regexp",
					},
				},
				name: "meta.group.regexp",
				patterns: [
					{
						include: "#heregexp",
					},
				],
			},
			{
				begin: "(\\[)(\\^)?",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.character-class.regexp",
					},
					"2": {
						name: "keyword.operator.negation.regexp",
					},
				},
				end: "(\\])",
				endCaptures: {
					"1": {
						name: "punctuation.definition.character-class.regexp",
					},
				},
				name: "constant.other.character-class.set.regexp",
				patterns: [
					{
						captures: {
							"1": {
								name: "constant.character.numeric.regexp",
							},
							"2": {
								name: "constant.character.control.regexp",
							},
							"3": {
								name: "constant.character.escape.backslash.regexp",
							},
							"4": {
								name: "constant.character.numeric.regexp",
							},
							"5": {
								name: "constant.character.control.regexp",
							},
							"6": {
								name: "constant.character.escape.backslash.regexp",
							},
						},
						match: "(?:.|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))\\-(?:[^\\]\\\\]|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))",
						name: "constant.other.character-class.range.regexp",
					},
					{
						include: "#regex-character-class",
					},
				],
			},
			{
				include: "#regex-character-class",
			},
			{
				include: "#interpolated_coffee",
			},
			{
				include: "#embedded_comment",
			},
		],
	},
	jsx: {
		patterns: [
			{
				include: "#jsx-tag",
			},
			{
				include: "#jsx-end-tag",
			},
		],
	},
	"jsx-expression": {
		begin: "{",
		beginCaptures: {
			"0": {
				name: "meta.brace.curly.coffee",
			},
		},
		end: "}",
		endCaptures: {
			"0": {
				name: "meta.brace.curly.coffee",
			},
		},
		patterns: [
			{
				include: "#double_quoted_string",
			},
			{
				include: "$self",
			},
		],
	},
	"jsx-attribute": {
		patterns: [
			{
				captures: {
					"1": {
						name: "entity.other.attribute-name.coffee",
					},
					"2": {
						name: "keyword.operator.assignment.coffee",
					},
				},
				match: "(?:^|\\s+)([-\\w.]+)\\s*(=)",
			},
			{
				include: "#double_quoted_string",
			},
			{
				include: "#single_quoted_string",
			},
			{
				include: "#jsx-expression",
			},
		],
	},
	"jsx-tag": {
		patterns: [
			{
				begin: "(<)([-\\w\\.]+)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.coffee",
					},
					"2": {
						name: "entity.name.tag.coffee",
					},
				},
				end: "(/?>)",
				name: "meta.tag.coffee",
				patterns: [
					{
						include: "#jsx-attribute",
					},
				],
			},
		],
	},
	"jsx-end-tag": {
		patterns: [
			{
				begin: "(</)([-\\w\\.]+)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.coffee",
					},
					"2": {
						name: "entity.name.tag.coffee",
					},
				},
				end: "(/?>)",
				name: "meta.tag.coffee",
			},
		],
	},
};
const coffee_tmLanguage = {
	information_for_contributors: information_for_contributors,
	version: version,
	name: name,
	scopeName: scopeName,
	patterns: patterns,
	repository: repository,
};

export {
	coffee_tmLanguage as default,
	information_for_contributors,
	name,
	patterns,
	repository,
	scopeName,
	version,
};
