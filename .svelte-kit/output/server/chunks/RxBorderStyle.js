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
  )}><path fill-rule="${"evenodd"}" d="${"M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12ZM1 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm0 4a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1.5.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1.5.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-7-4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm4.5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
