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
  )}><path fill="${"#F44336"}" d="${"m43.5 16.8-2.3-2.3c-8.1-7.9-27.5-6.8-34.5 0l-2.3 2.3c-.6.6-.6 1.6 0 2.3L9 23.6c.6.6 1.7.6 2.3 0l5.1-4.9-.4-5.3c1.6-1.6 14.4-1.6 16 0l-.3 5.5 4.9 4.7c.6.6 1.7.6 2.3 0l4.6-4.5c.7-.7.7-1.7 0-2.3z"}"></path><g fill="${"#B71C1C"}"><path d="${"M24 40.5 16 31h16z"}"></path><path d="${"M21 24h6v7.5h-6z"}"></path></g></svg>`;
});
export {
  Component as default
};
