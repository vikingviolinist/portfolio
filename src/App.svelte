<script lang="ts">
  import './styles.css';

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
