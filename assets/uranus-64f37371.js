import{T as h,C as y,b as g,P as b,W as C}from"./three.module-e3f23a6f.js";import{s as L,O as P,c as r,a as d}from"./8k_stars_milky_way-e91e8a46.js";import{u as f}from"./2k_uranus-f77d2cc4.js";const a=new h,c={uranus:a.load(f),stars:a.load(L)},u=new y("hsl(255, 100%, 100%)");let s,e,t,n;s=new g;e=new b(20,window.innerWidth/window.innerHeight,1,1e3);e.position.set(0,0,50);n=new C({antialias:!0});n.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(n.domElement);t=new P(e,n.domElement);t.enableDamping=!0;t.enablePan=!1;t.minDistance=10;t.maxDistance=200;const x=r(5,50,50,c.uranus),l=r(100,50,50,c.stars,!1,!0),m=d(u,1),w=d(u,.1);l.rotation.x=.5;m.position.set(-50,50,30);w.position.set(0,0,30);e.add(m,w);s.add(x,l,e);const p=()=>{t.update(),n.render(s,e),requestAnimationFrame(p)};p();const S=()=>{const{innerWidth:o,innerHeight:i}=window;n.setSize(o,i),e.aspect=o/i,e.updateProjectionMatrix()};window.addEventListener("resize",S);document.body.onload=()=>{document.querySelector("div").style.opacity=0};setTimeout(()=>{document.querySelector("div").style.display="none"},1e4);document.addEventListener("keydown",o=>{(o.isComposing||o.keyCode===27)&&history.back()});
