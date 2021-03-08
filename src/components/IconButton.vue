<template>
  <button @click="$emit('click')">
    <i class="fa fa-lg" :class="`fa-${icon}`"></i>
  </button>
</template>

<script>
export default {
  props: ['icon'],
};
</script>

<style scoped>
/* provide some kind of indication to the user that these icons are clickable */
.fa:hover {
  color: rgb(0, 81, 255);
  cursor: pointer;
}
</style>
