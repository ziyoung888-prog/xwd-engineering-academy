/* XWD Lab daily course 2026-11-03. Public fictional training only. */
(function(){
'use strict';
if(typeof lessons==='undefined'||typeof openLesson!=='function')return;
const id='fan-fault-test-20261103';
const draftKey='xwd_daily_case_v1';
if(lessons.some(l=>l.id===id))return;
const lesson={
id,category:'测试用例与异常保护',title:'2026-11-03｜风扇异常反馈：从需求写出可执行测试用例',time:22,
sections:[
['一句话核心判断','故障注入测试不是“让设备出故障看看反应”，而是把故障类型、受控试验边界、预期反馈、保护动作、可测判据和证据记录建立一一对应关系。'],
['为什么要做／解决什么问题','替代风扇可能在正常散热下表现接近，却在堵转、断线、反馈异常等情况下暴露不同的信号逻辑。若只记录“系统正常”，无法证明监测、告警和安全处置链路满足设计需求。目标是把模糊的测试要求改成可复现、可判定、可追溯的测试用例。'],
['底层原理与因果链','风扇供电→电机运行→转速/状态反馈→控制器采样与去抖→诊断判定→告警/降额/停机策略→记录与恢复。任一环节变化都可能造成误报、漏报或动作延迟。堵转不等同于反馈线短路；不同故障的电气风险与可观察结果不同。故障注入只能在经审批的安全台架中按正式规程实施，不在实际产品上自行短接线路。'],
['在 AIDC 项目中的位置','属于部件替代的DVT/系统集成验证：先由设计输入确定风扇控制和故障诊断要求，再在系统电气接口、BMS/控制软件和试验部门之间明确责任，最终形成“需求→用例→数据→结论→问题闭环”的证据链。'],
['工程师实际怎么做','①识别受控DUT版本、供电和信号接口；②从设计需求分别列正常启停、堵转、反馈丢失、线路异常及恢复场景；③每条用例写前置状态、授权注入方式、记录通道、预期告警与动作、最大允许延迟、恢复条件；④先确认安全评审和设备保护；⑤保存原始波形/日志并与用例编号关联；⑥不满足时建立缺陷单并复测。'],
['常见错误／失效模式','把“风扇停止”直接等同“堵转”；只观察界面不采集反馈信号；测试后才定义判据；忽略软件滤波/延迟与报警复位；更换部件后不核对接口极性和反馈定义；未经批准对真实高能量系统实施短路注入。'],
['与已学知识的连接','复用此前温度曲线对比的控制变量方法、接触器供应商报告的适用性边界，以及需求—验证追溯逻辑。热性能合格不能替代异常反馈合格；供应商报告可作参考，但系统接口行为仍需验证。'],
['主动回忆（先答再核对）','①为什么堵转和反馈线短路不能合并成一个用例？②“记录系统功能正常”缺少哪些可测量字段？③怎样把告警延迟写成可判定标准？④为什么要保存原始反馈信号与软件日志两类证据？'],
['真实工程情景题','完全虚构的教学案例：A、B两款24V风扇均可完成正常散热，B的转速反馈定义尚未确认。团队希望一天内批准替代。请写出三条最关键的测试用例（正常运行、反馈异常、恢复），每条包含前置条件、可观察量、判据和证据；注明哪些判据需从正式需求中获取，不能自行设定。请在下方填写你的方案。'],
['达到“会”的判定标准','E1：能解释监测—诊断—保护因果链；E2：能补齐三条用例的条件/动作/观察/判据/证据；E3：在授权环境下独立形成可执行测试表及异常闭环；E4：主动识别“反馈定义未确认”这一批准阻塞。本站的单题检查与情景草稿只记录练习完成，不代表E3/E4掌握或产品批准。']
],
q:'供应商尚未确认新风扇反馈信号定义，团队要求立即批准替代。最合适的判断是？',
opts:['两款风扇均能降温，直接批准','先做一次堵转即可，其他测试可以省略','暂缓批准反馈功能，核对接口定义并完成可判定的异常与恢复验证'],
answer:2,explain:'散热功能与故障诊断是不同验证目标；反馈定义未确认时，无法形成可信的异常判据。'
};
lessons.unshift(lesson);
const originalOpen=window.openLesson;
const originalGrade=window.grade;
function readDraft(){try{const v=JSON.parse(localStorage.getItem(draftKey)||'{}');return v&&typeof v==='object'?v:{}}catch(e){return {}}}
function ready(){const d=readDraft()[id];return d&&['conditions','criteria','evidence'].every(k=>typeof d[k]==='string'&&d[k].trim().length>=24)}
window.openLesson=function(target){
originalOpen(target);
if(target!==id)return;
const article=document.querySelector('#view article');
if(!article)return;
const check=article.lastElementChild;
const exercise=document.createElement('section');
exercise.innerHTML='<h3>工程情景练习（约8分钟）</h3><p>只填写虚构教学方案，禁止输入真实公司型号、接口、数据和客户信息。完成以下三项后再提交知识检查；文本只保存在本浏览器。</p>'+
'<label style="display:block;margin:12px 0">前置条件与安全边界<textarea id="dailyConditions" rows="3" style="display:block;width:100%;margin-top:6px" placeholder="DUT配置、测试许可、保护措施、正常运行基线……"></textarea></label>'+
'<label style="display:block;margin:12px 0">测试动作与量化判据<textarea id="dailyCriteria" rows="3" style="display:block;width:100%;margin-top:6px" placeholder="正常、反馈异常、恢复三个场景；判据来自哪份需求，哪些待确认……"></textarea></label>'+
'<label style="display:block;margin:12px 0">记录证据与问题闭环<textarea id="dailyEvidence" rows="3" style="display:block;width:100%;margin-top:6px" placeholder="信号波形、控制日志、时间戳、用例编号、复测证据……"></textarea></label>'+
'<button type="button" id="dailySaveCase">保存情景草稿</button><p id="dailyCaseStatus" role="status" aria-live="polite"></p><p class="muted">自检：是否覆盖正常/异常/恢复？是否明确可测量的反馈与动作？是否把待确认判据标为TBC？文字长度检查不等于工程质量审核。</p>';
article.insertBefore(exercise,check);
const d=readDraft()[id]||{};
for(const [field,k] of [['dailyConditions','conditions'],['dailyCriteria','criteria'],['dailyEvidence','evidence']])document.getElementById(field).value=d[k]||'';
document.getElementById('dailySaveCase').onclick=()=>{
const next={conditions:document.getElementById('dailyConditions').value.trim(),criteria:document.getElementById('dailyCriteria').value.trim(),evidence:document.getElementById('dailyEvidence').value.trim(),updatedAt:Date.now()};
if(['conditions','criteria','evidence'].some(k=>next[k].length<24)){document.getElementById('dailyCaseStatus').textContent='每项至少填写24字，覆盖具体工程条件、判据与证据。';return}
try{const all=readDraft();all[id]=next;localStorage.setItem(draftKey,JSON.stringify(all));document.getElementById('dailyCaseStatus').textContent='草稿已保存在本浏览器。可继续完成知识检查；尚未判定工程掌握。'}catch(e){document.getElementById('dailyCaseStatus').textContent='保存失败，请检查浏览器存储权限。'}
};
};
window.grade=function(target){
if(target===id&&!ready()){const el=document.getElementById('result');if(el)el.textContent='请先保存情景题草稿，再提交知识检查。';return}
return originalGrade(target);
};
stats();
tab('courses');
})();