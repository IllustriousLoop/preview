import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 32 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"M4.859 7.401v2.115h13.256V5.285H4.859V7.4zm18.051 0v2.115h4.231V5.285H22.91V7.4zM4.859 16.427v2.115h22.282v-4.231H4.859v2.115zm0 8.884v1.974h8.744v-3.949H4.859v1.975zm13.539 0v1.974h8.744v-3.949h-8.744v1.975z"}"></path></svg>`;
});
export {
  Component as default
};
