<script lang="ts">
  import { createApi } from 'unsplash-js';
  import './styles.css';

  import ThemeToggle from './lib/ThemeToggle.svelte';
  import NavBar from './lib/NavBar.svelte';
  import Header from './lib/Header.svelte';
  import Work from './lib/Work.svelte';
  import Education from './lib/Education.svelte';
  import Technologies from './lib/Technologies.svelte';
  import Projects from './lib/Projects.svelte';
  import Contact from './lib/Contact.svelte';

  let selectedIcon: string = 'home';

  let projects;
  let images;

  const toggleActive = (icon) => (selectedIcon = icon);

  const loadProjects = () => {
    if (images) return;

    const accessKey = '2jacHDYybwpIjozi70jBxq_FdkhUhap37l99qairwI0';
    const unsplash = createApi({ accessKey });

    fetch('https://api.github.com/users/vikingviolinist/repos?per_page=60')
      .then((res) => res.json())
      .then((repo) => {
        projects = repo.filter((project) =>
          project.topics.includes('portfolio')
        );
        unsplash.photos
          .getRandom({
            query: 'programming',
            count: projects.length,
          })
          .then(({ response }) => {
            images = response;
          });
      });
  };
</script>

<ThemeToggle />
<NavBar {selectedIcon} {toggleActive} {loadProjects} />
<Header active={selectedIcon === 'home'} />
<Work active={selectedIcon === 'briefcase'} />
<Education active={selectedIcon === 'user-graduate'} />
<Technologies active={selectedIcon === 'wrench'} />
<Projects active={selectedIcon === 'laptop'} {projects} {images} />
<Contact active={selectedIcon === 'envelope'} />
