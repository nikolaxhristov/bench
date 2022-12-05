const information_for_contributors = [
	"This file has been converted from https://github.com/Ikuyadeu/vscode-R/blob/master/syntax/r.json",
	"If you want to provide a fix or improvement, please create a pull request against the original repository.",
	"Once accepted there, we are happy to receive an update request."
];
const version = "https://github.com/Ikuyadeu/vscode-R/commit/ff60e426f66503f3c9533c7a62a8fd3f9f6c53df";
const name = "r";
const scopeName = "source.r";
const patterns = [
	{
		include: "#roxygen"
	},
	{
		include: "#comments"
	},
	{
		include: "#constants"
	},
	{
		include: "#keywords"
	},
	{
		include: "#storage-type"
	},
	{
		include: "#strings"
	},
	{
		include: "#brackets"
	},
	{
		include: "#function-declarations"
	},
	{
		include: "#lambda-functions"
	},
	{
		include: "#builtin-functions"
	},
	{
		include: "#function-calls"
	},
	{
		include: "#general-variables"
	}
];
const repository = {
	comments: {
		patterns: [
			{
				captures: {
					"1": {
						name: "comment.line.pragma.r"
					},
					"2": {
						name: "entity.name.pragma.name.r"
					}
				},
				match: "^(#pragma[ \\t]+mark)[ \\t](.*)",
				name: "comment.line.pragma-mark.r"
			},
			{
				begin: "(^[ \\t]+)?(?=#)",
				beginCaptures: {
					"1": {
						name: "punctuation.whitespace.comment.leading.r"
					}
				},
				end: "(?!\\G)",
				patterns: [
					{
						begin: "#",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.comment.r"
							}
						},
						end: "\\n",
						name: "comment.line.number-sign.r"
					}
				]
			}
		]
	},
	constants: {
		patterns: [
			{
				match: "\\b(pi|letters|LETTERS|month\\.abb|month\\.name)\\b",
				name: "support.constant.misc.r"
			},
			{
				match: "\\b(TRUE|FALSE|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_|Inf|NaN)\\b",
				name: "constant.language.r"
			},
			{
				match: "\\b0(x|X)[0-9a-fA-F]+i\\b",
				name: "constant.numeric.imaginary.hexadecimal.r"
			},
			{
				match: "\\b[0-9]+\\.?[0-9]*(?:(e|E)(\\+|-)?[0-9]+)?i\\b",
				name: "constant.numeric.imaginary.decimal.r"
			},
			{
				match: "\\.[0-9]+(?:(e|E)(\\+|-)?[0-9]+)?i\\b",
				name: "constant.numeric.imaginary.decimal.r"
			},
			{
				match: "\\b0(x|X)[0-9a-fA-F]+L\\b",
				name: "constant.numeric.integer.hexadecimal.r"
			},
			{
				match: "\\b(?:[0-9]+\\.?[0-9]*)(?:(e|E)(\\+|-)?[0-9]+)?L\\b",
				name: "constant.numeric.integer.decimal.r"
			},
			{
				match: "\\b0(x|X)[0-9a-fA-F]+\\b",
				name: "constant.numeric.float.hexadecimal.r"
			},
			{
				match: "\\b[0-9]+\\.?[0-9]*(?:(e|E)(\\+|-)?[0-9]+)?\\b",
				name: "constant.numeric.float.decimal.r"
			},
			{
				match: "\\.[0-9]+(?:(e|E)(\\+|-)?[0-9]+)?\\b",
				name: "constant.numeric.float.decimal.r"
			}
		]
	},
	"general-variables": {
		patterns: [
			{
				captures: {
					"1": {
						name: "variable.parameter.r"
					},
					"2": {
						name: "keyword.operator.assignment.r"
					}
				},
				match: "([[:alpha:].][[:alnum:]._]*)\\s*(=)(?=[^=])"
			},
			{
				captures: {
					"1": {
						name: "variable.parameter.r"
					},
					"2": {
						name: "keyword.operator.assignment.r"
					}
				},
				match: "(`[^`]+`)\\s*(=)(?=[^=])"
			},
			{
				match: "\\b([\\d_][[:alnum:]._]+)\\b",
				name: "invalid.illegal.variable.other.r"
			},
			{
				match: "\\b([[:alnum:]_]+)(?=::)",
				name: "entity.namespace.r"
			},
			{
				match: "\\b([[:alnum:]._]+)\\b",
				name: "variable.other.r"
			},
			{
				match: "(`[^`]+`)",
				name: "variable.other.r"
			}
		]
	},
	keywords: {
		patterns: [
			{
				match: "\\b(break|next|repeat|else|in)\\b",
				name: "keyword.control.r"
			},
			{
				match: "\\b(ifelse|if|for|return|switch|while|invisible)\\b(?=\\s*\\()",
				name: "keyword.control.r"
			},
			{
				match: "(\\-|\\+|\\*|\\/|%\\/%|%%|%\\*%|%o%|%x%|\\^)",
				name: "keyword.operator.arithmetic.r"
			},
			{
				match: "(:=|<-|<<-|->|->>)",
				name: "keyword.operator.assignment.r"
			},
			{
				match: "(==|<=|>=|!=|<>|<|>|%in%)",
				name: "keyword.operator.comparison.r"
			},
			{
				match: "(!|&{1,2}|[|]{1,2})",
				name: "keyword.operator.logical.r"
			},
			{
				match: "(\\|>)",
				name: "keyword.operator.pipe.r"
			},
			{
				match: "(%between%|%chin%|%like%|%\\+%|%\\+replace%|%:%|%do%|%dopar%|%>%|%<>%|%T>%|%\\$%)",
				name: "keyword.operator.other.r"
			},
			{
				match: "(\\.\\.\\.|\\$|:|\\~|@)",
				name: "keyword.other.r"
			}
		]
	},
	"storage-type": {
		patterns: [
			{
				match: "\\b(character|complex|double|expression|integer|list|logical|numeric|single|raw)\\b(?=\\s*\\()",
				name: "storage.type.r"
			}
		]
	},
	strings: {
		patterns: [
			{
				begin: "[rR]\"(-*)\\[",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.string.raw.begin.r"
					}
				},
				end: "\\]\\1\"",
				endCaptures: {
					"0": {
						name: "punctuation.definition.string.raw.end.r"
					}
				},
				name: "string.quoted.double.raw.r"
			},
			{
				begin: "[rR]'(-*)\\[",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.string.raw.begin.r"
					}
				},
				end: "\\]\\1'",
				endCaptures: {
					"0": {
						name: "punctuation.definition.string.raw.end.r"
					}
				},
				name: "string.quoted.single.raw.r"
			},
			{
				begin: "[rR]\"(-*)\\{",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.string.raw.begin.r"
					}
				},
				end: "\\}\\1\"",
				endCaptures: {
					"0": {
						name: "punctuation.definition.string.raw.end.r"
					}
				},
				name: "string.quoted.double.raw.r"
			},
			{
				begin: "[rR]'(-*)\\{",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.string.raw.begin.r"
					}
				},
				end: "\\}\\1'",
				endCaptures: {
					"0": {
						name: "punctuation.definition.string.raw.end.r"
					}
				},
				name: "string.quoted.single.raw.r"
			},
			{
				begin: "[rR]\"(-*)\\(",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.string.raw.begin.r"
					}
				},
				end: "\\)\\1\"",
				endCaptures: {
					"0": {
						name: "punctuation.definition.string.raw.end.r"
					}
				},
				name: "string.quoted.double.raw.r"
			},
			{
				begin: "[rR]'(-*)\\(",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.string.raw.begin.r"
					}
				},
				end: "\\)\\1'",
				endCaptures: {
					"0": {
						name: "punctuation.definition.string.raw.end.r"
					}
				},
				name: "string.quoted.single.raw.r"
			},
			{
				begin: "\"",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.string.begin.r"
					}
				},
				end: "\"",
				endCaptures: {
					"0": {
						name: "punctuation.definition.string.end.r"
					}
				},
				name: "string.quoted.double.r",
				patterns: [
					{
						match: "\\\\.",
						name: "constant.character.escape.r"
					}
				]
			},
			{
				begin: "'",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.string.begin.r"
					}
				},
				end: "'",
				endCaptures: {
					"0": {
						name: "punctuation.definition.string.end.r"
					}
				},
				name: "string.quoted.single.r",
				patterns: [
					{
						match: "\\\\.",
						name: "constant.character.escape.r"
					}
				]
			}
		]
	},
	brackets: {
		patterns: [
			{
				begin: "\\(",
				beginCaptures: {
					"0": {
						name: "punctuation.section.parens.begin.r"
					}
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.parens.end.r"
					}
				},
				patterns: [
					{
						include: "source.r"
					}
				]
			},
			{
				begin: "\\[(?!\\[)",
				beginCaptures: {
					"0": {
						name: "punctuation.section.brackets.single.begin.r"
					}
				},
				end: "\\]",
				endCaptures: {
					"0": {
						name: "punctuation.section.brackets.single.end.r"
					}
				},
				patterns: [
					{
						include: "source.r"
					}
				]
			},
			{
				begin: "\\[\\[",
				beginCaptures: {
					"0": {
						name: "punctuation.section.brackets.double.begin.r"
					}
				},
				end: "\\]\\]",
				endCaptures: {
					"0": {
						name: "punctuation.section.brackets.double.end.r"
					}
				},
				contentName: "meta.item-access.arguments.r",
				patterns: [
					{
						include: "source.r"
					}
				]
			},
			{
				begin: "\\{",
				beginCaptures: {
					"0": {
						name: "punctuation.section.braces.begin.r"
					}
				},
				end: "\\}",
				endCaptures: {
					"0": {
						name: "punctuation.section.braces.end.r"
					}
				},
				patterns: [
					{
						include: "source.r"
					}
				]
			}
		]
	},
	"function-declarations": {
		patterns: [
			{
				match: "((?:`[^`\\\\]*(?:\\\\.[^`\\\\]*)*`)|(?:[[:alpha:].][[:alnum:]._]*))\\s*(<?<-|=(?!=))\\s*(function|\\\\)(?!\\w)",
				captures: {
					"1": {
						name: "entity.name.function.r"
					},
					"2": {
						name: "keyword.operator.assignment.r"
					},
					"3": {
						name: "keyword.control.r"
					}
				},
				name: "meta.function.r",
				patterns: [
					{
						include: "#lambda-functions"
					}
				]
			}
		]
	},
	"lambda-functions": {
		patterns: [
			{
				begin: "\\b(function)\\s*(\\()",
				beginCaptures: {
					"1": {
						name: "keyword.control.r"
					},
					"2": {
						name: "punctuation.section.parens.begin.r"
					}
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.parens.end.r"
					}
				},
				name: "meta.function.r",
				contentName: "meta.function.parameters.r",
				patterns: [
					{
						include: "#comments"
					},
					{
						match: "(?:[a-zA-Z._][\\w.]*|`[^`]+`)",
						name: "variable.other.r"
					},
					{
						begin: "(?==)",
						end: "(?=[,)])",
						patterns: [
							{
								include: "source.r"
							}
						]
					},
					{
						match: ",",
						name: "punctuation.separator.parameters.r"
					}
				]
			}
		]
	},
	"function-calls": {
		begin: "(?:\\b|(?=\\.))((?:[a-zA-Z._][\\w.]*|`[^`]+`))\\s*(\\()",
		beginCaptures: {
			"1": {
				name: "variable.function.r"
			},
			"2": {
				name: "punctuation.section.parens.begin.r"
			}
		},
		contentName: "meta.function-call.arguments.r",
		end: "(\\))",
		endCaptures: {
			"1": {
				name: "punctuation.section.parens.end.r"
			}
		},
		name: "meta.function-call.r",
		patterns: [
			{
				include: "#function-parameters"
			}
		]
	},
	"function-parameters": {
		patterns: [
			{
				name: "meta.function-call.r",
				contentName: "meta.function-call.parameters.r"
			},
			{
				match: "(?:[a-zA-Z._][\\w.]*|`[^`]+`)(?=\\s[^=])",
				name: "variable.other.r"
			},
			{
				begin: "(?==)",
				end: "(?=[,)])",
				patterns: [
					{
						include: "source.r"
					}
				]
			},
			{
				match: ",",
				name: "punctuation.separator.parameters.r"
			},
			{
				include: "source.r"
			}
		]
	},
	roxygen: {
		patterns: [
			{
				begin: "^\\s*(#')\\s*",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.comment.r"
					}
				},
				end: "$\\n?",
				name: "comment.line.roxygen.r",
				patterns: [
					{
						captures: {
							"1": {
								name: "keyword.other.r"
							},
							"2": {
								name: "variable.parameter.r"
							}
						},
						match: "(@param)\\s*((?:[a-zA-Z._][\\w.]*|`[^`]+`))"
					},
					{
						match: "@[a-zA-Z0-9]+",
						name: "keyword.other.r"
					}
				]
			}
		]
	},
	"builtin-functions": {
		patterns: [
			{
				match: "\\b(abbreviate|abs|acos|acosh|addNA|addTaskCallback|agrep|agrepl|alist|all|all\\.equal|all\\.equal.character|all\\.equal.default|all\\.equal.environment|all\\.equal.envRefClass|all\\.equal.factor|all\\.equal.formula|all\\.equal.language|all\\.equal.list|all\\.equal.numeric|all\\.equal.POSIXt|all\\.equal.raw|all\\.names|all\\.vars|any|anyDuplicated|anyDuplicated\\.array|anyDuplicated\\.data.frame|anyDuplicated\\.default|anyDuplicated\\.matrix|anyNA|anyNA\\.numeric_version|anyNA\\.POSIXlt|aperm|aperm\\.default|aperm\\.table|append|apply|Arg|args|array|arrayInd|as\\.array|as\\.array.default|as\\.call|as\\.character|as\\.character.condition|as\\.character.Date|as\\.character.default|as\\.character.error|as\\.character.factor|as\\.character.hexmode|as\\.character.numeric_version|as\\.character.octmode|as\\.character.POSIXt|as\\.character.srcref|as\\.complex|as\\.data.frame|as\\.data.frame.array|as\\.data.frame.AsIs|as\\.data.frame.character|as\\.data.frame.complex|as\\.data.frame.data.frame|as\\.data.frame.Date|as\\.data.frame.default|as\\.data.frame.difftime|as\\.data.frame.factor|as\\.data.frame.integer|as\\.data.frame.list|as\\.data.frame.logical|as\\.data.frame.matrix|as\\.data.frame.model.matrix|as\\.data.frame.noquote|as\\.data.frame.numeric|as\\.data.frame.numeric_version|as\\.data.frame.ordered|as\\.data.frame.POSIXct|as\\.data.frame.POSIXlt|as\\.data.frame.raw|as\\.data.frame.table|as\\.data.frame.ts|as\\.data.frame.vector|as\\.Date|as\\.Date.character|as\\.Date.date|as\\.Date.dates|as\\.Date.default|as\\.Date.factor|as\\.Date.numeric|as\\.Date.POSIXct|as\\.Date.POSIXlt|as\\.difftime|as\\.double|as\\.double.difftime|as\\.double.POSIXlt|as\\.environment|as\\.expression|as\\.expression.default|as\\.factor|as\\.function|as\\.function.default|as\\.hexmode|as\\.integer|as\\.list|as\\.list.data.frame|as\\.list.Date|as\\.list.default|as\\.list.environment|as\\.list.factor|as\\.list.function|as\\.list.numeric_version|as\\.list.POSIXct|as\\.logical|as\\.logical.factor|as\\.matrix|as\\.matrix.data.frame|as\\.matrix.default|as\\.matrix.noquote|as\\.matrix.POSIXlt|as\\.name|as\\.null|as\\.null.default|as\\.numeric|as\\.numeric_version|as\\.octmode|as\\.ordered|as\\.package_version|as\\.pairlist|as\\.POSIXct|as\\.POSIXct.date|as\\.POSIXct.Date|as\\.POSIXct.dates|as\\.POSIXct.default|as\\.POSIXct.numeric|as\\.POSIXct.POSIXlt|as\\.POSIXlt|as\\.POSIXlt.character|as\\.POSIXlt.date|as\\.POSIXlt.Date|as\\.POSIXlt.dates|as\\.POSIXlt.default|as\\.POSIXlt.factor|as\\.POSIXlt.numeric|as\\.POSIXlt.POSIXct|as\\.qr|as\\.raw|as\\.single|as\\.single.default|as\\.symbol|as\\.table|as\\.table.default|as\\.vector|as\\.vector.factor|asin|asinh|asNamespace|asS3|asS4|assign|atan|atan2|atanh|attach|attachNamespace|attr|attr\\.all.equal|attributes|autoload|autoloader|backsolve|baseenv|basename|besselI|besselJ|besselK|besselY|beta|bindingIsActive|bindingIsLocked|bindtextdomain|bitwAnd|bitwNot|bitwOr|bitwShiftL|bitwShiftR|bitwXor|body|bquote|break|browser|browserCondition|browserSetDebug|browserText|builtins|by|by\\.data.frame|by\\.default|bzfile|c|c\\.Date|c\\.difftime|c\\.noquote|c\\.numeric_version|c\\.POSIXct|c\\.POSIXlt|c\\.warnings|call|callCC|capabilities|casefold|cat|cbind|cbind\\.data.frame|ceiling|char\\.expand|character|charmatch|charToRaw|chartr|check_tzones|chkDots|chol|chol\\.default|chol2inv|choose|class|clearPushBack|close|close\\.connection|close\\.srcfile|close\\.srcfilealias|closeAllConnections|col|colMeans|colnames|colSums|commandArgs|comment|complex|computeRestarts|conditionCall|conditionCall\\.condition|conditionMessage|conditionMessage\\.condition|conflicts|Conj|contributors|cos|cosh|cospi|crossprod|Cstack_info|cummax|cummin|cumprod|cumsum|curlGetHeaders|cut|cut\\.Date|cut\\.default|cut\\.POSIXt|data\\.class|data\\.frame|data\\.matrix|date|debug|debuggingState|debugonce|default\\.stringsAsFactors|delayedAssign|deparse|det|detach|determinant|determinant\\.matrix|dget|diag|diff|diff\\.Date|diff\\.default|diff\\.difftime|diff\\.POSIXt|difftime|digamma|dim|dim\\.data.frame|dimnames|dimnames\\.data.frame|dir|dir\\.create|dir\\.exists|dirname|do\\.call|dontCheck|double|dput|dQuote|drop|droplevels|droplevels\\.data.frame|droplevels\\.factor|dump|duplicated|duplicated\\.array|duplicated\\.data.frame|duplicated\\.default|duplicated\\.matrix|duplicated\\.numeric_version|duplicated\\.POSIXlt|duplicated\\.warnings|dyn\\.load|dyn\\.unload|dynGet|eapply|eigen|emptyenv|enc2native|enc2utf8|encodeString|Encoding|endsWith|enquote|env\\.profile|environment|environmentIsLocked|environmentName|eval|eval\\.parent|evalq|exists|exp|expand\\.grid|expm1|expression|extSoftVersion|factor|factorial|fifo|file|file\\.access|file\\.append|file\\.choose|file\\.copy|file\\.create|file\\.exists|file\\.info|file\\.link|file\\.mode|file\\.mtime|file\\.path|file\\.remove|file\\.rename|file\\.show|file\\.size|file\\.symlink|Filter|Find|find\\.package|findInterval|findPackageEnv|findRestart|floor|flush|flush\\.connection|for|force|forceAndCall|formals|format|format\\.AsIs|format\\.data.frame|format\\.Date|format\\.default|format\\.difftime|format\\.factor|format\\.hexmode|format\\.info|format\\.libraryIQR|format\\.numeric_version|format\\.octmode|format\\.packageInfo|format\\.POSIXct|format\\.POSIXlt|format\\.pval|format\\.summaryDefault|formatC|formatDL|forwardsolve|function|gamma|gc|gc\\.time|gcinfo|gctorture|gctorture2|get|get0|getAllConnections|getCallingDLL|getCallingDLLe|getConnection|getDLLRegisteredRoutines|getDLLRegisteredRoutines\\.character|getDLLRegisteredRoutines\\.DLLInfo|getElement|geterrmessage|getExportedValue|getHook|getLoadedDLLs|getNamespace|getNamespaceExports|getNamespaceImports|getNamespaceInfo|getNamespaceName|getNamespaceUsers|getNamespaceVersion|getNativeSymbolInfo|getOption|getRversion|getSrcLines|getTaskCallbackNames|gettext|gettextf|getwd|gl|globalenv|gregexpr|grep|grepl|grepRaw|grouping|gsub|gzcon|gzfile|I|iconv|iconvlist|icuGetCollate|icuSetCollate|identical|identity|if|ifelse|Im|importIntoEnv|inherits|integer|interaction|interactive|intersect|intToBits|intToUtf8|inverse\\.rle|invisible|invokeRestart|invokeRestartInteractively|is\\.array|is\\.atomic|is\\.call|is\\.character|is\\.complex|is\\.data.frame|is\\.double|is\\.element|is\\.environment|is\\.expression|is\\.factor|is\\.finite|is\\.function|is\\.infinite|is\\.integer|is\\.language|is\\.list|is\\.loaded|is\\.logical|is\\.matrix|is\\.na|is\\.na.data.frame|is\\.na.numeric_version|is\\.na.POSIXlt|is\\.name|is\\.nan|is\\.null|is\\.numeric|is\\.numeric_version|is\\.numeric.Date|is\\.numeric.difftime|is\\.numeric.POSIXt|is\\.object|is\\.ordered|is\\.package_version|is\\.pairlist|is\\.primitive|is\\.qr|is\\.R|is\\.raw|is\\.recursive|is\\.single|is\\.symbol|is\\.table|is\\.unsorted|is\\.vector|isatty|isBaseNamespace|isdebugged|isIncomplete|isNamespace|isNamespaceLoaded|ISOdate|ISOdatetime|isOpen|isRestart|isS4|isSeekable|isSymmetric|isSymmetric\\.matrix|isTRUE|jitter|julian|julian\\.Date|julian\\.POSIXt|kappa|kappa\\.default|kappa\\.lm|kappa\\.qr|kronecker|l10n_info|La_library|La_version|La\\.svd|labels|labels\\.default|lapply|lazyLoad|lazyLoadDBexec|lazyLoadDBfetch|lbeta|lchoose|length|length\\.POSIXlt|lengths|levels|levels\\.default|lfactorial|lgamma|libcurlVersion|library|library\\.dynam|library\\.dynam.unload|licence|license|list|list\\.dirs|list\\.files|list2env|load|loadedNamespaces|loadingNamespaceInfo|loadNamespace|local|lockBinding|lockEnvironment|log|log10|log1p|log2|logb|logical|lower\\.tri|ls|make\\.names|make\\.unique|makeActiveBinding|Map|mapply|margin\\.table|mat\\.or.vec|match|match\\.arg|match\\.call|match\\.fun|Math\\.data.frame|Math\\.Date|Math\\.difftime|Math\\.factor|Math\\.POSIXt|matrix|max|max\\.col|mean|mean\\.Date|mean\\.default|mean\\.difftime|mean\\.POSIXct|mean\\.POSIXlt|mem\\.limits|memCompress|memDecompress|memory\\.profile|merge|merge\\.data.frame|merge\\.default|message|mget|min|missing|Mod|mode|months|months\\.Date|months\\.POSIXt|names|names\\.POSIXlt|namespaceExport|namespaceImport|namespaceImportClasses|namespaceImportFrom|namespaceImportMethods|nargs|nchar|ncol|NCOL|Negate|new\\.env|next|NextMethod|ngettext|nlevels|noquote|norm|normalizePath|nrow|NROW|numeric|numeric_version|nzchar|objects|oldClass|OlsonNames|on\\.exit|open|open\\.connection|open\\.srcfile|open\\.srcfilealias|open\\.srcfilecopy|Ops\\.data.frame|Ops\\.Date|Ops\\.difftime|Ops\\.factor|Ops\\.numeric_version|Ops\\.ordered|Ops\\.POSIXt|options|order|ordered|outer|package_version|packageEvent|packageHasNamespace|packageStartupMessage|packBits|pairlist|parent\\.env|parent\\.frame|parse|parseNamespaceFile|paste|paste0|path\\.expand|path\\.package|pcre_config|pipe|pmatch|pmax|pmax\\.int|pmin|pmin\\.int|polyroot|pos\\.to.env|Position|pretty|pretty\\.default|prettyNum|print|print\\.AsIs|print\\.by|print\\.condition|print\\.connection|print\\.data.frame|print\\.Date|print\\.default|print\\.difftime|print\\.Dlist|print\\.DLLInfo|print\\.DLLInfoList|print\\.DLLRegisteredRoutines|print\\.eigen|print\\.factor|print\\.function|print\\.hexmode|print\\.libraryIQR|print\\.listof|print\\.NativeRoutineList|print\\.noquote|print\\.numeric_version|print\\.octmode|print\\.packageInfo|print\\.POSIXct|print\\.POSIXlt|print\\.proc_time|print\\.restart|print\\.rle|print\\.simple.list|print\\.srcfile|print\\.srcref|print\\.summary.table|print\\.summaryDefault|print\\.table|print\\.warnings|prmatrix|proc\\.time|prod|prop\\.table|provideDimnames|psigamma|pushBack|pushBackLength|q|qr|qr\\.coef|qr\\.default|qr\\.fitted|qr\\.Q|qr\\.qty|qr\\.qy|qr\\.R|qr\\.resid|qr\\.solve|qr\\.X|quarters|quarters\\.Date|quarters\\.POSIXt|quit|quote|R_system_version|R\\.home|R\\.Version|range|range\\.default|rank|rapply|raw|rawConnection|rawConnectionValue|rawShift|rawToBits|rawToChar|rbind|rbind\\.data.frame|rcond|Re|read\\.dcf|readBin|readChar|readline|readLines|readRDS|readRenviron|Recall|Reduce|reg\\.finalizer|regexec|regexpr|registerS3method|registerS3methods|regmatches|remove|removeTaskCallback|rep|rep_len|rep\\.Date|rep\\.factor|rep\\.int|rep\\.numeric_version|rep\\.POSIXct|rep\\.POSIXlt|repeat|replace|replicate|require|requireNamespace|restartDescription|restartFormals|retracemem|return|returnValue|rev|rev\\.default|rle|rm|RNGkind|RNGversion|round|round\\.Date|round\\.POSIXt|row|row\\.names|row\\.names.data.frame|row\\.names.default|rowMeans|rownames|rowsum|rowsum\\.data.frame|rowsum\\.default|rowSums|sample|sample\\.int|sapply|save|save\\.image|saveRDS|scale|scale\\.default|scan|search|searchpaths|seek|seek\\.connection|seq|seq_along|seq_len|seq\\.Date|seq\\.default|seq\\.int|seq\\.POSIXt|sequence|serialize|set\\.seed|setdiff|setequal|setHook|setNamespaceInfo|setSessionTimeLimit|setTimeLimit|setwd|showConnections|shQuote|sign|signalCondition|signif|simpleCondition|simpleError|simpleMessage|simpleWarning|simplify2array|sin|single|sinh|sink|sink\\.number|sinpi|slice\\.index|socketConnection|socketSelect|solve|solve\\.default|solve\\.qr|sort|sort\\.default|sort\\.int|sort\\.list|sort\\.POSIXlt|source|split|split\\.data.frame|split\\.Date|split\\.default|split\\.POSIXct|sprintf|sqrt|sQuote|srcfile|srcfilealias|srcfilecopy|srcref|standardGeneric|startsWith|stderr|stdin|stdout|stop|stopifnot|storage\\.mode|strftime|strptime|strrep|strsplit|strtoi|strtrim|structure|strwrap|sub|subset|subset\\.data.frame|subset\\.default|subset\\.matrix|substitute|substr|substring|sum|summary|summary\\.connection|summary\\.data.frame|Summary\\.data.frame|summary\\.Date|Summary\\.Date|summary\\.default|Summary\\.difftime|summary\\.factor|Summary\\.factor|summary\\.matrix|Summary\\.numeric_version|Summary\\.ordered|summary\\.POSIXct|Summary\\.POSIXct|summary\\.POSIXlt|Summary\\.POSIXlt|summary\\.proc_time|summary\\.srcfile|summary\\.srcref|summary\\.table|suppressMessages|suppressPackageStartupMessages|suppressWarnings|svd|sweep|switch|sys\\.call|sys\\.calls|Sys\\.chmod|Sys\\.Date|sys\\.frame|sys\\.frames|sys\\.function|Sys\\.getenv|Sys\\.getlocale|Sys\\.getpid|Sys\\.glob|Sys\\.info|sys\\.load.image|Sys\\.localeconv|sys\\.nframe|sys\\.on.exit|sys\\.parent|sys\\.parents|Sys\\.readlink|sys\\.save.image|Sys\\.setenv|Sys\\.setFileTime|Sys\\.setlocale|Sys\\.sleep|sys\\.source|sys\\.status|Sys\\.time|Sys\\.timezone|Sys\\.umask|Sys\\.unsetenv|Sys\\.which|system|system\\.file|system\\.time|system2|t|t\\.data.frame|t\\.default|table|tabulate|tan|tanh|tanpi|tapply|taskCallbackManager|tcrossprod|tempdir|tempfile|testPlatformEquivalence|textConnection|textConnectionValue|tolower|topenv|toString|toString\\.default|toupper|trace|traceback|tracemem|tracingState|transform|transform\\.data.frame|transform\\.default|trigamma|trimws|trunc|trunc\\.Date|trunc\\.POSIXt|truncate|truncate\\.connection|try|tryCatch|typeof|unclass|undebug|union|unique|unique\\.array|unique\\.data.frame|unique\\.default|unique\\.matrix|unique\\.numeric_version|unique\\.POSIXlt|unique\\.warnings|units|units\\.difftime|unix\\.time|unlink|unlist|unloadNamespace|unlockBinding|unname|unserialize|unsplit|untrace|untracemem|unz|upper\\.tri|url|UseMethod|utf8ToInt|validEnc|validUTF8|vapply|vector|Vectorize|warning|warnings|weekdays|weekdays\\.Date|weekdays\\.POSIXt|which|which\\.max|which\\.min|while|with|with\\.default|withAutoprint|withCallingHandlers|within|within\\.data.frame|within\\.list|withRestarts|withVisible|write|write\\.dcf|writeBin|writeChar|writeLines|xor|xor\\.hexmode|xor\\.octmode|xpdrows\\.data.frame|xtfrm|xtfrm\\.AsIs|xtfrm\\.Date|xtfrm\\.default|xtfrm\\.difftime|xtfrm\\.factor|xtfrm\\.numeric_version|xtfrm\\.POSIXct|xtfrm\\.POSIXlt|xtfrm\\.Surv|xzfile|zapsmall)\\s*(\\()",
				captures: {
					"1": {
						name: "support.function.r"
					}
				}
			},
			{
				match: "\\b(abline|arrows|assocplot|axis|Axis|axis\\.Date|Axis\\.Date|Axis\\.default|axis\\.POSIXct|Axis\\.POSIXt|Axis\\.table|axTicks|barplot|barplot\\.default|box|boxplot|boxplot\\.default|boxplot\\.formula|boxplot\\.matrix|bxp|cdplot|cdplot\\.default|cdplot\\.formula|clip|close\\.screen|co\\.intervals|contour|contour\\.default|coplot|curve|dotchart|erase\\.screen|filled\\.contour|fourfoldplot|frame|grconvertX|grconvertY|grid|hist|hist\\.Date|hist\\.default|hist\\.POSIXt|identify|identify\\.default|image|image\\.default|layout|layout\\.show|lcm|legend|lines|lines\\.default|lines\\.formula|lines\\.histogram|lines\\.table|locator|matlines|matplot|matpoints|mosaicplot|mosaicplot\\.default|mosaicplot\\.formula|mtext|pairs|pairs\\.default|pairs\\.formula|panel\\.smooth|par|persp|persp\\.default|pie|piechart|plot|plot\\.data.frame|plot\\.default|plot\\.design|plot\\.factor|plot\\.formula|plot\\.function|plot\\.histogram|plot\\.new|plot\\.raster|plot\\.table|plot\\.window|plot\\.xy|plotHclust|points|points\\.default|points\\.formula|points\\.table|polygon|polypath|rasterImage|rect|rug|screen|segments|smoothScatter|spineplot|spineplot\\.default|spineplot\\.formula|split\\.screen|stars|stem|strheight|stripchart|stripchart\\.default|stripchart\\.formula|strwidth|sunflowerplot|sunflowerplot\\.default|sunflowerplot\\.formula|symbols|text|text\\.default|text\\.formula|title|xinch|xspline|xyinch|yinch)\\s*(\\()",
				captures: {
					"1": {
						name: "support.function.r"
					}
				}
			},
			{
				match: "\\b(adjustcolor|anyNA\\.raster|as\\.graphicsAnnot|as\\.matrix.raster|as\\.raster|as\\.raster.array|as\\.raster.character|as\\.raster.logical|as\\.raster.matrix|as\\.raster.numeric|as\\.raster.raster|as\\.raster.raw|axisTicks|bitmap|bmp|boxplot\\.stats|c2to3|cairo_pdf|cairo_ps|cairoVersion|check_for_XQuartz|check_gs_type|check\\.options|checkFont|checkFont\\.CIDFont|checkFont\\.default|checkFont\\.Type1Font|checkFontInUse|checkIntFormat|checkQuartzFont|checkX11Font|chromaticAdaptation|chull|CIDFont|cm|cm\\.colors|col2rgb|colorConverter|colorRamp|colorRampPalette|colors|colours|contourLines|convertColor|densCols|dev\\.capabilities|dev\\.capture|dev\\.control|dev\\.copy|dev\\.copy2eps|dev\\.copy2pdf|dev\\.cur|dev\\.displaylist|dev\\.flush|dev\\.hold|dev\\.interactive|dev\\.list|dev\\.new|dev\\.next|dev\\.off|dev\\.prev|dev\\.print|dev\\.set|dev\\.size|dev2bitmap|devAskNewPage|deviceIsInteractive|embedFonts|extendrange|getGraphicsEvent|getGraphicsEventEnv|graphics\\.off|gray|gray\\.colors|grey|grey\\.colors|grSoftVersion|guessEncoding|hcl|heat\\.colors|hsv|initPSandPDFfonts|is\\.na.raster|is\\.raster|isPDF|jpeg|make\\.rgb|matchEncoding|matchEncoding\\.CIDFont|matchEncoding\\.Type1Font|matchFont|n2mfrow|nclass\\.FD|nclass\\.scott|nclass\\.Sturges|Ops\\.raster|palette|pdf|pdf\\.options|pdfFonts|pictex|png|postscript|postscriptFonts|prettyDate|print\\.colorConverter|print\\.raster|print\\.recordedplot|print\\.RGBcolorConverter|printFont|printFont\\.CIDFont|printFont\\.Type1Font|printFonts|ps\\.options|quartz|quartz\\.options|quartz\\.save|quartzFont|quartzFonts|rainbow|recordGraphics|recordPalette|recordPlot|replayPlot|restoreRecordedPlot|rgb|rgb2hsv|savePlot|seqDtime|setEPS|setFonts|setGraphicsEventEnv|setGraphicsEventHandlers|setPS|setQuartzFonts|setX11Fonts|svg|terrain\\.colors|tiff|topo\\.colors|trans3d|trunc_POSIXt|Type1Font|x11|X11|X11\\.options|X11Font|X11FontError|X11Fonts|xfig|xy\\.coords|xyTable|xyz\\.coords)\\s*(\\()",
				captures: {
					"1": {
						name: "support.function.r"
					}
				}
			},
			{
				match: "\\b(addNextMethod|allGenerics|allNames|Arith|as|asMethodDefinition|assignClassDef|assignMethodsMetaData|balanceMethodsList|bind_activation|cacheGenericsMetaData|cacheMetaData|cacheMethod|cacheOnAssign|callGeneric|callNextMethod|canCoerce|cbind|cbind2|checkAtAssignment|checkSlotAssignment|classesToAM|classGeneratorFunction|classLabel|classMetaName|className|coerce|Compare|completeClassDefinition|completeExtends|completeSubclasses|Complex|conformMethod|defaultDumpName|defaultPrototype|dispatchIsInternal|doPrimitiveMethod|dumpMethod|dumpMethods|el|elNamed|empty\\.dump|emptyMethodsList|envRefInferField|envRefSetField|evalOnLoad|evalqOnLoad|evalSource|existsFunction|existsMethod|extends|externalRefMethod|finalDefaultMethod|findClass|findFunction|findMethod|findMethods|findMethodSignatures|findUnique|fixPre1\\.8|formalArgs|fromNextMethod|functionBody|generic\\.skeleton|genericForBasic|getAccess|getAllMethods|getAllSuperClasses|getClass|getClassDef|getClasses|getClassName|getClassPackage|getDataPart|getExtends|getFunction|getGeneric|getGenericFromCall|getGenerics|getGroup|getGroupMembers|getLoadActions|getMethod|getMethods|getMethodsAndAccessors|getMethodsForDispatch|getMethodsMetaData|getPackageName|getProperties|getPrototype|getRefClass|getRefSuperClasses|getSlots|getSubclasses|getValidity|getVirtual|hasArg|hasLoadAction|hasMethod|hasMethods|implicitGeneric|inBasicFuns|inferProperties|inheritedSlotNames|inheritedSubMethodLists|initFieldArgs|initialize|initMethodDispatch|initRefFields|insertClassMethods|insertMethod|insertMethodInEmptyList|insertSource|installClassMethod|is|isBaseFun|isClass|isClassDef|isClassUnion|isGeneric|isGrammarSymbol|isGroup|isMixin|isRematched|isS3Generic|isSealedClass|isSealedMethod|isVirtualClass|isXS3Class|kronecker|languageEl|linearizeMlist|listFromMethods|listFromMlist|loadMethod|Logic|makeClassMethod|makeClassRepresentation|makeEnvRefMethods|makeExtends|makeGeneric|makeMethodsList|makePrototypeFromClassDef|makeStandardGeneric|matchDefaults|matchSignature|Math|Math2|mergeMethods|metaNameUndo|method\\.skeleton|MethodAddCoerce|methodSignatureMatrix|MethodsList|MethodsListSelect|methodsPackageMetaName|missingArg|mlistMetaName|multipleClasses|new|newBasic|newClassRepresentation|newEmptyObject|Ops|outerLabels|packageSlot|possibleExtends|print\\.MethodsList|printClassRepresentation|printPropertiesList|prohibitGeneric|promptClass|promptMethods|prototype|Quote|rbind|rbind2|reconcilePropertiesAndPrototype|refClassFields|refClassInformation|refClassMethods|refClassPrompt|refObjectClass|registerImplicitGenerics|rematchDefinition|removeClass|removeGeneric|removeMethod|removeMethods|removeMethodsObject|representation|requireMethods|resetClass|resetGeneric|S3Class|S3forS4Methods|S3Part|sealClass|seemsS4Object|selectMethod|selectSuperClasses|setAs|setCacheOnAssign|setClass|setClassUnion|setDataPart|setGeneric|setGenericImplicit|setGroupGeneric|setIs|setLoadAction|setLoadActions|setMethod|setNames|setOldClass|setPackageName|setPrimitiveMethods|setRefClass|setReplaceMethod|setValidity|show|showClass|showClassMethod|showDefault|showExtends|showExtraSlots|showMethods|showMlist|showRefClassDef|signature|SignatureMethod|sigToEnv|slot|slotNames|slotsFromS3|substituteDirect|substituteFunctionArgs|Summary|superClassDepth|superClassMethodName|tableNames|testInheritedMethods|testVirtual|traceOff|traceOn|tryNew|unRematchDefinition|useMTable|validObject|validSlotNames)\\s*(\\()",
				captures: {
					"1": {
						name: "support.function.r"
					}
				}
			},
			{
				match: "\\b(acf|acf2AR|add\\.name|add1|add1\\.default|add1\\.glm|add1\\.lm|add1\\.mlm|addmargins|aggregate|aggregate\\.data.frame|aggregate\\.default|aggregate\\.formula|aggregate\\.ts|AIC|AIC\\.default|AIC\\.logLik|alias|alias\\.formula|alias\\.lm|anova|anova\\.glm|anova\\.glmlist|anova\\.lm|anova\\.lmlist|anova\\.loess|anova\\.mlm|anova\\.mlmlist|anova\\.nls|anovalist\\.nls|ansari\\.test|ansari\\.test.default|ansari\\.test.formula|aov|approx|approxfun|ar|ar\\.burg|ar\\.burg.default|ar\\.burg.mts|ar\\.mle|ar\\.ols|ar\\.yw|ar\\.yw.default|ar\\.yw.mts|arima|arima\\.sim|arima0|arima0\\.diag|ARMAacf|ARMAtoMA|as\\.data.frame.aovproj|as\\.data.frame.ftable|as\\.data.frame.logLik|as\\.dendrogram|as\\.dendrogram.dendrogram|as\\.dendrogram.hclust|as\\.dist|as\\.dist.default|as\\.formula|as\\.hclust|as\\.hclust.default|as\\.hclust.dendrogram|as\\.hclust.twins|as\\.matrix.dist|as\\.matrix.ftable|as\\.stepfun|as\\.stepfun.default|as\\.stepfun.isoreg|as\\.table.ftable|as\\.ts|as\\.ts.default|asOneSidedFormula|ave|bandwidth\\.kernel|bartlett\\.test|bartlett\\.test.default|bartlett\\.test.formula|BIC|BIC\\.default|BIC\\.logLik|binom\\.test|binomial|biplot|biplot\\.default|biplot\\.prcomp|biplot\\.princomp|Box\\.test|bw_pair_cnts|bw\\.bcv|bw\\.nrd|bw\\.nrd0|bw\\.SJ|bw\\.ucv|C|cancor|case\\.names|case\\.names.default|case\\.names.lm|cbind\\.ts|ccf|check_exact|chisq\\.test|cmdscale|coef|coef\\.aov|coef\\.Arima|coef\\.default|coef\\.listof|coef\\.maov|coef\\.nls|coefficients|complete\\.cases|confint|confint\\.default|confint\\.glm|confint\\.lm|confint\\.nls|constrOptim|contr\\.helmert|contr\\.poly|contr\\.SAS|contr\\.sum|contr\\.treatment|contrasts|convolve|cooks\\.distance|cooks\\.distance.glm|cooks\\.distance.lm|cophenetic|cophenetic\\.default|cophenetic\\.dendrogram|cor|cor\\.test|cor\\.test.default|cor\\.test.formula|cov|cov\\.wt|cov2cor|covratio|cpgram|cut\\.dendrogram|cutree|cycle|cycle\\.default|cycle\\.ts|D|dbeta|dbinom|dcauchy|dchisq|decompose|delete\\.response|deltat|deltat\\.default|dendrapply|density|density\\.default|deriv|deriv\\.default|deriv\\.formula|deriv3|deriv3\\.default|deriv3\\.formula|deviance|deviance\\.default|deviance\\.glm|deviance\\.lm|deviance\\.mlm|deviance\\.nls|dexp|df|df\\.kernel|df\\.residual|df\\.residual.default|df\\.residual.nls|dfbeta|dfbeta\\.lm|dfbetas|dfbetas\\.lm|dffits|dgamma|dgeom|dhyper|diff\\.ts|diffinv|diffinv\\.default|diffinv\\.ts|diffinv\\.vector|dist|dlnorm|dlogis|dmultinom|dnbinom|dnorm|dpois|drop\\.name|drop\\.terms|drop1|drop1\\.default|drop1\\.glm|drop1\\.lm|drop1\\.mlm|dsignrank|dt|dummy\\.coef|dummy\\.coef.aovlist|dummy\\.coef.lm|dunif|dweibull|dwilcox|ecdf|eff\\.aovlist|effects|effects\\.glm|effects\\.lm|embed|end|end\\.default|estVar|estVar\\.mlm|estVar\\.SSD|expand\\.model.frame|extractAIC|extractAIC\\.aov|extractAIC\\.coxph|extractAIC\\.glm|extractAIC\\.lm|extractAIC\\.negbin|extractAIC\\.survreg|factanal|factanal\\.fit.mle|factor\\.name|family|family\\.glm|family\\.lm|fft|filter|fisher\\.test|fitted|fitted\\.default|fitted\\.isoreg|fitted\\.kmeans|fitted\\.nls|fitted\\.smooth.spline|fitted\\.values|fivenum|fligner\\.test|fligner\\.test.default|fligner\\.test.formula|format_perc|format\\.dist|format\\.ftable|format\\.perc|formula|formula\\.character|formula\\.data.frame|formula\\.default|formula\\.formula|formula\\.glm|formula\\.lm|formula\\.nls|formula\\.terms|frequency|frequency\\.default|friedman\\.test|friedman\\.test.default|friedman\\.test.formula|ftable|ftable\\.default|ftable\\.formula|Gamma|gaussian|get_all_vars|getCall|getCall\\.default|getInitial|getInitial\\.default|getInitial\\.formula|getInitial\\.selfStart|glm|glm\\.control|glm\\.fit|hasTsp|hat|hatvalues|hatvalues\\.lm|hatvalues\\.smooth.spline|hclust|heatmap|HL|HoltWinters|hyman_filter|identify\\.hclust|influence|influence\\.glm|influence\\.lm|influence\\.measures|integrate|interaction\\.plot|inverse\\.gaussian|IQR|is\\.empty.model|is\\.leaf|is\\.mts|is\\.stepfun|is\\.ts|is\\.tskernel|isoreg|KalmanForecast|KalmanLike|KalmanRun|KalmanSmooth|kernapply|kernapply\\.default|kernapply\\.ts|kernapply\\.tskernel|kernapply\\.vector|kernel|kmeans|knots|knots\\.stepfun|kruskal\\.test|kruskal\\.test.default|kruskal\\.test.formula|ks\\.test|ksmooth|labels\\.dendrogram|labels\\.dist|labels\\.lm|labels\\.terms|lag|lag\\.default|lag\\.plot|line|lines\\.isoreg|lines\\.stepfun|lines\\.ts|lm|lm\\.fit|lm\\.influence|lm\\.wfit|loadings|loess|loess\\.control|loess\\.smooth|logLik|logLik\\.Arima|logLik\\.glm|logLik\\.lm|logLik\\.logLik|logLik\\.nls|loglin|lowess|ls\\.diag|ls\\.print|lsfit|mad|mahalanobis|make\\.link|make\\.tables.aovproj|make\\.tables.aovprojlist|makeARIMA|makepredictcall|makepredictcall\\.default|makepredictcall\\.poly|manova|mantelhaen\\.test|mauchly\\.test|mauchly\\.test.mlm|mauchly\\.test.SSD|mcnemar\\.test|median|median\\.default|medpolish|merge\\.dendrogram|midcache\\.dendrogram|model\\.extract|model\\.frame|model\\.frame.aovlist|model\\.frame.default|model\\.frame.glm|model\\.frame.lm|model\\.matrix|model\\.matrix.default|model\\.matrix.lm|model\\.offset|model\\.response|model\\.tables|model\\.tables.aov|model\\.tables.aovlist|model\\.weights|monthplot|monthplot\\.default|monthplot\\.stl|monthplot\\.StructTS|monthplot\\.ts|mood\\.test|mood\\.test.default|mood\\.test.formula|mvfft|n\\.knots|na\\.action|na\\.action.default|na\\.contiguous|na\\.contiguous.default|na\\.exclude|na\\.exclude.data.frame|na\\.exclude.default|na\\.fail|na\\.fail.default|na\\.omit|na\\.omit.data.frame|na\\.omit.default|na\\.omit.ts|na\\.pass|napredict|napredict\\.default|napredict\\.exclude|naprint|naprint\\.default|naprint\\.exclude|naprint\\.omit|naresid|naresid\\.default|naresid\\.exclude|nextn|nleaves|nlm|nlminb|nls|nls_port_fit|nls\\.control|nlsModel|nlsModel\\.plinear|NLSstAsymptotic|NLSstAsymptotic\\.sortedXyData|NLSstClosestX|NLSstClosestX\\.sortedXyData|NLSstLfAsymptote|NLSstLfAsymptote\\.sortedXyData|NLSstRtAsymptote|NLSstRtAsymptote\\.sortedXyData|nobs|nobs\\.default|nobs\\.dendrogram|nobs\\.glm|nobs\\.lm|nobs\\.logLik|nobs\\.nls|numericDeriv|offset|oneway\\.test|Ops\\.ts|optim|optimHess|optimise|optimize|order\\.dendrogram|p\\.adjust|pacf|pacf\\.default|pairwise\\.prop.test|pairwise\\.t.test|pairwise\\.table|pairwise\\.wilcox.test|pbeta|pbinom|pbirthday|pcauchy|pchisq|pexp|pf|pgamma|pgeom|phyper|Pillai|plclust|plnorm|plogis|plot\\.acf|plot\\.decomposed.ts|plot\\.dendrogram|plot\\.density|plot\\.ecdf|plot\\.hclust|plot\\.HoltWinters|plot\\.isoreg|plot\\.lm|plot\\.medpolish|plot\\.mlm|plot\\.ppr|plot\\.prcomp|plot\\.princomp|plot\\.profile.nls|plot\\.spec|plot\\.spec.coherency|plot\\.spec.phase|plot\\.stepfun|plot\\.stl|plot\\.ts|plot\\.tskernel|plot\\.TukeyHSD|plotNode|plotNodeLimit|pnbinom|pnorm|pointwise|poisson|poisson\\.test|poly|polym|port_get_named_v|port_msg|power|power\\.anova.test|power\\.prop.test|power\\.t.test|PP\\.test|ppoints|ppois|ppr|ppr\\.default|ppr\\.formula|prcomp|prcomp\\.default|prcomp\\.formula|predict|predict\\.ar|predict\\.Arima|predict\\.arima0|predict\\.glm|predict\\.HoltWinters|predict\\.lm|predict\\.loess|predict\\.mlm|predict\\.nls|predict\\.poly|predict\\.ppr|predict\\.prcomp|predict\\.princomp|predict\\.smooth.spline|predict\\.smooth.spline.fit|predict\\.StructTS|predLoess|preplot|princomp|princomp\\.default|princomp\\.formula|print\\.acf|print\\.anova|print\\.aov|print\\.aovlist|print\\.ar|print\\.Arima|print\\.arima0|print\\.dendrogram|print\\.density|print\\.dist|print\\.dummy_coef|print\\.dummy_coef_list|print\\.ecdf|print\\.factanal|print\\.family|print\\.formula|print\\.ftable|print\\.glm|print\\.hclust|print\\.HoltWinters|print\\.htest|print\\.infl|print\\.integrate|print\\.isoreg|print\\.kmeans|print\\.lm|print\\.loadings|print\\.loess|print\\.logLik|print\\.medpolish|print\\.mtable|print\\.nls|print\\.pairwise.htest|print\\.power.htest|print\\.ppr|print\\.prcomp|print\\.princomp|print\\.smooth.spline|print\\.stepfun|print\\.stl|print\\.StructTS|print\\.summary.aov|print\\.summary.aovlist|print\\.summary.ecdf|print\\.summary.glm|print\\.summary.lm|print\\.summary.loess|print\\.summary.manova|print\\.summary.nls|print\\.summary.ppr|print\\.summary.prcomp|print\\.summary.princomp|print\\.tables_aov|print\\.terms|print\\.ts|print\\.tskernel|print\\.TukeyHSD|print\\.tukeyline|print\\.tukeysmooth|print\\.xtabs|printCoefmat|profile|profile\\.nls|profiler|profiler\\.nls|proj|proj\\.aov|proj\\.aovlist|proj\\.default|proj\\.lm|proj\\.matrix|promax|prop\\.test|prop\\.trend.test|psignrank|pt|ptukey|punif|pweibull|pwilcox|qbeta|qbinom|qbirthday|qcauchy|qchisq|qexp|qf|qgamma|qgeom|qhyper|qlnorm|qlogis|qnbinom|qnorm|qpois|qqline|qqnorm|qqnorm\\.default|qqplot|qr\\.lm|qsignrank|qt|qtukey|quade\\.test|quade\\.test.default|quade\\.test.formula|quantile|quantile\\.default|quantile\\.ecdf|quantile\\.POSIXt|quasi|quasibinomial|quasipoisson|qunif|qweibull|qwilcox|r2dtable|Rank|rbeta|rbinom|rcauchy|rchisq|read\\.ftable|rect\\.hclust|reformulate|regularize\\.values|relevel|relevel\\.default|relevel\\.factor|relevel\\.ordered|reorder|reorder\\.default|reorder\\.dendrogram|replications|reshape|resid|residuals|residuals\\.default|residuals\\.glm|residuals\\.HoltWinters|residuals\\.isoreg|residuals\\.lm|residuals\\.nls|residuals\\.smooth.spline|residuals\\.tukeyline|rev\\.dendrogram|rexp|rf|rgamma|rgeom|rhyper|rlnorm|rlogis|rmultinom|rnbinom|rnorm|Roy|rpois|rsignrank|rstandard|rstandard\\.glm|rstandard\\.lm|rstudent|rstudent\\.glm|rstudent\\.lm|rt|runif|runmed|rweibull|rwilcox|rWishart|safe_pchisq|safe_pf|scatter\\.smooth|screeplot|screeplot\\.default|sd|se\\.aov|se\\.aovlist|se\\.contrast|se\\.contrast.aov|se\\.contrast.aovlist|selfStart|selfStart\\.default|selfStart\\.formula|setNames|shapiro\\.test|sigma|sigma\\.default|sigma\\.mlm|simpleLoess|simulate|simulate\\.lm|smooth|smooth\\.spline|smoothEnds|sortedXyData|sortedXyData\\.default|spec\\.ar|spec\\.pgram|spec\\.taper|spectrum|sphericity|spl_coef_conv|spline|splinefun|splinefunH|splinefunH0|SSasymp|SSasympOff|SSasympOrig|SSbiexp|SSD|SSD\\.mlm|SSfol|SSfpl|SSgompertz|SSlogis|SSmicmen|SSweibull|start|start\\.default|stat\\.anova|step|stepfun|stl|str\\.dendrogram|str\\.logLik|StructTS|summary\\.aov|summary\\.aovlist|summary\\.ecdf|summary\\.glm|summary\\.infl|summary\\.lm|summary\\.loess|summary\\.manova|summary\\.mlm|summary\\.nls|summary\\.ppr|summary\\.prcomp|summary\\.princomp|summary\\.stepfun|summary\\.stl|summary\\.tukeysmooth|supsmu|symnum|t\\.test|t\\.test.default|t\\.test.formula|t\\.ts|termplot|terms|terms\\.aovlist|terms\\.default|terms\\.formula|terms\\.terms|Thin\\.col|Thin\\.row|time|time\\.default|time\\.ts|toeplitz|Tr|ts|ts\\.intersect|ts\\.plot|ts\\.union|tsdiag|tsdiag\\.Arima|tsdiag\\.arima0|tsdiag\\.StructTS|tsp|tsSmooth|tsSmooth\\.StructTS|TukeyHSD|TukeyHSD\\.aov|uniroot|update|update\\.default|update\\.formula|var|var\\.test|var\\.test.default|var\\.test.formula|variable\\.names|variable\\.names.default|variable\\.names.lm|varimax|vcov|vcov\\.Arima|vcov\\.glm|vcov\\.lm|vcov\\.mlm|vcov\\.nls|vcov\\.summary.glm|vcov\\.summary.lm|weighted\\.mean|weighted\\.mean.Date|weighted\\.mean.default|weighted\\.mean.difftime|weighted\\.mean.POSIXct|weighted\\.mean.POSIXlt|weighted\\.residuals|weights|weights\\.default|weights\\.glm|weights\\.nls|wilcox\\.test|wilcox\\.test.default|wilcox\\.test.formula|Wilks|window|window\\.default|window\\.ts|write\\.ftable|xtabs)\\s*(\\()",
				captures: {
					"1": {
						name: "support.function.r"
					}
				}
			},
			{
				match: "\\b(adist|alarm|apropos|aregexec|argNames|argsAnywhere|as\\.bibentry|as\\.bibentry.bibentry|as\\.bibentry.citation|as\\.character.person|as\\.character.roman|as\\.person|as\\.person.default|as\\.personList|as\\.personList.default|as\\.personList.person|as\\.relistable|as\\.roman|aspell|aspell_find_dictionaries|aspell_find_program|aspell_inspect_context|aspell_package|aspell_package_C_files|aspell_package_description|aspell_package_pot_files|aspell_package_R_files|aspell_package_Rd_files|aspell_package_vignettes|aspell_R_C_files|aspell_R_manuals|aspell_R_R_files|aspell_R_Rd_files|aspell_R_vignettes|aspell_write_personal_dictionary_file|assignInMyNamespace|assignInNamespace|attachedPackageCompletions|available\\.packages|bibentry|blank_out_ignores_in_lines|blank_out_regexp_matches|browseEnv|browseURL|browseVignettes|bug\\.report|bug\\.report.info|c\\.bibentry|c\\.person|capture\\.output|changedFiles|check_for_XQuartz|checkCRAN|chooseBioCmirror|chooseCRANmirror|citation|cite|citeNatbib|citEntry|citFooter|citHeader|close\\.socket|close\\.txtProgressBar|combn|compareVersion|contrib\\.url|correctFilenameToken|count\\.fields|CRAN\\.packages|create\\.post|data|data\\.entry|dataentry|de|de\\.ncols|de\\.restore|de\\.setup|debugcall|debugger|defaultUserAgent|demo|download\\.file|download\\.packages|dump\\.frames|edit|edit\\.data.frame|edit\\.default|edit\\.matrix|edit\\.vignette|emacs|example|expr2token|file_test|file\\.edit|fileCompletionPreferred|fileCompletions|fileSnapshot|filter_packages_by_depends_predicates|find|find_files_in_directories|findExactMatches|findFuzzyMatches|findGeneric|findLineNum|findMatches|fix|fixInNamespace|flush\\.console|fnLineNum|format\\.aspell|format\\.bibentry|format\\.citation|format\\.news_db|format\\.object_size|format\\.person|format\\.roman|formatOL|formatUL|functionArgs|fuzzyApropos|get_parse_data_for_message_strings|getAnywhere|getCRANmirrors|getDependencies|getFromNamespace|getIsFirstArg|getKnownS3generics|getParseData|getParseText|getRcode|getRcode\\.vignette|getS3method|getSrcDirectory|getSrcfile|getSrcFilename|getSrcLocation|getSrcref|getTxtProgressBar|glob2rx|globalVariables|hasName|head|head\\.data.frame|head\\.default|head\\.ftable|head\\.function|head\\.matrix|head\\.table|help|help\\.request|help\\.search|help\\.start|helpCompletions|history|hsearch_db|hsearch_db_concepts|hsearch_db_keywords|index\\.search|inFunction|install\\.packages|installed\\.packages|is\\.relistable|isBasePkg|isInsideQuotes|isS3method|isS3stdGeneric|keywordCompletions|limitedLabels|loadedPackageCompletions|loadhistory|localeToCharset|ls\\.str|lsf\\.str|maintainer|make_sysdata_rda|make\\.packages.html|make\\.socket|makeRegexpSafe|makeRweaveLatexCodeRunner|makeUserAgent|matchAvailableTopics|memory\\.limit|memory\\.size|menu|merge_demo_index|merge_vignette_index|methods|mirror2html|modifyList|new\\.packages|news|normalCompletions|nsl|object\\.size|offline_help_helper|old\\.packages|Ops\\.roman|package\\.skeleton|packageDescription|packageName|packageStatus|packageVersion|page|person|personList|pico|print\\.aspell|print\\.aspell_inspect_context|print\\.bibentry|print\\.Bibtex|print\\.browseVignettes|print\\.changedFiles|print\\.citation|print\\.fileSnapshot|print\\.findLineNumResult|print\\.getAnywhere|print\\.help_files_with_topic|print\\.hsearch|print\\.hsearch_db|print\\.Latex|print\\.ls_str|print\\.MethodsFunction|print\\.news_db|print\\.object_size|print\\.packageDescription|print\\.packageIQR|print\\.packageStatus|print\\.person|print\\.roman|print\\.sessionInfo|print\\.socket|print\\.summary.packageStatus|print\\.vignette|printhsearchInternal|process\\.events|prompt|prompt\\.data.frame|prompt\\.default|promptData|promptImport|promptPackage|rc\\.getOption|rc\\.options|rc\\.settings|rc\\.status|read\\.csv|read\\.csv2|read\\.delim|read\\.delim2|read\\.DIF|read\\.fortran|read\\.fwf|read\\.socket|read\\.table|readCitationFile|recover|registerNames|regquote|relist|relist\\.default|relist\\.factor|relist\\.list|relist\\.matrix|remove\\.packages|removeSource|rep\\.bibentry|rep\\.roman|resolvePkgType|Rprof|Rprof_memory_summary|Rprofmem|RShowDoc|RSiteSearch|rtags|rtags\\.file|Rtangle|RtangleFinish|RtangleRuncode|RtangleSetup|RtangleWritedoc|RweaveChunkPrefix|RweaveEvalWithOpt|RweaveLatex|RweaveLatexFinish|RweaveLatexOptions|RweaveLatexRuncode|RweaveLatexSetup|RweaveLatexWritedoc|RweaveTryStop|savehistory|select\\.list|sessionInfo|setBreakpoint|setIsFirstArg|setRepositories|setTxtProgressBar|shorten\\.to.string|simplifyRepos|sort\\.bibentry|specialCompletions|specialFunctionArgs|specialOpCompletionsHelper|specialOpLocs|stack|stack\\.data.frame|stack\\.default|Stangle|str|str\\.data.frame|str\\.Date|str\\.default|str\\.POSIXt|strcapture|strextract|strOptions|substr_with_tabs|summary\\.aspell|summary\\.packageStatus|summaryRprof|suppressForeignCheck|Sweave|SweaveGetSyntax|SweaveHooks|SweaveParseOptions|SweaveReadFile|SweaveSyntConv|tail|tail\\.data.frame|tail\\.default|tail\\.ftable|tail\\.function|tail\\.matrix|tail\\.table|tar|timestamp|toBibtex|toBibtex\\.bibentry|toBibtex\\.person|toLatex|toLatex\\.sessionInfo|topicName|txtProgressBar|type\\.convert|undebugcall|unique\\.bibentry|unlist\\.relistable|unstack|unstack\\.data.frame|unstack\\.default|untar|untar2|unzip|update\\.packages|update\\.packageStatus|upgrade|upgrade\\.packageStatus|url\\.show|URLdecode|URLencode|vi|View|vignette|write\\.csv|write\\.csv2|write\\.etags|write\\.socket|write\\.table|wsbrowser|xedit|xemacs|zip)\\s*(\\()",
				captures: {
					"1": {
						name: "support.function.r"
					}
				}
			}
		]
	}
};
const r_tmLanguage = {
	information_for_contributors: information_for_contributors,
	version: version,
	name: name,
	scopeName: scopeName,
	patterns: patterns,
	repository: repository
};

export { r_tmLanguage as default, information_for_contributors, name, patterns, repository, scopeName, version };
