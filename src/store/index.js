import { createStore } from 'vuex';

import collectionModule from './modules/collection/index.js';

const store = createStore({
  modules: {
    collection: collectionModule
  }
});

export default store;