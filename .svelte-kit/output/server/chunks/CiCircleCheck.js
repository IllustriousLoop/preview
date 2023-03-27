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
  )}><g data-name="${"Circle Check"}"><path d="${"M15.81 10.4a.5.5 0 0 0-.71-.71l-3.56 3.56-1.73-1.73a.5.5 0 0 0-.71.71l2.08 2.08a.513.513 0 0 0 .71 0Z"}"></path><path d="${"M12 21.934A9.934 9.934 0 1 1 21.933 12 9.945 9.945 0 0 1 12 21.934Zm0-18.867A8.934 8.934 0 1 0 20.933 12 8.944 8.944 0 0 0 12 3.067Z"}"></path></g></svg>`;
});
export {
  Component as default
};
