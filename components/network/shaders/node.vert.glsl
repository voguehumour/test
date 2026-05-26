// Node vertex shader. Instanced spheres; per-instance scale and activation
// are passed as instanced attributes updated on the CPU each frame.

attribute float aScale;  // per-node scale (grows with cursor proximity)
attribute float aActive; // 0..1 activation (lights up when a pulse reaches it)

varying vec3 vNormal;
varying vec3 vView;
varying float vActive;

void main() {
  vActive = aActive;
  vec3 transformed = position * aScale;
  vec4 worldView = modelViewMatrix * instanceMatrix * vec4(transformed, 1.0);
  vNormal = normalize(mat3(modelViewMatrix * instanceMatrix) * normal);
  vView = normalize(-worldView.xyz);
  gl_Position = projectionMatrix * worldView;
}
