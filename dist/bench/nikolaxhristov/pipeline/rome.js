import{pipeline as l,files as n}from"@nikolarhristov/pipeline";import{Distribution as p,Rome as s}from"@rometools/js-api";import{resolve as r}from"path";import f from"../../../lib/astro-community/astro-rome/lib/get-config.js";const t=await s.create({distribution:p.NODE});t.applyConfiguration(JSON.parse(await f("rome.json"))),await new l({path:new Map([["./samples/nikolaxhristov/pipeline/","./output/nikolaxhristov/pipeline/"]]),files:"**/*.{js,mjs,cjs,ts}",pipeline:{wrote:async(i,e)=>t.formatContent(e,{filePath:r(i)}).content,failed:async i=>`Error: Cannot format file ${i}!`,accomplished:async(i,e,o,a)=>`Formatted ${i} in ${e}.`,fulfilled:async i=>`Successfully formatted a total of ${i.files} JS and TS ${i.files===1?"file":"files"}.`},logger:1}).process(),(await(await new n().in(new Map([["./samples/nikolaxhristov/pipeline/","./output/nikolaxhristov/pipeline/"]]))).by("**/*.{js,mjs,cjs,ts}")).apply({accomplished(i,e,o,a){},changed(i){},failed(i){},fulfilled(i){},passed(i,e){},read(i){},wrote(i,e){}});
