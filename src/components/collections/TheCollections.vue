<template>
  <ul>
    <stored-collections></stored-collections>
  </ul>
</template>

<script>
import StoredCollections from './StoredCollections.vue';

export default {
  components: {
    StoredCollections,
  },
  data() {
    return {
      storedCollections: [
        {
          id: 'Smashing Magazine',
          title: 'Smashing Magazine',
          desc: 'Smashing Magazine is a website and eBook publisher that offers editorial content and professional resources for web developers and web designers',
          link: 'https://www.smashingmagazine.com/',
          tag: 'website'
        },
        {
          id: 'CSS Tricks',
          title: 'CSS Tricks',
          desc: 'Daily articles about CSS, HTML, JavaScript, and all things related to web design and development',
          link: 'https://css-tricks.com/',
          tag: 'website'
        },
        {
          id: 'Codrops',
          title: 'Codrops',
          desc: 'Codrops is a web design and development blog that publishes articles and tutorials about the latest web trends, techniques and new possibilities',
          link: 'https://tympanus.net/codrops/',
          tag: 'website'
        },
        {
          id: 'Rich Roll Podcast',
          title: 'Change Your Brain: Neuroscientist Dr. Andrew Huberman | Rich Roll Podcast',
          desc: '',
          link: 'https://www.youtube.com/watch?v=SwQhKFMxmDY&t=2248s',
          tag: 'video'
        }
      ]
    }
  },
  provide() {
    return {
      storedCollections: this.storedCollections
    }
  }
}
</script>