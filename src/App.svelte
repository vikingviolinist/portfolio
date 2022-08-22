<script>
  import DevIcon from './lib/DevIcon.svelte';
  import Clef from './lib/Clef.svelte';
  import ClefCircuitBoard from './lib/ClefCircuitBoard.svelte';

  import { technologies } from './technologies';
  import ThemeToggle from './lib/ThemeToggle.svelte';
  import NavBar from './lib/NavBar.svelte';
</script>

<header
  class="section sec1 header active duration-500 min-h-screen bg-secondary dark:bg-primary text-white overflow-hidden"
  id="home"
>
  <div class="header-content grid grid-cols-[800px,1fr] min-h-screen">
    <div class="left-header relative">
      <div
        class="left-header-left flex items-center justify-center h-full bg-primary dark:bg-secondary clip-path-left"
      >
        <div class="g-clef g-clef-left w-[40%] z-[4] text-center">
          <Clef toggle={false} />
        </div>
        <div
          class="lines lines-left flex flex-col gap-[6.5rem] absolute left-[20%] w-full"
        >
          {#each Array(5) as _, index (index)}
            <div
              class="h-3"
              style="background-image: url('./images/line-left.svg')"
            />
          {/each}
        </div>
      </div>
      <div
        class="left-header-right absolute top-0 flex justify-center items-center w-full h-full clip-path-right"
      >
        <div class="g-clef g-clef-right w-[40%] z-[3] text-center">
          <ClefCircuitBoard />
        </div>
        <div
          class="g-clef g-clef-right w-[40%] text-center g-clef-right-bg absolute z-[2]"
        >
          <Clef toggle={true} />
        </div>

        <div
          class="lines lines-right flex flex-col gap-[6.5rem] absolute w-full left-[40%]"
        >
          {#each Array(5) as _, index (index)}
            <div
              class="h-3"
              style="background-image: url('./images/line-right.svg'); background-size: contain;"
            />
          {/each}
        </div>
      </div>
    </div>
    <div class="right-header pr-36 flex text-justify items-center">
      <div>
        <div
          class="empty w-[200px] h-[400px] float-left clip-path-text shape-outside"
        />
        <div>
          <h1 class="name text-5xl font-bold">
            Hi, I'm <span class="text-primary dark:text-secondary">Lorem</span> Dolor
            sit amet consectetur
          </h1>
          <p class="my-10 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            praesentium at. Iste inventore id architecto incidunt, pariatur
            placeat odit, dolores quaerat earum minus fugiat adipisci dolorum
            consequuntur assumenda quis unde. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita, cumque alias eveniet quidem
            optio velit harum minima necessitatibus corrupti est! Illum quis
            eligendi nesciunt tenetur iure est sint, soluta incidunt?
          </p>
          <div class="btn-container inline-block">
            <a
              href="https://github.com/vikingviolinist"
              class="main-btn relative rounded-[30px] font-semibold border border-primary dark:border-secondary flex items-center overflow-hidden
              before:absolute before:w-full before:h-full before:translate-x-[100%]
              "
            >
              <span class="btn-text px-8 text-primary dark:text-secondary"
                >Download CV</span
              >
              <span
                class="btn-icon p-4 bg-primary dark:bg-secondary flex items-center justify-center rounded-[50%]"
                ><i class="fas fa-download" /></span
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
<main>
  <section class="section sec2 hidden" id="experience">
    <div class="main-title">
      <h2>
        My <span>experience</span><span class="bg-text">my experience</span>
      </h2>
    </div>
    <div class="about-container">
      <div class="left-about">
        <p>
          React, NextJS, Svelte, SvelteKit, Angular, NodeJS, Express, Express,
          JavaScript, TypeScript, HTML, CSS, Tailwind, GraphQL, Jest,
          PostgreSQL, MySQL, MongoDB, Go, Docker, AWS, Git, GitHub
        </p>
      </div>
    </div>

    <div class="timeline">
      <div class="timeline-item">
        <div class="tl-icon">
          <i class="fas fa-briefcase" />
        </div>
        <p class="tl-duration">Sep 2022 - present</p>
        <h5>Consultant <span>- Noria</span></h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div class="timeline-item">
        <div class="tl-icon">
          <i class="fas fa-briefcase" />
        </div>
        <p class="tl-duration">Jul 2020 - Aug 2022</p>
        <h5>Full Stack Developer <span>- Kindly</span></h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div class="timeline-item">
        <div class="tl-icon">
          <i class="fas fa-briefcase" />
        </div>
        <p class="tl-duration">Feb 2020 - Jun 2020</p>
        <h5>Backend Developer <span>- Recheckit</span></h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div class="timeline-item">
        <div class="tl-icon">
          <i class="fas fa-briefcase" />
        </div>
        <p class="tl-duration">May 2018 - Jan 2020</p>
        <h5>EMEA Roadside Support Specialist <span>- Tesla</span></h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div class="timeline-item">
        <div class="tl-icon">
          <i class="fas fa-briefcase" />
        </div>
        <p class="tl-duration">Oct 2016 - Jul 2017</p>
        <h5>Customer Service Representative <span>- bwin</span></h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div class="timeline-item">
        <div class="tl-icon">
          <i class="fas fa-briefcase" />
        </div>
        <p class="tl-duration">Feb 2010 - Oct 2013</p>
        <h5>
          Violin teacher
          <span>- International School of Music and Fine Arts Prague</span>
        </h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>

    <div class="dev-icons flex justify-center flex-wrap gap-8 pb-20">
      {#each technologies as technology}
        <DevIcon {technology} colored={technology !== 'github'} />
      {/each}
    </div>
  </section>

  <section class="section sec3 hidden" id="education">
    <div class="main-title">
      <h2>
        My <span>education</span><span class="bg-text">my education</span>
      </h2>
    </div>
    <div class="about-container">
      <div class="left-about">
        <p>
          React, NextJS, Svelte, SvelteKit, Angular, NodeJS, Express, Express,
          JavaScript, TypeScript, HTML, CSS, Tailwind, GraphQL, Jest,
          PostgreSQL, MySQL, MongoDB, Go, Docker, AWS, Git, GitHub
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

  <section class="section sec4 hidden" id="portfolio">
    <div class="main-title">
      <h2>
        My <span>Portfolio</span><span class="bg-text">my portfolio</span>
      </h2>
    </div>
    <p class="port-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto natus
      eveniet facilis, deleniti ratione ipsum ipsa blanditiis quos vero dicta
      animi nobis nemo aspernatur voluptatum voluptates consequatur adipisci
      molestiae eaque.lorem. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Aspernatur debitis quae aperiam hic cum necessitatibus optio aliquam
      nam, rem commodi praesentium itaque soluta unde, id cupiditate eveniet
      quo, culpa eligendi!
    </p>
    <div class="portfolios">
      <div class="portfolio-item">
        <div class="image">
          <img src="./images/port1.jpeg" alt="Project 1" />
        </div>
        <div class="hover-items">
          <h3>Project Source</h3>
          <div class="icons">
            <a
              class="icon"
              href="https://github.com/vikingviolinist"
              target="_blank"
            >
              <i class="fab fa-github" />
            </a>
            <a
              class="icon"
              href="https://github.com/vikingviolinist"
              target="_blank"
            >
              <i class="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
      <div class="portfolio-item">
        <div class="image">
          <img src="./images/port2.jpeg" alt="Project 1" />
        </div>
        <div class="hover-items">
          <h3>Project Source</h3>
          <div class="icons">
            <a
              class="icon"
              href="https://github.com/vikingviolinist"
              target="_blank"
            >
              <i class="fab fa-github" />
            </a>
            <a
              class="icon"
              href="https://github.com/vikingviolinist"
              target="_blank"
            >
              <i class="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
      <div class="portfolio-item">
        <div class="image">
          <img src="./images/port3.jpeg" alt="Project 1" />
        </div>
        <div class="hover-items">
          <h3>Project Source</h3>
          <div class="icons">
            <a
              class="icon"
              href="https://github.com/vikingviolinist"
              target="_blank"
            >
              <i class="fab fa-github" />
            </a>
            <a
              class="icon"
              href="https://github.com/vikingviolinist"
              target="_blank"
            >
              <i class="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
      <div class="portfolio-item">
        <div class="image">
          <img src="./images/port5.jpeg" alt="Project 1" />
        </div>
        <div class="hover-items">
          <h3>Project Source</h3>
          <div class="icons">
            <a
              class="icon"
              href="https://github.com/vikingviolinist"
              target="_blank"
            >
              <i class="fab fa-github" />
            </a>
            <a
              class="icon"
              href="https://github.com/vikingviolinist"
              target="_blank"
            >
              <i class="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
      <div class="portfolio-item">
        <div class="image">
          <img src="./images/port6.jpeg" alt="Project 1" />
        </div>
        <div class="hover-items">
          <h3>Project Source</h3>
          <div class="icons">
            <a
              class="icon"
              href="https://github.com/vikingviolinist"
              target="_blank"
            >
              <i class="fab fa-github" />
            </a>
            <a
              class="icon"
              href="https://github.com/vikingviolinist"
              target="_blank"
            >
              <i class="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
      <div class="portfolio-item">
        <div class="image">
          <img src="./images/port7.jpeg" alt="Project 1" />
        </div>
        <div class="hover-items">
          <h3>Project Source</h3>
          <div class="icons">
            <a
              class="icon"
              href="https://github.com/vikingviolinist"
              target="_blank"
            >
              <i class="fab fa-github" />
            </a>
            <a
              class="icon"
              href="https://github.com/vikingviolinist"
              target="_blank"
            >
              <i class="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section sec5 hidden contact" id="contact">
    <div class="contact-container">
      <div class="main-title">
        <h2>
          Contact <span>Me</span> <span class="bg-text">Contact me</span>
        </h2>
      </div>
      <div class="contact-content-con">
        <div class="left-contact">
          <div class="contact-info">
            <div class="contact-item">
              <div class="icon">
                <i class="fas fa-map-marker-alt" />
                <span>Location</span>
              </div>
              <p>Oslo, Norway</p>
            </div>
            <div class="contact-item">
              <div class="icon">
                <i class="fas fa-envelope" />
                <span>Email</span>
              </div>
              <p>misopetrik@gmail.com</p>
            </div>
            <div class="contact-item">
              <div class="icon">
                <i class="fas fa-globe" />
                <span>Languages</span>
              </div>
              <p>
                <span>English, Norwegian, German, Slovak</span>
              </p>
            </div>
          </div>
          <div class="contact-icons">
            <div class="contact-icon">
              <a href="https://github.com/vikingviolinist" target="_blank">
                <i class="fab fa-facebook" />
              </a><a href="https://github.com/vikingviolinist" target="_blank">
                <i class="fab fa-twitter" />
              </a>
              <a href="https://github.com/vikingviolinist" target="_blank">
                <i class="fab fa-github" />
              </a>
              <a href="https://github.com/vikingviolinist" target="_blank">
                <i class="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
        <div class="right-contact">
          <form action="" class="contact-form">
            <div class="input-control i-c-2">
              <input type="text" required placeholder="Your name" />
              <input type="text" required placeholder="Your email" />
            </div>
            <div class="input-control">
              <input type="text" required placeholder="Enter subject" />
            </div>
            <div class="input-control">
              <textarea
                name=""
                id=""
                cols="15"
                rows="10"
                placeholder="Message here..."
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>

<NavBar />

<ThemeToggle />

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
  /* 
  @layer components {
    .section {
      @apply;
    }
  } */

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
