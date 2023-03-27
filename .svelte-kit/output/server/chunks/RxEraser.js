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
  )}><path fill-rule="${"evenodd"}" d="${"M8.36.73a.5.5 0 0 1 .708 0l5.203 5.202a.5.5 0 0 1 0 .707l-5.316 5.316-1.608 1.609a1.5 1.5 0 0 1-2.122 0l-3.789-3.79a1.5 1.5 0 0 1 0-2.12l1.609-1.61L8.36.73Zm.354 1.06L4.106 6.398l4.496 4.496 4.608-4.608L8.714 1.79Zm-.82 9.811L3.398 7.106 2.143 8.36a.5.5 0 0 0 0 .708l3.79 3.789a.5.5 0 0 0 .706 0l1.255-1.255Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
