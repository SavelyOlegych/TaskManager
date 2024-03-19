export default {
  state() {
    return {
      tasks: []
    }
  },
  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
    CREATE_TASK(state, createdTask) {
      state.tasks.push(createdTask);
    },
    UPDATE_TASK(state, updatedTask) {
      const task = state.tasks.find(task => task.id === updatedTask.id);

      task.title = updatedTask.title;
      task.description = updatedTask.description;
    },
    DELETE_TASK(state, deletedTask) {
      const task = state.tasks.find(task => task.id === deletedTask.id);
      const taskIndex = state.tasks.indexOf(task);
      
      state.tasks.splice(taskIndex, 1);
    },
  },
  actions: {
    setTasksFromLocalStorage({ commit }) {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      
      if (tasks && tasks.length > 0) {
        commit("SET_TASKS", tasks);
      }
    },
    updateLocalStorageTasks({ state }) {
      localStorage.setItem("tasks", JSON.stringify(state.tasks))
    },
    createTask({ commit, dispatch }, createdTask) {
      commit("CREATE_TASK", createdTask);
      dispatch("updateLocalStorageTasks");
    },
    updateTask({ commit, dispatch }, updatedTask) {
      commit("UPDATE_TASK", updatedTask);
      dispatch("updateLocalStorageTasks")
    },
    deleteTask({ commit, dispatch }, deletedTask) {
      commit("DELETE_TASK", deletedTask);
      dispatch("updateLocalStorageTasks");
    }
  }
}