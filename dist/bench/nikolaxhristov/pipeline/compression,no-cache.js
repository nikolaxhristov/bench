import*as r from"fs";import o from"./lib/compression.js";var i=async()=>{try{await r.promises.rm("./samples/nikolaxhristov/pipeline/output/",{recursive:!0})}catch{}await o()};export{i as default};
