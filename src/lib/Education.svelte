<script lang="ts">
  export let active: boolean;
</script>

<section class={active ? 'animate-scale' : 'hidden'} id="education">
  <div class="main-title">
    <h2>
      Min <span>Utdanning</span><span class="bg-text">min utdanning</span>
    </h2>
  </div>
  <div class="about-container">
    <div class="left-about">
      <p>
        React, NextJS, Svelte, SvelteKit, Angular, NodeJS, Express, Express,
        JavaScript, TypeScript, HTML, CSS, Tailwind, GraphQL, Jest, PostgreSQL,
        MySQL, MongoDB, Go, Docker, AWS, Git, GitHub
      </p>
    </div>
  </div>

  <div class="timeline">
    <div class="timeline-item">
      <div class="tl-icons">></div>
      <p class="tl-duration">Sep 2022 - present</p>
      <h5>Consultant <span>- Noria</span></h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="timeline-item">
      <div class="tl-icon"><i class="fas fa-briefcase" /></div>
      <p class="tl-duration">Jul 2020 - Aug 2022</p>
      <h5>Full Stack Developer <span>- Kindly</span></h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="timeline-item">
      <div class="tl-icon"><i class="fas fa-briefcase" /></div>
      <p class="tl-duration">Feb 2020 - Jun 2020</p>
      <h5>Backend Developer <span>- Recheckit</span></h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="timeline-item">
      <div class="tl-icon"><i class="fas fa-briefcase" /></div>
      <p class="tl-duration">May 2018 - Jan 2020</p>
      <h5>EMEA Roadside Support Specialist <span>- Tesla</span></h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="timeline-item">
      <div class="tl-icon"><i class="fas fa-briefcase" /></div>
      <p class="tl-duration">Oct 2016 - Jul 2017</p>
      <h5>Customer Service Representative <span>- bwin</span></h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="timeline-item">
      <div class="tl-icon"><i class="fas fa-briefcase" /></div>
      <p class="tl-duration">Feb 2010 - Oct 2013</p>
      <h5>
        Violin teacher
        <span>- International School of Music and Fine Arts Prague</span>
      </h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
</section>
