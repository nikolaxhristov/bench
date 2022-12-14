const name = "marko";
const scopeName = "text.marko";
const uuid = "46c8c3f8-cabe-466a-a633-5deafdc51253";
const fileTypes = ["marko"];
const patterns = [
	{
		comment: "CSS style block, eg: style { color: green }",
		name: "meta.embedded.css",
		contentName: "source.css",
		begin: "^\\s*(style)(\\b[^\\s]*\\.css)?\\s+({)",
		end: "}",
		patterns: [
			{
				include: "source.css",
			},
		],
		beginCaptures: {
			"1": {
				name: "support.type.builtin.marko",
			},
			"2": {
				name: "storage.modifier.marko.css",
			},
			"3": {
				name: "punctuation.section.scope.begin.marko.css",
			},
		},
		endCaptures: {
			"0": {
				name: "punctuation.section.scope.end.marko.css",
			},
		},
	},
	{
		comment: "Less style block, eg: style.less { color: green }",
		name: "meta.embedded.less",
		contentName: "source.less",
		begin: "^\\s*(style)(\\b[^\\s]*\\.less)\\s+({)",
		end: "}",
		patterns: [
			{
				include: "source.css.less",
			},
		],
		beginCaptures: {
			"1": {
				name: "support.type.builtin.marko",
			},
			"2": {
				name: "storage.modifier.marko.css",
			},
			"3": {
				name: "punctuation.section.scope.begin.marko.css",
			},
		},
		endCaptures: {
			"0": {
				name: "punctuation.section.scope.end.marko.css",
			},
		},
	},
	{
		comment: "SCSS style block, eg: style.scss { color: green }",
		name: "meta.embedded.scss",
		contentName: "source.scss",
		begin: "^\\s*(style)(\\b[^\\s]*\\.scss)\\s+({)",
		end: "}",
		patterns: [
			{
				include: "source.css.scss",
			},
		],
		beginCaptures: {
			"1": {
				name: "support.type.builtin.marko",
			},
			"2": {
				name: "storage.modifier.marko.css",
			},
			"3": {
				name: "punctuation.section.scope.begin.marko.css",
			},
		},
		endCaptures: {
			"0": {
				name: "punctuation.section.scope.end.marko.css",
			},
		},
	},
	{
		comment: "JS/TS style block",
		name: "meta.embedded.ts",
		contentName: "source.ts",
		begin: "^\\s*(style)(\\b[^\\s]*\\.[tj]s)\\s+({)",
		end: "}",
		patterns: [
			{
				include: "source.ts",
			},
		],
		beginCaptures: {
			"1": {
				name: "support.type.builtin.marko",
			},
			"2": {
				name: "storage.modifier.marko.css",
			},
			"3": {
				name: "punctuation.section.scope.begin.marko.css",
			},
		},
		endCaptures: {
			"0": {
				name: "punctuation.section.scope.end.marko.css",
			},
		},
	},
	{
		comment: "Top level blocks parsed as JavaScript",
		name: "meta.embedded.ts",
		contentName: "source.ts",
		begin: "^\\s*(?:(static\\b)|(?=(?:class|import|export)\\b))",
		end: "(?=\\n|$)",
		patterns: [
			{
				include: "source.ts",
			},
		],
		beginCaptures: {
			"1": {
				name: "keyword.control.static.marko",
			},
		},
	},
	{
		include: "#content-concise-mode",
	},
];
const repository = {
	attrs: {
		patterns: [
			{
				include: "#javascript-comments",
			},
			{
				comment: "Attribute with optional value",
				name: "meta.marko-attribute",
				applyEndPatternLast: 1,
				begin: "(?:(key|on[a-zA-Z0-9_$-]+|[a-zA-Z0-9_$]+Change|no-update(?:-body)?(?:-if)?)|([a-zA-Z0-9_$][a-zA-Z0-9_$-]*))(:[a-zA-Z0-9_$][a-zA-Z0-9_$-]*)?",
				end: "(?=.|$)",
				beginCaptures: {
					"1": {
						name: "support.type.attribute-name.marko",
					},
					"2": {
						name: "entity.other.attribute-name.marko",
					},
					"3": {
						name: "support.function.attribute-name.marko",
					},
				},
				patterns: [
					{
						include: "#html-args-or-method",
					},
					{
						include: "#attr-value",
					},
				],
			},
			{
				comment: "A ...spread attribute",
				name: "meta.marko-spread-attribute",
				contentName: "source.ts",
				begin: "(\\.\\.\\.)",
				end: "(?=[,;\\]]|/>|(?<=[^>=])>[^>=]|(?<!(?:^|[!~*%&^|?:]|[!~*%&^|?/<>+=-]=|=>|>{2,}|[^.]\\.|[^-]-|^\\s*\\+\\+|[^+]\\+{2}*\\+|[a-zA-Z0-9%).<\\]}]\\s*/|\\b(?<![.]\\s*)(?:await|async|class|function|keyof|new|typeof|void))\\s*)(?:\\n|[ \\t]+(?![\\n{(+!~*%&^|?:]|[<>/=-]=|=>|>{2,}|\\.[^.]|-[^-]|/[^>]|(?:in|instanceof|as|extends)\\s+[^:=/,;>])))",
				patterns: [
					{
						include: "#javascript-expression",
					},
				],
				beginCaptures: {
					"1": {
						name: "keyword.operator.spread.marko",
					},
				},
			},
			{
				comment: "Consume any whitespace after a comma",
				begin: "\\s*(,(?!,))",
				end: "(?=\\S)",
				captures: {
					"1": {
						name: "punctuation.separator.comma.marko",
					},
				},
			},
			{
				include: "#invalid",
			},
		],
	},
	"attr-value": {
		comment: "Attribute value",
		name: "meta.embedded.ts",
		contentName: "source.ts",
		begin: "\\s*(:?=)\\s*",
		end: "(?=[,;\\]]|/>|(?<=[^>=])>[^>=]|(?<!(?:^|[!~*%&^|?:]|[!~*%&^|?/<>+=-]=|=>|>{2,}|[^.]\\.|[^-]-|^\\s*\\+\\+|[^+]\\+{2}*\\+|[a-zA-Z0-9%).<\\]}]\\s*/|\\b(?<![.]\\s*)(?:await|async|class|function|keyof|new|typeof|void))\\s*)(?:\\n|[ \\t]+(?![\\n{(+!~*%&^|?:]|[<>/=-]=|=>|>{2,}|\\.[^.]|-[^-]|/[^>]|(?:in|instanceof|as|extends)\\s+[^:=/,;>])))",
		patterns: [
			{
				include: "#javascript-expression",
			},
		],
		beginCaptures: {
			"1": {
				patterns: [
					{
						include: "source.ts",
					},
				],
			},
		},
	},
	"concise-html-block": {
		comment: "--- HTML block within concise mode content. ---",
		name: "meta.section.marko-html-block",
		begin: "\\s*(--+)\\s*$",
		end: "\\1",
		patterns: [
			{
				include: "#content-html-mode",
			},
		],
		beginCaptures: {
			"1": {
				name: "punctuation.section.embedded.scope.begin.marko",
			},
		},
		endCaptures: {
			"0": {
				name: "punctuation.section.embedded.scope.end.marko",
			},
		},
	},
	"concise-html-line": {
		comment:
			"-- HTML line within concise mode content. (content-html-mode w/o scriptlet)",
		name: "meta.section.marko-html-line",
		match: "\\s*(--+)(?=\\s+\\S)(.*)($)",
		captures: {
			"1": {
				name: "punctuation.section.embedded.scope.begin.marko",
			},
			"2": {
				patterns: [
					{
						include: "#cdata",
					},
					{
						include: "#doctype",
					},
					{
						include: "#declaration",
					},
					{
						include: "#html-comment",
					},
					{
						include: "#tag-html",
					},
					{
						comment: "Match escape characters in text.",
						name: "text.marko",
						match: "\\\\.",
					},
					{
						include: "#placeholder",
					},
					{
						comment: "Match anything else as text.",
						name: "text.marko",
						match: ".+?",
					},
				],
			},
			"3": {
				name: "punctuation.section.embedded.scope.end.marko",
			},
		},
	},
	"concise-semi-eol": {
		comment:
			"Match spaces followed by a semi that represents the end of the line in concise mode.",
		begin: "\\s*(;)",
		end: "$",
		patterns: [
			{
				include: "#javascript-comments",
			},
			{
				include: "#html-comment",
			},
			{
				include: "#invalid",
			},
		],
		beginCaptures: {
			"1": {
				name: "punctuation.terminator.marko",
			},
		},
	},
	"concise-attr-group": {
		comment:
			"Matches a group of non newline sensitive attributes in square brackets.",
		begin: "\\s*(\\[)",
		end: "]",
		patterns: [
			{
				include: "#concise-attr-group",
			},
			{
				begin: "\\s+",
				end: "(?=\\S)",
			},
			{
				include: "#attrs",
			},
			{
				include: "#invalid",
			},
		],
		beginCaptures: {
			"1": {
				name: "punctuation.section.scope.begin.marko",
			},
		},
		endCaptures: {
			"0": {
				name: "punctuation.section.scope.end.marko",
			},
		},
	},
	"concise-open-tag-content": {
		comment:
			"Handles everything from the start of the tag name until the body content begins.",
		patterns: [
			{
				include: "#tag-before-attrs",
			},
			{
				include: "#concise-semi-eol",
			},
			{
				comment: "Matches unenclosed concise mode attributes.",
				begin: "(?!^)[ \\t]",
				end: "(?=--)|(?=\\n)",
				patterns: [
					{
						include: "#concise-semi-eol",
					},
					{
						include: "#concise-attr-group",
					},
					{
						begin: "[ \\t]+",
						end: "(?=\\S|\\n)",
					},
					{
						include: "#attrs",
					},
					{
						include: "#invalid",
					},
				],
			},
		],
	},
	"concise-comment-block": {
		comment: "--- Embedded concise comment content block. ---",
		name: "meta.section.marko-comment-block",
		begin: "\\s*(--+)\\s*$",
		end: "\\1",
		patterns: [
			{
				include: "#content-embedded-comment",
			},
		],
		beginCaptures: {
			"1": {
				name: "punctuation.section.embedded.scope.begin.marko",
			},
		},
		endCaptures: {
			"0": {
				name: "punctuation.section.embedded.scope.end.marko",
			},
		},
	},
	"concise-comment-line": {
		comment: "-- Embedded concise comment content line.",
		name: "meta.section.marko-comment-line",
		applyEndPatternLast: 1,
		begin: "\\s*(--+)",
		end: "$",
		patterns: [
			{
				include: "#content-embedded-comment",
			},
		],
		beginCaptures: {
			"1": {
				name: "punctuation.section.embedded.scope.begin.marko",
			},
		},
		endCaptures: {
			"0": {
				name: "punctuation.section.embedded.scope.end.marko",
			},
		},
	},
	"concise-script-block": {
		comment: "--- Embedded concise script content block. ---",
		name: "meta.section.marko-script-block",
		begin: "\\s*(--+)\\s*$",
		end: "\\1",
		patterns: [
			{
				include: "#content-embedded-script",
			},
		],
		beginCaptures: {
			"1": {
				name: "punctuation.section.embedded.scope.begin.marko",
			},
		},
		endCaptures: {
			"0": {
				name: "punctuation.section.embedded.scope.end.marko",
			},
		},
	},
	"concise-script-line": {
		comment: "-- Embedded concise script content line.",
		name: "meta.section.marko-script-line",
		applyEndPatternLast: 1,
		begin: "\\s*(--+)",
		end: "$",
		patterns: [
			{
				include: "#content-embedded-script",
			},
		],
		beginCaptures: {
			"1": {
				name: "punctuation.section.embedded.scope.begin.marko",
			},
		},
		endCaptures: {
			"0": {
				name: "punctuation.section.embedded.scope.end.marko",
			},
		},
	},
	"concise-style-block": {
		comment: "--- Embedded concise style content block. ---",
		name: "meta.section.marko-style-block",
		contentName: "source.css",
		begin: "\\s*(--+)\\s*$",
		end: "\\1",
		patterns: [
			{
				include: "#content-embedded-style",
			},
		],
		beginCaptures: {
			"1": {
				name: "punctuation.section.embedded.scope.begin.marko",
			},
		},
		endCaptures: {
			"0": {
				name: "punctuation.section.embedded.scope.end.marko",
			},
		},
	},
	"concise-style-block-less": {
		comment: "--- Embedded concise style content block. ---",
		name: "meta.section.marko-style-block",
		contentName: "source.less",
		begin: "\\s*(--+)\\s*$",
		end: "\\1",
		patterns: [
			{
				include: "#content-embedded-style-less",
			},
		],
		beginCaptures: {
			"1": {
				name: "punctuation.section.embedded.scope.begin.marko",
			},
		},
		endCaptures: {
			"0": {
				name: "punctuation.section.embedded.scope.end.marko",
			},
		},
	},
	"concise-style-block-scss": {
		comment: "--- Embedded concise style content block. ---",
		name: "meta.section.marko-style-block",
		contentName: "source.scss",
		begin: "\\s*(--+)\\s*$",
		end: "\\1",
		patterns: [
			{
				include: "#content-embedded-style-scss",
			},
		],
		beginCaptures: {
			"1": {
				name: "punctuation.section.embedded.scope.begin.marko",
			},
		},
		endCaptures: {
			"0": {
				name: "punctuation.section.embedded.scope.end.marko",
			},
		},
	},
	"concise-style-line": {
		comment: "-- Embedded concise style content line.",
		name: "meta.section.marko-style-line",
		contentName: "source.css",
		applyEndPatternLast: 1,
		begin: "\\s*(--+)",
		end: "$",
		patterns: [
			{
				include: "#content-embedded-style",
			},
		],
		beginCaptures: {
			"1": {
				name: "punctuation.section.embedded.scope.begin.marko",
			},
		},
		endCaptures: {
			"0": {
				name: "punctuation.section.embedded.scope.end.marko",
			},
		},
	},
	"concise-style-line-less": {
		comment: "-- Embedded concise style content line.",
		name: "meta.section.marko-style-line",
		contentName: "source.less",
		applyEndPatternLast: 1,
		begin: "\\s*(--+)",
		end: "$",
		patterns: [
			{
				include: "#content-embedded-style-less",
			},
		],
		beginCaptures: {
			"1": {
				name: "punctuation.section.embedded.scope.begin.marko",
			},
		},
		endCaptures: {
			"0": {
				name: "punctuation.section.embedded.scope.end.marko",
			},
		},
	},
	"concise-style-line-scss": {
		comment: "-- Embedded concise style content line.",
		name: "meta.section.marko-style-line",
		contentName: "source.scss",
		applyEndPatternLast: 1,
		begin: "\\s*(--+)",
		end: "$",
		patterns: [
			{
				include: "#content-embedded-style-scss",
			},
		],
		beginCaptures: {
			"1": {
				name: "punctuation.section.embedded.scope.begin.marko",
			},
		},
		endCaptures: {
			"0": {
				name: "punctuation.section.embedded.scope.end.marko",
			},
		},
	},
	"content-concise-mode": {
		comment: "Concise mode content block.",
		name: "meta.marko-concise-content",
		patterns: [
			{
				include: "#scriptlet",
			},
			{
				include: "#javascript-comments",
			},
			{
				include: "#cdata",
			},
			{
				include: "#doctype",
			},
			{
				include: "#declaration",
			},
			{
				include: "#html-comment",
			},
			{
				include: "#concise-html-block",
			},
			{
				include: "#concise-html-line",
			},
			{
				include: "#invalid-close-tag",
			},
			{
				include: "#tag-html",
			},
			{
				comment: "A concise html tag.",
				patterns: [
					{
						comment: "Concise Marko html-comment tag",
						begin: "^(\\s*)(?=html-comment\\b)",
						"while": "(?=^\\1\\s+(\\S|$))",
						patterns: [
							{
								include: "#concise-open-tag-content",
							},
							{
								include: "#concise-comment-block",
							},
							{
								include: "#concise-comment-line",
							},
						],
					},
					{
						comment: "Concise style tag less",
						begin: "^(\\s*)(?=style\\b[^\\s]*\\.less\\b)",
						"while": "(?=^\\1\\s+(\\S|$))",
						patterns: [
							{
								include: "#concise-open-tag-content",
							},
							{
								include: "#concise-style-block-less",
							},
							{
								include: "#concise-style-line-less",
							},
						],
					},
					{
						comment: "Concise style tag scss",
						begin: "^(\\s*)(?=style\\b[^\\s]*\\.scss\\b)",
						"while": "(?=^\\1\\s+(\\S|$))",
						patterns: [
							{
								include: "#concise-open-tag-content",
							},
							{
								include: "#concise-style-block-scss",
							},
							{
								include: "#concise-style-line-scss",
							},
						],
					},
					{
						comment: "Concise style tag js/ts",
						begin: "^(\\s*)(?=style\\b[^\\s]*\\.[tj]s\\b)",
						"while": "(?=^\\1\\s+(\\S|$))",
						patterns: [
							{
								include: "#concise-open-tag-content",
							},
							{
								include: "#concise-script-block",
							},
							{
								include: "#concise-script-line",
							},
						],
					},
					{
						comment: "Concise style tag",
						begin: "^(\\s*)(?=style\\b)",
						"while": "(?=^\\1\\s+(\\S|$))",
						patterns: [
							{
								include: "#concise-open-tag-content",
							},
							{
								include: "#concise-style-block",
							},
							{
								include: "#concise-style-line",
							},
						],
					},
					{
						comment: "Concise script tag",
						begin: "^(\\s*)(?=script\\b)",
						"while": "(?=^\\1\\s+(\\S|$))",
						patterns: [
							{
								include: "#concise-open-tag-content",
							},
							{
								include: "#concise-script-block",
							},
							{
								include: "#concise-script-line",
							},
						],
					},
					{
						comment: "Normal concise tag",
						begin: "^([ \\t]*)(?=[a-zA-Z0-9_$@.#])",
						"while": "(?=^\\1\\s+(\\S|$))",
						patterns: [
							{
								include: "#concise-open-tag-content",
							},
							{
								include: "#content-concise-mode",
							},
						],
					},
				],
			},
		],
	},
	"content-embedded-comment": {
		comment: "Match comment content, but allow Marko placeholders.",
		patterns: [
			{
				include: "#placeholder",
			},
			{
				name: "comment.block.marko",
				match: ".",
			},
		],
	},
	"content-embedded-script": {
		comment: "Match script content, but allow Marko placeholders.",
		name: "meta.embedded.ts",
		patterns: [
			{
				include: "#placeholder",
			},
			{
				include: "source.ts",
			},
		],
	},
	"content-embedded-style": {
		comment: "Match css content, but allow Marko placeholders.",
		name: "meta.embedded.css",
		patterns: [
			{
				include: "#placeholder",
			},
			{
				include: "source.css",
			},
		],
	},
	"content-embedded-style-less": {
		comment: "Match less content, but allow Marko placeholders.",
		name: "meta.embedded.css.less",
		patterns: [
			{
				include: "#placeholder",
			},
			{
				include: "source.css.less",
			},
		],
	},
	"content-embedded-style-scss": {
		comment: "Match scss content, but allow Marko placeholders.",
		name: "meta.embedded.css.scss",
		patterns: [
			{
				include: "#placeholder",
			},
			{
				include: "source.css.scss",
			},
		],
	},
	"content-html-mode": {
		comment: "HTML mode content block.",
		patterns: [
			{
				include: "#scriptlet",
			},
			{
				include: "#cdata",
			},
			{
				include: "#doctype",
			},
			{
				include: "#declaration",
			},
			{
				include: "#html-comment",
			},
			{
				include: "#invalid-close-tag",
			},
			{
				include: "#tag-html",
			},
			{
				match: "\\\\.",
				name: "text.marko",
			},
			{
				include: "#placeholder",
			},
			{
				match: ".+?",
				name: "text.marko",
			},
		],
	},
	"html-args-or-method": {
		comment:
			"Matches parenthesis for arguments or continues into method shorthand if a { is found.",
		patterns: [
			{
				comment: "Javascript style arguments",
				name: "meta.embedded.ts",
				contentName: "source.ts",
				begin: "\\s*(?=\\()",
				end: "(?<=\\))",
				patterns: [
					{
						include: "source.ts",
					},
				],
			},
			{
				comment: "Attribute method shorthand following parens",
				name: "meta.embedded.ts",
				contentName: "source.ts",
				begin: "(?<=\\))\\s*(?={)",
				end: "(?<=})",
				patterns: [
					{
						include: "source.ts",
					},
				],
			},
		],
	},
	"html-comment": {
		comment: "HTML comment",
		name: "comment.block.marko",
		begin: "\\s*(<!(--)?)",
		end: "\\2>",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.comment.marko",
			},
		},
		endCaptures: {
			"0": {
				name: "punctuation.definition.comment.marko",
			},
		},
	},
	cdata: {
		name: "meta.tag.metadata.cdata.marko",
		contentName: "string.other.inline-data.marko",
		begin: "\\s*<!\\[CDATA\\[",
		end: "]]>",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.tag.begin.marko",
			},
		},
		endCaptures: {
			"0": {
				name: "punctuation.definition.tag.end.marko",
			},
		},
	},
	doctype: {
		name: "meta.tag.metadata.doctype.marko",
		begin: "\\s*<!(?=(?i:DOCTYPE\\s))",
		end: ">",
		patterns: [
			{
				match: "\\G(?i:DOCTYPE)",
				name: "entity.name.tag.marko",
			},
			{
				begin: '"',
				end: '"',
				name: "string.quoted.double.marko",
			},
			{
				match: "[^\\s>]+",
				name: "entity.other.attribute-name.marko",
			},
		],
		beginCaptures: {
			"0": {
				name: "punctuation.definition.tag.begin.marko",
			},
		},
		endCaptures: {
			"0": {
				name: "punctuation.definition.tag.end.marko",
			},
		},
	},
	declaration: {
		name: "meta.tag.metadata.processing.xml.marko",
		begin: "(<\\?)\\s*([a-zA-Z0-9_$-]*)",
		end: "(\\??>)",
		patterns: [
			{
				match: "((?:[^\\s=?>]+|\\?(?!>))+)(=)(?:(\"(?:[^\"\\\\]+|\\\\.)*\")|('(?:[^'\\\\]+|\\\\.)*')|((?:[^\\s?>]+|\\?(?!>))+))",
				captures: {
					"1": {
						name: "entity.other.attribute-name.marko",
					},
					"2": {
						name: "punctuation.separator.key-value.html",
					},
					"3": {
						name: "string.quoted.double.marko",
					},
					"4": {
						name: "string.quoted.single.marko",
					},
					"5": {
						name: "string.unquoted.marko",
					},
				},
			},
		],
		captures: {
			"1": {
				name: "punctuation.definition.tag.marko",
			},
			"2": {
				name: "entity.name.tag.marko",
			},
		},
	},
	invalid: {
		comment:
			"Used to highlight characters in places where all valid characters should have been matched.",
		match: "\\S",
		name: "invalid.illegal.character-not-allowed-here.marko",
	},
	"javascript-comments": {
		patterns: [
			{
				comment: "JavaScript /* block comment */",
				contentName: "source.ts",
				begin: "\\s*(?=/\\*)",
				end: "(?<=\\*/)",
				patterns: [
					{
						include: "source.ts",
					},
				],
			},
			{
				comment: "JavaScript // single line comment",
				contentName: "source.ts",
				match: "\\s*//.*$",
				captures: {
					"0": {
						patterns: [
							{
								include: "source.ts",
							},
						],
					},
				},
			},
		],
	},
	"javascript-expression": {
		comment:
			"Matches JavaScript source code, but always continues for certain types of expressions.",
		patterns: [
			{
				comment:
					"We must match the some expressions ourselves since otherwise the js grammar can overstep.",
				match: "(?:\\s*\\b(?:as|await|extends|in|instanceof|keyof|new|typeof|void))+\\s+(?![:=/,;>])[a-zA-Z0-9_$@#]*",
				captures: {
					"0": {
						patterns: [
							{
								include: "source.ts",
							},
						],
					},
				},
			},
			{
				comment:
					"We must match regexps since otherwise it can be cutoff by self closed tags or comments.",
				contentName: "source.ts",
				applyEndPatternLast: 1,
				match: "(?<![a-zA-Z0-9%).<\\]}]\\s*)/(?:[^\\\\\\[/]+|\\\\.|\\[(?:[^\\\\\\]]+|\\\\.)*\\])*/[a-zA-Z]*",
				captures: {
					"0": {
						name: "string.regexp.ts",
						patterns: [
							{
								include: "source.ts#regexp",
							},
							{
								include: "source.ts",
							},
						],
					},
				},
			},
			{
				include: "source.ts",
			},
		],
	},
	"open-tag-content": {
		comment:
			"Matches everything within an open tag from tag name to the last attr.",
		patterns: [
			{
				include: "#tag-before-attrs",
			},
			{
				comment:
					"Attributes begin after the first space within the tag name",
				begin: "(?!/?>)",
				end: "(?=/?>)",
				patterns: [
					{
						include: "#attrs",
					},
				],
			},
		],
	},
	placeholder: {
		comment: "A Marko template literal expression (allows $!{}).",
		contentName: "source.ts",
		begin: "\\$!?{",
		end: "}",
		patterns: [
			{
				include: "source.ts",
			},
		],
		beginCaptures: {
			"0": {
				name: "punctuation.definition.template-expression.begin.ts",
			},
		},
		endCaptures: {
			"0": {
				name: "punctuation.definition.template-expression.end.ts",
			},
		},
	},
	"javascript-placeholder": {
		comment: "A JavaScript style template literal expression.",
		contentName: "source.ts",
		begin: "\\${",
		end: "}",
		patterns: [
			{
				include: "source.ts",
			},
		],
		beginCaptures: {
			"0": {
				name: "punctuation.definition.template-expression.begin.ts",
			},
		},
		endCaptures: {
			"0": {
				name: "punctuation.definition.template-expression.end.ts",
			},
		},
	},
	scriptlet: {
		comment: "An inline JavaScript scriptlet.",
		name: "meta.embedded.ts",
		contentName: "source.ts",
		begin: "^\\s*(\\$)\\s+",
		end: "$",
		patterns: [
			{
				include: "source.ts",
			},
		],
		beginCaptures: {
			"1": {
				name: "keyword.control.scriptlet.marko",
			},
		},
	},
	"tag-before-attrs": {
		comment: "Everything in a tag before the attributes content",
		patterns: [
			{
				include: "#tag-name",
			},
			{
				include: "#tag-shorthand-class-or-id",
			},
			{
				comment: "Variable for a tag",
				name: "meta.embedded.ts",
				contentName: "source.ts",
				begin: "/(?![/*])",
				end: "(?=[;(|/>]|:?=|\\s+[^:]|$)",
				beginCaptures: {
					"0": {
						name: "punctuation.separator.tag-variable.marko",
					},
				},
				patterns: [
					{
						comment: "Match identifiers",
						match: "[a-zA-Z$_][0-9a-zA-Z$_]*",
						name: "variable.other.constant.object.ts",
					},
					{
						include: "source.ts#destructuring-variable",
					},
					{
						comment: "Match type",
						begin: "\\s*(:)(?!=)",
						end: "(?=[,;\\](]|/>|(?<=[^>=])>[^>=]|(?<!(?:^|[!~*%&^|?:]|[!~*%&^|?/<>+=-]=|=>|>{2,}|[^.]\\.|[^-]-|^\\s*\\+\\+|[^+]\\+{2}*\\+|[a-zA-Z0-9%).<\\]}]\\s*/|\\b(?<![.]\\s*)(?:await|async|class|function|keyof|new|typeof|void))\\s*)(?:\\n|[ \\t]+(?![\\n{+!~*%&^|?:]|[<>/=-]=|=>|>{2,}|\\.[^.]|-[^-]|/[^>]|(?:in|instanceof|as|extends)\\s+[^:=/,;>])))",
						patterns: [
							{
								include: "source.ts#type",
							},
							{
								include: "#javascript-expression",
							},
						],
						beginCaptures: {
							"1": {
								name: "keyword.operator.type.annotation.ts",
							},
						},
					},
					{
						include: "#javascript-expression",
					},
				],
			},
			{
				comment: "Parameters for a tag",
				contentName: "source.ts",
				begin: "\\|",
				end: "\\|",
				beginCaptures: {
					"0": {
						name: "punctuation.section.scope.begin.marko",
					},
				},
				endCaptures: {
					"0": {
						name: "punctuation.section.scope.end.marko",
					},
				},
				patterns: [
					{
						include: "source.ts#function-parameters-body",
					},
					{
						include: "source.ts",
					},
				],
			},
			{
				include: "#html-args-or-method",
			},
			{
				include: "#attr-value",
			},
		],
	},
	"tag-html": {
		comment: "Matches an HTML tag and its contents",
		patterns: [
			{
				comment: "HTML void elements",
				begin: "\\s*(<)(?=(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)\\b)",
				end: "/?>",
				patterns: [
					{
						include: "#open-tag-content",
					},
				],
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.begin.marko",
					},
				},
				endCaptures: {
					"0": {
						name: "punctuation.definition.tag.end.marko",
					},
				},
			},
			{
				comment: "Marko html-comment tag",
				begin: "\\s*(<)(?=html-comment\\b)",
				end: "/>|(?<=\\>)",
				patterns: [
					{
						include: "#open-tag-content",
					},
					{
						comment: "Style comment content",
						begin: ">",
						end: "\\s*(</)(html-comment)?(>)",
						patterns: [
							{
								include: "#content-embedded-comment",
							},
						],
						beginCaptures: {
							"0": {
								name: "punctuation.definition.tag.end.marko",
							},
						},
						endCaptures: {
							"1": {
								name: "punctuation.definition.tag.begin.marko",
							},
							"2": {
								patterns: [
									{
										include: "#tag-name",
									},
								],
							},
							"3": {
								name: "punctuation.definition.tag.end.marko",
							},
						},
					},
				],
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.begin.marko",
					},
				},
				endCaptures: {
					"0": {
						name: "punctuation.definition.tag.end.marko",
					},
				},
			},
			{
				comment: "HTML style tag with less",
				begin: "\\s*(<)(?=style\\b[^\\s]*\\.less\\b)",
				end: "/>|(?<=\\>)",
				patterns: [
					{
						include: "#open-tag-content",
					},
					{
						comment: "Style body content",
						contentName: "source.less",
						begin: ">",
						end: "\\s*(</)(style)?(>)",
						patterns: [
							{
								include: "#content-embedded-style-less",
							},
						],
						beginCaptures: {
							"0": {
								name: "punctuation.definition.tag.end.marko",
							},
						},
						endCaptures: {
							"1": {
								name: "punctuation.definition.tag.begin.marko",
							},
							"2": {
								patterns: [
									{
										include: "#tag-name",
									},
								],
							},
							"3": {
								name: "punctuation.definition.tag.end.marko",
							},
						},
					},
				],
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.begin.marko",
					},
				},
				endCaptures: {
					"0": {
						name: "punctuation.definition.tag.end.marko",
					},
				},
			},
			{
				comment: "HTML style tag with scss",
				begin: "\\s*(<)(?=style\\b[^\\s]*\\.scss\\b)",
				end: "/>|(?<=\\>)",
				patterns: [
					{
						include: "#open-tag-content",
					},
					{
						comment: "Style body content",
						contentName: "source.less",
						begin: ">",
						end: "\\s*(</)(style)?(>)",
						patterns: [
							{
								include: "#content-embedded-style-scss",
							},
						],
						beginCaptures: {
							"0": {
								name: "punctuation.definition.tag.end.marko",
							},
						},
						endCaptures: {
							"1": {
								name: "punctuation.definition.tag.begin.marko",
							},
							"2": {
								patterns: [
									{
										include: "#tag-name",
									},
								],
							},
							"3": {
								name: "punctuation.definition.tag.end.marko",
							},
						},
					},
				],
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.begin.marko",
					},
				},
				endCaptures: {
					"0": {
						name: "punctuation.definition.tag.end.marko",
					},
				},
			},
			{
				comment: "HTML style tag with js/ts",
				begin: "\\s*(<)(?=style\\b[^\\s]*\\.[tj]s\\b)",
				end: "/>|(?<=\\>)",
				patterns: [
					{
						include: "#open-tag-content",
					},
					{
						comment: "Style body content",
						contentName: "source.ts",
						begin: ">",
						end: "\\s*(</)(style)?(>)",
						patterns: [
							{
								include: "#content-embedded-script",
							},
						],
						beginCaptures: {
							"0": {
								name: "punctuation.definition.tag.end.marko",
							},
						},
						endCaptures: {
							"1": {
								name: "punctuation.definition.tag.begin.marko",
							},
							"2": {
								patterns: [
									{
										include: "#tag-name",
									},
								],
							},
							"3": {
								name: "punctuation.definition.tag.end.marko",
							},
						},
					},
				],
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.begin.marko",
					},
				},
				endCaptures: {
					"0": {
						name: "punctuation.definition.tag.end.marko",
					},
				},
			},
			{
				comment: "HTML style tag",
				begin: "\\s*(<)(?=style\\b)",
				end: "/>|(?<=\\>)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.begin.marko",
					},
				},
				endCaptures: {
					"0": {
						name: "punctuation.definition.tag.end.marko",
					},
				},
				patterns: [
					{
						include: "#open-tag-content",
					},
					{
						comment: "Style body content",
						contentName: "source.css",
						begin: ">",
						end: "\\s*(</)(style)?(>)",
						patterns: [
							{
								include: "#content-embedded-style",
							},
						],
						beginCaptures: {
							"0": {
								name: "punctuation.definition.tag.end.marko",
							},
						},
						endCaptures: {
							"1": {
								name: "punctuation.definition.tag.begin.marko",
							},
							"2": {
								patterns: [
									{
										include: "#tag-name",
									},
								],
							},
							"3": {
								name: "punctuation.definition.tag.end.marko",
							},
						},
					},
				],
			},
			{
				comment: "HTML script tag",
				begin: "\\s*(<)(?=script\\b)",
				end: "/>|(?<=\\>)",
				patterns: [
					{
						include: "#open-tag-content",
					},
					{
						comment: "Script body content",
						contentName: "source.ts",
						begin: ">",
						end: "\\s*(</)(script)?(>)",
						patterns: [
							{
								include: "#content-embedded-script",
							},
						],
						beginCaptures: {
							"0": {
								name: "punctuation.definition.tag.end.marko",
							},
						},
						endCaptures: {
							"1": {
								name: "punctuation.definition.tag.begin.marko",
							},
							"2": {
								patterns: [
									{
										include: "#tag-name",
									},
								],
							},
							"3": {
								name: "punctuation.definition.tag.end.marko",
							},
						},
					},
				],
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.begin.marko",
					},
				},
				endCaptures: {
					"0": {
						name: "punctuation.definition.tag.end.marko",
					},
				},
			},
			{
				comment: "HTML normal tag",
				begin: "\\s*(<)(?=[a-zA-Z0-9_$@.#])",
				end: "/>|(?<=\\>)",
				patterns: [
					{
						include: "#open-tag-content",
					},
					{
						comment: "Body content",
						begin: ">",
						end: "\\s*(</)([a-zA-Z0-9_$:@.#-]+)?(.*?)(>)",
						patterns: [
							{
								include: "#content-html-mode",
							},
						],
						beginCaptures: {
							"0": {
								name: "punctuation.definition.tag.end.marko",
							},
						},
						endCaptures: {
							"1": {
								name: "punctuation.definition.tag.begin.marko",
							},
							"2": {
								patterns: [
									{
										include: "#tag-name",
									},
									{
										include: "#tag-shorthand-class-or-id",
									},
								],
							},
							"3": {
								patterns: [
									{
										include: "#invalid",
									},
								],
							},
							"4": {
								name: "punctuation.definition.tag.end.marko",
							},
						},
					},
				],
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.begin.marko",
					},
				},
				endCaptures: {
					"0": {
						name: "punctuation.definition.tag.end.marko",
					},
				},
			},
		],
	},
	"tag-shorthand-class-or-id": {
		comment: "Shorthand class or ID attribute",
		begin: "(?=[#.])",
		end: "$|(?=--|[^a-zA-Z0-9_$#.-])",
		patterns: [
			{
				include: "#javascript-placeholder",
			},
			{
				match: "(?:[#.a-zA-Z0-9_-]+|\\$(?!{))+",
				name: "entity.other.attribute-name.marko",
			},
		],
	},
	"tag-name": {
		comment: "Matches the tag name.",
		patterns: [
			{
				match: "\\G(style)\\b(\\.[a-zA-Z0-9$_-]+(?:\\.[a-zA-Z0-9$_-]+)*)|([a-zA-Z0-9_@](?:[a-zA-Z0-9_@-]+|:(?!=))*)",
				captures: {
					"1": {
						name: "support.type.builtin.marko",
					},
					"2": {
						name: "storage.type.marko.css",
					},
					"3": {
						patterns: [
							{
								name: "support.type.builtin.marko",
								match: "(attrs|style|effect|lifecycle)(?=\\b)",
							},
							{
								name: "keyword.control.flow.marko",
								match: "(for|if|while|else-if|else|try|await|return)(?=\\b)",
							},
							{
								name: "support.function.marko",
								match: "(macro|tag|async|let|const|set|get|id|html-comment)(?=\\b)(?![-:@])",
							},
							{
								comment: "Attribute tag.",
								name: "entity.other.attribute-name.marko",
								match: "@.+",
							},
							{
								comment: "Native or userland tag.",
								name: "entity.name.tag.marko",
								match: ".+",
							},
						],
					},
				},
			},
			{
				begin: "(?=[a-zA-Z0-9$_]|-[^-])",
				end: "(?=[^a-zA-Z0-9$_-]|$)",
				patterns: [
					{
						include: "#javascript-placeholder",
					},
					{
						match: "(?:[a-zA-Z0-9_-]+|\\$(?!{))+",
						name: "entity.name.tag.marko",
					},
				],
			},
		],
	},
	"invalid-close-tag": {
		name: "invalid.illegal.character-not-allowed-here.marko",
		begin: "\\s*</.*?",
		end: ">",
	},
};
const marko_tmLanguage = {
	name: name,
	scopeName: scopeName,
	uuid: uuid,
	fileTypes: fileTypes,
	patterns: patterns,
	repository: repository,
};

export {
	marko_tmLanguage as default,
	fileTypes,
	name,
	patterns,
	repository,
	scopeName,
	uuid,
};
