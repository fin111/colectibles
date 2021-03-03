<template>
  <base-card>
  <h2>The goodies!!</h2>
  <p v-if="isLoading">Loading....</p>
  <p v-else-if="!isLoading && error">{{ error }}</p>
  <p v-else-if="!isLoading && (!storedCollections || storedCollections.length === 0)">There are no goodies to display, why nit be the first to add one!!</p>
    <ul v-else>
      <li v-for="col in storedCollections" :key="col.id">
        <h2>{{ col.name }}</h2>
        <p>{{ col.desc }}</p>
        <a :href="col.url" target="_blank">Go to {{ col.name }}</a>
        <p>tag: {{ col.tag }}</p>
      </li>
    </ul>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      storedCollections: [],
      isLoading: false,
      error: null
    }
  },
  mounted() {
    this.isLoading = true;
    this.error = null;
    fetch('https://collections-76711-default-rtdb.europe-west1.firebasedatabase.app/collections.json').then( response => {
      if ( response.ok ) {
        return response.json();
      }
    }).then( data => {
      this.isLoading = false;
      const storedCollections = [];
      for (const id in data) {
        //console.log(id);
        storedCollections.push({
          id: id,
          name: data[id].name,
          desc: data[id].desc,
          url: data[id].url,
          tag: data[id].tag
        });
      }
      this.storedCollections = storedCollections;
    }).catch(() => {
      this.isLoading = false;
      this.error = 'Failed to fetch data = please try again later';
    })
  }
}
</script>