import{T as u,C as g,b,P as x,W as C}from"./three.module-5fde15d4.js";import{O as L,a as d,c}from"./createPointLight-54f36d7a.js";import{s as f}from"./8k_stars_milky_way-3b65bd0d.js";const P=""+new URL("../textures/8k_mars.jpg",import.meta.url).href,i=new u,r={mars:i.load(P),stars:i.load(f)},m=new g("hsl(255, 100%, 100%)");let a,e,t,n;a=new b;e=new x(20,window.innerWidth/window.innerHeight,1,1e3);e.position.set(0,0,50);n=new C({antialias:!0});n.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(n.domElement);t=new L(e,n.domElement);t.enableDamping=!0;t.enablePan=!1;t.minDistance=10;t.maxDistance=200;const y=d(5,50,50,r.mars,r.mars),l=d(100,50,50,r.stars,!1,!0),w=c(m,1),h=c(m,.1);l.rotation.x=.5;w.position.set(-50,50,30);h.position.set(0,0,30);e.add(w,h);a.add(y,l,e);const p=()=>{t.update(),n.render(a,e),requestAnimationFrame(p)};p();const S=()=>{const{innerWidth:o,innerHeight:s}=window;n.setSize(o,s),e.aspect=o/s,e.updateProjectionMatrix()};window.addEventListener("resize",S);document.body.onload=()=>{document.querySelector(".date").textContent=new Date().toDateString()};document.addEventListener("keydown",o=>{(o.isComposing||o.keyCode===27)&&history.back()});
