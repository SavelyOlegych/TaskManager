<template>
  <article class="tasks__item">
    <h2 class="tasks__item-title">{{ task.title }}</h2>
    <p class="tasks__item-text">{{ task.description }}</p>
    <div class="tasks__item-actions">
      <ActionButton
        class="tasks__item-action-button"
        theme="dark"
        title="Edit task"
        @click="editTask"
      >
        <EditIcon/>
      </ActionButton>
      <ActionButton
        class="tasks__item-action-button"
        theme="dark"
        title="Delete task"
        @click="deleteTask"
      >
        <DeleteIcon/>
      </ActionButton>
    </div>
  </article>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import DeleteIcon from "@/components/icons/DeleteIcon.vue";
import EditIcon from "@/components/icons/EditIcon.vue";

export default {
  name: "TasksListItem",
  components: { ActionButton, EditIcon, DeleteIcon },
  props: {
    task: {
      type: Object,
      required: true,
    }
  },
  setup(props, { emit }) {
    const editTask = () => {
      emit("openEditPopup", props.task.id);
    }

    const deleteTask = () => {
      emit("openDeletePopup", props.task.id);
    }
    
    return {
      editTask,
      deleteTask,
    }
  }
};
</script>

<style lang="scss" scoped>
.tasks__item {
  background-color: #DEDEEF;
  border-radius: 7px;
  padding: 10px 20px 15px;
  display: flex;
  flex-direction: column;
  color: $darkBgColor;

  &-text {
    margin: 15px 0 auto;
  }

  &-actions {
    @include flex(end);
    margin-top: 15px;
  }

  &-action-button {
    width: 30px;
    height: 30px;

    &:first-child {
      margin-right: 15px;
    }
  }
}
</style>