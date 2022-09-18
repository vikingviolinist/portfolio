import { g as getContext, c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, v as validate_component, f as add_classes, h as each } from "../../chunks/index.js";
import { T as Tooltip } from "../../chunks/Tooltip.js";
const app = "";
const sections = [
  { route: "/", icon: "home", tooltip: "Hjem" },
  { route: "/work", icon: "briefcase", tooltip: "Jobb" },
  { route: "/education", icon: "user-graduate", tooltip: "Utdanning" },
  { route: "/technologies", icon: "wrench", tooltip: "Teknologier" },
  { route: "/projects", icon: "laptop", tooltip: "Prosjekter" },
  { route: "/contact", icon: "envelope", tooltip: "Kontakt" }
];
const getStores = () => {
  const stores = getContext("__svelte__");
  const readonly_stores = {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    updated: stores.updated
  };
  Object.defineProperties(readonly_stores, {
    preloading: {
      get() {
        console.error("stores.preloading is deprecated; use stores.navigating instead");
        return {
          subscribe: stores.navigating.subscribe
        };
      },
      enumerable: false
    },
    session: {
      get() {
        removed_session();
        return {};
      },
      enumerable: false
    }
  });
  return readonly_stores;
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function removed_session() {
  throw new Error(
    "stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
  );
}
const NavBarButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { section } = $$props;
  let currentPath;
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  currentPath = $page.url.pathname;
  $$unsubscribe_page();
  return `<a data-sveltekit-prefetch${add_attribute("href", section.route, 0)} class="${"control p-6 cursor-pointer w-10 lg:w-12 h-10 lg:h-12 rounded-3xl hover:bg-secondary hover:rounded-xl transition-all duration-300 ease-linear group flex justify-center items-center shadow-[0_3px_15px_rgba(0,0,0,0.3);] " + escape(
    currentPath === section.route ? "bg-secondary" : "bg-gray-4",
    true
  )}"><i class="${"fas fa-" + escape(section.icon, true) + " text-xl pointer-events-none group-hover:text-white " + escape(
    currentPath === section.route ? "text-white" : "text-gray-2 dark:text-gray-400",
    true
  )}"></i>
	${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      position: "right-14",
      origin: "right",
      tooltip: section.tooltip
    },
    {},
    {}
  )}</a>`;
});
const ThemeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dark = true } = $$props;
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  return `<button class="${"active:-translate-y-2 ease-in-out duration-100 theme-btn top-[5%] right-[3%] w-12 h-12 rounded-full border-none fixed bg-gray-4 cursor-pointer shadow-lg z-10"}"><i class="${"theme-icon fas text-gray-2 text-2xl pointer-events-none " + escape(dark ? "fa-sun" : "fa-moon", true)}"></i></button>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dark = true;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div${add_classes((dark ? "dark" : "").trim())}><main class="${"min-h-screen transition-all duration-500 ease-in-out dark:bg-primary bg-secondary"}">${validate_component(ThemeToggle, "ThemeToggle").$$render(
      $$result,
      { dark },
      {
        dark: ($$value) => {
          dark = $$value;
          $$settled = false;
        }
      },
      {}
    )}
		<nav class="${"fixed left-[50%] lg:left-auto bottom-5 lg:top-[50%] lg:right-3 -translate-x-[50%] lg:-translate-y-[50%] flex lg:flex-col items-center justify-center gap-4 lg:gap-5 transition-all duration-300 ease-in-out z-10"}">${each(sections, (section) => {
      return `${validate_component(NavBarButton, "NavBarButton").$$render($$result, { section }, {}, {})}`;
    })}</nav>

		${slots.default ? slots.default({}) : ``}</main></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Layout as default
};
