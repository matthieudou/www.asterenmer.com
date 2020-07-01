<template>
  <div
    id="contact"
    class="bg-blue-royal pt-20 text-white">
    <div class="max-w-screen-xl px-container mx-auto">
      <h2 class="font-heading tracking-heading uppercase text-4xl text-center">
        Contact
      </h2>

      <div class="mt-6 max-w-sm mx-auto">
        <!-- <p class="text-lg leading-5 tracking-wide">
          Si tu as la moindre question, n'hésite pas à nous contacter via un de ces canneaux.
        </p> -->
        <div class="mt-6 md:flex md:justify-center">
          <div>
            <a
              class="p-2 flex items-center text-lg hover:bg-white hover:bg-opacity-25 rounded transition ease-in-out duration-150 focus:outline-none focus:bg-white focus:bg-opacity-25"
              href="mailto:contact@asterenmer.com">
              <mail-icon class="w-6 h-6 stroke-current mr-4" />
              contact@asterenmer.com
            </a>
            <a
              class="p-2 flex items-center text-lg hover:bg-white hover:bg-opacity-25 rounded transition ease-in-out duration-150 focus:outline-none focus:bg-white focus:bg-opacity-25"
              href="https://www.instagram.com/aster.en.mer/?hl=en">
              <instagram-icon class="w-6 h-6 stroke-current mr-4" />
              Instagram
            </a>
            <a
              class="p-2 flex items-center text-lg hover:bg-white hover:bg-opacity-25 rounded transition ease-in-out duration-150 focus:outline-none focus:bg-white focus:bg-opacity-25"
              href="https://vimeo.com/asterenmer">
              <vimeo-icon class="w-6 h-6 fill-current mr-4" />
              Vimeo
            </a>
          </div>
        </div>
      </div>

      <h2 class="mt-20 font-heading tracking-heading uppercase text-xl text-center">
        Crew members
      </h2>

      <div class="mt-4 mb-8 mx-auto flex items-center justify-center flex-wrap">
        <a
          v-for="member in members"
          :key="member.name"
          :href="member.href"
          target="_blank"
          rel="noopener"
          class="w-32 flex-shrink-0 flex flex-col items-center p-4 transform hover:-translate-y-2 transition-transform ease-in-out duration-300 focus:outline-none focus:bg-white focus:bg-opacity-25 rounded">
          <v-lazy-image
            class="w-20 h-20 rounded-full object-cover border-2 border-white"
            v-bind="member.image" />
          <div class="mt-4 text-sm font-medium uppercase tracking-widest font-heading whitespace-no-wrap">
            {{ member.name }}
          </div>
        </a>
      </div>

      <div class="p-4 border-t border-white text-sm flex justify-between items-center">
        Aster en mer 2020
        <div class="flex">
          <a
            href="https://vimeo.com/asterenmer"
            target="_blank"
            rel="noopener"
            class="text-white rounded-full hover:bg-white hover:bg-opacity-25 transition-color duration-150 ease-in-out w-10 h-10 flex items-center justify-center focus:outline-none focus:bg-white focus:bg-opacity-25">
            <span class="sr-only">Vimeo</span>
            <vimeo-icon class="fill-current w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/aster.en.mer/?hl=en"
            target="_blank"
            rel="noopener"
            class="ml-2 text-white rounded-full hover:bg-white hover:bg-opacity-25 transition-color duration-150 ease-in-out w-10 h-10 flex items-center justify-center focus:outline-none focus:bg-white focus:bg-opacity-25">
            <span class="sr-only">Instagram</span>
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
  import MailIcon from '~/assets/img/svg/mail.svg'

  export default {
    data () {
      return {
        members: [
          {
            href: 'https://www.instagram.com/maunoirverhaegen/?hl=fr',
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
      MailIcon,
      InstagramIcon
    }
  }

</script>
