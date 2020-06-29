<template>
  <div class="bg-blue-royal pt-20 text-white">
    <div class="max-w-screen-xl px-container mx-auto">
      <h2 class="text-3xl text-center">
        Contact
      </h2>

      <h2 class="text-3xl text-center">
        Crew members
      </h2>

      <div class="mt-8 flex flex-wrap items-center justify-center">
        <a
          v-for="member in members"
          :key="member.name"
          :href="member.href"
          target="_blank"
          rel="noopener"
          class="m-4 flex flex-col items-center transform hover:-translate-y-2 transition-transform ease-in-out duration-300">
          <v-lazy-image
            class="w-20 h-20 rounded-full object-contain border-2 border-white"
            v-bind="member.image" />
          <div class="mt-4 font-medium uppercase tracking-widest">
            {{ member.name }}
          </div>
        </a>
      </div>

      <div class="p-4 border-t border-white text-sm">
        copyright 2k20
      </div>
    </div>
  </div>
</template>

<script>
  import VLazyImage from 'v-lazy-image'

  export default {
    data () {
      return {
        members: [
          {
            href: 'https://www.instagram.com',
            name: 'Matthieu',
            image: {
              src: require('~/assets/img/members/matthieu1x.jpg'),
              srcset: `
                ${require('~/assets/img/members/matthieu1x.jpg')} 1x
              `,
              srcPlaceholder: require('~/assets/img/members/matthieu1x.jpg'),
              alt: 'Matthieu d’Oultremont profile pic'
            }
          },
          {
            href: 'https://www.instagram.com',
            name: 'Aster',
            image: {
              src: require('~/assets/img/members/aster1x.jpg'),
              srcset: `
                ${require('~/assets/img/members/aster1x.jpg')} 1x
              `,
              srcPlaceholder: require('~/assets/img/members/aster1x.jpg'),
              alt: 'Aster profile pic'
            }
          },
          {
            href: 'https://www.instagram.com',
            name: 'Ivmovies',
            image: {
              src: require('~/assets/img/members/ivmovies1x.jpg'),
              srcset: `
                ${require('~/assets/img/members/ivmovies1x.jpg')} 1x
              `,
              srcPlaceholder: require('~/assets/img/members/ivmovies1x.jpg'),
              alt: 'Ivmovies profile pic'
            }
          }
        ]
      }
    },
    components: {
      VLazyImage
    }
  }

</script>
