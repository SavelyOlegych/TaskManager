<template>
  <div class="popup" @mousedown="clickOutside">
    <div class="popup__content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonPopup",
  setup(props, { emit }) {
    const clickOutside = (event) => {
      if (!event.target.closest(".popup__content")) {
        emit('closePopup');
      }
    };
    
    return {
      clickOutside,
    }
  }
};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
  @include flex(center, center);

  &__content {
    background-color: $whiteColor;
    padding: 15px;
    border-radius: 10px;
    
    @include maxWidth(469) {
      width: calc(100% - 40px);
    }
  }
}
</style>