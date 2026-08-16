const toggle=document.getElementById('menuToggle'),nav=document.getElementById('nav');toggle.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');obs.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));
const sections=document.querySelectorAll('main section[id]'),links=document.querySelectorAll('nav a:not(.download)');addEventListener('scroll',()=>{let c='home';sections.forEach(s=>{if(scrollY>=s.offsetTop-120)c=s.id});links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+c))});
const modal=document.getElementById('awardModal');document.getElementById('openAward').onclick=()=>modal.classList.add('open');document.getElementById('closeAward').onclick=()=>modal.classList.remove('open');modal.onclick=e=>{if(e.target===modal)modal.classList.remove('open')};
const form=document.getElementById('contactForm'),status=document.getElementById('formStatus');
form.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(form);
  const name=data.get('name'),email=data.get('email'),phone=data.get('phone'),message=data.get('message');
  const wa=`https://wa.me/916381714749?text=${encodeURIComponent(`New portfolio enquiry\\n\\nName: ${name}\\nEmail: ${email}\\nPhone: ${phone||'Not provided'}\\nMessage: ${message}`)}`;

  // Submit the same enquiry to email through FormSubmit.
  const emailFrame=document.getElementById('emailSubmitFrame');
  let sent=false;
  emailFrame.onload=()=>{
    if(sent)return;
    sent=true;
    status.className='success';
    status.textContent='Enquiry sent to email. Opening WhatsApp...';
    window.open(wa,'_blank','noopener');
    form.reset();
  };
  status.className='success';
  status.textContent='Sending enquiry...';
  form.submit();
});