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
  )}><path d="${"m50.73 121 49.57 62h311.4l49.6-62H50.73zM245 201v46h22v-46h-22zm-126 64L75.53 439H436.5L393 265H119zm137 14c40.2 0 73 32.8 73 73s-32.8 73-73 73-73-32.8-73-73 32.8-73 73-73zm0 18c-30.5 0-55 24.5-55 55s24.5 55 55 55 55-24.5 55-55-24.5-55-55-55zm16 12.5-5.9 65.7-30.2-10.5 36.1-55.2zM41 457v30h430v-30H41z"}"></path></svg>`;
});
export {
  Component as default
};
