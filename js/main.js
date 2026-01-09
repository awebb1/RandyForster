// Gallery toggle
const gt=document.getElementById('gallery-toggle'),g=document.getElementById('gallery'),tt=gt.querySelector('.cs-toggle-text');gt.addEventListener('click',()=>{g.classList.toggle('cs-expanded');tt.textContent=g.classList.contains('cs-expanded')?'View Less':'View More'});

// Testimonials Carousel
(function(){const items=document.querySelectorAll('#testimonials .cs-item'),prev=document.querySelector('#testimonials .cs-prev'),next=document.querySelector('#testimonials .cs-next'),dots=document.querySelector('#testimonials .cs-carousel-dots');let idx=0,auto;function createDots(){dots.innerHTML='';items.forEach((_,i)=>{const d=document.createElement('button');d.classList.add('cs-carousel-dot');d.setAttribute('aria-label',`Go to testimonial ${i+1}`);if(i===0)d.classList.add('cs-active');d.addEventListener('click',()=>go(i));dots.appendChild(d)})}function update(){items.forEach((item,i)=>item.classList.toggle('cs-active',i===idx));document.querySelectorAll('#testimonials .cs-carousel-dot').forEach((d,i)=>d.classList.toggle('cs-active',i===idx))}function go(i){idx=i;if(idx>=items.length)idx=0;if(idx<0)idx=items.length-1;update()}function start(){auto=setInterval(()=>go(idx+1),5000)}function stop(){clearInterval(auto)}prev.addEventListener('click',()=>{go(idx-1);stop();start()});next.addEventListener('click',()=>{go(idx+1);stop();start()});const w=document.querySelector('#testimonials .cs-carousel-wrapper');w.addEventListener('mouseenter',stop);w.addEventListener('mouseleave',start);createDots();items[0].classList.add('cs-active');start()})();

// Contact Modal
(function(){const m=document.getElementById('contact-modal'),ob=document.getElementById('contact-btn'),cb=m.querySelector('.cs-modal-close'),ov=m.querySelector('.cs-modal-overlay');function open(){m.classList.add('cs-active');m.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}function close(){m.classList.remove('cs-active');m.setAttribute('aria-hidden','true');document.body.style.overflow=''}ob.addEventListener('click',open);cb.addEventListener('click',close);ov.addEventListener('click',close);document.getElementById('nav-contact-link').addEventListener('click',e=>{e.preventDefault();open()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&m.classList.contains('cs-active'))close()});function dl(){const vc=`BEGIN:VCARD
VERSION:3.0
N:Forster;Randy;;;
FN:Randy Forster
TITLE:Comedy Magician
TEL;TYPE=CELL:+17036285154
EMAIL:grforster@gmail.com
ADR;TYPE=WORK:;;Bethany Beach;Delaware;;;USA
URL:https://randyforster.com
NOTE:Comedy Magician - Magic & Fun For All Occasions
END:VCARD`;const b=new Blob([vc],{type:'text/vcard'}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download='Randy_Forster.vcf';a.style.display='none';document.body.appendChild(a);a.click();setTimeout(()=>{document.body.removeChild(a);URL.revokeObjectURL(u)},100)}document.getElementById('save-contact-btn').addEventListener('click',dl);document.getElementById('footer-save-contact').addEventListener('click',dl)})();
