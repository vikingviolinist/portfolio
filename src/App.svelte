<script lang="ts">
  import { sections } from './sections';

  import ThemeToggle from './lib/ThemeToggle.svelte';
  import NavBar from './lib/NavBar.svelte';
  import Header from './lib/Header.svelte';
  import Work from './lib/Work.svelte';
  import Education from './lib/Education.svelte';
  import Projects from './lib/Projects.svelte';
  import Contact from './lib/Contact.svelte';

  let selectedIcon: string = 'home';

  const toggleActive = (icon) => (selectedIcon = icon);
</script>

<ThemeToggle />
<NavBar {selectedIcon} {toggleActive} />
<Header active={selectedIcon === 'home'} />
<Work active={selectedIcon === 'briefcase'} />
<Education active={selectedIcon === 'user-graduate'} />
<Projects active={selectedIcon === 'laptop'} />
<Contact active={selectedIcon === 'envelope'} />

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer base {
    :root {
      --color-primary: #191d2b;
      --color-secondary: #f6af04;
      --color-white: #ffffff;
      --color-black: #000;
      --color-grey0: #f8f8f8;
      --color-grey-1: #dbe1e8;
      --color-grey-2: #b2becd;
      --color-grey-3: #6c7983;
      --color-grey-4: #454e56;
      --color-grey-5: #2a2e35;
      --color-grey-6: #12181b;
      --br-sm-2: 14px;
      --box-shadow-1: 0 3px 15px rgba(0, 0, 0, 0.3);
    }
    body {
      transition: all 1s ease-in-out;
    }
  }

  @layer utilities {
    .clip-path-left {
      clip-path: polygon(0 0, 40% 0, 66% 100%, 0% 120%);
    }
    .clip-path-right {
      clip-path: polygon(0 0, 40% 0, 66% 100%, 120% 0%);
    }
    .clip-path-text {
      clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
    }
    .shape-outside {
      shape-outside: polygon(0% 0%, 100% 0%, 0% 100%);
    }
  }
</style>
