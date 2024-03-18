<template>
  <div class="tasks__list">
    <TasksListItem
      v-for="task in 12"
      :key="task"
    />
  </div>
  <Transition name="fade">
    <CommonPopup
      v-if="isEditPopupVisible"
      @closePopup="setIsEditPopupVisible(false)"
    >
      <EditPopup/>
    </CommonPopup>
  </Transition>
  <Transition name="fade">
    <CommonPopup
      v-if="isDeletePopupVisible"
      @closePopup="setIsDeletePopupVisible(false)"
    >
      <DeletePopup/>
    </CommonPopup>
  </Transition>
</template>

<script>
import CommonPopup from "@/components/popups/CommonPopup.vue";
import EditPopup from "@/components/popups/EditPopup.vue";
import DeletePopup from "@/components/popups/DeletePopup.vue";
import usePopups from "@/composables/usePopups";
import TasksListItem from "@/components/TasksListItem.vue";

export default {
  name: "TasksList",
  components: { TasksListItem, DeletePopup, EditPopup, CommonPopup },
  setup() {
    const {
      isEditPopupVisible,
      setIsEditPopupVisible,
      isDeletePopupVisible,
      setIsDeletePopupVisible,
    } = usePopups();
    
    return {
      isEditPopupVisible,
      setIsEditPopupVisible,
      isDeletePopupVisible,
      setIsDeletePopupVisible,
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/popup-transition";

.tasks {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    
    @include maxWidth(1023) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include maxWidth(640) {
      grid-template-columns: 1fr;
    }
  }
}
</style>