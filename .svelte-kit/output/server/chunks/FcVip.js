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
  )}><path fill="${"#880E4F"}" d="${"M38 43H10c-2.2 0-4-1.8-4-4V11c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4v28c0 2.2-1.8 4-4 4z"}"></path><path fill="${"#FFD54F"}" d="${"m15.9 28 2.1-9.1h2.8l-3.6 12.6h-2.6L11 18.9h2.8l2.1 9.1zm9.7 3.5h-2.5V18.9h2.5v12.6zm5.6-4.4v4.4h-2.5V18.9H33c3.7 0 4.1 3.4 4.1 4.2 0 1.2-.5 4-4.1 4h-1.8zm0-2.2h1.7c1.3 0 1.5-1.1 1.5-1.9 0-1.6-.9-2.1-1.5-2.1h-1.7v4z"}"></path></svg>`;
});
export {
  Component as default
};
