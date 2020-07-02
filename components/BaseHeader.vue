<template>
  <div class="relative min-h-screen ">
    <video
      class="absolute w-full h-full bg-video object-cover"
      autoplay
      loop
      muted
      :poster="require('~/assets/img/background.jpg')">
      <source
        v-if="$mq !== 'sm'"
        src="~/assets/videos/showreel.mp4"
        type="video/mp4">
    </video>

    <div class="absolute inset-0 bg-blue-royal bg-opacity-50 flex flex-col">
      <div class="p-8">
        <img
          src="~/assets/img/logo.png"
          class="w-20 h-20"
          alt="Aster en mer logo">
      </div>

      <div class="flex-1 flex items-center justify-center">
        <div class="px-container">
          <h1 class="text-center font-heading text-white text-heading uppercase">
            <div class="flex items-center justify-center md:justify-between leading-none">
              <span
                v-for="(letter, i) in 'Aster'"
                :key="i"
                class="header-animation transition-all duration-150 ease-in-out transform mx-2 md:mx-0"
                :class="loaded ? '' : 'opacity-0 translate-y-5'"
                :style="{transitionDelay: i*(i+30) + 300 + 'ms'}">
                {{ letter }}
              </span>
            </div>
          </h1>
          <h2 class="text-center font-heading text-white text-2xl md:text-3xl tracking-heading uppercase">
            Bienvenue à bord
          </h2>
          <div class="mt-16 max-w-md mx-auto flex justify-between md:text-xl">
            <a
              v-scroll-to="'#a-propos'"
              href="/#a-propos"
              class="text-white px-4 py-2 border border-white rounded-full hover:bg-white hover:text-blue-royal transition duration-150 ease-in-out focus:bg-white focus:text-blue-royal focus:outline-none"
              replace>
              À propos
            </a>
            <a
              v-scroll-to="'#galerie'"
              href="/#galerie"
              class="text-white px-4 py-2 border border-white rounded-full hover:bg-white hover:text-blue-royal transition duration-150 ease-in-out focus:bg-white focus:text-blue-royal focus:outline-none"
              replace>
              Galerie
            </a>
            <a
              v-scroll-to="'#contact'"
              href="/#contact"
              class="text-white px-4 py-2 border border-white rounded-full hover:bg-white hover:text-blue-royal transition duration-150 ease-in-out focus:bg-white focus:text-blue-royal focus:outline-none"
              replace>
              contact
            </a>
          </div>
        </div>
      </div>
      <div class="p-8 flex justify-end items-center">
        <a
          href="https://vimeo.com/asterenmer"
          target="_blank"
          rel="noopener"
          class="text-white rounded-full hover:bg-blue-royal hover:bg-opacity-50 transition-color duration-150 ease-in-out w-12 h-12 flex items-center justify-center focus:bg-blue-royal focus:bg-opacity-50 focus:outline-none">
          <span class="sr-only">Vimeo</span>
          <vimeo-icon class="fill-current w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/aster.en.mer/?hl=en"
          target="_blank"
          rel="noopener"
          class="ml-4 text-white rounded-full hover:bg-blue-royal hover:bg-opacity-50 transition-color duration-150 ease-in-out w-12 h-12 flex items-center justify-center focus:bg-blue-royal focus:bg-opacity-50 focus:outline-none">
          <span class="sr-only">Instagram</span>
          <instagram-icon class="stroke-current w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import VimeoIcon from '~/assets/img/svg/vimeo.svg'
  import InstagramIcon from '~/assets/img/svg/instagram.svg'

  export default {
    data () {
      return {
        loaded: false
      }
    },

    methods: {
      easeInOutFunction (i) {
        return (1 / i) * 1000 * i
      }
    },

    mounted () {
      this.loaded = true
    },

    components: {
      VimeoIcon,
      InstagramIcon
    }
  }
</script>

<style scoped>
  .text-heading {
    font-size: 4rem;
  }

  @screen md {
    .text-heading {
      font-size: 7rem;
    }
  }
</style>
