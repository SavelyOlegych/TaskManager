<template>
  <main class="tasks container">
    <div class="tasks__top">
      <h1 class="tasks__title">Your tasks</h1>
      <ActionButton
        class="tasks__create-button"
        title="Create task"
        @click="setIsCreatePopupVisible(true)"
      >
        <CreateIcon/>
      </ActionButton>
    </div>
    <TasksList/>
    <Transition name="fade">
      <CommonPopup
        v-if="isCreatePopupVisible"
        @closePopup="setIsCreatePopupVisible(false)"
      >
        <CreatePopup class="tasks__create-popup"/>
      </CommonPopup>
    </Transition>
  </main>
</template>

<script>
import TasksList from "@/components/TasksList.vue";
import ActionButton from "@/components/ActionButton.vue";
import CreateIcon from "@/components/icons/CreateIcon.vue";
import CommonPopup from "@/components/popups/CommonPopup.vue";
import CreatePopup from "@/components/popups/CreatePopup.vue";
import usePopups from "@/composables/usePopups";

export default {
  name: "TasksPage",
  components: { CreatePopup, CommonPopup, CreateIcon, ActionButton, TasksList },
  setup() {
    const { isCreatePopupVisible, setIsCreatePopupVisible } = usePopups();
    
    return {
      isCreatePopupVisible,
      setIsCreatePopupVisible,
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/popup-transition";

.tasks {
  padding-top: 50px;
  padding-bottom: 50px;
  color: $whiteColor;
  
  &__top {
    @include flex(space-between);
    margin-bottom: 50px;
  }
  
  &__create-button {
    width: 30px;
    height: 30px;
    margin: auto 0;
  }
  
  &__title {
    font-size: 40px;
    line-height: 1;
  }
  
  &__create-popup {
    width: 400px;
    
    @include maxWidth(469) {
      width: 100%;
    }
  }
}
</style>