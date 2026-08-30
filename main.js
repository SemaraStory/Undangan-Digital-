const CONFIG={
  supabase:{url:'YOUR_SUPABASE_URL',anonKey:'YOUR_SUPABASE_ANON_KEY'},
  wa:'6285739808887',
  koleksi:[
    {id:'lumiere',name:'Lumiere',old:350000,price:200000,img:'photo-1519741497674-611481863552',top:'THE WEDDING OF',names:'RAMA<i>&</i>AYU',date:'15 SEPTEMBER 2026'},
    {id:'deauville',name:'Deauville',old:250000,price:175000,img:'photo-1522673607200-164d1b6ce486',top:'THE WEDDING OF',names:'RAMA<i>&</i>AYU',date:'15 SEPTEMBER 2026'},
    {id:'editorial',name:'Editorial',old:250000,price:175000,img:'photo-1511283541675-1323a5517580',top:'The Wedding of',names:'Rama & Ayu',date:'15 SEPTEMBER 2026'},
    {id:'air',name:'Air',old:200000,price:125000,img:'photo-1465495976277-4387d4b0b4c6',top:'SAVE THE DATE',names:'RAMA<i>&</i>AYU',date:'SENIN, 14 SEPT 2026'},
    {id:'noir',name:'Noir',old:200000,price:125000,img:'photo-1519225421980-715cb0215aed',top:'The Wedding of',names:'Rama<i>&</i>Ayu',date:'15 SEPTEMBER 2026'}
  ],
  fitur:[
    ['fa-users','Tamu Tanpa Batas'],['fa-envelope-open-text','RSVP & Ucapan'],
    ['fa-gift','Amplop Digital'],['fa-map-location-dot','Navigasi Maps'],
    ['fa-images','Total 12 Foto'],['fa-music','Musik Latar'],
    ['fa-hourglass-half','Hitung Mundur'],['fa-heart','Kisah Cinta'],
    ['fa-video','Total 1 Video'],['fa-calendar-check','Simpan Kalender'],
    ['fa-instagram','Link Instagram'],['fa-clock','Aktif 1 Bulan'],
    ['fa-chart-line','Dashboard Analytics'],['fa-file-export','Export Data Tamu']
  ],
  addon:[
    ['fa-bolt','Prioritas 24 jam','+ 50.000'],
    ['fa-image','Tambah Foto','+ 5.000 / foto'],
    ['fa-film','Tambah Video','+ 20.000 / video']
  ],
  faq:[
    ['Waktu Pengerjaan Undangan','Proses pembuatan biasanya memakan waktu <strong>3 hari</strong> setelah semua data dan foto kami terima dengan lengkap.'],
    ['Pengganti Video Background','Jika template memiliki background video tapi Anda tidak punya video, kami bisa menggantinya dengan fitur <strong>image slider (slideshow)</strong> yang memutar foto Anda secara bergantian.'],
    ['Fasilitas Revisi Minor','Kami memberikan revisi minor <strong>sepuasnya</strong>: perbaikan typo nama, ganti lagu, ganti foto, ganti quotes, penyesuaian lokasi, hingga menghapus section tertentu.'],
    ['Fasilitas Revisi Mayor','Revisi mayor jatah <strong>satu kali</strong>. Tema tidak bisa diganti, tapi Anda boleh merombak posisi atau susunan section.'],
    ['Masa Aktif Tautan Undangan','Link undangan tetap aktif sampai <strong>satu bulan setelah acara selesai</strong>, jadi masih ada waktu membaca ucapan dari para tamu.'],
    ['Cara Membagikan Undangan','Anda mendapat akses dashboard untuk memasukkan daftar nama tamu. Sistem akan men-generate <strong>link unik per orang</strong> untuk disebar via WhatsApp.'],
    ['Cara Menulis Nama Tamu Manual','Tambahkan <code>?to=Nama+Tamu</code> di akhir link. Contoh: <code>semarastory.id/rama-ayu?to=Putu+Putra</code> (ganti spasi dengan tanda +).'],
    ['Perubahan Setelah Undangan Dibagikan','Kalau ada perubahan jadwal atau lokasi mendadak, infokan ke kami. Link yang sudah disebar akan <strong>otomatis ter-update</strong>.'],
    ['Konfirmasi Kehadiran & Ucapan','Di undangan ada form khusus agar tamu bisa mengirim ucapan dan mengonfirmasi kehadiran (RSVP). Semua data terekap otomatis di dashboard.']
  ]
};

