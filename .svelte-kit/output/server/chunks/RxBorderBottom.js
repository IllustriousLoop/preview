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
  )}><path fill-rule="${"evenodd"}" d="${"M1 13.25h13v1.5H1v-1.5Z"}" clip-rule="${"evenodd"}"></path><rect x="${"7"}" y="${"5"}" rx="${".5"}"></rect><rect x="${"13"}" y="${"5"}" rx="${".5"}"></rect><rect x="${"7"}" y="${"3"}" rx="${".5"}"></rect><rect x="${"13"}" y="${"3"}" rx="${".5"}"></rect><rect x="${"7"}" y="${"7"}" rx="${".5"}"></rect><rect x="${"7"}" y="${"1"}" rx="${".5"}"></rect><rect x="${"13"}" y="${"7"}" rx="${".5"}"></rect><rect x="${"13"}" y="${"1"}" rx="${".5"}"></rect><rect x="${"5"}" y="${"7"}" rx="${".5"}"></rect><rect x="${"5"}" y="${"1"}" rx="${".5"}"></rect><rect x="${"3"}" y="${"7"}" rx="${".5"}"></rect><rect x="${"3"}" y="${"1"}" rx="${".5"}"></rect><rect x="${"9"}" y="${"7"}" rx="${".5"}"></rect><rect x="${"9"}" y="${"1"}" rx="${".5"}"></rect><rect x="${"11"}" y="${"7"}" rx="${".5"}"></rect><rect x="${"11"}" y="${"1"}" rx="${".5"}"></rect><rect x="${"7"}" y="${"9"}" rx="${".5"}"></rect><rect x="${"13"}" y="${"9"}" rx="${".5"}"></rect><rect x="${"7"}" y="${"11"}" rx="${".5"}"></rect><rect x="${"13"}" y="${"11"}" rx="${".5"}"></rect><rect x="${"1"}" y="${"5"}" rx="${".5"}"></rect><rect x="${"1"}" y="${"3"}" rx="${".5"}"></rect><rect x="${"1"}" y="${"7"}" rx="${".5"}"></rect><rect x="${"1"}" y="${"1"}" rx="${".5"}"></rect><rect x="${"1"}" y="${"9"}" rx="${".5"}"></rect><rect x="${"1"}" y="${"11"}" rx="${".5"}"></rect></svg>`;
});
export {
  Component as default
};
