import{T as S,C as b,b as C,P as f,W as k,a as c,S as d,d as l,e as L,B as M}from"./three.module-9d3ea82d.js";import{O as N,a as P,c as m}from"./createPointLight-1273ba41.js";import{s as z}from"./8k_stars_milky_way-3b65bd0d.js";const R="varying vec2 vertexUV;varying vec3 vertexNormal;void main(){vertexUV=uv;vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",D="uniform sampler2D globeTexture;varying vec2 vertexUV;varying vec3 vertexNormal;void main(){float intensity=1.05-dot(vertexNormal,vec3(0.0,0.0,1.0));vec3 atmosphere=vec3(0.9,0.6,0.0)*pow(intensity,1.5);gl_FragColor=vec4(atmosphere+texture2D(globeTexture,vertexUV).xyz,1.0);}",T="varying vec3 vertexNormal;void main(){vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",V="varying vec3 vertexNormal;void main(){float intensity=pow(0.4-dot(vertexNormal,vec3(0.0,0.0,1.0)),5.0);gl_FragColor=vec4(0.9,0.6,0.0,1.0)*intensity;}",E=""+new URL("../textures/8k_sun.jpg",import.meta.url).href,s=new S,v={sun:s.load(E),stars:s.load(z)},u=new b("hsl(255, 100%, 100%)");let a,e,t,n;a=new C;e=new f(20,window.innerWidth/window.innerHeight,1,1e3);e.position.set(0,0,50);n=new k({antialias:!0});n.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(n.domElement);t=new N(e,n.domElement);t.enableDamping=!0;t.enablePan=!1;t.minDistance=10;t.maxDistance=200;const W=new c(new d(5,50,50),new l({vertexShader:R,fragmentShader:D,uniforms:{globeTexture:{value:v.sun}}})),x=new c(new d(5,50,50),new l({vertexShader:T,fragmentShader:V,blending:L,side:M,transparent:!0}));x.scale.set(1.4,1.4,1.4);const g=P(100,50,50,v.stars,!1,!0,"basic"),h=m(u,1),p=m(u,.1);g.rotation.x=.5;h.position.set(-50,50,30);p.position.set(0,0,30);e.add(h,p);a.add(W,x,g,e);const w=()=>{t.update(),n.render(a,e),requestAnimationFrame(w)};w();const U=()=>{const{innerWidth:o,innerHeight:i}=window;n.setSize(o,i),e.aspect=o/i,e.updateProjectionMatrix()};window.addEventListener("resize",U);const r=document.querySelector(".rotate-btn"),_=r.textContent,j="Wyłącz obracanie",y=()=>{r.addEventListener("click",()=>{t.autoRotate=!0,r.textContent=j,B()},{once:!0})},B=()=>{r.addEventListener("click",()=>{t.autoRotate=!1,r.textContent=_,y()},{once:!0})};y();document.body.onload=()=>{document.querySelector(".date").textContent=new Date().toDateString()};document.addEventListener("keydown",o=>{(o.isComposing||o.keyCode===27)&&history.back()});
