import axios from "axios";

export const personModule = {
  //*** */ namespaced: true
  // after is true in file.vue we need to add namespace like:
  // $store.dispatch('todosModule/ACTION')
  state: {
    people: [],
    message: "",
    deleteUpdate: ""
  },
  getters: {},
  mutations: {
    SET_LIST: (state, payload) => {
      state.people = payload;
    },

    // setting success or error messages
    SET_ADD_MESSAGE: (state, payload) => {
      state.message = payload;
    },
    SET_DELETE_MESSAGE: (state, payload) => {
      state.deleteUpdate = "User: " + payload + " deleted"
    },
    SET_UPDATE_MESSAGE: (state, payload) => {
      state.deleteUpdate = "User: " + payload + " was updated"
    },
    RESET_TEXT: (state) => {
      state.deleteUpdate = ""
    }
  },
  actions: {
    COLLECT_DATA: async context => {
        const res = await axios.get("http://localhost:5000/data");
        context.commit("SET_LIST", res.data.list);
        context.commit("RESET_TEXT");
    },

    // Working
    ADD_PERSON: async (context, payload) => {
      // http === all data
      // takes data from input
      const res = await axios.post("http://localhost:5000/dataAdd", payload);
      // takes data from db response
      context.commit("SET_ADD_MESSAGE", res.data.success);
    },

    // working
    DELETE_PERSON: async (context, payload) => {
      const res = await axios.delete("http://localhost:5000/delete/" + payload);
      context.commit("SET_DELETE_MESSAGE", res.data.name)
    },

    UPDATE_PERSON: async (context, payload) => {
      const res = await axios.post("http://localhost:5000/data", payload);
      context.commit("SET_UPDATE_MESSAGE", res.data.person.name)
    }
  }
};
