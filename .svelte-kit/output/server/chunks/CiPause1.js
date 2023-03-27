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
  )}><path d="${"M8.25 21.937H6.564a2.5 2.5 0 0 1-2.5-2.5V4.563a2.5 2.5 0 0 1 2.5-2.5H8.25a2.5 2.5 0 0 1 2.5 2.5v14.874a2.5 2.5 0 0 1-2.5 2.5ZM6.564 3.063a1.5 1.5 0 0 0-1.5 1.5v14.874a1.5 1.5 0 0 0 1.5 1.5H8.25a1.5 1.5 0 0 0 1.5-1.5V4.563a1.5 1.5 0 0 0-1.5-1.5Zm10.872 18.874H15.75a2.5 2.5 0 0 1-2.5-2.5V4.563a2.5 2.5 0 0 1 2.5-2.5h1.686a2.5 2.5 0 0 1 2.5 2.5v14.874a2.5 2.5 0 0 1-2.5 2.5ZM15.75 3.063a1.5 1.5 0 0 0-1.5 1.5v14.874a1.5 1.5 0 0 0 1.5 1.5h1.686a1.5 1.5 0 0 0 1.5-1.5V4.563a1.5 1.5 0 0 0-1.5-1.5Z"}" data-name="${"Pause 1"}"></path></svg>`;
});
export {
  Component as default
};
