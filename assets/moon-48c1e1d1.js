import{T as C,C as g,b,P as k,W as L}from"./three.module-5fde15d4.js";import{O as f,a as d,c as l}from"./createPointLight-54f36d7a.js";import{s as y}from"./8k_stars_milky_way-3b65bd0d.js";const P=""+new URL("../textures/8k_moon.jpg",import.meta.url).href,c=new C,i={moon:c.load(P),stars:c.load(y)},m=new g("hsl(255, 100%, 100%)");let r,e,t,n;r=new b;e=new k(20,window.innerWidth/window.innerHeight,1,1e3);e.position.set(0,0,50);n=new L({antialias:!0});n.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(n.domElement);t=new f(e,n.domElement);t.enableDamping=!0;t.enablePan=!1;t.minDistance=10;t.maxDistance=200;const R=d(5,50,50,i.moon,i.moon),u=d(100,50,50,i.stars,!1,!0),w=l(m,1),h=l(m,.1);u.rotation.x=.5;w.position.set(-50,50,30);h.position.set(0,0,30);e.add(w,h);r.add(R,u,e);const p=()=>{t.update(),n.render(r,e),requestAnimationFrame(p)};p();const S=()=>{const{innerWidth:o,innerHeight:s}=window;n.setSize(o,s),e.aspect=o/s,e.updateProjectionMatrix()};window.addEventListener("resize",S);const a=document.querySelector(".rotate-btn"),E=a.textContent,W="Wyłącz obracanie",x=()=>{a.addEventListener("click",()=>{t.autoRotate=!0,a.textContent=W,z()},{once:!0})},z=()=>{a.addEventListener("click",()=>{t.autoRotate=!1,a.textContent=E,x()},{once:!0})};x();document.body.onload=()=>{document.querySelector(".date").textContent=new Date().toDateString()};document.addEventListener("keydown",o=>{(o.isComposing||o.keyCode===27)&&history.back()});
