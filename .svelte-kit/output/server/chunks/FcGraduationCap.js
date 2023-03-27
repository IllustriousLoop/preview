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
  )}><g fill="${"#37474F"}"><path d="${"M9 20h30v13H9z"}"></path><ellipse cx="${"24"}" cy="${"33"}" rx="${"15"}" ry="${"6"}"></ellipse></g><path fill="${"#78909C"}" d="${"M23.1 8.2.6 18.1c-.8.4-.8 1.5 0 1.9l22.5 9.9c.6.2 1.2.2 1.8 0L47.4 20c.8-.4.8-1.5 0-1.9L24.9 8.2c-.6-.3-1.2-.3-1.8 0z"}"></path><g fill="${"#37474F"}"><path d="${"m43.2 20.4-20-3.4c-.5-.1-1.1.3-1.2.8-.1.5.3 1.1.8 1.2L42 22.2V37c0 .6.4 1 1 1s1-.4 1-1V21.4c0-.5-.4-.9-.8-1z"}"></path><circle cx="${"43"}" cy="${"37"}" r="${"2"}"></circle><path d="${"M46 40c0 1.7-3 6-3 6s-3-4.3-3-6 1.3-3 3-3 3 1.3 3 3z"}"></path></g></svg>`;
});
export {
  Component as default
};
