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
  )}><path d="${"M256 21.98c-64 48-128 68-224.03 100.02C31.97 234 112 394 256 490c144-96 224-250 224-362-96-32.02-160-58.02-224-106.02zM229 128h54v101h101v54H283v101h-54V283H128v-54h101V128z"}"></path></svg>`;
});
export {
  Component as default
};
