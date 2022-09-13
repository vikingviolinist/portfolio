<script lang="ts">
  export let icon: string;
  export let link: string;
</script>

<a
  class="bg-gray-5 text-white rounded-3xl w-[50px] h-[50px] flex
                items-center justify-center mx-2 my-0 cursor-pointer 
                transition-all duration-500 ease-in-out hover:bg-secondary"
  href={link}
  target="_blank"
>
  <i class="{icon}  text-white flex items-center justify-center text-xl" />
</a>
