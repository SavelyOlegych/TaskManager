<template>
  <div class="task-action-popup">
    <h2 class="task-action-popup__title">Edit task</h2>
    <form class="form">
      <input
        class="task-action-popup__task-title"
        type="text"
        placeholder="Task title..."
        v-model="taskTitle"
      />
      <textarea
        class="task-action-popup__task-description"
        placeholder="Task description..."
        v-model="taskDescription"
      />
    </form>
    <div class="task-action-popup__buttons">
      <CommonButton
        class="task-action-popup__button"
        theme="dark"
        @click="setIsEditPopupVisible(false)"
      >
        Cancel
      </CommonButton>
      <CommonButton
        class="task-action-popup__button"
        theme="dark"
        @click="editTask"
      >
        Save
      </CommonButton>
    </div>
  </div>
</template>

<script>
import CommonButton from "@/components/CommonButton.vue";
import usePopups from "@/composables/usePopups";
import useTasks from "@/composables/useTasks";
import { ref } from "vue";

export default {
  name: "EditPopup",
  components: { CommonButton },
  props: {
    taskId: {
      type: Number,
      required: true
    }
  },
  setup (props) {
    const { setIsEditPopupVisible } = usePopups();
    const { tasks, updateTaskAction } = useTasks();
    
    const task = tasks.value.find(task => task.id === props.taskId);
    const taskTitle = ref(task.title);
    const taskDescription = ref(task.description);
    
    const editTask = () => {
      if (taskTitle.value) {
        updateTaskAction({ id: props.taskId, title: taskTitle, description: taskDescription });
        setIsEditPopupVisible(false);
      }
    }

    return {
      setIsEditPopupVisible,
      taskTitle,
      taskDescription,
      editTask,
    }
  }
};
</script>