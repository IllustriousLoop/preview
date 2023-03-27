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
  )}><path d="${"M22.116 12.996a1.885 1.885 0 1 1 0 3.77H8.664V11.87h.888v4.007h12.585a1.008 1.008 0 0 0 .997-.996 1.032 1.032 0 0 0-1.04-.997H10.397v-.888zM13.43 7.235H8.664v1.992h.888V8.101h3.9a1.008 1.008 0 0 1 .996.996 1.065 1.065 0 0 1-1.018 1.04H1.885a1.885 1.885 0 1 0 0 3.77h5.891v-.889H1.885a.996.996 0 0 1 0-1.993H13.45a1.9 1.9 0 0 0 1.885-1.884 1.938 1.938 0 0 0-1.906-1.906z"}"></path></svg>`;
});
export {
  Component as default
};
