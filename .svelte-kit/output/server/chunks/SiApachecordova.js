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
  )}><path d="${"M18.545.545H5.455L0 9.273l2.182 14.182h3.886l-.273-3.273h1.909l.273 3.273h8.045l.273-3.273h1.909l-.273 3.273h3.886L24 9.273 18.545.545zm0 17.455H5.455L4.364 9.273l2.182-4.364h3.506l-.234 1.636h4.364l-.234-1.636h3.506l2.182 4.364L18.545 18zm-3-6.955c.301 0 .545.908.545 2.029s-.244 2.029-.545 2.029c-.301 0-.545-.908-.545-2.029 0-1.12.244-2.029.545-2.029zm-6.886.17c.301 0 .545.908.545 2.029s-.244 2.029-.545 2.029c-.301 0-.545-.908-.545-2.029s.244-2.029.545-2.029z"}"></path></svg>`;
});
export {
  Component as default
};
