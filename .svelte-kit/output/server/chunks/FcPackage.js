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
  )}><path fill="${"#FF9800"}" d="${"M38 42H10c-2.2 0-4-1.8-4-4V10c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4v28c0 2.2-1.8 4-4 4z"}"></path><path fill="${"#8A5100"}" d="${"M29.5 16h-11c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h11c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"}"></path></svg>`;
});
export {
  Component as default
};
