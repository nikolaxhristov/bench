const information_for_contributors = [
	"This file has been converted from https://github.com/textmate/swift.tmbundle/blob/master/Syntaxes/Swift.tmLanguage",
	"If you want to provide a fix or improvement, please create a pull request against the original repository.",
	"Once accepted there, we are happy to receive an update request.",
];
const version =
	"https://github.com/textmate/swift.tmbundle/commit/7a35637eb70aef3114b091c4ff6fbf6a2faa881b";
const name = "swift";
const scopeName = "source.swift";
const comment = "See swift.tmbundle/grammar-test.swift for test cases.";
const patterns = [
	{
		include: "#root",
	},
];
const repository = {
	"async-throws": {
		captures: {
			"1": {
				name: "invalid.illegal.await-must-precede-throws.swift",
			},
			"2": {
				name: "keyword.control.exception.swift",
			},
			"3": {
				name: "keyword.control.async.swift",
			},
		},
		match: "\\b(?:(throws\\s+async|rethrows\\s+async)|(throws|rethrows)|(async))\\b",
	},
	attributes: {
		patterns: [
			{
				begin: "((@)available)(\\()",
				beginCaptures: {
					"1": {
						name: "storage.modifier.attribute.swift",
					},
					"2": {
						name: "punctuation.definition.attribute.swift",
					},
					"3": {
						name: "punctuation.definition.arguments.begin.swift",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.arguments.end.swift",
					},
				},
				name: "meta.attribute.available.swift",
				patterns: [
					{
						captures: {
							"1": {
								name: "keyword.other.platform.os.swift",
							},
							"2": {
								name: "constant.numeric.swift",
							},
						},
						match: "\\b(swift|(?:iOS|macOS|OSX|watchOS|tvOS|UIKitForMac)(?:ApplicationExtension)?)\\b(?:\\s+([0-9]+(?:\\.[0-9]+)*\\b))?",
					},
					{
						begin: "\\b(introduced|deprecated|obsoleted)\\s*(:)\\s*",
						beginCaptures: {
							"1": {
								name: "keyword.other.swift",
							},
							"2": {
								name: "punctuation.separator.key-value.swift",
							},
						},
						end: "(?!\\G)",
						patterns: [
							{
								match: "\\b[0-9]+(?:\\.[0-9]+)*\\b",
								name: "constant.numeric.swift",
							},
						],
					},
					{
						begin: '\\b(message|renamed)\\s*(:)\\s*(?=")',
						beginCaptures: {
							"1": {
								name: "keyword.other.swift",
							},
							"2": {
								name: "punctuation.separator.key-value.swift",
							},
						},
						end: "(?!\\G)",
						patterns: [
							{
								include: "#literals",
							},
						],
					},
					{
						captures: {
							"1": {
								name: "keyword.other.platform.all.swift",
							},
							"2": {
								name: "keyword.other.swift",
							},
							"3": {
								name: "invalid.illegal.character-not-allowed-here.swift",
							},
						},
						match: "(?:(\\*)|\\b(deprecated|unavailable|noasync)\\b)\\s*(.*?)(?=[,)])",
					},
				],
			},
			{
				begin: "((@)objc)(\\()",
				beginCaptures: {
					"1": {
						name: "storage.modifier.attribute.swift",
					},
					"2": {
						name: "punctuation.definition.attribute.swift",
					},
					"3": {
						name: "punctuation.definition.arguments.begin.swift",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.arguments.end.swift",
					},
				},
				name: "meta.attribute.objc.swift",
				patterns: [
					{
						captures: {
							"1": {
								name: "invalid.illegal.missing-colon-after-selector-piece.swift",
							},
						},
						match: "\\w*(?::(?:\\w*:)*(\\w*))?",
						name: "entity.name.function.swift",
					},
				],
			},
			{
				begin: "(@)(?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>)",
				beginCaptures: {
					"0": {
						name: "storage.modifier.attribute.swift",
					},
					"1": {
						name: "punctuation.definition.attribute.swift",
					},
					"2": {
						name: "punctuation.definition.identifier.swift",
					},
					"3": {
						name: "punctuation.definition.identifier.swift",
					},
				},
				comment: "any other attribute",
				end: "(?!\\G\\()",
				name: "meta.attribute.swift",
				patterns: [
					{
						begin: "\\(",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.arguments.begin.swift",
							},
						},
						end: "\\)",
						endCaptures: {
							"0": {
								name: "punctuation.definition.arguments.end.swift",
							},
						},
						name: "meta.arguments.attribute.swift",
						patterns: [
							{
								include: "#expressions",
							},
						],
					},
				],
			},
		],
	},
	"builtin-functions": {
		patterns: [
			{
				comment:
					"Member functions in the standard library in Swift 3 which may be used with trailing closures and no parentheses",
				match: "(?<=\\.)(?:s(?:ort(?:ed)?|plit)|contains|index|partition|f(?:i(?:lter|rst)|orEach|latMap)|with(?:MutableCharacters|CString|U(?:nsafe(?:Mutable(?:BufferPointer|Pointer(?:s|To(?:Header|Elements)))|BufferPointer)|TF8Buffer))|m(?:in|a(?:p|x)))(?=\\s*[({])\\b",
				name: "support.function.swift",
			},
			{
				comment: "Member functions in the standard library in Swift 3",
				match: "(?<=\\.)(?:s(?:ymmetricDifference|t(?:oreBytes|arts|ride)|ortInPlace|u(?:ccessor|ffix|btract(?:ing|InPlace|WithOverflow)?)|quareRoot|amePosition)|h(?:oldsUnique(?:Reference|OrPinnedReference)|as(?:Suffix|Prefix))|ne(?:gate(?:d)?|xt)|c(?:o(?:untByEnumerating|py(?:Bytes)?)|lamp(?:ed)?|reate)|t(?:o(?:IntMax|Opaque|UIntMax)|ake(?:RetainedValue|UnretainedValue)|r(?:uncatingRemainder|a(?:nscodedLength|ilSurrogate)))|i(?:s(?:MutableAndUniquelyReferenced(?:OrPinned)?|S(?:trictSu(?:perset(?:Of)?|bset(?:Of)?)|u(?:perset(?:Of)?|bset(?:Of)?))|Continuation|T(?:otallyOrdered|railSurrogate)|Disjoint(?:With)?|Unique(?:Reference|lyReferenced(?:OrPinned)?)|Equal|Le(?:ss(?:ThanOrEqualTo)?|adSurrogate))|n(?:sert(?:ContentsOf)?|tersect(?:ion|InPlace)?|itialize(?:Memory|From)?|dex(?:Of|ForKey)))|o(?:verlaps|bjectAt)|d(?:i(?:stance(?:To)?|vide(?:d|WithOverflow)?)|e(?:s(?:cendant|troy)|code(?:CString)?|initialize|alloc(?:ate(?:Capacity)?)?)|rop(?:First|Last))|u(?:n(?:ion(?:InPlace)?|derestimateCount|wrappedOrError)|p(?:date(?:Value)?|percased))|join(?:ed|WithSeparator)|p(?:op(?:First|Last)|ass(?:Retained|Unretained)|re(?:decessor|fix))|e(?:scape(?:d)?|n(?:code|umerate(?:d)?)|lementsEqual|xclusiveOr(?:InPlace)?)|f(?:orm(?:Remainder|S(?:ymmetricDifference|quareRoot)|TruncatingRemainder|In(?:tersection|dex)|Union)|latten|rom(?:CString(?:RepairingIllFormedUTF8)?|Opaque))|w(?:i(?:thMemoryRebound|dth)|rite(?:To)?)|l(?:o(?:wercased|ad)|e(?:adSurrogate|xicographical(?:Compare|lyPrecedes)))|a(?:ss(?:ign(?:BackwardFrom|From)?|umingMemoryBound)|d(?:d(?:ing(?:Product)?|Product|WithOverflow)?|vanced(?:By)?)|utorelease|ppend(?:ContentsOf)?|lloc(?:ate)?|bs)|r(?:ound(?:ed)?|e(?:serveCapacity|tain|duce|place(?:Range|Subrange)?|verse(?:d)?|quest(?:NativeBuffer|UniqueMutableBackingBuffer)|lease|m(?:ove(?:Range|Subrange|Value(?:ForKey)?|First|Last|A(?:tIndex|ll))?|ainder(?:WithOverflow)?)))|ge(?:nerate|t(?:Objects|Element))|m(?:in(?:imum(?:Magnitude)?|Element)|ove(?:Initialize(?:Memory|BackwardFrom|From)?|Assign(?:From)?)?|ultipl(?:y(?:WithOverflow)?|ied)|easure|a(?:ke(?:Iterator|Description)|x(?:imum(?:Magnitude)?|Element)))|bindMemory)(?=\\s*\\()",
				name: "support.function.swift",
			},
			{
				comment:
					"Member functions in the standard library in Swift 2 only",
				match: "(?<=\\.)(?:s(?:uperclassMirror|amePositionIn|tartsWith)|nextObject|c(?:haracterAtIndex|o(?:untByEnumeratingWithState|pyWithZone)|ustom(?:Mirror|PlaygroundQuickLook))|is(?:EmptyInput|ASCII)|object(?:Enumerator|ForKey|AtIndex)|join|put|keyEnumerator|withUnsafeMutablePointerToValue|length|getMirror|m(?:oveInitializeAssignFrom|ember))(?=\\s*\\()",
				name: "support.function.swift",
			},
		],
	},
	"builtin-global-functions": {
		patterns: [
			{
				begin: "\\b(type)(\\()\\s*(of)(:)",
				beginCaptures: {
					"1": {
						name: "support.function.dynamic-type.swift",
					},
					"2": {
						name: "punctuation.definition.arguments.begin.swift",
					},
					"3": {
						name: "support.variable.parameter.swift",
					},
					"4": {
						name: "punctuation.separator.argument-label.begin.swift",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.arguments.end.swift",
					},
				},
				patterns: [
					{
						include: "#expressions",
					},
				],
			},
			{
				comment:
					"Global functions available in Swift 3 which may be used with trailing closures and no parentheses",
				match: "\\b(?:anyGenerator|autoreleasepool)(?=\\s*[({])\\b",
				name: "support.function.swift",
			},
			{
				comment: "Global functions available in Swift 3",
				match: "\\b(?:s(?:tride(?:of(?:Value)?)?|izeof(?:Value)?|equence|wap)|numericCast|transcode|is(?:UniquelyReferenced(?:NonObjC)?|KnownUniquelyReferenced)|zip|d(?:ump|ebugPrint)|unsafe(?:BitCast|Downcast|Unwrap|Address(?:Of)?)|pr(?:int|econdition(?:Failure)?)|fatalError|with(?:Unsafe(?:MutablePointer|Pointer)|ExtendedLifetime|VaList)|a(?:ssert(?:ionFailure)?|lignof(?:Value)?|bs)|re(?:peatElement|adLine)|getVaList|m(?:in|ax))(?=\\s*\\()",
				name: "support.function.swift",
			},
			{
				comment: "Global functions available in Swift 2 only",
				match: "\\b(?:s(?:ort|uffix|pli(?:ce|t))|insert|overlaps|d(?:istance|rop(?:First|Last))|join|prefix|extend|withUnsafe(?:MutablePointers|Pointers)|lazy|advance|re(?:flect|move(?:Range|Last|A(?:tIndex|ll))))(?=\\s*\\()",
				name: "support.function.swift",
			},
		],
	},
	"builtin-properties": {
		patterns: [
			{
				comment:
					"The simpler (?<=\\bProcess\\.|\\bCommandLine\\.) breaks VS Code / Atom, see https://github.com/textmate/swift.tmbundle/issues/29",
				match: "(?<=^Process\\.|\\WProcess\\.|^CommandLine\\.|\\WCommandLine\\.)(arguments|argc|unsafeArgv)",
				name: "support.variable.swift",
			},
			{
				comment: "Properties in the standard library in Swift 3",
				match: "(?<=\\.)(?:s(?:t(?:artIndex|ri(?:ngValue|de))|i(?:ze|gn(?:BitIndex|ificand(?:Bit(?:Count|Pattern)|Width)?|alingNaN)?)|u(?:perclassMirror|mmary|bscriptBaseAddress))|h(?:eader|as(?:hValue|PointerRepresentation))|n(?:ulTerminatedUTF8|ext(?:Down|Up)|a(?:n|tiveOwner))|c(?:haracters|ount(?:TrailingZeros)?|ustom(?:Mirror|PlaygroundQuickLook)|apacity)|i(?:s(?:S(?:ign(?:Minus|aling(?:NaN)?)|ubnormal)|N(?:ormal|aN)|Canonical|Infinite|Zero|Empty|Finite|ASCII)|n(?:dices|finity)|dentity)|owner|de(?:scription|bugDescription)|u(?:n(?:safelyUnwrapped|icodeScalar(?:s)?|derestimatedCount)|tf(?:16|8(?:Start|C(?:String|odeUnitCount))?)|intValue|ppercaseString|lp(?:OfOne)?)|p(?:i|ointee)|e(?:ndIndex|lements|xponent(?:Bit(?:Count|Pattern))?)|value(?:s)?|keys|quietNaN|f(?:irst(?:ElementAddress(?:IfContiguous)?)?|loatingPointClass)|l(?:ittleEndian|owercaseString|eastNo(?:nzeroMagnitude|rmalMagnitude)|a(?:st|zy))|a(?:l(?:ignment|l(?:ocatedElementCount|Zeros))|rray(?:PropertyIsNativeTypeChecked)?)|ra(?:dix|wValue)|greatestFiniteMagnitude|m(?:in|emory|ax)|b(?:yteS(?:ize|wapped)|i(?:nade|tPattern|gEndian)|uffer|ase(?:Address)?))\\b",
				name: "support.variable.swift",
			},
			{
				comment: "Properties in the standard library in Swift 2 only",
				match: "(?<=\\.)(?:boolValue|disposition|end|objectIdentifier|quickLookObject|start|valueType)\\b",
				name: "support.variable.swift",
			},
			{
				comment:
					"Enum cases in the standard library - note that there is some overlap between these and the properties",
				match: "(?<=\\.)(?:s(?:calarValue|i(?:ze|gnalingNaN)|o(?:und|me)|uppressed|prite|et)|n(?:one|egative(?:Subnormal|Normal|Infinity|Zero))|c(?:ol(?:or|lection)|ustomized)|t(?:o(?:NearestOr(?:Even|AwayFromZero)|wardZero)|uple|ext)|i(?:nt|mage)|optional|d(?:ictionary|o(?:uble|wn))|u(?:Int|p|rl)|p(?:o(?:sitive(?:Subnormal|Normal|Infinity|Zero)|int)|lus)|e(?:rror|mptyInput)|view|quietNaN|float|a(?:ttributedString|wayFromZero)|r(?:ectangle|ange)|generated|minus|b(?:ool|ezierPath))\\b",
				name: "support.variable.swift",
			},
		],
	},
	"builtin-types": {
		comment: "Types provided in the standard library",
		patterns: [
			{
				include: "#builtin-class-type",
			},
			{
				include: "#builtin-enum-type",
			},
			{
				include: "#builtin-protocol-type",
			},
			{
				include: "#builtin-struct-type",
			},
			{
				include: "#builtin-typealias",
			},
			{
				match: "\\bAny\\b",
				name: "support.type.any.swift",
			},
		],
		repository: {
			"builtin-class-type": {
				comment: "Builtin class types",
				match: "\\b(Managed(Buffer|ProtoBuffer)|NonObjectiveCBase|AnyGenerator)\\b",
				name: "support.class.swift",
			},
			"builtin-enum-type": {
				patterns: [
					{
						comment:
							"CommandLine is an enum, but it acts like a constant",
						match: "\\b(?:CommandLine|Process(?=\\.))\\b",
						name: "support.constant.swift",
					},
					{
						comment:
							"The return type of a function that never returns",
						match: "\\bNever\\b",
						name: "support.constant.never.swift",
					},
					{
						comment:
							"Enum types in the standard library in Swift 3",
						match: "\\b(?:ImplicitlyUnwrappedOptional|Representation|MemoryLayout|FloatingPointClassification|SetIndexRepresentation|SetIteratorRepresentation|FloatingPointRoundingRule|UnicodeDecodingResult|Optional|DictionaryIndexRepresentation|AncestorRepresentation|DisplayStyle|PlaygroundQuickLook|Never|FloatingPointSign|Bit|DictionaryIteratorRepresentation)\\b",
						name: "support.type.swift",
					},
					{
						comment:
							"Enum types in the standard library in Swift 2 only",
						match: "\\b(?:MirrorDisposition|QuickLookObject)\\b",
						name: "support.type.swift",
					},
				],
			},
			"builtin-protocol-type": {
				patterns: [
					{
						comment: "Protocols in the standard library in Swift 3",
						match: "\\b(?:Ra(?:n(?:domAccess(?:Collection|Indexable)|geReplaceable(?:Collection|Indexable))|wRepresentable)|M(?:irrorPath|utable(?:Collection|Indexable))|Bi(?:naryFloatingPoint|twiseOperations|directional(?:Collection|Indexable))|S(?:tr(?:ideable|eamable)|igned(?:Number|Integer)|e(?:tAlgebra|quence))|Hashable|C(?:o(?:llection|mparable)|ustom(?:Reflectable|StringConvertible|DebugStringConvertible|PlaygroundQuickLookable|LeafReflectable)|VarArg)|TextOutputStream|I(?:n(?:teger(?:Arithmetic)?|dexable(?:Base)?)|teratorProtocol)|OptionSet|Un(?:signedInteger|icodeCodec)|E(?:quatable|rror|xpressibleBy(?:BooleanLiteral|String(?:Interpolation|Literal)|NilLiteral|IntegerLiteral|DictionaryLiteral|UnicodeScalarLiteral|ExtendedGraphemeClusterLiteral|FloatLiteral|ArrayLiteral))|FloatingPoint|L(?:osslessStringConvertible|azy(?:SequenceProtocol|CollectionProtocol))|A(?:nyObject|bsoluteValuable))\\b",
						name: "support.type.swift",
					},
					{
						comment:
							"Protocols in the standard library in Swift 2 only",
						match: "\\b(?:Ran(?:domAccessIndexType|geReplaceableCollectionType)|GeneratorType|M(?:irror(?:Type|PathType)|utable(?:Sliceable|CollectionType))|B(?:i(?:twiseOperationsType|directionalIndexType)|oolean(?:Type|LiteralConvertible))|S(?:tring(?:InterpolationConvertible|LiteralConvertible)|i(?:nkType|gned(?:NumberType|IntegerType))|e(?:tAlgebraType|quenceType)|liceable)|NilLiteralConvertible|C(?:ollectionType|VarArgType)|Inte(?:rvalType|ger(?:Type|LiteralConvertible|ArithmeticType))|O(?:utputStreamType|ptionSetType)|DictionaryLiteralConvertible|Un(?:signedIntegerType|icode(?:ScalarLiteralConvertible|CodecType))|E(?:rrorType|xten(?:sibleCollectionType|dedGraphemeClusterLiteralConvertible))|F(?:orwardIndexType|loat(?:ingPointType|LiteralConvertible))|A(?:nyCollectionType|rrayLiteralConvertible))\\b",
						name: "support.type.swift",
					},
				],
			},
			"builtin-struct-type": {
				patterns: [
					{
						comment: "Structs in the standard library in Swift 3",
						match: "\\b(?:R(?:e(?:peat(?:ed)?|versed(?:RandomAccess(?:Collection|Index)|Collection|Index))|an(?:domAccessSlice|ge(?:Replaceable(?:RandomAccessSlice|BidirectionalSlice|Slice)|Generator)?))|Generator(?:Sequence|OfOne)|M(?:irror|utable(?:Ran(?:domAccessSlice|geReplaceable(?:RandomAccessSlice|BidirectionalSlice|Slice))|BidirectionalSlice|Slice)|anagedBufferPointer)|B(?:idirectionalSlice|ool)|S(?:t(?:aticString|ri(?:ng|deT(?:hrough(?:Generator|Iterator)?|o(?:Generator|Iterator)?)))|et(?:I(?:ndex|terator))?|lice)|HalfOpenInterval|C(?:haracter(?:View)?|o(?:ntiguousArray|untable(?:Range|ClosedRange)|llectionOfOne)|OpaquePointer|losed(?:Range(?:I(?:ndex|terator))?|Interval)|VaListPointer)|I(?:n(?:t(?:16|8|32|64)?|d(?:ices|ex(?:ing(?:Generator|Iterator))?))|terator(?:Sequence|OverOne)?)|Zip2(?:Sequence|Iterator)|O(?:paquePointer|bjectIdentifier)|D(?:ictionary(?:I(?:ndex|terator)|Literal)?|ouble|efault(?:RandomAccessIndices|BidirectionalIndices|Indices))|U(?:n(?:safe(?:RawPointer|Mutable(?:RawPointer|BufferPointer|Pointer)|BufferPointer(?:Generator|Iterator)?|Pointer)|icodeScalar(?:View)?|foldSequence|managed)|TF(?:16(?:View)?|8(?:View)?|32)|Int(?:16|8|32|64)?)|Join(?:Generator|ed(?:Sequence|Iterator))|PermutationGenerator|E(?:numerate(?:Generator|Sequence|d(?:Sequence|Iterator))|mpty(?:Generator|Collection|Iterator))|Fl(?:oat(?:80)?|atten(?:Generator|BidirectionalCollection(?:Index)?|Sequence|Collection(?:Index)?|Iterator))|L(?:egacyChildren|azy(?:RandomAccessCollection|Map(?:RandomAccessCollection|Generator|BidirectionalCollection|Sequence|Collection|Iterator)|BidirectionalCollection|Sequence|Collection|Filter(?:Generator|BidirectionalCollection|Sequence|Collection|I(?:ndex|terator))))|A(?:ny(?:RandomAccessCollection|Generator|BidirectionalCollection|Sequence|Hashable|Collection|I(?:ndex|terator))|utoreleasingUnsafeMutablePointer|rray(?:Slice)?))\\b",
						name: "support.type.swift",
					},
					{
						comment:
							"Structs in the standard library in Swift 2 only",
						match: "\\b(?:R(?:everse(?:RandomAccess(?:Collection|Index)|Collection|Index)|awByte)|Map(?:Generator|Sequence|Collection)|S(?:inkOf|etGenerator)|Zip2Generator|DictionaryGenerator|Filter(?:Generator|Sequence|Collection(?:Index)?)|LazyForwardCollection|Any(?:RandomAccessIndex|BidirectionalIndex|Forward(?:Collection|Index)))\\b",
						name: "support.type.swift",
					},
				],
			},
			"builtin-typealias": {
				patterns: [
					{
						comment:
							"Typealiases in the standard library in Swift 3",
						match: "\\b(?:Raw(?:Significand|Exponent|Value)|B(?:ooleanLiteralType|uffer|ase)|S(?:t(?:orage|r(?:i(?:ngLiteralType|de)|eam(?:1|2)))|ubSequence)|NativeBuffer|C(?:hild(?:ren)?|Bool|S(?:hort|ignedChar)|odeUnit|Char(?:16|32)?|Int|Double|Unsigned(?:Short|Char|Int|Long(?:Long)?)|Float|WideChar|Long(?:Long)?)|I(?:n(?:t(?:Max|egerLiteralType)|d(?:ices|ex(?:Distance)?))|terator)|Distance|U(?:n(?:icodeScalar(?:Type|Index|View|LiteralType)|foldFirstSequence)|TF(?:16(?:Index|View)|8Index)|IntMax)|E(?:lement(?:s)?|x(?:tendedGraphemeCluster(?:Type|LiteralType)|ponent))|V(?:oid|alue)|Key|Float(?:32|LiteralType|64)|AnyClass)\\b",
						name: "support.type.swift",
					},
					{
						comment:
							"Typealiases in the standard library in Swift 2 only",
						match: "\\b(?:Generator|PlaygroundQuickLook|UWord|Word)\\b",
						name: "support.type.swift",
					},
				],
			},
		},
	},
	"code-block": {
		begin: "\\{",
		beginCaptures: {
			"0": {
				name: "punctuation.section.scope.begin.swift",
			},
		},
		end: "\\}",
		endCaptures: {
			"0": {
				name: "punctuation.section.scope.end.swift",
			},
		},
		patterns: [
			{
				include: "$self",
			},
		],
	},
	comments: {
		patterns: [
			{
				captures: {
					"1": {
						name: "punctuation.definition.comment.swift",
					},
				},
				match: "\\A^(#!).*$\\n?",
				name: "comment.line.number-sign.swift",
			},
			{
				begin: "/\\*\\*(?!/)",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.comment.begin.swift",
					},
				},
				end: "\\*/",
				endCaptures: {
					"0": {
						name: "punctuation.definition.comment.end.swift",
					},
				},
				name: "comment.block.documentation.swift",
				patterns: [
					{
						include: "#nested",
					},
				],
			},
			{
				begin: "/\\*:",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.comment.begin.swift",
					},
				},
				end: "\\*/",
				endCaptures: {
					"0": {
						name: "punctuation.definition.comment.end.swift",
					},
				},
				name: "comment.block.documentation.playground.swift",
				patterns: [
					{
						include: "#nested",
					},
				],
			},
			{
				begin: "/\\*",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.comment.begin.swift",
					},
				},
				end: "\\*/",
				endCaptures: {
					"0": {
						name: "punctuation.definition.comment.end.swift",
					},
				},
				name: "comment.block.swift",
				patterns: [
					{
						include: "#nested",
					},
				],
			},
			{
				match: "\\*/",
				name: "invalid.illegal.unexpected-end-of-block-comment.swift",
			},
			{
				begin: "(^[ \\t]+)?(?=//)",
				beginCaptures: {
					"1": {
						name: "punctuation.whitespace.comment.leading.swift",
					},
				},
				end: "(?!\\G)",
				patterns: [
					{
						begin: "///",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.comment.swift",
							},
						},
						end: "^",
						name: "comment.line.triple-slash.documentation.swift",
					},
					{
						begin: "//:",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.comment.swift",
							},
						},
						end: "^",
						name: "comment.line.double-slash.documentation.swift",
					},
					{
						begin: "//",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.comment.swift",
							},
						},
						end: "^",
						name: "comment.line.double-slash.swift",
					},
				],
			},
		],
		repository: {
			nested: {
				begin: "/\\*",
				end: "\\*/",
				patterns: [
					{
						include: "#nested",
					},
				],
			},
		},
	},
	"compiler-control": {
		patterns: [
			{
				begin: "^\\s*(#)(if|elseif)\\s+(false)\\b.*?(?=$|//|/\\*)",
				beginCaptures: {
					"0": {
						name: "meta.preprocessor.conditional.swift",
					},
					"1": {
						name: "punctuation.definition.preprocessor.swift",
					},
					"2": {
						name: "keyword.control.preprocessor.conditional.swift",
					},
					"3": {
						name: "constant.language.boolean.swift",
					},
				},
				contentName: "comment.block.preprocessor.swift",
				end: "(?=^\\s*(#(elseif|else|endif)\\b))",
			},
			{
				begin: "^\\s*(#)(if|elseif)\\s+",
				captures: {
					"1": {
						name: "punctuation.definition.preprocessor.swift",
					},
					"2": {
						name: "keyword.control.preprocessor.conditional.swift",
					},
				},
				end: "(?=\\s*(?://|/\\*))|$",
				name: "meta.preprocessor.conditional.swift",
				patterns: [
					{
						match: "(&&|\\|\\|)",
						name: "keyword.operator.logical.swift",
					},
					{
						match: "\\b(true|false)\\b",
						name: "constant.language.boolean.swift",
					},
					{
						captures: {
							"1": {
								name: "keyword.other.condition.swift",
							},
							"2": {
								name: "punctuation.definition.parameters.begin.swift",
							},
							"3": {
								name: "support.constant.platform.architecture.swift",
							},
							"4": {
								name: "punctuation.definition.parameters.end.swift",
							},
						},
						match: "\\b(arch)\\s*(\\()\\s*(?:(arm|arm64|powerpc64|powerpc64le|i386|x86_64|s390x)|\\w+)\\s*(\\))",
					},
					{
						captures: {
							"1": {
								name: "keyword.other.condition.swift",
							},
							"2": {
								name: "punctuation.definition.parameters.begin.swift",
							},
							"3": {
								name: "support.constant.platform.os.swift",
							},
							"4": {
								name: "punctuation.definition.parameters.end.swift",
							},
						},
						match: "\\b(os)\\s*(\\()\\s*(?:(macOS|OSX|iOS|tvOS|watchOS|Android|Linux|FreeBSD|Windows|PS4)|\\w+)\\s*(\\))",
					},
					{
						captures: {
							"1": {
								name: "keyword.other.condition.swift",
							},
							"2": {
								name: "punctuation.definition.parameters.begin.swift",
							},
							"3": {
								name: "entity.name.type.module.swift",
							},
							"4": {
								name: "punctuation.definition.parameters.end.swift",
							},
						},
						match: "\\b(canImport)\\s*(\\()([\\p{L}_][\\p{L}_\\p{N}\\p{M}]*)(\\))",
					},
					{
						begin: "\\b(targetEnvironment)\\s*(\\()",
						beginCaptures: {
							"1": {
								name: "keyword.other.condition.swift",
							},
							"2": {
								name: "punctuation.definition.parameters.begin.swift",
							},
						},
						end: "(\\))|$",
						endCaptures: {
							"1": {
								name: "punctuation.definition.parameters.end.swift",
							},
						},
						patterns: [
							{
								match: "\\b(simulator|UIKitForMac)\\b",
								name: "support.constant.platform.environment.swift",
							},
						],
					},
					{
						begin: "\\b(swift|compiler)\\s*(\\()",
						beginCaptures: {
							"1": {
								name: "keyword.other.condition.swift",
							},
							"2": {
								name: "punctuation.definition.parameters.begin.swift",
							},
						},
						end: "(\\))|$",
						endCaptures: {
							"1": {
								name: "punctuation.definition.parameters.end.swift",
							},
						},
						patterns: [
							{
								match: ">=|<",
								name: "keyword.operator.comparison.swift",
							},
							{
								match: "\\b[0-9]+(?:\\.[0-9]+)*\\b",
								name: "constant.numeric.swift",
							},
						],
					},
				],
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.preprocessor.swift",
					},
					"2": {
						name: "keyword.control.preprocessor.conditional.swift",
					},
					"3": {
						patterns: [
							{
								match: "\\S+",
								name: "invalid.illegal.character-not-allowed-here.swift",
							},
						],
					},
				},
				match: "^\\s*(#)(else|endif)(.*?)(?=$|//|/\\*)",
				name: "meta.preprocessor.conditional.swift",
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.preprocessor.swift",
					},
					"2": {
						name: "keyword.control.preprocessor.sourcelocation.swift",
					},
					"4": {
						name: "punctuation.definition.parameters.begin.swift",
					},
					"5": {
						patterns: [
							{
								begin: '(file)\\s*(:)\\s*(?=")',
								beginCaptures: {
									"1": {
										name: "support.variable.parameter.swift",
									},
									"2": {
										name: "punctuation.separator.key-value.swift",
									},
								},
								end: "(?!\\G)",
								patterns: [
									{
										include: "#literals",
									},
								],
							},
							{
								captures: {
									"1": {
										name: "support.variable.parameter.swift",
									},
									"2": {
										name: "punctuation.separator.key-value.swift",
									},
									"3": {
										name: "constant.numeric.integer.swift",
									},
								},
								match: "(line)\\s*(:)\\s*([0-9]+)",
							},
							{
								match: ",",
								name: "punctuation.separator.parameters.swift",
							},
							{
								match: "\\S+",
								name: "invalid.illegal.character-not-allowed-here.swift",
							},
						],
					},
					"6": {
						name: "punctuation.definition.parameters.begin.swift",
					},
					"7": {
						patterns: [
							{
								match: "\\S+",
								name: "invalid.illegal.character-not-allowed-here.swift",
							},
						],
					},
				},
				match: "^\\s*(#)(sourceLocation)((\\()([^)]*)(\\)))(.*?)(?=$|//|/\\*)",
				name: "meta.preprocessor.sourcelocation.swift",
			},
		],
	},
	declarations: {
		patterns: [
			{
				include: "#function",
			},
			{
				include: "#function-initializer",
			},
			{
				include: "#typed-variable-declaration",
			},
			{
				include: "#import",
			},
			{
				include: "#operator",
			},
			{
				include: "#precedencegroup",
			},
			{
				include: "#protocol",
			},
			{
				include: "#type",
			},
			{
				include: "#extension",
			},
			{
				include: "#typealias",
			},
		],
		repository: {
			"available-types": {
				patterns: [
					{
						include: "#comments",
					},
					{
						include: "#builtin-types",
					},
					{
						include: "#attributes",
					},
					{
						match: "\\basync\\b",
						name: "keyword.control.async.swift",
					},
					{
						match: "\\b(?:throws|rethrows)\\b",
						name: "keyword.control.exception.swift",
					},
					{
						match: "\\bsome\\b",
						name: "keyword.operator.type.opaque.swift",
					},
					{
						match: "\\bany\\b",
						name: "keyword.operator.type.existential.swift",
					},
					{
						match: "\\b(?:inout|isolated)\\b",
						name: "storage.modifier.swift",
					},
					{
						match: "\\bSelf\\b",
						name: "variable.language.swift",
					},
					{
						captures: {
							"1": {
								name: "keyword.operator.type.function.swift",
							},
						},
						match: "(?<![/=\\-+!*%<>&|\\^~.])(->)(?![/=\\-+!*%<>&|\\^~.])",
					},
					{
						captures: {
							"1": {
								name: "keyword.operator.type.composition.swift",
							},
						},
						comment: "Swift 3: A & B",
						match: "(?<![/=\\-+!*%<>&|\\^~.])(&)(?![/=\\-+!*%<>&|\\^~.])",
					},
					{
						match: "[?!]",
						name: "keyword.operator.type.optional.swift",
					},
					{
						match: "\\.\\.\\.",
						name: "keyword.operator.function.variadic-parameter.swift",
					},
					{
						comment: "Swift 2: protocol<A, B>",
						match: "\\bprotocol\\b",
						name: "keyword.operator.type.composition.swift",
					},
					{
						match: "(?<=\\.)(?:Protocol|Type)\\b",
						name: "keyword.operator.type.metatype.swift",
					},
					{
						include: "#tuple-type",
					},
					{
						include: "#collection-type",
					},
					{
						include: "#generic-argument-clause",
					},
				],
				repository: {
					"collection-type": {
						begin: "\\[",
						beginCaptures: {
							"0": {
								name: "punctuation.section.collection-type.begin.swift",
							},
						},
						comment:
							"array and dictionary types [Value] and [Key: Value]",
						end: "\\]|(?=[>){}])",
						endCaptures: {
							"0": {
								name: "punctuation.section.collection-type.end.swift",
							},
						},
						patterns: [
							{
								include: "#available-types",
							},
							{
								begin: ":",
								beginCaptures: {
									"0": {
										name: "punctuation.separator.key-value.swift",
									},
								},
								end: "(?=\\]|[>){}])",
								patterns: [
									{
										match: ":",
										name: "invalid.illegal.extra-colon-in-dictionary-type.swift",
									},
									{
										include: "#available-types",
									},
								],
							},
						],
					},
					"tuple-type": {
						begin: "\\(",
						beginCaptures: {
							"0": {
								name: "punctuation.section.tuple-type.begin.swift",
							},
						},
						end: "\\)|(?=[>\\]{}])",
						endCaptures: {
							"0": {
								name: "punctuation.section.tuple-type.end.swift",
							},
						},
						patterns: [
							{
								include: "#available-types",
							},
						],
					},
				},
			},
			extension: {
				begin: "\\b(extension)\\s+((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))",
				beginCaptures: {
					"1": {
						name: "storage.type.$1.swift",
					},
					"2": {
						name: "entity.name.type.swift",
						patterns: [
							{
								include: "#available-types",
							},
						],
					},
					"3": {
						name: "punctuation.definition.identifier.swift",
					},
					"4": {
						name: "punctuation.definition.identifier.swift",
					},
				},
				end: "(?<=\\})",
				name: "meta.definition.type.$1.swift",
				patterns: [
					{
						include: "#comments",
					},
					{
						comment: "SE-0143: Conditional Conformances",
						include: "#generic-where-clause",
					},
					{
						include: "#inheritance-clause",
					},
					{
						begin: "\\{",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.type.begin.swift",
							},
						},
						end: "\\}",
						endCaptures: {
							"0": {
								name: "punctuation.definition.type.end.swift",
							},
						},
						name: "meta.definition.type.body.swift",
						patterns: [
							{
								include: "$self",
							},
						],
					},
				],
			},
			"function": {
				begin: "(?x)\n\t\t\t\t\t\t\\b\n\t\t\t\t\t\t(?:(nonisolated)\\s+)?\n\t\t\t\t\t\t(func)\n\t\t\t\t\t\t\\s+\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t(?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>)\n\t\t\t\t\t\t  | (?:\n\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t(?<oph>\t\t\t\t\t\t\t\t# operator-head\n\t\t\t\t\t\t\t\t\t\t[/=\\-+!*%<>&|^~?]\n\t\t\t\t\t\t\t\t\t  | [\\x{00A1}-\\x{00A7}]\n\t\t\t\t\t\t\t\t\t  | [\\x{00A9}\\x{00AB}]\n\t\t\t\t\t\t\t\t\t  | [\\x{00AC}\\x{00AE}]\n\t\t\t\t\t\t\t\t\t  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2030}-\\x{203E}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2041}-\\x{2053}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2055}-\\x{205E}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2190}-\\x{23FF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2500}-\\x{2775}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2794}-\\x{2BFF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2E00}-\\x{2E7F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{3001}-\\x{3003}]\n\t\t\t\t\t\t\t\t\t  | [\\x{3008}-\\x{3030}]\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t\t\\g<oph>\n\t\t\t\t\t\t\t\t\t  | (?<opc>\t\t\t\t\t\t\t\t# operator-character\n\t\t\t\t\t\t\t\t\t\t\t[\\x{0300}-\\x{036F}]\n\t\t\t\t\t\t\t\t\t\t  | [\\x{1DC0}-\\x{1DFF}]\n\t\t\t\t\t\t\t\t\t\t  | [\\x{20D0}-\\x{20FF}]\n\t\t\t\t\t\t\t\t\t\t  | [\\x{FE00}-\\x{FE0F}]\n\t\t\t\t\t\t\t\t\t\t  | [\\x{FE20}-\\x{FE2F}]\n\t\t\t\t\t\t\t\t\t\t  | [\\x{E0100}-\\x{E01EF}]\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t)*\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t  | ( \\. ( \\g<oph> | \\g<opc> | \\. )+ )\t\t\t# Dot operators\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t\t\\s*\n\t\t\t\t\t\t(?=\\(|<)\n\t\t\t\t\t",
				beginCaptures: {
					"1": {
						name: "storage.modifier.swift",
					},
					"2": {
						name: "storage.type.function.swift",
					},
					"3": {
						name: "entity.name.function.swift",
					},
					"4": {
						name: "punctuation.definition.identifier.swift",
					},
					"5": {
						name: "punctuation.definition.identifier.swift",
					},
				},
				end: "(?<=\\})|$(?# functions in protocol declarations or generated interfaces have no body)",
				name: "meta.definition.function.swift",
				patterns: [
					{
						include: "#comments",
					},
					{
						include: "#generic-parameter-clause",
					},
					{
						include: "#parameter-clause",
					},
					{
						include: "#function-result",
					},
					{
						include: "#async-throws",
					},
					{
						comment:
							"Swift 3: generic constraints after the parameters and return type",
						include: "#generic-where-clause",
					},
					{
						begin: "(\\{)",
						beginCaptures: {
							"1": {
								name: "punctuation.section.function.begin.swift",
							},
						},
						end: "(\\})",
						endCaptures: {
							"1": {
								name: "punctuation.section.function.end.swift",
							},
						},
						name: "meta.definition.function.body.swift",
						patterns: [
							{
								include: "$self",
							},
						],
					},
				],
			},
			"function-initializer": {
				begin: "(?<!\\.)\\b(init[?!]*(?# only one is valid, but we want the in⇥ snippet to produce something that looks good))\\s*(?=\\(|<)",
				beginCaptures: {
					"1": {
						name: "storage.type.function.swift",
						patterns: [
							{
								match: "(?<=[?!])[?!]+",
								name: "invalid.illegal.character-not-allowed-here.swift",
							},
						],
					},
				},
				end: "(?<=\\})|$",
				name: "meta.definition.function.initializer.swift",
				patterns: [
					{
						include: "#comments",
					},
					{
						include: "#generic-parameter-clause",
					},
					{
						include: "#parameter-clause",
					},
					{
						include: "#async-throws",
					},
					{
						comment:
							"Swift 3: generic constraints after the parameters and return type",
						include: "#generic-where-clause",
					},
					{
						begin: "(\\{)",
						beginCaptures: {
							"1": {
								name: "punctuation.section.function.begin.swift",
							},
						},
						end: "(\\})",
						endCaptures: {
							"1": {
								name: "punctuation.section.function.end.swift",
							},
						},
						name: "meta.definition.function.body.swift",
						patterns: [
							{
								include: "$self",
							},
						],
					},
				],
			},
			"function-result": {
				begin: "(?<![/=\\-+!*%<>&|\\^~.])(->)(?![/=\\-+!*%<>&|\\^~.])\\s*",
				beginCaptures: {
					"1": {
						name: "keyword.operator.function-result.swift",
					},
				},
				end: "(?!\\G)(?=\\{|\\bwhere\\b|;)|$",
				name: "meta.function-result.swift",
				patterns: [
					{
						include: "#available-types",
					},
				],
			},
			"generic-argument-clause": {
				begin: "<",
				beginCaptures: {
					"0": {
						name: "punctuation.separator.generic-argument-clause.begin.swift",
					},
				},
				end: ">|(?=[)\\]{}])",
				endCaptures: {
					"0": {
						name: "punctuation.separator.generic-argument-clause.end.swift",
					},
				},
				name: "meta.generic-argument-clause.swift",
				patterns: [
					{
						include: "#available-types",
					},
				],
			},
			"generic-parameter-clause": {
				begin: "<",
				beginCaptures: {
					"0": {
						name: "punctuation.separator.generic-parameter-clause.begin.swift",
					},
				},
				end: ">|(?=[^\\w\\d:<>\\s,=&`])(?# characters besides these are never valid in a generic param list -- even if it's not really a valid clause, we should stop trying to parse it if we see one of them.)",
				endCaptures: {
					"0": {
						name: "punctuation.separator.generic-parameter-clause.end.swift",
					},
				},
				name: "meta.generic-parameter-clause.swift",
				patterns: [
					{
						include: "#comments",
					},
					{
						comment:
							"Swift 2: constraints inside the generic param list",
						include: "#generic-where-clause",
					},
					{
						captures: {
							"1": {
								name: "variable.language.generic-parameter.swift",
							},
						},
						match: "\\b((?!\\d)\\w[\\w\\d]*)\\b",
					},
					{
						match: ",",
						name: "punctuation.separator.generic-parameters.swift",
					},
					{
						begin: "(:)\\s*",
						beginCaptures: {
							"1": {
								name: "punctuation.separator.generic-parameter-constraint.swift",
							},
						},
						end: "(?=[,>]|(?!\\G)\\bwhere\\b)",
						name: "meta.generic-parameter-constraint.swift",
						patterns: [
							{
								begin: "\\G",
								end: "(?=[,>]|(?!\\G)\\bwhere\\b)",
								name: "entity.other.inherited-class.swift",
								patterns: [
									{
										include: "#type-identifier",
									},
								],
							},
						],
					},
				],
			},
			"generic-where-clause": {
				begin: "\\b(where)\\b\\s*",
				beginCaptures: {
					"1": {
						name: "keyword.other.generic-constraint-introducer.swift",
					},
				},
				end: "(?!\\G)$|(?=[>{};\\n]|//|/\\*)",
				name: "meta.generic-where-clause.swift",
				patterns: [
					{
						include: "#comments",
					},
					{
						include: "#requirement-list",
					},
				],
				repository: {
					"requirement-list": {
						begin: "\\G|,\\s*",
						end: "(?=[,>{};\\n]|//|/\\*)",
						patterns: [
							{
								include: "#comments",
							},
							{
								include: "#constraint",
							},
							{
								include: "#available-types",
							},
							{
								begin: "(?<![/=\\-+!*%<>&|\\^~.])(==)(?![/=\\-+!*%<>&|\\^~.])",
								beginCaptures: {
									"1": {
										name: "keyword.operator.generic-constraint.same-type.swift",
									},
								},
								end: "(?=\\s*[,>{};\\n]|//|/\\*)",
								name: "meta.generic-where-clause.same-type-requirement.swift",
								patterns: [
									{
										include: "#available-types",
									},
								],
							},
							{
								begin: "(?<![/=\\-+!*%<>&|\\^~.])(:)(?![/=\\-+!*%<>&|\\^~.])",
								beginCaptures: {
									"1": {
										name: "keyword.operator.generic-constraint.conforms-to.swift",
									},
								},
								end: "(?=\\s*[,>{};\\n]|//|/\\*)",
								name: "meta.generic-where-clause.conformance-requirement.swift",
								patterns: [
									{
										begin: "\\G\\s*",
										contentName:
											"entity.other.inherited-class.swift",
										end: "(?=\\s*[,>{};\\n]|//|/\\*)",
										patterns: [
											{
												include: "#available-types",
											},
										],
									},
								],
							},
						],
					},
				},
			},
			"import": {
				begin: "(?<!\\.)\\b(import)\\s+",
				beginCaptures: {
					"1": {
						name: "keyword.control.import.swift",
					},
				},
				end: "(;)|$\\n?|(?=//|/\\*)",
				endCaptures: {
					"1": {
						name: "punctuation.terminator.statement.swift",
					},
				},
				name: "meta.import.swift",
				patterns: [
					{
						begin: "\\G(?!;|$|//|/\\*)(?:(typealias|struct|class|actor|enum|protocol|var|func)\\s+)?",
						beginCaptures: {
							"1": {
								name: "storage.modifier.swift",
							},
						},
						end: "(?=;|$|//|/\\*)",
						patterns: [
							{
								captures: {
									"1": {
										name: "punctuation.definition.identifier.swift",
									},
									"2": {
										name: "punctuation.definition.identifier.swift",
									},
								},
								match: "(?x)\n\t\t\t\t\t\t\t\t\t\t(?<=\\G|\\.)\n\t\t\t\t\t\t\t\t\t\t(?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>)\n\t\t\t\t\t\t\t\t\t",
								name: "entity.name.type.swift",
							},
							{
								match: "(?x)\n\t\t\t\t\t\t\t\t\t\t(?<=\\G|\\.)\n\t\t\t\t\t\t\t\t\t\t\\$[0-9]+\n\t\t\t\t\t\t\t\t\t",
								name: "entity.name.type.swift",
							},
							{
								captures: {
									"1": {
										patterns: [
											{
												match: "\\.",
												name: "invalid.illegal.dot-not-allowed-here.swift",
											},
										],
									},
								},
								match: "(?x)\n\t\t\t\t\t\t\t\t\t\t(?<=\\G|\\.)\n\t\t\t\t\t\t\t\t\t\t(?:\n\t\t\t\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t\t\t\t(?<oph>\t\t\t\t\t\t\t\t# operator-head\n\t\t\t\t\t\t\t\t\t\t\t\t\t[/=\\-+!*%<>&|^~?]\n\t\t\t\t\t\t\t\t\t\t\t\t  | [\\x{00A1}-\\x{00A7}]\n\t\t\t\t\t\t\t\t\t\t\t\t  | [\\x{00A9}\\x{00AB}]\n\t\t\t\t\t\t\t\t\t\t\t\t  | [\\x{00AC}\\x{00AE}]\n\t\t\t\t\t\t\t\t\t\t\t\t  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]\n\t\t\t\t\t\t\t\t\t\t\t\t  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]\n\t\t\t\t\t\t\t\t\t\t\t\t  | [\\x{2030}-\\x{203E}]\n\t\t\t\t\t\t\t\t\t\t\t\t  | [\\x{2041}-\\x{2053}]\n\t\t\t\t\t\t\t\t\t\t\t\t  | [\\x{2055}-\\x{205E}]\n\t\t\t\t\t\t\t\t\t\t\t\t  | [\\x{2190}-\\x{23FF}]\n\t\t\t\t\t\t\t\t\t\t\t\t  | [\\x{2500}-\\x{2775}]\n\t\t\t\t\t\t\t\t\t\t\t\t  | [\\x{2794}-\\x{2BFF}]\n\t\t\t\t\t\t\t\t\t\t\t\t  | [\\x{2E00}-\\x{2E7F}]\n\t\t\t\t\t\t\t\t\t\t\t\t  | [\\x{3001}-\\x{3003}]\n\t\t\t\t\t\t\t\t\t\t\t\t  | [\\x{3008}-\\x{3030}]\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t\t\t\t\t\\g<oph>\n\t\t\t\t\t\t\t\t\t\t\t\t  | (?<opc>\t\t\t\t\t\t\t\t# operator-character\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[\\x{0300}-\\x{036F}]\n\t\t\t\t\t\t\t\t\t\t\t\t\t  | [\\x{1DC0}-\\x{1DFF}]\n\t\t\t\t\t\t\t\t\t\t\t\t\t  | [\\x{20D0}-\\x{20FF}]\n\t\t\t\t\t\t\t\t\t\t\t\t\t  | [\\x{FE00}-\\x{FE0F}]\n\t\t\t\t\t\t\t\t\t\t\t\t\t  | [\\x{FE20}-\\x{FE2F}]\n\t\t\t\t\t\t\t\t\t\t\t\t\t  | [\\x{E0100}-\\x{E01EF}]\n\t\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t\t)*\n\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t  | ( \\. ( \\g<oph> | \\g<opc> | \\. )+ )\t\t\t# Dot operators\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t(?=\\.|;|$|//|/\\*|\\s)\n\t\t\t\t\t\t\t\t\t",
								name: "entity.name.type.swift",
							},
							{
								match: "\\.",
								name: "punctuation.separator.import.swift",
							},
							{
								begin: "(?!\\s*(;|$|//|/\\*))",
								end: "(?=\\s*(;|$|//|/\\*))",
								name: "invalid.illegal.character-not-allowed-here.swift",
							},
						],
					},
				],
			},
			"inheritance-clause": {
				begin: "(:)(?=\\s*\\{)|(:)\\s*",
				beginCaptures: {
					"1": {
						name: "invalid.illegal.empty-inheritance-clause.swift",
					},
					"2": {
						name: "punctuation.separator.inheritance-clause.swift",
					},
				},
				end: "(?!\\G)$|(?=[={}]|(?!\\G)\\bwhere\\b)",
				name: "meta.inheritance-clause.swift",
				patterns: [
					{
						begin: "\\bclass\\b",
						beginCaptures: {
							"0": {
								name: "storage.type.class.swift",
							},
						},
						end: "(?=[={}]|(?!\\G)\\bwhere\\b)",
						patterns: [
							{
								include: "#comments",
							},
							{
								include: "#more-types",
							},
						],
					},
					{
						begin: "\\G",
						end: "(?!\\G)$|(?=[={}]|(?!\\G)\\bwhere\\b)",
						patterns: [
							{
								include: "#comments",
							},
							{
								include: "#inherited-type",
							},
							{
								include: "#more-types",
							},
						],
					},
				],
				repository: {
					"inherited-type": {
						begin: "(?=[`\\p{L}_])",
						end: "(?!\\G)",
						name: "entity.other.inherited-class.swift",
						patterns: [
							{
								include: "#type-identifier",
							},
						],
					},
					"more-types": {
						begin: ",\\s*",
						end: "(?!\\G)(?!//|/\\*)|(?=[,={}]|(?!\\G)\\bwhere\\b)",
						name: "meta.inheritance-list.more-types",
						patterns: [
							{
								include: "#comments",
							},
							{
								include: "#inherited-type",
							},
							{
								include: "#more-types",
							},
						],
					},
				},
			},
			operator: {
				begin: "(?x)\n\t\t\t\t\t\t(?:\n\t\t\t\t\t\t\t\\b(prefix|infix|postfix)\n\t\t\t\t\t\t\t\\s+\n\t\t\t\t\t\t)?\n\t\t\t\t\t\t\\b\n\t\t\t\t\t\t(operator)\n\t\t\t\t\t\t\\s+\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t(?<oph>\t\t\t\t\t\t\t\t\t# operator-head\n\t\t\t\t\t\t\t\t\t[/=\\-+!*%<>&|^~?]\n\t\t\t\t\t\t\t\t  | [\\x{00A1}-\\x{00A7}]\n\t\t\t\t\t\t\t\t  | [\\x{00A9}\\x{00AB}]\n\t\t\t\t\t\t\t\t  | [\\x{00AC}\\x{00AE}]\n\t\t\t\t\t\t\t\t  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]\n\t\t\t\t\t\t\t\t  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]\n\t\t\t\t\t\t\t\t  | [\\x{2030}-\\x{203E}]\n\t\t\t\t\t\t\t\t  | [\\x{2041}-\\x{2053}]\n\t\t\t\t\t\t\t\t  | [\\x{2055}-\\x{205E}]\n\t\t\t\t\t\t\t\t  | [\\x{2190}-\\x{23FF}]\n\t\t\t\t\t\t\t\t  | [\\x{2500}-\\x{2775}]\n\t\t\t\t\t\t\t\t  | [\\x{2794}-\\x{2BFF}]\n\t\t\t\t\t\t\t\t  | [\\x{2E00}-\\x{2E7F}]\n\t\t\t\t\t\t\t\t  | [\\x{3001}-\\x{3003}]\n\t\t\t\t\t\t\t\t  | [\\x{3008}-\\x{3030}]\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t\\g<oph>\n\t\t\t\t\t\t\t\t  | \\.\t\t\t\t\t\t\t\t\t# Invalid dot\n\t\t\t\t\t\t\t\t  | (?<opc>\t\t\t\t\t\t\t\t# operator-character\n\t\t\t\t\t\t\t\t\t\t[\\x{0300}-\\x{036F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{1DC0}-\\x{1DFF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{20D0}-\\x{20FF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{FE00}-\\x{FE0F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{FE20}-\\x{FE2F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{E0100}-\\x{E01EF}]\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)*+\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t  | ( \\. ( \\g<oph> | \\g<opc> | \\. )++ )\t\t\t# Dot operators\n\t\t\t\t\t\t)\n\t\t\t\t\t\t\\s*\n\t\t\t\t\t",
				beginCaptures: {
					"1": {
						name: "storage.modifier.swift",
					},
					"2": {
						name: "storage.type.function.operator.swift",
					},
					"3": {
						name: "entity.name.function.operator.swift",
					},
					"4": {
						patterns: [
							{
								match: "\\.",
								name: "invalid.illegal.dot-not-allowed-here.swift",
							},
						],
					},
				},
				end: "(;)|$\\n?|(?=//|/\\*)",
				endCaptures: {
					"1": {
						name: "punctuation.terminator.statement.swift",
					},
				},
				name: "meta.definition.operator.swift",
				patterns: [
					{
						include: "#swift2",
					},
					{
						include: "#swift3",
					},
					{
						match: "((?!$|;|//|/\\*)\\S)+",
						name: "invalid.illegal.character-not-allowed-here.swift",
					},
				],
				repository: {
					swift2: {
						begin: "\\G(\\{)",
						beginCaptures: {
							"1": {
								name: "punctuation.definition.operator.begin.swift",
							},
						},
						end: "(\\})",
						endCaptures: {
							"1": {
								name: "punctuation.definition.operator.end.swift",
							},
						},
						patterns: [
							{
								include: "#comments",
							},
							{
								captures: {
									"1": {
										name: "storage.modifier.swift",
									},
									"2": {
										name: "keyword.other.operator.associativity.swift",
									},
								},
								match: "\\b(associativity)\\s+(left|right)\\b",
							},
							{
								captures: {
									"1": {
										name: "storage.modifier.swift",
									},
									"2": {
										name: "constant.numeric.integer.swift",
									},
								},
								match: "\\b(precedence)\\s+([0-9]+)\\b",
							},
							{
								captures: {
									"1": {
										name: "storage.modifier.swift",
									},
								},
								match: "\\b(assignment)\\b",
							},
						],
					},
					swift3: {
						captures: {
							"2": {
								name: "entity.other.inherited-class.swift",
								patterns: [
									{
										include: "#types-precedencegroup",
									},
								],
							},
							"3": {
								name: "punctuation.definition.identifier.swift",
							},
							"4": {
								name: "punctuation.definition.identifier.swift",
							},
						},
						match: "\\G(:)\\s*((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))",
					},
				},
			},
			"parameter-clause": {
				begin: "(\\()",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.parameters.begin.swift",
					},
				},
				end: "(\\))(?:\\s*(async)\\b)?",
				endCaptures: {
					"1": {
						name: "punctuation.definition.parameters.end.swift",
					},
					"2": {
						name: "keyword.control.async.swift",
					},
				},
				name: "meta.parameter-clause.swift",
				patterns: [
					{
						include: "#parameter-list",
					},
				],
			},
			"parameter-list": {
				patterns: [
					{
						captures: {
							"1": {
								name: "entity.name.function.swift",
							},
							"2": {
								name: "punctuation.definition.identifier.swift",
							},
							"3": {
								name: "punctuation.definition.identifier.swift",
							},
							"4": {
								name: "variable.parameter.function.swift",
							},
							"5": {
								name: "punctuation.definition.identifier.swift",
							},
							"6": {
								name: "punctuation.definition.identifier.swift",
							},
						},
						comment:
							"External parameter labels are considered part of the function name",
						match: "((?<q1>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q1>))\\s+((?<q2>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q2>))(?=\\s*:)",
					},
					{
						captures: {
							"1": {
								name: "variable.parameter.function.swift",
							},
							"2": {
								name: "entity.name.function.swift",
							},
							"3": {
								name: "punctuation.definition.identifier.swift",
							},
							"4": {
								name: "punctuation.definition.identifier.swift",
							},
						},
						comment:
							"If no external label is given, the name is both the external label and the internal variable name",
						match: "(((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>)))(?=\\s*:)",
					},
					{
						begin: ":\\s*(?!\\s)",
						end: "(?=[,)])",
						patterns: [
							{
								include: "#available-types",
							},
							{
								match: ":",
								name: "invalid.illegal.extra-colon-in-parameter-list.swift",
							},
							{
								begin: "=",
								beginCaptures: {
									"0": {
										name: "keyword.operator.assignment.swift",
									},
								},
								comment: "a parameter's default value",
								end: "(?=[,)])",
								patterns: [
									{
										include: "#expressions",
									},
								],
							},
						],
					},
				],
			},
			precedencegroup: {
				begin: "\\b(precedencegroup)\\s+((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*(?=\\{)",
				beginCaptures: {
					"1": {
						name: "storage.type.precedencegroup.swift",
					},
					"2": {
						name: "entity.name.type.precedencegroup.swift",
					},
					"3": {
						name: "punctuation.definition.identifier.swift",
					},
					"4": {
						name: "punctuation.definition.identifier.swift",
					},
				},
				end: "(?!\\G)",
				name: "meta.definition.precedencegroup.swift",
				patterns: [
					{
						begin: "\\{",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.precedencegroup.begin.swift",
							},
						},
						end: "\\}",
						endCaptures: {
							"0": {
								name: "punctuation.definition.precedencegroup.end.swift",
							},
						},
						patterns: [
							{
								include: "#comments",
							},
							{
								captures: {
									"1": {
										name: "storage.modifier.swift",
									},
									"2": {
										name: "entity.other.inherited-class.swift",
										patterns: [
											{
												include:
													"#types-precedencegroup",
											},
										],
									},
									"3": {
										name: "punctuation.definition.identifier.swift",
									},
									"4": {
										name: "punctuation.definition.identifier.swift",
									},
								},
								match: "\\b(higherThan|lowerThan)\\s*:\\s*((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))",
							},
							{
								captures: {
									"1": {
										name: "storage.modifier.swift",
									},
									"2": {
										name: "keyword.other.operator.associativity.swift",
									},
								},
								match: "\\b(associativity)\\b(?:\\s*:\\s*(right|left|none)\\b)?",
							},
							{
								captures: {
									"1": {
										name: "storage.modifier.swift",
									},
									"2": {
										name: "constant.language.boolean.swift",
									},
								},
								match: "\\b(assignment)\\b(?:\\s*:\\s*(true|false)\\b)?",
							},
						],
					},
				],
			},
			protocol: {
				begin: "\\b(protocol)\\s+((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))",
				beginCaptures: {
					"1": {
						name: "storage.type.$1.swift",
					},
					"2": {
						name: "entity.name.type.$1.swift",
					},
					"3": {
						name: "punctuation.definition.identifier.swift",
					},
					"4": {
						name: "punctuation.definition.identifier.swift",
					},
				},
				end: "(?<=\\})",
				name: "meta.definition.type.protocol.swift",
				patterns: [
					{
						include: "#comments",
					},
					{
						include: "#inheritance-clause",
					},
					{
						comment:
							"SE-0142: Permit where clauses to constrain associated types",
						include: "#generic-where-clause",
					},
					{
						begin: "\\{",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.type.begin.swift",
							},
						},
						end: "\\}",
						endCaptures: {
							"0": {
								name: "punctuation.definition.type.end.swift",
							},
						},
						name: "meta.definition.type.body.swift",
						patterns: [
							{
								include: "#protocol-method",
							},
							{
								include: "#protocol-initializer",
							},
							{
								include: "#associated-type",
							},
							{
								include: "$self",
							},
						],
					},
				],
				repository: {
					"associated-type": {
						begin: "\\b(associatedtype)\\s+((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*",
						beginCaptures: {
							"1": {
								name: "keyword.other.declaration-specifier.swift",
							},
							"2": {
								name: "variable.language.associatedtype.swift",
							},
							"3": {
								name: "punctuation.definition.identifier.swift",
							},
							"4": {
								name: "punctuation.definition.identifier.swift",
							},
						},
						end: "(?!\\G)$|(?=[;}]|$)",
						name: "meta.definition.associatedtype.swift",
						patterns: [
							{
								include: "#inheritance-clause",
							},
							{
								comment:
									"SE-0142: Permit where clauses to constrain associated types",
								include: "#generic-where-clause",
							},
							{
								include: "#typealias-assignment",
							},
						],
					},
					"protocol-initializer": {
						begin: "(?<!\\.)\\b(init[?!]*(?# only one is valid, but we want the in⇥ snippet to produce something that looks good))\\s*(?=\\(|<)",
						beginCaptures: {
							"1": {
								name: "storage.type.function.swift",
								patterns: [
									{
										match: "(?<=[?!])[?!]+",
										name: "invalid.illegal.character-not-allowed-here.swift",
									},
								],
							},
						},
						end: "$|(?=;|//|/\\*|\\})",
						name: "meta.definition.function.initializer.swift",
						patterns: [
							{
								include: "#comments",
							},
							{
								include: "#generic-parameter-clause",
							},
							{
								include: "#parameter-clause",
							},
							{
								include: "#async-throws",
							},
							{
								comment:
									"Swift 3: generic constraints after the parameters and return type",
								include: "#generic-where-clause",
							},
							{
								begin: "\\{",
								beginCaptures: {
									"0": {
										name: "punctuation.section.function.begin.swift",
									},
								},
								end: "\\}",
								endCaptures: {
									"0": {
										name: "punctuation.section.function.end.swift",
									},
								},
								name: "invalid.illegal.function-body-not-allowed-in-protocol.swift",
								patterns: [
									{
										include: "$self",
									},
								],
							},
						],
					},
					"protocol-method": {
						begin: "(?x)\n\t\t\t\t\t\t\t\t\\b\n\t\t\t\t\t\t\t\t(func)\n\t\t\t\t\t\t\t\t\\s+\n\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t(?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>)\n\t\t  \t\t\t\t\t\t  | (?:\n\t\t  \t\t\t\t\t\t\t\t(\n\t\t  \t\t\t\t\t\t\t\t\t(?<oph>\t\t\t\t\t\t\t\t# operator-head\n\t\t  \t\t\t\t\t\t\t\t\t\t[/=\\-+!*%<>&|^~?]\n\t\t  \t\t\t\t\t\t\t\t\t  | [\\x{00A1}-\\x{00A7}]\n\t\t  \t\t\t\t\t\t\t\t\t  | [\\x{00A9}\\x{00AB}]\n\t\t  \t\t\t\t\t\t\t\t\t  | [\\x{00AC}\\x{00AE}]\n\t\t  \t\t\t\t\t\t\t\t\t  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]\n\t\t  \t\t\t\t\t\t\t\t\t  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]\n\t\t  \t\t\t\t\t\t\t\t\t  | [\\x{2030}-\\x{203E}]\n\t\t  \t\t\t\t\t\t\t\t\t  | [\\x{2041}-\\x{2053}]\n\t\t  \t\t\t\t\t\t\t\t\t  | [\\x{2055}-\\x{205E}]\n\t\t  \t\t\t\t\t\t\t\t\t  | [\\x{2190}-\\x{23FF}]\n\t\t  \t\t\t\t\t\t\t\t\t  | [\\x{2500}-\\x{2775}]\n\t\t  \t\t\t\t\t\t\t\t\t  | [\\x{2794}-\\x{2BFF}]\n\t\t  \t\t\t\t\t\t\t\t\t  | [\\x{2E00}-\\x{2E7F}]\n\t\t  \t\t\t\t\t\t\t\t\t  | [\\x{3001}-\\x{3003}]\n\t\t  \t\t\t\t\t\t\t\t\t  | [\\x{3008}-\\x{3030}]\n\t\t  \t\t\t\t\t\t\t\t\t)\n\t\t  \t\t\t\t\t\t\t\t\t(\n\t\t  \t\t\t\t\t\t\t\t\t\t\\g<oph>\n\t\t  \t\t\t\t\t\t\t\t\t  | (?<opc>\t\t\t\t\t\t\t\t# operator-character\n\t\t  \t\t\t\t\t\t\t\t\t\t\t[\\x{0300}-\\x{036F}]\n\t\t  \t\t\t\t\t\t\t\t\t\t  | [\\x{1DC0}-\\x{1DFF}]\n\t\t  \t\t\t\t\t\t\t\t\t\t  | [\\x{20D0}-\\x{20FF}]\n\t\t  \t\t\t\t\t\t\t\t\t\t  | [\\x{FE00}-\\x{FE0F}]\n\t\t  \t\t\t\t\t\t\t\t\t\t  | [\\x{FE20}-\\x{FE2F}]\n\t\t  \t\t\t\t\t\t\t\t\t\t  | [\\x{E0100}-\\x{E01EF}]\n\t\t  \t\t\t\t\t\t\t\t\t\t)\n\t\t  \t\t\t\t\t\t\t\t\t)*\n\t\t  \t\t\t\t\t\t\t\t)\n\t\t  \t\t\t\t\t\t\t  | ( \\. ( \\g<oph> | \\g<opc> | \\. )+ )\t\t\t# Dot operators\n\t\t  \t\t\t\t\t\t\t)\n\t\t  \t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\\s*\n\t\t\t\t\t\t\t\t(?=\\(|<)\n\t\t\t\t\t\t\t",
						beginCaptures: {
							"1": {
								name: "storage.type.function.swift",
							},
							"2": {
								name: "entity.name.function.swift",
							},
							"3": {
								name: "punctuation.definition.identifier.swift",
							},
							"4": {
								name: "punctuation.definition.identifier.swift",
							},
						},
						end: "$|(?=;|//|/\\*|\\})",
						name: "meta.definition.function.swift",
						patterns: [
							{
								include: "#comments",
							},
							{
								include: "#generic-parameter-clause",
							},
							{
								include: "#parameter-clause",
							},
							{
								include: "#function-result",
							},
							{
								include: "#async-throws",
							},
							{
								comment:
									"Swift 3: generic constraints after the parameters and return type",
								include: "#generic-where-clause",
							},
							{
								begin: "\\{",
								beginCaptures: {
									"0": {
										name: "punctuation.section.function.begin.swift",
									},
								},
								end: "\\}",
								endCaptures: {
									"0": {
										name: "punctuation.section.function.end.swift",
									},
								},
								name: "invalid.illegal.function-body-not-allowed-in-protocol.swift",
								patterns: [
									{
										include: "$self",
									},
								],
							},
						],
					},
				},
			},
			type: {
				patterns: [
					{
						begin: "\\b(class(?!\\s+(?:func|var|let)\\b)|struct|actor)\\s+((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))",
						beginCaptures: {
							"1": {
								name: "storage.type.$1.swift",
							},
							"2": {
								name: "entity.name.type.$1.swift",
							},
							"3": {
								name: "punctuation.definition.identifier.swift",
							},
							"4": {
								name: "punctuation.definition.identifier.swift",
							},
						},
						end: "(?<=\\})",
						name: "meta.definition.type.$1.swift",
						patterns: [
							{
								include: "#comments",
							},
							{
								include: "#generic-parameter-clause",
							},
							{
								comment:
									"Swift 3: generic constraints after the generic param list",
								include: "#generic-where-clause",
							},
							{
								include: "#inheritance-clause",
							},
							{
								begin: "\\{",
								beginCaptures: {
									"0": {
										name: "punctuation.definition.type.begin.swift",
									},
								},
								end: "\\}",
								endCaptures: {
									"0": {
										name: "punctuation.definition.type.end.swift",
									},
								},
								name: "meta.definition.type.body.swift",
								patterns: [
									{
										include: "$self",
									},
								],
							},
						],
					},
					{
						include: "#type-enum",
					},
				],
			},
			"type-enum": {
				begin: "\\b(enum)\\s+((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))",
				beginCaptures: {
					"1": {
						name: "storage.type.$1.swift",
					},
					"2": {
						name: "entity.name.type.$1.swift",
					},
					"3": {
						name: "punctuation.definition.identifier.swift",
					},
					"4": {
						name: "punctuation.definition.identifier.swift",
					},
				},
				end: "(?<=\\})",
				name: "meta.definition.type.$1.swift",
				patterns: [
					{
						include: "#comments",
					},
					{
						include: "#generic-parameter-clause",
					},
					{
						comment:
							"Swift 3: generic constraints after the generic param list",
						include: "#generic-where-clause",
					},
					{
						include: "#inheritance-clause",
					},
					{
						begin: "\\{",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.type.begin.swift",
							},
						},
						end: "\\}",
						endCaptures: {
							"0": {
								name: "punctuation.definition.type.end.swift",
							},
						},
						name: "meta.definition.type.body.swift",
						patterns: [
							{
								include: "#enum-case-clause",
							},
							{
								include: "$self",
							},
						],
					},
				],
				repository: {
					"associated-values": {
						begin: "\\G\\(",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.parameters.begin.swift",
							},
						},
						end: "\\)",
						endCaptures: {
							"0": {
								name: "punctuation.definition.parameters.end.swift",
							},
						},
						patterns: [
							{
								include: "#comments",
							},
							{
								begin: "(?x)\n\t\t\t\t\t\t\t\t\t\t(?:(_)|((?<q1>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*\\k<q1>))\n\t\t\t\t\t\t\t\t\t\t\\s+\n\t\t\t\t\t\t\t\t\t\t(((?<q2>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*\\k<q2>))\n\t\t\t\t\t\t\t\t\t\t\\s*(:)",
								beginCaptures: {
									"1": {
										name: "entity.name.function.swift",
									},
									"2": {
										name: "invalid.illegal.distinct-labels-not-allowed.swift",
									},
									"5": {
										name: "variable.parameter.function.swift",
									},
									"7": {
										name: "punctuation.separator.argument-label.swift",
									},
								},
								end: "(?=[,)\\]])",
								patterns: [
									{
										include: "#available-types",
									},
								],
							},
							{
								begin: "(((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*\\k<q>))\\s*(:)",
								beginCaptures: {
									"1": {
										name: "entity.name.function.swift",
									},
									"2": {
										name: "variable.parameter.function.swift",
									},
									"4": {
										name: "punctuation.separator.argument-label.swift",
									},
								},
								end: "(?=[,)\\]])",
								patterns: [
									{
										include: "#available-types",
									},
								],
							},
							{
								begin: "(?![,)\\]])(?=\\S)",
								comment:
									"an element without a label (i.e. anything else)",
								end: "(?=[,)\\]])",
								patterns: [
									{
										include: "#available-types",
									},
									{
										match: ":",
										name: "invalid.illegal.extra-colon-in-parameter-list.swift",
									},
								],
							},
						],
					},
					"enum-case": {
						begin: "(?x)((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*",
						beginCaptures: {
							"1": {
								name: "constant.other.swift",
							},
						},
						end: "(?<=\\))|(?![=(])",
						patterns: [
							{
								include: "#comments",
							},
							{
								include: "#associated-values",
							},
							{
								include: "#raw-value-assignment",
							},
						],
					},
					"enum-case-clause": {
						begin: "\\b(case)\\b\\s*",
						beginCaptures: {
							"1": {
								name: "storage.type.enum.case.swift",
							},
						},
						end: "(?=[;}])|(?!\\G)(?!//|/\\*)(?=[^\\s,])",
						patterns: [
							{
								include: "#comments",
							},
							{
								include: "#enum-case",
							},
							{
								include: "#more-cases",
							},
						],
					},
					"more-cases": {
						begin: ",\\s*",
						end: "(?!\\G)(?!//|/\\*)(?=[;}]|[^\\s,])",
						name: "meta.enum-case.more-cases",
						patterns: [
							{
								include: "#comments",
							},
							{
								include: "#enum-case",
							},
							{
								include: "#more-cases",
							},
						],
					},
					"raw-value-assignment": {
						begin: "(=)\\s*",
						beginCaptures: {
							"1": {
								name: "keyword.operator.assignment.swift",
							},
						},
						end: "(?!\\G)",
						patterns: [
							{
								include: "#comments",
							},
							{
								include: "#literals",
							},
						],
					},
				},
			},
			"type-identifier": {
				begin: "((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*",
				beginCaptures: {
					"1": {
						name: "meta.type-name.swift",
						patterns: [
							{
								include: "#builtin-types",
							},
						],
					},
					"2": {
						name: "punctuation.definition.identifier.swift",
					},
					"3": {
						name: "punctuation.definition.identifier.swift",
					},
				},
				end: "(?!<)",
				patterns: [
					{
						begin: "(?=<)",
						end: "(?!\\G)",
						patterns: [
							{
								include: "#generic-argument-clause",
							},
						],
					},
				],
			},
			typealias: {
				begin: "\\b(typealias)\\s+((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*",
				beginCaptures: {
					"1": {
						name: "keyword.other.declaration-specifier.swift",
					},
					"2": {
						name: "entity.name.type.typealias.swift",
					},
					"3": {
						name: "punctuation.definition.identifier.swift",
					},
					"4": {
						name: "punctuation.definition.identifier.swift",
					},
				},
				end: "(?!\\G)$|(?=;|//|/\\*|$)",
				name: "meta.definition.typealias.swift",
				patterns: [
					{
						begin: "\\G(?=<)",
						end: "(?!\\G)",
						patterns: [
							{
								include: "#generic-parameter-clause",
							},
						],
					},
					{
						include: "#typealias-assignment",
					},
				],
			},
			"typealias-assignment": {
				begin: "(=)\\s*",
				beginCaptures: {
					"1": {
						name: "keyword.operator.assignment.swift",
					},
				},
				end: "(?!\\G)$|(?=;|//|/\\*|$)",
				patterns: [
					{
						include: "#available-types",
					},
				],
			},
			"typed-variable-declaration": {
				begin: "(?x)\n\t\t\t\t\t\t\\b(?:(async)\\s+)?(let|var)\\b\\s+\n\t\t\t\t\t\t(?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>)\\s*\n\t\t\t\t\t\t:\n\t\t\t\t\t",
				beginCaptures: {
					"1": {
						name: "keyword.control.async.swift",
					},
					"2": {
						name: "keyword.other.declaration-specifier.swift",
					},
				},
				end: "(?=$|[={])",
				patterns: [
					{
						include: "#available-types",
					},
				],
			},
			"types-precedencegroup": {
				patterns: [
					{
						comment: "Precedence groups in the standard library",
						match: "\\b(?:BitwiseShift|Assignment|RangeFormation|Casting|Addition|NilCoalescing|Comparison|LogicalConjunction|LogicalDisjunction|Default|Ternary|Multiplication|FunctionArrow)Precedence\\b",
						name: "support.type.swift",
					},
				],
			},
		},
	},
	expressions: {
		patterns: [
			{
				include: "#comments",
			},
			{
				include: "#code-block",
			},
			{
				include: "#attributes",
			},
			{
				include: "#closure-parameter",
			},
			{
				include: "#literals",
			},
			{
				include: "#operators",
			},
			{
				include: "#builtin-types",
			},
			{
				include: "#builtin-functions",
			},
			{
				include: "#builtin-global-functions",
			},
			{
				include: "#builtin-properties",
			},
			{
				include: "#compound-name",
			},
			{
				include: "#keywords",
			},
			{
				include: "#function-call-expression",
			},
			{
				include: "#subscript-expression",
			},
			{
				include: "#parenthesized-expression",
			},
			{
				include: "#member-reference",
			},
			{
				include: "#availability-condition",
			},
			{
				match: "\\b_\\b",
				name: "support.variable.discard-value.swift",
			},
		],
		repository: {
			"availability-condition": {
				begin: "\\B(#(?:un)?available)(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.availability-condition.swift",
					},
					"2": {
						name: "punctuation.definition.arguments.begin.swift",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.arguments.end.swift",
					},
				},
				patterns: [
					{
						captures: {
							"1": {
								name: "keyword.other.platform.os.swift",
							},
							"2": {
								name: "constant.numeric.swift",
							},
						},
						match: "\\s*\\b((?:iOS|macOS|OSX|watchOS|tvOS|UIKitForMac)(?:ApplicationExtension)?)\\b(?:\\s+([0-9]+(?:\\.[0-9]+)*\\b))",
					},
					{
						captures: {
							"1": {
								name: "keyword.other.platform.all.swift",
							},
							"2": {
								name: "invalid.illegal.character-not-allowed-here.swift",
							},
						},
						match: "(\\*)\\s*(.*?)(?=[,)])",
					},
					{
						match: "[^\\s,)]+",
						name: "invalid.illegal.character-not-allowed-here.swift",
					},
				],
			},
			"closure-parameter": {
				match: "\\$[0-9]+",
				name: "variable.language.closure-parameter.swift",
			},
			"compound-name": {
				captures: {
					"1": {
						name: "entity.name.function.compound-name.swift",
					},
					"2": {
						name: "punctuation.definition.entity.swift",
					},
					"3": {
						name: "punctuation.definition.entity.swift",
					},
					"4": {
						patterns: [
							{
								captures: {
									"1": {
										name: "punctuation.definition.entity.swift",
									},
									"2": {
										name: "punctuation.definition.entity.swift",
									},
								},
								match: "(?<q>`?)(?!_:)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>):",
								name: "entity.name.function.compound-name.swift",
							},
						],
					},
				},
				comment:
					"a reference to a function with disambiguating argument labels, such as foo(_:), foo(bar:), etc.",
				match: "(?x)\n\t\t\t\t\t\t((?<q1>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q1>))       \t\t# function name\n\t\t\t\t\t\t\\(\n\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t((?<q2>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q2>)) \t# argument label\n\t\t\t\t\t\t\t\t\t:\t\t\t\t\t\t\t\t\t\t\t\t# colon\n\t\t\t\t\t\t\t\t)+\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\\)\n\t\t\t\t\t",
			},
			"expression-element-list": {
				patterns: [
					{
						include: "#comments",
					},
					{
						begin: "((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*(:)",
						beginCaptures: {
							"1": {
								name: "support.function.any-method.swift",
							},
							"2": {
								name: "punctuation.definition.identifier.swift",
							},
							"3": {
								name: "punctuation.definition.identifier.swift",
							},
							"4": {
								name: "punctuation.separator.argument-label.swift",
							},
						},
						comment: "an element with a label",
						end: "(?=[,)\\]])",
						patterns: [
							{
								include: "#expressions",
							},
						],
					},
					{
						begin: "(?![,)\\]])(?=\\S)",
						comment:
							"an element without a label (i.e. anything else)",
						end: "(?=[,)\\]])",
						patterns: [
							{
								include: "#expressions",
							},
						],
					},
				],
			},
			"function-call-expression": {
				patterns: [
					{
						begin: "((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*(\\()",
						beginCaptures: {
							"1": {
								name: "support.function.any-method.swift",
							},
							"2": {
								name: "punctuation.definition.identifier.swift",
							},
							"3": {
								name: "punctuation.definition.identifier.swift",
							},
							"4": {
								name: "punctuation.definition.arguments.begin.swift",
							},
						},
						comment:
							"foo(args) -- a call whose callee is a highlightable name",
						end: "\\)",
						endCaptures: {
							"0": {
								name: "punctuation.definition.arguments.end.swift",
							},
						},
						name: "meta.function-call.swift",
						patterns: [
							{
								include: "#expression-element-list",
							},
						],
					},
					{
						begin: "(?<=[`\\])}>\\p{L}_\\p{N}\\p{M}])\\s*(\\()",
						beginCaptures: {
							"1": {
								name: "punctuation.definition.arguments.begin.swift",
							},
						},
						comment:
							"[Int](args) -- a call whose callee is a more complicated expression",
						end: "\\)",
						endCaptures: {
							"0": {
								name: "punctuation.definition.arguments.end.swift",
							},
						},
						name: "meta.function-call.swift",
						patterns: [
							{
								include: "#expression-element-list",
							},
						],
					},
				],
			},
			"member-reference": {
				patterns: [
					{
						captures: {
							"1": {
								name: "variable.other.swift",
							},
							"2": {
								name: "punctuation.definition.identifier.swift",
							},
							"3": {
								name: "punctuation.definition.identifier.swift",
							},
						},
						match: "(?<=\\.)((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))",
					},
				],
			},
			"parenthesized-expression": {
				begin: "\\(",
				beginCaptures: {
					"0": {
						name: "punctuation.section.tuple.begin.swift",
					},
				},
				comment:
					'correctly matching closure expressions is too hard (depends on trailing "in") so we just tack on some basics to the end of parenthesized-expression',
				end: "(\\))\\s*((?:\\b(?:async|throws|rethrows)\\s)*)",
				endCaptures: {
					"1": {
						name: "punctuation.section.tuple.end.swift",
					},
					"2": {
						patterns: [
							{
								match: "\\brethrows\\b",
								name: "invalid.illegal.rethrows-only-allowed-on-function-declarations.swift",
							},
							{
								include: "#async-throws",
							},
						],
					},
				},
				patterns: [
					{
						include: "#expression-element-list",
					},
				],
			},
			"subscript-expression": {
				begin: "(?<=[`\\p{L}_\\p{N}\\p{M}])\\s*(\\[)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.arguments.begin.swift",
					},
				},
				end: "\\]",
				endCaptures: {
					"0": {
						name: "punctuation.definition.arguments.end.swift",
					},
				},
				name: "meta.subscript-expression.swift",
				patterns: [
					{
						include: "#expression-element-list",
					},
				],
			},
		},
	},
	keywords: {
		patterns: [
			{
				match: "(?<!\\.)\\b(?:if|else|guard|where|switch|case|default|fallthrough)\\b",
				name: "keyword.control.branch.swift",
			},
			{
				match: "(?<!\\.)\\b(?:continue|break|fallthrough|return)\\b",
				name: "keyword.control.transfer.swift",
			},
			{
				match: "(?<!\\.)\\b(?:while|for|in)\\b",
				name: "keyword.control.loop.swift",
			},
			{
				captures: {
					"1": {
						name: "keyword.control.loop.swift",
					},
					"2": {
						name: "punctuation.whitespace.trailing.repeat.swift",
					},
				},
				comment: "extra scopes for repeat-while snippet",
				match: "(?<!\\.)\\b(repeat)\\b(\\s*)",
			},
			{
				match: "(?<!\\.)\\bdefer\\b",
				name: "keyword.control.defer.swift",
			},
			{
				captures: {
					"1": {
						name: "invalid.illegal.try-must-precede-await.swift",
					},
					"2": {
						name: "keyword.control.await.swift",
					},
				},
				match: "(?<!\\.)\\b(?:(await\\s+try)|(await)\\b)",
			},
			{
				match: "(?<!\\.)\\b(?:catch|throws?|rethrows|try)\\b|\\btry[?!]\\B",
				name: "keyword.control.exception.swift",
			},
			{
				captures: {
					"1": {
						name: "keyword.control.exception.swift",
					},
					"2": {
						name: "punctuation.whitespace.trailing.do.swift",
					},
				},
				comment: "extra scopes for do-catch snippet",
				match: "(?<!\\.)\\b(do)\\b(\\s*)",
			},
			{
				captures: {
					"1": {
						name: "keyword.control.async.swift",
					},
					"2": {
						name: "storage.modifier.swift",
					},
					"3": {
						name: "keyword.other.declaration-specifier.swift",
					},
				},
				match: "(?<!\\.)\\b(?:(?:(async)|(nonisolated))\\s+)?(let|var)\\b",
			},
			{
				match: "(?<!\\.)\\b(?:associatedtype|operator|typealias)\\b",
				name: "keyword.other.declaration-specifier.swift",
			},
			{
				match: "(?<!\\.)\\b(class|enum|extension|precedencegroup|protocol|struct|actor)\\b",
				name: "storage.type.$1.swift",
			},
			{
				match: "(?<!\\.)\\b(?:inout|static|final|lazy|mutating|nonmutating|optional|indirect|required|override|dynamic|convenience|infix|prefix|postfix)\\b",
				name: "storage.modifier.swift",
			},
			{
				match: "\\binit[?!]|\\binit\\b|(?<!\\.)\\b(?:func|deinit|subscript|didSet|get|set|willSet)\\b",
				name: "storage.type.function.swift",
			},
			{
				match: "(?<!\\.)\\b(?:fileprivate|private|internal|public|open)\\b",
				name: "keyword.other.declaration-specifier.accessibility.swift",
			},
			{
				comment:
					"matches weak, unowned, unowned(safe), unowned(unsafe)",
				match: "(?<!\\.)\\bunowned\\((?:safe|unsafe)\\)|(?<!\\.)\\b(?:weak|unowned)\\b",
				name: "keyword.other.capture-specifier.swift",
			},
			{
				captures: {
					"1": {
						name: "keyword.operator.type.swift",
					},
					"2": {
						name: "keyword.operator.type.metatype.swift",
					},
				},
				match: "(?<=\\.)(?:(dynamicType|self)|(Protocol|Type))\\b",
			},
			{
				match: "(?<!\\.)\\b(?:super|self|Self)\\b",
				name: "variable.language.swift",
			},
			{
				match: "\\B(?:#file|#filePath|#fileID|#line|#column|#function|#dsohandle)\\b|\\b(?:__FILE__|__LINE__|__COLUMN__|__FUNCTION__|__DSO_HANDLE__)\\b",
				name: "support.variable.swift",
			},
			{
				match: "(?<!\\.)\\bimport\\b",
				name: "keyword.control.import.swift",
			},
		],
	},
	literals: {
		patterns: [
			{
				include: "#boolean",
			},
			{
				include: "#numeric",
			},
			{
				include: "#string",
			},
			{
				match: "\\bnil\\b",
				name: "constant.language.nil.swift",
			},
			{
				comment: 'object "literals" used in playgrounds',
				match: "\\B#(colorLiteral|imageLiteral|fileLiteral)\\b",
				name: "support.function.object-literal.swift",
			},
			{
				match: "\\B#keyPath\\b",
				name: "support.function.key-path.swift",
			},
			{
				begin: "\\B(#selector)(\\()(?:\\s*(getter|setter)\\s*(:))?",
				beginCaptures: {
					"1": {
						name: "support.function.selector-reference.swift",
					},
					"2": {
						name: "punctuation.definition.arguments.begin.swift",
					},
					"3": {
						name: "support.variable.parameter.swift",
					},
					"4": {
						name: "punctuation.separator.argument-label.swift",
					},
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.arguments.end.swift",
					},
				},
				patterns: [
					{
						include: "#expressions",
					},
				],
			},
		],
		repository: {
			boolean: {
				match: "\\b(true|false)\\b",
				name: "constant.language.boolean.swift",
			},
			numeric: {
				patterns: [
					{
						comment: "0.1, -4_2.5, 6.022e23, 10E-5",
						match: "(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)[0-9][0-9_]*(?=\\.[0-9]|[eE])(?:\\.[0-9][0-9_]*)?(?:[eE][-+]?[0-9][0-9_]*)?\\b(?!\\.[0-9])",
						name: "constant.numeric.float.decimal.swift",
					},
					{
						comment: "-0x1.ap2_3, 0x31p-4",
						match: "(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)(0x[0-9a-fA-F][0-9a-fA-F_]*)(?:\\.[0-9a-fA-F][0-9a-fA-F_]*)?[pP][-+]?[0-9][0-9_]*\\b(?!\\.[0-9])",
						name: "constant.numeric.float.hexadecimal.swift",
					},
					{
						comment: "0x1p, 0x1p_2, 0x1.5pa, 0x1.1p+1f, 0x1pz",
						match: "(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)(0x[0-9a-fA-F][0-9a-fA-F_]*)(?:\\.[0-9a-fA-F][0-9a-fA-F_]*)?(?:[pP][-+]?\\w*)\\b(?!\\.[0-9])",
						name: "invalid.illegal.numeric.float.invalid-exponent.swift",
					},
					{
						comment:
							"0x1.5w (note that 0x1.f may be a valid expression)",
						match: "(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)(0x[0-9a-fA-F][0-9a-fA-F_]*)\\.[0-9][\\w.]*",
						name: "invalid.illegal.numeric.float.missing-exponent.swift",
					},
					{
						comment:
							"-.5, .2f (note that 1.-.5 may be a valid expression)",
						match: "(?<=\\s|^)\\-?\\.[0-9][\\w.]*",
						name: "invalid.illegal.numeric.float.missing-leading-zero.swift",
					},
					{
						comment: "0b_0_1, 0x_1p+3q",
						match: "(\\B\\-|\\b)0[box]_[0-9a-fA-F_]*(?:[pPeE][+-]?\\w+)?[\\w.]+",
						name: "invalid.illegal.numeric.leading-underscore.swift",
					},
					{
						comment:
							"tuple positional member: not really a numeric literal, but not invalid",
						match: "(?<=[\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)[0-9]+\\b",
					},
					{
						comment: "0b010, 0b1_0",
						match: "(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)0b[01][01_]*\\b(?!\\.[0-9])",
						name: "constant.numeric.integer.binary.swift",
					},
					{
						comment: "0o1, 0o7_3",
						match: "(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)0o[0-7][0-7_]*\\b(?!\\.[0-9])",
						name: "constant.numeric.integer.octal.swift",
					},
					{
						comment: "02, 3_456",
						match: "(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)[0-9][0-9_]*\\b(?!\\.[0-9])",
						name: "constant.numeric.integer.decimal.swift",
					},
					{
						comment: "0x4, 0xF_7",
						match: "(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)0x[0-9a-fA-F][0-9a-fA-F_]*\\b(?!\\.[0-9])",
						name: "constant.numeric.integer.hexadecimal.swift",
					},
					{
						match: "(\\B\\-|\\b)[0-9][\\w.]*",
						name: "invalid.illegal.numeric.other.swift",
					},
				],
			},
			string: {
				patterns: [
					{
						begin: '"""',
						beginCaptures: {
							"0": {
								name: "punctuation.definition.string.begin.swift",
							},
						},
						comment: "SE-0168: Multi-Line String Literals",
						end: '"""(#*)',
						endCaptures: {
							"0": {
								name: "punctuation.definition.string.end.swift",
							},
							"1": {
								name: "invalid.illegal.extra-closing-delimiter.swift",
							},
						},
						name: "string.quoted.double.block.swift",
						patterns: [
							{
								match: '\\G.+(?=""")|\\G.+',
								name: "invalid.illegal.content-after-opening-delimiter.swift",
							},
							{
								match: "\\\\\\s*\\n",
								name: "constant.character.escape.newline.swift",
							},
							{
								include: "#string-guts",
							},
							{
								comment:
									'Allow \\("""...""") to appear inside a block string',
								match: '\\S((?!\\\\\\().)*(?=""")',
								name: "invalid.illegal.content-before-closing-delimiter.swift",
							},
						],
					},
					{
						begin: '#"""',
						beginCaptures: {
							"0": {
								name: "punctuation.definition.string.begin.swift",
							},
						},
						end: '"""#(#*)',
						endCaptures: {
							"0": {
								name: "punctuation.definition.string.end.swift",
							},
							"1": {
								name: "invalid.illegal.extra-closing-delimiter.swift",
							},
						},
						name: "string.quoted.double.block.raw.swift",
						patterns: [
							{
								match: '\\G.+(?=""")|\\G.+',
								name: "invalid.illegal.content-after-opening-delimiter.swift",
							},
							{
								match: "\\\\#\\s*\\n",
								name: "constant.character.escape.newline.swift",
							},
							{
								include: "#raw-string-guts",
							},
							{
								comment:
									'Allow \\("""...""") to appear inside a block string',
								match: '\\S((?!\\\\#\\().)*(?=""")',
								name: "invalid.illegal.content-before-closing-delimiter.swift",
							},
						],
					},
					{
						begin: '(##+)"""',
						beginCaptures: {
							"0": {
								name: "punctuation.definition.string.begin.swift",
							},
						},
						end: '"""\\1(#*)',
						endCaptures: {
							"0": {
								name: "punctuation.definition.string.end.swift",
							},
							"1": {
								name: "invalid.illegal.extra-closing-delimiter.swift",
							},
						},
						name: "string.quoted.double.block.raw.swift",
						patterns: [
							{
								match: '\\G.+(?=""")|\\G.+',
								name: "invalid.illegal.content-after-opening-delimiter.swift",
							},
						],
					},
					{
						begin: '"',
						beginCaptures: {
							"0": {
								name: "punctuation.definition.string.begin.swift",
							},
						},
						end: '"(#*)',
						endCaptures: {
							"0": {
								name: "punctuation.definition.string.end.swift",
							},
							"1": {
								name: "invalid.illegal.extra-closing-delimiter.swift",
							},
						},
						name: "string.quoted.double.single-line.swift",
						patterns: [
							{
								match: "\\r|\\n",
								name: "invalid.illegal.returns-not-allowed.swift",
							},
							{
								include: "#string-guts",
							},
						],
					},
					{
						begin: '(##+)"',
						beginCaptures: {
							"0": {
								name: "punctuation.definition.string.begin.raw.swift",
							},
						},
						comment:
							"SE-0168: raw string literals (more than one #, grammar limitations prevent us from supporting escapes)",
						end: '"\\1(#*)',
						endCaptures: {
							"0": {
								name: "punctuation.definition.string.end.raw.swift",
							},
							"1": {
								name: "invalid.illegal.extra-closing-delimiter.swift",
							},
						},
						name: "string.quoted.double.single-line.raw.swift",
						patterns: [
							{
								match: "\\r|\\n",
								name: "invalid.illegal.returns-not-allowed.swift",
							},
						],
					},
					{
						begin: '#"',
						beginCaptures: {
							"0": {
								name: "punctuation.definition.string.begin.raw.swift",
							},
						},
						comment:
							"SE-0168: raw string literals (one #, escapes supported)",
						end: '"#(#*)',
						endCaptures: {
							"0": {
								name: "punctuation.definition.string.end.raw.swift",
							},
							"1": {
								name: "invalid.illegal.extra-closing-delimiter.swift",
							},
						},
						name: "string.quoted.double.single-line.raw.swift",
						patterns: [
							{
								match: "\\r|\\n",
								name: "invalid.illegal.returns-not-allowed.swift",
							},
							{
								include: "#raw-string-guts",
							},
						],
					},
				],
				repository: {
					"raw-string-guts": {
						comment:
							"the same as #string-guts but with # in escapes",
						patterns: [
							{
								match: "\\\\#[0\\\\tnr\"']",
								name: "constant.character.escape.swift",
							},
							{
								match: "\\\\#u\\{[0-9a-fA-F]{1,8}\\}",
								name: "constant.character.escape.unicode.swift",
							},
							{
								begin: "\\\\#\\(",
								beginCaptures: {
									"0": {
										name: "punctuation.section.embedded.begin.swift",
									},
								},
								contentName: "source.swift",
								end: "(\\))",
								endCaptures: {
									"0": {
										name: "punctuation.section.embedded.end.swift",
									},
									"1": {
										name: "source.swift",
									},
								},
								name: "meta.embedded.line.swift",
								patterns: [
									{
										include: "$self",
									},
									{
										begin: "\\(",
										comment: "Nested parens",
										end: "\\)",
									},
								],
							},
							{
								match: "\\\\#.",
								name: "invalid.illegal.escape-not-recognized",
							},
						],
					},
					"string-guts": {
						patterns: [
							{
								match: "\\\\[0\\\\tnr\"']",
								name: "constant.character.escape.swift",
							},
							{
								match: "\\\\u\\{[0-9a-fA-F]{1,8}\\}",
								name: "constant.character.escape.unicode.swift",
							},
							{
								begin: "\\\\\\(",
								beginCaptures: {
									"0": {
										name: "punctuation.section.embedded.begin.swift",
									},
								},
								contentName: "source.swift",
								end: "(\\))",
								endCaptures: {
									"0": {
										name: "punctuation.section.embedded.end.swift",
									},
									"1": {
										name: "source.swift",
									},
								},
								name: "meta.embedded.line.swift",
								patterns: [
									{
										include: "$self",
									},
									{
										begin: "\\(",
										comment: "Nested parens",
										end: "\\)",
									},
								],
							},
							{
								match: "\\\\.",
								name: "invalid.illegal.escape-not-recognized",
							},
						],
					},
				},
			},
		},
	},
	operators: {
		patterns: [
			{
				comment: "Type casting",
				match: "\\b(is\\b|as([!?]\\B|\\b))",
				name: "keyword.operator.type-casting.swift",
			},
			{
				begin: "(?x)\n\t\t\t\t\t\t(?=\n\t\t\t\t\t\t\t(?<oph>\t\t\t\t\t\t\t\t# operator-head\n\t\t\t\t\t\t\t\t[/=\\-+!*%<>&|^~?]\n\t\t\t\t\t\t\t  | [\\x{00A1}-\\x{00A7}]\n\t\t\t\t\t\t\t  | [\\x{00A9}\\x{00AB}]\n\t\t\t\t\t\t\t  | [\\x{00AC}\\x{00AE}]\n\t\t\t\t\t\t\t  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]\n\t\t\t\t\t\t\t  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]\n\t\t\t\t\t\t\t  | [\\x{2030}-\\x{203E}]\n\t\t\t\t\t\t\t  | [\\x{2041}-\\x{2053}]\n\t\t\t\t\t\t\t  | [\\x{2055}-\\x{205E}]\n\t\t\t\t\t\t\t  | [\\x{2190}-\\x{23FF}]\n\t\t\t\t\t\t\t  | [\\x{2500}-\\x{2775}]\n\t\t\t\t\t\t\t  | [\\x{2794}-\\x{2BFF}]\n\t\t\t\t\t\t\t  | [\\x{2E00}-\\x{2E7F}]\n\t\t\t\t\t\t\t  | [\\x{3001}-\\x{3003}]\n\t\t\t\t\t\t\t  | [\\x{3008}-\\x{3030}]\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t  | \\.\n\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\\g<oph>\t\t\t\t\t\t\t# operator-head\n\t\t\t\t\t\t\t  | \\.\n\t\t\t\t\t\t\t  | [\\x{0300}-\\x{036F}]\t\t\t\t# operator-character\n\t\t\t\t\t\t\t  | [\\x{1DC0}-\\x{1DFF}]\n\t\t\t\t\t\t\t  | [\\x{20D0}-\\x{20FF}]\n\t\t\t\t\t\t\t  | [\\x{FE00}-\\x{FE0F}]\n\t\t\t\t\t\t\t  | [\\x{FE20}-\\x{FE2F}]\n\t\t\t\t\t\t\t  | [\\x{E0100}-\\x{E01EF}]\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t",
				comment: "This rule helps us speed up the matching.",
				end: "(?!\\G)",
				patterns: [
					{
						captures: {
							"0": {
								patterns: [
									{
										match: "\\G(\\+\\+|\\-\\-)$",
										name: "keyword.operator.increment-or-decrement.swift",
									},
									{
										match: "\\G(\\+|\\-)$",
										name: "keyword.operator.arithmetic.unary.swift",
									},
									{
										match: "\\G!$",
										name: "keyword.operator.logical.not.swift",
									},
									{
										match: "\\G~$",
										name: "keyword.operator.bitwise.not.swift",
									},
									{
										match: ".+",
										name: "keyword.operator.custom.prefix.swift",
									},
								],
							},
						},
						comment: "Prefix unary operator",
						match: "(?x)\n\t\t\t\t\t\t\t\t\\G\t\t\t\t\t\t\t\t\t\t# Matching from the beginning ensures\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t# that we start with operator-head\n\t\t\t\t\t\t\t\t(?<=^|[\\s(\\[{,;:])\n\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t(?!(//|/\\*|\\*/))\n\t\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t\t[/=\\-+!*%<>&|^~?]\t\t\t\t# operator-head\n\t\t\t\t\t\t\t\t\t  | [\\x{00A1}-\\x{00A7}]\n\t\t\t\t\t\t\t\t\t  | [\\x{00A9}\\x{00AB}]\n\t\t\t\t\t\t\t\t\t  | [\\x{00AC}\\x{00AE}]\n\t\t\t\t\t\t\t\t\t  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2030}-\\x{203E}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2041}-\\x{2053}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2055}-\\x{205E}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2190}-\\x{23FF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2500}-\\x{2775}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2794}-\\x{2BFF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2E00}-\\x{2E7F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{3001}-\\x{3003}]\n\t\t\t\t\t\t\t\t\t  | [\\x{3008}-\\x{3030}]\n\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t  | [\\x{0300}-\\x{036F}]\t\t\t\t# operator-character\n\t\t\t\t\t\t\t\t\t  | [\\x{1DC0}-\\x{1DFF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{20D0}-\\x{20FF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{FE00}-\\x{FE0F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{FE20}-\\x{FE2F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{E0100}-\\x{E01EF}]\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)++\n\t\t\t\t\t\t\t\t(?![\\s)\\]},;:]|\\z)\n\t\t\t\t\t\t\t",
					},
					{
						captures: {
							"0": {
								patterns: [
									{
										match: "\\G(\\+\\+|\\-\\-)$",
										name: "keyword.operator.increment-or-decrement.swift",
									},
									{
										match: "\\G!$",
										name: "keyword.operator.increment-or-decrement.swift",
									},
									{
										match: ".+",
										name: "keyword.operator.custom.postfix.swift",
									},
								],
							},
						},
						comment: "Postfix unary operator",
						match: "(?x)\n\t\t\t\t\t\t\t\t\\G\t\t\t\t\t\t\t\t\t\t# Matching from the beginning ensures\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t# that we start with operator-head\n\t\t\t\t\t\t\t\t(?<!^|[\\s(\\[{,;:])\n\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t(?!(//|/\\*|\\*/))\n\t\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t\t[/=\\-+!*%<>&|^~?]\t\t\t\t# operator-head\n\t\t\t\t\t\t\t\t\t  | [\\x{00A1}-\\x{00A7}]\n\t\t\t\t\t\t\t\t\t  | [\\x{00A9}\\x{00AB}]\n\t\t\t\t\t\t\t\t\t  | [\\x{00AC}\\x{00AE}]\n\t\t\t\t\t\t\t\t\t  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2030}-\\x{203E}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2041}-\\x{2053}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2055}-\\x{205E}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2190}-\\x{23FF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2500}-\\x{2775}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2794}-\\x{2BFF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2E00}-\\x{2E7F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{3001}-\\x{3003}]\n\t\t\t\t\t\t\t\t\t  | [\\x{3008}-\\x{3030}]\n\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t  | [\\x{0300}-\\x{036F}]\t\t\t\t# operator-character\n\t\t\t\t\t\t\t\t\t  | [\\x{1DC0}-\\x{1DFF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{20D0}-\\x{20FF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{FE00}-\\x{FE0F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{FE20}-\\x{FE2F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{E0100}-\\x{E01EF}]\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)++\n\t\t\t\t\t\t\t\t(?=[\\s)\\]},;:]|\\z)\n\t\t\t\t\t\t\t",
					},
					{
						captures: {
							"0": {
								patterns: [
									{
										match: "\\G=$",
										name: "keyword.operator.assignment.swift",
									},
									{
										match: "\\G(\\+|\\-|\\*|/|%|<<|>>|&|\\^|\\||&&|\\|\\|)=$",
										name: "keyword.operator.assignment.compound.swift",
									},
									{
										match: "\\G(\\+|\\-|\\*|/)$",
										name: "keyword.operator.arithmetic.swift",
									},
									{
										match: "\\G&(\\+|\\-|\\*)$",
										name: "keyword.operator.arithmetic.overflow.swift",
									},
									{
										match: "\\G%$",
										name: "keyword.operator.arithmetic.remainder.swift",
									},
									{
										match: "\\G(==|!=|>|<|>=|<=|~=)$",
										name: "keyword.operator.comparison.swift",
									},
									{
										match: "\\G\\?\\?$",
										name: "keyword.operator.coalescing.swift",
									},
									{
										match: "\\G(&&|\\|\\|)$",
										name: "keyword.operator.logical.swift",
									},
									{
										match: "\\G(&|\\||\\^|<<|>>)$",
										name: "keyword.operator.bitwise.swift",
									},
									{
										match: "\\G(===|!==)$",
										name: "keyword.operator.bitwise.swift",
									},
									{
										match: "\\G\\?$",
										name: "keyword.operator.ternary.swift",
									},
									{
										match: ".+",
										name: "keyword.operator.custom.infix.swift",
									},
								],
							},
						},
						comment: "Infix operator",
						match: "(?x)\n\t\t\t\t\t\t\t\t\\G\t\t\t\t\t\t\t\t\t\t# Matching from the beginning ensures\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t# that we start with operator-head\n\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t(?!(//|/\\*|\\*/))\n\t\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t\t[/=\\-+!*%<>&|^~?]\t\t\t\t# operator-head\n\t\t\t\t\t\t\t\t\t  | [\\x{00A1}-\\x{00A7}]\n\t\t\t\t\t\t\t\t\t  | [\\x{00A9}\\x{00AB}]\n\t\t\t\t\t\t\t\t\t  | [\\x{00AC}\\x{00AE}]\n\t\t\t\t\t\t\t\t\t  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2030}-\\x{203E}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2041}-\\x{2053}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2055}-\\x{205E}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2190}-\\x{23FF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2500}-\\x{2775}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2794}-\\x{2BFF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2E00}-\\x{2E7F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{3001}-\\x{3003}]\n\t\t\t\t\t\t\t\t\t  | [\\x{3008}-\\x{3030}]\n\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t  | [\\x{0300}-\\x{036F}]\t\t\t\t# operator-character\n\t\t\t\t\t\t\t\t\t  | [\\x{1DC0}-\\x{1DFF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{20D0}-\\x{20FF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{FE00}-\\x{FE0F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{FE20}-\\x{FE2F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{E0100}-\\x{E01EF}]\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)++\n\t\t\t\t\t\t\t",
					},
					{
						captures: {
							"0": {
								patterns: [
									{
										match: ".+",
										name: "keyword.operator.custom.prefix.dot.swift",
									},
								],
							},
						},
						comment: "Dot prefix unary operator",
						match: "(?x)\n\t\t\t\t\t\t\t\t\\G\t\t\t\t\t\t\t\t\t\t# Matching from the beginning ensures\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t# that we start with operator-head\n\t\t\t\t\t\t\t\t(?<=^|[\\s(\\[{,;:])\n\t\t\t\t\t\t\t\t\\.\t\t\t\t\t\t\t\t\t\t# dot\n\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t(?!(//|/\\*|\\*/))\n\t\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t\t\\.\t\t\t\t\t\t\t\t# dot\n\t\t\t\t\t\t\t\t\t  | [/=\\-+!*%<>&|^~?]\t\t\t\t# operator-head\n\t\t\t\t\t\t\t\t\t  | [\\x{00A1}-\\x{00A7}]\n\t\t\t\t\t\t\t\t\t  | [\\x{00A9}\\x{00AB}]\n\t\t\t\t\t\t\t\t\t  | [\\x{00AC}\\x{00AE}]\n\t\t\t\t\t\t\t\t\t  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2030}-\\x{203E}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2041}-\\x{2053}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2055}-\\x{205E}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2190}-\\x{23FF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2500}-\\x{2775}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2794}-\\x{2BFF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2E00}-\\x{2E7F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{3001}-\\x{3003}]\n\t\t\t\t\t\t\t\t\t  | [\\x{3008}-\\x{3030}]\n\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t  | [\\x{0300}-\\x{036F}]\t\t\t\t# operator-character\n\t\t\t\t\t\t\t\t\t  | [\\x{1DC0}-\\x{1DFF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{20D0}-\\x{20FF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{FE00}-\\x{FE0F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{FE20}-\\x{FE2F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{E0100}-\\x{E01EF}]\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)++\n\t\t\t\t\t\t\t\t(?![\\s)\\]},;:]|\\z)\n\t\t\t\t\t\t\t",
					},
					{
						captures: {
							"0": {
								patterns: [
									{
										match: ".+",
										name: "keyword.operator.custom.postfix.dot.swift",
									},
								],
							},
						},
						comment: "Dot postfix unary operator",
						match: "(?x)\n\t\t\t\t\t\t\t\t\\G\t\t\t\t\t\t\t\t\t\t# Matching from the beginning ensures\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t# that we start with operator-head\n\t\t\t\t\t\t\t\t(?<!^|[\\s(\\[{,;:])\n\t\t\t\t\t\t\t\t\\.\t\t\t\t\t\t\t\t\t\t# dot\n\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t(?!(//|/\\*|\\*/))\n\t\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t\t\\.\t\t\t\t\t\t\t\t# dot\n\t\t\t\t\t\t\t\t\t  | [/=\\-+!*%<>&|^~?]\t\t\t\t# operator-head\n\t\t\t\t\t\t\t\t\t  | [\\x{00A1}-\\x{00A7}]\n\t\t\t\t\t\t\t\t\t  | [\\x{00A9}\\x{00AB}]\n\t\t\t\t\t\t\t\t\t  | [\\x{00AC}\\x{00AE}]\n\t\t\t\t\t\t\t\t\t  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2030}-\\x{203E}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2041}-\\x{2053}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2055}-\\x{205E}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2190}-\\x{23FF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2500}-\\x{2775}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2794}-\\x{2BFF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2E00}-\\x{2E7F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{3001}-\\x{3003}]\n\t\t\t\t\t\t\t\t\t  | [\\x{3008}-\\x{3030}]\n\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t  | [\\x{0300}-\\x{036F}]\t\t\t\t# operator-character\n\t\t\t\t\t\t\t\t\t  | [\\x{1DC0}-\\x{1DFF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{20D0}-\\x{20FF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{FE00}-\\x{FE0F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{FE20}-\\x{FE2F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{E0100}-\\x{E01EF}]\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)++\n\t\t\t\t\t\t\t\t(?=[\\s)\\]},;:]|\\z)\n\t\t\t\t\t\t\t",
					},
					{
						captures: {
							"0": {
								patterns: [
									{
										match: "\\G\\.\\.[.<]$",
										name: "keyword.operator.range.swift",
									},
									{
										match: ".+",
										name: "keyword.operator.custom.infix.dot.swift",
									},
								],
							},
						},
						comment: "Dot infix operator",
						match: "(?x)\n\t\t\t\t\t\t\t\t\\G\t\t\t\t\t\t\t\t\t\t# Matching from the beginning ensures\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t# that we start with operator-head\n\t\t\t\t\t\t\t\t\\.\t\t\t\t\t\t\t\t\t\t# dot\n\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t(?!(//|/\\*|\\*/))\n\t\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t\t\\.\t\t\t\t\t\t\t\t# dot\n\t\t\t\t\t\t\t\t\t  | [/=\\-+!*%<>&|^~?]\t\t\t\t# operator-head\n\t\t\t\t\t\t\t\t\t  | [\\x{00A1}-\\x{00A7}]\n\t\t\t\t\t\t\t\t\t  | [\\x{00A9}\\x{00AB}]\n\t\t\t\t\t\t\t\t\t  | [\\x{00AC}\\x{00AE}]\n\t\t\t\t\t\t\t\t\t  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2030}-\\x{203E}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2041}-\\x{2053}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2055}-\\x{205E}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2190}-\\x{23FF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2500}-\\x{2775}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2794}-\\x{2BFF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{2E00}-\\x{2E7F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{3001}-\\x{3003}]\n\t\t\t\t\t\t\t\t\t  | [\\x{3008}-\\x{3030}]\n\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t  | [\\x{0300}-\\x{036F}]\t\t\t\t# operator-character\n\t\t\t\t\t\t\t\t\t  | [\\x{1DC0}-\\x{1DFF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{20D0}-\\x{20FF}]\n\t\t\t\t\t\t\t\t\t  | [\\x{FE00}-\\x{FE0F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{FE20}-\\x{FE2F}]\n\t\t\t\t\t\t\t\t\t  | [\\x{E0100}-\\x{E01EF}]\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)++\n\t\t\t\t\t\t\t",
					},
				],
			},
			{
				match: ":",
				name: "keyword.operator.ternary.swift",
			},
		],
	},
	root: {
		patterns: [
			{
				include: "#compiler-control",
			},
			{
				include: "#declarations",
			},
			{
				include: "#expressions",
			},
		],
	},
};
const swift_tmLanguage = {
	information_for_contributors: information_for_contributors,
	version: version,
	name: name,
	scopeName: scopeName,
	comment: comment,
	patterns: patterns,
	repository: repository,
};

export {
	comment,
	swift_tmLanguage as default,
	information_for_contributors,
	name,
	patterns,
	repository,
	scopeName,
	version,
};
