<template>
    <div>
        <img class="news-content__article__img" :src="require(`@/assets/${newsItem.img}`)" alt="Article"> 
        <h4 class="news-content__article__title">{{ newsItem.title }}</h4>
        <div class="news-content__info">
            <p class="news-content__info__date">{{ newsItem.date }}</p>
            <button class="news-content__info__next"><img :src="require(`@/assets/${nextImg}`)" alt="Next">                        
            </button>
        </div>
        <div class="news-content__category">
            <p class="news-content__category__text">{{ newsItem.category }}</p>
        </div>         
    </div>
</template>

<script>
export default {
    name: 'NewsItem',
    props: ['newsItem'],

    data() {
        return {
            nextImg: 'next.svg',
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