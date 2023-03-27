import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 15 15" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M.5 0a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V5h9.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H.5ZM1 4.075V1h3.075v3.075H1Zm0 .85V14h3v-1.075H2.75a.425.425 0 1 1 0-.85H4v-1.15H2.25a.425.425 0 0 1 0-.85H4v-1.15H2.75a.425.425 0 1 1 0-.85H4v-1.15H2.75a.425.425 0 1 1 0-.85H4v-1.15H1ZM4.925 4h1.15V2.75a.425.425 0 0 1 .85 0V4h1.15V2.75a.425.425 0 0 1 .85 0V4h1.15V2.25a.425.425 0 1 1 .85 0V4h1.15V2.75a.425.425 0 0 1 .85 0V4H14V1H4.925v3Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
