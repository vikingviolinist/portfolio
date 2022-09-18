import { c as create_ssr_component, e as escape } from "./index.js";
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tooltip } = $$props;
  let { position } = $$props;
  let { origin } = $$props;
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0)
    $$bindings.tooltip(tooltip);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.origin === void 0 && $$bindings.origin && origin !== void 0)
    $$bindings.origin(origin);
  return `<span class="${"hidden lg:block absolute w-auto p-2 m-2 min-w-max rounded-md shadow-md text-white bg-gray-4 text-xs font-bold pointer-events-none transition-all duration-300 scale-0 origin-" + escape(origin, true) + " group-hover:scale-100 " + escape(position, true)}">${escape(tooltip)}</span>`;
});
export {
  Tooltip as T
};
