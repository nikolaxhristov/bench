#!/bin/bash

hyperfine \
	--runs 1 \
	--show-output \
	--export-markdown ./bench/nikolaxhristov/pipeline/no-cache.md \
	'node ./dist/bench/nikolaxhristov/pipeline/compression.no-cache.js'

hyperfine \
	--runs 1 \
	--show-output \
	--export-markdown ./bench/nikolaxhristov/pipeline/cache.md \
	'node ./dist/bench/nikolaxhristov/pipeline/compression.cache.js'

{
	printf '# benchmarks\n'
	printf '\n## @nikolaxhristov/pipeline no-cache\n'
	cat ./bench/nikolaxhristov/pipeline/no-cache.md
	printf '\n## @nikolaxhristov/pipeline cache\n'
	cat ./bench/nikolaxhristov/pipeline/cache.md
} >README.md
