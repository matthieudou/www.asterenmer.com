<template>
  <div class="max-w-screen-md mx-auto px-container py-20">
    <h2 class="text-3xl text-center">
      Gallerie
    </h2>

    <div class="mt-12 grid grid-cols-3 gap-1 sm:gap-2 md:gap-4">
      <div
        v-for="({node}) in posts"
        :key="node.id">
        <img
          class="w-full object-cover"
          :src="node.thumbnail_src">
      </div>
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
    }
  }
</script>
