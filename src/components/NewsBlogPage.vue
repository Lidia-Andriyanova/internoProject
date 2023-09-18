<template>
    <section class="news center">
        <div class="news-heading news-heading__blog">
            <h3 class="news-heading__title news-heading__blog__title">Articles & News</h3>
        </div>
        <div class="news-content">
                <NewsItem
                    v-for="newsItem in newsItems" 
                        :newsItem="newsItem"
                        :key="newsItem.id"
                />
        </div> 
        <div class="news-pages">
            <button class="news-pages__blog">01</button>                        
            <button class="news-pages__blog">02</button>                        
            <button class="news-pages__blog">03</button>                       
            <button class="news-pages__blog">
                <img :src="require(`@/assets/${nextImg}`)" alt="Next"> 
            </button>                       
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
        };
    },

    computed: {
        ...mapGetters(['newsItems']),
    },
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
            }
        }     
    }
</style>