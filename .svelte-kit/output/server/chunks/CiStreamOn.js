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
  )}><g data-name="${"Stream On"}"><path d="${"M6.26 19.089a9.625 9.625 0 0 1-.026-14.178C6.709 4.475 6 3.769 5.527 4.2a10.516 10.516 0 0 0 .026 15.6c.475.433 1.184-.273.707-.707Z"}"></path><path d="${"M8.84 15.706a5.024 5.024 0 0 1-.014-7.412c.474-.437-.234-1.143-.707-.707a6.028 6.028 0 0 0 .014 8.826c.474.434 1.183-.272.707-.707Z"}"></path><circle cx="${"12"}" cy="${"12"}" r="${"1.244"}"></circle><path d="${"M17.74 4.911a9.625 9.625 0 0 1 .026 14.178c-.475.436.234 1.142.707.707A10.516 10.516 0 0 0 18.447 4.2c-.475-.433-1.184.273-.707.707Z"}"></path><path d="${"M15.16 8.294a5.024 5.024 0 0 1 .014 7.412c-.474.437.234 1.143.707.707a6.028 6.028 0 0 0-.014-8.826c-.474-.434-1.183.272-.707.707Z"}"></path></g></svg>`;
});
export {
  Component as default
};
