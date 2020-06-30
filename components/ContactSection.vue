<template>
  <div class="bg-blue-royal pt-20 text-white">
    <div class="max-w-screen-xl px-container mx-auto">
      <h2 class="font-heading tracking-heading uppercase text-4xl text-center">
        Contact
      </h2>

      <h2 class="font-heading tracking-heading uppercase text-4xl text-center">
        Crew members
      </h2>

      <div class="my-8 flex flex-wrap items-center justify-center">
        <a
          v-for="member in members"
          :key="member.name"
          :href="member.href"
          target="_blank"
          rel="noopener"
          class="m-4 flex flex-col items-center transform hover:-translate-y-2 transition-transform ease-in-out duration-300">
          <v-lazy-image
            class="w-20 h-20 rounded-full object-cover border-2 border-white"
            v-bind="member.image" />
          <div class="mt-4 text-sm font-medium uppercase tracking-widest font-heading">
            {{ member.name }}
          </div>
        </a>
      </div>

      <div class="p-4 border-t border-white text-sm flex justify-between items-center">
        copyright 2k20
        <div class="flex">
          <a
            href="https://vimeo.com/asterenmer"
            target="_blank"
            rel="noopener"
            class="text-white rounded-full hover:bg-white hover:bg-opacity-25 transition-color duration-150 ease-in-out w-10 h-10 flex items-center justify-center">
            <vimeo-icon class="fill-current w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/aster.en.mer/?hl=en"
            target="_blank"
            rel="noopener"
            class="ml-2 text-white rounded-full hover:bg-white hover:bg-opacity-25 transition-color duration-150 ease-in-out w-10 h-10 flex items-center justify-center">
            <instagram-icon class="stroke-current w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VLazyImage from 'v-lazy-image'
  import InstagramIcon from '~/assets/img/svg/instagram.svg'
  import VimeoIcon from '~/assets/img/svg/vimeo.svg'

  export default {
    data () {
      return {
        members: [
          {
            href: 'https://www.instagram.com/maunoirverh/?hl=fr',
            name: 'Maunoir',
            image: {
              src: require('~/assets/img/members/maunoir.jpg'),
              alt: 'Maunoir profile pic'
            }
          },
          {
            href: 'https://www.instagram.com/paullavoine/?hl=fr',
            name: 'Paul',
            image: {
              src: require('~/assets/img/members/paul.jpg'),
              alt: 'Paul profile pic'
            }
          },
          {
            href: 'https://www.instagram.com/ivmovies/?hl=fr',
            name: 'Imbaud',
            image: {
              src: require('~/assets/img/members/imbaud.jpg'),
              alt: 'Imbaud profile pic'
            }
          },
          {
            href: 'https://www.instagram.com/justinecroonenberghs/?hl=fr',
            name: 'Justine',
            image: {
              src: require('~/assets/img/members/justine.jpg'),
              alt: 'Justine profile pic'
            }
          },
          {
            href: 'https://www.instagram.com/neverfall_again/?hl=fr',
            name: 'Antoine',
            image: {
              src: require('~/assets/img/members/antoine.jpg'),
              alt: 'Antoine profile pic'
            }
          },
          {
            href: 'https://www.instagram.com/laprodfilms/?hl=fr',
            name: 'Guillaume',
            image: {
              src: require('~/assets/img/members/guillaume.jpg'),
              alt: 'Guillaume profile pic'
            }
          },
          {
            href: 'https://www.wikipedia.org/',
            name: 'Jean-Baptiste',
            image: {
              src: require('~/assets/img/members/jean-baptiste.jpg'),
              alt: 'Jean-Baptiste profile pic'
            }
          },
          {
            href: 'https://www.instagram.com/louis_eyb/?hl=fr',
            name: 'Louis',
            image: {
              src: require('~/assets/img/members/louis.jpg'),
              alt: 'Louis profile pic'
            }
          }
        ]
      }
    },

    components: {
      VLazyImage,
      VimeoIcon,
      InstagramIcon
    }
  }

</script>
