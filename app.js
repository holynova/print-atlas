document.head.insertAdjacentHTML('beforeend','<link rel="stylesheet" href="atlas-redesign.css"><link rel="stylesheet" href="atlas-motion.css"><link rel="stylesheet" href="atlas-prompt.css">');

const types=[
  {n:'01',name:'木刻新闻插图',label:'刀痕与大黑白',note:'以大面积黑白和清晰刀痕组织画面，适合有力度的新闻叙事。',person:'woodcut-figures.png',landscape:'woodcut-palace.png',sheep:'sheep-woodcut.png',zh:'木刻新闻插图，粗犷刀痕，大面积黑白，高对比，纸张纹理',en:'Woodcut news illustration, bold carved marks, large black-and-white masses, high contrast, paper grain'},
  {n:'02',name:'钢笔排线插图',label:'线的疏密成灰阶',note:'明暗由平行线、交叉线和线距慢慢织出来。',person:'pen-figures.png',landscape:'pen-palace.png',sheep:'sheep-pen.png',zh:'钢笔排线插图，交叉线条，细腻灰阶，黑白墨线，留白纸面',en:'Pen hatching illustration, crosshatch lines, delicate grayscale, black ink, white paper'},
  {n:'03',name:'黑白半调网点',label:'一个颜色，无数圆点',note:'同一张网格中，点越大，眼睛读到的灰阶越深。',person:'halftone-figures.png',landscape:'halftone-palace.png',sheep:'sheep-halftone.png',zh:'黑白半调网点插图，规则圆点，报纸印刷质感，高对比',en:'Black-and-white halftone illustration, regular dots, newspaper print texture, high contrast'},
  {n:'04',name:'CMYK 四色套印',label:'四色叠成一幅图',note:'不同网角的青、品红、黄、黑小点，在远处混成完整颜色。',person:'cmyk-figures.png',landscape:'cmyk-palace.png',sheep:'sheep-cmyk.png',zh:'CMYK 四色套印，彩色网点，错位叠印，复古报刊质感',en:'CMYK overprint, color halftone dots, slight registration shift, vintage newsprint'},
  {n:'05',name:'石版画',label:'油水相斥的柔雾',note:'蜡笔和墨洗留下手的力度，灰阶带着粉性和呼吸感。',person:'litho-figures.png',landscape:'litho-palace.png',sheep:'sheep-litho.png',zh:'石版画，蜡笔与墨洗，柔和灰调，粉性纸张，手绘笔触',en:'Lithograph, crayon and ink wash, soft gray tones, chalky paper, hand-drawn marks'},
  {n:'06',name:'丝网印刷',label:'色块与漏墨',note:'每一种颜色是一层网版，边缘平整，色块明亮。',person:'screen-figures.png',landscape:'screen-palace.png',sheep:'sheep-screen.png',zh:'丝网印刷，有限色块，平整边缘，厚墨色彩，海报感',en:'Screen print, limited flat colors, crisp edges, thick ink, poster feel'},
  {n:'07',name:'蚀刻与飞尘法',label:'凹槽与随机颗粒',note:'细线来自被腐蚀的版面，灰调来自不规则的松香颗粒。',person:'etch-figures.png',landscape:'etch-palace.png',sheep:'sheep-etch.png',zh:'蚀刻与飞尘版画，细密腐蚀线，随机颗粒，深棕黑墨，旧纸',en:'Etching and aquatint, fine bitten lines, random grain, deep sepia ink, aged paper'}
];

const specimen=(type,file,kind,extraClass='')=>`<figure class="specimen-image ${extraClass}"><img src="assets/${file}" width="1536" height="1024" alt="${type.name}${kind}案例"><figcaption>${kind}</figcaption></figure>`;
const promptLine=(lang,text,label)=>`<div class="prompt-line"><span>${lang}</span><code>${text}</code><button type="button" class="copy-prompt" data-copy="${encodeURIComponent(text)}" data-label="${label}" aria-label="${label}">${label}</button></div>`;
const promptPanel=type=>`<aside class="prompt-panel" aria-label="${type.name}作图提示词"><p>作图提示词</p>${promptLine('中文',type.zh,'复制中文')}${promptLine('EN',type.en,'Copy English')}</aside>`;
document.querySelector('#taxonomy').innerHTML=`<div class="language-heading"><p class="eyebrow">01 / 七种语言</p><h2>每一种语言，<br>都看三幅图。</h2><p>同一个世界，换一种印刷方法，线条、颗粒、黑白与颜色的说话方式都会改变。</p></div><div class="language-wall">${types.map(type=>`<article class="language-row"><header><span>${type.n}</span><div><h3>${type.name}</h3><p>${type.label}</p></div><small>${type.note}</small></header><div><div class="specimen-pair">${specimen(type,type.person,'人物图')}${specimen(type,type.landscape,'风景图')}${specimen(type,type.sheep,'羊图','sheep-sample')}</div>${promptPanel(type)}</div></article>`).join('')}</div>`;

