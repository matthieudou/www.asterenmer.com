<template>
  <div class="max-w-screen-md mx-auto px-container py-20">
    <h2 class="font-heading tracking-heading uppercase text-4xl text-center">
      Gallerie
    </h2>

    <div class="mt-12 grid grid-cols-3 gap-1 sm:gap-2 md:gap-4">
      <a
        v-for="({node}) in posts"
        :key="node.id"
        class="pb-full relative group"
        :href="`https://instagram.com/p/${node.shortcode}/`"
        target="_blank"
        rel="noopener">
        <img
          class="absolute inset-0 object-cover"
          :src="node.thumbnail_src">
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
</template>

<script>
  export default {
    props: {
      posts: {
        type: Array,
        default: () => []
      }
    },

    components: {
      HeartIcon: () => import('~/assets/img/svg/heart.svg'),
      PlayIcon: () => import('~/assets/img/svg/play.svg')
    }
  }
</script>
