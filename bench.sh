#!/bin/bash

mkdir -p ./bench/nikolaxhristov/pipeline/
touch ./bench/nikolaxhristov/pipeline/cache.md

mkdir -p ./bench/nikolaxhristov/pipeline/
touch ./bench/nikolaxhristov/pipeline/no-cache.md

hyperfine \
	--runs 3 \
	--warmup 3 \
	--show-output \
	--export-markdown ./bench/nikolaxhristov/pipeline/no-cache.md \
	'pnpm run test:nikolaxhristov:pipeline:compression:no-cache'

hyperfine \
	--runs 3 \
	--warmup 3 \
	--show-output \
	--export-markdown ./bench/nikolaxhristov/pipeline/cache.md \
	'pnpm run test:nikolaxhristov:pipeline:compression:cache'

{
	printf '# benchmarks\n'
	printf '\n## @nikolaxhristov/pipeline no-cache\n'
	cat ./bench/nikolaxhristov/pipeline/no-cache.md
	printf '\n## @nikolaxhristov/pipeline cache\n'
	cat ./bench/nikolaxhristov/pipeline/cache.md
} >README.md
