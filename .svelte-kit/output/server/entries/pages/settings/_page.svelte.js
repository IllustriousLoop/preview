import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import "classnames";
/* empty css                                                       */import { P } from "../../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `Settings`;
    }
  })}`;
});
export {
  Page as default
};
