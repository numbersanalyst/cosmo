import{T as f,C as P,S as x,P as C,W as M,a as k,M as W,B as v,b as z,c as E}from"./three.module-4635bcd4.js";import{s as q,O as D}from"./8k_stars_milky_way-7288cd9f.js";const G=""+new URL("../textures/8k_sun.jpg",import.meta.url).href,d=new f,c={sun:d.load(G),stars:d.load(q)},u=new P("hsl(255, 100%, 100%)");let r,t,s,a;r=new x;t=new C(20,window.innerWidth/window.innerHeight,1,1e3);t.position.set(0,0,50);a=new M({antialias:!0});a.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(a.domElement);s=new D(t,a.domElement);s.enableDamping=!0;s.enablePan=!1;s.minDistance=10;s.maxDistance=200;const l=(e,n,g,i,b,S)=>{const L=new k(e,n,g),o=new W({map:i});return b&&(o.bumpMap=i,o.bumpScale=.1),S&&(o.side=v,o.transparent=!0,o.opacity=.8),new z(L,o)},m=(e,n)=>new E(e,n),H=l(5,50,50,c.sun,!0),p=l(100,50,50,c.stars,!1,!0),h=m(u,1),w=m(u,.1);p.rotation.x=.5;h.position.set(-50,50,30);w.position.set(0,0,30);t.add(h,w);r.add(H,p,t);const y=()=>{s.update(),a.render(r,t),requestAnimationFrame(y)};y();const R=()=>{const{innerWidth:e,innerHeight:n}=window;a.setSize(e,n),t.aspect=e/n,t.updateProjectionMatrix()};window.addEventListener("resize",R);document.body.onload=()=>{document.querySelector("div").style.opacity=0};setTimeout(()=>{document.querySelector("div").style.display="none"},1e4);document.addEventListener("keydown",e=>{(e.isComposing||e.keyCode===27)&&history.back()});