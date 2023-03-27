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
  )}><path d="${"M151 22v32h18V22h-18zm48 0v32h18V22h-18zm48 0v32h18V22h-18zm48 0v32h18V22h-18zm48 0v32h18V22h-18zM131.7 73 73 131.7v248.6l58.7 58.7h248.6l58.7-58.7V131.7L380.3 73H131.7zm60.3 46h128v18H192v-18zM22 151v18h32v-18H22zm436 0v18h32v-18h-32zm-339 32h274v146H119V183zm-97 16v18h32v-18H22zm436 0v18h32v-18h-32zm-321 2v110h238V201H137zM22 247v18h32v-18H22zm436 0v18h32v-18h-32zM22 295v18h32v-18H22zm436 0v18h32v-18h-32zM22 343v18h32v-18H22zm436 0v18h32v-18h-32zm-266 32h128v18H192v-18zm-41 83v32h18v-32h-18zm48 0v32h18v-32h-18zm48 0v32h18v-32h-18zm48 0v32h18v-32h-18zm48 0v32h18v-32h-18z"}"></path></svg>`;
});
export {
  Component as default
};
