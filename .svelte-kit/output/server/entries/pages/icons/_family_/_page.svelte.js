import { c as create_ssr_component, b as compute_rest_props, d as spread, e as escape_object, f as escape_attribute_value, i as is_void, p as createEventDispatcher, r as onDestroy, g as add_attribute, o as each, v as validate_component, h as escape } from "../../../../chunks/index2.js";
import classNames from "classnames";
/* empty css                                                          */import { P } from "../../../../chunks/P.js";
import { C as CardIcons } from "../../../../chunks/CardIcons.js";
const A = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "color", "aClass"]);
  let { href = "#" } = $$props;
  let { color = "text-blue-600 dark:text-blue-500" } = $$props;
  let { aClass = "inline-flex items-center hover:underline" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  return `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(classNames(aClass, color, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "color", "customSize"]);
  let { tag = "h1" } = $$props;
  let { color = "text-gray-900 dark:text-white" } = $$props;
  let { customSize = "" } = $$props;
  const textSizes = {
    h1: "text-5xl font-extrabold",
    h2: "text-4xl font-bold",
    h3: "text-3xl font-bold",
    h4: "text-2xl font-bold",
    h5: "text-xl font-bold",
    h6: "text-lg font-bold"
  };
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.customSize === void 0 && $$bindings.customSize && customSize !== void 0)
    $$bindings.customSize(customSize);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        escape_object($$restProps),
        {
          class: escape_attribute_value(classNames(customSize ? customSize : textSizes[tag], color, "w-full", $$props.class))
        }
      ],
      {}
    )}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
const InfiniteScroll = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { threshold = 0 } = $$props;
  let { horizontal = false } = $$props;
  let { elementScroll = null } = $$props;
  let { hasMore = true } = $$props;
  let { reverse = false } = $$props;
  let { window = false } = $$props;
  createEventDispatcher();
  let component;
  onDestroy(() => {
  });
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.elementScroll === void 0 && $$bindings.elementScroll && elementScroll !== void 0)
    $$bindings.elementScroll(elementScroll);
  if ($$props.hasMore === void 0 && $$bindings.hasMore && hasMore !== void 0)
    $$bindings.hasMore(hasMore);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  if ($$props.window === void 0 && $$bindings.window && window !== void 0)
    $$bindings.window(window);
  return `${!window && !elementScroll ? `<div id="${"svelte-infinite-scroll"}" style="${"width: 0;"}"${add_attribute("this", component, 0)}></div>` : ``}`;
});
let size = 20;
const ViewerIcons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { allIcons = [] } = $$props;
  let { idIcon } = $$props;
  let page = 1;
  const fullSize = allIcons.length;
  let IconsByPage = [];
  if ($$props.allIcons === void 0 && $$bindings.allIcons && allIcons !== void 0)
    $$bindings.allIcons(allIcons);
  if ($$props.idIcon === void 0 && $$bindings.idIcon && idIcon !== void 0)
    $$bindings.idIcon(idIcon);
  {
    if (IconsByPage[0]?.toLowerCase().startsWith(idIcon) || IconsByPage.length === 0) {
      IconsByPage = [
        ...IconsByPage,
        ...allIcons.slice((page - 1) * size, (page - 1) * size + size)
      ];
    } else {
      IconsByPage = [...allIcons.slice((page - 1) * size, (page - 1) * size + size)];
    }
  }
  return `<section class="${"bg-white dark:bg-gray-900 px-6 py-10 mx-auto rounded-lg mt-5"}"><div class="${"w-full max-h-[80vh] overflow-scroll"}"><div class="${"grid grid-cols-1 gap-8 md:grid-cols-4 "}">${each(IconsByPage, (icon) => {
    return `<div class="${"lg:flex"}">${validate_component(CardIcons, "CardIcons").$$render($$result, { icon, idIcon }, {}, {})}
				</div>`;
  })}
			${IconsByPage.length < fullSize ? `${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `info: ${escape(fullSize)}/${escape(IconsByPage.length)}`;
    }
  })}` : ``}</div>

		${validate_component(InfiniteScroll, "InfiniteScroll").$$render($$result, {}, {}, {})}</div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="${"px-6 py-10 pb-0 mx-auto"}">${validate_component(Heading, "Heading").$$render($$result, { class: "mb-4" }, {}, {
    default: () => {
      return `${escape(data.info.name)}`;
    }
  })}

	${validate_component(P, "P").$$render($$result, { size: "xl" }, {}, {
    default: () => {
      return `License: ${validate_component(A, "A").$$render($$result, { href: data.info.licenseUrl }, {}, {
        default: () => {
          return `${escape(data.info.license)}`;
        }
      })}`;
    }
  })}
	${validate_component(P, "P").$$render($$result, { size: "xl" }, {}, {
    default: () => {
      return `Project: ${validate_component(A, "A").$$render($$result, { href: data.info.projectUrl }, {}, {
        default: () => {
          return `${escape(data.info.projectUrl)}`;
        }
      })}`;
    }
  })}
	${validate_component(P, "P").$$render($$result, { size: "xl" }, {}, {
    default: () => {
      return `How to import`;
    }
  })}
	<code>import Icon from &quot;svelte-symbols/${escape(data.info.id)}/Icon.svelte;&quot;
	</code></section>

${validate_component(ViewerIcons, "ViewerIcons").$$render($$result, { allIcons: data.icons, idIcon: data.id }, {}, {})}`;
});
export {
  Page as default
};
