import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M313.8 303.9 469 32H365L209.4 303.8c-.4.7-.4 1.1 0 1.7l98.9 173.8c.4.7.8.7 1.6.7H413l-99.3-174.7c-.2-.3-.1-1 .1-1.4zm-91.9-87.7L163 113c-.5-.8-1-1-2-1H65l58.9 104.4c.1.2.2.6.1.8L43 352h96.8c.8 0 1.2-.2 1.6-.9l80.5-133.7c.1-.3.1-.9 0-1.2z"}"></path></svg>`;
});
export {
  Component as default
};
