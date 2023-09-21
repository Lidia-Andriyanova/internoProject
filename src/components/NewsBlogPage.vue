<template>
    <section class="news center">
        <div class="news-heading news-heading__blog">
            <h3 class="news-heading__title news-heading__blog__title">Articles & News</h3>
        </div>
        <div class="news-content">
                <NewsItem
                    v-for="newsItem in currentProductList" 
                        :newsItem="newsItem"
                        :key="newsItem.id"
                />
        </div>         
        <div class="news-pages">
            <router-link 
                v-for="page in 4" 
                :to="`/blog/${page}`" 
                :key="page"
            >
                <button v-if="page <= 3" class="news-pages__blog">0{{ page }}</button>
                <button v-else class="news-pages__blog">
                    <img :src="require(`@/assets/${nextImg}`)" alt="Next"> 
                </button>                  
            </router-link>
        </div>                
    </section>        
</template>

<script>
import NewsItem from './NewsItem.vue'
import { mapGetters } from "vuex";

export default {
    name: 'NewsBlogPage',
    components: {
        NewsItem,
    },

    data() {
        return {
            nextImg: 'next.svg',  
            currentPage: 1,
            itemsPerPage: 6,
        };
    },

    computed: {
        ...mapGetters(['newsItems']),

        currentProductList() {
            const {currentPage, itemsPerPage} = this;
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            return this.newsItems.slice(startIndex, endIndex);
        }
    },

    watch: {
        $route(to, from) {
            const { page } = this.$route.params;
            if (page) this.currentPage = +page;
            console.log(to, from);
        }
    }
};
</script>

<style lang="scss" scoped>
    .news {
        margin-bottom: 96px;
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
                letter-spacing: 0.22px ; 
            }  
        }

        &-content {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: calc(($siteWidth - $articleWidth * 3) / 2);

        }   

        &-heading__blog {
            width: $siteWidth;
            box-sizing: border-box;
            margin-bottom: 30px;

            &__title {
                text-align: start;     
            }
        }   

        &-pages {
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

                &:hover {
                    background-color: $infoColor;
                }
            }
        }     
    }
</style>