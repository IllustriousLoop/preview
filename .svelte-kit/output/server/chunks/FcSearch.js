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
  )}><g fill="${"#616161"}"><path d="${"m29.175 31.99 2.828-2.827L44.022 41.18l-2.828 2.829z"}"></path><circle cx="${"20"}" cy="${"20"}" r="${"16"}"></circle></g><path fill="${"#37474F"}" d="${"m32.45 35.34 2.827-2.828 8.696 8.696-2.828 2.828z"}"></path><circle cx="${"20"}" cy="${"20"}" r="${"13"}" fill="${"#64B5F6"}"></circle><path fill="${"#BBDEFB"}" d="${"M26.9 14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2 1.2-6.9 3.2c-.4.4-.3 1.1.1 1.4.4.4 1.1.3 1.4-.1C16 13.9 17.9 13 20 13s4 .9 5.4 2.5c.2.2.5.4.8.4.2 0 .5-.1.6-.2.4-.4.4-1.1.1-1.5z"}"></path></svg>`;
});
export {
  Component as default
};
