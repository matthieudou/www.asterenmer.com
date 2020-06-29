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
    async fetch () {
      const params = {
        query_hash: 'e769aa130647d2354c40ea6a439bfc08',
        variables: {
          id: 8738828221,
          first: 9
        }
      }
      const res = await this.$axios.$get('https://www.instagram.com/graphql/query/', { params })
      console.log(res)
      const response = res.data.user.edge_owner_to_timeline_media
      this.posts.push(...response.edges)
    },

    data () {
      return {
        posts: []
      }
    }
  }
</script>
