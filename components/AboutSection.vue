<template>
  <div
    id="a-propos"
    class="bg-cover bg-position"
    :style="{backgroundImage: `url(${require('~/assets/img/background.jpg')})`}">
    <div class="bg-blue-royal bg-opacity-50">
      <div class="max-w-screen-xl mx-auto px-container pt-20 pb-56 ">
        <h2 class="text-center text-white font-heading tracking-heading uppercase text-4xl md:text-5xl">
          À propos
        </h2>
        <div class="max-w-2xl mx-auto text-white text-lg text-justify leading-7 text-shadow">
          <p class="mt-20">
            Aster en mer est un projet de passion mêlant la voile, le partage, les images et la vie.
          </p>

          <p class="mt-6">
            À travers toutes les épreuves que ses équipiers ont pu traverser pour entretenir ce voilier, Aster, robuste Moody de 12m, s’offre maintenant de beaux et longs étés à l’eau collectionnant les milles nautiques entre la Bretagne et la Vendée.
          </p>

          <p class="mt-6">
            Nous sommes heureux de naviguer et de partager les aventures d’Aster sur ce site ou sur Instagram. Ce projet de rencontre accueille, chaque année, toujours plus de passionnés ou curieux à bord pour un partage d’un soir, d’une semaine ou d’une vie.
          </p>

          <p class="mt-6">
            À bientôt sur l’eau!
          </p>
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
    components: {
      VimeoIcon,
      InstagramIcon
    }
  }
</script>

<style scoped>
  .text-shadow {
    text-shadow: 2px 3px 5px rgba(19, 42, 81, 0.2);
  }

  .bg-position {
    background-position: -100px bottom;
  }

  @screen sm {
    .bg-position {
      @apply bg-left-bottom;
    }
  }
</style>
