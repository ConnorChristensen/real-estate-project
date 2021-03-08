<template>
  <div v-bind:class="{ dark: darkMode }">
    <div class="
      bg-white
      dark:bg-gray-800
      min-h-screen
      transition
      duration-500
      ease-in-out
    ">
      <!-- This would be abstracted into a component if it gets more complicated -->
      <nav class="bg-yellow-500 shadow-md header sticky top-0">
        <i class="fa fa-home fa-lg"></i>
        <icon-button icon="cog" @click="settingsOpen = true"/>
      </nav>
      <!-- Stick with a wide screen view on extra wide screens -->
      <div class="max-w-screen-2xl m-auto">
        <sidebar
          v-bind:mode.sync="mode"
          v-bind:settings-open.sync="settingsOpen"
        />
        <image-grid :images="images" />
        <info :listing="listing"/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import IconButton from './components/IconButton.vue';
import ImageGrid from './components/ImageGrid.vue';
import Info from './components/Info.vue';
import { ImageTypes, MediaContentTypes } from './utils/enums';

export default {
  data() {
    return {
      // fallback on the light color theme if the env file does not specify a default.
      mode: process.env.VUE_APP_DEFAULT_COLOR_SCHEME || 'light',
      settingsOpen: false,
      images: [],
      listing: {},
    };
  },
  mounted() {
    // Fetch is relitively new and has support with about 95% of browsers
    // Something like axios or including a polyfill would be better for wide
    // browser support.
    fetch(process.env.VUE_APP_API_URL).then((response) => {
      response.json().then((data) => {
        this.listing = data;

        // Listings contains image data, but this allows us to do some processing
        // without modifying the listing data. It is generally good practice to
        // have API information that you are not going to modify be read only.
        this.images = this.selectImages(data.Media);
      });
    });
  },
  methods: {
    selectImage(mediaItem) {
      const { MediaItems } = mediaItem;

      // Modify this function however you want to select which images you want
      // out of the supplied media item list. You could return different image
      // sizes based on the size of the screen.
      return MediaItems.find((item) => item.Category === ImageTypes.xlarge);
    },
    filterNonImages(media) {
      // exit early so we do not try to run a filter on null or undefined.
      if (!media) { return media; }

      // filter out any non image types. Use an enum to save the image types, incase
      // the id of an image changes any time in the future.
      return media.filter((element) => element.ContentType === MediaContentTypes.image);
    },
    selectImages(media) {
      return this.filterNonImages(media).map((images) => this.selectImage(images));
    },
  },
  computed: {
    darkMode() {
      // this could also compare against an enum if needed
      return this.mode === 'dark';
    },
  },
  components: {
    Sidebar,
    IconButton,
    ImageGrid,
    Info,
  },
};
</script>

<style>
/* I mostly relied on tailwind for styling, but a little bit of CSS goes
 * a long way in setting default values that apply across the whole document.
 * This is not something I would do on a large project, but for a single page
 * application, being able to use the cascading nature of CSS to set default
 * text color for light and dark modes is very helpful.
 */
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  height: 3rem;
  align-items: center;
  padding: 0 10px;
  z-index: 1;
}

/* A nice default text color for light modes */
p {
  color: #0F172A;
}

/* A nice default text color for dark modes */
.dark * {
  color: #D4D4D8;
}

/* Overwrite the previous dark color rule for font awesome iconss so they always
 * stay bright white. Slightly gray text is pleasing on the eyes, but slightly
 * gray icons look dirty.
 */
.dark .fa {
  color: white;
}
</style>
