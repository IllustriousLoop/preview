import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { "xml:space": "preserve" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#7CB342"}" d="${"M12 29.001a2 2 0 0 1-4 0v-9a2 2 0 0 1 4 0v9zm28 0a2 2 0 0 1-4 0v-9a2 2 0 0 1 4 0v9zM22 40a2 2 0 0 1-4 0v-9a2 2 0 0 1 4 0v9zm8 0a2 2 0 0 1-4 0v-9a2 2 0 0 1 4 0v9z"}"></path><path fill="${"#7CB342"}" d="${"M14 18.001V33a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V18.001H14zM24 8c-6 0-9.655 3.645-10 8h20c-.346-4.355-4-8-10-8zm-4 5.598a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"}"></path><path fill="${"none"}" stroke="${"#7CB342"}" stroke-linecap="${"round"}" stroke-width="${"2"}" d="${"m30 7-1.666 2.499M18 7l1.333 2.082"}"></path></svg>`;
});
export {
  Component as default
};
