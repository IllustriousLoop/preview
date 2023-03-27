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
  )}><path fill-rule="${"evenodd"}" d="${"M4.671 3.146a.5.5 0 0 0 0 .707l2.475 2.475a.5.5 0 0 0 .707 0l2.475-2.475a.5.5 0 0 0 0-.707L7.853.671a.5.5 0 0 0-.707 0L4.671 3.146ZM7.5 5.268 5.732 3.5 7.5 1.732 9.267 3.5 7.5 5.268Zm1.17 1.878a.5.5 0 0 0 0 .707l2.475 2.475a.5.5 0 0 0 .707 0l2.475-2.475a.5.5 0 0 0 0-.707l-2.475-2.475a.5.5 0 0 0-.707 0L8.671 7.146Zm2.83 2.122L9.732 7.5 11.5 5.732 13.268 7.5 11.5 9.268Zm-6.83 2.585a.5.5 0 0 1 0-.707l2.475-2.475a.5.5 0 0 1 .707 0l2.475 2.475a.5.5 0 0 1 0 .707l-2.475 2.475a.5.5 0 0 1-.707 0L4.67 11.854Zm1.061-.353L7.5 13.268 9.267 11.5 7.5 9.732 5.732 11.5ZM.672 7.146a.5.5 0 0 0 0 .708l2.474 2.474a.5.5 0 0 0 .707 0l2.475-2.474a.5.5 0 0 0 0-.708L3.853 4.672a.5.5 0 0 0-.707 0L.671 7.146ZM3.5 9.268 1.732 7.5 3.5 5.732 5.267 7.5 3.5 9.268Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
