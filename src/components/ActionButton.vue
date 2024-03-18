<template>
  <button :class="'action-button action-button--' + theme" type="button">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    theme: {
      type: String,
      default: 'light'
    }
  }
};
</script>

<style lang="scss" scoped>
.action-button {
  @include flex(center, center);
  background-color: transparent;
  border: 3px solid;
  border-radius: 5px;
  cursor: pointer;
  transition: all .2s;
  
  &--light {
    color: $whiteColor;
    border-color: $whiteColor;

    &:hover {
      border-color: $buttonBgColor;
      color: $buttonBgColor;
    }
  }

  &--dark {
    color: $buttonBgColor;
    border-color: $buttonBgColor;

    &:hover {
      border-color: $bgColor;
      color: $bgColor;
    }
  }
}
</style>