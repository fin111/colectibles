<template>
  <li>
    <h2>{{ name }}</h2>
    <p>{{ desc }}</p>
    <a :href="url" target="_blank">Go to {{ name }}</a>
    <p>tag: {{ tag }}</p>
  </li>
</template>

<script>
export default {
  props: ['id', 'name', 'desc', 'url', 'tag']
}
</script>