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
  )}><path d="${"M22.629 6.857c0-.379.304-.686.686-.686.378 0 .685.312.685.686v10.286a.684.684 0 0 1-.686.686.69.69 0 0 1-.686-.686V6.857zM2.057 10.286a2.057 2.057 0 1 1 0 4.114 2.057 2.057 0 0 1 0-4.114zm7.543 0a2.057 2.057 0 1 1 0 4.114 2.057 2.057 0 0 1 0-4.114zm7.543 0a2.057 2.057 0 1 1 0 4.114 2.057 2.057 0 0 1 0-4.114z"}"></path></svg>`;
});
export {
  Component as default
};
