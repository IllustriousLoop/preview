import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M19.996 13.507 14 10.081V4.125c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v5.956l-5.996 3.426a1 1 0 0 0 .77 1.829L11 13.844v4.451l-1.625 1.3a1 1 0 0 0 .996 1.709l2.129-.852 2.129.852a.998.998 0 0 0 1.235-.426 1.001 1.001 0 0 0-.239-1.284L14 18.294v-4.451l5.226 1.493.274.039a1 1 0 0 0 .496-1.868zM12.5 4.375a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"}"></path></svg>`;
});
export {
  Component as default
};
