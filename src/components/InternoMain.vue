<template>
    <div>
        <CommonHeader/>
        <div class="banner center">
            <div class="banner-content">
                <img :src="require(`@/assets/${bannerImg}`)" alt="Banner">
                <div class="banner-content-info">
                    <h3 class="banner-content-info__title">Let Your Home Be Unique</h3>
                    <p class="banner-content-info__text">There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
                    <a href="#" class="banner-content-info__link">Get Started<img :src="require(`@/assets/${arrowImg}`)" alt="Arrow"></a>
                </div>
            </div>    
        </div>
        <InternoProjectList/>        
        <div class="counter">
            <div class="counter-content center">
                <div class="counter-content__info">
                    <h4 class="counter-content__info__title">12</h4>
                    <p class="counter-content__info__text">Years Of Experiance</p>
                </div>
                <div class="counter-content__info">
                    <h4 class="counter-content__info__title">85</h4>
                    <p class="counter-content__info__text">Success Project</p>
                </div>
                <div class="counter-content__info">
                    <h4 class="counter-content__info__title">15</h4>
                    <p class="counter-content__info__text">Active Project</p>
                </div>
                <div class="counter-content__info">
                    <h4 class="counter-content__info__title">95</h4>
                    <p class="counter-content__info__text">Happy CUstomers</p>
                </div>
            </div>
        </div>        
        <NewsList/>
        <CommonFooter/>
    </div>
</template>

<script>
import NewsList from './NewsList.vue'
import CommonHeader from './CommonHeader.vue'
import CommonFooter from './CommonFooter.vue'
import InternoProjectList from './InternoProjectList.vue';

export default {
    name: 'InternoMain',

    components: {
        NewsList,
        CommonHeader,
        CommonFooter,
        InternoProjectList,
    },   

    data() {
        return {
            bannerImg: 'banner.jpg',  
            arrowImg: 'arrow.svg',  
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

    .banner {
        margin-bottom: 100px;

        &-content {
            position: relative;

            img {
                border-radius: 60px;
            }

            &-info {
                position: relative;
                width: 434px;
                position: absolute;
                top: 180px;
                left: 50px;

                &__title {
                    margin-bottom: 18px;
                    color: $titleFontColor;
                    font-family: 'DM Serif Display';
                    font-size: 65px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 125%;
                }

                &__text {
                    margin-bottom: 46px;
                    color: $textFontColor;
                    font-family: 'Jost';
                    font-size: 22px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%;
                    letter-spacing: 0.22px;
                }

                &__link {
                    padding: 26px 48px;
                    color: #FFF;
                    text-align: center;
                    font-family: 'Jost';
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 125%;
                    letter-spacing: 0.36px;
                    border-radius: 18px;
                    background: $titleFontColor;
                    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.5);

                    img {
                        padding-left: 10px; 
                        padding-top: 10px; 
                    }
                }
            }
        }
    }
    .counter {
        background-color: $backgroundColor;
        padding-top: 150px;
        padding-bottom: 150px;
        margin-bottom: 96px;

        &-content {
            display: flex;
            justify-content: space-around;

            &__info {
                width: 290px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;

                 &:not(:last-child) {
                     border-right: solid 3px $infoColor;
                }

                &__title {
                    color: $infoColor;
                    font-family: 'DM Serif Display';
                    font-size: 85px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 125%;
                    letter-spacing: 1.7px;
                }

                &__text {
                    color: $textFontColor;
                    font-family: 'Jost';
                    font-size: 22px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%;
                    letter-spacing: 0.22px; 
                }  
            }
        }
    }     
                
</style>