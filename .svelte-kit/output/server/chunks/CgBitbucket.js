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
  )}><path fill-rule="${"evenodd"}" d="${"M4.583 4.635c-.552 0-.915.44-.811.982l2.456 12.766c.104.542.637.982 1.189.982h9.166c.552 0 1.085-.44 1.189-.982l2.456-12.766c.104-.542-.259-.982-.811-.982H4.583Zm8.962 9.73.91-4.73h-4.91l.91 4.73h3.09Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
