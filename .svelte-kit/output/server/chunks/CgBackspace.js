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
  )}><path d="${"m17.743 8.464 1.414 1.415L17.036 12l2.121 2.121-1.414 1.415-2.122-2.122-2.121 2.122-1.414-1.415L14.207 12l-2.121-2.121L13.5 8.465l2.121 2.12 2.122-2.12Z"}"></path><path fill-rule="${"evenodd"}" d="${"m8.586 19-6.293-6.293a1 1 0 0 1 0-1.414L8.586 5h14v14h-14Zm.828-12-5 5 5 5h11.172V7H9.414Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
