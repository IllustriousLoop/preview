import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M2 0v17h13V0H2zm2.695 4L3.287 1h10.426l-1.41 3H4.695zm-.634 1H8v9H3.998L3 15.155V2.741L4.061 5zm.394 10h8.092l.862 1H3.593l.862-1zm8.551-1H9V5h3.938L14 2.739v12.415L13.006 14z"}"></path></svg>`;
});
export {
  Component as default
};
