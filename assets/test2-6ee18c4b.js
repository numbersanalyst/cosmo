import{S as y,P as z,W as g,a as S,i as b,b as P,c as x,O as L}from"./three.module-4635bcd4.js";let w,n,i;w=new y;n=new z(40,window.innerWidth/window.innerHeight,1e-4,1e4);n.position.set(0,0,60);i=new g({antialias:!0,alpha:!0});i.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(i.domElement);const f=(e=1,t=16777215)=>{const s=new S(e,20,20),r=new b({color:t,shininess:30});return new P(s,r)},l=(e=1,t=16777215)=>new x(t,e),o=f(3),v=l(.8),m=l(.9);v.position.set(10,20,30);m.position.set(-10,20,40);w.add(o,m);o.add(v);const a=(e=.4,t=16777215)=>{const s=f(e,t),r=new L;return r.add(s),{sphere:s,pivot:r}},p=a(.4),c=a(.4),d=a(.4),h=a(.4);p.sphere.position.set(10,0,0);c.sphere.position.set(5,0,0);d.sphere.position.set(-5,0,0);h.sphere.position.set(-10,0,0);o.add(p.pivot,c.pivot,d.pivot,h.pivot);p.pivot.rotation.y=90;c.pivot.rotation.y=60;d.pivot.rotation.y=-60;h.pivot.rotation.y=-90;const M=()=>{const{innerWidth:e,innerHeight:t}=window;i.setSize(e,t),n.aspect=e/t,n.updateProjectionMatrix()},u=()=>{p.pivot.rotation.z+=.01,c.pivot.rotation.z+=.02,d.pivot.rotation.z+=.03,h.pivot.rotation.z+=.04,o.rotation.x+=.001,o.rotation.y+=.002,o.rotation.z+=.003,i.render(w,n),requestAnimationFrame(u)};u();window.addEventListener("resize",M);document.addEventListener("keydown",e=>{(e.isComposing||e.keyCode===27)&&history.back()});document.body.onload=()=>{document.querySelector("p").style.opacity=0};
