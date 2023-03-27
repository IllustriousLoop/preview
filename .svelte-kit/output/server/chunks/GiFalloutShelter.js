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
  )}><path d="${"M256 23C127.425 23 23 127.425 23 256s104.425 233 233 233 233-104.425 233-233S384.575 23 256 23zM149.268 71.287h213.168L256 256h213.17L362.732 440.713 256 256 149.564 440.713 42.83 256H256L149.268 71.287z"}"></path></svg>`;
});
export {
  Component as default
};
