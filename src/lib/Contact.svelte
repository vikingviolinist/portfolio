<script lang="ts">
  export let active: boolean;
</script>

<section class={active ? 'animate-scale' : 'hidden'}>
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
