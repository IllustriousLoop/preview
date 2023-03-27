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
  )}><path d="${"M416 48H288v48h94.1L275.4 202.6C251.9 185.9 223.1 176 192 176c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144c0-31.1-9.9-59.9-26.6-83.4L416 129.9V224h48V48h-48zM192 416c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96z"}"></path></svg>`;
});
export {
  Component as default
};
