<script lang="ts">
  import go from './icons/Go.svelte';
  import react from './icons/React.svelte';
  import svelte from './icons/Svelte.svelte';
  import angular from './icons/Angular.svelte';
  import nodejs from './icons/Nodejs.svelte';
  import javascript from './icons/Javascript.svelte';
  import typescript from './icons/Typescript.svelte';
  import html from './icons/Html.svelte';
  import css from './icons/Css.svelte';
  import tailwindcss from './icons/tailwindcss.svelte';
  import graphql from './icons/graphql.svelte';
  import jest from './icons/jest.svelte';
  import mysql from './icons/mysql.svelte';
  import postgresql from './icons/postgresql.svelte';
  import mongodb from './icons/mongodb.svelte';
  import docker from './icons/docker.svelte';
  import amazonwebservices from './icons/amazonwebservices.svelte';
  import github from './icons/github.svelte';
  import git from './icons/git.svelte';
  import babel from './icons/babel.svelte';
  import bash from './icons/bash.svelte';
  import bootstrap from './icons/bootstrap.svelte';
  import circleci from './icons/circleci.svelte';
  import django from './icons/django.svelte';
  import eslint from './icons/eslint.svelte';
  import express from './icons/express.svelte';
  import figma from './icons/figma.svelte';
  import jira from './icons/jira.svelte';
  import linux from './icons/linux.svelte';
  import npm from './icons/npm.svelte';
  import python from './icons/python.svelte';
  import redux from './icons/redux.svelte';
  import sass from './icons/sass.svelte';
  import ubuntu from './icons/ubuntu.svelte';
  import trello from './icons/trello.svelte';
  import webpack from './icons/webpack.svelte';
  import vite from './icons/vite.svelte';
  import parcel from './icons/parcel.svelte';
  import netlify from './icons/netlify.svelte';

  import { technologies } from '../technologies';
  import DevIcon from './DevIcon.svelte';
  import Section from './Section.svelte';
  import Project from './Project.svelte';
  export let active: boolean;
  export let projects;
  export let images;

  const icons = {
    go,
    react,
    svelte,
    netlify,
    angular,
    nodejs,
    javascript,
    typescript,
    html,
    css,
    tailwindcss,
    jest,
    mysql,
    graphql,
    postgresql,
    mongodb,
    docker,
    amazonwebservices,
    github,
    git,
    babel,
    bash,
    bootstrap,
    circleci,
    django,
    eslint,
    express,
    figma,
    jira,
    linux,
    npm,
    python,
    redux,
    sass,
    ubuntu,
    trello,
    webpack,
    vite,
    parcel,
  };
</script>

<Section {active} type="Prosjekter">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
    {#if images instanceof Array && projects instanceof Array}
      {#each projects as project, index}
        <Project
          {project}
          path={images[index].urls.small}
          icons={project.topics
            .filter((icon) => icon !== 'portfolio')
            .map((icon) => ({ component: icons[icon] }))}
        />
      {/each}
    {/if}
  </div>
  <div class="dev-icons flex justify-center flex-wrap gap-8 pb-20">
    {#each technologies as technology}
      <DevIcon component={icons[technology]} tooltip={technology} />
    {/each}
  </div>
</Section>
