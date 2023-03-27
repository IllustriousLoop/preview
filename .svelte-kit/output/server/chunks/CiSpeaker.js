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
  )}><path d="${"M17.437 21.938H6.562a2.5 2.5 0 0 1-2.5-2.5V4.562a2.5 2.5 0 0 1 2.5-2.5h10.875a2.5 2.5 0 0 1 2.5 2.5v14.876a2.5 2.5 0 0 1-2.5 2.5ZM6.562 3.062a1.5 1.5 0 0 0-1.5 1.5v14.876a1.5 1.5 0 0 0 1.5 1.5h10.875a1.5 1.5 0 0 0 1.5-1.5V4.562a1.5 1.5 0 0 0-1.5-1.5Z"}"></path><path d="${"M12 18.939a3.75 3.75 0 1 1 3.75-3.75 3.755 3.755 0 0 1-3.75 3.75Zm0-6.5a2.75 2.75 0 1 0 2.75 2.75 2.752 2.752 0 0 0-2.75-2.75Zm0-2.876a2.25 2.25 0 1 1 2.25-2.25A2.253 2.253 0 0 1 12 9.563Zm0-3.5a1.25 1.25 0 1 0 1.25 1.25A1.251 1.251 0 0 0 12 6.063Z"}"></path></svg>`;
});
export {
  Component as default
};
