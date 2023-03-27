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
  )}><path fill="${"#3F51B5"}" d="${"M43.4 8.3 4 15l-.3-2C3.3 10.8 4.8 8.8 7 8.4l31.6-5.3c2.2-.4 4.2 1.1 4.6 3.3l.2 1.9zM40 41H8c-2.2 0-4-1.8-4-4V15h40v22c0 2.2-1.8 4-4 4z"}"></path><path fill="${"#9FA8DA"}" d="${"m18.8 6.4 4.9 5.3 4-.7-5-5.3zm-7.9 1.3 4.9 5.3 4-.7-5-5.2zm15.8-2.6 4.9 5.2 3.9-.6-4.9-5.3zm7.8-1.3 5 5.2 3.9-.7-4.9-5.2z"}"></path><circle cx="${"7.5"}" cy="${"11.5"}" r="${"1.5"}" fill="${"#9FA8DA"}"></circle><path fill="${"#9FA8DA"}" d="${"m40 15-4 6h4l4-6zm-8 0-4 6h4l4-6zm-8 0-4 6h4l4-6zm-8 0-4 6h4l4-6zm-8 0-4 6h4l4-6z"}"></path></svg>`;
});
export {
  Component as default
};
