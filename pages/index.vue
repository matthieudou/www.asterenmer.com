<template>
  <div>
    <header>
      <base-header />
    </header>
    <main>
      <about-section />
      <instagram-section :posts="posts" />
      <contact-section />
    </main>
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

<style>
  .px-container {
    @apply px-6;
  }

@screen lg {
  .px-container {
    @apply px-12;
  }
}

@screen md {
  .px-container {
    @apply px-8;
  }
}
</style>
