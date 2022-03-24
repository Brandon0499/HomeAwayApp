<template>
  <section class="bg-gray-800 xl:w-72">
    <div class="flex justify-between items-center px-4 py-3 xl:hidden">
      <div class="relative max-w-sm w-full">
        <div class="absolute inset-y-0 left-0 z-20 flex items-center pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          class="w-full bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg px-10 pr-4 py-2"
          placeholder="Search by keywords"
        />
      </div>

      <button
        type="button"
        @click="toggle"
        class="ml-4 inline-flex bg-gray-700 rounded-lg px-3 py-2 hover:ring ring-blue-500 ring-offset-0"
        :class="{
          'bg-slate-900 hover:bg-gray-800': !isOpen,
          'bg-slate-700 hover:bg-gray-600': isOpen,
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
        <span class="text-white font-medium ml-1">Filters</span>
      </button>
    </div>

    <!-- section that opens up on click on the filters button -->
    <form
      v-if="isOpen"
      class="py-4 pb-0 border-t border-gray-900 lg:py-0 xl:border-t-0 xl:flex xl:flex-col xl:justify-between xl:h-full xl:w-72"
    >
      <div class="lg:flex lg:pb-2 xl:block xl:overflow-y-auto">
        <!-- Bedrooms, Bathrooms, Price Range -->
        <div
          class="px-4 sm:flex sm:items-center lg:w-1/3 lg:flex-wrap xl:w-full xl:mt-5"
        >
          <div class="flex -mx-2 sm:w-1/2 lg:w-full lg:mx-auto">
            <label class="w-1/2 px-2">
              <span class="text-sm font-semibold text-gray-500">Bedrooms</span>
              <select
                class="mt-1 block w-full rounded-lg bg-gray-700 text-white shadow leading-snug focus:bg-gray-500"
              >
                <option>4</option>
              </select>
            </label>
            <label class="w-1/2 px-2">
              <span class="text-sm font-semibold text-gray-500">Bathrooms</span>
              <select
                class="mt-1 block w-full rounded-lg bg-gray-700 text-white shadow leading-snug focus:bg-gray-500"
              >
                <option>2</option>
              </select>
            </label>
          </div>
          <div
            class="mt-4 sm:w-1/2 sm:mt-0 sm:ml-4 lg:w-full lg:mx-auto lg:px-2"
          >
            <label for="">
              <span class="text-sm font-semibold text-gray-500"
                >Price Range</span
              >
              <select
                class="mt-1 block w-full rounded-lg bg-gray-700 text-white shadow leading-snug focus:bg-gray-500"
              >
                <option>Up to $2,000/wk</option>
              </select>
            </label>
          </div>
        </div>
        <!-- Property Type -->
        <div
          class="mt-5 px-4 border-t border-gray-900 lg:w-1/3 lg:mt-0 lg:border-t-0 lg:border-l xl:w-full xl:border-t xl:mt-5"
        >
          <div class="mt-2">
            <span class="text-sm font-semibold text-gray-500"
              >Property Type</span
            >
          </div>

          <div class="flex flex-col sm:flex-row lg:flex-col">
            <label class="mt-3 sm:w-1/4 lg:w-full">
              <input
                class="h-6 w-6 bg-gray-900"
                type="radio"
                name="propertyType"
                value="house"
              /><span class="ml-2 text-white">House</span>
            </label>
            <label class="mt-3 sm:w-1/4 lg:w-full">
              <input
                class="h-6 w-6 bg-gray-900"
                type="radio"
                name="propertyType"
                value="apartment"
              /><span class="ml-2 text-white">Apartment</span>
            </label>
            <label class="mt-3 sm:w-1/4 lg:w-full">
              <input
                class="h-6 w-6 bg-gray-900"
                type="radio"
                name="propertyType"
                value="loft"
              /><span class="ml-2 text-white">Loft</span>
            </label>
            <label class="mt-3 sm:w-1/4 lg:w-full">
              <input
                class="h-6 w-6 bg-gray-900"
                type="radio"
                name="propertyType"
                value="townhouse"
              /><span class="ml-2 text-white">Townhouse</span>
            </label>
          </div>
        </div>

        <!-- Amenities -->
        <div
          class="mt-5 px-4 py-2 border-t border-gray-900 lg:w-1/3 lg:mt-0 lg:border-t-0 lg:border-l xl:w-full xl:border-t xl:mt-5"
        >
          <span class="text-sm font-semibold text-gray-500">Amenities</span>

          <div class="sm:flex sm:flex-wrap">
            <label class="block mt-3 text-white sm:w-1/4 lg:w-1/2 xl:w-full">
              <input
                type="checkbox"
                name="balcony"
                value="balcony"
                class="bg-gray-900 rounded-md h-5 w-5"
              /><span class="ml-2">Balcony</span>
            </label>

            <label class="block mt-3 text-white sm:w-1/4 lg:w-1/2 xl:w-full">
              <input
                type="checkbox"
                name="pool"
                value="pool"
                class="bg-gray-900 rounded-md h-5 w-5"
              /><span class="ml-2">Pool</span>
            </label>
            <label class="block mt-3 text-white sm:w-1/4 lg:w-1/2 xl:w-full">
              <input
                type="checkbox"
                name="beach"
                value="beach"
                class="bg-gray-900 rounded-md h-5 w-5"
              /><span class="ml-2">Beach</span>
            </label>
            <label class="block mt-3 text-white sm:w-1/4 lg:w-1/2 xl:w-full">
              <input
                type="checkbox"
                name="petFriendly"
                value="petFriendly"
                class="bg-gray-900 rounded-md h-5 w-5"
              /><span class="ml-2">Pet friendly</span>
            </label>
            <label class="block mt-3 text-white sm:w-1/4 lg:w-1/2 xl:w-full">
              <input
                type="checkbox"
                name="kidFriendly"
                value="kidFriendly"
                class="bg-gray-900 rounded-md h-5 w-5"
              /><span class="ml-2">Kid friendly</span>
            </label>
            <label class="block mt-3 text-white sm:w-1/4 lg:w-1/2 xl:w-full">
              <input
                type="checkbox"
                name="parking"
                value="parking"
                class="bg-gray-900 rounded-md h-5 w-5"
              /><span class="ml-2">Parking</span>
            </label>
            <label class="block mt-3 text-white sm:w-1/4 lg:w-1/2 xl:w-full">
              <input
                type="checkbox"
                name="airConditioning"
                value="airConditioning"
                class="bg-gray-900 rounded-md h-5 w-5"
              /><span class="ml-2">Air Conditioning</span>
            </label>
          </div>
        </div>
      </div>

      <div class="bg-gray-900 text-white px-4 py-4 sm:text-right">
        <button
          class="bg-indigo-500 hover:bg-indigo-400 font-semibold px-4 py-2 rounded-lg w-full sm:w-auto xl:w-full"
        >
          Update results
        </button>
      </div>
    </form>

    <!-- duplicate for large screens -->
    <form
      class="hidden py-4 pb-0 border-t border-gray-900 lg:py-0 xl:border-t-0 xl:flex xl:flex-col xl:justify-between xl:h-full xl:w-72"
    >
      <div class="lg:flex lg:pb-2 xl:block xl:overflow-y-auto">
        <!-- Bedrooms, Bathrooms, Price Range -->
        <div
          class="px-4 sm:flex sm:items-center lg:w-1/3 lg:flex-wrap xl:w-full xl:mt-5"
        >
          <div class="flex -mx-2 sm:w-1/2 lg:w-full lg:mx-auto">
            <label class="w-1/2 px-2">
              <span class="text-sm font-semibold text-gray-500">Bedrooms</span>
              <select
                class="mt-1 block w-full rounded-lg bg-gray-700 text-white shadow leading-snug focus:bg-gray-500"
              >
                <option>4</option>
              </select>
            </label>
            <label class="w-1/2 px-2">
              <span class="text-sm font-semibold text-gray-500">Bathrooms</span>
              <select
                class="mt-1 block w-full rounded-lg bg-gray-700 text-white shadow leading-snug focus:bg-gray-500"
              >
                <option>2</option>
              </select>
            </label>
          </div>
          <div
            class="mt-4 sm:w-1/2 sm:mt-0 sm:ml-4 lg:w-full lg:mx-auto lg:px-2"
          >
            <label for="">
              <span class="text-sm font-semibold text-gray-500"
                >Price Range</span
              >
              <select
                class="mt-1 block w-full rounded-lg bg-gray-700 text-white shadow leading-snug focus:bg-gray-500"
              >
                <option>Up to $2,000/wk</option>
              </select>
            </label>
          </div>
        </div>
        <!-- Property Type -->
        <div
          class="mt-5 px-4 border-t border-gray-900 lg:w-1/3 lg:mt-0 lg:border-t-0 lg:border-l xl:w-full xl:border-t xl:mt-5"
        >
          <div class="mt-2">
            <span class="text-sm font-semibold text-gray-500"
              >Property Type</span
            >
          </div>

          <div class="flex flex-col sm:flex-row lg:flex-col">
            <label class="mt-3 sm:w-1/4 lg:w-full">
              <input
                class="h-6 w-6 bg-gray-900"
                type="radio"
                name="propertyType"
                value="house"
              /><span class="ml-2 text-white">House</span>
            </label>
            <label class="mt-3 sm:w-1/4 lg:w-full">
              <input
                class="h-6 w-6 bg-gray-900"
                type="radio"
                name="propertyType"
                value="apartment"
              /><span class="ml-2 text-white">Apartment</span>
            </label>
            <label class="mt-3 sm:w-1/4 lg:w-full">
              <input
                class="h-6 w-6 bg-gray-900"
                type="radio"
                name="propertyType"
                value="loft"
              /><span class="ml-2 text-white">Loft</span>
            </label>
            <label class="mt-3 sm:w-1/4 lg:w-full">
              <input
                class="h-6 w-6 bg-gray-900"
                type="radio"
                name="propertyType"
                value="townhouse"
              /><span class="ml-2 text-white">Townhouse</span>
            </label>
          </div>
        </div>

        <!-- Amenities -->
        <div
          class="mt-5 px-4 py-2 border-t border-gray-900 lg:w-1/3 lg:mt-0 lg:border-t-0 lg:border-l xl:w-full xl:border-t xl:mt-5"
        >
          <span class="text-sm font-semibold text-gray-500">Amenities</span>

          <div class="sm:flex sm:flex-wrap">
            <label class="block mt-3 text-white sm:w-1/4 lg:w-1/2 xl:w-full">
              <input
                type="checkbox"
                name="balcony"
                value="balcony"
                class="bg-gray-900 rounded-md h-5 w-5"
              /><span class="ml-2">Balcony</span>
            </label>

            <label class="block mt-3 text-white sm:w-1/4 lg:w-1/2 xl:w-full">
              <input
                type="checkbox"
                name="pool"
                value="pool"
                class="bg-gray-900 rounded-md h-5 w-5"
              /><span class="ml-2">Pool</span>
            </label>
            <label class="block mt-3 text-white sm:w-1/4 lg:w-1/2 xl:w-full">
              <input
                type="checkbox"
                name="beach"
                value="beach"
                class="bg-gray-900 rounded-md h-5 w-5"
              /><span class="ml-2">Beach</span>
            </label>
            <label class="block mt-3 text-white sm:w-1/4 lg:w-1/2 xl:w-full">
              <input
                type="checkbox"
                name="petFriendly"
                value="petFriendly"
                class="bg-gray-900 rounded-md h-5 w-5"
              /><span class="ml-2">Pet friendly</span>
            </label>
            <label class="block mt-3 text-white sm:w-1/4 lg:w-1/2 xl:w-full">
              <input
                type="checkbox"
                name="kidFriendly"
                value="kidFriendly"
                class="bg-gray-900 rounded-md h-5 w-5"
              /><span class="ml-2">Kid friendly</span>
            </label>
            <label class="block mt-3 text-white sm:w-1/4 lg:w-1/2 xl:w-full">
              <input
                type="checkbox"
                name="parking"
                value="parking"
                class="bg-gray-900 rounded-md h-5 w-5"
              /><span class="ml-2">Parking</span>
            </label>
            <label class="block mt-3 text-white sm:w-1/4 lg:w-1/2 xl:w-full">
              <input
                type="checkbox"
                name="airConditioning"
                value="airConditioning"
                class="bg-gray-900 rounded-md h-5 w-5"
              /><span class="ml-2">Air Conditioning</span>
            </label>
          </div>
        </div>
      </div>

      <div class="bg-gray-900 text-white px-4 py-4 sm:text-right">
        <button
          class="bg-indigo-500 hover:bg-indigo-400 font-semibold px-4 py-2 rounded-lg w-full sm:w-auto xl:w-full"
        >
          Update results
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      isOpen: "false",
      windowWith: window.innerWidth,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
  computed: {
    isBigger() {
      if (this.windowWith >= 1536) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style></style>
