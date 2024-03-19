<template>
  <div class="task-action-popup">
    <h2 class="task-action-popup__title">Are you sure you want to delete task "{{ taskTitle }}"?</h2>
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
        @click="deleteTask"
      >
        Delete
      </CommonButton>
    </div>
  </div>
</template>

<script>
import CommonButton from "@/components/CommonButton.vue";
import usePopups from "@/composables/usePopups";
import useTasks from "@/composables/useTasks";

export default {
  name: "DeletePopup",
  components: { CommonButton },
  props: {
    taskId: {
      type: Number,
      required: true,
    }
  },
  setup(props) {
    const { setIsDeletePopupVisible } = usePopups();
    const { tasks, deleteTaskAction } = useTasks();
    
    const taskTitle = tasks.value.find(task => task.id === props.taskId).title;
    const deleteTask = () => {
      deleteTaskAction(props.taskId);
      setIsDeletePopupVisible(false);
    }
    
    return {
      setIsDeletePopupVisible,
      taskTitle,
      deleteTask,
    }
  }
};
</script>