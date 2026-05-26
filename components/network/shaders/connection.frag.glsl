// Connection fragment shader.
// A soft inner glow across the ribbon width, a faintly noisy edge so the line
// never reads as a clean vector, and a travelling pulse in the accent color
// that fires along one connection at a time — the model "thinking".

precision highp float;

uniform vec3 uAccent;
uniform vec3 uNode;
uniform float uTime;
uniform float uPulseConn;   // id of the connection currently pulsing
uniform float uPulseT;      // 0..1 head position of the pulse
uniform float uPulseActive; // 0 or 1
uniform float uTemp;        // 0 cool .. 1 warm — per-section color temperature
uniform float uBaseAlpha;   // global presence (fades with corner compression)

varying float vAlong;
varying float vSide;
varying float vConnId;
varying float vGlow;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  // Soft falloff from the centerline to the ribbon edge.
  float edge = 1.0 - abs(vSide);
  float core = smoothstep(0.0, 1.0, edge);

  // Subtle noisy edge — breaks the perfect line.
  float n = hash(vec2(vAlong * 36.0, vConnId * 7.13) + floor(uTime * 6.0) * 0.137);
  float body = core * (0.62 + 0.18 * n);

  vec3 col = uNode;
  float alpha = body * 0.2;

  // Cursor proximity brightens the connection.
  alpha += vGlow * core * 0.28;
  col = mix(col, uAccent, vGlow * 0.25 * uTemp);

  // Travelling pulse: a bright head with a soft trailing tail.
  if (uPulseActive > 0.5 && abs(vConnId - uPulseConn) < 0.5) {
    float head = smoothstep(0.11, 0.0, abs(vAlong - uPulseT));
    float tail = smoothstep(0.30, 0.0, uPulseT - vAlong) * step(vAlong, uPulseT);
    float pulse = max(head, tail * 0.55) * core;
    col = mix(col, uAccent, pulse);
    alpha = max(alpha, 0.9 * pulse);
  }

  gl_FragColor = vec4(col, alpha * uBaseAlpha);
}
