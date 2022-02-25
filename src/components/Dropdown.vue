<template>
  <div class="relative">
    <button
      type="button"
      class="block focus:outline-none"
      @click="toggle"
      @focus="buttonHasFocused = true"
      @blur="buttonHasFocused = false"
    >
      <slot name="trigger" :hasFocus="buttonHasFocused"></slot>
    </button>
    <div :class="isOpen ? 'sm:flex' : 'sm:hidden'">
      <!-- this button acts as the button that covers the full screen, if user click on this, then the dropdown will close -->
      <button
        type="button"
        @click="isOpen = false"
        class="hidden sm:z-20 sm:fixed sm:block sm:inset-0 sm:w-full sm:h-full sm:bg-red-300 sm:opacity-0 cursor-default"
      >
        Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
        adipisci eaque fugiat provident, quibusdam quisquam ratione praesentium
        reiciendis vitae rem.
      </button>
      <slot name="dropdown"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonHasFocused: false,
      isOpen: false,
    };
  },
  mounted() {
    const onEscape = (e) => {
      if (!this.isOpen || e.key !== "Escape") {
        return;
      }
      this.isOpen = false;
    };
    document.addEventListener("keydown", onEscape);
    this.$on("hook:destroed", () => {
      document.removeEventListener("keydown", onEscape);
    });
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style></style>
