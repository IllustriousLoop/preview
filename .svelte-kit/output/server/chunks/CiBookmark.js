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
  )}><path d="${"M17.6 21.945a1.483 1.483 0 0 1-1.01-.4l-4.251-3.9a.5.5 0 0 0-.68 0l-4.25 3.9a1.5 1.5 0 0 1-2.516-1.1V4.57a2.5 2.5 0 0 1 2.5-2.5h9.214a2.5 2.5 0 0 1 2.5 2.5v15.872a1.481 1.481 0 0 1-.9 1.374 1.507 1.507 0 0 1-.607.129ZM12 16.51a1.5 1.5 0 0 1 1.018.395l4.251 3.9a.5.5 0 0 0 .839-.368V4.57a1.5 1.5 0 0 0-1.5-1.5H7.393a1.5 1.5 0 0 0-1.5 1.5v15.872a.5.5 0 0 0 .839.368l4.251-3.91A1.5 1.5 0 0 1 12 16.51Z"}"></path></svg>`;
});
export {
  Component as default
};
