varying vec3 vertexNormal;

void main() {
  float intensity = pow(0.4 - dot(vertexNormal, vec3(0.0,0.0,1.0)),5.0);
  gl_FragColor = vec4(0.9,0.6,0.0,1.0) * intensity;
}
