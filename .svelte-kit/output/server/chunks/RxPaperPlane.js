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
  )}><path fill-rule="${"evenodd"}" d="${"M1.203 1.043a.5.5 0 0 0-.635.709L3.921 7.5.568 13.248a.5.5 0 0 0 .635.709l13.5-6a.5.5 0 0 0 0-.914l-13.5-6ZM4.846 7.1 2.212 2.586 13.27 7.5 2.212 12.414 4.846 7.9H9a.4.4 0 1 0 0-.8H4.846Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
