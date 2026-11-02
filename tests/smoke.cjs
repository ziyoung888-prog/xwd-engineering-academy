'use strict';
const fs=require('node:fs');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const html=fs.readFileSync('index.html','utf8');
const scripts=['v2.js','v3.js','interface.js','worklist.js','missions.js','cockpit.js','ability.js','circuit.js','backup-v4.js'];
const inline=html.match(/<script>([\s\S]*?)<\/script>/);
assert.ok(inline,'inline application script missing');
new vm.Script(inline[1],{filename:'inline.js'});
for(const name of scripts){
 const source=fs.readFileSync(name,'utf8');
 assert.ok(source.trim(),name+' is empty');
 assert.ok(html.includes('src="'+name+'"'),name+' missing from HTML');
 new vm.Script(source,{filename:name});
}
assert.ok(html.includes('xwd_academy_progress_v1'),'legacy progress key missing');
const v2=fs.readFileSync('v2.js','utf8');
const v3=fs.readFileSync('v3.js','utf8');
for(const symbol of ['showAssess','submitAssess','showRoadmap'])assert.ok(v2.includes(symbol),'missing V2 '+symbol);
for(const symbol of ['exportData','showBackup','showCases','caseView'])assert.ok(v3.includes(symbol),'missing V3 '+symbol);
const backup=fs.readFileSync('backup-v4.js','utf8');
for(const key of ['xwd_academy_progress_v1','xwd_academy_notes_v3','xwd_lab_missions_v1','xwd_lab_review_v1'])assert.ok(backup.includes(key),'backup key missing: '+key);
for(const name of ['v3.js','missions.js','cockpit.js','ability.js','circuit.js','backup-v4.js']){
 const code=fs.readFileSync(name,'utf8');
 assert.doesNotMatch(code,/\bfetch\s*\(|\bXMLHttpRequest\b|\bsendBeacon\s*\(/,name+' must not transmit local learning data');
}
console.log('PASS: all '+(scripts.length+1)+' scripts parse, HTML hooks exist, local keys preserved, and no network transmission calls detected.');
