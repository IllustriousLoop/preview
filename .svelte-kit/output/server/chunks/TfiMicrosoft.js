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
  )}><path d="${"M7.734 15.723 17 17V8.97H7.734v6.753zm1-5.753H16v5.883l-7.266-1.002V9.97zM0 14.661l6.967.959V8.97H0v5.691zM1 9.97h4.967v4.503L1 13.789V9.97zM0 8.112h6.967V1.38L0 2.339v5.773zM1 3.21l4.967-.684v4.585H1V3.21zm6.734-1.933v6.835H17V0L7.734 1.277zM16 7.112H8.734V2.149L16 1.147v5.965z"}"></path></svg>`;
});
export {
  Component as default
};
