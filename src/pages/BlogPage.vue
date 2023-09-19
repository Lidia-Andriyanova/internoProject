<template>
    <div>
        <div class="articles">
            <img class="articles__img" :src="require(`@/assets/${articlesImg}`)" alt="Articles"> 
            <div class="articles-heading">
                <h3 class="articles-heading__title">Articles & News</h3>
                <nav class="articles-heading__nav">
                    <router-link to="/main" class="articles-heading__nav__breadcrumbs" href="#">Home</router-link>
                    <router-link to="/blog" class="articles-heading__nav__breadcrumbs" href="#">Blog</router-link>
                </nav>
           </div>
        </div>        
        <section class="post center">
            <h3 class="post__title">Latest Post</h3>   
            <div class="post-content">
                <img class="post-content__img" :src="require(`@/assets/${postImg}`)" alt="Latest post">   
                <div class="post-content__info">
                    <h4 class="post-content__info__title">Low Cost Latest Invented Interior Designing Ideas</h4>
                    <p class="post-content__info__text">
                        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.                        
                    </p>
                    <p class="post-content__info__text">
                        Lorem Ipsum is not simply random text. It has roots in a piece of classica.                       
                    </p> 
                    <div class="post-content__info__page">
                        <p class="post-content__info__page__date">26 December,2022</p>
                        <router-link to="/blogdetails">
                        <button class="post-content__info__page__next">
                            <img :src="require(`@/assets/${nextImg}`)" alt="Next">                        
                        </button>
                        </router-link>
                    </div>                    
                </div>
            </div>         
        </section>    
        <NewsBlogPage/>    
    </div>
</template>

<script>
import NewsBlogPage from'../components/NewsBlogPage.vue'

export default {
    name: 'BlogPage',

    components: {
        NewsBlogPage,
    },   

    data() {
        return {
            postImg: 'post.jpg',  
            nextImg: 'next.svg',  
            articlesImg: 'articles.jpg',  
        };
    },

};
</script>


<style lang="scss" scoped>

    .articles {         
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

    .post {
        margin-bottom: 150px;

        &__title {   
            color: $titleFontColor;
            margin-bottom: 33px;
            font-family: 'DM Serif Display';
            font-size: 50px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 1px;  
        } 

        &-content {
            width: 100%;
            border-radius: 62px;
            border: 1px solid #E7E7E7;
            box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);   
            box-sizing: border-box; 
            padding: 22px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            &__img {
                border-radius: 62px;
            }
        
            &__info {
                width: 470px;
                padding-right: 40px;

                &__title {
                    color: $titleFontColor;
                    font-family: 'DM Serif Display';
                    font-size: 25px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 125%;
                    letter-spacing: 0.5px;
                    margin-bottom: 22px;
                }

                &__text {
                    color: $textFontColor;
                    font-family: 'Jost';
                    font-size: 22px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%;
                    letter-spacing: 0.22px;              
                    margin-bottom: 40px;
                }

                &__page {
                    width: 100%;
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

                        &:hover {
                           background-color: $infoColor;
                        }                        
                    }
                }
            }
        }
    }

</style>