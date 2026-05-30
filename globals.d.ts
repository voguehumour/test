declare module "*.glsl" {
  const value: string;
  export default value;
}

// poly-decomp ships no type definitions; Matter.js uses it for concave bodies.
declare module "poly-decomp";

