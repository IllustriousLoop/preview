import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><g fill="${"none"}" fill-rule="${"evenodd"}" stroke="${"#000"}" stroke-width="${"2"}"><path d="${"M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-4.243-6.243a6 6 0 0 1 8.486 0"}"></path><path stroke-opacity="${".2"}" d="${"M4.929 10.929c3.905-3.905 10.237-3.905 14.142 0M2.101 8.1c5.467-5.468 14.331-5.468 19.798 0"}" opacity="${".8"}"></path></g></svg>`;
});
export {
  Component as default
};
