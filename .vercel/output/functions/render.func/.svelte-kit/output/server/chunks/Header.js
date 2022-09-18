import { c as create_ssr_component, e as escape } from "./index.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  const first = title !== "Kontakt" ? title.split(" ")[0] : "";
  const second = title !== "Kontakt" ? title.split(" ").slice(1).join(" ") : title;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="${"text-center"}"><h2 class="${"uppercase text-white text-3xl lg:text-6xl relative font-bold"}">${escape(first)}
		<span class="${"text-gray-500 dark:text-gray-5 hidden lg:block lg:text-7xl absolute top-1/2 left-1/2 font-extrabold w-full -z-10 -translate-x-1/2 -translate-y-1/2"}">${escape(first)}</span></h2>
	<h2 class="${"uppercase text-3xl lg:text-6xl font-bold relative text-primary dark:text-secondary"}">${escape(second)}
		<span class="${"text-gray-500 dark:text-gray-5 hidden lg:block lg:text-7xl absolute top-1/2 left-1/2 font-extrabold w-full -z-10 -translate-x-1/2 -translate-y-1/2"}">${escape(second)}</span></h2></div>`;
});
export {
  Header as H
};
