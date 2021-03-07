<template>
  <section>
    <base-card>
      <h2>Enter your goodies</h2>
      <collections-form @save-data="saveData"></collections-form>
    </base-card>
  </section>
</template>

<script>
import CollectionsForm from '../components/UI/CollectionsForm.vue';

export default {
  components: {
    CollectionsForm
  },
  methods: {
    saveData(data) {
      console.log(this.$store);
      this.$store.dispatch('collection/addCollection', data);
      //this.$router.replace('/collection');
    }
  }
}
</script>