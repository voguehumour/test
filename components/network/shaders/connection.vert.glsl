// Connection ribbon vertex shader.
// Geometry is rebuilt on the CPU each frame from bent bezier curves, so the
// width offset is already baked into `position`. We just carry varyings across.

attribute float aAlong; // 0..1 position along the connection length
attribute float aSide;  // -1..1 across the ribbon width
attribute float aConnId; // which connection this vertex belongs to
attribute float aGlow;   // cursor-proximity brightness, CPU-computed per vertex

varying float vAlong;
varying float vSide;
varying float vConnId;
varying float vGlow;

void main() {
  vAlong = aAlong;
  vSide = aSide;
  vConnId = aConnId;
  vGlow = aGlow;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
