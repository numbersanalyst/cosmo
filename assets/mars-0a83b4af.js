import{T as h,C as g,b as y,P as b,W as L}from"./three.module-e3f23a6f.js";import{s as x,O as C,c as d,a as c}from"./8k_stars_milky_way-e91e8a46.js";const P=""+new URL("../textures/8k_mars.jpg",import.meta.url).href,i=new h,s={mars:i.load(P),stars:i.load(x)},m=new g("hsl(255, 100%, 100%)");let r,e,t,n;r=new y;e=new b(20,window.innerWidth/window.innerHeight,1,1e3);e.position.set(0,0,50);n=new L({antialias:!0});n.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(n.domElement);t=new C(e,n.domElement);t.enableDamping=!0;t.enablePan=!1;t.minDistance=10;t.maxDistance=200;const f=d(5,50,50,s.mars,s.mars),l=d(100,50,50,s.stars,!1,!0),u=c(m,1),w=c(m,.1);l.rotation.x=.5;u.position.set(-50,50,30);w.position.set(0,0,30);e.add(u,w);r.add(f,l,e);const p=()=>{t.update(),n.render(r,e),requestAnimationFrame(p)};p();const S=()=>{const{innerWidth:o,innerHeight:a}=window;n.setSize(o,a),e.aspect=o/a,e.updateProjectionMatrix()};window.addEventListener("resize",S);document.body.onload=()=>{document.querySelector("div").style.opacity=0};setTimeout(()=>{document.querySelector("div").style.display="none"},1e4);document.addEventListener("keydown",o=>{(o.isComposing||o.keyCode===27)&&history.back()});
