// Node fragment shader. Wrap-lighting plus a rim term gives a soft
// subsurface-scatter read rather than a hard plastic sphere. Activation
// pushes the node toward the accent and adds a gentle internal glow.

precision highp float;

uniform vec3 uNode;
uniform vec3 uAccent;
uniform float uTemp;      // per-section warmth
uniform float uBaseAlpha; // global presence

varying vec3 vNormal;
varying vec3 vView;
varying float vActive;

void main() {
  vec3 N = normalize(vNormal);
  vec3 L = normalize(vec3(0.35, 0.55, 0.75));

  // Wrapped diffuse — light bleeds around the terminator (fake SSS).
  float wrap = clamp((dot(N, L) + 0.65) / 1.65, 0.0, 1.0);
  float rim = pow(1.0 - clamp(dot(N, vView), 0.0, 1.0), 2.2);

  vec3 base = mix(uNode * 0.5, uNode, wrap);
  base += rim * 0.45 * mix(uNode, uAccent, uTemp * 0.3);

  vec3 col = mix(base, uAccent, vActive * 0.85);
  col += vActive * 0.7 * uAccent;

  gl_FragColor = vec4(col, uBaseAlpha);
}
