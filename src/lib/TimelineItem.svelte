<script lang="ts">
  import type { Job } from '../interfaces/Job';

  export let job: Job;
</script>

<div class="relative pl-12 border-l-2 border-gray-5">
  <div
    class="absolute -left-[27px] -top-[5px] bg-secondary w-[50px] h-[50px] rounded-3xl flex items-center justify-center"
  >
    <i class="fas fa-briefcase" />
  </div>
  <p
    class="text-gray-2 bg-gray-5 py-1 px-2 rounded-2xl inline-block text-sm font-medium"
  >
    {job.from} - {job.to ?? 'i dag'}
  </p>
  <h5 class="py-4 text-xl font-semibold">
    {job.title}
    <span class="text-gray-2 font-medium text-xl">- {job.company}</span>
  </h5>
  <p class="text-gray-2 text-justify">
    {job.description}
  </p>
</div>
