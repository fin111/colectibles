export default {
  addCollection(state, payload) {
    state.collections.push(payload);
  },
  setCollection(state, payload) {
    state.collections = payload;
  }
};
