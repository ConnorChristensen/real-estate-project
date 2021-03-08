<template>
  <div class="w-full">
    <div
      v-for="section in listing.Kenmerken"
      :key="section.LokNummer"
      class="bg-gray-100 shadow dark:bg-gray-600 my-3 p-3 rounded-md"
    >
      <h4 class="font-bold">{{section.Titel}}</h4>
      <hr class="pb-2">
      <table class="w-full">
        <tr v-for="item in section.Kenmerken" :key="item.Naam">
          <td class="w-1/2">{{ item.Naam }} </td>
          <td v-html="item.Waarde"></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['listing'],
};
</script>

<style>
</style>
