import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M15 19a5.23 5.23 0 0 1-3.707-1.532 3.246 3.246 0 0 0-4.586 0 .999.999 0 1 1-1.414-1.414 5.25 5.25 0 0 1 7.414 0 3.248 3.248 0 0 0 4.586 0 .999.999 0 1 1 1.414 1.414A5.227 5.227 0 0 1 15 19zm0-4a5.23 5.23 0 0 1-3.707-1.532 3.246 3.246 0 0 0-4.586 0 .999.999 0 1 1-1.414-1.414 5.25 5.25 0 0 1 7.414 0 3.248 3.248 0 0 0 4.586 0 .999.999 0 1 1 1.414 1.414A5.227 5.227 0 0 1 15 15zm0-4a5.23 5.23 0 0 1-3.707-1.532 3.246 3.246 0 0 0-4.586 0 .999.999 0 1 1-1.414-1.414 5.25 5.25 0 0 1 7.414 0 3.248 3.248 0 0 0 4.586 0 .999.999 0 1 1 1.414 1.414A5.227 5.227 0 0 1 15 11z"}"></path></svg>`;
});
export {
  Component as default
};
