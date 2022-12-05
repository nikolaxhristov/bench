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
	printf '\n## nikolahristov/pipeline critters\n'
	cat ./bench/nikolaxhristov/pipeline/critters.md
	printf '\n## nikolahristov/pipeline rome\n'
	cat ./bench/nikolaxhristov/pipeline/rome.md
	printf '\n## nikolahristov/pipeline compress\n'
	cat ./bench/nikolaxhristov/pipeline/compress.md
} >README.md
