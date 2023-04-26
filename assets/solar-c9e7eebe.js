import{S as E,M as W,a as P,O,A,T as G,C as _,b as q,P as T,W as H,R as B,c as N,D as X}from"./three.module-c996bb13.js";import{O as F,c as v}from"./createSphere-e425b8c2.js";import{c as I}from"./createRing-641bee23.js";import{c as $}from"./createPointLight-2a30a7fd.js";import{u as J}from"./2k_uranus-f77d2cc4.js";import{n as K}from"./2k_neptune-8566f254.js";const r=(o,s,d,g,L)=>{const D=new E(o,s,d),z=new W({map:g});L&&(z.bumpMap=L,z.bumpScale=.1);const y=new P(D,z),k=new O;return k.add(y),{mesh:y,obj:k}},Q=(o,s)=>new A(o,s),V=""+new URL("../textures/2k_sun.jpg",import.meta.url).href,Z=""+new URL("../textures/2k_mercury.jpg",import.meta.url).href,tt=""+new URL("../textures/2k_venus_atmosphere.jpg",import.meta.url).href,et=""+new URL("../textures/2k_earth_land_ocean_ice_cloud.jpg",import.meta.url).href,ot=""+new URL("../textures/2k_moon.jpg",import.meta.url).href,nt=""+new URL("../textures/2k_mars.jpg",import.meta.url).href,st=""+new URL("../textures/2k_jupiter.jpg",import.meta.url).href,rt=""+new URL("../textures/2k_saturn.jpg",import.meta.url).href,at=""+new URL("../textures/2k_saturn_ring.png",import.meta.url).href,it=""+new URL("../textures/8k_stars.jpg",import.meta.url).href,n=new G,ut=n.load(it),t={sun:{texture:n.load(V),size:16,position:null,selfRotation:.004,sunRotation:null},mercury:{texture:n.load(Z),size:3.2,position:28,selfRotation:.004,sunRotation:.04},venus:{texture:n.load(tt),size:5.8,position:44,selfRotation:.002,sunRotation:.015},earth:{texture:n.load(et),size:6,position:62,selfRotation:.02,sunRotation:.01},moon:{texture:n.load(ot),size:1.5,position:null,selfRotation:.03,sunRotation:.03},mars:{texture:n.load(nt),size:4,position:78,selfRotation:.018,sunRotation:.008},jupiter:{texture:n.load(st),size:12,position:100,selfRotation:.04,sunRotation:.002},saturn:{texture:n.load(rt),size:10,position:138,selfRotation:.038,sunRotation:9e-4,ring:{texture:n.load(at),innerRadius:12,outerRadius:22}},uranus:{texture:n.load(J),size:7,position:176,selfRotation:.03,sunRotation:4e-4},neptune:{texture:n.load(K),size:7,position:200,selfRotation:.032,sunRotation:1e-4}},ct=new _("hsl(255, 100%, 100%)"),mt=new _("hsl(0,	0%,	20%)");let u,a,c,m;u=new q;a=new T(20,window.innerWidth/window.innerHeight,1,4e3);a.position.set(0,100,600);m=new H({antialias:!0});m.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(m.domElement);c=new F(a,m.domElement);c.enableDamping=!0;c.maxDistance=1200;const pt=Q(mt,.8);u.add(pt);const lt=$(ct,1,400);u.add(lt);const S=v(t.sun.size,30,30,t.sun.texture,t.sun.texture,!1,"basic"),h=r(t.mercury.size,30,30,t.mercury.texture,t.mercury.texture),R=r(t.venus.size,30,30,t.venus.texture),p=r(t.earth.size,30,30,t.earth.texture),x=r(t.moon.size,30,30,t.moon.texture,t.moon.texture),f=r(t.mars.size,30,30,t.mars.texture,t.mars.texture),j=r(t.jupiter.size,30,30,t.jupiter.texture,t.jupiter.texture),i=r(t.saturn.size,30,30,t.saturn.texture),C=I(t.saturn.ring.innerRadius,t.saturn.ring.outerRadius,20,t.saturn.ring.texture),w=r(t.uranus.size,30,30,t.uranus.texture),b=r(t.neptune.size,30,30,t.neptune.texture),dt=v(900,30,30,ut,!1,!0,"basic");for(let o in t){const s=t[o];if(console.log(o),s.position!=null){const d=new B(s.position,s.position+.2,s.position),g=new N({side:X,transparent:!0,depthWrite:!1});d.rotateX(300),u.add(new P(d,g))}}p.mesh.add(x.obj);i.mesh.add(C);h.mesh.position.x=t.mercury.position;R.mesh.position.x=t.venus.position;p.mesh.position.x=t.earth.position;x.mesh.position.z=10;f.mesh.position.x=t.mars.position;j.mesh.position.x=t.jupiter.position;i.mesh.position.x=t.saturn.position;w.mesh.position.x=t.uranus.position;b.mesh.position.x=t.neptune.position;C.rotateX(300);u.add(S,h.obj,R.obj,p.obj,i.obj,f.obj,j.obj,i.obj,w.obj,b.obj,dt);let e=1;const M=()=>{h.obj.rotateY(t.mercury.sunRotation*e),R.obj.rotateY(t.venus.sunRotation*e),p.obj.rotateY(t.earth.sunRotation*e),x.obj.rotateY(t.moon.sunRotation*e),f.obj.rotateY(t.mars.sunRotation*e),j.obj.rotateY(t.jupiter.sunRotation*e),i.obj.rotateY(t.saturn.sunRotation*e),w.obj.rotateY(t.uranus.sunRotation*e),b.obj.rotateY(t.neptune.sunRotation*e),S.rotateY(t.sun.selfRotation*e),h.mesh.rotateY(t.mercury.selfRotation*e),R.mesh.rotateY(t.venus.selfRotation*e),p.mesh.rotateY(t.earth.selfRotation*e),x.mesh.rotateY(t.moon.selfRotation*e),f.mesh.rotateY(t.mars.selfRotation*e),j.mesh.rotateY(t.jupiter.selfRotation*e),i.mesh.rotateY(t.saturn.selfRotation*e),w.mesh.rotateY(t.uranus.selfRotation*e),b.mesh.rotateY(t.neptune.selfRotation*e),c.update(),m.render(u,a),requestAnimationFrame(M)};M();const ht=()=>{const{innerWidth:o,innerHeight:s}=window;m.setSize(o,s),a.aspect=o/s,a.updateProjectionMatrix()};window.addEventListener("resize",ht);const l=document.querySelector(".rotate-btn"),Rt=l.textContent,xt="Wyłącz obracanie",U=()=>{l.addEventListener("click",()=>{c.autoRotate=!0,l.textContent=xt,ft()},{once:!0})},ft=()=>{l.addEventListener("click",()=>{c.autoRotate=!1,l.textContent=Rt,U()},{once:!0})};U();const Y=document.querySelector(".speed-input"),jt=()=>{Y.addEventListener("change",()=>{e=Y.value})};jt();document.body.onload=()=>{document.querySelector(".date").textContent=new Date().toDateString()};document.addEventListener("keydown",o=>{(o.isComposing||o.keyCode===27)&&history.back()});
