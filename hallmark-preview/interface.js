/* Scoped Impeccable polish: presentation only; existing storage and lessons stay intact. */
(function(){
  'use strict';
  const view=document.getElementById('view');
  function enhance(){
    document.querySelectorAll('.toolbar button').forEach(button=>{
      if(button.classList.contains('active'))button.setAttribute('aria-current','page');
      else button.removeAttribute('aria-current');
    });
    view.querySelectorAll('.lesson').forEach(card=>{
      if(card.querySelector('.lesson-actions'))return;
      const buttons=[...card.children].filter(node=>node.tagName==='BUTTON');
      if(buttons.length){
        const actions=document.createElement('div');actions.className='lesson-actions';
        buttons.forEach(button=>{button.style.marginLeft='';actions.appendChild(button)});
        card.appendChild(actions);
      }
      const status=[...card.children].find(node=>node.textContent.startsWith('V2 学习状态：'));
      if(status){status.className='lesson-status';status.style.marginTop='';}
    });
  }
  const observer=new MutationObserver(enhance);
  observer.observe(view,{childList:true});
  observer.observe(document.querySelector('.toolbar'),{subtree:true,attributes:true,attributeFilter:['class']});
  enhance();
  // Give keyboard users the newly opened content without moving focus on answer submission.
  for(const name of ['tab','openLesson','showAssess']){
    const original=window[name];
    window[name]=function(...args){const result=original.apply(this,args);enhance();view.focus({preventScroll:true});view.scrollIntoView({block:'start',behavior:'instant'});return result;};
  }
})();
