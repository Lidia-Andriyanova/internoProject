<template>
    <div class="news-content__article">
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
};
</script>

<style lang="scss" scoped>

    .news-content__article {
        width: $articleWidth;
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        border-radius: 62px;
        border: 1px solid #E7E7E7;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);   
        box-sizing: border-box; 
        position: relative;    
    
        &__img {
            width: calc($articleWidth - 10%);
            border-top-left-radius: 62px;
            border-top-right-radius: 62px;
            margin-bottom: 21px;
        }

        &__title {
            width: calc($articleWidth - 29%);
            color: $titleFontColor;
            font-family: 'DM Serif Display';
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0.5px;
            margin-bottom: 40px;
            text-align: left; 
        }      
    }
                
    .news-content__info {
      width: calc($articleWidth - 10%);
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 33px;

      &__date {
        color: $textFontColor;
        font-family: 'Jost';
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.16px;
        text-transform: capitalize;
      }

      &__next {
        color: $textFontColor;
        font-family: 'Jost';
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.16px;
        text-transform: capitalize;      
        width: 52px;
        height: 52px;
        border: none;
        border-radius: 26px;
      }
    }

    .news-content__category {
        position: absolute;
        top: 250px;
        left: 35px  ;
        border-radius: 8px 8px 8px 0px;
        background: #FFF;
        padding: 4px 5px 8px 11px;  
    } 

</style>