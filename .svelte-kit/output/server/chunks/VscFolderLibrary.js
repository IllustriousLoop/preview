import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M7.71 3h6.79l.51.5V7H14V5.99H7.69l-.86.86-.35.15H1.99v6H7v1H1.51l-.5-.5v-11l.5-.5h5l.35.15.85.85Zm-.22 2h6.5l.01-.99H7.5l-.36-.15-.85-.85H2v3h4.28l.86-.86.35-.15Z"}" clip-rule="${"evenodd"}"></path><path d="${"M8 8h1v6H8zm2 0h1v6h-1zm2.004.352.94-.342 2.052 5.638-.94.342z"}"></path></svg>`;
});
export {
  Component as default
};
