import{pipeline as t}from"@nikolarhristov/pipeline";import{Distribution as l,Rome as a}from"@rometools/js-api";import{resolve as n}from"path";import s from"../../../lib/astro-community/astro-rome/lib/get-config.js";const e=await a.create({distribution:l.NODE});e.applyConfiguration(JSON.parse(await s("rome.json"))),await new t({path:new Map([["./samples/nikolaxhristov/pipeline/","./output/nikolaxhristov/pipeline/"]]),files:"**/*.{js,mjs,cjs,ts}",pipeline:{wrote:async(i,o)=>e.formatContent(o,{filePath:n(i)}).content,failed:async i=>`Error: Cannot format file ${i}!`,accomplished:async(i,o,r,p)=>`Formatted ${i} in ${o}.`,fulfilled:async i=>i.files>0?`Successfully formatted a total of ${i.files} JS and TS ${i.files===1?"file":"files"}.`:!1},logger:1}).process();
