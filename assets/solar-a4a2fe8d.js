import{S as D,M,a as O,O as W,A,T as q,C as y,b as T,P as G,W as H}from"./three.module-e19c2df5.js";import{O as B,c as F,a as Y}from"./createPointLight-411048c9.js";import{c as I}from"./createRing-ce5cc789.js";import{u as N}from"./2k_uranus-f77d2cc4.js";import{n as $}from"./2k_neptune-8566f254.js";const s=(n,r,C,U,g)=>{const E=new D(n,r,C),w=new M({map:U});g&&(w.bumpMap=g,w.bumpScale=.1);const z=new O(E,w),L=new W;return L.add(z),{mesh:z,obj:L}},J=(n,r)=>new A(n,r),K=""+new URL("../textures/2k_sun.jpg",import.meta.url).href,Q=""+new URL("../textures/2k_mercury.jpg",import.meta.url).href,V=""+new URL("../textures/2k_venus_atmosphere.jpg",import.meta.url).href,X=""+new URL("../textures/2k_earth_land_ocean_ice_cloud.jpg",import.meta.url).href,Z=""+new URL("../textures/2k_moon.jpg",import.meta.url).href,tt=""+new URL("../textures/2k_mars.jpg",import.meta.url).href,et=""+new URL("../textures/2k_jupiter.jpg",import.meta.url).href,ot=""+new URL("../textures/2k_saturn.jpg",import.meta.url).href,nt=""+new URL("../textures/2k_saturn_ring.png",import.meta.url).href,st=""+new URL("../textures/8k_stars.jpg",import.meta.url).href,o=new q,rt=o.load(st),t={sun:{texture:o.load(K),size:16,position:null,selfRotation:.004,sunRotation:null},mercury:{texture:o.load(Q),size:3.2,position:28,selfRotation:.004,sunRotation:.04},venus:{texture:o.load(V),size:5.8,position:44,selfRotation:.002,sunRotation:.015},earth:{texture:o.load(X),size:6,position:62,selfRotation:.02,sunRotation:.01},moon:{texture:o.load(Z),size:1.5,position:null,selfRotation:.03,sunRotation:.03},mars:{texture:o.load(tt),size:4,position:78,selfRotation:.018,sunRotation:.008},jupiter:{texture:o.load(et),size:12,position:100,selfRotation:.04,sunRotation:.002},saturn:{texture:o.load(ot),size:10,position:138,selfRotation:.038,sunRotation:9e-4,ring:{texture:o.load(nt),innerRadius:12,outerRadius:22}},uranus:{texture:o.load(N),size:7,position:176,selfRotation:.03,sunRotation:4e-4},neptune:{texture:o.load($),size:7,position:200,selfRotation:.032,sunRotation:1e-4}},at=new y("hsl(255, 100%, 100%)"),it=new y("hsl(0,	0%,	20%)");let l,a,u,m;l=new T;a=new G(20,window.innerWidth/window.innerHeight,1,4e3);a.position.set(0,0,600);m=new H({antialias:!0});m.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(m.domElement);u=new B(a,m.domElement);u.enableDamping=!0;u.maxDistance=1200;const ut=J(it,.8);l.add(ut);const mt=F(at,1,400);l.add(mt);const P=Y(t.sun.size,30,30,t.sun.texture,t.sun.texture,!1,"basic"),d=s(t.mercury.size,30,30,t.mercury.texture,t.mercury.texture),h=s(t.venus.size,30,30,t.venus.texture),c=s(t.earth.size,30,30,t.earth.texture),R=s(t.moon.size,30,30,t.moon.texture,t.moon.texture),x=s(t.mars.size,30,30,t.mars.texture,t.mars.texture),j=s(t.jupiter.size,30,30,t.jupiter.texture,t.jupiter.texture),i=s(t.saturn.size,30,30,t.saturn.texture),_=I(t.saturn.ring.innerRadius,t.saturn.ring.outerRadius,20,t.saturn.ring.texture),f=s(t.uranus.size,30,30,t.uranus.texture),b=s(t.neptune.size,30,30,t.neptune.texture),ct=Y(900,30,30,rt,!1,!0,"basic");c.mesh.add(R.obj);i.mesh.add(_);d.mesh.position.x=t.mercury.position;h.mesh.position.x=t.venus.position;c.mesh.position.x=t.earth.position;R.mesh.position.z=10;x.mesh.position.x=t.mars.position;j.mesh.position.x=t.jupiter.position;i.mesh.position.x=t.saturn.position;f.mesh.position.x=t.uranus.position;b.mesh.position.x=t.neptune.position;_.rotation.x=1.5;l.add(P,d.obj,h.obj,c.obj,i.obj,x.obj,j.obj,i.obj,f.obj,b.obj,ct);let e=1;const v=()=>{d.obj.rotateY(t.mercury.sunRotation*e),h.obj.rotateY(t.venus.sunRotation*e),c.obj.rotateY(t.earth.sunRotation*e),R.obj.rotateY(t.moon.sunRotation*e),x.obj.rotateY(t.mars.sunRotation*e),j.obj.rotateY(t.jupiter.sunRotation*e),i.obj.rotateY(t.saturn.sunRotation*e),f.obj.rotateY(t.uranus.sunRotation*e),b.obj.rotateY(t.neptune.sunRotation*e),P.rotateY(t.sun.selfRotation*e),d.mesh.rotateY(t.mercury.selfRotation*e),h.mesh.rotateY(t.venus.selfRotation*e),c.mesh.rotateY(t.earth.selfRotation*e),R.mesh.rotateY(t.moon.selfRotation*e),x.mesh.rotateY(t.mars.selfRotation*e),j.mesh.rotateY(t.jupiter.selfRotation*e),i.mesh.rotateY(t.saturn.selfRotation*e),f.mesh.rotateY(t.uranus.selfRotation*e),b.mesh.rotateY(t.neptune.selfRotation*e),u.update(),m.render(l,a),requestAnimationFrame(v)};v();const pt=()=>{const{innerWidth:n,innerHeight:r}=window;m.setSize(n,r),a.aspect=n/r,a.updateProjectionMatrix()};window.addEventListener("resize",pt);const p=document.querySelector(".rotate-btn"),lt=p.textContent,dt="Wyłącz obracanie",S=()=>{p.addEventListener("click",()=>{u.autoRotate=!0,p.textContent=dt,ht()},{once:!0})},ht=()=>{p.addEventListener("click",()=>{u.autoRotate=!1,p.textContent=lt,S()},{once:!0})};S();const k=document.querySelector(".speed-input"),Rt=()=>{k.addEventListener("change",()=>{e=k.value})};Rt();document.body.onload=()=>{document.querySelector(".date").textContent=new Date().toDateString()};document.addEventListener("keydown",n=>{(n.isComposing||n.keyCode===27)&&history.back()});
