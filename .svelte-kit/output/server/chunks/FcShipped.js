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
  )}><path fill="${"#8BC34A"}" d="${"M43 36H29V14h10.6c.9 0 1.6.6 1.9 1.4L45 26v8c0 1.1-.9 2-2 2z"}"></path><path fill="${"#388E3C"}" d="${"M29 36H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h22c1.1 0 2 .9 2 2v27z"}"></path><g fill="${"#37474F"}"><circle cx="${"37"}" cy="${"36"}" r="${"5"}"></circle><circle cx="${"13"}" cy="${"36"}" r="${"5"}"></circle></g><g fill="${"#78909C"}"><circle cx="${"37"}" cy="${"36"}" r="${"2"}"></circle><circle cx="${"13"}" cy="${"36"}" r="${"2"}"></circle></g><path fill="${"#37474F"}" d="${"M41 25h-7c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h5.3c.4 0 .8.3.9.7l1.7 5.2c0 .1.1.2.1.3V24c0 .6-.4 1-1 1z"}"></path><path fill="${"#DCEDC8"}" d="${"m21.8 13.8-7.9 7.9-3.7-3.8L8 20.1l5.9 5.9L24 15.9z"}"></path></svg>`;
});
export {
  Component as default
};
