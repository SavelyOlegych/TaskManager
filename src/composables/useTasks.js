import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default function () {
  const store = useStore();
  const tasks = computed(() => store.state.tasks.tasks);
  
  const createTaskAction = (createdTask) => store.dispatch("createTask", createdTask);
  const updateTaskAction = (updatedTask) => store.dispatch("updateTask", updatedTask);
  const deleteTaskAction = (deletedTaskId) => store.dispatch("deleteTask", deletedTaskId);
  
  onMounted(() => {
    store.dispatch("setTasksFromLocalStorage");
  });
  
  return {
    tasks,
    createTaskAction,
    updateTaskAction,
    deleteTaskAction,
  }
}