<template>
  <main class="main">
    <h1 class="main__title">Task manager</h1>
    <CommonButton class="main__tasks-link" href="/tasks">
      TASKS
    </CommonButton>
  </main>
</template>

<script>
import CommonButton from "@/components/CommonButton.vue";

export default {
  name: "MainPage",
  components: { CommonButton }
};
</script>

<style lang="scss" scoped>
.main {
  color: $whiteColor;
  padding-top: 35vh;

  &__title {
    margin: 0 auto 50px;
    width: max-content;
    font-size: 56px;
    
    @include maxWidth(767) {
      font-size: 40px;
    }

    @include maxWidth(374) {
      font-size: 32px;
    }
  }

  &__tasks-link {
    @include flex(center, center);
    width: 150px;
    height: 40px;
    margin: 0 auto;
    font-size: 20px;

    @include maxWidth(374) {
      width: 120px;
      height: 30px;
      font-size: 16px;
    }
  }
}
</style>