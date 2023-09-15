<template>
  <div id="app">
    <InternoMain/>
  </div>
</template>

<script>
import InternoMain from './components/InternoMain.vue'

export default {
  name: 'App',
  components: {
    InternoMain,
  },
}
</script>

<style lang="scss">

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Jost', 'DM Serif Display', sans-serif;
  }

  a { 
    text-decoration: none;
  }

  .center {
    padding-left: calc(50% - $siteWidth / 2);
    padding-right: calc(50% - $siteWidth / 2);
  }

</style>
