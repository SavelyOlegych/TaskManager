<template>
  <div class="task-action-popup">
    <h2 class="task-action-popup__title">Are you sure you want to delete task "Lorem ipsum dolor sit amet, consectetur adipisicing."?</h2>
    <div class="task-action-popup__buttons">
      <CommonButton
        class="task-action-popup__button"
        theme="dark"
        @click="setIsDeletePopupVisible(false)"
      >
        Cancel
      </CommonButton>
      <CommonButton
        class="task-action-popup__button"
        theme="dark"
      >
        Delete
      </CommonButton>
    </div>
  </div>
</template>

<script>
import CommonButton from "@/components/CommonButton.vue";
import usePopups from "@/composables/usePopups";

export default {
  name: "DeletePopup",
  components: { CommonButton },
  setup() {
    const { setIsDeletePopupVisible } = usePopups();
    
    return {
      setIsDeletePopupVisible,
    }
  }
};
</script>