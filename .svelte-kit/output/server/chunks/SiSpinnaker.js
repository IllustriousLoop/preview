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
  )}><path d="${"M21.343 0C17.785 8.741 11.317 21.987.815 23.882c10.806 1.064 19.481-5.327 21.646-8.066C24.627 13.076 21.343 0 21.343 0zM.815 23.882.8 23.88v.004l.015-.003zM17.182 5.8C15.409 10.988 10.477 18.547 5.4 20.39c.885.033 1.74-.019 2.561-.132 3.989-3.221 7.14-8.037 9.577-12.771-.193-.981-.356-1.687-.356-1.687z"}"></path></svg>`;
});
export {
  Component as default
};
