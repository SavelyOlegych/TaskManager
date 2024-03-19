<template>
  <div class="tasks__list">
    <TasksListItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @openEditPopup="openEditPopup"
    />
  </div>
  <Transition name="fade">
    <CommonPopup
      v-if="isEditPopupVisible"
      @closePopup="setIsEditPopupVisible(false)"
    >
      <EditPopup :taskId="currentTaskId"/>
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
import useTasks from "@/composables/useTasks";
import { ref } from "vue";

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
    
    const { tasks } = useTasks();
    
    const currentTaskId = ref(0);
    const openEditPopup = (taskId) => {
      currentTaskId.value = taskId;
      setIsEditPopupVisible(true);
    }
    
    return {
      isEditPopupVisible,
      setIsEditPopupVisible,
      isDeletePopupVisible,
      setIsDeletePopupVisible,
      tasks,
      currentTaskId,
      openEditPopup,
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