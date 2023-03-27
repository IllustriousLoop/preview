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
  )}><path fill="${"#BBDEFB"}" d="${"M7 4h34v40H7z"}"></path><path fill="${"#2196F3"}" d="${"M13 26h4v4h-4zm0-8h4v4h-4zm0 16h4v4h-4zm0-24h4v4h-4zm8 16h14v4H21zm0-8h14v4H21zm0 16h14v4H21zm0-24h14v4H21z"}"></path></svg>`;
});
export {
  Component as default
};
