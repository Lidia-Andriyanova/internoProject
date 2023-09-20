<template>
    <div>
        <div class="blog-details">        
            <img class="blog-details__img" :src="require(`@/assets/${blogDetailsImg}`)" alt="Project details">         
        </div>  
        <section class="articles center">
            <div class="articles-content">
                <div class="articles-content-list">  
                    <div v-for="article in filteredProjects" 
                        :key="article.id">
                        <BlogDetailsItem :article="article"
                    />
                    </div>
                </div>                 
                <div class="tags">
                    <h4 class="tags__title">Tags</h4>
                    <button  
                        v-for="tag in articleTags" 
                        :key="tag.id" 
                        class="tags__button"
                        @click="chooseTag(tag)"
                        :style="{
                            backgroundColor: tag === selectedTag ? '#292F36' : '#F4F0EC',
                            color: tag === selectedTag ? 'white' : 'black',
                        }"                    
                        >
                        {{ tag }}
                    </button>
                </div>                
            </div>                 
        </section>  

    </div>
</template>

<script>
import BlogDetailsItem  from '../components/BlogDetailsItem.vue';
import { mapGetters} from "vuex";

export default {
    name: 'BlogDetailsPage',

    components: {
        BlogDetailsItem
    },       

    data() {
        return {
            blogDetailsImg: 'ArticleDetails.jpg',   
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
         ...mapGetters(['articleTags', 'articles']),
        
         filteredProjects() {
            if (this.selectedTag) {
                return this.articles.filter(item => item.tags.includes(this.selectedTag))
            } else {
                return this.articles
            }
        }
    },    

};
</script>

<style lang="scss" scoped>

    .blog-details {         
        width: 100vw;
        display: flex;
        justify-content: center;
        margin-bottom: 200px;
    }

    .articles-content    {
        display: flex;
        justify-content: space-between;
        
        &-list {
            width: 800px;
            box-sizing: border-box;
       }
    }

    .tags {
        width: 350px;
        margin-bottom: 40px;

        &__title {
            color: #292F36;
            font-family: 'DM Serif Display';
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0.5px;     
            margin-bottom: 25px;       
        }

        &__button {
            padding: 10px 30px;
            border-radius: 10px;
            margin-right: 10px;
            margin-bottom: 8px;
            color: #000;
            text-align: center;
            font-family: 'Jost';
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%; /* 22.5px */
            letter-spacing: 0.36px;            
            background-color: $backgroundColor;
            border: none;

            &:hover  {
                border: 1px solid $titleFontColor; 
            }                
        }
    }      

</style>
