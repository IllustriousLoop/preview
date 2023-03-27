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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-linecap="${"round"}" stroke-width="${"2"}" d="${"M22 9a2 2 0 0 0-1.998-2H16L6 17H4c-1.105 0-2 .888-2 2h0a2 2 0 0 0 1.998 2H8l10-10h2c1.105 0 2-.888 2-2h0ZM7 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 6v-2.505c0-.273.232-.495.5-.495h0c.276 0 .5.214.5.505V14l-1 1Zm5-11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 6V7.495c0-.273.232-.495.5-.495h0c.276 0 .5.214.5.505V9l-1 1Z"}"></path></svg>`;
});
export {
  Component as default
};