const processCard=(number,kicker,title,accent,body,image,alt,steps,question)=>`<article class="process-card"><div class="process-copy"><p class="museum-kicker">${number} / ${kicker}</p><h3>${title}<em>${accent}</em></h3><p>${body}</p><ol class="museum-steps">${steps.map((step,index)=>`<li><b>0${index+1}</b><div><strong>${step[0]}</strong><span>${step[1]}</span></div></li>`).join('')}</ol><p class="museum-question">小观察：<strong>${question}</strong></p></div><figure><img src="assets/${image}" width="1536" height="1024" alt="${alt}"></figure></article>`;
const processCards=[
  processCard('01','凸版 / 木刻、木口木刻、麻胶版','高起来的地方，','才会印到纸上。','先把不要的地方刻低。滚筒只碰得到高高的图案，像给一枚印章上色。','process-relief.png','凸版木刻的三步工艺图：在凸起的木板上滚墨，再用纸压印，得到黑色叶子图案。',[['刻出高低','图案留在高处，背景被刻低。'],['滚墨','油墨只滚到凸起的图案表面。'],['压到纸上','纸一压，叶子的形状就被带走了。']],'木刻的黑色大块和刀痕，为什么看起来很有力量？'),
  processCard('02','凹版 / 蚀刻、干刻、飞尘法','油墨躲进沟里，','纸把它吸出来。','凹版和印章正好相反。细线和小坑是藏墨的地方，版面表面要擦干净。','process-intaglio.png','凹版蚀刻的三步工艺图：墨进入铜板凹槽，擦掉表面油墨，再用湿纸和压印机印出线条。',[['让凹槽喝饱墨','油墨被推入腐蚀或刻出的细沟。'],['擦掉表面','留下沟里的墨，铜板表面露出来。'],['湿纸压进去','强大的压力让纸贴进沟槽，把墨带走。']],'为什么凹版线条常常很细、很有光泽？'),
  processCard('03','平版 / 石版画、现代胶印','石头是平的，','油和水不做朋友。','石版没有高和低。秘密在材料的脾气：水喜欢空白处，油墨只喜欢油性画过的图案。','process-planographic.png','平版石版画的三步工艺图：在平整石头上画油性图案，水留在空白处，油墨转印出月亮和星星。',[['用油性笔画图','在平整石头上画出亲油的图案。'],['先上水，再上墨','空白处留水拒绝油墨，图案抓住油墨。'],['把图像转到纸上','压印后，柔和的笔触就出现了。']],'为什么石版画很适合画云雾和手绘灰调？'),
  processCard('04','孔版 / 丝网印刷、漏版','能通过的网孔，','就是颜色的门。','把不想印的地方封住，留下图案的开口。刮板一推，油墨就从细网孔穿到纸上。','process-stencil.png','丝网孔版印刷的三步工艺图：在网版上遮住不要印的地方，用刮板推油墨穿过开孔，印出红色小鱼。',[['做一张网版','遮住背景，图案区域保持通透。'],['刮板推墨','油墨从未封住的网孔挤过去。'],['一色一层','想要更多颜色，就换另一张网版再印。']],'为什么丝网印刷的颜色常常又平又亮？')
];
document.querySelector('#process').innerHTML=`<div class="process-heading"><p class="eyebrow">02 / 工艺实验室</p><h2>四种转印关系，<br>一次看完整。</h2><p>看图时，请沿着每张图里的箭头走。油墨找到自己的位置，再被转移到纸上。</p></div><div class="process-wall">${processCards.join('')}</div><div class="screening-exhibit"><div><p class="eyebrow">报纸插图的小展柜</p><h3>照片，怎么变成小点？</h3><p>报纸和杂志常用网点制造明暗。点很小，近看像棋盘，退远一点，眼睛就会把它们合成一张有灰阶的图。</p></div><div class="screening-visual"><div class="screening-panel"><b>黑白半调网点</b><div class="tone-demo" aria-label="由小到大的黑色网点示意"><i class="tone t1"></i><i class="tone t2"></i><i class="tone t3"></i><i class="tone t4"></i></div><small>点越大，纸被盖住得越多，看起来越深。</small></div><div class="screening-panel"><b>四色套印</b><div class="museum-rosette" aria-label="青品红黄黑四色网点叠印示意"><i class="cyan"></i><i class="magenta"></i><i class="yellow"></i><i class="black"></i></div><small>四种颜色的小点交叠，远看会混成丰富的颜色。</small></div></div></div>`;

document.querySelector('#cases').remove();

const writeClipboard=async text=>{
  if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(text);return}
  const field=document.createElement('textarea');field.value=text;field.style.position='fixed';field.style.opacity='0';document.body.appendChild(field);field.select();document.execCommand('copy');field.remove();
};
document.addEventListener('click',async event=>{
  const button=event.target.closest('.copy-prompt');
  if(!button)return;
  const label=button.dataset.label;
  try{await writeClipboard(decodeURIComponent(button.dataset.copy));button.textContent=label==='复制中文'?'已复制':'Copied'}catch{button.textContent='复制失败'}
  setTimeout(()=>{button.textContent=label},1200);
});

const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduceMotion){
  document.documentElement.classList.add('motion-ready');
  const reveals=[...document.querySelectorAll('.language-heading,.process-heading,.language-row,.process-card,.screening-exhibit,.magnifier,.cta')];
  reveals.forEach((element,index)=>{element.classList.add('reveal');element.style.setProperty('--reveal-delay',`${Math.min(index%4,3)*55}ms`)});
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -24px'});
    reveals.forEach(element=>observer.observe(element));
  }else reveals.forEach(element=>element.classList.add('is-visible'));
}
