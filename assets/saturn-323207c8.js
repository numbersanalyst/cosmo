import{T as P,C as f,S as k,P as C,W as M,a as W,M as u,B as D,b as l,R as G,D as v,c as z}from"./three.module-4635bcd4.js";import{s as E,O as q}from"./8k_stars_milky_way-7288cd9f.js";const H=""+new URL("../textures/8k_saturn.jpg",import.meta.url).href,T=""+new URL("../textures/4k_saturn_ring.png",import.meta.url).href,i=new P,d={saturn:i.load(H),saturnRing:i.load(T),stars:i.load(E)},m=new f("hsl(255, 100%, 100%)");let c,n,r,s;c=new k;n=new C(20,window.innerWidth/window.innerHeight,1,1e3);n.position.set(0,0,50);s=new M({antialias:!0});s.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(s.domElement);r=new q(n,s.domElement);r.enableDamping=!0;r.enablePan=!1;r.minDistance=10;r.maxDistance=200;const p=(e,t,o,b,L)=>{const x=new W(e,t,o),a=new u({map:b});return L&&(a.side=D,a.transparent=!0,a.opacity=.8),new l(x,a)},_=e=>{const t=new G(6,10,60),o=new u({map:e,side:v,transparent:!0,depthWrite:!1});return new l(t,o)},w=(e,t)=>new z(e,t),j=p(5,50,50,d.saturn),h=_(d.saturnRing),g=p(100,50,50,d.stars,!0),y=w(m,1),R=w(m,.1);h.rotation.x=2;g.rotation.x=.5;y.position.set(-50,50,30);R.position.set(0,0,30);n.add(y,R);c.add(j,h,g,n);const S=()=>{r.update(),s.render(c,n),requestAnimationFrame(S)};S();const B=()=>{const{innerWidth:e,innerHeight:t}=window;s.setSize(e,t),n.aspect=e/t,n.updateProjectionMatrix()};window.addEventListener("resize",B);document.body.onload=()=>{document.querySelector("div").style.opacity=0};setTimeout(()=>{document.querySelector("div").style.display="none"},1e4);document.addEventListener("keydown",e=>{(e.isComposing||e.keyCode===27)&&history.back()});
