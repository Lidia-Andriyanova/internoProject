<template>
    <div>
        <NewsItem
            v-for="newsItem in newsItems" 
                :newsItem="newsItem"
                :key="newsItem.id"
        />
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

</style>