<template>
  <div
    class="
      bg-white
      opacity-95
      p-4
      rounded-t-md
      w-full
      dark:bg-gray-700
      md:rounded-none
      md:static
      md:opacity-100
    "
  >
    <div class="flex justify-between pt-3">
      <p class="font-bold text-lg">{{listing.Adres}}</p>
      <p class="font-bold text-lg">
        {{listing.WoonOppervlakte}} m&sup2;
      </p>
    </div>

    <div class="flex justify-between">
      <p class="text-gray-400">{{listing.Cv}}, {{listing.Plaats}}</p>
      <p class="text-gray-400">€{{listing.Koopprijs}}</p>
    </div>

    <div class="flex justify-between pb-3">
      <p class="text-gray-400">{{listing.AantalKamers}} kamers</p>
      <p class="text-gray-400">{{listing.AantalBadkamers}} badkamers</p>
    </div>

    <div class="md:grid md:grid-cols-2 md:gap-4">
      <categories :listing="listing" />
      <p class="my-4 whitespace-pre-wrap">{{listing.VolledigeOmschrijving}}</p>
    </div>
  </div>
</template>

<script>
import Categories from './Categories.vue';

export default {
  props: ['listing'],
  components: {
    Categories,
  },
};
</script>

<style>
</style>
