import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, h as each, m as missing_component, i as is_promise, n as noop } from "../../../chunks/index.js";
import { i as icons } from "../../../chunks/index2.js";
import { createApi } from "unsplash-js";
import { H as Header } from "../../../chunks/Header.js";
import { B as Button } from "../../../chunks/Button.js";
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  return `<div class="${"relative group text-white"}"><div class="${"relative flex justify-center items-center "}"><div class="${"absolute top-10 text-xl font-bold z-10 text-center"}"><h1>${escape(project.name)}</h1></div>
		${project.path ? `<img class="${"w-full h-72 object-cover rounded-2xl grayscale-[70%]"}"${add_attribute("src", project.path, 0)}${add_attribute("alt", project.name, 0)}>` : `<div class="${"w-full h-72 object-cover rounded-2xl grayscale-[70%] bg-[" + escape(project.background, true) + "]"}"></div>`}</div>
	<div class="${"w-full h-full bg-secondary absolute left-0 top-0 rounded-2xl flex flex-col justify-center items-center opacity-0 scale-0 transition-all duration-500 ease-in-out group-hover:opacity-90 group-hover:scale-100"}"><p class="${"text-sm font-semibold text-start p-2"}">${escape(project.description)}</p>
		<div class="${"flex justify-center items-center"}">${project.homepage ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      icon: "fa fa-rocket",
      link: project.homepage
    },
    {},
    {}
  )}` : ``}
			${validate_component(Button, "Button").$$render(
    $$result,
    {
      icon: "fab fa-github",
      link: project.repoLink
    },
    {},
    {}
  )}</div>
		<div class="${"absolute flex justify-start flex-wrap gap-2 w-full p-1 bottom-0"}">${each(project.icons, (icon) => {
    return `<span class="${"w-8"}">${validate_component(icon.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
				</span>`;
  })}</div></div></div>`;
});
const backgroundColors = [
  "blue",
  "yellow",
  "red",
  "salmon",
  "pink",
  "green",
  "brown",
  "blue",
  "yellow",
  "red",
  "salmon",
  "pink",
  "green",
  "brown",
  "blue",
  "yellow",
  "red",
  "salmon",
  "pink",
  "green",
  "brown",
  "blue",
  "yellow",
  "red",
  "salmon",
  "pink",
  "green",
  "brown",
  "blue",
  "yellow",
  "red",
  "salmon",
  "pink",
  "green",
  "brown",
  "blue",
  "yellow",
  "red",
  "salmon",
  "pink",
  "green",
  "brown",
  "blue",
  "yellow",
  "red",
  "salmon",
  "pink",
  "green",
  "brown",
  "blue",
  "yellow",
  "red",
  "salmon",
  "pink",
  "green",
  "brown",
  "blue",
  "yellow",
  "red",
  "salmon",
  "pink",
  "green",
  "brown"
];
const fetchRepos = async () => {
  let repos;
  try {
    const res = await fetch("https://api.github.com/users/vikingviolinist/repos?per_page=60");
    repos = await res.json();
  } catch (error) {
    repos = [];
  }
  return repos.filter((repo) => repo.topics.includes("portfolio"));
};
const fetchImages = async (count) => {
  const accessKey = "2jacHDYybwpIjozi70jBxq_FdkhUhap37l99qairwI0";
  const unsplash = createApi({ accessKey });
  let images;
  try {
    const res = await unsplash.photos.getRandom({ collectionIds: ["7P0uGtLS0rY"], count });
    images = await res.response;
    if (images && images instanceof Array) {
      images = images.map((image) => ({ path: image.urls.small, background: "" }));
    }
  } catch (error) {
    images = backgroundColors.map((background) => ({ path: "", background }));
  }
  return images;
};
const loadProjects = async () => {
  const repos = await fetchRepos();
  const images = await fetchImages(repos.length);
  if (images instanceof Array && images[0].path && repos.length !== images.length) {
    return console.log("this should not happen");
  }
  const projects2 = repos.map((repo, index) => ({
    name: repo.name.replaceAll("_", " "),
    description: repo.description || "",
    homepage: repo.homepage,
    repoLink: repo.html_url,
    path: images[index].path,
    background: images[index].background,
    icons: repo.topics.filter((icon) => icon !== "portfolio" && icons[icon.charAt(0).toUpperCase() + icon.slice(1)]).map((icon) => ({
      component: icons[icon.charAt(0).toUpperCase() + icon.slice(1)]
    }))
  }));
  return projects2;
};
let projects = loadProjects();
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"min-h-screen px-8 md:px-24 lg:px-36 xl:px-72 py-10 lg:py-12 flex flex-col gap-16"}">${validate_component(Header, "Header").$$render($$result, { title: "Mine Prosjekter" }, {}, {})}
	${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(projects2) {
      return `
		<div class="${"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}">${each(projects2, (project) => {
        return `${validate_component(Project, "Project").$$render($$result, { project }, {}, {})}`;
      })}</div>
	`;
    }(__value);
  }(projects)}</section>`;
});
export {
  Page as default
};
