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
  )}><g data-name="${"Shopping Cart"}"><path d="${"M2.86 3.95h-.01l.05.53Zm3.357 11.712a2.492 2.492 0 0 0 2.49 2.27h9.07a2.492 2.492 0 0 0 2.49-2.27l.67-7.52a1.478 1.478 0 0 0-.39-1.15 1.507 1.507 0 0 0-1.11-.49H6.407l-.14-1.82a1.752 1.752 0 0 0-1.74-1.61h-.97a.5.5 0 0 0-.5.5.508.508 0 0 0 .5.5h.97a.752.752 0 0 1 .75.69Zm13.05-.09a1.492 1.492 0 0 1-1.49 1.36h-9.07a1.492 1.492 0 0 1-1.49-1.36L6.487 7.5h12.95a.49.49 0 0 1 .37.16.516.516 0 0 1 .13.39Z"}"></path><circle cx="${"9.946"}" cy="${"19.928"}" r="${"1"}"></circle><circle cx="${"16.436"}" cy="${"19.928"}" r="${"1"}"></circle></g></svg>`;
});
export {
  Component as default
};
