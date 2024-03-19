<template>
  <div class="task-action-popup">
    <h2 class="task-action-popup__title">Create new task</h2>
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
        @click="setIsCreatePopupVisible(false)"
      >
        Cancel
      </CommonButton>
      <CommonButton
        class="task-action-popup__button"
        theme="dark"
        @click="createTask"
      >
        Create
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
  name: "CreatePopup",
  components: { CommonButton },
  setup() {
    const { setIsCreatePopupVisible } = usePopups();
    const { tasks, createTaskAction } = useTasks();

    const taskTitle = ref("");
    const taskDescription = ref("");
    
    const createTask = () => {
      if (taskTitle.value) {
        const taskId = tasks.value.length > 0 ? tasks.value[tasks.value.length - 1].id + 1 : 1;

        createTaskAction({ id: taskId, title: taskTitle, description: taskDescription });
        setIsCreatePopupVisible(false);
      }
    }
    
    return {
      setIsCreatePopupVisible,
      taskTitle,
      taskDescription,
      createTask,
    }
  }
};
</script>