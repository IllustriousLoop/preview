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
  )}><g data-name="${"Share 1"}"><path d="${"M12.223 11.075a.5.5 0 0 0 .7.71l7-7v3.58a.508.508 0 0 0 .5.5.5.5 0 0 0 .5-.5v-4.79a.5.5 0 0 0-.5-.5h-4.79a.5.5 0 0 0 0 1h3.58Z"}"></path><path d="${"M17.876 20.926H6.124a3.053 3.053 0 0 1-3.05-3.05V6.124a3.053 3.053 0 0 1 3.05-3.05h6.028a.5.5 0 0 1 0 1H6.124a2.053 2.053 0 0 0-2.05 2.05v11.752a2.053 2.053 0 0 0 2.05 2.05h11.752a2.053 2.053 0 0 0 2.05-2.05v-6.027a.5.5 0 0 1 1 0v6.027a3.053 3.053 0 0 1-3.05 3.05Z"}"></path></g></svg>`;
});
export {
  Component as default
};
