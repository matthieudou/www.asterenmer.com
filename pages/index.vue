<template>
  <div>
    <header>
      <base-header />
    </header>
    <main>
      <about-section />
      <client-only>
        <instagram-section />
      </client-only>
      <contact-section />
    </main>
  </div>
</template>

<script>
  export default {}
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
