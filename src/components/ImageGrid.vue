<template>
  <div class="
    images
    grid
    grid-cols-1
    gap-1
    max-h-2/3
    overflow-y-auto
    md:grid-cols-2
    md:max-h-3/4
    lg:gap-2
    lg:grid-cols-3
  ">
    <!-- set default html lazy loading, for more control use
    intersection observer or a lazy loading library -->
    <img
      v-for="image in images"
      :width="image.Width"
      :height="image.Height"
      :key="image.id"
      :src="image.Url"
      loading="lazy"
      alt="property image"
    />
  </div>
</template>

<script>
export default {
  props: ['images'],
};
</script>

<style>
</style>
