import t from"@nikolarhristov/pipeline";import{BackendKind as a,Rome as l}from"@rometools/js-api";import{resolve as n}from"path";import s from"../../../lib/astro-community/astro-rome/lib/get-config.js";const o=await l.create({backendKind:a.NODE});await o.applyConfiguration(JSON.parse(await s("rome.json"))),await new t({path:new Map([["./samples/nikolaxhristov/pipeline/","./output/nikolaxhristov/pipeline/"]]),files:"**/*.{js,mjs,cjs,ts}",pipeline:{wrote:async(i,e)=>(await o.formatContent(e,{filePath:n(i)})).content,failed:async i=>`Error: Cannot format file ${i} !`,accomplished:async(i,e,p,r)=>`Formatted ${i} in ${e}.`,fulfilled:async i=>`Successfully formatted a total of ${i.files} JS and TS ${i.files===1?"file":"files"}.`},logger:1}).process();
