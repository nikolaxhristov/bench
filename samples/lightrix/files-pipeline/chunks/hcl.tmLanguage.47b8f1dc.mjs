const name = "hcl";
const scopeName = "source.hcl";
const comment = "HashiCorp Configuration Language";
const fileTypes = ["tf", "tfvars", "nomad", "hcl", "appfile"];
const patterns = [
	{
		include: "#comments",
	},
	{
		include: "#constructs",
	},
	{
		include: "#variable",
	},
];
const repository = {
	comments: {
		patterns: [
			{
				comment: "Single line comments with number-sign",
				match: "(#)+(.*)",
				captures: {
					"0": {
						name: "comment.line.number-sign.hcl",
					},
				},
			},
			{
				comment: "Single line comments with double-slash",
				match: "(//)+(.*)",
				captures: {
					"0": {
						name: "comment.line.double-slash.hcl",
					},
				},
			},
			{
				comment: "Multiple line comment block",
				begin: "/\\*",
				beginCaptures: {
					"0": {
						name: "comment.block.documentation.hcl",
					},
				},
				end: "\\*/",
				endCaptures: {
					"0": {
						name: "comment.block.documentation.hcl",
					},
				},
				contentName: "comment.block.documentation.hcl",
			},
		],
	},
	constructs: {
		patterns: [
			{
				begin: "([\\w-]+)\\s*\\{",
				beginCaptures: {
					"0": {
						name: "meta.function.hcl",
					},
					"1": {
						name: "storage.type.hcl",
					},
				},
				end: "\\}",
				patterns: [
					{
						include: "$self",
					},
					{
						include: "#comments",
					},
					{
						include: "#variable",
					},
				],
			},
			{
				begin: '([\\w-]+)((?:\\s*"[^"]*")*)\\s*\\{',
				beginCaptures: {
					"0": {
						name: "meta.function.hcl",
					},
					"1": {
						name: "storage.type.hcl",
					},
					"2": {
						name: "string.quoted.double.hcl",
					},
				},
				end: "\\}",
				patterns: [
					{
						include: "$self",
					},
					{
						include: "#comments",
					},
					{
						include: "#variable",
					},
				],
			},
		],
	},
	variable: {
		patterns: [
			{
				begin: "([\\w\\.-]+)\\s*(=)\\s*",
				beginCaptures: {
					"1": {
						name: "variable.parameter.hcl",
					},
					"2": {
						name: "keyword.operator.hcl",
					},
				},
				end: "(?<!\\2)$",
				endCaptures: {
					"0": {
						name: "keyword.operator.hcl",
					},
				},
				patterns: [
					{
						include: "#variable-type-string",
					},
					{
						include: "#variable-type-heredoc",
					},
					{
						include: "#variable-type-hexadecimal",
					},
					{
						include: "#variable-type-decimal",
					},
					{
						include: "#variable-type-constant",
					},
					{
						include: "#variable-type-array",
					},
					{
						include: "#variable-type-map",
					},
				],
			},
		],
	},
	"variable-interpolation": {
		patterns: [
			{
				begin: "\\$\\{",
				beginCaptures: {
					"0": {
						name: "keyword.operator.hcl",
					},
				},
				end: "\\}",
				endCaptures: {
					"0": {
						name: "keyword.operator.hcl",
					},
				},
				patterns: [
					{
						include: "#variable-interpolation-function",
					},
					{
						include: "#variable-interpolation-reference",
					},
				],
			},
		],
	},
	"variable-interpolation-function": {
		patterns: [
			{
				begin: "([\\w-]+)\\(",
				beginCaptures: {
					"1": {
						name: "entity.name.function.hcl",
					},
				},
				end: "\\)",
				patterns: [
					{
						include: "#variable-interpolation-function",
					},
					{
						include: "#variable-interpolation-reference",
					},
					{
						include: "#variable-type-hexadecimal",
					},
					{
						include: "#variable-type-decimal",
					},
					{
						include: "#variable-type-constant",
					},
					{
						include: "#variable-type-string",
					},
				],
			},
		],
	},
	"variable-interpolation-reference": {
		patterns: [
			{
				match: "\\b([\\w-]+)((\\.[\\w-]+)*)\\b",
				captures: {
					"1": {
						name: "storage.modifier.hcl",
					},
					"2": {
						name: "entity.name.type.hcl",
					},
				},
			},
		],
	},
	"variable-type-array": {
		patterns: [
			{
				begin: "\\[",
				end: "\\]",
				patterns: [
					{
						include: "#variable-type-decimal",
					},
					{
						include: "#variable-type-hexadecimal",
					},
					{
						include: "#variable-type-constant",
					},
					{
						include: "#variable-type-string",
					},
					{
						match: "\\s*,\\s*",
					},
				],
			},
		],
	},
	"variable-type-map": {
		patterns: [
			{
				begin: "\\{",
				end: "\\}",
				patterns: [
					{
						begin: '("[\\w\\s\\.-]+")\\s*(:)',
						beginCaptures: {
							"1": {
								name: "string.quoted.double.hcl",
							},
							"2": {
								name: "keyword.operator.hcl",
							},
						},
						end: "(?<!\\2)\\s*($|(?=\\}))",
						endCaptures: {
							"0": {
								name: "keyword.operator.hcl",
							},
						},
						patterns: [
							{
								include: "#variable-type-decimal",
							},
							{
								include: "#variable-type-hexadecimal",
							},
							{
								include: "#variable-type-constant",
							},
							{
								include: "#variable-type-string",
							},
							{
								match: "\\s*,\\s*",
							},
						],
					},
				],
			},
		],
	},
	"variable-type-hexadecimal": {
		patterns: [
			{
				comment: "Numbers in hexadecimal with optional suffixes",
				match: "0x[0-9A-Fa-f]+([kKmMgG]b?)?",
				captures: {
					"0": {
						name: "constant.numeric.hcl",
					},
				},
			},
		],
	},
	"variable-type-decimal": {
		patterns: [
			{
				comment: "Numbers in decimal with optional suffixes",
				match: "\\b[0-9\\.]+([kKmMgG]b?)?\\b",
				captures: {
					"0": {
						name: "constant.numeric.hcl",
					},
				},
			},
		],
	},
	"variable-type-constant": {
		patterns: [
			{
				match: "\\b(true|false|yes|no|on|off)\\b",
				captures: {
					"0": {
						name: "constant.numeric.hcl",
					},
				},
			},
		],
	},
	"variable-type-string": {
		patterns: [
			{
				comment: "Usual string",
				begin: '"',
				beginCaptures: {
					"0": {
						name: "string.quoted.double.hcl",
					},
				},
				end: '"',
				endCaptures: {
					"0": {
						name: "string.quoted.double.hcl",
					},
				},
				patterns: [
					{
						include: "#variable-interpolation",
					},
					{
						match: '[^"]',
						captures: {
							"0": {
								name: "string.quoted.double.hcl",
							},
						},
					},
				],
			},
		],
	},
	"variable-type-heredoc": {
		patterns: [
			{
				comment: "Heredoc string",
				begin: "<<(\\w+)",
				beginCaptures: {
					"0": {
						name: "entity.name.section",
					},
				},
				end: "^\\s*\\1$",
				endCaptures: {
					"0": {
						name: "entity.name.section",
					},
				},
				contentName: "string.unquoted.here-doc.hcl",
			},
		],
	},
};
const hcl_tmLanguage = {
	name: name,
	scopeName: scopeName,
	comment: comment,
	fileTypes: fileTypes,
	patterns: patterns,
	repository: repository,
};

export {
	comment,
	hcl_tmLanguage as default,
	fileTypes,
	name,
	patterns,
	repository,
	scopeName,
};
