import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { "xml:space": "preserve" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { style: "enable-background:new 0 0 24 24" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M18.438 4.954H16.5V3.546c0-.262-.23-.512-.5-.5a.509.509 0 0 0-.5.5v1.408h-7V3.546c0-.262-.23-.512-.5-.5a.509.509 0 0 0-.5.5v1.408H5.562a2.503 2.503 0 0 0-2.5 2.5v11c0 1.379 1.122 2.5 2.5 2.5h12.875c1.379 0 2.5-1.121 2.5-2.5v-11a2.502 2.502 0 0 0-2.499-2.5zm-12.876 1H7.5v.592c0 .262.23.512.5.5.271-.012.5-.22.5-.5v-.592h7v.592c0 .262.23.512.5.5.271-.012.5-.22.5-.5v-.592h1.937c.827 0 1.5.673 1.5 1.5v1.584H4.062V7.454c0-.827.673-1.5 1.5-1.5zm12.876 14H5.562c-.827 0-1.5-.673-1.5-1.5v-8.416h15.875v8.416a1.5 1.5 0 0 1-1.499 1.5z"}"></path></svg>`;
});
export {
  Component as default
};
