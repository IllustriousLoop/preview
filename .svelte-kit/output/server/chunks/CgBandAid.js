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
  )}><path d="${"M11.939 9.765a1 1 0 1 1-1.813-.845 1 1 0 0 1 1.813.845ZM8.92 13.874a1 1 0 1 0 .845-1.813 1 1 0 0 0-.846 1.813Zm4.954 1.206a1 1 0 1 1-1.813-.845 1 1 0 0 1 1.813.846Zm.361-3.141a1 1 0 1 0 .845-1.813 1 1 0 0 0-.845 1.813Z"}"></path><path fill-rule="${"evenodd"}" d="${"M17.071 1.124a6 6 0 0 0-7.973 2.902L4.026 14.902a6 6 0 0 0 10.876 5.072l5.072-10.876a6 6 0 0 0-2.903-7.974Zm-3.136 16.192 3.38-7.25-7.25-3.382-3.38 7.25 7.25 3.382Zm-.846 1.812-7.25-3.38a4 4 0 1 0 7.25 3.38Zm3.137-16.191a4 4 0 0 1 1.935 5.316l-7.25-3.381a4 4 0 0 1 5.315-1.935Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
