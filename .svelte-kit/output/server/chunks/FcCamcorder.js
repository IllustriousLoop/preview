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
  )}><path fill="${"#607D8B"}" d="${"M20 42H10c-2.2 0-4-1.8-4-4V15c0-5 4-9 9-9s9 4 9 9v23c0 2.2-1.8 4-4 4z"}"></path><circle cx="${"15"}" cy="${"15"}" r="${"7"}" fill="${"#455A64"}"></circle><circle cx="${"15"}" cy="${"15"}" r="${"5.2"}" fill="${"#42A5F5"}"></circle><path fill="${"#90CAF9"}" d="${"M18.3 13c-.8-.9-2-1.5-3.3-1.5s-2.4.5-3.3 1.5c-.3.4-.3.9.1 1.2.4.3.9.3 1.2-.1 1-1.2 2.9-1.2 3.9 0 .2.2.4.3.7.3.2 0 .4-.1.6-.2.4-.3.4-.9.1-1.2z"}"></path><path fill="${"#607D8B"}" d="${"M40 31H28c-1.1 0-2-.9-2-2V19c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2z"}"></path><path fill="${"#455A64"}" d="${"M24 19h2v10h-2z"}"></path><path fill="${"#03A9F4"}" d="${"M28 19h12v10H28z"}"></path><path fill="${"#4FC3F7"}" d="${"M33 22.2 29 28h8z"}"></path><g fill="${"#B3E5FC"}"><circle cx="${"37.5"}" cy="${"21.5"}" r="${"1"}"></circle><path d="${"M36 24.2 33 28h6z"}"></path></g><circle cx="${"15"}" cy="${"35"}" r="${"3"}" fill="${"#455A64"}"></circle><circle cx="${"15"}" cy="${"35"}" r="${"2"}" fill="${"#F44336"}"></circle></svg>`;
});
export {
  Component as default
};
