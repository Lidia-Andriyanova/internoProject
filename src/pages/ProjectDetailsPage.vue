<template>
    <div>
        <div class="project-details">        
            <img class="project-details__img" :src="require(`@/assets/${projectDetailsImg}`)" alt="Project details">         
        </div>

        <ProjectDetailCarousel
        :carouselData="projectDetails"
        />
    </div>
</template>

<script>
import ProjectDetailCarousel from '@/components/ProjectDetailCarousel.vue';
import { mapGetters } from "vuex";

export default {
    name: 'ProjectDetailsPage',

    components: {
        ProjectDetailCarousel,
    },

     data() {
         return {
             projectDetailsImg: 'projectDetails.jpg', 
         };
     },

    computed: {
        ...mapGetters(['projectDetails']),
    },
};
</script>

<style lang="scss" scoped>

    .project-details {         
        width: 100vw;
        display: flex;
        justify-content: center;
        margin-bottom: 200px;
    }

</style>