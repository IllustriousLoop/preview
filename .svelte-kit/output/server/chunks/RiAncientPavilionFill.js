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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M12.513 2.001a9.004 9.004 0 0 0 9.97 5.877A4.501 4.501 0 0 1 19 11.888V19l2 .001v2H3v-2h2v-7.113a4.503 4.503 0 0 1-3.484-4.01 9.004 9.004 0 0 0 9.972-5.876h1.025zM17 12H7v7h10v-7z"}"></path></svg>`;
});
export {
  Component as default
};
