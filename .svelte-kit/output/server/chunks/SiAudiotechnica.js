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
  )}><path d="${"M12 0A11.992 11.992 0 0 0 .015 11.985 12.019 12.019 0 0 0 12 24a12.019 12.019 0 0 0 11.985-12.015A11.992 11.992 0 0 0 12.004 0zm0 .903a11.078 11.078 0 0 1 11.085 11.078c0 6.123-4.958 11.112-11.085 11.112A11.104 11.104 0 0 1 .922 11.985 11.078 11.078 0 0 1 11.996.907zm.087 1.16-.43 1.252-5.674 16.063-.204.604h12.654l-.23-.604L12.524 3.31zm0 2.797 2.007 5.643-3.024 8.553H7.056zm2.502 7.038 2.532 7.155h-5.09z"}"></path></svg>`;
});
export {
  Component as default
};
