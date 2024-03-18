<template>
  <div class="task-action-popup">
    <h2 class="task-action-popup__title">Create new task</h2>
    <form class="form">
      <input class="task-action-popup__task-title" type="text" placeholder="Task title..."/>
      <textarea class="task-action-popup__task-description" placeholder="Task description..."></textarea>
    </form>
    <div class="task-action-popup__buttons">
      <CommonButton
        class="task-action-popup__button" 
        theme="dark"
        @click="setIsCreatePopupVisible(false)"
      >
        Cancel
      </CommonButton>
      <CommonButton
        class="task-action-popup__button"
        theme="dark"
      >
        Create
      </CommonButton>
    </div>
  </div>
</template>

<script>
import CommonButton from "@/components/CommonButton.vue";
import usePopups from "@/composables/usePopups";

export default {
  name: "CreatePopup",
  components: { CommonButton },
  setup() {
    const { setIsCreatePopupVisible } = usePopups();
    
    return {
      setIsCreatePopupVisible,
    }
  }
};
</script>