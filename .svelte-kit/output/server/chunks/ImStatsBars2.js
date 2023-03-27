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
  )}><path d="${"M4.5 6h-3c-.275 0-.5.225-.5.5v9c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-9c0-.275-.225-.5-.5-.5zm0 9h-3v-4h3v4zm5-11h-3c-.275 0-.5.225-.5.5v11c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-11c0-.275-.225-.5-.5-.5zm0 11h-3v-5h3v5zm5-13h-3c-.275 0-.5.225-.5.5v13c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-13c0-.275-.225-.5-.5-.5zm0 13h-3V9h3v6z"}"></path></svg>`;
});
export {
  Component as default
};
