import { c as create_ssr_component, v as validate_component, h as each } from "../../../chunks/index.js";
import { T as TimelineItem } from "../../../chunks/TimelineItem.js";
import { H as Header } from "../../../chunks/Header.js";
const jobs = [
  {
    from: "Sep 2022",
    to: "i dag",
    title: "Konsulent",
    institution: "Noria",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut rerum esse praesentium, deserunt voluptatem ex officiis ipsum aperiam qui cupiditate, possimus quibusdam, sequi nulla iure. Maiores saepe aspernatur commodi nulla!"
  },
  {
    from: "Jul 2020",
    to: "Aug 2022",
    title: "Fullstack Developer",
    institution: "Kindly",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut rerum esse praesentium, deserunt voluptatem ex officiis ipsum aperiam qui cupiditate, possimus quibusdam, sequi nulla iure. Maiores saepe aspernatur commodi nulla!"
  },
  {
    from: "Feb 2020",
    to: "Jun 2020",
    title: "Backend Developer",
    institution: "Recheckit",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut rerum esse praesentium, deserunt voluptatem ex officiis ipsum aperiam qui cupiditate, possimus quibusdam, sequi nulla iure. Maiores saepe aspernatur commodi nulla!"
  },
  {
    from: "May 2018",
    to: "Jan 2020",
    title: "EMEA Roadside Support Specialist",
    institution: "Tesla",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut rerum esse praesentium, deserunt voluptatem ex officiis ipsum aperiam qui cupiditate, possimus quibusdam, sequi nulla iure. Maiores saepe aspernatur commodi nulla!"
  },
  {
    from: "Oct 2016",
    to: "Jul 2017",
    title: "Customer Service Representative ",
    institution: "bwin",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut rerum esse praesentium, deserunt voluptatem ex officiis ipsum aperiam qui cupiditate, possimus quibusdam, sequi nulla iure. Maiores saepe aspernatur commodi nulla!"
  },
  {
    from: "Sep 2022",
    to: "Aug 2022",
    title: "Fiolinl\xE6rer",
    institution: "International School of Music and Fine Arts Prague",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut rerum esse praesentium, deserunt voluptatem ex officiis ipsum aperiam qui cupiditate, possimus quibusdam, sequi nulla iure. Maiores saepe aspernatur commodi nulla!"
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"px-8 md:px-24 lg:px-36 xl:px-72 py-10 lg:py-12 flex flex-col gap-16"}">${validate_component(Header, "Header").$$render($$result, { title: "Min Arbeidserfaring" }, {}, {})}
	<div class="${"grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12"}">${each(jobs, (job) => {
    return `${validate_component(TimelineItem, "TimelineItem").$$render($$result, { job }, {}, {})}`;
  })}</div></section>`;
});
export {
  Page as default
};