const DB={
  sb:null,
  init(){
    try{if(window.supabase&&CONFIG.supabase.url.includes('supabase.co'))
      this.sb=supabase.createClient(CONFIG.supabase.url,CONFIG.supabase.anonKey)}
    catch(e){console.warn('Supabase tidak aktif → mode lokal (localStorage).')}
    if(!this.sb&&!this.ls('ss_guests')){
      this.ls('ss_guests',[
        {id:1,name:'Budi',phone:'628123456789',pax:2,st:'Hadir'},
        {id:2,name:'Keluarga Besar',phone:'',pax:5,st:'Hadir'},
        {id:3,name:'Sari',phone:'',pax:1,st:'Tidak Hadir'},
        {id:4,name:'Dewi',phone:'',pax:2,st:'Ragu'}]);
      this.ls('ss_msgs',[
        {id:1,name:'Budi',message:'Selamat yaa',t:Date.now()-35*60000},
        {id:2,name:'Keluarga Besar',message:'Selamat menikah, semoga langgeng yaa',t:Date.now()-2*3600000}]);
    }
  },
  ls(k,v){if(v===undefined)return JSON.parse(localStorage.getItem(k)||'null');localStorage.setItem(k,JSON.stringify(v))},
  async signUp(u){
    if(this.sb){const{error}=await this.sb.auth.signUp({email:u.email,password:u.pass,options:{data:{name:u.name}}});return error?{error:error.message}:{ok:1}}
    const us=this.ls('ss_users')||[];
    if(us.find(x=>x.email===u.email))return{error:'Email sudah terdaftar'};
    us.push(u);this.ls('ss_users',us);return{ok:1}
  },
  async signIn(e,p){
    if(this.sb){const{data,error}=await this.sb.auth.signInWithPassword({email:e,password:p});
      if(error)return{error:error.message};
      this.ls('ss_session',{email:e,name:(data.user.user_metadata&&data.user.user_metadata.name)||e.split('@')[0]});return{ok:1}}
    const u=(this.ls('ss_users')||[]).find(x=>x.email===e&&x.pass===p);
    if(!u)return{error:'Email / password salah'};
    this.ls('ss_session',{email:e,name:u.name||e.split('@')[0]});return{ok:1}
  },
  out(){this.ls('ss_session',null);if(this.sb)this.sb.auth.signOut()},
  me(){return this.ls('ss_session')},
  async guests(){
    if(this.sb){const{data}=await this.sb.from('guests').select('*').order('created_at',{ascending:false});
      return (data||[]).map(x=>({id:x.id,name:x.name,phone:x.phone,pax:x.pax,st:x.status}))}
    return this.ls('ss_guests')||[]
  },
  async addGuest(g){
    if(this.sb){await this.sb.from('guests').insert([{name:g.name,phone:g.phone,pax:g.pax,status:g.st}]);return this.guests()}
    const a=this.ls('ss_guests')||[];a.unshift(Object.assign({id:Date.now()},g));this.ls('ss_guests',a);return a
  },
  async delGuest(id){
    if(this.sb){await this.sb.from('guests').delete().eq('id',id);return this.guests()}
    const a=(this.ls('ss_guests')||[]).filter(x=>String(x.id)!==String(id));this.ls('ss_guests',a);return a
  },
  async upGuest(id,st){
    if(this.sb){await this.sb.from('guests').update({status:st}).eq('id',id);return this.guests()}
    const a=this.ls('ss_guests')||[];const g=a.find(x=>String(x.id)===String(id));if(g)g.st=st;this.ls('ss_guests',a);return a
  },
  async msgs(){
    if(this.sb){const{data}=await this.sb.from('messages').select('*').order('created_at',{ascending:false});return data||[]}
    return this.ls('ss_msgs')||[]
  },
  async addMsg(m){
    if(this.sb){await this.sb.from('messages').insert([m]);return this.msgs()}
    const a=this.ls('ss_msgs')||[];a.unshift(Object.assign({id:Date.now(),t:Date.now()},m));this.ls('ss_msgs',a);return a
  }
};
const fmt=n=>n.toLocaleString('id-ID');
function toast(t,i){const w=document.getElementById('toasts');const d=document.createElement('div');
  d.className='toast';d.innerHTML='<i class="fa-solid '+(i||'fa-circle-check')+'"></i>'+t;
  w.appendChild(d);setTimeout(()=>d.remove(),3500)}
