import { c as create_ssr_component, g as add_attribute, l as subscribe, h as escape, v as validate_component } from "../../chunks/index2.js";
import classNames from "classnames";
/* empty css                                                    */import { p as page } from "../../chunks/stores.js";
const ImagePlaceholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { divClass = "space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center" } = $$props;
  let { size = "48" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<div role="${"status"}"${add_attribute("class", classNames(divClass, $$props.class), 0)}><div class="${"flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700"}"><svg${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} class="${"text-gray-200"}" xmlns="${"http://www.w3.org/2000/svg"}" aria-hidden="${"true"}" fill="${"currentColor"}" viewBox="${"0 0 640 512"}"><path d="${"M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"}"></path></svg></div>
	<div class="${"w-full"}"><div class="${"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"}"></div>
		<div class="${"h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"}"></div>
		<div class="${"h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"}"></div>
		<div class="${"h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"}"></div>
		<div class="${"h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"}"></div>
		<div class="${"h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"}"></div></div>
	<span class="${"sr-only"}">Loading...</span></div>`;
});
const Skeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { divClass = "max-w-sm animate-pulse" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  return `<div role="${"status"}"${add_attribute("class", classNames(divClass, $$props.class), 0)}><div class="${"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"}"></div>
	<div class="${"h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"}"></div>
	<div class="${"h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"}"></div>
	<div class="${"h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"}"></div>
	<div class="${"h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"}"></div>
	<div class="${"h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"}"></div>
	<span class="${"sr-only"}">Loading...</span></div>`;
});
const TextPlaceholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { divClass = "space-y-2.5 animate-pulse max-w-lg" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  return `<div role="${"status"}"${add_attribute("class", classNames(divClass, $$props.class), 0)}><div class="${"flex items-center space-x-2 w-full"}"><div class="${"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"}"></div>
		<div class="${"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"}"></div>
		<div class="${"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"}"></div></div>
	<div class="${"flex items-center w-full space-x-2 max-w-[480px]"}"><div class="${"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"}"></div>
		<div class="${"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"}"></div>
		<div class="${"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"}"></div></div>
	<div class="${"flex items-center w-full space-x-2 max-w-[400px]"}"><div class="${"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"}"></div>
		<div class="${"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"}"></div>
		<div class="${"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"}"></div></div>
	<div class="${"flex items-center w-full space-x-2 max-w-[480px]"}"><div class="${"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"}"></div>
		<div class="${"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"}"></div>
		<div class="${"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"}"></div></div>
	<div class="${"flex items-center w-full space-x-2 max-w-[440px]"}"><div class="${"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"}"></div>
		<div class="${"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"}"></div>
		<div class="${"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"}"></div></div>
	<div class="${"flex items-center w-full space-x-2 max-w-[360px]"}"><div class="${"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"}"></div>
		<div class="${"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"}"></div>
		<div class="${"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"}"></div></div>
	<span class="${"sr-only"}">Loading...</span></div>`;
});
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}: ${escape($page.error?.message)}</h1>
${validate_component(Skeleton, "Skeleton").$$render($$result, { class: "mt-16 mb-8" }, {}, {})}
${validate_component(ImagePlaceholder, "ImagePlaceholder").$$render($$result, { class: "my-8" }, {}, {})}
${validate_component(TextPlaceholder, "TextPlaceholder").$$render($$result, { class: "my-8" }, {}, {})}`;
});
export {
  Error as default
};
