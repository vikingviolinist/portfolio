import { c as create_ssr_component, d as add_attribute, e as escape } from "./index.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  let { link } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  return `<a class="${"bg-gray-5 text-white rounded-3xl w-[50px] h-[50px] flex items-center justify-center mx-2 my-0 cursor-pointer transition-all duration-500 ease-in-out hover:bg-secondary"}"${add_attribute("href", link, 0)} target="${"_blank"}"><i class="${escape(icon, true) + " text-white flex items-center justify-center text-xl"}"></i></a>`;
});
export {
  Button as B
};
