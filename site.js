(() => {
  const data = window.PORTFOLIO;
  const projects = new Map(data.projects.map(p => [p.slug, p]));
  const slides = [...document.querySelectorAll('.slide')];
  const dialog = document.getElementById('projectDialog');
  const $ = (s) => document.querySelector(s);
  const byId = (id) => document.getElementById(id);
  byId('statementText').textContent = data.meta.statement;
  byId('emailLink').href = `mailto:${data.meta.email}`;
  byId('emailLink').textContent = `${data.meta.email} ↗`;

  const slideIndex = { permanente: 'permanente', studies:'studies', space:'space', design:'design', image:'image', voice:'voice', contact:'contact' };
  const indexItems = [
    ['01','Permanente Inizio','permanente'],['02','Studies / constraints','studies'],['03','Space / interaction','space'],['04','Body / design','design'],['05','Sound / image','image'],['06','Voice / production','voice'],['07','Research archive','contact']
  ];
  byId('indexList').innerHTML = indexItems.map(([n,t,id]) => `<div class="index-item"><span class="n">${n}</span><button data-scroll="${id}">${t}</button><span>↘</span></div>`).join('');

  const escape = (s='') => s.replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const projectButton = (p, cls='project-tile') => `
    <button class="${cls}" data-project="${p.slug}">
      <img src="${p.image}" alt="${escape(p.title)}">
      <div class="${cls === 'project-tile' ? 'project-tile-copy' : cls === 'duo-card' ? 'duo-copy' : 'image-card-copy'}">
        <span>${escape(p.category)}</span><h3>${escape(p.title)}</h3>${cls==='project-tile'?`<p>${escape(p.summary)}</p>`:''}
      </div>
    </button>`;

  const studies = ['campo-aperto','superfluous','vox-mea-sum','nubivagus','wasalo'].map(s=>projects.get(s));
  byId('studyGrid').innerHTML = studies.map((p,i)=>`<button class="study-card" data-project="${p.slug}"><span class="num">0${i+1}</span><div><h3>${escape(p.title)}</h3><p>${escape(p.summary)}</p></div><span class="mini">${escape(p.format)} · open ↗</span></button>`).join('');
  byId('spaceProjects').innerHTML = ['acid-reign','air-controller','sonic-shuffle'].map(s=>projectButton(projects.get(s))).join('');
  byId('designProjects').innerHTML = ['arwe','pinacoteca'].map(s=>projectButton(projects.get(s),'duo-card')).join('');
  byId('imageProjects').innerHTML = ['margherita-data','la-caduta-di-troia','pinvision','la-nave'].map(s=>projectButton(projects.get(s),'image-card')).join('');
  byId('voiceProjects').innerHTML = ['tide','poesia'].map(s=>{const p=projects.get(s);return `<button class="voice-row" data-project="${p.slug}"><h3>${escape(p.title)}</h3><span>${escape(p.category)} ↗</span></button>`}).join('');
  byId('archiveProjects').innerHTML = ['dancing-motion','archi'].map(s=>{const p=projects.get(s);return `<button class="archive-row" data-project="${p.slug}"><strong>${escape(p.title)}</strong><span>${escape(p.format)} ↗</span></button>`}).join('') + `<a class="archive-row" href="assets/docs/tesi.pdf" target="_blank"><strong>Thesis — Suono come progetto</strong><span>PDF ↗</span></a>`;

  function openProject(slug){
    const p=projects.get(slug); if(!p) return;
    byId('dialogImage').src=p.image; byId('dialogImage').alt=p.title;
    byId('dialogMeta').textContent=`${p.year} · ${p.category} · ${p.format}`;
    byId('dialogTitle').textContent=p.title; byId('dialogSummary').textContent=p.summary;
    byId('dialogTags').innerHTML=(p.tags||[]).map(t=>`<span class="tag">${escape(t)}</span>`).join('');
    byId('dialogAudio').innerHTML=(p.audio||[]).map(a=>`<div class="audio-item"><div class="audio-label">${escape(a.label)}</div><audio controls preload="none" src="${a.src}"></audio></div>`).join('');
    byId('dialogLinks').innerHTML=(p.links||[]).map(l=>`<a href="${l.href}" ${l.download?'download':''} target="_blank" rel="noopener">${escape(l.label)} ↗</a>`).join('');
    dialog.showModal();
  }
  document.addEventListener('click', e=>{
    const projectEl=e.target.closest('[data-project]'); if(projectEl){openProject(projectEl.dataset.project); return;}
    const scrollEl=e.target.closest('[data-scroll]'); if(scrollEl){byId(scrollEl.dataset.scroll)?.scrollIntoView({behavior:'smooth'});}
    const goto=e.target.closest('[data-goto]'); if(goto){byId(goto.dataset.goto)?.scrollIntoView({behavior:'smooth'});}
    if(e.target.closest('[data-next]')) go(1);
  });
  byId('dialogClose').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
  byId('printBtn').addEventListener('click',()=>window.print());

  let current=0;
  const progress=byId('progress');
  function go(delta){current=Math.max(0,Math.min(slides.length-1,current+delta));slides[current].scrollIntoView({behavior:'smooth'});}
  byId('prevBtn').addEventListener('click',()=>go(-1)); byId('nextBtn').addEventListener('click',()=>go(1));
  document.addEventListener('keydown',e=>{if(dialog.open)return;if(['ArrowDown','PageDown','ArrowRight'].includes(e.key)){e.preventDefault();go(1)}if(['ArrowUp','PageUp','ArrowLeft'].includes(e.key)){e.preventDefault();go(-1)}if(e.key==='Escape'&&dialog.open)dialog.close()});
  const obs=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting&&entry.intersectionRatio>.55){current=slides.indexOf(entry.target);progress.textContent=`${String(current+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;history.replaceState(null,'',`#${entry.target.id}`)}})},{threshold:[.55]});slides.forEach(s=>obs.observe(s));
  const cursor=$('.cursor-dot');document.addEventListener('pointermove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});
})();
