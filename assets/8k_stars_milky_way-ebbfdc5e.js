import{E as Ne,V as d,c as L,d as D,Q as ce,e as le,f as u,g as je,M as ke,B as Re,b as xe}from"./three.module-8aee693a.js";const ue={type:"change"},X={type:"start"},pe={type:"end"};class Ye extends Ne{constructor(k,H){super(),this.object=k,this.domElement=H,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new d,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:L.ROTATE,MIDDLE:L.DOLLY,RIGHT:L.PAN},this.touches={ONE:D.ROTATE,TWO:D.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return i.phi},this.getAzimuthalAngle=function(){return i.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",Z),this._domElementKeyEvents=t},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Z),this._domElementKeyEvents=null},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(ue),e.update(),s=o.NONE},this.update=function(){const t=new d,n=new ce().setFromUnitVectors(k.up,new d(0,1,0)),r=n.clone().invert(),c=new d,l=new ce,A=2*Math.PI;return function(){const re=e.object.position;t.copy(re).sub(e.target),t.applyQuaternion(n),i.setFromVector3(t),e.autoRotate&&s===o.NONE&&N(me()),e.enableDamping?(i.theta+=p.theta*e.dampingFactor,i.phi+=p.phi*e.dampingFactor):(i.theta+=p.theta,i.phi+=p.phi);let m=e.minAzimuthAngle,h=e.maxAzimuthAngle;return isFinite(m)&&isFinite(h)&&(m<-Math.PI?m+=A:m>Math.PI&&(m-=A),h<-Math.PI?h+=A:h>Math.PI&&(h-=A),m<=h?i.theta=Math.max(m,Math.min(h,i.theta)):i.theta=i.theta>(m+h)/2?Math.max(m,i.theta):Math.min(h,i.theta)),i.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,i.phi)),i.makeSafe(),i.radius*=x,i.radius=Math.max(e.minDistance,Math.min(e.maxDistance,i.radius)),e.enableDamping===!0?e.target.addScaledVector(g,e.dampingFactor):e.target.add(g),t.setFromSpherical(i),t.applyQuaternion(r),re.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(p.theta*=1-e.dampingFactor,p.phi*=1-e.dampingFactor,g.multiplyScalar(1-e.dampingFactor)):(p.set(0,0,0),g.set(0,0,0)),x=1,I||c.distanceToSquared(e.object.position)>R||8*(1-l.dot(e.object.quaternion))>R?(e.dispatchEvent(ue),c.copy(e.object.position),l.copy(e.object.quaternion),I=!1,!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",ie),e.domElement.removeEventListener("pointerdown",oe),e.domElement.removeEventListener("pointercancel",j),e.domElement.removeEventListener("wheel",ae),e.domElement.removeEventListener("pointermove",U),e.domElement.removeEventListener("pointerup",j),e._domElementKeyEvents!==null&&(e._domElementKeyEvents.removeEventListener("keydown",Z),e._domElementKeyEvents=null)};const e=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=o.NONE;const R=1e-6,i=new le,p=new le;let x=1;const g=new d;let I=!1;const f=new u,b=new u,P=new u,y=new u,E=new u,T=new u,O=new u,M=new u,S=new u,a=[],Y={};function me(){return 2*Math.PI/60/60*e.autoRotateSpeed}function _(){return Math.pow(.95,e.zoomSpeed)}function N(t){p.theta-=t}function C(t){p.phi-=t}const V=function(){const t=new d;return function(r,c){t.setFromMatrixColumn(c,0),t.multiplyScalar(-r),g.add(t)}}(),G=function(){const t=new d;return function(r,c){e.screenSpacePanning===!0?t.setFromMatrixColumn(c,1):(t.setFromMatrixColumn(c,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(r),g.add(t)}}(),w=function(){const t=new d;return function(r,c){const l=e.domElement;if(e.object.isPerspectiveCamera){const A=e.object.position;t.copy(A).sub(e.target);let K=t.length();K*=Math.tan(e.object.fov/2*Math.PI/180),V(2*r*K/l.clientHeight,e.object.matrix),G(2*c*K/l.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(V(r*(e.object.right-e.object.left)/e.object.zoom/l.clientWidth,e.object.matrix),G(c*(e.object.top-e.object.bottom)/e.object.zoom/l.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function z(t){e.object.isPerspectiveCamera?x/=t:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom*t)),e.object.updateProjectionMatrix(),I=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function B(t){e.object.isPerspectiveCamera?x*=t:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/t)),e.object.updateProjectionMatrix(),I=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function W(t){f.set(t.clientX,t.clientY)}function he(t){O.set(t.clientX,t.clientY)}function q(t){y.set(t.clientX,t.clientY)}function de(t){b.set(t.clientX,t.clientY),P.subVectors(b,f).multiplyScalar(e.rotateSpeed);const n=e.domElement;N(2*Math.PI*P.x/n.clientHeight),C(2*Math.PI*P.y/n.clientHeight),f.copy(b),e.update()}function fe(t){M.set(t.clientX,t.clientY),S.subVectors(M,O),S.y>0?z(_()):S.y<0&&B(_()),O.copy(M),e.update()}function be(t){E.set(t.clientX,t.clientY),T.subVectors(E,y).multiplyScalar(e.panSpeed),w(T.x,T.y),y.copy(E),e.update()}function ye(t){t.deltaY<0?B(_()):t.deltaY>0&&z(_()),e.update()}function Ee(t){let n=!1;switch(t.code){case e.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?C(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):w(0,e.keyPanSpeed),n=!0;break;case e.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?C(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):w(0,-e.keyPanSpeed),n=!0;break;case e.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?N(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):w(e.keyPanSpeed,0),n=!0;break;case e.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?N(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):w(-e.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),e.update())}function Q(){if(a.length===1)f.set(a[0].pageX,a[0].pageY);else{const t=.5*(a[0].pageX+a[1].pageX),n=.5*(a[0].pageY+a[1].pageY);f.set(t,n)}}function J(){if(a.length===1)y.set(a[0].pageX,a[0].pageY);else{const t=.5*(a[0].pageX+a[1].pageX),n=.5*(a[0].pageY+a[1].pageY);y.set(t,n)}}function $(){const t=a[0].pageX-a[1].pageX,n=a[0].pageY-a[1].pageY,r=Math.sqrt(t*t+n*n);O.set(0,r)}function ge(){e.enableZoom&&$(),e.enablePan&&J()}function Pe(){e.enableZoom&&$(),e.enableRotate&&Q()}function ee(t){if(a.length==1)b.set(t.pageX,t.pageY);else{const r=F(t),c=.5*(t.pageX+r.x),l=.5*(t.pageY+r.y);b.set(c,l)}P.subVectors(b,f).multiplyScalar(e.rotateSpeed);const n=e.domElement;N(2*Math.PI*P.x/n.clientHeight),C(2*Math.PI*P.y/n.clientHeight),f.copy(b)}function te(t){if(a.length===1)E.set(t.pageX,t.pageY);else{const n=F(t),r=.5*(t.pageX+n.x),c=.5*(t.pageY+n.y);E.set(r,c)}T.subVectors(E,y).multiplyScalar(e.panSpeed),w(T.x,T.y),y.copy(E)}function ne(t){const n=F(t),r=t.pageX-n.x,c=t.pageY-n.y,l=Math.sqrt(r*r+c*c);M.set(0,l),S.set(0,Math.pow(M.y/O.y,e.zoomSpeed)),z(S.y),O.copy(M)}function Te(t){e.enableZoom&&ne(t),e.enablePan&&te(t)}function Oe(t){e.enableZoom&&ne(t),e.enableRotate&&ee(t)}function oe(t){e.enabled!==!1&&(a.length===0&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",U),e.domElement.addEventListener("pointerup",j)),De(t),t.pointerType==="touch"?Ae(t):Me(t))}function U(t){e.enabled!==!1&&(t.pointerType==="touch"?Le(t):we(t))}function j(t){Se(t),a.length===0&&(e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",U),e.domElement.removeEventListener("pointerup",j)),e.dispatchEvent(pe),s=o.NONE}function Me(t){let n;switch(t.button){case 0:n=e.mouseButtons.LEFT;break;case 1:n=e.mouseButtons.MIDDLE;break;case 2:n=e.mouseButtons.RIGHT;break;default:n=-1}switch(n){case L.DOLLY:if(e.enableZoom===!1)return;he(t),s=o.DOLLY;break;case L.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;q(t),s=o.PAN}else{if(e.enableRotate===!1)return;W(t),s=o.ROTATE}break;case L.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;W(t),s=o.ROTATE}else{if(e.enablePan===!1)return;q(t),s=o.PAN}break;default:s=o.NONE}s!==o.NONE&&e.dispatchEvent(X)}function we(t){switch(s){case o.ROTATE:if(e.enableRotate===!1)return;de(t);break;case o.DOLLY:if(e.enableZoom===!1)return;fe(t);break;case o.PAN:if(e.enablePan===!1)return;be(t);break}}function ae(t){e.enabled===!1||e.enableZoom===!1||s!==o.NONE||(t.preventDefault(),e.dispatchEvent(X),ye(t),e.dispatchEvent(pe))}function Z(t){e.enabled===!1||e.enablePan===!1||Ee(t)}function Ae(t){switch(se(t),a.length){case 1:switch(e.touches.ONE){case D.ROTATE:if(e.enableRotate===!1)return;Q(),s=o.TOUCH_ROTATE;break;case D.PAN:if(e.enablePan===!1)return;J(),s=o.TOUCH_PAN;break;default:s=o.NONE}break;case 2:switch(e.touches.TWO){case D.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;ge(),s=o.TOUCH_DOLLY_PAN;break;case D.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Pe(),s=o.TOUCH_DOLLY_ROTATE;break;default:s=o.NONE}break;default:s=o.NONE}s!==o.NONE&&e.dispatchEvent(X)}function Le(t){switch(se(t),s){case o.TOUCH_ROTATE:if(e.enableRotate===!1)return;ee(t),e.update();break;case o.TOUCH_PAN:if(e.enablePan===!1)return;te(t),e.update();break;case o.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Te(t),e.update();break;case o.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Oe(t),e.update();break;default:s=o.NONE}}function ie(t){e.enabled!==!1&&t.preventDefault()}function De(t){a.push(t)}function Se(t){delete Y[t.pointerId];for(let n=0;n<a.length;n++)if(a[n].pointerId==t.pointerId){a.splice(n,1);return}}function se(t){let n=Y[t.pointerId];n===void 0&&(n=new u,Y[t.pointerId]=n),n.set(t.pageX,t.pageY)}function F(t){const n=t.pointerId===a[0].pointerId?a[1]:a[0];return Y[n.pointerId]}e.domElement.addEventListener("contextmenu",ie),e.domElement.addEventListener("pointerdown",oe),e.domElement.addEventListener("pointercancel",j),e.domElement.addEventListener("wheel",ae,{passive:!1}),this.update()}}const _e=(v,k,H,e,o,s)=>{const R=new je(v,k,H),i=new ke({map:e});return o&&(i.bumpMap=o,i.bumpScale=.1),s&&(i.side=Re,i.transparent=!0,i.opacity=.8),new xe(R,i)},Ce=""+new URL("../textures/8k_stars_milky_way.jpg",import.meta.url).href;export{Ye as O,_e as c,Ce as s};
