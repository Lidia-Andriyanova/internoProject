<template>
  <div id="app">
    <CommonHeader/>  
    <router-view/>
    <CommonFooter/>  
  </div>
</template>

<script>
import CommonHeader from './components/CommonHeader.vue'
import CommonFooter from './components/CommonFooter.vue'
import { mapActions } from "vuex";

export default {
  name: 'App',

  components: {
    CommonHeader,
    CommonFooter,
  },

    methods: {
         ...mapActions(['getProjectTags', 'getSoldProjects', 'getProject', 'getNews', 'getProjectDetails']),
    },

    created() {
        this.getProjectTags();
        this.getSoldProjects();
        this.getProject();
        this.getNews();
        this.getProjectDetails();
    }  
}
</script>

<style lang="scss">

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
