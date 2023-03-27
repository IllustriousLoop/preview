import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M14 16h-3v-6H6v6H3V7H2v10h13V7h-1v9zm-7 0v-5h3v5H7zm9.796-9.527-.592.807L8.5 1.62.796 7.278l-.592-.806L8.5.38l8.296 6.093z"}"></path></svg>`;
});
export {
  Component as default
};
