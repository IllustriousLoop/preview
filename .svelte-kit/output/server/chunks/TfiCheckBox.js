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
  )}><path d="${"M14 5.761h1V16H1V2h8.393v1H2v12h12V5.761zM4.854 8.146l-.708.708 3.434 3.434L15.167.776l-.835-.551L7.42 10.713 4.854 8.146z"}"></path></svg>`;
});
export {
  Component as default
};
