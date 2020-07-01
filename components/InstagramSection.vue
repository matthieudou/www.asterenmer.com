<template>
  <div id="galerie">
    <div class="max-w-screen-md mx-auto px-container py-20">
      <h2 class="text-blue-royal font-heading tracking-heading uppercase text-4xl text-center">
        Galerie
      </h2>

      <div class="mt-12 grid grid-cols-3 gap-1 sm:gap-2 md:gap-4">
        <a
          v-for="({node}) in posts"
          :key="node.id"
          class="pb-full relative group"
          :href="`https://instagram.com/p/${node.shortcode}/`"
          target="_blank"
          rel="noopener">
          <v-lazy-image
            class="absolute inset-0 object-cover"
            :src="node.thumbnail_src"
            :alt="node.edge_media_to_caption.edges[0].node.text" />
          <div class="absolute inset-0 bg-blue-royal bg-opacity-0 group-hover:bg-opacity-50 transition-color duration-150 ease-in-out text-white flex items-center justify-center">
            <div class="opacity-0 transform translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 flex items-center transition duration-150 ease-in-out font-heading text-xl">
              <template v-if="node.is_video">
                <div>
                  <play-icon class="w-4 h-4 fill-current text-white" />
                </div>
                <div class="ml-4">
                  {{ node.video_view_count }}
                </div>
              </template>
              <template v-else>
                <heart-icon class="w-4 h-4 fill-current text-white" />
                <div class="ml-4">
                  {{ node.edge_media_preview_like.count }}
                </div>
              </template>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="p-8 flex justify-end items-center">
      <a
        href="https://vimeo.com/asterenmer"
        target="_blank"
        rel="noopener"
        class="text-blue-royal rounded-full hover:bg-blue-royal hover:bg-opacity-25 transition-color duration-150 ease-in-out w-12 h-12 flex items-center justify-center focus:bg-blue-royal focus:bg-opacity-25 focus:outline-none">
        <span class="sr-only">Vimeo</span>
        <vimeo-icon class="fill-current w-6 h-6" />
      </a>
      <a
        href="https://www.instagram.com/aster.en.mer/?hl=en"
        target="_blank"
        rel="noopener"
        class="ml-4 text-blue-royal rounded-full hover:bg-blue-royal hover:bg-opacity-25 transition-color duration-150 ease-in-out w-12 h-12 flex items-center justify-center focus:bg-blue-royal focus:bg-opacity-25 focus:outline-none">
        <span class="sr-only">Instagram</span>
        <instagram-icon class="stroke-current w-6 h-6" />
      </a>
    </div>
  </div>
</template>

<script>
  import VLazyImage from 'v-lazy-image'
  import VimeoIcon from '~/assets/img/svg/vimeo.svg'
  import InstagramIcon from '~/assets/img/svg/instagram.svg'

  export default {
    props: {
      posts: {
        type: Array,
        default: () => []
      }
    },

    components: {
      VimeoIcon,
      InstagramIcon,
      VLazyImage,
      HeartIcon: () => import('~/assets/img/svg/heart.svg'),
      PlayIcon: () => import('~/assets/img/svg/play.svg')
    }
  }
</script>
