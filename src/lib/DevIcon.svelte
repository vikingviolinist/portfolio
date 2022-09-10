<script lang="ts">
  import go from './icons/Go.svelte';
  import react from './icons/React.svelte';
  import svelte from './icons/Svelte.svelte';
  import angularjs from './icons/Angular.svelte';
  import nodejs from './icons/Nodejs.svelte';
  import javascript from './icons/Javascript.svelte';
  import typescript from './icons/Typescript.svelte';
  import html5 from './icons/Html.svelte';
  import css3 from './icons/Css.svelte';
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

  export let technology: string;
  const icons = {
    go,
    react,
    svelte,
    // sveltekit,
    // netlify,
    angularjs,
    nodejs,
    javascript,
    typescript,
    html5,
    css3,
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
    // vite
  };

  let component = icons[technology];
</script>

<div
  class="w-12 grayscale-[30%] hover:scale-150 hover:grayscale-0 transition-all duration-200 ease-in-out text-6xl"
>
  <svelte:component this={component} />
</div>
