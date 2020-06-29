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
          class="w-20 h-20">
      </div>

      <div class="flex-1 flex items-center justify-center">
        <img
          src="~/assets/img/text.png"
          class="h-40 max-w-full object-contain">
      </div>
      <div class="p-8 flex justify-end items-center">
        <a
          href="https://www.instagram.com/aster.en.mer/?hl=en"
          target="_blank"
          rel="noopener"
          class="text-white rounded-full hover:bg-blue-royal hover:bg-opacity-50 transition-color duration-150 ease-in-out w-12 h-12 flex items-center justify-center">
          <facebook-icon />
        </a>
        <a
          href="https://www.instagram.com/aster.en.mer/?hl=en"
          target="_blank"
          rel="noopener"
          class="text-white rounded-full hover:bg-blue-royal hover:bg-opacity-50 transition-color duration-150 ease-in-out w-12 h-12 flex items-center justify-center">
          <instagram-icon />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import FacebookIcon from '~/assets/img/svg/facebook.svg'
  import InstagramIcon from '~/assets/img/svg/instagram.svg'

  export default {
    components: {
      FacebookIcon,
      InstagramIcon
    }
  }
</script>
