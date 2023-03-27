import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 1024 1024" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M117 368h231v64H117zm559 0h241v64H676zm-264 0h200v64H412zm0 224h200v64H412zm264 0h241v64H676zm-559 0h231v64H117zm295-160V179h-64v666h64V592zm264-64V179h-64v666h64V432z"}"></path></svg>`;
});
export {
  Component as default
};
