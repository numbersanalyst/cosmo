import{T as h,C as g,b,P as j,W as x}from"./three.module-5fde15d4.js";import{O as C,a as d,c}from"./createPointLight-54f36d7a.js";import{s as L}from"./8k_stars_milky_way-3b65bd0d.js";const f=""+new URL("../textures/8k_jupiter.jpg",import.meta.url).href,s=new h,i={jupiter:s.load(f),stars:s.load(L)},m=new g("hsl(255, 100%, 100%)");let r,e,t,n;r=new b;e=new j(20,window.innerWidth/window.innerHeight,1,1e3);e.position.set(0,0,50);n=new x({antialias:!0});n.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(n.domElement);t=new C(e,n.domElement);t.enableDamping=!0;t.enablePan=!1;t.minDistance=10;t.maxDistance=200;const P=d(5,50,50,i.jupiter,i.jupiter),p=d(100,50,50,i.stars,!1,!0),l=c(m,1),u=c(m,.1);p.rotation.x=.5;l.position.set(-50,50,30);u.position.set(0,0,30);e.add(l,u);r.add(P,p,e);const w=()=>{t.update(),n.render(r,e),requestAnimationFrame(w)};w();const y=()=>{const{innerWidth:o,innerHeight:a}=window;n.setSize(o,a),e.aspect=o/a,e.updateProjectionMatrix()};window.addEventListener("resize",y);document.body.onload=()=>{document.querySelector(".date").textContent=new Date().toDateString()};document.addEventListener("keydown",o=>{(o.isComposing||o.keyCode===27)&&history.back()});