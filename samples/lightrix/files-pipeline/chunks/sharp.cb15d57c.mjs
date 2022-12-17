import sharp from "sharp";
import {
	B as BaseSSRService,
	i as isOutputFormatSupportsAlpha,
} from "../entry.mjs";
import "html-escaper";
/* empty css                        */ import "http-cache-semantics";
import "kleur/colors";
import "node:fs/promises";
import "node:os";
import "node:path";
import "node:url";
import "magic-string";
import "node:stream";
import "slash";
import "image-size";
import "mime";
/* empty css                          */ import "svgo";
import "shiki";
/* empty css                          */ /* empty css                          */ /* empty css                           */ /* empty css                           */ /* empty css                           */ /* empty css                             */ import "date-fns";
/* empty css                            */ import "@astrojs/rss";
import "clsx";
/* empty css                           */ /* empty css                          */ /* empty css                           */
class SharpService extends BaseSSRService {
	async transform(inputBuffer, transform) {
		const sharpImage = sharp(inputBuffer, {
			failOnError: false,
			pages: -1,
		});
		sharpImage.rotate();
		if (transform.width || transform.height) {
			const width = transform.width && Math.round(transform.width);
			const height = transform.height && Math.round(transform.height);
			sharpImage.resize({
				width,
				height,
				fit: transform.fit,
				position: transform.position,
				background: transform.background,
			});
		}
		if (transform.format) {
			sharpImage.toFormat(transform.format, {
				quality: transform.quality,
			});
			if (
				transform.background &&
				!isOutputFormatSupportsAlpha(transform.format)
			) {
				sharpImage.flatten({ background: transform.background });
			}
		}
		const { data, info } = await sharpImage.toBuffer({
			resolveWithObject: true,
		});
		return {
			data,
			format: info.format,
		};
	}
}
const service = new SharpService();
var sharp_default = service;

export { sharp_default as default };
