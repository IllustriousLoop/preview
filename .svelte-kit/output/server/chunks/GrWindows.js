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
  )}><path fill="${"#001589"}" fill-rule="${"evenodd"}" d="${"M23.923 0 10.959 1.893v9.588l12.964-.102V0ZM0 3.398l.009 8.155 9.773-.055-.004-9.432L0 3.398Zm.008 17.283 9.773 1.344-.008-9.44-9.766-.063.001 8.159Zm10.951 1.49L23.923 24l.004-11.326-12.986-.022.018 9.519Z"}"></path></svg>`;
});
export {
  Component as default
};
