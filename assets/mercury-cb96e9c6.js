import{T as h,C as y,S as g,P as b,W as L}from"./three.module-1524183a.js";import{s as x,O as C,c as d,a as c}from"./8k_stars_milky_way-27f21331.js";const P=""+new URL("../textures/8k_mercury.jpg",import.meta.url).href,a=new h,r={mercury:a.load(P),stars:a.load(x)},m=new y("hsl(255, 100%, 100%)");let i,e,t,n;i=new g;e=new b(20,window.innerWidth/window.innerHeight,1,1e3);e.position.set(0,0,50);n=new L({antialias:!0});n.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(n.domElement);t=new C(e,n.domElement);t.enableDamping=!0;t.enablePan=!1;t.minDistance=10;t.maxDistance=200;const S=d(5,50,50,r.mercury,r.mercury),l=d(100,50,50,r.stars,!1,!0),u=c(m,1),w=c(m,.1);l.rotation.x=.5;u.position.set(-50,50,30);w.position.set(0,0,30);e.add(u,w);i.add(S,l,e);const p=()=>{t.update(),n.render(i,e),requestAnimationFrame(p)};p();const f=()=>{const{innerWidth:o,innerHeight:s}=window;n.setSize(o,s),e.aspect=o/s,e.updateProjectionMatrix()};window.addEventListener("resize",f);document.body.onload=()=>{document.querySelector("div").style.opacity=0};setTimeout(()=>{document.querySelector("div").style.display="none"},1e4);document.addEventListener("keydown",o=>{(o.isComposing||o.keyCode===27)&&history.back()});