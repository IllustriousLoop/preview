import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M8 13h7v2H8zm-3 0h2v2H5zm0-4h2v1H5zm3 3v-1H5v1h2zm0-3h1v1H8zm1 2h1v1H9zm1-2h1v1h-1zm1 2h1v1h-1zm1-2h1v1h-1zm1 2h1v1h-1zm1-2h1v1h-1zm1 2h1v1h-1zm1-2h1v1h-1zm1 3h2V9h-1v2h-1zm1 1h-1v1h-1v1h3v-1h-1zm2-7H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H4V8h16v8z"}"></path></svg>`;
});
export {
  Component as default
};
