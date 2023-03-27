import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 15 15" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M1.5 2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm3 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM8 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm3.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM1.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm.5-3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM1.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM2 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM13.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm.5-3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM13.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm3.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM4 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm1 0h5v5H5V5Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
