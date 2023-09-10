<template>
    <div :class="['project-content__product', `${projectItem.round}`]" >
        <img class="project-content__product__img" :src="require(`@/assets/${projectItem.img}`)" alt="project">    
        <div class="project-content__info">
            <div class="project-content__heading">
                <h4 class="project-content__title">{{ projectItem.title }}</h4>
                <nav class="project-content__nav">
                    <a v-for="breadcrumb in projectItem.breadcrumbs" 
                        :key="breadcrumb.id"
                        class="project-content__breadcrumbs" href="#">{{ breadcrumb }}</a>
                </nav>
            </div>  
            <button class="project-content__next"><img :src="require(`@/assets/${nextImg}`)" alt="Next">                        
            </button>
        </div>        
    </div>
</template>

<script>
export default {
    name: 'InternoProjectItem',
    props: ['projectItem'],

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

<style lang="scss" scoped>

    .project-content {

        &__info {
            margin-top: 24px;
            display: flex;
            justify-content: space-between;
        }

        &__title {
            color: $titleFontColor;
            font-family: 'DM Serif Display';
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0.5px;
        }   

        &__breadcrumbs {
            color: $textFontColor;
            font-family: 'Jost';
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.22px;

            &:not(:last-child):after {
                padding: 6px;
                color: $textFontColor;
                font-weight: 400;
                content: "/\00a0";   
            }
        }

        &__next {
            width: 70px;
            height: 70px;
            border: none;
            border-radius: 35px;        
        }
    }

    .top-right {
        img {
            border-top-right-radius: 80px;
        }
    }    

    .top-left {
        img {
            border-top-left-radius: 80px;           
        }
    }

    .bottom-right {
        img {
            border-bottom-right-radius: 80px;           
        }
    }

    .bottom-left {
        img {
            border-bottom-left-radius: 80px;
        }
    }    

</style>