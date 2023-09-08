<template>
    <div>
        <section :class="[$style.news, $style.center]">
            <div :class="$style.news-heading">
                <h3 :class="$style.news-heading__title">Articles & News</h3>
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

export default {
    name: 'NewsList',
    components: {
        NewsItem,
    },

    data() {
        return {
            newsItems: [
                    {
                        id: 1,
                        title: 'Let’s Get Solution For Building',
                        date: '26 December,2023',
                        category: 'Kitchan Design',
                        img: 'article1.jpg',
                    },
                    {
                        id: 2,
                        title: 'Low Cost Latest Invented Interior Designing Ideas.',
                        date: '22 December,2023',
                        category: 'Living Design',
                        img: 'article2.jpg',
                    },
                    {
                        id: 3,
                        title: 'Best For Any Office & Business Interior Solution',
                        date: '25 December,2023',
                        category: 'Interior Design',
                        img: 'article3.jpg',
                    },      
                ]            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="sass" module>
    .news
        margin-bottom: 96px
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column

        &-heading
            width: 740px
            margin-bottom: 93px

            &__title
                margin-bottom: 10px
                text-align: center
                font-family: 'DM Serif Display'
                font-size: 50px
                font-style: normal
                font-weight: 400
                line-height: 125%
                letter-spacing: 1px            
                color: red
</style>