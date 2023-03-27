import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M7.71 3h6.79l.51.5v4.507A4.997 4.997 0 0 0 14 7.416V5.99H7.69l-.86.86-.35.15H1.99v6H7.1c.07.348.177.682.316 1H1.51l-.5-.5v-11l.5-.5h5l.35.15.85.85zm-.22 2h6.5l.01-.99H7.5l-.36-.15-.85-.85H2v3h4.28l.86-.86.35-.15z"}" clip-rule="${"evenodd"}"></path><path fill-rule="${"evenodd"}" d="${"M9.778 8.674a4 4 0 1 1 4.444 6.652 4 4 0 0 1-4.444-6.652zm2.13 4.99 2.387-3.182-.8-.6-2.077 2.769-1.301-1.041-.625.78 1.704 1.364.713-.09z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