function closeM(id){document.getElementById(id).classList.remove('open')}

function renderKoleksi(){
  document.getElementById('koleksiGrid').innerHTML=CONFIG.koleksi.map(k=>
  '<article class="k-card"><div class="k-visual"><div class="phone"><div class="screen" style="background-image:url(\'https://images.unsplash.com/'+k.img+'?w=400\')">'+
  '<span class="s-top">'+k.top+'</span><div class="s-names">'+k.names+'</div><span class="s-date">'+k.date+'</span>'+
  '</div></div></div>'+
  '<div class="k-info"><h3 class="k-name">'+k.name+'</h3><div class="k-price"><s>Rp '+fmt(k.old)+'</s><b>Rp '+fmt(k.price)+'</b></div></div>'+
  '<div class="k-btns"><button class="btn-dark" onclick="preview(\''+k.id+'\')">Preview</button>'+
  '<button class="btn-line" onclick="pesan(\''+k.name+'\')">Pesan</button></div></article>').join('')
}
function preview(id){
  const k=CONFIG.koleksi.find(x=>x.id===id);
  document.getElementById('pvBody').innerHTML=
  '<div style="text-align:center"><div class="phone" style="margin:0 auto 20px"><div class="screen" style="background-image:url(\'https://images.unsplash.com/'+k.img+'?w=600\')">'+
  '<span class="s-top">'+k.top+'</span><div class="s-names">'+k.names+'</div><span class="s-date">'+k.date+'</span><span class="s-cta">BUKA UNDANGAN</span></div></div>'+
  '<h3 style="margin-bottom:6px">'+k.name+'</h3>'+
  '<p style="color:var(--mut);margin-bottom:16px"><s>Rp '+fmt(k.old)+'</s> → <b style="color:var(--acc)">Rp '+fmt(k.price)+'</b></p>'+
  '<button class="btn-dark w100" onclick="pesan(\''+k.name+'\');closeM(\'pvModal\')">Pesan Tema Ini</button></div>';
  document.getElementById('pvModal').classList.add('open')
}
function pesan(n){window.open('https://wa.me/'+CONFIG.wa+'?text='+encodeURIComponent('Halo Semara Story Studio, saya ingin memesan tema '+n+'.'),'_blank')}
function renderChips(){document.getElementById('chips').innerHTML=CONFIG.fitur.map(f=>'<span class="chip"><i class="fa-solid '+f[0]+'"></i>'+f[1]+'</span>').join('')}
function renderAddon(){document.getElementById('addonGrid').innerHTML=CONFIG.addon.map(a=>'<div class="addon-item"><i class="fa-solid '+a[0]+'"></i><div><b>'+a[1]+'</b><span>'+a[2]+'</span></div></div>').join('')}
function renderFaq(){document.getElementById('faqList').innerHTML=CONFIG.faq.map(f=>'<div class="faq-item"><button class="faq-q"><span>'+f[0]+'</span><i class="fa-solid fa-plus"></i></button><div class="faq-a"><p>'+f[1]+'</p></div></div>').join('')}

