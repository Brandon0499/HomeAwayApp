<template>
  <SiteHeader class="flex-shrink-0"></SiteHeader>
  <!-- Search and filter section -->
  <div class="xl:flex xl:flex-1 xl:overflow-y-hidden">
    <SearchFilters></SearchFilters>

    <!-- cards -->

    <div class="overflow-y-scroll w-screen">
      <main class="px-4 py-6">
        <div class="px-4 sm:px-6">
          <h3 class="text-gray-900 text-xl">Los Angeles</h3>
          <p>
            Live like the stars in these luxurious Southern California estates.
          </p>
        </div>

        <div class="mt-6 sm:flex sm:overflow-x-auto sm:pb-8 px-4">
          <div
            v-for="(property, i) in properties"
            :key="i"
            :class="{ 'mt-10': i > 1 }"
            class="sm:max-w-xs sm:w-full sm:flex-shrink-0 sm:px-2 mt-4 md:mt-0"
          >
            <PropertyCard :property="property"></PropertyCard>
          </div>
        </div>
      </main>

      <main class="px-4 py-6">
        <div class="px-4 sm:px-6">
          <h3 class="text-gray-900 text-xl">New York</h3>
          <p>
            Live like the stars in these luxurious Southern California estates.
          </p>
        </div>

        <div class="mt-6 sm:flex sm:overflow-x-auto sm:pb-8 px-4">
          <div
            v-for="(property, i) in properties"
            :key="i"
            :class="{ 'mt-10': i > 1 }"
            class="sm:max-w-xs sm:w-full sm:flex-shrink-0 sm:px-2 mt-4 md:mt-0"
          >
            <PropertyCard :property="property"></PropertyCard>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SearchFilters from "./components/SearchFilters.vue";
import PropertyCard from "./components/PropertyCard.vue";

export default {
  components: {
    SiteHeader,
    SearchFilters,
    PropertyCard,
  },
  data() {
    return {
      properties: [
        {
          imageUrl:
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
          beds: 3,
          baths: 2,
          title: "Modern home in city center",
          price: 140000,
          reviewCount: 34,
          rating: 4,
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
          beds: 4,
          baths: 1,
          title: "Modern home in city center",
          price: 140000,
          reviewCount: 12,
          rating: 3,
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHZpbGxhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
          beds: 5,
          baths: 4,
          title: "House near the Beach",
          price: 220000,
          reviewCount: 54,
          rating: 5,
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fG1hbnNpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          beds: 3,
          baths: 2,
          title: "Wooden House",
          price: 140000,
          reviewCount: 34,
          rating: 4,
        },
      ],
    };
  },
};
</script>

<style>
@import "./assets/base.css";
</style>
