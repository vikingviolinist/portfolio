import { c as create_ssr_component, v as validate_component, m as missing_component, h as each } from "../../../chunks/index.js";
import { i as icons } from "../../../chunks/index2.js";
import { T as Tooltip } from "../../../chunks/Tooltip.js";
import { H as Header } from "../../../chunks/Header.js";
const DevIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { component } = $$props;
  let { tooltip } = $$props;
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0)
    $$bindings.tooltip(tooltip);
  return `<div class="${"group relative flex justify-center items-center "}"><div class="${"w-12 lg:w-20 grayscale-[30%] hover:scale-150 hover:grayscale-0 transition-all ease-in-out group"}">${validate_component(component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>
	${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      position: "bottom-16 lg:bottom-24",
      origin: "bottom",
      tooltip
    },
    {},
    {}
  )}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"px-8 md:px-24 lg:px-36 xl:px-72 py-10 lg:py-12 flex flex-col gap-16"}">${validate_component(Header, "Header").$$render($$result, { title: "Min Tech Stack" }, {}, {})}
	<div class="${"dev-icons flex justify-center flex-wrap gap-8"}">${each(Object.keys(icons), (icon) => {
    return `${validate_component(DevIcon, "DevIcon").$$render($$result, { component: icons[icon], tooltip: icon }, {}, {})}`;
  })}</div></section>`;
});
export {
  Page as default
};
