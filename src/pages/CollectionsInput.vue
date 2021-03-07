<template>
  <section>
    <base-card>
      <h2>Enter your goodies</h2>
      <collections-form @save-data="saveData"></collections-form>
    </base-card>
  </section>
</template>

<script>
import CollectionsForm from '../components/collections/CollectionsForm.vue';

export default {
  components: {
    CollectionsForm
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('collection/addCollection', data);
      this.$router.replace('/collection');
    }
  }
}
</script>