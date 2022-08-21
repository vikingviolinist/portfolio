<script>
  const toggleTheme = () => {
    window.document.body.classList.toggle('dark');
  };
</script>

<button
  on:click={toggleTheme}
  class="active:-translate-y-2 ease-in-out duration-100 theme-btn top-[5%] right-[3%] w-12 h-12 rounded-full border-none fixed bg-gray-4 cursor-pointer shadow-lg"
>
  <i
    class="theme-icon fas text-gray-2 text-2xl pointer-events-none fa-moon dark:fa-sun"
  />
</button>
