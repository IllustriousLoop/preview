import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 32 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"m15.937 11.355-2.057 4.879h4.433l-2.358-4.924-.019.044zm.027-7.055L4.685 8.269l1.782 14.777 9.508 5.226 9.557-5.297 1.782-14.776L15.963 4.3zm4.78 17.549-1.531-3.545h-6.25l-1.398 3.497-2.601.048 6.973-15.513 7.216 15.513h-2.41z"}"></path></svg>`;
});
export {
  Component as default
};
