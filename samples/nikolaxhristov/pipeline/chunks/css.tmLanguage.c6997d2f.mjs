const information_for_contributors = [
	"This file has been converted from https://github.com/atom/language-css/blob/master/grammars/css.cson",
	"If you want to provide a fix or improvement, please create a pull request against the original repository.",
	"Once accepted there, we are happy to receive an update request.",
];
const version =
	"https://github.com/atom/language-css/commit/4a6dc90f332bfa72c88192513435a64013d9aad4";
const name = "css";
const scopeName = "source.css";
const patterns = [
	{
		include: "#comment-block",
	},
	{
		include: "#escapes",
	},
	{
		include: "#combinators",
	},
	{
		include: "#selector",
	},
	{
		include: "#at-rules",
	},
	{
		include: "#rule-list",
	},
];
const repository = {
	"at-rules": {
		patterns: [
			{
				begin: "\\A(?:\\xEF\\xBB\\xBF)?(?i:(?=\\s*@charset\\b))",
				end: ";|(?=$)",
				endCaptures: {
					"0": {
						name: "punctuation.terminator.rule.css",
					},
				},
				name: "meta.at-rule.charset.css",
				patterns: [
					{
						captures: {
							"1": {
								name: "invalid.illegal.not-lowercase.charset.css",
							},
							"2": {
								name: "invalid.illegal.leading-whitespace.charset.css",
							},
							"3": {
								name: "invalid.illegal.no-whitespace.charset.css",
							},
							"4": {
								name: "invalid.illegal.whitespace.charset.css",
							},
							"5": {
								name: "invalid.illegal.not-double-quoted.charset.css",
							},
							"6": {
								name: "invalid.illegal.unclosed-string.charset.css",
							},
							"7": {
								name: "invalid.illegal.unexpected-characters.charset.css",
							},
						},
						match: '(?x)        # Possible errors:\n\\G\n((?!@charset)@\\w+)   # Not lowercase (@charset is case-sensitive)\n|\n\\G(\\s+)             # Preceding whitespace\n|\n(@charset\\S[^;]*)    # No whitespace after @charset\n|\n(?<=@charset)         # Before quoted charset name\n(\\x20{2,}|\\t+)      # More than one space used, or a tab\n|\n(?<=@charset\\x20)    # Beginning of charset name\n([^";]+)              # Not double-quoted\n|\n("[^"]+$)             # Unclosed quote\n|\n(?<=")                # After charset name\n([^;]+)               # Unexpected junk instead of semicolon',
					},
					{
						captures: {
							"1": {
								name: "keyword.control.at-rule.charset.css",
							},
							"2": {
								name: "punctuation.definition.keyword.css",
							},
						},
						match: "((@)charset)(?=\\s)",
					},
					{
						begin: '"',
						beginCaptures: {
							"0": {
								name: "punctuation.definition.string.begin.css",
							},
						},
						end: '"|$',
						endCaptures: {
							"0": {
								name: "punctuation.definition.string.end.css",
							},
						},
						name: "string.quoted.double.css",
						patterns: [
							{
								begin: '(?:\\G|^)(?=(?:[^"])+$)',
								end: "$",
								name: "invalid.illegal.unclosed.string.css",
							},
						],
					},
				],
			},
			{
				begin: "(?i)((@)import)(?:\\s+|$|(?=['\"]|/\\*))",
				beginCaptures: {
					"1": {
						name: "keyword.control.at-rule.import.css",
					},
					"2": {
						name: "punctuation.definition.keyword.css",
					},
				},
				end: ";",
				endCaptures: {
					"0": {
						name: "punctuation.terminator.rule.css",
					},
				},
				name: "meta.at-rule.import.css",
				patterns: [
					{
						begin: "\\G\\s*(?=/\\*)",
						end: "(?<=\\*/)\\s*",
						patterns: [
							{
								include: "#comment-block",
							},
						],
					},
					{
						include: "#string",
					},
					{
						include: "#url",
					},
					{
						include: "#media-query-list",
					},
				],
			},
			{
				begin: "(?i)((@)font-face)(?=\\s*|{|/\\*|$)",
				beginCaptures: {
					"1": {
						name: "keyword.control.at-rule.font-face.css",
					},
					"2": {
						name: "punctuation.definition.keyword.css",
					},
				},
				end: "(?!\\G)",
				name: "meta.at-rule.font-face.css",
				patterns: [
					{
						include: "#comment-block",
					},
					{
						include: "#escapes",
					},
					{
						include: "#rule-list",
					},
				],
			},
			{
				begin: "(?i)(@)page(?=[\\s:{]|/\\*|$)",
				captures: {
					"0": {
						name: "keyword.control.at-rule.page.css",
					},
					"1": {
						name: "punctuation.definition.keyword.css",
					},
				},
				end: "(?=\\s*($|[:{;]))",
				name: "meta.at-rule.page.css",
				patterns: [
					{
						include: "#rule-list",
					},
				],
			},
			{
				begin: "(?i)(?=@media(\\s|\\(|/\\*|$))",
				end: "(?<=})(?!\\G)",
				patterns: [
					{
						begin: "(?i)\\G(@)media",
						beginCaptures: {
							"0": {
								name: "keyword.control.at-rule.media.css",
							},
							"1": {
								name: "punctuation.definition.keyword.css",
							},
						},
						end: "(?=\\s*[{;])",
						name: "meta.at-rule.media.header.css",
						patterns: [
							{
								include: "#media-query-list",
							},
						],
					},
					{
						begin: "{",
						beginCaptures: {
							"0": {
								name: "punctuation.section.media.begin.bracket.curly.css",
							},
						},
						end: "}",
						endCaptures: {
							"0": {
								name: "punctuation.section.media.end.bracket.curly.css",
							},
						},
						name: "meta.at-rule.media.body.css",
						patterns: [
							{
								include: "$self",
							},
						],
					},
				],
			},
			{
				begin: "(?i)(?=@counter-style([\\s'\"{;]|/\\*|$))",
				end: "(?<=})(?!\\G)",
				patterns: [
					{
						begin: "(?i)\\G(@)counter-style",
						beginCaptures: {
							"0": {
								name: "keyword.control.at-rule.counter-style.css",
							},
							"1": {
								name: "punctuation.definition.keyword.css",
							},
						},
						end: "(?=\\s*{)",
						name: "meta.at-rule.counter-style.header.css",
						patterns: [
							{
								include: "#comment-block",
							},
							{
								include: "#escapes",
							},
							{
								captures: {
									"0": {
										patterns: [
											{
												include: "#escapes",
											},
										],
									},
								},
								match: "(?x)\n(?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter\n(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier\n  |\\\\(?:[0-9a-fA-F]{1,6}|.)\n)*",
								name: "variable.parameter.style-name.css",
							},
						],
					},
					{
						begin: "{",
						beginCaptures: {
							"0": {
								name: "punctuation.section.property-list.begin.bracket.curly.css",
							},
						},
						end: "}",
						endCaptures: {
							"0": {
								name: "punctuation.section.property-list.end.bracket.curly.css",
							},
						},
						name: "meta.at-rule.counter-style.body.css",
						patterns: [
							{
								include: "#comment-block",
							},
							{
								include: "#escapes",
							},
							{
								include: "#rule-list-innards",
							},
						],
					},
				],
			},
			{
				begin: "(?i)(?=@document([\\s'\"{;]|/\\*|$))",
				end: "(?<=})(?!\\G)",
				patterns: [
					{
						begin: "(?i)\\G(@)document",
						beginCaptures: {
							"0": {
								name: "keyword.control.at-rule.document.css",
							},
							"1": {
								name: "punctuation.definition.keyword.css",
							},
						},
						end: "(?=\\s*[{;])",
						name: "meta.at-rule.document.header.css",
						patterns: [
							{
								begin: "(?i)(?<![\\w-])(url-prefix|domain|regexp)(\\()",
								beginCaptures: {
									"1": {
										name: "support.function.document-rule.css",
									},
									"2": {
										name: "punctuation.section.function.begin.bracket.round.css",
									},
								},
								end: "\\)",
								endCaptures: {
									"0": {
										name: "punctuation.section.function.end.bracket.round.css",
									},
								},
								name: "meta.function.document-rule.css",
								patterns: [
									{
										include: "#string",
									},
									{
										include: "#comment-block",
									},
									{
										include: "#escapes",
									},
									{
										match: "[^'\")\\s]+",
										name: "variable.parameter.document-rule.css",
									},
								],
							},
							{
								include: "#url",
							},
							{
								include: "#commas",
							},
							{
								include: "#comment-block",
							},
							{
								include: "#escapes",
							},
						],
					},
					{
						begin: "{",
						beginCaptures: {
							"0": {
								name: "punctuation.section.document.begin.bracket.curly.css",
							},
						},
						end: "}",
						endCaptures: {
							"0": {
								name: "punctuation.section.document.end.bracket.curly.css",
							},
						},
						name: "meta.at-rule.document.body.css",
						patterns: [
							{
								include: "$self",
							},
						],
					},
				],
			},
			{
				begin: "(?i)(?=@(?:-(?:webkit|moz|o|ms)-)?keyframes([\\s'\"{;]|/\\*|$))",
				end: "(?<=})(?!\\G)",
				patterns: [
					{
						begin: "(?i)\\G(@)(?:-(?:webkit|moz|o|ms)-)?keyframes",
						beginCaptures: {
							"0": {
								name: "keyword.control.at-rule.keyframes.css",
							},
							"1": {
								name: "punctuation.definition.keyword.css",
							},
						},
						end: "(?=\\s*{)",
						name: "meta.at-rule.keyframes.header.css",
						patterns: [
							{
								include: "#comment-block",
							},
							{
								include: "#escapes",
							},
							{
								captures: {
									"0": {
										patterns: [
											{
												include: "#escapes",
											},
										],
									},
								},
								match: "(?x)\n(?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter\n(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier\n  |\\\\(?:[0-9a-fA-F]{1,6}|.)\n)*",
								name: "variable.parameter.keyframe-list.css",
							},
						],
					},
					{
						begin: "{",
						beginCaptures: {
							"0": {
								name: "punctuation.section.keyframes.begin.bracket.curly.css",
							},
						},
						end: "}",
						endCaptures: {
							"0": {
								name: "punctuation.section.keyframes.end.bracket.curly.css",
							},
						},
						name: "meta.at-rule.keyframes.body.css",
						patterns: [
							{
								include: "#comment-block",
							},
							{
								include: "#escapes",
							},
							{
								captures: {
									"1": {
										name: "entity.other.keyframe-offset.css",
									},
									"2": {
										name: "entity.other.keyframe-offset.percentage.css",
									},
								},
								match: "(?xi)\n(?<![\\w-]) (from|to) (?![\\w-])         # Keywords for 0% | 100%\n|\n([-+]?(?:\\d+(?:\\.\\d+)?|\\.\\d+)%)     # Percentile value",
							},
							{
								include: "#rule-list",
							},
						],
					},
				],
			},
			{
				begin: "(?i)(?=@supports(\\s|\\(|/\\*|$))",
				end: "(?<=})(?!\\G)|(?=;)",
				patterns: [
					{
						begin: "(?i)\\G(@)supports",
						beginCaptures: {
							"0": {
								name: "keyword.control.at-rule.supports.css",
							},
							"1": {
								name: "punctuation.definition.keyword.css",
							},
						},
						end: "(?=\\s*[{;])",
						name: "meta.at-rule.supports.header.css",
						patterns: [
							{
								include: "#feature-query-operators",
							},
							{
								include: "#feature-query",
							},
							{
								include: "#comment-block",
							},
							{
								include: "#escapes",
							},
						],
					},
					{
						begin: "{",
						beginCaptures: {
							"0": {
								name: "punctuation.section.supports.begin.bracket.curly.css",
							},
						},
						end: "}",
						endCaptures: {
							"0": {
								name: "punctuation.section.supports.end.bracket.curly.css",
							},
						},
						name: "meta.at-rule.supports.body.css",
						patterns: [
							{
								include: "$self",
							},
						],
					},
				],
			},
			{
				begin: "(?i)((@)(-(ms|o)-)?viewport)(?=[\\s'\"{;]|/\\*|$)",
				beginCaptures: {
					"1": {
						name: "keyword.control.at-rule.viewport.css",
					},
					"2": {
						name: "punctuation.definition.keyword.css",
					},
				},
				end: "(?=\\s*[@{;])",
				name: "meta.at-rule.viewport.css",
				patterns: [
					{
						include: "#comment-block",
					},
					{
						include: "#escapes",
					},
				],
			},
			{
				begin: "(?i)((@)font-feature-values)(?=[\\s'\"{;]|/\\*|$)\\s*",
				beginCaptures: {
					"1": {
						name: "keyword.control.at-rule.font-feature-values.css",
					},
					"2": {
						name: "punctuation.definition.keyword.css",
					},
				},
				contentName: "variable.parameter.font-name.css",
				end: "(?=\\s*[@{;])",
				name: "meta.at-rule.font-features.css",
				patterns: [
					{
						include: "#comment-block",
					},
					{
						include: "#escapes",
					},
				],
			},
			{
				include: "#font-features",
			},
			{
				begin: "(?i)((@)namespace)(?=[\\s'\";]|/\\*|$)",
				beginCaptures: {
					"1": {
						name: "keyword.control.at-rule.namespace.css",
					},
					"2": {
						name: "punctuation.definition.keyword.css",
					},
				},
				end: ";|(?=[@{])",
				endCaptures: {
					"0": {
						name: "punctuation.terminator.rule.css",
					},
				},
				name: "meta.at-rule.namespace.css",
				patterns: [
					{
						include: "#url",
					},
					{
						captures: {
							"1": {
								patterns: [
									{
										include: "#comment-block",
									},
								],
							},
							"2": {
								name: "entity.name.function.namespace-prefix.css",
								patterns: [
									{
										include: "#escapes",
									},
								],
							},
						},
						match: "(?xi)\n(?:\\G|^|(?<=\\s))\n(?=\n  (?<=\\s|^)                             # Starts with whitespace\n  (?:[-a-zA-Z_]|[^\\x00-\\x7F])          # Then a valid identifier character\n  |\n  \\s*                                   # Possible adjoining whitespace\n  /\\*(?:[^*]|\\*[^/])*\\*/              # Injected comment\n)\n(.*?)                                    # Grouped to embed #comment-block\n(\n  (?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter\n  (?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier\n    |\\\\(?:[0-9a-fA-F]{1,6}|.)\n  )*\n)",
					},
					{
						include: "#comment-block",
					},
					{
						include: "#escapes",
					},
					{
						include: "#string",
					},
				],
			},
			{
				begin: "(?i)(?=@[\\w-]+[^;]+;s*$)",
				end: "(?<=;)(?!\\G)",
				patterns: [
					{
						begin: "(?i)\\G(@)[\\w-]+",
						beginCaptures: {
							"0": {
								name: "keyword.control.at-rule.css",
							},
							"1": {
								name: "punctuation.definition.keyword.css",
							},
						},
						end: ";",
						endCaptures: {
							"0": {
								name: "punctuation.terminator.rule.css",
							},
						},
						name: "meta.at-rule.header.css",
					},
				],
			},
			{
				begin: "(?i)(?=@[\\w-]+(\\s|\\(|{|/\\*|$))",
				end: "(?<=})(?!\\G)",
				patterns: [
					{
						begin: "(?i)\\G(@)[\\w-]+",
						beginCaptures: {
							"0": {
								name: "keyword.control.at-rule.css",
							},
							"1": {
								name: "punctuation.definition.keyword.css",
							},
						},
						end: "(?=\\s*[{;])",
						name: "meta.at-rule.header.css",
					},
					{
						begin: "{",
						beginCaptures: {
							"0": {
								name: "punctuation.section.begin.bracket.curly.css",
							},
						},
						end: "}",
						endCaptures: {
							"0": {
								name: "punctuation.section.end.bracket.curly.css",
							},
						},
						name: "meta.at-rule.body.css",
						patterns: [
							{
								include: "$self",
							},
						],
					},
				],
			},
		],
	},
	"color-keywords": {
		patterns: [
			{
				match: "(?i)(?<![\\w-])(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)(?![\\w-])",
				name: "support.constant.color.w3c-standard-color-name.css",
			},
			{
				match: "(?xi) (?<![\\w-])\n(aliceblue|antiquewhite|aquamarine|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood\n|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan\n|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange\n|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise\n|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen\n|gainsboro|ghostwhite|gold|goldenrod|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki\n|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow\n|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray\n|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|magenta|mediumaquamarine|mediumblue\n|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise\n|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered\n|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum\n|powderblue|rebeccapurple|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell\n|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato\n|transparent|turquoise|violet|wheat|whitesmoke|yellowgreen)\n(?![\\w-])",
				name: "support.constant.color.w3c-extended-color-name.css",
			},
			{
				match: "(?i)(?<![\\w-])currentColor(?![\\w-])",
				name: "support.constant.color.current.css",
			},
			{
				match: "(?xi) (?<![\\w-])\n(ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow\n|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption\n|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow\n|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText)\n(?![\\w-])",
				name: "invalid.deprecated.color.system.css",
			},
		],
	},
	combinators: {
		patterns: [
			{
				match: "/deep/|>>>",
				name: "invalid.deprecated.combinator.css",
			},
			{
				match: ">>|>|\\+|~",
				name: "keyword.operator.combinator.css",
			},
		],
	},
	commas: {
		match: ",",
		name: "punctuation.separator.list.comma.css",
	},
	"comment-block": {
		begin: "/\\*",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.comment.begin.css",
			},
		},
		end: "\\*/",
		endCaptures: {
			"0": {
				name: "punctuation.definition.comment.end.css",
			},
		},
		name: "comment.block.css",
	},
	escapes: {
		patterns: [
			{
				match: "\\\\[0-9a-fA-F]{1,6}",
				name: "constant.character.escape.codepoint.css",
			},
			{
				begin: "\\\\$\\s*",
				end: "^(?<!\\G)",
				name: "constant.character.escape.newline.css",
			},
			{
				match: "\\\\.",
				name: "constant.character.escape.css",
			},
		],
	},
	"feature-query": {
		begin: "\\(",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.condition.begin.bracket.round.css",
			},
		},
		end: "\\)",
		endCaptures: {
			"0": {
				name: "punctuation.definition.condition.end.bracket.round.css",
			},
		},
		name: "meta.feature-query.css",
		patterns: [
			{
				include: "#feature-query-operators",
			},
			{
				include: "#feature-query",
			},
		],
	},
	"feature-query-operators": {
		patterns: [
			{
				match: "(?i)(?<=[\\s()]|^|\\*/)(and|not|or)(?=[\\s()]|/\\*|$)",
				name: "keyword.operator.logical.feature.$1.css",
			},
			{
				include: "#rule-list-innards",
			},
		],
	},
	"font-features": {
		begin: "(?xi)\n((@)(annotation|character-variant|ornaments|styleset|stylistic|swash))\n(?=[\\s@'\"{;]|/\\*|$)",
		beginCaptures: {
			"1": {
				name: "keyword.control.at-rule.${3:/downcase}.css",
			},
			"2": {
				name: "punctuation.definition.keyword.css",
			},
		},
		end: "(?<=})",
		name: "meta.at-rule.${3:/downcase}.css",
		patterns: [
			{
				begin: "{",
				beginCaptures: {
					"0": {
						name: "punctuation.section.property-list.begin.bracket.curly.css",
					},
				},
				end: "}",
				endCaptures: {
					"0": {
						name: "punctuation.section.property-list.end.bracket.curly.css",
					},
				},
				name: "meta.property-list.font-feature.css",
				patterns: [
					{
						captures: {
							"0": {
								patterns: [
									{
										include: "#escapes",
									},
								],
							},
						},
						match: "(?x)\n(?: [-a-zA-Z_]    | [^\\x00-\\x7F] )   # First letter\n(?: [-a-zA-Z0-9_] | [^\\x00-\\x7F]     # Remainder of identifier\n  | \\\\(?:[0-9a-fA-F]{1,6}|.)\n)*",
						name: "variable.font-feature.css",
					},
					{
						include: "#rule-list-innards",
					},
				],
			},
		],
	},
	functions: {
		patterns: [
			{
				begin: "(?i)(?<![\\w-])(calc)(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.calc.css",
					},
					"2": {
						name: "punctuation.section.function.begin.bracket.round.css",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.end.bracket.round.css",
					},
				},
				name: "meta.function.calc.css",
				patterns: [
					{
						match: "[*/]|(?<=\\s|^)[-+](?=\\s|$)",
						name: "keyword.operator.arithmetic.css",
					},
					{
						include: "#property-values",
					},
				],
			},
			{
				begin: "(?i)(?<![\\w-])(rgba?|hsla?|hwb|lab|lch)(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.misc.css",
					},
					"2": {
						name: "punctuation.section.function.begin.bracket.round.css",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.end.bracket.round.css",
					},
				},
				name: "meta.function.color.css",
				patterns: [
					{
						include: "#property-values",
					},
				],
			},
			{
				begin: '(?xi) (?<![\\w-])\n(\n  (?:-webkit-|-moz-|-o-)?    # Accept prefixed/historical variants\n  (?:repeating-)?            # "Repeating"-type gradient\n  (?:linear|radial|conic)    # Shape\n  -gradient\n)\n(\\()',
				beginCaptures: {
					"1": {
						name: "support.function.gradient.css",
					},
					"2": {
						name: "punctuation.section.function.begin.bracket.round.css",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.end.bracket.round.css",
					},
				},
				name: "meta.function.gradient.css",
				patterns: [
					{
						match: "(?i)(?<![\\w-])(from|to|at)(?![\\w-])",
						name: "keyword.operator.gradient.css",
					},
					{
						include: "#property-values",
					},
				],
			},
			{
				begin: "(?i)(?<![\\w-])(-webkit-gradient)(\\()",
				beginCaptures: {
					"1": {
						name: "invalid.deprecated.gradient.function.css",
					},
					"2": {
						name: "punctuation.section.function.begin.bracket.round.css",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.end.bracket.round.css",
					},
				},
				name: "meta.function.gradient.invalid.deprecated.gradient.css",
				patterns: [
					{
						begin: "(?i)(?<![\\w-])(from|to|color-stop)(\\()",
						beginCaptures: {
							"1": {
								name: "invalid.deprecated.function.css",
							},
							"2": {
								name: "punctuation.section.function.begin.bracket.round.css",
							},
						},
						end: "\\)",
						endCaptures: {
							"0": {
								name: "punctuation.section.function.end.bracket.round.css",
							},
						},
						patterns: [
							{
								include: "#property-values",
							},
						],
					},
					{
						include: "#property-values",
					},
				],
			},
			{
				begin: "(?xi) (?<![\\w-])\n(annotation|attr|blur|brightness|character-variant|clamp|contrast|counters?\n|cross-fade|drop-shadow|element|fit-content|format|grayscale|hue-rotate\n|image-set|invert|local|max|min|minmax|opacity|ornaments|repeat|saturate|sepia\n|styleset|stylistic|swash|symbols)\n(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.misc.css",
					},
					"2": {
						name: "punctuation.section.function.begin.bracket.round.css",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.end.bracket.round.css",
					},
				},
				name: "meta.function.misc.css",
				patterns: [
					{
						match: '(?i)(?<=[,\\s"]|\\*/|^)\\d+x(?=[\\s,"\')]|/\\*|$)',
						name: "constant.numeric.other.density.css",
					},
					{
						include: "#property-values",
					},
					{
						match: "[^'\"),\\s]+",
						name: "variable.parameter.misc.css",
					},
				],
			},
			{
				begin: "(?i)(?<![\\w-])(circle|ellipse|inset|polygon|rect)(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.shape.css",
					},
					"2": {
						name: "punctuation.section.function.begin.bracket.round.css",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.end.bracket.round.css",
					},
				},
				name: "meta.function.shape.css",
				patterns: [
					{
						match: "(?i)(?<=\\s|^|\\*/)(at|round)(?=\\s|/\\*|$)",
						name: "keyword.operator.shape.css",
					},
					{
						include: "#property-values",
					},
				],
			},
			{
				begin: "(?i)(?<![\\w-])(cubic-bezier|steps)(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.timing-function.css",
					},
					"2": {
						name: "punctuation.section.function.begin.bracket.round.css",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.end.bracket.round.css",
					},
				},
				name: "meta.function.timing-function.css",
				patterns: [
					{
						match: "(?i)(?<![\\w-])(start|end)(?=\\s*\\)|$)",
						name: "support.constant.step-direction.css",
					},
					{
						include: "#property-values",
					},
				],
			},
			{
				begin: "(?xi) (?<![\\w-])\n( (?:translate|scale|rotate)(?:[XYZ]|3D)?\n| matrix(?:3D)?\n| skew[XY]?\n| perspective\n)\n(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.transform.css",
					},
					"2": {
						name: "punctuation.section.function.begin.bracket.round.css",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.end.bracket.round.css",
					},
				},
				patterns: [
					{
						include: "#property-values",
					},
				],
			},
			{
				include: "#url",
			},
			{
				begin: "(?i)(?<![\\w-])(var)(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.misc.css",
					},
					"2": {
						name: "punctuation.section.function.begin.bracket.round.css",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.end.bracket.round.css",
					},
				},
				name: "meta.function.variable.css",
				patterns: [
					{
						name: "variable.argument.css",
						match: "(?x)\n--\n(?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter\n(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier\n  |\\\\(?:[0-9a-fA-F]{1,6}|.)\n)*",
					},
					{
						include: "#property-values",
					},
				],
			},
		],
	},
	"functional-pseudo-classes": {
		patterns: [
			{
				begin: "(?i)((:)dir)(\\()",
				beginCaptures: {
					"1": {
						name: "entity.other.attribute-name.pseudo-class.css",
					},
					"2": {
						name: "punctuation.definition.entity.css",
					},
					"3": {
						name: "punctuation.section.function.begin.bracket.round.css",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.end.bracket.round.css",
					},
				},
				patterns: [
					{
						include: "#comment-block",
					},
					{
						include: "#escapes",
					},
					{
						match: "(?i)(?<![\\w-])(ltr|rtl)(?![\\w-])",
						name: "support.constant.text-direction.css",
					},
					{
						include: "#property-values",
					},
				],
			},
			{
				begin: "(?i)((:)lang)(\\()",
				beginCaptures: {
					"1": {
						name: "entity.other.attribute-name.pseudo-class.css",
					},
					"2": {
						name: "punctuation.definition.entity.css",
					},
					"3": {
						name: "punctuation.section.function.begin.bracket.round.css",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.end.bracket.round.css",
					},
				},
				patterns: [
					{
						match: "(?<=[(,\\s])[a-zA-Z]+(-[a-zA-Z0-9]*|\\\\(?:[0-9a-fA-F]{1,6}|.))*(?=[),\\s])",
						name: "support.constant.language-range.css",
					},
					{
						begin: '"',
						beginCaptures: {
							"0": {
								name: "punctuation.definition.string.begin.css",
							},
						},
						end: '"',
						endCaptures: {
							"0": {
								name: "punctuation.definition.string.end.css",
							},
						},
						name: "string.quoted.double.css",
						patterns: [
							{
								include: "#escapes",
							},
							{
								match: '(?<=["\\s])[a-zA-Z*]+(-[a-zA-Z0-9*]*)*(?=["\\s])',
								name: "support.constant.language-range.css",
							},
						],
					},
					{
						begin: "'",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.string.begin.css",
							},
						},
						end: "'",
						endCaptures: {
							"0": {
								name: "punctuation.definition.string.end.css",
							},
						},
						name: "string.quoted.single.css",
						patterns: [
							{
								include: "#escapes",
							},
							{
								match: "(?<=['\\s])[a-zA-Z*]+(-[a-zA-Z0-9*]*)*(?=['\\s])",
								name: "support.constant.language-range.css",
							},
						],
					},
					{
						include: "#commas",
					},
				],
			},
			{
				begin: "(?i)((:)(?:not|has|matches))(\\()",
				beginCaptures: {
					"1": {
						name: "entity.other.attribute-name.pseudo-class.css",
					},
					"2": {
						name: "punctuation.definition.entity.css",
					},
					"3": {
						name: "punctuation.section.function.begin.bracket.round.css",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.end.bracket.round.css",
					},
				},
				patterns: [
					{
						include: "#selector-innards",
					},
				],
			},
			{
				begin: "(?i)((:)nth-(?:last-)?(?:child|of-type))(\\()",
				beginCaptures: {
					"1": {
						name: "entity.other.attribute-name.pseudo-class.css",
					},
					"2": {
						name: "punctuation.definition.entity.css",
					},
					"3": {
						name: "punctuation.section.function.begin.bracket.round.css",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.end.bracket.round.css",
					},
				},
				patterns: [
					{
						match: "(?i)[+-]?(\\d+n?|n)(\\s*[+-]\\s*\\d+)?",
						name: "constant.numeric.css",
					},
					{
						match: "(?i)even|odd",
						name: "support.constant.parity.css",
					},
				],
			},
		],
	},
	"media-features": {
		captures: {
			"1": {
				name: "support.type.property-name.media.css",
			},
			"2": {
				name: "support.type.property-name.media.css",
			},
			"3": {
				name: "support.type.vendored.property-name.media.css",
			},
		},
		match: "(?xi)\n(?<=^|\\s|\\(|\\*/)           # Preceded by whitespace, bracket or comment\n(?:\n  # Standardised features\n  (\n    (?:min-|max-)?            # Range features\n    (?: height\n      | width\n      | aspect-ratio\n      | color\n      | color-index\n      | monochrome\n      | resolution\n    )\n    | grid                    # Discrete features\n    | scan\n    | orientation\n    | display-mode\n    | hover\n  )\n  |\n  # Deprecated features\n  (\n    (?:min-|max-)?            # Deprecated in Media Queries 4\n    device-\n    (?: height\n      | width\n      | aspect-ratio\n    )\n  )\n  |\n  # Vendor extensions\n  (\n    (?:\n      # Spec-compliant syntax\n      [-_]\n      (?: webkit              # Webkit/Blink\n        | apple|khtml         # Webkit aliases\n        | epub                # ePub3\n        | moz                 # Gecko\n        | ms                  # Microsoft\n        | o                   # Presto (pre-Opera 15)\n        | xv|ah|rim|atsc|     # Less common vendors\n          hp|tc|wap|ro\n      )\n      |\n      # Non-standard prefixes\n      (?: mso                 # Microsoft Office\n        | prince              # YesLogic\n      )\n    )\n    -\n    [\\w-]+                   # Feature name\n    (?=                       # Terminates correctly\n      \\s*                    # Possible whitespace\n      (?:                     # Possible injected comment\n        /\\*\n        (?:[^*]|\\*[^/])*\n        \\*/\n      )?\n      \\s*\n      [:)]                    # Ends with a colon or closed bracket\n    )\n  )\n)\n(?=\\s|$|[><:=]|\\)|/\\*)     # Terminates cleanly",
	},
	"media-feature-keywords": {
		match: "(?xi)\n(?<=^|\\s|:|\\*/)\n(?: portrait                  # Orientation\n  | landscape\n  | progressive               # Scan types\n  | interlace\n  | fullscreen                # Display modes\n  | standalone\n  | minimal-ui\n  | browser\n  | hover\n)\n(?=\\s|\\)|$)",
		name: "support.constant.property-value.css",
	},
	"media-query": {
		begin: "\\G",
		end: "(?=\\s*[{;])",
		patterns: [
			{
				include: "#comment-block",
			},
			{
				include: "#escapes",
			},
			{
				include: "#media-types",
			},
			{
				match: "(?i)(?<=\\s|^|,|\\*/)(only|not)(?=\\s|{|/\\*|$)",
				name: "keyword.operator.logical.$1.media.css",
			},
			{
				match: "(?i)(?<=\\s|^|\\*/|\\))and(?=\\s|/\\*|$)",
				name: "keyword.operator.logical.and.media.css",
			},
			{
				match: ",(?:(?:\\s*,)+|(?=\\s*[;){]))",
				name: "invalid.illegal.comma.css",
			},
			{
				include: "#commas",
			},
			{
				begin: "\\(",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.parameters.begin.bracket.round.css",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.parameters.end.bracket.round.css",
					},
				},
				patterns: [
					{
						include: "#media-features",
					},
					{
						include: "#media-feature-keywords",
					},
					{
						match: ":",
						name: "punctuation.separator.key-value.css",
					},
					{
						match: ">=|<=|=|<|>",
						name: "keyword.operator.comparison.css",
					},
					{
						captures: {
							"1": {
								name: "constant.numeric.css",
							},
							"2": {
								name: "keyword.operator.arithmetic.css",
							},
							"3": {
								name: "constant.numeric.css",
							},
						},
						match: "(\\d+)\\s*(/)\\s*(\\d+)",
						name: "meta.ratio.css",
					},
					{
						include: "#numeric-values",
					},
					{
						include: "#comment-block",
					},
				],
			},
		],
	},
	"media-query-list": {
		begin: "(?=\\s*[^{;])",
		end: "(?=\\s*[{;])",
		patterns: [
			{
				include: "#media-query",
			},
		],
	},
	"media-types": {
		captures: {
			"1": {
				name: "support.constant.media.css",
			},
			"2": {
				name: "invalid.deprecated.constant.media.css",
			},
		},
		match: "(?xi)\n(?<=^|\\s|,|\\*/)\n(?:\n  # Valid media types\n  (all|print|screen|speech)\n  |\n  # Deprecated in Media Queries 4: http://dev.w3.org/csswg/mediaqueries/#media-types\n  (aural|braille|embossed|handheld|projection|tty|tv)\n)\n(?=$|[{,\\s;]|/\\*)",
	},
	"numeric-values": {
		patterns: [
			{
				captures: {
					"1": {
						name: "punctuation.definition.constant.css",
					},
				},
				match: "(#)(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\\b",
				name: "constant.other.color.rgb-value.hex.css",
			},
			{
				captures: {
					"1": {
						name: "keyword.other.unit.percentage.css",
					},
					"2": {
						name: "keyword.other.unit.${2:/downcase}.css",
					},
				},
				match: "(?xi) (?<![\\w-])\n[-+]?                               # Sign indicator\n\n(?:                                 # Numerals\n    [0-9]+ (?:\\.[0-9]+)?           # Integer/float with leading digits\n  | \\.[0-9]+                       # Float without leading digits\n)\n\n(?:                                 # Scientific notation\n  (?<=[0-9])                        # Exponent must follow a digit\n  E                                 # Exponent indicator\n  [-+]?                             # Possible sign indicator\n  [0-9]+                            # Exponent value\n)?\n\n(?:                                 # Possible unit for data-type:\n  (%)                               # - Percentage\n  | ( deg|grad|rad|turn             # - Angle\n    | Hz|kHz                        # - Frequency\n    | ch|cm|em|ex|fr|in|mm|mozmm|   # - Length\n      pc|pt|px|q|rem|vh|vmax|vmin|\n      vw\n    | dpi|dpcm|dppx                 # - Resolution\n    | s|ms                          # - Time\n    )\n  \\b                               # Boundary checking intentionally lax to\n)?                                  # facilitate embedding in CSS-like grammars",
				name: "constant.numeric.css",
			},
		],
	},
	"property-keywords": {
		patterns: [
			{
				match: "(?xi) (?<![\\w-])\n(above|absolute|active|add|additive|after-edge|alias|all|all-petite-caps|all-scroll|all-small-caps|alpha|alphabetic|alternate|alternate-reverse\n|always|antialiased|auto|auto-pos|available|avoid|avoid-column|avoid-page|avoid-region|backwards|balance|baseline|before-edge|below|bevel\n|bidi-override|blink|block|block-axis|block-start|block-end|bold|bolder|border|border-box|both|bottom|bottom-outside|break-all|break-word|bullets\n|butt|capitalize|caption|cell|center|central|char|circle|clip|clone|close-quote|closest-corner|closest-side|col-resize|collapse|color|color-burn\n|color-dodge|column|column-reverse|common-ligatures|compact|condensed|contain|content|content-box|contents|context-menu|contextual|copy|cover\n|crisp-edges|crispEdges|crosshair|cyclic|dark|darken|dashed|decimal|default|dense|diagonal-fractions|difference|digits|disabled|disc|discretionary-ligatures\n|distribute|distribute-all-lines|distribute-letter|distribute-space|dot|dotted|double|double-circle|downleft|downright|e-resize|each-line|ease|ease-in\n|ease-in-out|ease-out|economy|ellipse|ellipsis|embed|end|evenodd|ew-resize|exact|exclude|exclusion|expanded|extends|extra-condensed|extra-expanded\n|fallback|farthest-corner|farthest-side|fill|fill-available|fill-box|filled|fit-content|fixed|flat|flex|flex-end|flex-start|flip|flow-root|forwards|freeze\n|from-image|full-width|geometricPrecision|georgian|grab|grabbing|grayscale|grid|groove|hand|hanging|hard-light|help|hidden|hide\n|historical-forms|historical-ligatures|horizontal|horizontal-tb|hue|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space\n|ideographic|inactive|infinite|inherit|initial|inline|inline-axis|inline-block|inline-end|inline-flex|inline-grid|inline-list-item|inline-start\n|inline-table|inset|inside|inter-character|inter-ideograph|inter-word|intersect|invert|isolate|isolate-override|italic|jis04|jis78|jis83\n|jis90|justify|justify-all|kannada|keep-all|landscape|large|larger|left|light|lighten|lighter|line|line-edge|line-through|linear|linearRGB\n|lining-nums|list-item|local|loose|lowercase|lr|lr-tb|ltr|luminance|luminosity|main-size|mandatory|manipulation|manual|margin-box|match-parent\n|match-source|mathematical|max-content|medium|menu|message-box|middle|min-content|miter|mixed|move|multiply|n-resize|narrower|ne-resize\n|nearest-neighbor|nesw-resize|newspaper|no-change|no-clip|no-close-quote|no-common-ligatures|no-contextual|no-discretionary-ligatures\n|no-drop|no-historical-ligatures|no-open-quote|no-repeat|none|nonzero|normal|not-allowed|nowrap|ns-resize|numbers|numeric|nw-resize|nwse-resize\n|oblique|oldstyle-nums|open|open-quote|optimizeLegibility|optimizeQuality|optimizeSpeed|optional|ordinal|outset|outside|over|overlay|overline|padding\n|padding-box|page|painted|pan-down|pan-left|pan-right|pan-up|pan-x|pan-y|paused|petite-caps|pixelated|plaintext|pointer|portrait|pre|pre-line\n|pre-wrap|preserve-3d|progress|progressive|proportional-nums|proportional-width|proximity|radial|recto|region|relative|remove|repeat|repeat-[xy]\n|reset-size|reverse|revert|ridge|right|rl|rl-tb|round|row|row-resize|row-reverse|row-severse|rtl|ruby|ruby-base|ruby-base-container|ruby-text\n|ruby-text-container|run-in|running|s-resize|saturation|scale-down|screen|scroll|scroll-position|se-resize|semi-condensed|semi-expanded|separate\n|sesame|show|sideways|sideways-left|sideways-lr|sideways-right|sideways-rl|simplified|slashed-zero|slice|small|small-caps|small-caption|smaller\n|smooth|soft-light|solid|space|space-around|space-between|space-evenly|spell-out|square|sRGB|stacked-fractions|start|static|status-bar|swap\n|step-end|step-start|sticky|stretch|strict|stroke|stroke-box|style|sub|subgrid|subpixel-antialiased|subtract|super|sw-resize|symbolic|table\n|table-caption|table-cell|table-column|table-column-group|table-footer-group|table-header-group|table-row|table-row-group|tabular-nums|tb|tb-rl\n|text|text-after-edge|text-before-edge|text-bottom|text-top|thick|thin|titling-caps|top|top-outside|touch|traditional|transparent|triangle\n|ultra-condensed|ultra-expanded|under|underline|unicase|unset|upleft|uppercase|upright|use-glyph-orientation|use-script|verso|vertical\n|vertical-ideographic|vertical-lr|vertical-rl|vertical-text|view-box|visible|visibleFill|visiblePainted|visibleStroke|w-resize|wait|wavy\n|weight|whitespace|wider|words|wrap|wrap-reverse|x|x-large|x-small|xx-large|xx-small|y|zero|zoom-in|zoom-out)\n(?![\\w-])",
				name: "support.constant.property-value.css",
			},
			{
				match: "(?xi) (?<![\\w-])\n(arabic-indic|armenian|bengali|cambodian|circle|cjk-decimal|cjk-earthly-branch|cjk-heavenly-stem|cjk-ideographic\n|decimal|decimal-leading-zero|devanagari|disc|disclosure-closed|disclosure-open|ethiopic-halehame-am\n|ethiopic-halehame-ti-e[rt]|ethiopic-numeric|georgian|gujarati|gurmukhi|hangul|hangul-consonant|hebrew\n|hiragana|hiragana-iroha|japanese-formal|japanese-informal|kannada|katakana|katakana-iroha|khmer\n|korean-hangul-formal|korean-hanja-formal|korean-hanja-informal|lao|lower-alpha|lower-armenian|lower-greek\n|lower-latin|lower-roman|malayalam|mongolian|myanmar|oriya|persian|simp-chinese-formal|simp-chinese-informal\n|square|tamil|telugu|thai|tibetan|trad-chinese-formal|trad-chinese-informal|upper-alpha|upper-armenian\n|upper-latin|upper-roman|urdu)\n(?![\\w-])",
				name: "support.constant.property-value.list-style-type.css",
			},
			{
				match: "(?<![\\w-])(?i:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[a-zA-Z-]+",
				name: "support.constant.vendored.property-value.css",
			},
			{
				match: "(?<![\\w-])(?i:arial|century|comic|courier|garamond|georgia|helvetica|impact|lucida|symbol|system-ui|system|tahoma|times|trebuchet|ui-monospace|ui-rounded|ui-sans-serif|ui-serif|utopia|verdana|webdings|sans-serif|serif|monospace)(?![\\w-])",
				name: "support.constant.font-name.css",
			},
		],
	},
	"property-names": {
		patterns: [
			{
				match: "(?xi) (?<![\\w-])\n(?:\n  # Standard CSS\n  accent-color|additive-symbols|align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration\n  | animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backdrop-filter\n  | backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image\n  | background-origin|background-position|background-position-[xy]|background-repeat|background-size|bleed|block-size|border\n  | border-block-end|border-block-end-color|border-block-end-style|border-block-end-width|border-block-start|border-block-start-color\n  | border-block-start-style|border-block-start-width|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius\n  | border-bottom-style|border-bottom-width|border-collapse|border-color|border-end-end-radius|border-end-start-radius|border-image\n  | border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-inline-end\n  | border-inline-end-color|border-inline-end-style|border-inline-end-width|border-inline-start|border-inline-start-color\n  | border-inline-start-style|border-inline-start-width|border-left|border-left-color|border-left-style|border-left-width\n  | border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-start-end-radius\n  | border-start-start-radius|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style\n  | border-top-width|border-width|bottom|box-decoration-break|box-shadow|box-sizing|break-after|break-before|break-inside|caption-side\n  | caret-color|clear|clip|clip-path|clip-rule|color|color-adjust|color-interpolation-filters|color-scheme|column-count|column-fill|column-gap\n  | column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|contain|content|counter-increment\n  | counter-reset|cursor|direction|display|empty-cells|enable-background|fallback|fill|fill-opacity|fill-rule|filter|flex|flex-basis\n  | flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|flood-color|flood-opacity|font|font-display|font-family\n  | font-feature-settings|font-kerning|font-language-override|font-optical-sizing|font-size|font-size-adjust|font-stretch\n  | font-style|font-synthesis|font-variant|font-variant-alternates|font-variant-caps|font-variant-east-asian|font-variant-ligatures\n  | font-variant-numeric|font-variant-position|font-variation-settings|font-weight|gap|glyph-orientation-horizontal|glyph-orientation-vertical\n  | grid|grid-area|grid-auto-columns|grid-auto-flow|grid-auto-rows|grid-column|grid-column-end|grid-column-gap|grid-column-start\n  | grid-gap|grid-row|grid-row-end|grid-row-gap|grid-row-start|grid-template|grid-template-areas|grid-template-columns|grid-template-rows\n  | hanging-punctuation|height|hyphens|image-orientation|image-rendering|image-resolution|ime-mode|initial-letter|initial-letter-align\n  | inline-size|inset|inset-block|inset-block-end|inset-block-start|inset-inline|inset-inline-end|inset-inline-start|isolation\n  | justify-content|justify-items|justify-self|kerning|left|letter-spacing|lighting-color|line-break|line-clamp|line-height|list-style\n  | list-style-image|list-style-position|list-style-type|margin|margin-block|margin-block-end|margin-block-start|margin-bottom|margin-inline|margin-inline-end|margin-inline-start\n  | margin-left|margin-right|margin-top|marker-end|marker-mid|marker-start|marks|mask|mask-border|mask-border-mode|mask-border-outset\n  | mask-border-repeat|mask-border-slice|mask-border-source|mask-border-width|mask-clip|mask-composite|mask-image|mask-mode\n  | mask-origin|mask-position|mask-repeat|mask-size|mask-type|max-block-size|max-height|max-inline-size|max-lines|max-width\n  | max-zoom|min-block-size|min-height|min-inline-size|min-width|min-zoom|mix-blend-mode|negative|object-fit|object-position\n  | offset|offset-anchor|offset-distance|offset-path|offset-position|offset-rotation|opacity|order|orientation|orphans\n  | outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-anchor|overflow-block|overflow-inline\n  | overflow-wrap|overflow-[xy]|overscroll-behavior|overscroll-behavior-block|overscroll-behavior-inline|overscroll-behavior-[xy]\n  | pad|padding|padding-block|padding-block-end|padding-block-start|padding-bottom|padding-inline|padding-inline-end|padding-inline-start|padding-left\n  | padding-right|padding-top|page-break-after|page-break-before|page-break-inside|paint-order|perspective|perspective-origin\n  | place-content|place-items|place-self|pointer-events|position|prefix|quotes|range|resize|right|rotate|row-gap|ruby-align\n  | ruby-merge|ruby-position|scale|scroll-behavior|scroll-margin|scroll-margin-block|scroll-margin-block-end|scroll-margin-block-start\n  | scroll-margin-bottom|scroll-margin-inline|scroll-margin-inline-end|scroll-margin-inline-start|scroll-margin-left|scroll-margin-right\n  | scroll-margin-top|scroll-padding|scroll-padding-block|scroll-padding-block-end|scroll-padding-block-start|scroll-padding-bottom\n  | scroll-padding-inline|scroll-padding-inline-end|scroll-padding-inline-start|scroll-padding-left|scroll-padding-right\n  | scroll-padding-top|scroll-snap-align|scroll-snap-coordinate|scroll-snap-destination|scroll-snap-stop|scroll-snap-type\n  | scrollbar-color|scrollbar-gutter|scrollbar-width|shape-image-threshold|shape-margin|shape-outside|shape-rendering|size\n  | speak-as|src|stop-color|stop-opacity|stroke|stroke-dasharray|stroke-dashoffset|stroke-linecap|stroke-linejoin|stroke-miterlimit\n  | stroke-opacity|stroke-width|suffix|symbols|system|tab-size|table-layout|text-align|text-align-last|text-anchor|text-combine-upright\n  | text-decoration|text-decoration-color|text-decoration-line|text-decoration-skip|text-decoration-skip-ink|text-decoration-style\n  | text-emphasis|text-emphasis-color|text-emphasis-position|text-emphasis-style|text-indent|text-justify|text-orientation\n  | text-overflow|text-rendering|text-shadow|text-size-adjust|text-transform|text-underline-offset|text-underline-position|top|touch-action|transform\n  | transform-box|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function\n  | translate|unicode-bidi|unicode-range|user-select|user-zoom|vertical-align|visibility|white-space|widows|width|will-change\n  | word-break|word-spacing|word-wrap|writing-mode|z-index|zoom\n\n  # SVG attributes\n  | alignment-baseline|baseline-shift|clip-rule|color-interpolation|color-interpolation-filters|color-profile\n  | color-rendering|cx|cy|dominant-baseline|enable-background|fill|fill-opacity|fill-rule|flood-color|flood-opacity\n  | glyph-orientation-horizontal|glyph-orientation-vertical|height|kerning|lighting-color|marker-end|marker-mid\n  | marker-start|r|rx|ry|shape-rendering|stop-color|stop-opacity|stroke|stroke-dasharray|stroke-dashoffset|stroke-linecap\n  | stroke-linejoin|stroke-miterlimit|stroke-opacity|stroke-width|text-anchor|width|x|y\n\n  # Not listed on MDN; presumably deprecated\n  | adjust|after|align|align-last|alignment|alignment-adjust|appearance|attachment|azimuth|background-break\n  | balance|baseline|before|bidi|binding|bookmark|bookmark-label|bookmark-level|bookmark-target|border-length\n  | bottom-color|bottom-left-radius|bottom-right-radius|bottom-style|bottom-width|box|box-align|box-direction\n  | box-flex|box-flex-group|box-lines|box-ordinal-group|box-orient|box-pack|break|character|collapse|column\n  | column-break-after|column-break-before|count|counter|crop|cue|cue-after|cue-before|decoration|decoration-break\n  | delay|display-model|display-role|down|drop|drop-initial-after-adjust|drop-initial-after-align|drop-initial-before-adjust\n  | drop-initial-before-align|drop-initial-size|drop-initial-value|duration|elevation|emphasis|family|fit|fit-position\n  | flex-group|float-offset|gap|grid-columns|grid-rows|hanging-punctuation|header|hyphenate|hyphenate-after|hyphenate-before\n  | hyphenate-character|hyphenate-lines|hyphenate-resource|icon|image|increment|indent|index|initial-after-adjust\n  | initial-after-align|initial-before-adjust|initial-before-align|initial-size|initial-value|inline-box-align|iteration-count\n  | justify|label|left-color|left-style|left-width|length|level|line|line-stacking|line-stacking-ruby|line-stacking-shift\n  | line-stacking-strategy|lines|list|mark|mark-after|mark-before|marks|marquee|marquee-direction|marquee-play-count|marquee-speed\n  | marquee-style|max|min|model|move-to|name|nav|nav-down|nav-index|nav-left|nav-right|nav-up|new|numeral|offset|ordinal-group\n  | orient|origin|overflow-style|overhang|pack|page|page-policy|pause|pause-after|pause-before|phonemes|pitch|pitch-range\n  | play-count|play-during|play-state|point|presentation|presentation-level|profile|property|punctuation|punctuation-trim\n  | radius|rate|rendering-intent|repeat|replace|reset|resolution|resource|respond-to|rest|rest-after|rest-before|richness\n  | right-color|right-style|right-width|role|rotation|rotation-point|rows|ruby|ruby-overhang|ruby-span|rule|rule-color\n  | rule-style|rule-width|shadow|size|size-adjust|sizing|space|space-collapse|spacing|span|speak|speak-header|speak-numeral\n  | speak-punctuation|speech|speech-rate|speed|stacking|stacking-ruby|stacking-shift|stacking-strategy|stress|stretch\n  | string-set|style|style-image|style-position|style-type|target|target-name|target-new|target-position|text|text-height\n  | text-justify|text-outline|text-replace|text-wrap|timing-function|top-color|top-left-radius|top-right-radius|top-style\n  | top-width|trim|unicode|up|user-select|variant|voice|voice-balance|voice-duration|voice-family|voice-pitch|voice-pitch-range\n  | voice-rate|voice-stress|voice-volume|volume|weight|white|white-space-collapse|word|wrap\n)\n(?![\\w-])",
				name: "support.type.property-name.css",
			},
			{
				match: "(?<![\\w-])(?i:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[a-zA-Z-]+",
				name: "support.type.vendored.property-name.css",
			},
		],
	},
	"property-values": {
		patterns: [
			{
				include: "#commas",
			},
			{
				include: "#comment-block",
			},
			{
				include: "#escapes",
			},
			{
				include: "#functions",
			},
			{
				include: "#property-keywords",
			},
			{
				include: "#unicode-range",
			},
			{
				include: "#numeric-values",
			},
			{
				include: "#color-keywords",
			},
			{
				include: "#string",
			},
			{
				match: "!\\s*important(?![\\w-])",
				name: "keyword.other.important.css",
			},
		],
	},
	"pseudo-classes": {
		captures: {
			"1": {
				name: "punctuation.definition.entity.css",
			},
			"2": {
				name: "invalid.illegal.colon.css",
			},
		},
		match: "(?xi)\n(:)(:*)\n(?: active|any-link|checked|default|disabled|empty|enabled|first\n  | (?:first|last|only)-(?:child|of-type)|focus|focus-visible|focus-within|fullscreen|host|hover\n  | in-range|indeterminate|invalid|left|link|optional|out-of-range\n  | read-only|read-write|required|right|root|scope|target|unresolved\n  | valid|visited\n)(?![\\w-]|\\s*[;}])",
		name: "entity.other.attribute-name.pseudo-class.css",
	},
	"pseudo-elements": {
		captures: {
			"1": {
				name: "punctuation.definition.entity.css",
			},
			"2": {
				name: "punctuation.definition.entity.css",
			},
		},
		match: "(?xi)\n(?:\n  (::?)                       # Elements using both : and :: notation\n  (?: after\n    | before\n    | first-letter\n    | first-line\n    | (?:-(?:ah|apple|atsc|epub|hp|khtml|moz\n            |ms|o|rim|ro|tc|wap|webkit|xv)\n        | (?:mso|prince))\n      -[a-z-]+\n  )\n  |\n  (::)                        # Double-colon only\n  (?: backdrop\n    | content\n    | grammar-error\n    | marker\n    | placeholder\n    | selection\n    | shadow\n    | spelling-error\n  )\n)\n(?![\\w-]|\\s*[;}])",
		name: "entity.other.attribute-name.pseudo-element.css",
	},
	"rule-list": {
		begin: "{",
		beginCaptures: {
			"0": {
				name: "punctuation.section.property-list.begin.bracket.curly.css",
			},
		},
		end: "}",
		endCaptures: {
			"0": {
				name: "punctuation.section.property-list.end.bracket.curly.css",
			},
		},
		name: "meta.property-list.css",
		patterns: [
			{
				include: "#rule-list-innards",
			},
		],
	},
	"rule-list-innards": {
		patterns: [
			{
				include: "#comment-block",
			},
			{
				include: "#escapes",
			},
			{
				include: "#font-features",
			},
			{
				match: "(?x) (?<![\\w-])\n--\n(?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter\n(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier\n  |\\\\(?:[0-9a-fA-F]{1,6}|.)\n)*",
				name: "variable.css",
			},
			{
				begin: "(?<![-a-zA-Z])(?=[-a-zA-Z])",
				end: "$|(?![-a-zA-Z])",
				name: "meta.property-name.css",
				patterns: [
					{
						include: "#property-names",
					},
				],
			},
			{
				begin: "(:)\\s*",
				beginCaptures: {
					"1": {
						name: "punctuation.separator.key-value.css",
					},
				},
				end: "\\s*(;)|\\s*(?=}|\\))",
				endCaptures: {
					"1": {
						name: "punctuation.terminator.rule.css",
					},
				},
				contentName: "meta.property-value.css",
				patterns: [
					{
						include: "#comment-block",
					},
					{
						include: "#property-values",
					},
				],
			},
			{
				match: ";",
				name: "punctuation.terminator.rule.css",
			},
		],
	},
	selector: {
		begin: "(?x)\n(?=\n  (?:\\|)?                    # Possible anonymous namespace prefix\n  (?:\n    [-\\[:.*\\#a-zA-Z_]       # Valid selector character\n    |\n    [^\\x00-\\x7F]            # Which can include non-ASCII symbols\n    |\n    \\\\                      # Or an escape sequence\n    (?:[0-9a-fA-F]{1,6}|.)\n  )\n)",
		end: "(?=\\s*[/@{)])",
		name: "meta.selector.css",
		patterns: [
			{
				include: "#selector-innards",
			},
		],
	},
	"selector-innards": {
		patterns: [
			{
				include: "#comment-block",
			},
			{
				include: "#commas",
			},
			{
				include: "#escapes",
			},
			{
				include: "#combinators",
			},
			{
				captures: {
					"1": {
						name: "entity.other.namespace-prefix.css",
					},
					"2": {
						name: "punctuation.separator.css",
					},
				},
				match: "(?x)\n(?:^|(?<=[\\s,(};]))         # Follows whitespace, comma, semicolon, or bracket\n(?!\n  [-\\w*]+\n  \\|\n  (?!\n      [-\\[:.*\\#a-zA-Z_]    # Make sure there's a selector to match\n    | [^\\x00-\\x7F]\n  )\n)\n(\n  (?: [-a-zA-Z_]    | [^\\x00-\\x7F] )   # First letter\n  (?: [-a-zA-Z0-9_] | [^\\x00-\\x7F]     # Remainder of identifier\n    | \\\\(?:[0-9a-fA-F]{1,6}|.)\n  )*\n  |\n  \\*     # Universal namespace\n)?\n(\\|)     # Namespace separator",
			},
			{
				include: "#tag-names",
			},
			{
				match: "\\*",
				name: "entity.name.tag.wildcard.css",
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.css",
					},
					"2": {
						patterns: [
							{
								include: "#escapes",
							},
						],
					},
				},
				match: "(?x) (?<![@\\w-])\n([.\\#])\n# Invalid identifier\n(\n  (?:\n    # Starts with ASCII digits, with possible hyphen preceding it\n    -?[0-9]\n    |\n    # Consists of a hyphen only\n    -                                      # Terminated by either:\n    (?= $                                  # - End-of-line\n      | [\\s,.\\#)\\[:{>+~|]               # - Followed by another selector\n      | /\\*                               # - Followed by a block comment\n    )\n    |\n    # Name contains unescaped ASCII symbol\n    (?:                                    # Check for acceptable preceding characters\n        [-a-zA-Z_0-9]|[^\\x00-\\x7F]       # - Valid selector character\n      | \\\\(?:[0-9a-fA-F]{1,6}|.)         # - Escape sequence\n    )*\n    (?:                                    # Invalid punctuation\n      [!\"'%&(*;<?@^`|\\]}]                 # - NOTE: We exempt `)` from the list of checked\n      |                                    #   symbols to avoid matching `:not(.invalid)`\n      / (?!\\*)                            # - Avoid invalidating the start of a comment\n    )+\n  )\n  # Mark remainder of selector invalid\n  (?: [-a-zA-Z_0-9]|[^\\x00-\\x7F]         # - Otherwise valid identifier characters\n    | \\\\(?:[0-9a-fA-F]{1,6}|.)           # - Escape sequence\n  )*\n)",
				name: "invalid.illegal.bad-identifier.css",
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.css",
					},
					"2": {
						patterns: [
							{
								include: "#escapes",
							},
						],
					},
				},
				match: "(?x)\n(\\.)                                  # Valid class-name\n(\n  (?: [-a-zA-Z_0-9]|[^\\x00-\\x7F]     # Valid identifier characters\n    | \\\\(?:[0-9a-fA-F]{1,6}|.)       # Escape sequence\n  )+\n)                                      # Followed by either:\n(?= $                                  # - End of the line\n  | [\\s,.\\#)\\[:{>+~|]               # - Another selector\n  | /\\*                               # - A block comment\n)",
				name: "entity.other.attribute-name.class.css",
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.css",
					},
					"2": {
						patterns: [
							{
								include: "#escapes",
							},
						],
					},
				},
				match: "(?x)\n(\\#)\n(\n  -?\n  (?![0-9])\n  (?:[-a-zA-Z0-9_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+\n)\n(?=$|[\\s,.\\#)\\[:{>+~|]|/\\*)",
				name: "entity.other.attribute-name.id.css",
			},
			{
				begin: "\\[",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.entity.begin.bracket.square.css",
					},
				},
				end: "\\]",
				endCaptures: {
					"0": {
						name: "punctuation.definition.entity.end.bracket.square.css",
					},
				},
				name: "meta.attribute-selector.css",
				patterns: [
					{
						include: "#comment-block",
					},
					{
						include: "#string",
					},
					{
						captures: {
							"1": {
								name: "storage.modifier.ignore-case.css",
							},
						},
						match: "(?<=[\"'\\s]|^|\\*/)\\s*([iI])\\s*(?=[\\s\\]]|/\\*|$)",
					},
					{
						captures: {
							"1": {
								name: "string.unquoted.attribute-value.css",
								patterns: [
									{
										include: "#escapes",
									},
								],
							},
						},
						match: "(?x)(?<==)\\s*((?!/\\*)(?:[^\\\\\"'\\s\\]]|\\\\.)+)",
					},
					{
						include: "#escapes",
					},
					{
						match: "[~|^$*]?=",
						name: "keyword.operator.pattern.css",
					},
					{
						match: "\\|",
						name: "punctuation.separator.css",
					},
					{
						captures: {
							"1": {
								name: "entity.other.namespace-prefix.css",
								patterns: [
									{
										include: "#escapes",
									},
								],
							},
						},
						match: "(?x)\n# Qualified namespace prefix\n( -?(?!\\d)(?:[\\w-]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+\n| \\*\n)\n# Lookahead to ensure there's a valid identifier ahead\n(?=\n  \\| (?!\\s|=|$|\\])\n  (?: -?(?!\\d)\n   |   [\\\\\\w-]\n   |   [^\\x00-\\x7F]\n   )\n)",
					},
					{
						captures: {
							"1": {
								name: "entity.other.attribute-name.css",
								patterns: [
									{
										include: "#escapes",
									},
								],
							},
						},
						match: "(?x)\n(-?(?!\\d)(?>[\\w-]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+)\n\\s*\n(?=[~|^\\]$*=]|/\\*)",
					},
				],
			},
			{
				include: "#pseudo-classes",
			},
			{
				include: "#pseudo-elements",
			},
			{
				include: "#functional-pseudo-classes",
			},
			{
				match: "(?x) (?<![@\\w-])\n(?=            # Custom element names must:\n  [a-z]        # - start with a lowercase ASCII letter,\n  \\w* -       # - contain at least one dash\n)\n(?:\n  (?![A-Z])    # No uppercase ASCII letters are allowed\n  [\\w-]       # Allow any other word character or dash\n)+\n(?![(\\w-])",
				name: "entity.name.tag.custom.css",
			},
		],
	},
	string: {
		patterns: [
			{
				begin: '"',
				beginCaptures: {
					"0": {
						name: "punctuation.definition.string.begin.css",
					},
				},
				end: '"|(?<!\\\\)(?=$|\\n)',
				endCaptures: {
					"0": {
						name: "punctuation.definition.string.end.css",
					},
				},
				name: "string.quoted.double.css",
				patterns: [
					{
						begin: '(?:\\G|^)(?=(?:[^\\\\"]|\\\\.)+$)',
						end: "$",
						name: "invalid.illegal.unclosed.string.css",
						patterns: [
							{
								include: "#escapes",
							},
						],
					},
					{
						include: "#escapes",
					},
				],
			},
			{
				begin: "'",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.string.begin.css",
					},
				},
				end: "'|(?<!\\\\)(?=$|\\n)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.string.end.css",
					},
				},
				name: "string.quoted.single.css",
				patterns: [
					{
						begin: "(?:\\G|^)(?=(?:[^\\\\']|\\\\.)+$)",
						end: "$",
						name: "invalid.illegal.unclosed.string.css",
						patterns: [
							{
								include: "#escapes",
							},
						],
					},
					{
						include: "#escapes",
					},
				],
			},
		],
	},
	"tag-names": {
		match: "(?xi) (?<![\\w:-])\n(?:\n    # HTML\n    a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdi|bdo|bgsound\n  | big|blink|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|command\n  | content|data|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|element|em|embed|fieldset\n  | figcaption|figure|font|footer|form|frame|frameset|h[1-6]|head|header|hgroup|hr|html|i\n  | iframe|image|img|input|ins|isindex|kbd|keygen|label|legend|li|link|listing|main|map|mark\n  | marquee|math|menu|menuitem|meta|meter|multicol|nav|nextid|nobr|noembed|noframes|noscript\n  | object|ol|optgroup|option|output|p|param|picture|plaintext|pre|progress|q|rb|rp|rt|rtc\n  | ruby|s|samp|script|section|select|shadow|slot|small|source|spacer|span|strike|strong\n  | style|sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr\n  | track|tt|u|ul|var|video|wbr|xmp\n\n  # SVG\n  | altGlyph|altGlyphDef|altGlyphItem|animate|animateColor|animateMotion|animateTransform\n  | circle|clipPath|color-profile|cursor|defs|desc|discard|ellipse|feBlend|feColorMatrix\n  | feComponentTransfer|feComposite|feConvolveMatrix|feDiffuseLighting|feDisplacementMap\n  | feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur\n  | feImage|feMerge|feMergeNode|feMorphology|feOffset|fePointLight|feSpecularLighting\n  | feSpotLight|feTile|feTurbulence|filter|font-face|font-face-format|font-face-name\n  | font-face-src|font-face-uri|foreignObject|g|glyph|glyphRef|hatch|hatchpath|hkern\n  | line|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|metadata\n  | missing-glyph|mpath|path|pattern|polygon|polyline|radialGradient|rect|set|solidcolor\n  | stop|svg|switch|symbol|text|textPath|tref|tspan|use|view|vkern\n\n  # MathML\n  | annotation|annotation-xml|maction|maligngroup|malignmark|math|menclose|merror|mfenced\n  | mfrac|mglyph|mi|mlabeledtr|mlongdiv|mmultiscripts|mn|mo|mover|mpadded|mphantom|mroot\n  | mrow|ms|mscarries|mscarry|msgroup|msline|mspace|msqrt|msrow|mstack|mstyle|msub|msubsup\n  | msup|mtable|mtd|mtext|mtr|munder|munderover|semantics\n)\n(?=[+~>\\s,.\\#|){:\\[]|/\\*|$)",
		name: "entity.name.tag.css",
	},
	"unicode-range": {
		captures: {
			"0": {
				name: "constant.other.unicode-range.css",
			},
			"1": {
				name: "punctuation.separator.dash.unicode-range.css",
			},
		},
		match: "(?<![\\w-])[Uu]\\+[0-9A-Fa-f?]{1,6}(?:(-)[0-9A-Fa-f]{1,6})?(?![\\w-])",
	},
	url: {
		begin: "(?i)(?<![\\w@-])(url)(\\()",
		beginCaptures: {
			"1": {
				name: "support.function.url.css",
			},
			"2": {
				name: "punctuation.section.function.begin.bracket.round.css",
			},
		},
		end: "\\)",
		endCaptures: {
			"0": {
				name: "punctuation.section.function.end.bracket.round.css",
			},
		},
		name: "meta.function.url.css",
		patterns: [
			{
				match: "[^'\")\\s]+",
				name: "variable.parameter.url.css",
			},
			{
				include: "#string",
			},
			{
				include: "#comment-block",
			},
			{
				include: "#escapes",
			},
		],
	},
};
const css_tmLanguage = {
	information_for_contributors: information_for_contributors,
	version: version,
	name: name,
	scopeName: scopeName,
	patterns: patterns,
	repository: repository,
};

export {
	css_tmLanguage as default,
	information_for_contributors,
	name,
	patterns,
	repository,
	scopeName,
	version,
};
