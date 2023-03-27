import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#37474F"}" d="${"M12 40V8c0-2.2 1.8-4 4-4h16c2.2 0 4 1.8 4 4v32c0 2.2-1.8 4-4 4H16c-2.2 0-4-1.8-4-4z"}"></path><path fill="${"#BBDEFB"}" d="${"M32 7H16c-.6 0-1 .4-1 1v29c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1z"}"></path><path fill="${"#78909C"}" d="${"M21 40h6v2h-6z"}"></path></svg>`;
});
export {
  Component as default
};
