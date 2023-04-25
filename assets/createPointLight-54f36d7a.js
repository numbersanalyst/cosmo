import{E as Ne,V as d,c as S,d as D,Q as ce,e as le,f as u,S as je,M as Re,B as ke,a as xe,g as Ie}from"./three.module-5fde15d4.js";const ue={type:"change"},v={type:"start"},pe={type:"end"};class _e extends Ne{constructor(g,N){super(),this.object=g,this.domElement=N,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new d,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:S.ROTATE,MIDDLE:S.DOLLY,RIGHT:S.PAN},this.touches={ONE:D.ROTATE,TWO:D.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return i.phi},this.getAzimuthalAngle=function(){return i.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",F),this._domElementKeyEvents=t},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",F),this._domElementKeyEvents=null},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(ue),e.update(),s=o.NONE},this.update=function(){const t=new d,n=new ce().setFromUnitVectors(g.up,new d(0,1,0)),r=n.clone().invert(),c=new d,l=new ce,L=2*Math.PI;return function(){const re=e.object.position;t.copy(re).sub(e.target),t.applyQuaternion(n),i.setFromVector3(t),e.autoRotate&&s===o.NONE&&R(he()),e.enableDamping?(i.theta+=p.theta*e.dampingFactor,i.phi+=p.phi*e.dampingFactor):(i.theta+=p.theta,i.phi+=p.phi);let h=e.minAzimuthAngle,m=e.maxAzimuthAngle;return isFinite(h)&&isFinite(m)&&(h<-Math.PI?h+=L:h>Math.PI&&(h-=L),m<-Math.PI?m+=L:m>Math.PI&&(m-=L),h<=m?i.theta=Math.max(h,Math.min(m,i.theta)):i.theta=i.theta>(h+m)/2?Math.max(h,i.theta):Math.min(m,i.theta)),i.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,i.phi)),i.makeSafe(),i.radius*=Y,i.radius=Math.max(e.minDistance,Math.min(e.maxDistance,i.radius)),e.enableDamping===!0?e.target.addScaledVector(P,e.dampingFactor):e.target.add(P),t.setFromSpherical(i),t.applyQuaternion(r),re.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(p.theta*=1-e.dampingFactor,p.phi*=1-e.dampingFactor,P.multiplyScalar(1-e.dampingFactor)):(p.set(0,0,0),P.set(0,0,0)),Y=1,_||c.distanceToSquared(e.object.position)>I||8*(1-l.dot(e.object.quaternion))>I?(e.dispatchEvent(ue),c.copy(e.object.position),l.copy(e.object.quaternion),_=!1,!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",ie),e.domElement.removeEventListener("pointerdown",oe),e.domElement.removeEventListener("pointercancel",k),e.domElement.removeEventListener("wheel",ae),e.domElement.removeEventListener("pointermove",Z),e.domElement.removeEventListener("pointerup",k),e._domElementKeyEvents!==null&&(e._domElementKeyEvents.removeEventListener("keydown",F),e._domElementKeyEvents=null)};const e=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=o.NONE;const I=1e-6,i=new le,p=new le;let Y=1;const P=new d;let _=!1;const f=new u,b=new u,T=new u,y=new u,E=new u,O=new u,M=new u,w=new u,j=new u,a=[],C={};function he(){return 2*Math.PI/60/60*e.autoRotateSpeed}function K(){return Math.pow(.95,e.zoomSpeed)}function R(t){p.theta-=t}function H(t){p.phi-=t}const V=function(){const t=new d;return function(r,c){t.setFromMatrixColumn(c,0),t.multiplyScalar(-r),P.add(t)}}(),G=function(){const t=new d;return function(r,c){e.screenSpacePanning===!0?t.setFromMatrixColumn(c,1):(t.setFromMatrixColumn(c,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(r),P.add(t)}}(),A=function(){const t=new d;return function(r,c){const l=e.domElement;if(e.object.isPerspectiveCamera){const L=e.object.position;t.copy(L).sub(e.target);let z=t.length();z*=Math.tan(e.object.fov/2*Math.PI/180),V(2*r*z/l.clientHeight,e.object.matrix),G(2*c*z/l.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(V(r*(e.object.right-e.object.left)/e.object.zoom/l.clientWidth,e.object.matrix),G(c*(e.object.top-e.object.bottom)/e.object.zoom/l.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function U(t){e.object.isPerspectiveCamera?Y/=t:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom*t)),e.object.updateProjectionMatrix(),_=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function B(t){e.object.isPerspectiveCamera?Y*=t:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/t)),e.object.updateProjectionMatrix(),_=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function W(t){f.set(t.clientX,t.clientY)}function me(t){M.set(t.clientX,t.clientY)}function q(t){y.set(t.clientX,t.clientY)}function de(t){b.set(t.clientX,t.clientY),T.subVectors(b,f).multiplyScalar(e.rotateSpeed);const n=e.domElement;R(2*Math.PI*T.x/n.clientHeight),H(2*Math.PI*T.y/n.clientHeight),f.copy(b),e.update()}function fe(t){w.set(t.clientX,t.clientY),j.subVectors(w,M),j.y>0?U(K()):j.y<0&&B(K()),M.copy(w),e.update()}function be(t){E.set(t.clientX,t.clientY),O.subVectors(E,y).multiplyScalar(e.panSpeed),A(O.x,O.y),y.copy(E),e.update()}function ye(t){t.deltaY<0?B(K()):t.deltaY>0&&U(K()),e.update()}function Ee(t){let n=!1;switch(t.code){case e.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?H(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):A(0,e.keyPanSpeed),n=!0;break;case e.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?H(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):A(0,-e.keyPanSpeed),n=!0;break;case e.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?R(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):A(e.keyPanSpeed,0),n=!0;break;case e.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?R(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):A(-e.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),e.update())}function Q(){if(a.length===1)f.set(a[0].pageX,a[0].pageY);else{const t=.5*(a[0].pageX+a[1].pageX),n=.5*(a[0].pageY+a[1].pageY);f.set(t,n)}}function J(){if(a.length===1)y.set(a[0].pageX,a[0].pageY);else{const t=.5*(a[0].pageX+a[1].pageX),n=.5*(a[0].pageY+a[1].pageY);y.set(t,n)}}function $(){const t=a[0].pageX-a[1].pageX,n=a[0].pageY-a[1].pageY,r=Math.sqrt(t*t+n*n);M.set(0,r)}function ge(){e.enableZoom&&$(),e.enablePan&&J()}function Pe(){e.enableZoom&&$(),e.enableRotate&&Q()}function ee(t){if(a.length==1)b.set(t.pageX,t.pageY);else{const r=X(t),c=.5*(t.pageX+r.x),l=.5*(t.pageY+r.y);b.set(c,l)}T.subVectors(b,f).multiplyScalar(e.rotateSpeed);const n=e.domElement;R(2*Math.PI*T.x/n.clientHeight),H(2*Math.PI*T.y/n.clientHeight),f.copy(b)}function te(t){if(a.length===1)E.set(t.pageX,t.pageY);else{const n=X(t),r=.5*(t.pageX+n.x),c=.5*(t.pageY+n.y);E.set(r,c)}O.subVectors(E,y).multiplyScalar(e.panSpeed),A(O.x,O.y),y.copy(E)}function ne(t){const n=X(t),r=t.pageX-n.x,c=t.pageY-n.y,l=Math.sqrt(r*r+c*c);w.set(0,l),j.set(0,Math.pow(w.y/M.y,e.zoomSpeed)),U(j.y),M.copy(w)}function Te(t){e.enableZoom&&ne(t),e.enablePan&&te(t)}function Oe(t){e.enableZoom&&ne(t),e.enableRotate&&ee(t)}function oe(t){e.enabled!==!1&&(a.length===0&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",Z),e.domElement.addEventListener("pointerup",k)),Se(t),t.pointerType==="touch"?Ae(t):Me(t))}function Z(t){e.enabled!==!1&&(t.pointerType==="touch"?Le(t):we(t))}function k(t){De(t),a.length===0&&(e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",Z),e.domElement.removeEventListener("pointerup",k)),e.dispatchEvent(pe),s=o.NONE}function Me(t){let n;switch(t.button){case 0:n=e.mouseButtons.LEFT;break;case 1:n=e.mouseButtons.MIDDLE;break;case 2:n=e.mouseButtons.RIGHT;break;default:n=-1}switch(n){case S.DOLLY:if(e.enableZoom===!1)return;me(t),s=o.DOLLY;break;case S.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;q(t),s=o.PAN}else{if(e.enableRotate===!1)return;W(t),s=o.ROTATE}break;case S.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;W(t),s=o.ROTATE}else{if(e.enablePan===!1)return;q(t),s=o.PAN}break;default:s=o.NONE}s!==o.NONE&&e.dispatchEvent(v)}function we(t){switch(s){case o.ROTATE:if(e.enableRotate===!1)return;de(t);break;case o.DOLLY:if(e.enableZoom===!1)return;fe(t);break;case o.PAN:if(e.enablePan===!1)return;be(t);break}}function ae(t){e.enabled===!1||e.enableZoom===!1||s!==o.NONE||(t.preventDefault(),e.dispatchEvent(v),ye(t),e.dispatchEvent(pe))}function F(t){e.enabled===!1||e.enablePan===!1||Ee(t)}function Ae(t){switch(se(t),a.length){case 1:switch(e.touches.ONE){case D.ROTATE:if(e.enableRotate===!1)return;Q(),s=o.TOUCH_ROTATE;break;case D.PAN:if(e.enablePan===!1)return;J(),s=o.TOUCH_PAN;break;default:s=o.NONE}break;case 2:switch(e.touches.TWO){case D.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;ge(),s=o.TOUCH_DOLLY_PAN;break;case D.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Pe(),s=o.TOUCH_DOLLY_ROTATE;break;default:s=o.NONE}break;default:s=o.NONE}s!==o.NONE&&e.dispatchEvent(v)}function Le(t){switch(se(t),s){case o.TOUCH_ROTATE:if(e.enableRotate===!1)return;ee(t),e.update();break;case o.TOUCH_PAN:if(e.enablePan===!1)return;te(t),e.update();break;case o.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Te(t),e.update();break;case o.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Oe(t),e.update();break;default:s=o.NONE}}function ie(t){e.enabled!==!1&&t.preventDefault()}function Se(t){a.push(t)}function De(t){delete C[t.pointerId];for(let n=0;n<a.length;n++)if(a[n].pointerId==t.pointerId){a.splice(n,1);return}}function se(t){let n=C[t.pointerId];n===void 0&&(n=new u,C[t.pointerId]=n),n.set(t.pageX,t.pageY)}function X(t){const n=t.pointerId===a[0].pointerId?a[1]:a[0];return C[n.pointerId]}e.domElement.addEventListener("contextmenu",ie),e.domElement.addEventListener("pointerdown",oe),e.domElement.addEventListener("pointercancel",k),e.domElement.addEventListener("wheel",ae,{passive:!1}),this.update()}}const Ce=(x,g,N,e,o,s)=>{const I=new je(x,g,N),i=new Re({map:e});return o&&(i.bumpMap=o,i.bumpScale=.1),s&&(i.side=ke,i.transparent=!0,i.opacity=.8),new xe(I,i)},Ke=(x,g,N)=>new Ie(x,g,N);export{_e as O,Ce as a,Ke as c};