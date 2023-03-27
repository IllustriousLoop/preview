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
  )}><circle cx="${"24"}" cy="${"24"}" r="${"21"}" fill="${"#9C27B0"}"></circle><path fill="${"#E1BEE7"}" d="${"M25 26.8h-4.5v9h-4V12.5h8.2c1.3 0 2.5.2 3.6.5 1 .3 1.9.8 2.6 1.3.7.6 1.3 1.3 1.6 2.2s.6 1.9.6 3c0 1.6-.4 2.9-1.1 3.9-.8 1-1.8 1.9-3.1 2.4l5.2 9.7v.2h-4.3L25 26.8zm-4.5-3.2h4.2c.7 0 1.4-.1 1.9-.3.5-.2 1-.5 1.4-.8.4-.3.6-.7.8-1.2.2-.5.3-1 .3-1.6 0-.6-.1-1.1-.3-1.6-.2-.5-.4-.9-.8-1.2-.4-.3-.8-.6-1.4-.8-.5-.2-1.2-.3-2-.3h-4.1v7.8z"}"></path></svg>`;
});
export {
  Component as default
};
