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
  )}><g fill="${"#009688"}"><path d="${"M22 35h4v11h-4z"}"></path><path d="${"m24 29.6 7 8.4H17z"}"></path></g><g fill="${"#009688"}"><path d="${"M22 2h4v11h-4z"}"></path><path d="${"M24 18.4 17 10h14z"}"></path></g><g fill="${"#009688"}"><path d="${"M2 22h11v4H2z"}"></path><path d="${"M18.4 24 10 31V17z"}"></path></g><g fill="${"#009688"}"><path d="${"M35 22h11v4H35z"}"></path><path d="${"m29.6 24 8.4-7v14z"}"></path></g><circle cx="${"24"}" cy="${"24"}" r="${"3"}" fill="${"#F44336"}"></circle></svg>`;
});
export {
  Component as default
};
