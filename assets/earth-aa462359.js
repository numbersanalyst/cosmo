import{E as We,V as y,M as x,T as R,Q as Ee,S as Pe,a as p,b as Ve,C as qe,c as Ge,P as Be,W as Qe,d as Je,e as $e,B as et,f as tt,g as nt}from"./three.module-d2e59b6d.js";const we={type:"change"},Q={type:"start"},Te={type:"end"};class ot extends We{constructor(h,W){super(),this.object=h,this.domElement=W,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:x.ROTATE,MIDDLE:x.DOLLY,RIGHT:x.PAN},this.touches={ONE:R.ROTATE,TWO:R.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return i.phi},this.getAzimuthalAngle=function(){return i.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",G),this._domElementKeyEvents=t},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",G),this._domElementKeyEvents=null},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(we),e.update(),s=o.NONE},this.update=function(){const t=new y,n=new Ee().setFromUnitVectors(h.up,new y(0,1,0)),r=n.clone().invert(),c=new y,l=new Ee,k=2*Math.PI;return function(){const ge=e.object.position;t.copy(ge).sub(e.target),t.applyQuaternion(n),i.setFromVector3(t),e.autoRotate&&s===o.NONE&&I(ke()),e.enableDamping?(i.theta+=m.theta*e.dampingFactor,i.phi+=m.phi*e.dampingFactor):(i.theta+=m.theta,i.phi+=m.phi);let f=e.minAzimuthAngle,b=e.maxAzimuthAngle;return isFinite(f)&&isFinite(b)&&(f<-Math.PI?f+=k:f>Math.PI&&(f-=k),b<-Math.PI?b+=k:b>Math.PI&&(b-=k),f<=b?i.theta=Math.max(f,Math.min(b,i.theta)):i.theta=i.theta>(f+b)/2?Math.max(f,i.theta):Math.min(b,i.theta)),i.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,i.phi)),i.makeSafe(),i.radius*=H,i.radius=Math.max(e.minDistance,Math.min(e.maxDistance,i.radius)),e.enableDamping===!0?e.target.addScaledVector(O,e.dampingFactor):e.target.add(O),t.setFromSpherical(i),t.applyQuaternion(r),ge.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(m.theta*=1-e.dampingFactor,m.phi*=1-e.dampingFactor,O.multiplyScalar(1-e.dampingFactor)):(m.set(0,0,0),O.set(0,0,0)),H=1,K||c.distanceToSquared(e.object.position)>Y||8*(1-l.dot(e.object.quaternion))>Y?(e.dispatchEvent(we),c.copy(e.object.position),l.copy(e.object.quaternion),K=!1,!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",be),e.domElement.removeEventListener("pointerdown",me),e.domElement.removeEventListener("pointercancel",C),e.domElement.removeEventListener("wheel",fe),e.domElement.removeEventListener("pointermove",q),e.domElement.removeEventListener("pointerup",C),e._domElementKeyEvents!==null&&(e._domElementKeyEvents.removeEventListener("keydown",G),e._domElementKeyEvents=null)};const e=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=o.NONE;const Y=1e-6,i=new Pe,m=new Pe;let H=1;const O=new y;let K=!1;const E=new p,P=new p,L=new p,w=new p,T=new p,M=new p,S=new p,A=new p,_=new p,a=[],z={};function ke(){return 2*Math.PI/60/60*e.autoRotateSpeed}function U(){return Math.pow(.95,e.zoomSpeed)}function I(t){m.theta-=t}function v(t){m.phi-=t}const oe=function(){const t=new y;return function(r,c){t.setFromMatrixColumn(c,0),t.multiplyScalar(-r),O.add(t)}}(),ae=function(){const t=new y;return function(r,c){e.screenSpacePanning===!0?t.setFromMatrixColumn(c,1):(t.setFromMatrixColumn(c,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(r),O.add(t)}}(),D=function(){const t=new y;return function(r,c){const l=e.domElement;if(e.object.isPerspectiveCamera){const k=e.object.position;t.copy(k).sub(e.target);let Z=t.length();Z*=Math.tan(e.object.fov/2*Math.PI/180),oe(2*r*Z/l.clientHeight,e.object.matrix),ae(2*c*Z/l.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(oe(r*(e.object.right-e.object.left)/e.object.zoom/l.clientWidth,e.object.matrix),ae(c*(e.object.top-e.object.bottom)/e.object.zoom/l.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function V(t){e.object.isPerspectiveCamera?H/=t:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom*t)),e.object.updateProjectionMatrix(),K=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function ie(t){e.object.isPerspectiveCamera?H*=t:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/t)),e.object.updateProjectionMatrix(),K=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function se(t){E.set(t.clientX,t.clientY)}function xe(t){S.set(t.clientX,t.clientY)}function re(t){w.set(t.clientX,t.clientY)}function Re(t){P.set(t.clientX,t.clientY),L.subVectors(P,E).multiplyScalar(e.rotateSpeed);const n=e.domElement;I(2*Math.PI*L.x/n.clientHeight),v(2*Math.PI*L.y/n.clientHeight),E.copy(P),e.update()}function Ne(t){A.set(t.clientX,t.clientY),_.subVectors(A,S),_.y>0?V(U()):_.y<0&&ie(U()),S.copy(A),e.update()}function je(t){T.set(t.clientX,t.clientY),M.subVectors(T,w).multiplyScalar(e.panSpeed),D(M.x,M.y),w.copy(T),e.update()}function _e(t){t.deltaY<0?ie(U()):t.deltaY>0&&V(U()),e.update()}function Ie(t){let n=!1;switch(t.code){case e.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?v(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):D(0,e.keyPanSpeed),n=!0;break;case e.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?v(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):D(0,-e.keyPanSpeed),n=!0;break;case e.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?I(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):D(e.keyPanSpeed,0),n=!0;break;case e.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?I(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):D(-e.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),e.update())}function ce(){if(a.length===1)E.set(a[0].pageX,a[0].pageY);else{const t=.5*(a[0].pageX+a[1].pageX),n=.5*(a[0].pageY+a[1].pageY);E.set(t,n)}}function le(){if(a.length===1)w.set(a[0].pageX,a[0].pageY);else{const t=.5*(a[0].pageX+a[1].pageX),n=.5*(a[0].pageY+a[1].pageY);w.set(t,n)}}function ue(){const t=a[0].pageX-a[1].pageX,n=a[0].pageY-a[1].pageY,r=Math.sqrt(t*t+n*n);S.set(0,r)}function Ce(){e.enableZoom&&ue(),e.enablePan&&le()}function Ye(){e.enableZoom&&ue(),e.enableRotate&&ce()}function pe(t){if(a.length==1)P.set(t.pageX,t.pageY);else{const r=B(t),c=.5*(t.pageX+r.x),l=.5*(t.pageY+r.y);P.set(c,l)}L.subVectors(P,E).multiplyScalar(e.rotateSpeed);const n=e.domElement;I(2*Math.PI*L.x/n.clientHeight),v(2*Math.PI*L.y/n.clientHeight),E.copy(P)}function de(t){if(a.length===1)T.set(t.pageX,t.pageY);else{const n=B(t),r=.5*(t.pageX+n.x),c=.5*(t.pageY+n.y);T.set(r,c)}M.subVectors(T,w).multiplyScalar(e.panSpeed),D(M.x,M.y),w.copy(T)}function he(t){const n=B(t),r=t.pageX-n.x,c=t.pageY-n.y,l=Math.sqrt(r*r+c*c);A.set(0,l),_.set(0,Math.pow(A.y/S.y,e.zoomSpeed)),V(_.y),S.copy(A)}function He(t){e.enableZoom&&he(t),e.enablePan&&de(t)}function Ke(t){e.enableZoom&&he(t),e.enableRotate&&pe(t)}function me(t){e.enabled!==!1&&(a.length===0&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",q),e.domElement.addEventListener("pointerup",C)),Fe(t),t.pointerType==="touch"?ve(t):ze(t))}function q(t){e.enabled!==!1&&(t.pointerType==="touch"?Ze(t):Ue(t))}function C(t){Xe(t),a.length===0&&(e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",q),e.domElement.removeEventListener("pointerup",C)),e.dispatchEvent(Te),s=o.NONE}function ze(t){let n;switch(t.button){case 0:n=e.mouseButtons.LEFT;break;case 1:n=e.mouseButtons.MIDDLE;break;case 2:n=e.mouseButtons.RIGHT;break;default:n=-1}switch(n){case x.DOLLY:if(e.enableZoom===!1)return;xe(t),s=o.DOLLY;break;case x.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;re(t),s=o.PAN}else{if(e.enableRotate===!1)return;se(t),s=o.ROTATE}break;case x.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;se(t),s=o.ROTATE}else{if(e.enablePan===!1)return;re(t),s=o.PAN}break;default:s=o.NONE}s!==o.NONE&&e.dispatchEvent(Q)}function Ue(t){switch(s){case o.ROTATE:if(e.enableRotate===!1)return;Re(t);break;case o.DOLLY:if(e.enableZoom===!1)return;Ne(t);break;case o.PAN:if(e.enablePan===!1)return;je(t);break}}function fe(t){e.enabled===!1||e.enableZoom===!1||s!==o.NONE||(t.preventDefault(),e.dispatchEvent(Q),_e(t),e.dispatchEvent(Te))}function G(t){e.enabled===!1||e.enablePan===!1||Ie(t)}function ve(t){switch(ye(t),a.length){case 1:switch(e.touches.ONE){case R.ROTATE:if(e.enableRotate===!1)return;ce(),s=o.TOUCH_ROTATE;break;case R.PAN:if(e.enablePan===!1)return;le(),s=o.TOUCH_PAN;break;default:s=o.NONE}break;case 2:switch(e.touches.TWO){case R.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ce(),s=o.TOUCH_DOLLY_PAN;break;case R.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ye(),s=o.TOUCH_DOLLY_ROTATE;break;default:s=o.NONE}break;default:s=o.NONE}s!==o.NONE&&e.dispatchEvent(Q)}function Ze(t){switch(ye(t),s){case o.TOUCH_ROTATE:if(e.enableRotate===!1)return;pe(t),e.update();break;case o.TOUCH_PAN:if(e.enablePan===!1)return;de(t),e.update();break;case o.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;He(t),e.update();break;case o.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ke(t),e.update();break;default:s=o.NONE}}function be(t){e.enabled!==!1&&t.preventDefault()}function Fe(t){a.push(t)}function Xe(t){delete z[t.pointerId];for(let n=0;n<a.length;n++)if(a[n].pointerId==t.pointerId){a.splice(n,1);return}}function ye(t){let n=z[t.pointerId];n===void 0&&(n=new p,z[t.pointerId]=n),n.set(t.pageX,t.pageY)}function B(t){const n=t.pointerId===a[0].pointerId?a[1]:a[0];return z[n.pointerId]}e.domElement.addEventListener("contextmenu",be),e.domElement.addEventListener("pointerdown",me),e.domElement.addEventListener("pointercancel",C),e.domElement.addEventListener("wheel",fe,{passive:!1}),this.update()}}const at=""+new URL("../textures/4k_earth_land_ocean_ice_cloud.png",import.meta.url).href,it=""+new URL("../textures/8k_earth_land_ocean_ice.png",import.meta.url).href,st=""+new URL("../textures/8k_earth_topography.png",import.meta.url).href,rt=""+new URL("../textures/8k_stars_milky_way.jpg",import.meta.url).href,F=new Ve,X={earth:F.load(at),earthLand:F.load(it),earthTopo:F.load(st),stars:F.load(rt)},Oe=new qe("hsl(255, 100%, 100%)");let te,g,d,j;te=new Ge;g=new Be(20,window.innerWidth/window.innerHeight,1,1e3);g.position.set(0,0,50);j=new Qe({antialias:!0});j.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(j.domElement);d=new ot(g,j.domElement);d.enableDamping=!0;d.enablePan=!1;d.minDistance=10;d.maxDistance=200;const ne=(u,h,W,e,o,s)=>{const Y=new Je(u,h,W),i=new $e({map:e});return o&&(i.bumpMap=o,i.bumpScale=.1),s&&(i.side=et,i.transparent=!0,i.opacity=.8),new tt(Y,i)},Le=(u,h)=>new nt(u,h),$=ne(5,50,50,X.earth),ee=ne(5,50,50,X.earthLand,X.earthTopo),Me=ne(100,50,50,X.stars,!1,!0),Se=Le(Oe,1),Ae=Le(Oe,.1);Me.rotation.x=.5;Se.position.set(-50,50,30);Ae.position.set(0,0,30);g.add(Se,Ae);te.add($,ee,Me,g);let N,J;const De=()=>{J=d.getDistance(),J>30?N!=1&&(d.rotateSpeed=1,$.visible=!0,ee.visible=!1,N=1):J>20?N!=2&&(d.rotateSpeed=.4,$.visible=!1,ee.visible=!0,N=2):N!=3&&(d.rotateSpeed=.2,N=3),d.update(),j.render(te,g),requestAnimationFrame(De)};De();const ct=()=>{const{innerWidth:u,innerHeight:h}=window;j.setSize(u,h),g.aspect=u/h,g.updateProjectionMatrix()};window.addEventListener("resize",ct);document.body.onload=()=>{document.querySelector("div").style.opacity=0};setTimeout(()=>{document.querySelector("div").style.display="none"},1e4);document.addEventListener("keydown",u=>{(u.isComposing||u.keyCode===27)&&history.back()});