#!/bin/bash

hyperfine \
	--runs 1 \
	--show-output \
	--export-markdown ./bench/lightrix/files-pipeline/critters.md \
	'node ./dist/bench/lightrix/files-pipeline/critters.js'

hyperfine \
	--runs 1 \
	--show-output \
	--export-markdown ./bench/lightrix/files-pipeline/rome.md \
	'node ./dist/bench/lightrix/files-pipeline/rome.js'

hyperfine \
	--runs 1 \
	--show-output \
	--export-markdown ./bench/lightrix/files-pipeline/compress.md \
	'node ./dist/bench/lightrix/files-pipeline/compress.js'

{
	printf '# benchmarks\n'
	printf '\n## files-pipeline critters\n'
	cat ./bench/lightrix/files-pipeline/critters.md
	printf '\n## files-pipeline rome\n'
	cat ./bench/lightrix/files-pipeline/rome.md
	printf '\n## files-pipeline compress\n'
	cat ./bench/lightrix/files-pipeline/compress.md
} >README.md
