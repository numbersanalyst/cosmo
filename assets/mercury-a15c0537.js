import{T as f,C as P,S as x,P as C,W as M,a as k,M as W,B as v,b as z,c as E}from"./three.module-4635bcd4.js";import{s as q,O as D}from"./8k_stars_milky_way-7288cd9f.js";const G=""+new URL("../textures/8k_mercury.jpg",import.meta.url).href,d=new f,c={mercury:d.load(G),stars:d.load(q)},m=new P("hsl(255, 100%, 100%)");let a,t,o,s;a=new x;t=new C(20,window.innerWidth/window.innerHeight,1,1e3);t.position.set(0,0,50);s=new M({antialias:!0});s.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(s.domElement);o=new D(t,s.domElement);o.enableDamping=!0;o.enablePan=!1;o.minDistance=10;o.maxDistance=200;const u=(e,n,g,i,b,S)=>{const L=new k(e,n,g),r=new W({map:i});return b&&(r.bumpMap=i,r.bumpScale=.1),S&&(r.side=v,r.transparent=!0,r.opacity=.8),new z(L,r)},l=(e,n)=>new E(e,n),H=u(5,50,50,c.mercury,!0),p=u(100,50,50,c.stars,!1,!0),h=l(m,1),w=l(m,.1);p.rotation.x=.5;h.position.set(-50,50,30);w.position.set(0,0,30);t.add(h,w);a.add(H,p,t);const y=()=>{o.update(),s.render(a,t),requestAnimationFrame(y)};y();const R=()=>{const{innerWidth:e,innerHeight:n}=window;s.setSize(e,n),t.aspect=e/n,t.updateProjectionMatrix()};window.addEventListener("resize",R);document.body.onload=()=>{document.querySelector("div").style.opacity=0};setTimeout(()=>{document.querySelector("div").style.display="none"},1e4);document.addEventListener("keydown",e=>{(e.isComposing||e.keyCode===27)&&history.back()});