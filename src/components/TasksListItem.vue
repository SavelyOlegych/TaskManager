<template>
  <article class="tasks__item">
    <h2 class="tasks__item-title">Lorem ipsum dolor sit amet.</h2>
    <p class="tasks__item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolores ea expedita hic ipsa ipsum porro qui! Eaque eveniet nihil perspiciatis veritatis. Aperiam at consequuntur debitis, dolore dolores exercitationem facere facilis impedit in iusto modi nostrum porro quis quos repellat saepe similique sint tenetur totam ut? Aspernatur libero quam veritatis?</p>
    <div class="tasks__item-actions">
      <ActionButton
        class="tasks__item-action-button"
        theme="dark"
        title="Edit task"
        @click="setIsEditPopupVisible(true)"
      >
        <EditIcon/>
      </ActionButton>
      <ActionButton
        class="tasks__item-action-button"
        theme="dark"
        title="Delete task"
        @click="setIsDeletePopupVisible(true)"
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
import usePopups from "@/composables/usePopups";

export default {
  name: "TasksListItem",
  components: { ActionButton, EditIcon, DeleteIcon },
  setup() {
    const { setIsEditPopupVisible, setIsDeletePopupVisible } = usePopups();
    
    return {
      setIsEditPopupVisible,
      setIsDeletePopupVisible,
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