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
      type: String,
      default: "",
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
    color: $darkBgColor;

    &:hover {
      background-color: $darkBgColor;
      color: $whiteColor;
    }
  }

  &--dark {
    background-color: $darkBgColor;
    color: $whiteColor;
    border: 2px solid transparent;

    &:hover {
      background-color: $whiteColor;
      color: $darkBgColor;
      border-color: $darkBgColor;
    }
  }
}
</style>