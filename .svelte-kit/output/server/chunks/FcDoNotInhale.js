import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#FFA726"}" d="${"M33.5 20C31.2 17.7 30 13.9 30 9V6H18v3c0 4.9-1.2 8.7-3.5 11-2.4.2-5.5 2-5.5 5.4 0 4.5 5.1 4.6 6 4.6 1.2 0 6.1 4 8 4h2c1.9 0 6.8-4 8-4 .9 0 6-.1 6-4.6 0-3.4-3.1-5.2-5.5-5.4z"}"></path><path fill="${"#FFA726"}" d="${"M33.5 20C31.2 17.7 30 13.9 30 9V6H18v3c0 4.9-1.2 8.7-3.5 11-2.4.2-5.5 2-5.5 5.4 0 4.5 5.1 4.6 6 4.6 1.2 0 6.1 4 8 4h2c1.9 0 6.8-4 8-4 .9 0 6-.1 6-4.6 0-3.4-3.1-5.2-5.5-5.4z"}"></path><path fill="${"#FFB74D"}" d="${"M26 9V6h-4v3c0 4.9-3 19-3 19s1.6 2 5 2 5-2 5-2-3-14.1-3-19z"}"></path><path fill="${"#CC861E"}" d="${"M23 34c-3.3 0-6.4-3.1-8-4h1.8c3.1 0 4.5 4 6.2 4zm2 0c3.3 0 6.4-3.1 8-4h-1.8c-3.1 0-4.5 4-6.2 4z"}"></path><path fill="${"#37474F"}" d="${"M3.563 6.396 6.39 3.568l37.966 37.966-2.828 2.828z"}"></path><g fill="${"#FF5722"}"><path d="${"m18 35 4 4h-8z"}"></path><path d="${"M17 38h2v4h-2zm13-3 4 4h-8z"}"></path><path d="${"M29 38h2v4h-2z"}"></path></g></svg>`;
});
export {
  Component as default
};
