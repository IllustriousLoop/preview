import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M387.581 139.712 356.755 109 216.913 248.319l30.831 30.719 139.837-139.326zM481.172 109 247.744 340.469l-91.39-91.051-30.827 30.715L247.744 403 512 139.712 481.172 109zM0 280.133 123.321 403l30.829-30.713L31.934 249.418 0 280.133z"}"></path></svg>`;
});
export {
  Component as default
};
