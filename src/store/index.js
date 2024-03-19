import { createStore } from "vuex";
import popups from "@/store/popups";
import tasks from "@/store/tasks";

export default createStore({
    modules: {
        popups,
        tasks,
    }
});
