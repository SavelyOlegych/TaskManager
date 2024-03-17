<template>
  <RouterLink
    v-if="href"
    :class="'button button--' + theme"
    :to="href"
  >
    <slot/>
  </RouterLink>
  <button
    v-else
    :class="'button button--' + theme"
    type="button"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: "CommonButton",
  props: {
    href: {
      type: [String, null],
      default: null,
    },
    theme: {
      type: String,
      default: "light",
    }
  },
};
</script>

<style lang="scss" scoped>
.button {
  border-radius: 7px;
  transition: all .3s;
  border: 0;
  cursor: pointer;
  
  &--light {
    background-color: $whiteColor;
    color: $buttonBgColor;

    &:hover {
      background-color: $buttonBgColor;
      color: $whiteColor;
    }
  }

  &--dark {
    background-color: $buttonBgColor;
    color: $whiteColor;

    &:hover {
      background-color: $whiteColor;
      color: $buttonBgColor;
    }
  }
}
</style>