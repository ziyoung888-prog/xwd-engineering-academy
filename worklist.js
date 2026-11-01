/* Hallmark course worklist: presentation enrichment, no network requests. */
(function(){
  'use strict';
  const view=document.getElementById('view');
  function decorate(){
    view.querySelectorAll('.lesson').forEach(card=>{
      const pill=card.querySelector('.pill'),heading=card.querySelector('h3');
      if(pill&&heading&&pill.nextElementSibling===heading)heading.after(pill);
    });
  }
  new MutationObserver(decorate).observe(view,{childList:true,subtree:true});
  decorate();
})();
