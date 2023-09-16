<template>
  <div id="app">
    <CommonHeader/>
    <!-- <InternoMain/>  -->
    <!-- <BlogPage/>  -->
    <ProjectPage/>
    <CommonFooter/>
  </div>
  </template>

<script>
import CommonHeader from './components/CommonHeader.vue'
import CommonFooter from './components//CommonFooter.vue'
import { mapActions } from "vuex";
//import InternoMain from './components/InternoMain.vue'
//import BlogPage from './components/BlogPage.vue'
import ProjectPage from './pages/ProjectPage.vue'


export default {
  name: 'App',
  components: {
    CommonHeader,
    CommonFooter,    
    //InternoMain,
    //BlogPage,
    ProjectPage,
  },

    methods: {
         ...mapActions(['getProjectTags', 'getSoldProjects']),
    },

    created() {
        this.getProjectTags();
        this.getSoldProjects();
    }  
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
