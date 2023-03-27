import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 27 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"m6.789 10.152-6.114 6.12 12.262 12.262v-6.131l-6.131-6.131 6.131-6.131-.011-3.054-.016-3.049-6.12 6.114zm3.941 3.947-2.173 2.173 4.379 4.379v-4.368c0-2.398-.005-4.363-.016-4.363-.005 0-.991.98-2.19 2.179zm9.448 8.32 6.114-6.12L14.03 4.037v6.131l6.131 6.131-6.131 6.131.011 3.054.016 3.049 6.12-6.114z"}"></path></svg>`;
});
export {
  Component as default
};
