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
  )}><path fill-rule="${"evenodd"}" d="${"M13.25 1v13h1.5V1h-1.5Z"}" clip-rule="${"evenodd"}"></path><rect rx="${".5"}" transform="${"matrix(0 1 1 0 5 7)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 5 13)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 3 7)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 3 13)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 7 7)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 1 7)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 7 13)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 1 13)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 7 5)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 1 5)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 7 3)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 1 3)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 7 9)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 1 9)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 7 11)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 1 11)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 9 7)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 9 13)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 11 7)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 11 13)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 5 1)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 3 1)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 7 1)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 1 1)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 9 1)"}"></rect><rect rx="${".5"}" transform="${"matrix(0 1 1 0 11 1)"}"></rect></svg>`;
});
export {
  Component as default
};
