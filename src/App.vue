<template>
  <the-header title="Things I found on the internet"></the-header>
  <the-collection></the-collection>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheCollection from './components/collections/TheCollections.vue';

export default {
  components: {
    TheHeader,
    TheCollection
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
