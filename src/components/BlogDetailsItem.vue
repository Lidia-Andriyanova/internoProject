<template>
    <div>
        <div class="article">
            <h4 class="article__title">{{ article.name }}</h4>
            <img class="article__img" :src="require(`@/assets/${article.img}`)" alt="article">    
            <p class="article__text">{{ article.text }}</p>
        </div>        
   </div>
</template>

<script>
export default {
    name: 'BlogDetailsItem',
    props: ['article'],
};
</script>

<style lang="scss" scoped>

    .article {
        margin-bottom: 50px;

        &__title {
            color: $titleFontColor;
            font-family: 'DM Serif Display';
            font-size: 50px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%; 
            letter-spacing: 1px;
            margin-bottom: 20px;
        }

        &__img {
            width: 800px;
            margin-bottom: 40px;
        }

        &__text  {
            color: $textFontColor;
            font-family: 'Jost';
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; 
            letter-spacing: 0.22px;
        }
    }

</style>