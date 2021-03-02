import { createRouter, createWebHistory } from 'vue-router';

import CollectionsList from './pages/CollectionsList.vue';
import CollectionsInput from './pages/CollectionsInput.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/collection' },
    { path: '/collection', component: CollectionsList },
    { path: '/add-to-collection', component: CollectionsInput }
  ]
});

export default router;