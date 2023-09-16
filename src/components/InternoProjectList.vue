<template>
    <section class="project center">
        <div class="project-heading">
            <h3 class="project-heading__title">Follow Our Projects</h3>
            <p class="project-heading__text">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
        </div>    
        <div class="project-content">
            <InternoProjectItem v-for="projectItem in projectItems" 
                :projectItem="projectItem"
                :key="projectItem.id"
            />
        </div>     
    </section>
</template>

<script>
import InternoProjectItem from './InternoProjectItem.vue';
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'InternoProjectList',
    components: {
        InternoProjectItem, 
    },
    data() {
        return {
       
        };
    },

    methods: {
        ...mapActions(['getProject']),
        
    },

    computed: {
        ...mapGetters(['projectItems']),
    },

    created() {
        this.getProject();
    }
};
</script>

<style lang="scss" scoped>

    .project {
        margin-bottom: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        &-heading {
            width: 740px;
            margin-bottom: 93px;

            &__title {
                margin-bottom: 10px;
                color: $titleFontColor;
                text-align: center;
                font-family: 'DM Serif Display';
                font-size: 50px;
                font-style: normal;
                font-weight: 400;
                line-height: 125%;
                letter-spacing: 1px;
            }

            &__text {
                color: $textFontColor;
                text-align: center;
                font-family: 'Jost';
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 0.22px;
            }
        }

        &-content {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 50px;

        }
    }

</style>