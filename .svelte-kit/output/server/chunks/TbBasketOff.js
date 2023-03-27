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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m7 10 1.359-1.63m1.817-2.182L12 4l5 6m1.77 8.757c-.358.768-1.027 1.262-1.77 1.243H7c-.966.024-1.807-.817-2-2l-2-8h7"}"></path><path d="${"M14 10h7l-1.397 5.587"}"></path><circle cx="${"12"}" cy="${"15"}" r="${"2"}"></circle><path d="${"m3 3 18 18"}"></path></svg>`;
});
export {
  Component as default
};
