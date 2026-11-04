/* XWD Lab 2026-11-04: fictional public engineering learning exercise. */
(function(){
'use strict';
if(typeof lessons==='undefined'||typeof openLesson!=='function')return;
const id='test-evidence-chain-20261104';
if(lessons.some(x=>x.id===id))return;
lessons.unshift({
id,category:'测试与工程评审',title:'2026-11-04｜从测试数据到批准结论：建立可追溯证据链',time:22,
sections:[
['一句话核心判断','测试完成不等于验证通过；只有设计要求、受控配置、测量结果、预设判据和评审结论一一对应，才形成可审计的验证证据。'],
['为什么要做／解决什么问题','同一器件可能完成老化和功能试验，却仍缺少异常反馈、测量不确定度或恢复条件证据。避免以“跑完测试”替代“满足需求”的错误批准。'],
['底层原理与因果链','设计需求R→风险/失效模式F→验证用例T→样品配置C→原始记录D→判据A→结论J→缺陷/复测E。缺少任何关键环节，结论可能不可复现或不适用。特别注意观察值与判定值不同：采样误差、环境漂移、重复性都会影响判定。'],
['在AIDC项目中的位置','适用于DVT、部件替代、NPI试产、系统联调与变更评审。系统电气负责把电气接口和风险转化为可测要求；测试人员负责按批准规程执行；设计/质量按职责评审证据，正式批准遵循公司受控流程。'],
['工程师实际怎么做','①列出需求ID和来源版本；②为每个需求定义可测量量及通过判据；③冻结DUT型号/软硬件版本和测试环境；④记录仪器校准状态、原始数据与时间戳；⑤按预设判据判定通过/失败/证据不足；⑥失败关联问题单、原因分析与复测；⑦在评审表中明确批准范围、限制条件和待关闭事项。'],
['常见错误／失效模式','只存截图不存原始数据；试验后补写阈值；未记录样品版本；用供应商报告替代系统接口验证；把“无报警”当成监测链路正常；把一次合格外推至所有批次和环境。'],
['与已学知识的连接','昨天已学习风扇故障注入用例；今天向下游推进至记录、判定和评审。此前的接触器报告适用性审查也是同一证据链：报告适用边界必须与目标设计要求匹配。'],
['主动回忆（3—5题）','①为什么测试完成不等于验证通过？②没有DUT软件版本会产生什么风险？③原始波形和测试报告分别承担什么作用？④如何处理判据在试验前尚未批准的情况？⑤“证据不足”和“失败”有什么区别？'],
['真实工程情景题','完全虚构的教学案例：两款24V风扇在相同热负载下温升均满足预设阈值，但新风扇的故障反馈定义未确认，且只有界面截图，没有原始信号记录。项目希望直接批准替代。请填写一份“需求—证据—缺口—结论”审查摘要：指出哪些要求已获得有限支持、哪些仍不可判定、需补哪些记录，以及是否允许整体批准。'],
['达到“会”的判定标准','能够独立建立不少于4列的追溯表（需求/证据/判据/结论），明确至少3个证据缺口，提出可执行补测动作，并区分功能测试完成与正式批准。选择题正确仅证明知识检查通过；实际工程掌握须由独立作品与复核证实。']
],
q:'替代风扇热性能通过，但故障反馈定义未确认且缺少原始反馈数据。最恰当的评审结论是？',
opts:['热性能通过，因此整体替代可批准','热性能证据可有限引用，故障反馈仍证据不足，暂缓整体批准并补充验证','界面没有报警，因此反馈功能必然正常'],
answer:1,explain:'不同设计要求必须分别闭环；热性能合格不能自动证明故障诊断合格。'
});
const prior=window.openLesson,grade0=window.grade,key='xwd_daily_case_v2';
function read(){try{return JSON.parse(localStorage.getItem(key)||'{}')||{}}catch(e){return {}}}
window.openLesson=function(target){prior(target);if(target!==id)return;const article=document.querySelector('#view article');if(!article)return;const last=article.lastElementChild;const section=document.createElement('section');section.innerHTML='<h3>工程应用练习（约8分钟）</h3><p>仅使用虚构条件，不填写任何公司受控数据。请完成需求—证据—缺口—结论四部分；文本仅保存在本浏览器。</p>'+[['req','需求与判据'],['evidence','已有证据与适用边界'],['gap','缺口与补测动作'],['decision','批准结论与责任边界']].map(([k,t])=>'<label style="display:block;margin:12px 0">'+t+'<textarea data-case="'+k+'" rows="3" style="display:block;width:100%;margin-top:6px"></textarea></label>').join('')+'<button id="caseSave" type="button">保存练习草稿</button><p id="caseStatus" role="status"></p><p class="muted">保存仅检查填写完整性，不代表工程质量通过。</p>';article.insertBefore(section,last);const d=read()[id]||{};section.querySelectorAll('textarea').forEach(t=>t.value=d[t.dataset.case]||'');section.querySelector('#caseSave').onclick=()=>{const x={updatedAt:Date.now()};section.querySelectorAll('textarea').forEach(t=>x[t.dataset.case]=t.value.trim());if(['req','evidence','gap','decision'].some(k=>x[k].length<20)){section.querySelector('#caseStatus').textContent='请将四部分分别填写至少20字。';return}try{const all=read();all[id]=x;localStorage.setItem(key,JSON.stringify(all));section.querySelector('#caseStatus').textContent='草稿已保存在本浏览器；尚未评定实际工程能力。'}catch(e){section.querySelector('#caseStatus').textContent='保存失败，请检查浏览器存储权限。'}}};
window.grade=function(target){if(target===id){const d=read()[id];if(!d||['req','evidence','gap','decision'].some(k=>!d[k]||d[k].length<20)){const el=document.getElementById('result');if(el)el.textContent='请先保存四部分工程练习草稿。';return}}return grade0(target)};
stats();tab('courses');
})();