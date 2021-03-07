<template>
  <base-card>
    <h2>The goodies!!</h2>
    <ul v-if="hasCollection">
      <collection-item v-for="col in collections" 
      :key="col.id"
      :name="col.name"
      :desc="col.desc"
      :url="col.url"
      :tag="col.tag"></collection-item>
    </ul>
    <p v-else>There are no goodies to display, why not be the first to add one!!</p>
  </base-card>
</template>

<script>
import CollectionItem from '../components/collections/CollectionItem.vue';
export default {
  components: { 
    CollectionItem 
  },
  computed: {
    collections() {
      return this.$store.getters['collection/collections'];
    },
    hasCollection() {
      return this.$store.getters['collection/hasCollection']
    }
  },
  created() {
    this.loadCollection();
  },
  methods: {
    loadCollection() {
      this.$store.dispatch('collection/loadCollection');   
    }
  },
}
</script>