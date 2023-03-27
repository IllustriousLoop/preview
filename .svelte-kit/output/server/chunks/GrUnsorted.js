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
  )}><path fill="${"#000"}" fill-rule="${"evenodd"}" d="${"m15.204 15.321 1.597-1.597.707.707-2.45 2.45-.354.354-.353-.353-2.45-2.45.707-.708 1.596 1.597V7.217h1v8.104Zm-5.9-6.407v8.104h1V8.914l1.597 1.597.707-.707-2.45-2.45L9.803 7l-.354.354L7 9.804l.707.707 1.597-1.597Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
