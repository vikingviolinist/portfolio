<script lang="ts">
  export let icon: string;
</script>

<button
  class="control active-btn p-4 cursor-pointer bg-gray-4 w-14 h-14 rounded-full
  shadow-[0_3px_15px_rgba(0,0,0,0.3);]"
  data-id="home"
>
  <i class={`fas fa-${icon} text-gray-2 text-xl`} />
</button>
