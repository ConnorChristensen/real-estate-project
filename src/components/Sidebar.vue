<template>
  <aside
    class="
      transform
      dark:bg-gray-800
      top-0
      right-0
      w-64
      bg-white
      fixed
      h-full
      overflow-auto
      ease-in-out
      transition-all
      duration-300
      p-4
      z-30"
    :class="settingsOpen ? '-translate-x-0' : 'translate-x-full'">
    <div class="flex justify-between pb-4">
      <h2 class="text-xl">Instellingen</h2>
      <icon-button icon="window-close" @click="$emit('update:settings-open', false)"/>
    </div>
    <!-- For our update:value, pass update from switch button up through to parent -->
    <switch-button
      v-bind:value="mode"
      onLabel="licht"
      onValue="light"
      offLabel="donker"
      offValue="dark"
      v-on:update:value="$emit('update:mode', $event)"
    />
  </aside>
</template>

<script>
import SwitchButton from './Switch.vue';
import IconButton from './IconButton.vue';

export default {
  props: ['mode', 'settingsOpen'],
  components: {
    SwitchButton,
    IconButton,
  },
};
</script>

<style scoped>
</style>
