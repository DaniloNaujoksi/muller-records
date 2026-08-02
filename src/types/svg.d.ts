// SVG imports are handled by @svgr/webpack (see next.config.ts), which turns
// them into React components rather than image URLs.
declare module "*.svg" {
  const Component: React.FC<React.SVGProps<SVGSVGElement>>;
  export default Component;
}
