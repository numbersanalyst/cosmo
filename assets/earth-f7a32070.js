import{T as k,C as v,S as C,P as T,W as M,a as R,M as W,B as z,b as D,c as E}from"./three.module-4635bcd4.js";import{s as q,O as G}from"./8k_stars_milky_way-7288cd9f.js";const H=""+new URL("../textures/4k_earth_land_ocean_ice_cloud.png",import.meta.url).href,U=""+new URL("../textures/8k_earth_land_ocean_ice.png",import.meta.url).href,B=""+new URL("../textures/8k_earth_topography.png",import.meta.url).href,s=new k,d={earth:s.load(H),earthLand:s.load(U),earthTopo:s.load(B),stars:s.load(q)},w=new v("hsl(255, 100%, 100%)");let p,n,e,i;p=new C;n=new T(20,window.innerWidth/window.innerHeight,1,1e3);n.position.set(0,0,50);i=new M({antialias:!0});i.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(i.domElement);e=new G(n,i.domElement);e.enableDamping=!0;e.enablePan=!1;e.minDistance=10;e.maxDistance=200;const m=(t,a,S,_,u,P)=>{const x=new R(t,a,S),o=new W({map:_});return u&&(o.bumpMap=u,o.bumpScale=.1),P&&(o.side=z,o.transparent=!0,o.opacity=.8),new D(x,o)},f=(t,a)=>new E(t,a),l=m(5,50,50,d.earth),h=m(5,50,50,d.earthLand,d.earthTopo),g=m(100,50,50,d.stars,!1,!0),b=f(w,1),y=f(w,.1);g.rotation.x=.5;b.position.set(-50,50,30);y.position.set(0,0,30);n.add(b,y);p.add(l,h,g,n);let r,c;const L=()=>{c=e.getDistance(),c>30?r!=1&&(e.rotateSpeed=1,l.visible=!0,h.visible=!1,r=1):c>20?r!=2&&(e.rotateSpeed=.4,l.visible=!1,h.visible=!0,r=2):r!=3&&(e.rotateSpeed=.2,r=3),e.update(),i.render(p,n),requestAnimationFrame(L)};L();const O=()=>{const{innerWidth:t,innerHeight:a}=window;i.setSize(t,a),n.aspect=t/a,n.updateProjectionMatrix()};window.addEventListener("resize",O);document.body.onload=()=>{document.querySelector("div").style.opacity=0};setTimeout(()=>{document.querySelector("div").style.display="none"},1e4);document.addEventListener("keydown",t=>{(t.isComposing||t.keyCode===27)&&history.back()});