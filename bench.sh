#!/bin/bash

hyperfine \
	--runs 1 \
	--show-output \
	--export-markdown ./bench/nikolaxhristov/pipeline/critters.md \
	'node ./dist/bench/nikolaxhristov/pipeline/critters.js'

hyperfine \
	--runs 1 \
	--show-output \
	--export-markdown ./bench/nikolaxhristov/pipeline/rome.md \
	'node ./dist/bench/nikolaxhristov/pipeline/rome.js'

hyperfine \
	--runs 1 \
	--show-output \
	--export-markdown ./bench/nikolaxhristov/pipeline/compress.md \
	'node ./dist/bench/nikolaxhristov/pipeline/compress.js'

{
	printf '# benchmarks\n'
	printf '\n## @nikolarhristov/pipeline critters\n'
	cat ./bench/nikolaxhristov/pipeline/critters.md
	printf '\n## @nikolarhristov/pipeline rome\n'
	cat ./bench/nikolaxhristov/pipeline/rome.md
	printf '\n## @nikolarhristov/pipeline compress\n'
	cat ./bench/nikolaxhristov/pipeline/compress.md
} >README.md
