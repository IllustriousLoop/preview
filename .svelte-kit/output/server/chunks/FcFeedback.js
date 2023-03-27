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
  )}><path fill="${"#78909C"}" d="${"M40 41H8c-2.2 0-4-1.8-4-4V16.1c0-1.3.6-2.5 1.7-3.3L24 0l18.3 12.8c1.1.7 1.7 2 1.7 3.3V37c0 2.2-1.8 4-4 4z"}"></path><path fill="${"#fff"}" d="${"M12 11h24v22H12z"}"></path><path fill="${"#9C27B0"}" d="${"m24 13.6-6 7.8h12z"}"></path><path fill="${"#CFD8DC"}" d="${"M40 41H8c-2.2 0-4-1.8-4-4V17l20 13 20-13v20c0 2.2-1.8 4-4 4z"}"></path><path fill="${"#9C27B0"}" d="${"m24 28 2-1.3V20h-4v6.7z"}"></path></svg>`;
});
export {
  Component as default
};
