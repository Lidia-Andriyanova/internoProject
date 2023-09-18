<template>
    <div>
        <div class="projects">
            <img class="projects__img" :src="require(`@/assets/${projectsImg}`)" alt="Project"> 
            <div class="projects-heading">
                <h3 class="projects-heading__title">Our Project</h3>
                <nav class="projects-heading__nav">
                    <router-link to="/main" class="projects-heading__nav__breadcrumbs">Home</router-link>
                    <router-link to="/project" class="projects-heading__nav__breadcrumbs">Project</router-link>
                </nav>
           </div>
        </div>       
        <div class="tags center">
            <div class="project-tags">

            <div class="project-tags-buttons">
                <button  
                    v-for="tag in projectTags" 
                    :key="tag.id" 
                    class="project-tags-buttons_button"
                    @click="chooseTag(tag)"
                    :style="{
                        backgroundColor: tag === selectedTag ? '#CDA274' : 'white',
                        color: tag === selectedTag ? 'white' : 'black',
                    }"                    
                    >
                    {{ tag }}
                </button>
            </div>
            </div>
        </div>
        <section class="project center">
            <ul>
                <li v-for="projectItem in filteredProjects" 
                    :key="projectItem.id">
                    <InternoProjectItem :projectItem="projectItem"
                />
                </li>
            </ul>            

            <div class="news-pages">
                <button class="news-pages__blog">01</button>                        
                <button class="news-pages__blog">02</button>                        
                <button class="news-pages__blog">03</button>                       
                <button class="news-pages__blog">
                    <img :src="require(`@/assets/${nextImg}`)" alt="Next"> 
                </button>                       
        </div>                 
        </section>  
    </div>
</template>

<script>
import InternoProjectItem from '../components/InternoProjectItem.vue';
import { mapGetters} from "vuex";

export default {
    name: 'ProjectPage',

    components: {
        InternoProjectItem
    },   

    data() {
        return {
            nextImg: 'next.svg',  
            projectsImg: 'projects.jpg',  
            selectedTag: '',
        };
    },

     methods: {
        chooseTag(nameTag) {
            if (this.selectedTag === nameTag) {
                this.selectedTag = '';
            } else {
                this.selectedTag = nameTag;
            }
        },
    },

    computed: {
         ...mapGetters(['projectTags', 'soldProjects']),
        
         filteredProjects() {
            if (this.selectedTag) {
                return this.soldProjects.filter(item => item.tags.includes(this.selectedTag))
            } else {
                return this.soldProjects
            }
        }
    },

};
</script>


<style lang="scss" scoped>

.projects {         
        width: 100vw;
        display: flex;
        justify-content: center;
        margin-bottom: 200px;
        position: relative;

        &-heading {
            width: 500px;
            height: 180px;
            padding: 41px;
            position: absolute;
            left: calc(50% - 500px / 2);
            top: 180px;
            border-radius: 37px 37px 0px 0px;
            background: $siteColor;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;

            &__title {
                color: $titleFontColor;
                font-family: 'DM Serif Display';
                font-size: 50px;
                font-style: normal;
                font-weight: 400;
                line-height: 125%;
            }

            &__nav__breadcrumbs {
                color: $textFontColor;
                font-family: 'Jost';
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 0.22px;   

                &:hover {
                    color: $infoColor;
                }

                &:not(:last-child):after {
                    padding: 6px;
                    color: $textFontColor;
                    font-weight: 400;
                    content: "/\00a0";  
                }
            }
        }    
    } 

    .project-tags {
        display: flex;
        justify-content: center;
        
        &-buttons {
            margin-bottom: 60px;
            border: 1px solid $infoColor; 
            border-radius: 20px;

            &_button {
                width: 220px;
                padding: 26px 0;
                color: #292F36;
                text-align: center;
                font-family: Jost;
                font-size: 18px;
                font-style: normal;
                font-weight: 600;
                line-height: 125%; 
                letter-spacing: 0.36px;    
                background-color: $siteColor;   
                border: none;
                border-radius: 20px;

                &:hover  {
                    border: 1px solid $infoColor; 
                }              

            }
        }        
    }

    ul {
        column-count:2;
        list-style-type: none;
        margin-bottom: 70px;
    }

    li {
        margin-bottom: 40px;
        break-inside: avoid-column;
    }

    .news-pages {
        margin-top: 50px;
        margin-bottom: 80px;
        display: flex;
        justify-content: center;
        gap: 20px;

        &__blog  { 

            width: 52px;
            height: 52px;
            border: none;
            border-radius: 26px;                
            font-family: 'Jost';
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%;
            text-transform: capitalize ;
            color: #292F36;
            background: $siteColor;
            border: solid $infoColor 2px;
            border-radius: 26px;   
        }
    }    

</style>