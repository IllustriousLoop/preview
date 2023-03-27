import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "none" },
      { stroke: "currentColor" },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" },
      { "stroke-width": "2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"12"}" cy="${"14"}" r="${"2"}"></circle><path d="${"M12 10.5V12m0 4v1.5m3.031-5.25-1.299.75m-3.464 2-1.3.75m6.032.053-1.285-.773m-3.43-2.06L9 12.197M14 3v4a1 1 0 0 0 1 1h4"}"></path><path d="${"M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"}"></path></svg>`;
});
export {
  Component as default
};
