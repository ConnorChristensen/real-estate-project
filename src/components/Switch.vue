<template>
  <div class="switch">
    <button
      :class="{ active: active }"
      @click="$emit('update:value', onValue)"
    >{{ onLabel || 'on' }}</button>
    <button
      :class="{ active: !active }"
      @click="$emit('update:value', offValue)"
    >{{ offLabel || 'off' }}</button>
  </div>
</template>

<script>
export default {
  // allow value and label info to be different for internationalization
  props: [
    'value',
    'onLabel',
    'onValue',
    'offLabel',
    'offValue',
  ],
  computed: {
    active() {
      return this.value === this.onValue;
    },
  },
};
</script>

<style scoped>
.switch {
  display: flex;
  align-items: center;
}

p {
  padding-right: 10px;
}

button {
  padding: 2px 10px;
  color: white;
  background: rgb(102, 102, 102);
  font-weight: 100;
}

.active {
  background: rgb(94, 196, 214);
}

button:first-child {
  border-radius: 3px 0 0 3px;
}

button:last-child {
  border-radius: 0 3px 3px 0;
}
</style>
