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
  )}><path d="${"M227.6 213.1H256v57.1h-28.4z"}"></path><path d="${"M0 156v171.4h142.2V356H256v-28.6h256V156H0zm142.2 142.9h-28.4v-85.7H85.3v85.7H28.4V184.6h113.8v114.3zm142.2 0h-56.9v28.6h-56.9V184.6h113.8v114.3zm199.2 0h-28.4v-85.7h-28.4v85.7h-28.4v-85.7H370v85.7h-56.9V184.6h170.7v114.3z"}"></path></svg>`;
});
export {
  Component as default
};
