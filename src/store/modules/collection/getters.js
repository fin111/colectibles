export default {
  collections(state) {
    return state.collections;
  },
  hasCollection(state) {
    return state.collections && state.collections.length > 0;
  }
};
