import{T as b,C as x,b as g,P as k,W as L}from"./three.module-e19c2df5.js";import{O as f,a as c,c as d}from"./createPointLight-411048c9.js";import{u as y}from"./2k_uranus-f77d2cc4.js";import{s as P}from"./8k_stars_milky_way-3b65bd0d.js";const s=new b,u={uranus:s.load(y),stars:s.load(P)},l=new x("hsl(255, 100%, 100%)");let i,e,t,n;i=new g;e=new k(20,window.innerWidth/window.innerHeight,1,1e3);e.position.set(0,0,50);n=new L({antialias:!0});n.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(n.domElement);t=new f(e,n.domElement);t.enableDamping=!0;t.enablePan=!1;t.minDistance=10;t.maxDistance=200;const S=c(5,50,50,u.uranus),m=c(100,50,50,u.stars,!1,!0,"basic"),w=d(l,1),h=d(l,.1);m.rotation.x=.5;w.position.set(-50,50,30);h.position.set(0,0,30);e.add(w,h);i.add(S,m,e);const p=()=>{t.update(),n.render(i,e),requestAnimationFrame(p)};p();const E=()=>{const{innerWidth:o,innerHeight:r}=window;n.setSize(o,r),e.aspect=o/r,e.updateProjectionMatrix()};window.addEventListener("resize",E);const a=document.querySelector(".rotate-btn"),R=a.textContent,W="Wyłącz obracanie",C=()=>{a.addEventListener("click",()=>{t.autoRotate=!0,a.textContent=W,z()},{once:!0})},z=()=>{a.addEventListener("click",()=>{t.autoRotate=!1,a.textContent=R,C()},{once:!0})};C();document.body.onload=()=>{document.querySelector(".date").textContent=new Date().toDateString()};document.addEventListener("keydown",o=>{(o.isComposing||o.keyCode===27)&&history.back()});
