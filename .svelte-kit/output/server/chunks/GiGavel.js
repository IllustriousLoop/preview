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
  )}><path d="${"M129.75 24.47 21.625 211.655l55.78 32.188L185.532 56.656 129.75 24.47zm55.97 69.25-75.626 130.874L326.47 349.47l75.592-130.876L185.72 93.72zm83.468.686-11.22 19.438 84.97 49.03 11.25-19.468-85-49zM434.25 200.22 326.156 387.405l55.78 32.188 108.095-187.188-55.78-32.187zm-270.53 76.905-11.282 19.53 84.968 49 11.25-19.5-84.937-49.03zm-3.095 45.844L61.312 494.81h67.157l82.28-142.968-50.125-28.875z"}"></path></svg>`;
});
export {
  Component as default
};
