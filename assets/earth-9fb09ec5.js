import{T as C,C as k,S,P as _,W as y}from"./three.module-a07ff3bb.js";import{s as P,O as R,c as h}from"./8k_stars_milky_way-a2432ee0.js";import{c as m}from"./createPointLight-230146c1.js";const v=""+new URL("../textures/4k_earth_land_ocean_ice_cloud.png",import.meta.url).href,T=""+new URL("../textures/8k_earth_land_ocean_ice.png",import.meta.url).href,D=""+new URL("../textures/8k_earth_topography.png",import.meta.url).href,i=new C,s={earth:i.load(v),earthLand:i.load(T),earthTopo:i.load(D),stars:i.load(P)},w=new k("hsl(255, 100%, 100%)");let p,t,e,o;p=new S;t=new _(20,window.innerWidth/window.innerHeight,1,1e3);t.position.set(0,0,50);o=new y({antialias:!0});o.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(o.domElement);e=new R(t,o.domElement);e.enableDamping=!0;e.enablePan=!1;e.minDistance=10;e.maxDistance=200;const r=document.querySelector(".rotate-btn"),E=r.textContent,W="Wyłącz obracanie",f=()=>{r.addEventListener("click",()=>{e.autoRotate=!0,r.textContent=W,z()},{once:!0})},z=()=>{r.addEventListener("click",()=>{e.autoRotate=!1,r.textContent=E,f()},{once:!0})};f();const d=h(5,50,50,s.earth),l=h(5,50,50,s.earthLand,s.earthTopo),g=h(100,50,50,s.stars,!1,!0),x=m(w,1),L=m(w,.1);g.rotation.x=.5;x.position.set(-50,50,30);L.position.set(0,0,30);t.add(x,L);p.add(d,l,g,t);let n,c;const b=()=>{c=e.getDistance(),c>30?n!=1&&(e.rotateSpeed=1,d.visible=!0,l.visible=!1,n=1):c>20?n!=2&&(e.rotateSpeed=.4,d.visible=!1,l.visible=!0,n=2):n!=3&&(e.rotateSpeed=.2,n=3),e.update(),o.render(p,t),requestAnimationFrame(b)};b();const O=()=>{const{innerWidth:a,innerHeight:u}=window;o.setSize(a,u),t.aspect=a/u,t.updateProjectionMatrix()};window.addEventListener("resize",O);document.body.onload=()=>{document.querySelector(".date").textContent=new Date().toDateString()};document.addEventListener("keydown",a=>{(a.isComposing||a.keyCode===27)&&history.back()});
