import{T as h,C as g,b,P as y,W as C}from"./three.module-5fde15d4.js";import{O as f,a as s,c as d}from"./createPointLight-54f36d7a.js";import{n as x}from"./2k_neptune-8566f254.js";import{s as L}from"./8k_stars_milky_way-3b65bd0d.js";const r=new h,c={neptune:r.load(x),stars:r.load(L)},m=new g("hsl(255, 100%, 100%)");let i,e,t,n;i=new b;e=new y(20,window.innerWidth/window.innerHeight,1,1e3);e.position.set(0,0,50);n=new C({antialias:!0});n.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(n.domElement);t=new f(e,n.domElement);t.enableDamping=!0;t.enablePan=!1;t.minDistance=10;t.maxDistance=200;const P=s(5,50,50,c.neptune),l=s(100,50,50,c.stars,!1,!0),p=d(m,1),u=d(m,.1);l.rotation.x=.5;p.position.set(-50,50,30);u.position.set(0,0,30);e.add(p,u);i.add(P,l,e);const w=()=>{t.update(),n.render(i,e),requestAnimationFrame(w)};w();const S=()=>{const{innerWidth:o,innerHeight:a}=window;n.setSize(o,a),e.aspect=o/a,e.updateProjectionMatrix()};window.addEventListener("resize",S);document.body.onload=()=>{document.querySelector("div").style.opacity=0};document.body.onload=()=>{document.querySelector(".date").textContent=new Date().toDateString()};document.addEventListener("keydown",o=>{(o.isComposing||o.keyCode===27)&&history.back()});
