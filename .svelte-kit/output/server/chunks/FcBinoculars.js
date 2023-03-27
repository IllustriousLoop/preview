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
  )}><g fill="${"#37474F"}"><circle cx="${"33"}" cy="${"16"}" r="${"6"}"></circle><circle cx="${"15"}" cy="${"16"}" r="${"6"}"></circle><path d="${"m46.7 25-15.3 3H16.7L1.4 25l4.3-7.9C6.8 15.2 8.8 14 11 14h26.2c2.2 0 4.2 1.2 5.3 3.1l4.2 7.9z"}"></path><circle cx="${"38"}" cy="${"30"}" r="${"10"}"></circle><circle cx="${"10"}" cy="${"30"}" r="${"10"}"></circle><circle cx="${"24"}" cy="${"28"}" r="${"5"}"></circle></g><circle cx="${"24"}" cy="${"28"}" r="${"2"}" fill="${"#546E7A"}"></circle><g fill="${"#a0f"}"><circle cx="${"38"}" cy="${"30"}" r="${"7"}"></circle><circle cx="${"10"}" cy="${"30"}" r="${"7"}"></circle></g><path fill="${"#CE93D8"}" d="${"M41.7 27.7c-1-1.1-2.3-1.7-3.7-1.7s-2.8.6-3.7 1.7c-.4.4-.3 1 .1 1.4.4.4 1 .3 1.4-.1 1.2-1.3 3.3-1.3 4.5 0 .2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.3.4-.9 0-1.3zM10 26c-1.4 0-2.8.6-3.7 1.7-.4.4-.3 1 .1 1.4.4.4 1 .3 1.4-.1 1.2-1.3 3.3-1.3 4.5 0 .2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 .1-1.4-1-1-2.4-1.6-3.8-1.6z"}"></path></svg>`;
});
export {
  Component as default
};
