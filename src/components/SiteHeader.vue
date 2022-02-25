<template>
  <header
    class="bg-gray-900 sm:flex sm:items-center justify-between xl:bg-white"
  >
    <!-- Workcation logo -->
    <div
      class="flex justify-between px-4 py-3 xl:w-72 xl:bg-gray-900 xl:justify-center py-5"
    >
      <div>
        <img src="../assets/HomeAway_Logo.svg.png" alt="" class="h-8 w-auto" />
      </div>

      <!-- Burger menu -->
      <div class="flex">
        <button
          type="button"
          @click="toggle"
          class="px-2 text-gray-500 hover:text-white sm:hidden"
        >
          <svg
            v-if="!isOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <!-- close button -->
          <svg
            v-if="isOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- use v-show because it doesnt re-ender and just add the display:none class -->
    <nav
      class="sm:flex sm:items-center px-2 xl:pl-8 xl:flex-1 xl:justify-between"
      :class="{ hidden: !isOpen, block: isOpen }"
    >
      <!-- div for search bar in header -->
      <div class="hidden xl:block relative max-w-sm w-full">
        <div class="absolute inset-y-0 left-0 z-20 flex items-center pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-600"
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
          class="w-full bg-gray-200 focus:outline-none focus:bg-white focus:text-gray-900 text-gray-900 rounded-lg px-10 pr-4 py-2 border focus:border-gray-700"
          placeholder="Search by keywords"
        />
      </div>

      <div class="sm:flex sm:items-center">
        <!-- top nav -->
        <div
          class="px-2 pt-2 py-5 border-b sm:py-0 border-gray-800 sm:flex sm:items-center sm:border-b-0"
        >
          <a
            href="#"
            class="px-3 py-1 rounded block leading-tight font-semibold text-white hover:bg-gray-800 sm:text-sm px-2 xl:text-gray-900 xl:hover:bg-gray-900 xl:hover:text-white"
            >List your property</a
          >
          <a
            href="#"
            class="mt-1 sm:mt-0 px-3 py-1 rounded block leading-tight font-semibold text-white hover:bg-gray-800 sm:text-sm px-2 sm:ml-2 xl:text-gray-900 xl:hover:bg-gray-900 xl:hover:text-white"
            >Trips</a
          >
          <a
            href="#"
            class="mt-1 sm:mt-0 px-3 py-1 rounded block leading-tight font-semibold text-white hover:bg-gray-800 sm:text-sm px-2 sm:ml-2 xl:text-gray-900 xl:hover:bg-gray-900 xl:hover:text-white"
            >Messages</a
          >
        </div>

        <!-- bottom nav -->
        <div class="sm:relative px-5 py-5 sm:py-0 sm:pl-0 sm:pr-4">
          <div class="flex items-center sm:hidden">
            <img
              src="https://www.thewikifeed.com/wp-content/uploads/2021/01/jisoo-kim-1.jpg"
              alt=""
              class="h-10 w-10 object-cover rounded-full border-2 border-gray-600 sm:h-10 sm:w-10 xl:border-gray-300"
            />
            <span class="ml-4 text-gray-200 font-semibold sm:hidden"
              >Jisoo Kim</span
            >
          </div>
          <!-- dropdown component -->
          <Dropdown>
            <template #trigger="{ hasFocus }">
              <span
                class="hidden sm:block rounded-full border-2 border-gray-600 xl:border-gray-300 sm:overflow-hidden sm:h-8 sm:w-8 sm:focus:outline-none sm:focus:border-white"
                :class="[
                  hasFocus
                    ? 'border-white xl:border-indigo-500'
                    : 'border-gray-600 xl:border-gray-300',
                ]"
              >
                <img
                  src="https://www.thewikifeed.com/wp-content/uploads/2021/01/jisoo-kim-1.jpg"
                  alt=""
                  class="h-10 w-10 object-cover sm:h-8 sm:w-8 xl:rounded-full"
                />
              </span>
            </template>
            <template #dropdown>
              <div
                class="mt-5 flex flex-col sm:bg-white sm:rounded-lg sm:absolute sm:z-20 sm:right-0 sm:w-48 sm:mr-2 sm:mt-5 sm:shadow-xl sm:py-2 xl:border xl:border-gray-300"
              >
                <a
                  href="#"
                  class="text-gray-400 hover:text-white sm:text-gray-800 sm:px-4 sm:py-2 sm:hover:bg-indigo-500 sm:w-full sm:text-left"
                  >Account Settings</a
                >
                <a
                  href="#"
                  class="mt-3 text-gray-400 hover:text-white sm:text-gray-800 sm:px-4 sm:py-2 sm:mt-0 sm:hover:bg-indigo-500 sm:w-full sm:text-left"
                  >Support</a
                >
                <a
                  href="#"
                  class="mt-3 text-gray-400 hover:text-white sm:text-gray-800 sm:px-4 sm:py-2 sm:mt-0 sm:hover:bg-indigo-500 sm:w-full sm:text-left"
                  >Sign out</a
                >
              </div>
            </template>
          </Dropdown>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Dropdown from "./Dropdown.vue";
export default {
  components: { Dropdown },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style></style>
