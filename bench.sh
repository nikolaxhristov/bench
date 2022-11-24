#!/bin/bash

hyperfine \
	--runs 1 \
	--export-markdown ./bench/nikolarhristov/pipeline/no-cache.md \
	'pnpm run test:nikolaxhristov:pipeline:compression:no-cache'

hyperfine \
	--runs 1 \
	--export-markdown ./bench/nikolarhristov/pipeline/cache.md \
	'pnpm run test:nikolaxhristov:pipeline:compression:cache'

{
	printf '# benchmarks\n'
	printf '\n## @nikolarhristov/pipeline no-cache\n'
	cat ./bench/nikolarhristov/pipeline/no-cache.md
	printf '\n## @nikolarhristov/pipeline cache\n'
	cat ./bench/nikolarhristov/pipeline/cache.md
} >README.md
