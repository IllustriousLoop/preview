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
  )}><circle cx="${"17"}" cy="${"17"}" r="${"14"}" fill="${"#00ACC1"}"></circle><circle cx="${"17"}" cy="${"17"}" r="${"11"}" fill="${"#eee"}"></circle><path d="${"M16 8h2v9h-2z"}"></path><path d="${"m22.655 20.954-1.697 1.697-4.808-4.807 1.697-1.697z"}"></path><circle cx="${"17"}" cy="${"17"}" r="${"2"}"></circle><circle cx="${"17"}" cy="${"17"}" r="${"1"}" fill="${"#00ACC1"}"></circle><path fill="${"#FFC107"}" d="${"m11.9 42 14.4-24.1c.8-1.3 2.7-1.3 3.4 0L44.1 42c.8 1.3-.2 3-1.7 3H13.6c-1.5 0-2.5-1.7-1.7-3z"}"></path><path fill="${"#263238"}" d="${"M26.4 39.9c0-.2 0-.4.1-.6s.2-.3.3-.5.3-.2.5-.3.4-.1.6-.1.5 0 .7.1.4.2.5.3.2.3.3.5.1.4.1.6 0 .4-.1.6-.2.3-.3.5-.3.2-.5.3-.4.1-.7.1-.5 0-.6-.1-.4-.2-.5-.3-.2-.3-.3-.5-.1-.4-.1-.6zm2.8-3.1h-2.3l-.4-9.8h3l-.3 9.8z"}"></path></svg>`;
});
export {
  Component as default
};
