import{S as U,M as D,a as E,O as M,A as O,T as W,C as L,b as A,P as T,W as q}from"./three.module-e19c2df5.js";import{O as G,c as H,a as k}from"./createPointLight-411048c9.js";import{c as B}from"./createRing-ce5cc789.js";import{u as F}from"./2k_uranus-f77d2cc4.js";import{n as N}from"./2k_neptune-8566f254.js";const n=(o,s,v,C,w)=>{const S=new U(o,s,v),b=new D({map:C});w&&(b.bumpMap=w,b.bumpScale=.1);const g=new E(S,b),z=new M;return z.add(g),{mesh:g,obj:z}},$=(o,s)=>new O(o,s),I=""+new URL("../textures/2k_sun.jpg",import.meta.url).href,J=""+new URL("../textures/2k_mercury.jpg",import.meta.url).href,K=""+new URL("../textures/2k_venus_atmosphere.jpg",import.meta.url).href,Q=""+new URL("../textures/2k_earth_land_ocean_ice_cloud.jpg",import.meta.url).href,V=""+new URL("../textures/2k_moon.jpg",import.meta.url).href,X=""+new URL("../textures/2k_mars.jpg",import.meta.url).href,Z=""+new URL("../textures/2k_jupiter.jpg",import.meta.url).href,tt=""+new URL("../textures/2k_saturn.jpg",import.meta.url).href,et=""+new URL("../textures/2k_saturn_ring.png",import.meta.url).href,ot=""+new URL("../textures/8k_stars.jpg",import.meta.url).href,e=new W,nt=e.load(ot),t={sun:{texture:e.load(I),size:16,position:null,selfRotation:.004,sunRotation:null},mercury:{texture:e.load(J),size:3.2,position:28,selfRotation:.004,sunRotation:.04},venus:{texture:e.load(K),size:5.8,position:44,selfRotation:.002,sunRotation:.015},earth:{texture:e.load(Q),size:6,position:62,selfRotation:.02,sunRotation:.01},moon:{texture:e.load(V),size:1.5,position:null,selfRotation:.03,sunRotation:.03},mars:{texture:e.load(X),size:4,position:78,selfRotation:.018,sunRotation:.008},jupiter:{texture:e.load(Z),size:12,position:100,selfRotation:.04,sunRotation:.002},saturn:{texture:e.load(tt),size:10,position:138,selfRotation:.038,sunRotation:9e-4,ring:{texture:e.load(et),innerRadius:12,outerRadius:22}},uranus:{texture:e.load(F),size:7,position:176,selfRotation:.03,sunRotation:4e-4},neptune:{texture:e.load(N),size:7,position:200,selfRotation:.032,sunRotation:1e-4}},st=new L("hsl(255, 100%, 100%)"),rt=new L("hsl(0,	0%,	20%)");let p,r,i,u;p=new A;r=new T(20,window.innerWidth/window.innerHeight,1,4e3);r.position.set(0,0,600);u=new q({antialias:!0});u.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(u.domElement);i=new G(r,u.domElement);i.enableDamping=!0;i.maxDistance=1200;const at=$(rt,.8);p.add(at);const it=H(st,1,300);p.add(it);const y=k(t.sun.size,30,30,t.sun.texture,t.sun.texture,!1,"basic"),l=n(t.mercury.size,30,30,t.mercury.texture,t.mercury.texture),h=n(t.venus.size,30,30,t.venus.texture),m=n(t.earth.size,30,30,t.earth.texture),d=n(t.moon.size,30,30,t.moon.texture,t.moon.texture),R=n(t.mars.size,30,30,t.mars.texture,t.mars.texture),x=n(t.jupiter.size,30,30,t.jupiter.texture,t.jupiter.texture),a=n(t.saturn.size,30,30,t.saturn.texture),Y=B(t.saturn.ring.innerRadius,t.saturn.ring.outerRadius,20,t.saturn.ring.texture),j=n(t.uranus.size,30,30,t.uranus.texture),f=n(t.neptune.size,30,30,t.neptune.texture),ut=k(900,30,30,nt,!1,!0,"basic");m.mesh.add(d.obj);a.mesh.add(Y);l.mesh.position.x=t.mercury.position;h.mesh.position.x=t.venus.position;m.mesh.position.x=t.earth.position;d.mesh.position.z=10;R.mesh.position.x=t.mars.position;x.mesh.position.x=t.jupiter.position;a.mesh.position.x=t.saturn.position;j.mesh.position.x=t.uranus.position;f.mesh.position.x=t.neptune.position;Y.rotation.x=1.5;p.add(y,l.obj,h.obj,m.obj,a.obj,R.obj,x.obj,a.obj,j.obj,f.obj,ut);const P=()=>{l.obj.rotateY(t.mercury.sunRotation),h.obj.rotateY(t.venus.sunRotation),m.obj.rotateY(t.earth.sunRotation),d.obj.rotateY(t.moon.sunRotation),R.obj.rotateY(t.mars.sunRotation),x.obj.rotateY(t.jupiter.sunRotation),a.obj.rotateY(t.saturn.sunRotation),j.obj.rotateY(t.uranus.sunRotation),f.obj.rotateY(t.neptune.sunRotation),y.rotateY(t.sun.selfRotation),l.mesh.rotateY(t.mercury.selfRotation),h.mesh.rotateY(t.venus.selfRotation),m.mesh.rotateY(t.earth.selfRotation),d.mesh.rotateY(t.moon.selfRotation),R.mesh.rotateY(t.mars.selfRotation),x.mesh.rotateY(t.jupiter.selfRotation),a.mesh.rotateY(t.saturn.selfRotation),j.mesh.rotateY(t.uranus.selfRotation),f.mesh.rotateY(t.neptune.selfRotation),i.update(),u.render(p,r),requestAnimationFrame(P)};P();const mt=()=>{const{innerWidth:o,innerHeight:s}=window;u.setSize(o,s),r.aspect=o/s,r.updateProjectionMatrix()};window.addEventListener("resize",mt);const c=document.querySelector(".rotate-btn"),ct=c.textContent,pt="Wyłącz obracanie",_=()=>{c.addEventListener("click",()=>{i.autoRotate=!0,c.textContent=pt,lt()},{once:!0})},lt=()=>{c.addEventListener("click",()=>{i.autoRotate=!1,c.textContent=ct,_()},{once:!0})};_();document.body.onload=()=>{document.querySelector(".date").textContent=new Date().toDateString()};document.addEventListener("keydown",o=>{(o.isComposing||o.keyCode===27)&&history.back()});
