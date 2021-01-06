<template>
  <ul>
    <li v-for="col in storedCollections" :key="col.id">
      <h2>{{ col.title }}</h2>
      <p>{{ col.desc }}</p>
      <a :href="col.link" target="_blank">Go to {{ col.title }}</a>
      <p>tag: {{ col.tag }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  inject: ['storedCollections']
}
</script>