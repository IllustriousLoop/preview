import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M76 46c-33.24 0-60 26.76-60 60v300c0 33.24 26.76 60 60 60h360c33.24 0 60-26.76 60-60V106c0-33.24-26.76-60-60-60H76zm0 60h360v300H76V106zm150 60v60h-60v60h60v60h60v-60h60v-60h-60v-60h-60z"}"></path></svg>`;
});
export {
  Component as default
};
