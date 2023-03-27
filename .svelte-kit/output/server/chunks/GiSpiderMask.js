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
  )}><path d="${"M256 24c-96 0-160 80-160 160 0 192 80 304 160 304s160-112 160-304c0-80-64-160-160-160zM128 168c7.8 32 35 91.9 96 128l-48 48c-67.7-41.1-64-144-48-176zm256 0c16 32 19.7 134.9-48 176l-48-48c61-36.1 88.2-96 96-128z"}"></path></svg>`;
});
export {
  Component as default
};
