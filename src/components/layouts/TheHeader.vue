<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
  <ul>
      <li>
        <router-link to='/collection'>Collection of goodies</router-link>
      </li>
      <li>
        <router-link to='/add-to-collection'>Add to collection</router-link>
      </li>
    </ul>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
  header {
  width: 100%;
  height: 5rem;
  background-color: #640032;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 {
  color: white;
  margin: 0;
}
</style>