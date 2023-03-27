import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 48 24" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#01A982"}" d="${"M7 8h34v8H7V8Z"}"></path><path fill="${"#00775B"}" d="${"M1 8h6v8H1V8Zm40 0h6v8h-6V8ZM7 16h34v6H7v-6Z"}"></path><path fill="${"#00C781"}" d="${"M7 2h34v6H7V2Z"}"></path><path fill="${"#01A982"}" d="${"m1 8 6-6v6H1Zm0 8 6 6v-6H1Zm46-8-6-6v6h6Zm0 8-6 6v-6h6Z"}"></path></svg>`;
});
export {
  Component as default
};
