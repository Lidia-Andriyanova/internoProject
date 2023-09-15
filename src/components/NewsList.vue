<template>
    <div>
        <section class="news center">
            <div class="news-heading">
                <h3 class="news-heading__title">Articles & News</h3>
                <p class="news-heading__text">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
            </div>
            <div class="news-content">
                    <NewsItem
                        v-for="newsItem in newsItems" 
                            :newsItem="newsItem"
                            :key="newsItem.id"
                    />
            </div>     
        </section>        
    </div>
</template>

<script>
import NewsItem from './NewsItem.vue'
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'NewsList',
    components: {
        NewsItem,
    },

    data() {
        return {
        };
    },

    methods: {
        ...mapActions(['getNews']),
        
    },

    computed: {
        ...mapGetters(['newsItems']),
    },

    created() {
        this.getNews();
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
    }
</style>