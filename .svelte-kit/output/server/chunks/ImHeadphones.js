import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M4.5 9h-1v7h1c.275 0 .5-.225.5-.5v-6c0-.275-.225-.5-.5-.5zm7 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5h1V9h-1z"}"></path><path d="${"M16 8A8 8 0 1 0 .479 10.732 3.5 3.5 0 0 0 3 15.964V9.036a3.478 3.478 0 0 0-1.371.506 6.5 6.5 0 1 1 12.743 0A3.484 3.484 0 0 0 13 9.035v6.929a3.5 3.5 0 0 0 2.521-5.232C15.831 9.879 16 8.959 16 8z"}"></path></svg>`;
});
export {
  Component as default
};
