import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M12 21.934A9.934 9.934 0 1 1 21.934 12 9.945 9.945 0 0 1 12 21.934Zm0-18.868A8.934 8.934 0 1 0 20.934 12 8.944 8.944 0 0 0 12 3.066Z"}"></path><path d="${"M14.5 13.5a2.006 2.006 0 0 1-2 2v1.01a.5.5 0 0 1-1 0V15.5h-1.25a.5.5 0 0 1 0-1h2.25a1 1 0 0 0 0-2h-1a2 2 0 0 1 0-4V7.49a.5.5 0 0 1 1 0V8.5h1.25a.5.5 0 0 1 0 1H11.5a1 1 0 0 0 0 2h1a2.006 2.006 0 0 1 2 2Z"}"></path></svg>`;
});
export {
  Component as default
};
