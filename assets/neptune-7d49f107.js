import{T as h,C as g,S as y,P as b,W as L,a as P}from"./three.module-8aee693a.js";import{s as C,O as S,c as a}from"./8k_stars_milky_way-ebbfdc5e.js";import{n as x}from"./2k_neptune-8566f254.js";const r=new h,d={neptune:r.load(x),stars:r.load(C)},c=new g("hsl(255, 100%, 100%)");let s,e,n,o;s=new y;e=new b(20,window.innerWidth/window.innerHeight,1,1e3);e.position.set(0,0,50);o=new L({antialias:!0});o.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(o.domElement);n=new S(e,o.domElement);n.enableDamping=!0;n.enablePan=!1;n.minDistance=10;n.maxDistance=200;const l=(t,i)=>new P(t,i),f=a(5,50,50,d.neptune),m=a(100,50,50,d.stars,!0),u=l(c,1),p=l(c,.1);m.rotation.x=.5;u.position.set(-50,50,30);p.position.set(0,0,30);e.add(u,p);s.add(f,m,e);const w=()=>{n.update(),o.render(s,e),requestAnimationFrame(w)};w();const W=()=>{const{innerWidth:t,innerHeight:i}=window;o.setSize(t,i),e.aspect=t/i,e.updateProjectionMatrix()};window.addEventListener("resize",W);document.body.onload=()=>{document.querySelector("div").style.opacity=0};setTimeout(()=>{document.querySelector("div").style.display="none"},1e4);document.addEventListener("keydown",t=>{(t.isComposing||t.keyCode===27)&&history.back()});
