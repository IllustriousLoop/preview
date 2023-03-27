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
  )}><path d="${"m14.828 6.343 1.415-1.414L12 .686 7.757 4.93l1.415 1.414L12 3.515l2.828 2.828Zm-9.899 9.9 1.414-1.415L3.515 12l2.828-2.828L4.93 7.757.686 12l4.243 4.243Zm2.828 2.828L12 23.314l4.243-4.243-1.415-1.414L12 20.485l-2.828-2.828-1.415 1.414Zm9.9-9.899L20.485 12l-2.828 2.828 1.414 1.415L23.314 12 19.07 7.757l-1.414 1.415Z"}"></path><path fill-rule="${"evenodd"}" d="${"M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
