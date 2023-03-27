import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M17 6h-3.008V4.182L9.489 0H2.992v6H0v8h3v3.1h11V14h3V6zM9.992 1.832 12.327 4H9.992V1.832zm-6-.832h5v4h4v1h-9V1zM13 16.1H4v-5h9v5zm3-3.1h-2v-2.9H3V13H1V7h15v6zm-4.994 0H5v-1h6.006v1zM9 15H5v-1h4v1zM3 9H2V8h1v1zm2 0H4V8h1v1z"}"></path></svg>`;
});
export {
  Component as default
};
