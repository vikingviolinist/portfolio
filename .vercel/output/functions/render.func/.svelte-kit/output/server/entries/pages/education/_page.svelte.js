import { c as create_ssr_component, v as validate_component, h as each } from "../../../chunks/index.js";
import { T as TimelineItem } from "../../../chunks/TimelineItem.js";
import { H as Header } from "../../../chunks/Header.js";
const schools = [
  {
    from: "Oct 2015",
    to: "Mai 2018",
    title: "Master of Arts (MA), Scandinavian Studies",
    institution: "Universitet i Wien, \xD8sterrike",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut rerum esse praesentium, deserunt voluptatem ex officiis ipsum aperiam qui cupiditate, possimus quibusdam, sequi nulla iure. Maiores saepe aspernatur commodi nulla!"
  },
  {
    from: "Oct 2011",
    to: "Jun 2015",
    title: "Bachelor's degree (BA), Language Interpretation and Translation, Norwegian Studies",
    institution: "Karlsuniversitetet i Praha, Tsjekkia",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut rerum esse praesentium, deserunt voluptatem ex officiis ipsum aperiam qui cupiditate, possimus quibusdam, sequi nulla iure. Maiores saepe aspernatur commodi nulla!"
  },
  {
    from: "Sep 2008",
    to: "May 2011",
    title: "Diploma (DiS), Fiolin",
    institution: "Konservatoriet i Praha, Tsjekkia",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut rerum esse praesentium, deserunt voluptatem ex officiis ipsum aperiam qui cupiditate, possimus quibusdam, sequi nulla iure. Maiores saepe aspernatur commodi nulla!"
  },
  {
    from: "Sep 2000",
    to: "May 2008",
    title: "Abitur med Sprachdiplom",
    institution: "Spr\xE5kgymnasium Golianova i Nitra, Slovakia",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut rerum esse praesentium, deserunt voluptatem ex officiis ipsum aperiam qui cupiditate, possimus quibusdam, sequi nulla iure. Maiores saepe aspernatur commodi nulla!"
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"px-8 md:px-24 lg:px-36 xl:px-72 py-10 lg:py-12 flex flex-col gap-16"}">${validate_component(Header, "Header").$$render($$result, { title: "Min Utdanning" }, {}, {})}
	<div class="${"grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12"}">${each(schools, (school) => {
    return `${validate_component(TimelineItem, "TimelineItem").$$render($$result, { job: school }, {}, {})}`;
  })}</div></section>`;
});
export {
  Page as default
};
