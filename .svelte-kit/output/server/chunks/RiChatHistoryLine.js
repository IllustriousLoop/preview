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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.957 9.957 0 0 1-4.708-1.175L2 22l1.176-5.29A9.966 9.966 0 0 1 2 12C2 6.477 6.477 2 12 2zm0 2a8 8 0 0 0-7.06 11.766l.35.654-.656 2.946 2.948-.654.653.349A7.95 7.95 0 0 0 12 20a8 8 0 0 0 0-16zm1 3v5h4v2h-6V7h2z"}"></path></svg>`;
});
export {
  Component as default
};
