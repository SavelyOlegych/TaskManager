<template>
  <main class="tasks container">
    <div class="tasks__top">
      <h1 class="tasks__title">Your tasks</h1>
      <ActionButton class="tasks__create-button" title="Create task">
        <CreateIcon/>
      </ActionButton>
    </div>
    <TasksList/>
  </main>
</template>

<script>
import TasksList from "@/components/TasksList.vue";
import ActionButton from "@/components/ActionButton.vue";
import CreateIcon from "@/components/icons/CreateIcon.vue";

export default {
  name: "TasksPage",
  components: { CreateIcon, ActionButton, TasksList },
};
</script>

<style lang="scss" scoped>
.tasks {
  padding-top: 50px;
  padding-bottom: 50px;
  color: $whiteColor;
  
  &__top {
    @include flex(space-between);
    margin-bottom: 50px;
  }
  
  &__create-button {
    width: 30px;
    height: 30px;
    margin: auto 0;
  }
  
  &__title {
    font-size: 40px;
    line-height: 1;
  }
}
</style>