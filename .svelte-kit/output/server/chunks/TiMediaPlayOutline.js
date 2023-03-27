import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m8.998 7.002.085.078L14.134 12l-5.096 4.964L9 17l-.002-9.998M9 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2c.543 0 1.033-.218 1.393-.568L17 12l-6.604-6.433A2.008 2.008 0 0 0 9 5z"}"></path></svg>`;
});
export {
  Component as default
};
