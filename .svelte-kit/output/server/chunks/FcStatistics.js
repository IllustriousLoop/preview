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
  )}><g fill="${"#37474F"}"><path d="${"M23 5h2v36h-2z"}"></path><path d="${"m25.817 32.772 1.414 1.414-10.04 10.04-1.414-1.414z"}"></path><path d="${"m32.259 42.824-1.414 1.414-10.04-10.04 1.414-1.414z"}"></path></g><path fill="${"#CFD8DC"}" d="${"M4 8h40v28H4z"}"></path><g fill="${"#607D8B"}"><path d="${"M3 7h42v4H3zm0 28h42v2H3z"}"></path><circle cx="${"31.5"}" cy="${"43.5"}" r="${"1.5"}"></circle><circle cx="${"16.5"}" cy="${"43.5"}" r="${"1.5"}"></circle></g><g fill="${"#C51162"}"><path d="${"m31.9 18.9-5.9 6-6-6-8.1 8 2.2 2.2 5.9-6 6 6 8.1-8z"}"></path><path d="${"m36 24-7-7h7z"}"></path></g></svg>`;
});
export {
  Component as default
};
