<template>
  <div class="relative pb-5/6">
    <img
      :src="property.imageUrl"
      alt=""
      class="absolute inset-0 rounded-lg shadow-md h-full object-cover"
    />
  </div>
  <!-- card detail -->
  <div class="px-4 -mt-16 relative">
    <div class="bg-white rounded-lg px-4 py-4">
      <div class="flex items-center">
        <span
          class="inline-block bg-teal-200 text-teal-800 font-semibold uppercase tracking-wide text-xs rounded-full px-2 py-1 leading-none"
          >Plus</span
        >
        <div class="ml-2 text-xs uppercase tracking-wide">
          {{ property.beds }} {{ property.beds === 1 ? "bed" : "beds" }} &bull;
          {{ property.baths }} {{ property.baths === 1 ? "bath" : "baths" }}
        </div>
      </div>
      <h4 class="mt-1 text-gray-900 font-semibold text-lg">
        {{ property.title }}
      </h4>
      <div class="mt-1">
        <span class="text-gray-900">{{ formattedPrice }}</span
        ><span class="ml-1 text-sm text-gray-600">/wk</span>
      </div>
      <div class="mt-2 text-sm text-gray-600 flex items-center">
        <svg
          v-for="i in 5"
          :key="i"
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-teal-500"
          :class="property.rating >= i ? 'text-teal-500' : 'text-gray-400'"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>

        <span class="ml-2">{{ property.reviewCount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["property"],
  computed: {
    formattedPrice() {
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

      return formatter.format(this.property.price / 100);
    },
  },
};
</script>

<style></style>
