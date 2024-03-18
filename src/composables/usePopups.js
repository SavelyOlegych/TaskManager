import { useStore } from "vuex";
import { computed } from "vue";

export default function () {
  const store = useStore();

  const isCreatePopupVisible = computed(() => store.state.popups.isCreatePopupVisible);
  const setIsCreatePopupVisible = (newValue) => store.commit("setIsCreatePopupVisible", newValue);

  const isEditPopupVisible = computed(() => store.state.popups.isEditPopupVisible);
  const setIsEditPopupVisible = (newValue) => store.commit("setIsEditPopupVisible", newValue);

  const isDeletePopupVisible = computed(() => store.state.popups.isDeletePopupVisible);
  const setIsDeletePopupVisible = (newValue) => store.commit("setIsDeletePopupVisible", newValue);
  
  return {
    isCreatePopupVisible,
    setIsCreatePopupVisible,
    isEditPopupVisible,
    setIsEditPopupVisible,
    isDeletePopupVisible,
    setIsDeletePopupVisible,
  }
}