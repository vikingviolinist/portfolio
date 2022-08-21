<script lang="ts">
  export let technology: string;
  export let colored: boolean;
</script>

<i
  class={`devicon-${technology}-plain ${
    colored ? 'colored' : ''
  } hover:scale-150 transition-all`}
/>
