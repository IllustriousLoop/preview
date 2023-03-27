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
  )}><path fill="${"#444"}" d="${"M12.649 20.427h-.126l-.061.109-3.245 5.675H23.99l.061-.109 3.246-5.674h-.373zm7.924-1.352.062.108h.126l6.536-.028-.187-.322-7.199-12.471h-.126l-6.537.027.187.322zm-5.128-6.286-.063-.109-3.292-5.646-.186.322-7.201 12.47.064.109 3.292 5.648.186-.323 7.138-12.363z"}"></path></svg>`;
});
export {
  Component as default
};
