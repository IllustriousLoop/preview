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
  )}><path d="${"m165.563 25-87 174H432.93L339.207 25H165.563zM233 217v30h46v-30h-46zm-9 48c-1 0-9.308 1.608-18.52 5.15-9.21 3.543-20.243 8.823-30.648 15.444C154.023 298.836 137 317 137 336c0 59.297 28.834 104.436 59.836 151h118.328C346.166 440.436 375 395.297 375 336c0-19-17.023-37.164-37.832-50.406-10.405-6.621-21.437-11.9-30.648-15.444C297.308 266.608 289 265 288 265h-64z"}"></path></svg>`;
});
export {
  Component as default
};
