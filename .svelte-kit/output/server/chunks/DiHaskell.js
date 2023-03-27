import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 32 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"m4.619 24.32 5.356-8.034-5.356-8.034h4.017l5.356 8.034-5.356 8.034H4.619zm5.356 0 5.356-8.034-5.356-8.034h4.017L24.704 24.32h-4.017l-3.347-5.021-3.348 5.021H9.975zm17.406-4.687h-4.463l-1.785-2.678h6.249zm0-4.017H20.24l-1.785-2.678h8.927z"}"></path></svg>`;
});
export {
  Component as default
};
