<template>
  <div class="tasks__list">
    <article
      class="tasks__item"
      v-for="task in 12"
      :key="task"
    >
      <h2 class="tasks__item-title">Lorem ipsum dolor sit amet.</h2>
      <p class="tasks__item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolores ea expedita hic ipsa ipsum porro qui! Eaque eveniet nihil perspiciatis veritatis. Aperiam at consequuntur debitis, dolore dolores exercitationem facere facilis impedit in iusto modi nostrum porro quis quos repellat saepe similique sint tenetur totam ut? Aspernatur libero quam veritatis?</p>
      <div class="tasks__item-actions">
        <ActionButton
          class="tasks__item-action-button"
          theme="dark"
          title="Edit task"
        >
          <EditIcon/>
        </ActionButton>
        <ActionButton
          class="tasks__item-action-button"
          theme="dark"
          title="Delete task"
        >
          <DeleteIcon/>
        </ActionButton>
      </div>
    </article>
  </div>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import EditIcon from "@/components/icons/EditIcon.vue";
import DeleteIcon from "@/components/icons/DeleteIcon.vue";

export default {
  name: "TasksList",
  components: { DeleteIcon, EditIcon, ActionButton },
};
</script>

<style lang="scss" scoped>
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
  
  &__item {
    background-color: #DEDEEF;
    border-radius: 7px;
    padding: 10px 20px 15px;
    display: flex;
    flex-direction: column;
    color: $buttonBgColor;
    
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
}
</style>