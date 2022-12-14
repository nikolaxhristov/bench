const name = "min-light";
const type = "light";
const colors = {
	"activityBar.background": "#f6f6f6",
	"activityBar.foreground": "#9E9E9E",
	"activityBarBadge.background": "#616161",
	"badge.background": "#E0E0E0",
	"badge.foreground": "#616161",
	"button.background": "#757575",
	"button.hoverBackground": "#616161",
	"editor.background": "#ffffff",
	"editor.foreground": "#212121",
	"editor.lineHighlightBorder": "#f2f2f2",
	"editorBracketMatch.background": "#E7F3FF",
	"editorBracketMatch.border": "#c8e1ff",
	"editorGroupHeader.tabsBackground": "#f6f6f6",
	"editorGroupHeader.tabsBorder": "#fff",
	"editorIndentGuide.background": "#EEE",
	"editorLineNumber.activeForeground": "#757575",
	"editorLineNumber.foreground": "#CCC",
	"editorSuggestWidget.background": "#F3F3F3",
	"extensionButton.prominentBackground": "#000000AA",
	"extensionButton.prominentHoverBackground": "#000000BB",
	focusBorder: "#D0D0D0",
	foreground: "#757575",
	"gitDecoration.ignoredResourceForeground": "#AAAAAA",
	"input.border": "#E9E9E9",
	"list.activeSelectionBackground": "#EEE",
	"list.activeSelectionForeground": "#212121",
	"list.focusBackground": "#ddd",
	"list.focusForeground": "#212121",
	"list.highlightForeground": "#212121",
	"list.inactiveSelectionBackground": "#E0E0E0",
	"list.inactiveSelectionForeground": "#212121",
	"panel.background": "#fff",
	"panel.border": "#f4f4f4",
	"panelTitle.activeBorder": "#fff",
	"panelTitle.inactiveForeground": "#BDBDBD",
	"peekView.border": "#E0E0E0",
	"peekViewEditor.background": "#f8f8f8",
	"pickerGroup.foreground": "#000",
	"progressBar.background": "#000",
	"scrollbar.shadow": "#FFF",
	"sideBar.background": "#f6f6f6",
	"sideBar.border": "#f6f6f6",
	"sideBarSectionHeader.background": "#EEE",
	"sideBarTitle.foreground": "#999",
	"statusBar.background": "#f6f6f6",
	"statusBar.border": "#f6f6f6",
	"statusBar.debuggingBackground": "#f6f6f6",
	"statusBar.foreground": "#7E7E7E",
	"statusBar.noFolderBackground": "#f6f6f6",
	"statusBarItem.remoteForeground": "#7E7E7E",
	"statusBarItem.remoteBackground": "#f6f6f600",
	"statusBarItem.prominentBackground": "#0000001a",
	"tab.activeBorder": "#FFF",
	"tab.activeForeground": "#424242",
	"tab.border": "#f6f6f6",
	"tab.inactiveBackground": "#f6f6f6",
	"tab.inactiveForeground": "#BDBDBD",
	"tab.unfocusedActiveBorder": "#fff",
	"terminal.ansiBlack": "#333",
	"terminal.ansiBlue": "#e0e0e0",
	"terminal.ansiBrightBlack": "#a1a1a1",
	"terminal.ansiBrightBlue": "#6871ff",
	"terminal.ansiBrightCyan": "#57d9ad",
	"terminal.ansiBrightGreen": "#a3d900",
	"terminal.ansiBrightMagenta": "#a37acc",
	"terminal.ansiBrightRed": "#d6656a",
	"terminal.ansiBrightWhite": "#7E7E7E",
	"terminal.ansiBrightYellow": "#e7c547",
	"terminal.ansiCyan": "#4dbf99",
	"terminal.ansiGreen": "#77cc00",
	"terminal.ansiMagenta": "#9966cc",
	"terminal.ansiRed": "#D32F2F",
	"terminal.ansiWhite": "#c7c7c7",
	"terminal.ansiYellow": "#f29718",
	"terminal.background": "#fff",
	"textLink.activeForeground": "#000",
	"textLink.foreground": "#000",
	"titleBar.activeBackground": "#f6f6f6",
	"titleBar.border": "#FFFFFF00",
	"titleBar.inactiveBackground": "#f6f6f6",
	"inputOption.activeBackground": "#EDEDED",
	"debugIcon.continueForeground": "#6f42c1",
	"debugIcon.disconnectForeground": "#6f42c1",
	"debugIcon.pauseForeground": "#6f42c1",
	"debugIcon.restartForeground": "#1976D2",
	"debugIcon.startForeground": "#1976D2",
	"debugIcon.stepBackForeground": "#6f42c1",
	"debugIcon.stepIntoForeground": "#6f42c1",
	"debugIcon.stepOutForeground": "#6f42c1",
	"debugIcon.stepOverForeground": "#6f42c1",
	"debugIcon.stopForeground": "#1976D2",
	"debugIcon.breakpointCurrentStackframeForeground": "#1976D2",
	"debugIcon.breakpointDisabledForeground": "#848484",
	"debugIcon.breakpointForeground": "#D32F2F",
	"debugIcon.breakpointStackframeForeground": "#1976D2",
	"symbolIcon.classForeground": "#dd8500",
	"symbolIcon.enumeratorForeground": "#dd8500",
	"symbolIcon.eventForeground": "#dd8500",
	"symbolIcon.methodForeground": "#6f42c1",
	"symbolIcon.constructorForeground": "#6f42c1",
	"symbolIcon.functionForeground": "#6f42c1",
	"symbolIcon.fieldForeground": "#1976D2",
	"symbolIcon.interfaceForeground": "#1976D2",
	"symbolIcon.variableForeground": "#1976D2",
	"symbolIcon.enumeratorMemberForeground": "#1976D2",
	"diffEditor.removedTextBackground": "#e597af52",
	"diffEditor.insertedTextBackground": "#b7e7a44b",
};
const tokenColors = [
	{
		settings: {
			foreground: "#24292eff",
		},
	},
	{
		scope: [
			"keyword.operator.accessor",
			"meta.group.braces.round.function.arguments",
			"meta.template.expression",
			"markup.fenced_code meta.embedded.block",
		],
		settings: {
			foreground: "#24292eff",
		},
	},
	{
		scope: "emphasis",
		settings: {
			fontStyle: "italic",
		},
	},
	{
		scope: ["strong", "markup.heading.markdown", "markup.bold.markdown"],
		settings: {
			fontStyle: "bold",
		},
	},
	{
		scope: ["markup.italic.markdown"],
		settings: {
			fontStyle: "italic",
		},
	},
	{
		scope: "meta.link.inline.markdown",
		settings: {
			fontStyle: "underline",
			foreground: "#1976D2",
		},
	},
	{
		scope: ["string", "markup.fenced_code", "markup.inline"],
		settings: {
			foreground: "#2b5581",
		},
	},
	{
		scope: ["comment", "string.quoted.docstring.multi"],
		settings: {
			foreground: "#c2c3c5",
		},
	},
	{
		scope: [
			"constant.numeric",
			"constant.language",
			"constant.other.placeholder",
			"constant.character.format.placeholder",
			"variable.language.this",
			"variable.other.object",
			"variable.other.class",
			"variable.other.constant",
			"meta.property-name",
			"meta.property-value",
			"support",
		],
		settings: {
			foreground: "#1976D2",
		},
	},
	{
		scope: [
			"keyword",
			"storage.modifier",
			"storage.type",
			"storage.control.clojure",
			"entity.name.function.clojure",
			"entity.name.tag.yaml",
			"support.function.node",
			"support.type.property-name.json",
			"punctuation.separator.key-value",
			"punctuation.definition.template-expression",
		],
		settings: {
			foreground: "#D32F2F",
		},
	},
	{
		scope: "variable.parameter.function",
		settings: {
			foreground: "#FF9800",
		},
	},
	{
		scope: [
			"support.function",
			"entity.name.type",
			"entity.other.inherited-class",
			"meta.function-call",
			"meta.instance.constructor",
			"entity.other.attribute-name",
			"entity.name.function",
			"constant.keyword.clojure",
		],
		settings: {
			foreground: "#6f42c1",
		},
	},
	{
		scope: [
			"entity.name.tag",
			"string.quoted",
			"string.regexp",
			"string.interpolated",
			"string.template",
			"string.unquoted.plain.out.yaml",
			"keyword.other.template",
		],
		settings: {
			foreground: "#22863a",
		},
	},
	{
		scope: "token.info-token",
		settings: {
			foreground: "#316bcd",
		},
	},
	{
		scope: "token.warn-token",
		settings: {
			foreground: "#cd9731",
		},
	},
	{
		scope: "token.error-token",
		settings: {
			foreground: "#cd3131",
		},
	},
	{
		scope: "token.debug-token",
		settings: {
			foreground: "#800080",
		},
	},
	{
		scope: ["strong", "markup.heading.markdown", "markup.bold.markdown"],
		settings: {
			foreground: "#6f42c1",
		},
	},
	{
		scope: [
			"punctuation.definition.arguments",
			"punctuation.definition.dict",
			"punctuation.separator",
			"meta.function-call.arguments",
		],
		settings: {
			foreground: "#212121",
		},
	},
	{
		name: "[Custom] Markdown links",
		scope: [
			"markup.underline.link",
			"punctuation.definition.metadata.markdown",
		],
		settings: {
			foreground: "#22863a",
		},
	},
	{
		name: "[Custom] Markdown list",
		scope: ["beginning.punctuation.definition.list.markdown"],
		settings: {
			foreground: "#6f42c1",
		},
	},
	{
		name: "[Custom] Markdown punctuation definition brackets",
		scope: [
			"punctuation.definition.string.begin.markdown",
			"punctuation.definition.string.end.markdown",
			"string.other.link.title.markdown",
			"string.other.link.description.markdown",
		],
		settings: {
			foreground: "#d32f2f",
		},
	},
];
const minLight = {
	name: name,
	type: type,
	colors: colors,
	tokenColors: tokenColors,
};

export { colors, minLight as default, name, tokenColors, type };
