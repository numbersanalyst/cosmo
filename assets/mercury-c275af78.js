import{T as p,C as g,b as y,P as b,W as x}from"./three.module-5fde15d4.js";import{O as C,a as d,c}from"./createPointLight-54f36d7a.js";import{s as L}from"./8k_stars_milky_way-3b65bd0d.js";const f=""+new URL("../textures/8k_mercury.jpg",import.meta.url).href,s=new p,o={mercury:s.load(f),stars:s.load(L)},m=new g("hsl(255, 100%, 100%)");let i,e,t,n;i=new y;e=new b(20,window.innerWidth/window.innerHeight,1,1e3);e.position.set(0,0,50);n=new x({antialias:!0});n.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(n.domElement);t=new C(e,n.domElement);t.enableDamping=!0;t.enablePan=!1;t.minDistance=10;t.maxDistance=200;const P=d(5,50,50,o.mercury,o.mercury),l=d(100,50,50,o.stars,!1,!0),u=c(m,1),w=c(m,.1);l.rotation.x=.5;u.position.set(-50,50,30);w.position.set(0,0,30);e.add(u,w);i.add(P,l,e);const h=()=>{t.update(),n.render(i,e),requestAnimationFrame(h)};h();const S=()=>{const{innerWidth:r,innerHeight:a}=window;n.setSize(r,a),e.aspect=r/a,e.updateProjectionMatrix()};window.addEventListener("resize",S);document.body.onload=()=>{document.querySelector(".date").textContent=new Date().toDateString()};document.addEventListener("keydown",r=>{(r.isComposing||r.keyCode===27)&&history.back()});
