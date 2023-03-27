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
  )}><path d="${"M480 369.2V251.1c0-8.1-6.8-14.8-15.1-14.8s-15.1 6.6-15.1 14.8v81.7L300.5 181c-2.8-2.8-6.6-4.3-10.7-4.3-4 0-7.8 1.5-10.7 4.3l-85.9 84.1L57.5 132.3c-2.9-2.8-6.6-4.3-10.7-4.3-4 0-7.8 1.5-10.7 4.3-2.8 2.7-4.2 6.2-4.2 10.2 0 5.4 2.3 8.8 4.2 10.7l146.3 143.2c2.9 2.8 6.6 4.3 10.7 4.3 4 0 7.8-1.5 10.7-4.3l85.9-84.1 138 142.2H344c-8.3 0-15.1 6.6-15.1 14.8 0 8.1 6.8 14.8 15.1 14.8h120.8c8.4-.1 15.2-6.7 15.2-14.9z"}"></path></svg>`;
});
export {
  Component as default
};
