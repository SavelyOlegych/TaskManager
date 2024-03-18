export default {
  state() {
    return {
      isCreatePopupVisible: false,
      isEditPopupVisible: false,
      isDeletePopupVisible: false
    }
  },
  mutations: {
    setIsCreatePopupVisible(state, newValue) {
      state.isCreatePopupVisible = newValue;
    },
    setIsEditPopupVisible(state, newValue) {
      state.isEditPopupVisible = newValue;
    },
    setIsDeletePopupVisible(state, newValue) {
      state.isDeletePopupVisible = newValue;
    },
  },
}