document.addEventListener('click',e=>{
  const q=e.target.closest('.faq-q');
  if(q){const it=q.parentElement;const was=it.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(x=>x.classList.remove('open'));
    if(!was)it.classList.add('open')}
  if(e.target.closest('.fab-menu a'))document.getElementById('fabMenu').classList.remove('open')
});

document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
  t.classList.add('active');
  ['t-dash','t-kirim','t-rsvp'].forEach(id=>document.getElementById(id).classList.add('hidden'));
  document.getElementById(t.dataset.tab).classList.remove('hidden')
}));

const CD=Date.now()+((25*24*3600)+(37*60)+37)*1000;
setInterval(()=>{
  let s=Math.max(0,Math.floor((CD-Date.now())/1000));
  const d=Math.floor(s/86400);s%=86400;
  const h=Math.floor(s/3600);s%=3600;
  const m=Math.floor(s/60);s%=60;
  const p=n=>String(n).padStart(2,'0');
  document.querySelectorAll('.js-d').forEach(e=>e.textContent=p(d));
  document.querySelectorAll('.js-h').forEach(e=>e.textContent=p(h));
  document.querySelectorAll('.js-m').forEach(e=>e.textContent=p(m));
  document.querySelectorAll('.js-s').forEach(e=>e.textContent=p(s));
},1000);

function kirimWA(){
  const n=document.getElementById('wNama').value||'Tamu';
  const no=document.getElementById('wNo').value.trim();
  const tpl=document.getElementById('wTpl').value;
  const t={
    Formal:'Yth. Bapak/Ibu '+n+',\nKami mengundang Anda untuk hadir di acara pernikahan kami. Detail acara: semarastory.id/undangan',
    Teman:'Halo '+n+'! 💌 Datang ya ke nikahan kami! Cek detailnya di sini: semarastory.id/undangan',
    Keluarga:'Kepada Keluarga '+n+', dengan penuh kebahagiaan kami mengundang Anda menghadiri pernikahan kami: semarastory.id/undangan'
  }[tpl];
  if(no)window.open('https://wa.me/'+no+'?text='+encodeURIComponent(t),'_blank');
  else if(navigator.clipboard){navigator.clipboard.writeText(t);toast('Pesan "'+tpl+'" untuk '+n+' disalin!')}
}

let regMode=false;
function toggleReg(){
  regMode=!regMode;
  document.querySelectorAll('.reg-only').forEach(e=>e.classList.toggle('hidden',!regMode));
  document.getElementById('lBtn').textContent=regMode?'Daftar':'Login';
}
async function doLogin(e){
  e.preventDefault();
  const email=document.getElementById('lEmail').value.trim();
  const pass=document.getElementById('lPass').value;
  if(regMode){
    const r=await DB.signUp({name:document.getElementById('rNama').value||email.split('@')[0],email,pass});
    if(r.error)return toast(r.error,'fa-circle-exclamation');
    toast('Akun dibuat! Silakan login.');toggleReg();return
  }
  const r=await DB.signIn(email,pass);
  if(r.error)return toast(r.error,'fa-circle-exclamation');
  toast('Selamat datang!');
  document.querySelector('.nav .btn-dark').innerHTML='Dashboard <i class="fa-solid fa-user"></i>';
  openAdmin();
}
function openLogin(){
  if(DB.me())openAdmin();
  else document.getElementById('kontak').scrollIntoView({behavior:'smooth'});
}
window.addEventListener('load',()=>{
  DB.init();renderKoleksi();renderChips();renderAddon();renderFaq();
  if(DB.me())document.querySelector('.nav .btn-dark').innerHTML='Dashboard <i class="fa-solid fa-user"></i>';
});
