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
  )}><path d="${"M21 21v135.125h135.125V21H21zm167.438 0v135.125h135.125V21H188.438zm167.437 0v135.125H491V21H355.875zM21 188.438v135.125h135.125V188.438H21zm167.438 0v135.125h135.125V188.438H188.438zm167.437 0v135.125H491V188.438H355.875zM21 355.875V491h135.125V355.875H21zm167.438 0V491h135.125V355.875H188.438zm167.437 0V491H491V355.875H355.875z"}"></path></svg>`;
});
export {
  Component as default
};
